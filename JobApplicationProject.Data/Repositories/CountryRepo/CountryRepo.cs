using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CountryRepo
{
    public class CountryRepo : ICountryRepo
    {
        private readonly DBContext _dbContext;
        public CountryRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Country> Create(Country country)
        {
            await _dbContext.Country.AddAsync(country);
            await _dbContext.SaveChangesAsync();
            return country;
        }

        public async Task<Country> Update(Country country)
        {
            _dbContext.Country.Update(country);
            await _dbContext.SaveChangesAsync();
            return country;
        }

        public async Task<List<Country>> GetAll()
        {
            return await _dbContext.Country.ToListAsync();
        }

        public async Task<Country?> GetById(Guid id)
        {
            return await _dbContext.Country.FindAsync(id);
        }

        public async Task<Country?> Delete(Guid id)
        {
            var country = await _dbContext.Country.FindAsync(id);
            if (country != null)
            {
                _dbContext.Country.Remove(country);
                await _dbContext.SaveChangesAsync();
            }
            return country;
        }
    }
}
