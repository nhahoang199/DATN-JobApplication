using JobApplicationProject.Models;
using JobApplicationProject.Repositories.UserRepo;

namespace JobApplicationProject.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public User Create(User user)
        {
            return _userRepository.Create(user);
        }
        public User GetByEmail(string email)
        {
            return _userRepository.GetByEmail(email);
        }
        public User GetById(Guid id)
        {
            return _userRepository.GetById(id);
        }
    }
}
