using JobApplicationProject.Data;
using JobApplicationProject.Models;

namespace JobApplicationProject.Repositories.UserRepo
{
    public class UserRepository : IUserRepository
    {
        private readonly UserContext _userContext;
        public UserRepository(UserContext context)
        {
            _userContext = context;
        }

        public User Create(User user)
        {
            _userContext.Users.Add(user);
            _userContext.SaveChanges();
            return user;
        }
        public User GetByEmail(string email)
        {
            return _userContext.Users.FirstOrDefault(u => u.Email == email);
        }
        public User GetById(Guid id)
        {
            return _userContext.Users.FirstOrDefault(u => u.Id == id);
        }
    }
}
