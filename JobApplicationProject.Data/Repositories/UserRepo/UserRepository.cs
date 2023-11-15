using JobApplicationProject.Core.Models;
using JobApplicationProject.Data;
using Microsoft.EntityFrameworkCore;

namespace JobApplicationProject.Data.Repositories.UserRepo
{
    public class UserRepository : IUserRepository
    {
        private readonly DBContext _dbContext;
        public UserRepository(DBContext context)
        {
            _dbContext = context;
        }

        public async Task<User> Create(User user)
        {
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return user;
        }
        public async Task<User?> GetByEmail(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
        public async Task<User?> GetById(Guid id)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == id);
        }
    }
}
