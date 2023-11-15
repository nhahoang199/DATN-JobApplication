using JobApplicationProject.Data;
using JobApplicationProject.Service.Services.UserService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class UserController : ControllerBase
    {
        private readonly DBContext _userContext;
        private readonly IUserService _userService;
        public UserController(DBContext userContext, IUserService userService)
        {
            _userContext = userContext;
            _userService = userService;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userContext.Users.ToList();
            return Ok(users);
        }

    }
}
