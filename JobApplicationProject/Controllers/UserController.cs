using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data;
using JobApplicationProject.Service.Services.UserService;
using JobApplicationProject.Service.Validation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.ComponentModel.Design;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Model;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles = "Admin")]
    public class UserController : ControllerBase
    {
        private readonly DBContext _userContext;
        private readonly UserValidator _validations;
        private readonly IUserService _userService;
        public UserController(DBContext userContext, IUserService userService, UserValidator validations)
        {
            _userContext = userContext;
            _userService = userService;
            _validations = validations;

        }
        [HttpGet]
        public async Task<IActionResult> GetAllUsers([FromQuery] PaginationParameters paginationParameters)
        {
            var users = await _userService.GetAllUsers(paginationParameters);
            return Ok(new ResponseModel<UserDto>(users, users.GetPagination()));
        }
        [HttpGet("getUserByCompanyId")]
        public async Task<IActionResult> GetUsersByCompanyId(Guid companyId)
        {
            var users = await _userService.GetUserByCompanyId(companyId);
            return Ok(users);
        }
        [HttpGet("getDetails")]
        public async Task<IActionResult> GetUserDetailsById(Guid id)
        {
            var users = await _userService.GetUserDetailsById(id);
            return Ok(users);
        }
        [HttpPost]
        public async Task<IActionResult> CreateUser(UserDto userDto)
        {
            var user = new User()
            {
                Name = userDto.Name,
                Email = userDto.Email,
                CompanyId = userDto.CompanyId,
                Gender = (int)userDto.Gender,
                DateOfBirth = (DateTime)userDto.DateOfBirth,
                PhoneNumber = userDto.PhoneNumber,
                Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password),
                Role = userDto.Role,
                ProfilePicture = userDto.ProfilePicture,
                Status = 1,
                AddressId = userDto.AddressId
            };
            if (!_validations.Validate(user).IsValid) return BadRequest(_validations.Validate(user).Errors);
            return Created("Create User successfully", await _userService.Create(user));

        }
    }
}
