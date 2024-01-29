using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;

namespace JobApplicationProject.Service.Services.UserService
{
    public interface IUserService
    {
        Task<User> Create(User user);
        User GetByEmail(string email);
        Task<User?> GetByEmailAsync(string email);
        Task<PagedList<UserDto>> GetAllUsers(PaginationParameters paginationParameters);
        Task<List<User>> GetUserByCompanyId(Guid companyId);
        Task<User?> GetById(Guid id);
        Task<UserDto?> GetUserDetailsById(Guid id);
        User GetMe();
    }
}
