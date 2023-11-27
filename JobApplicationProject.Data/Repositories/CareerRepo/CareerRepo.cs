using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CareerRepo
{
    public class CareerRepo : ICareerRepo
    {
        private readonly DBContext _dbContext;
        public CareerRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Career> Create(Career career)
        {
            await _dbContext.Career.AddAsync(career);
            await _dbContext.SaveChangesAsync();
            return career;
        }

        public async Task<Career> Update(Career career)
        {
            _dbContext.Career.Update(career);
            await _dbContext.SaveChangesAsync();
            return career;
        }

        public async Task<List<Career>> GetAll()
        {
            return await _dbContext.Career.ToListAsync();
        }

        public async Task<Career?> GetById(Guid id)
        {
            return await _dbContext.Career.FindAsync(id);
        }

        public async Task<Career?> Delete(Guid id)
        {
            var career = await _dbContext.Career.FindAsync(id);
            if (career != null)
            {
                _dbContext.Career.Remove(career);
                await _dbContext.SaveChangesAsync();
            }
            return career;
        }
    }
}
