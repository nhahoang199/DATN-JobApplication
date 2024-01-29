using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.RatingRepo
{
    public class RatingRepo : IRatingRepo
    {
        private readonly DBContext _dbContext;
        public RatingRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Rating> Create(Rating rating)
        {
            await _dbContext.Rating.AddAsync(rating);
            await _dbContext.SaveChangesAsync();
            return rating;
        }

        public async Task<Rating> Update(Rating rating)
        {
            _dbContext.Rating.Update(rating);
            await _dbContext.SaveChangesAsync();
            return rating;
        }

        public async Task<List<Rating>> GetAll()
        {
            return await _dbContext.Rating.ToListAsync();
        }

        public async Task<Rating?> GetById(Guid id)
        {
            return await _dbContext.Rating.FindAsync(id);
        }

        public async Task<Rating?> Delete(Guid id)
        {
            var rating = await _dbContext.Rating.FindAsync(id);
            if (rating != null)
            {
                _dbContext.Rating.Remove(rating);
                await _dbContext.SaveChangesAsync();
            }
            return rating;
        }
    }
}
