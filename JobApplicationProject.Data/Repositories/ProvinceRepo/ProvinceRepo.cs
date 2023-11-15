using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.ProvinceRepo
{
    public class ProvinceRepo : IProvinceRepo
    {
        private readonly DBContext _dbContext;
        public ProvinceRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Province> Create(Province province)
        {
            await _dbContext.Province.AddAsync(province);
            await _dbContext.SaveChangesAsync();
            return province;
        }

        public async Task<Province> Update(Province province)
        {
            _dbContext.Province.Update(province);
            await _dbContext.SaveChangesAsync();
            return province;
        }

        public async Task<List<Province>> GetAll()
        {
            return await _dbContext.Province.ToListAsync();
        }

        public async Task<Province?> GetById(Guid id)
        {
            return await _dbContext.Province.FindAsync(id);
        }

        public async Task<Province?> Delete(Guid id)
        {
            var province = await _dbContext.Province.FindAsync(id);
            if (province != null)
            {
                _dbContext.Province.Remove(province);
                await _dbContext.SaveChangesAsync();
            }
            return province;
        }
    }
}
