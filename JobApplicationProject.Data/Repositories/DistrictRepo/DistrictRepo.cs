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

        public async Task<PagedList<DistrictDto>> GetAll(PaginationParameters paginationParameters)
        {
            var districtList = _dbContext.District.Include(p => p.Province).Select(p => new DistrictDto
            {
                Id = p.Id,
                Name = p.Name,
                ProvinceId = p.ProvinceId,
                ProvinceName = p.Province.Name,
                CreatedOn = p.CreatedOn,
                UpdatedOn = p.UpdatedOn,
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<DistrictDto, object>>)(x => x.Name);

            return await PagedList<DistrictDto>.ToPagedList(districtList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }

        public async Task<District?> GetById(Guid id)
        {
            var district = await _dbContext.District.FindAsync(id);
            return district;
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

        public async Task<List<District>> GetDistrictsByProviceId(Guid provinceId)
        {
            return await _dbContext.District.Where(item => item.ProvinceId == provinceId).ToListAsync();
        }
    }
}
