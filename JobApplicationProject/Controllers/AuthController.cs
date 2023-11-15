using JobApplicationProject.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;
using JobApplicationProject.Core.Dtos;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using JobApplicationProject.Service.Helpers.JwtService;
using JobApplicationProject.Service.Services.UserService;
using System.Security.Cryptography;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;
using JobApplicationProject.Service.Validation;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IJwtService _jwtService;
        private readonly UserValidator _validations;

        public AuthController(IUserService userService, IJwtService jwtService, UserValidator validations)
        {
            _userService = userService;
            _jwtService = jwtService;
            _validations = validations;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            var user = new User()
            {
                Name = registerDto.Name,
                Email = registerDto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(registerDto.Password)
            };
            if (!_validations.Validate(user).IsValid) return BadRequest(_validations.Validate(user).Errors);

            return Created("Register successfully", await _userService.Create(user));
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var user = await _userService.GetByEmail(dto.Email);

            if (user == null)
                return BadRequest("Invalid Credentials");

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
                return BadRequest("Invalid Credentials");

            var jwt = _jwtService.CreateToken(user);

            var refreshToken = GenerateRefreshToken();
            SetRefreshToken(refreshToken, user);
            return Ok(jwt);
        }
        [HttpPost("refresh-token")]
        public ActionResult<string> RefreshToken(User user)
        {
            var refreshToken = Request.Cookies["refreshToken"];

            if (!user.RefreshToken.Equals(refreshToken))
            {
                return Unauthorized("Invalid Refresh Token.");
            }
            else if (user.TokenExpires < DateTime.Now)
            {
                return Unauthorized("Token expired.");
            }

            string token = _jwtService.CreateToken(user);
            var newRefreshToken = GenerateRefreshToken();

            SetRefreshToken(newRefreshToken, user);

            return Ok(token);
        }
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");
            return Ok("Logout successfully");
        }

        [HttpGet("getme"), Authorize]
        public ActionResult<object> GetMe()
        {
            var userName = _userService.GetMyName();
            return Ok(new { userName });
        }

        private void SetRefreshToken(RefreshToken newRefreshToken, User user)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

            user.RefreshToken = newRefreshToken.Token;
            user.TokenCreated = newRefreshToken.Created;
            user.TokenExpires = newRefreshToken.Expires;
        }

        private RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddDays(7),
                Created = DateTime.Now
            };

            return refreshToken;
        }
    }
}
