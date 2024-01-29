using JobApplicationProject.Data.Repositories.UserRepo;
using JobApplicationProject.Core.Models;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using JobApplicationProject.Service.Validation;
using Microsoft.AspNetCore.Http.HttpResults;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Dtos;

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
        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _userRepository.GetByEmailAsync(email);
        }
        public User GetByEmail(string email)
        {
            return _userRepository.GetByEmail(email);
        }
        public async Task<User?> GetById(Guid id)
        {
            return await _userRepository.GetById(id);
        }
        public User GetMe()
        {
            var result = new User();

            if (_httpContextAccessor.HttpContext != null)
            {
                var userName = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
                var userRole = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Role);
                var userEmail = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
                result.Name = userName ?? string.Empty;
                result.Role = userRole ?? string.Empty;
                result.Email = userEmail ?? string.Empty;
            }
            return result;
        }

        public async Task<PagedList<UserDto>> GetAllUsers(PaginationParameters paginationParameters)
        {
            return await _userRepository.GetAllUsers(paginationParameters);
        }

        public async Task<List<User>> GetUserByCompanyId(Guid companyId)
        {
            return await _userRepository.GetUserByCompanyId(companyId);
        }

        public async Task<UserDto?> GetUserDetailsById(Guid id)
        {
            var user = _userRepository.GetById(id).Result;
            return new UserDto()
            {
                Name = user.Name,
                Email = user.Email,
                CompanyId = user.CompanyId,
                CompanyName = user.Company.Name,
                CompanyAvatar = user.Company.AvatarPicture,
                Gender = (int)user.Gender,
                DateOfBirth = (DateTime)user.DateOfBirth,
                PhoneNumber = user.PhoneNumber,
                Password = user.Password,
                Role = user.Role,
                ProfilePicture = user.ProfilePicture,
                Status = user.Status,
                AddressId = user.AddressId
            };
        }
    }
}
