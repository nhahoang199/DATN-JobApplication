using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CompanyAddressRepo
{
    public class CompanyAddressRepo : ICompanyAddressRepo
    {
        private readonly DBContext _dbContext;
        public CompanyAddressRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<CompanyAddress> Create(CompanyAddress companyAddress)
        {
            await _dbContext.CompanyAddress.AddAsync(companyAddress);
            await _dbContext.SaveChangesAsync();
            return companyAddress;
        }

        public async Task<CompanyAddress> Update(CompanyAddress companyAddress)
        {
            _dbContext.CompanyAddress.Update(companyAddress);
            await _dbContext.SaveChangesAsync();
            return companyAddress;
        }

        public async Task<List<CompanyAddress>> GetAll()
        {
            return await _dbContext.CompanyAddress.ToListAsync();
        }

        public async Task<CompanyAddress?> GetById(Guid id)
        {
            return await _dbContext.CompanyAddress.FindAsync(id);
        }

        public async Task<CompanyAddress?> Delete(Guid id)
        {
            var companyAddress = await _dbContext.CompanyAddress.FindAsync(id);
            if (companyAddress != null)
            {
                _dbContext.CompanyAddress.Remove(companyAddress);
                await _dbContext.SaveChangesAsync();
            }
            return companyAddress;
        }
    }
}
