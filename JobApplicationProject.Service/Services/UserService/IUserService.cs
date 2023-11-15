using JobApplicationProject.Core.Models;

namespace JobApplicationProject.Service.Services.UserService
{
    public interface IUserService
    {
        Task<User> Create(User user);
        Task<User?> GetByEmail(string email);
        Task<User?> GetById(Guid id);
        string? GetMyName();
    }
}
