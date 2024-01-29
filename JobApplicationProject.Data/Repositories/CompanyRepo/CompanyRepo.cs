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
            var existingCompany = await _dbContext.Company.FindAsync(company.Id);

            if (existingCompany == null)
            {
                // Không tìm thấy đối tượng cần cập nhật
                return null; // hoặc throw exception tùy theo yêu cầu của bạn
            }

            // Copy dữ liệu từ company đã đưa vào existingCompany
            _dbContext.Entry(existingCompany).CurrentValues.SetValues(company);

            await _dbContext.SaveChangesAsync();

            return existingCompany;
        }

        public async Task<PagedList<Company>> GetAll(PaginationParameters paginationParameters)
        {
            var companyList = _dbContext.Company.AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<Company, object>>)(x => x.Name);

            return await PagedList<Company>.ToPagedList(companyList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
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

        public async Task<List<Company>> SearchByName(string name)
        {
            var companyList = await _dbContext.Company.Where(item => item.Name.ToLower().Contains(name)).ToListAsync<Company>();
            return companyList;
        }
    }
}
