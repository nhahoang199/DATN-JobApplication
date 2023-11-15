using JobApplicationProject.Data.Repositories.UserRepo;
using JobApplicationProject.Core.Models;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using JobApplicationProject.Service.Validation;
using Microsoft.AspNetCore.Http.HttpResults;

namespace JobApplicationProject.Service.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserService(IUserRepository userRepository, IHttpContextAccessor httpContextAccessor)
        {
            _userRepository = userRepository;
            _httpContextAccessor = httpContextAccessor;
        }
        public async Task<User> Create(User user)
        {
            return await _userRepository.Create(user);
        }
        public async Task<User?> GetByEmail(string email)
        {
            return await _userRepository.GetByEmail(email);
        }
        public async Task<User?> GetById(Guid id)
        {
            return await _userRepository.GetById(id);
        }
        public string GetMyName()
        {
            string result = string.Empty;
            if (_httpContextAccessor.HttpContext != null)
            {
                var userClaim = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                result = userClaim ?? string.Empty;
            }
            return result;
        }
    }
}
