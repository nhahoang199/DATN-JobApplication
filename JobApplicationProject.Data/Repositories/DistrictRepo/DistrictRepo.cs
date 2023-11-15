using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.DistrictRepo
{
    public class DistrictRepo : IDistrictRepo
    {
        private readonly DBContext _dbContext;
        public DistrictRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<District> Create(District district)
        {
            await _dbContext.District.AddAsync(district);
            await _dbContext.SaveChangesAsync();
            return district;
        }

        public async Task<District> Update(District district)
        {
            _dbContext.District.Update(district);
            await _dbContext.SaveChangesAsync();
            return district;
        }

        public async Task<List<District>> GetAll()
        {
            return await _dbContext.District.ToListAsync();
        }

        public async Task<District?> GetById(Guid id)
        {
            return await _dbContext.District.FindAsync(id);
        }

        public async Task<District?> Delete(Guid id)
        {
            var district = await _dbContext.District.FindAsync(id);
            if (district != null)
            {
                _dbContext.District.Remove(district);
                await _dbContext.SaveChangesAsync();
            }
            return district;
        }
    }
}
