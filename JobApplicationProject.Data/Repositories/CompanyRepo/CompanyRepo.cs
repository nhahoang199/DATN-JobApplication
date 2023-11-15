using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CompanyRepo
{
    public class CompanyRepo : ICompanyRepo
    {
        private readonly DBContext _dbContext;
        public CompanyRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Company> Create(Company company)
        {
            await _dbContext.Company.AddAsync(company);
            await _dbContext.SaveChangesAsync();
            return company;
        }

        public async Task<Company> Update(Company company)
        {
            _dbContext.Company.Update(company);
            await _dbContext.SaveChangesAsync();
            return company;
        }

        public async Task<List<Company>> GetAll()
        {
            return await _dbContext.Company.ToListAsync();
        }

        public async Task<Company?> GetById(Guid id)
        {
            return await _dbContext.Company.FindAsync(id);
        }

        public async Task<Company?> Delete(Guid id)
        {
            var company = await _dbContext.Company.FindAsync(id);
            if (company != null)
            {
                _dbContext.Company.Remove(company);
                await _dbContext.SaveChangesAsync();
            }
            return company;
        }
    }
}
