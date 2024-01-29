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

        public async Task<PagedList<ProvinceDto>> GetAll(PaginationParameters paginationParameters)
        {
            var provinceList = _dbContext.Province.Include(p => p.Country).Select(p => new ProvinceDto
            {
                Id = p.Id,
                Name = p.Name,
                CountryId = p.CountryId,
                CreatedOn = p.CreatedOn,
                UpdatedOn = p.UpdatedOn,
                CountryName = p.Country.Name,
            }).AsQueryable();
            //var result = from p in _dbContext.Province
            //             select new
            //             {
            //                 Id = p.Id,
            //                 Name = p.Name,
            //                 CountryName = p.Country.Name, // Assuming Country is a navigation property on Province
            //                 CountryId = p.CountryId,
            //                 CreatedOn = p.CreatedOn,
            //                 UpdatedOn = p.UpdatedOn,
            //             };

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<ProvinceDto, object>>)(x => x.Name);

            return await PagedList<ProvinceDto>.ToPagedList(provinceList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
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

        public async Task<List<Province>> GetProvincesByCountryId(Guid countryId)
        {
            return await _dbContext.Province.Include(p => p.Country).Select(p => new Province
            {
                Id = p.Id,
                Name = p.Name,
                CountryId = p.CountryId,
                CreatedOn = p.CreatedOn,
                UpdatedOn = p.UpdatedOn,
            }).Where(item => item.CountryId == countryId).ToListAsync();
        }
    }
}
