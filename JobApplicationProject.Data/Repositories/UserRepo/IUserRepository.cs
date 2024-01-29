
using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;

namespace JobApplicationProject.Data.Repositories.UserRepo
{
    public interface IUserRepository
    {
        Task<User> Create(User account);
        Task<PagedList<UserDto>> GetAllUsers(PaginationParameters paginationParameters);
        Task<List<User>> GetUserByCompanyId(Guid companyId);
        User GetByEmail(string accountName);
        Task<User?> GetByEmailAsync(string accountName);
        Task<User?> GetById(Guid id);
    }
}
