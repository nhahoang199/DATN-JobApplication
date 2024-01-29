using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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

        public async Task<PagedList<Country>> GetAll(PaginationParameters paginationParameters)
        {
            var countryList = _dbContext.Country.AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<Country, object>>)(x => x.Name);

            return await PagedList<Country>.ToPagedList(countryList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
            //return await _dbContext.Country.ToListAsync();
        }
        public async Task<List<Country>> GetAllCountry()
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
