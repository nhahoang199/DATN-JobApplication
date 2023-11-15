
using JobApplicationProject.Core.Models;

namespace JobApplicationProject.Data.Repositories.UserRepo
{
    public interface IUserRepository
    {
        Task<User> Create(User account);
        Task<User?> GetByEmail(string accountName);
        Task<User?> GetById(Guid id);
    }
}
