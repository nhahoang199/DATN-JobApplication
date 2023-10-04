using JobApplicationProject.Models;

namespace JobApplicationProject.Services.UserService
{
    public interface IUserService
    {
        User Create(User user);
        User GetByEmail(string email);
        User GetById(Guid id);
    }
}
