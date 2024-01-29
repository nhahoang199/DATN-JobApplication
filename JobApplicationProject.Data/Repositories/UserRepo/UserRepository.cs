using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

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
        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }
        public async Task<PagedList<UserDto>> GetAllUsers(PaginationParameters paginationParameters)
        {
            var userList = _dbContext.Users.Include(p => p.Company).Select(p => new UserDto()
            {
                Name = p.Name,
                Email = p.Email,
                CompanyId = p.CompanyId,
                CompanyName = p.Company.Name,
                CompanyAvatar = p.Company.AvatarPicture,
                Gender = (int)p.Gender,
                DateOfBirth = (DateTime)p.DateOfBirth,
                PhoneNumber = p.PhoneNumber,
                //Password = BCrypt.Net.BCrypt.HashPassword(p.Password),
                Role = p.Role,
                ProfilePicture = p.ProfilePicture,
                Status = p.Status,
                AddressId = p.AddressId,
                Id = p.Id
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<UserDto, object>>)(x => x.Name);

            return await PagedList<UserDto>.ToPagedList(userList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }
        public async Task<List<User>> GetUserByCompanyId(Guid companyId)
        {
            return await _dbContext.Users.Where(item => item.CompanyId == companyId).ToListAsync();
        }
        public User GetByEmail(string email)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Email == email);
        }
        public async Task<User?> GetById(Guid id)
        {
            return await _dbContext.Users.Include(p => p.Company).FirstOrDefaultAsync(u => u.Id == id);
        }
    }
}
