using JobApplicationProject.Models;

namespace JobApplicationProject.Repositories.UserRepo
{
    public interface IUserRepository
    {
        User Create(User account);
        User GetByEmail(string accountName);
        User GetById(Guid id);
    }
}
