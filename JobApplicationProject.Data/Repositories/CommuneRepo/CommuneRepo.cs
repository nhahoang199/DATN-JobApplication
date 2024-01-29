using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Drawing.Printing;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CommuneRepo
{
    public class CommuneRepo : ICommuneRepo
    {
        private readonly DBContext _dbContext;
        public CommuneRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Commune> Create(Commune commune)
        {
            await _dbContext.Commune.AddAsync(commune);
            await _dbContext.SaveChangesAsync();
            return commune;
        }

        public async Task<Commune> Update(Commune commune)
        {
            _dbContext.Commune.Update(commune);
            await _dbContext.SaveChangesAsync();
            return commune;
        }

        public async Task<PagedList<CommuneDto>> GetAll(PaginationParameters paginationParameters)
        {
            var communeList = _dbContext.Commune.Include(p => p.District).Select(p => new CommuneDto
            {
                Id = p.Id,
                Name = p.Name,
                DistrictId = p.DistrictId,
                DistrictName = p.District.Name,
                CreatedOn = p.CreatedOn,
                UpdatedOn = p.UpdatedOn,
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            // Example with custom ordering by a property named "SomeProperty"
            var orderBy = (Expression<Func<CommuneDto, object>>)(x => x.Name);

            return await PagedList<CommuneDto>.ToPagedList(communeList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }

        public async Task<Commune?> GetById(Guid id)
        {
            return await _dbContext.Commune.FindAsync(id);
        }

        public async Task<Commune?> Delete(Guid id)
        {
            var commune = await _dbContext.Commune.FindAsync(id);
            if (commune != null)
            {
                _dbContext.Commune.Remove(commune);
                await _dbContext.SaveChangesAsync();
            }
            return commune;
        }

        public async Task<List<Commune>> GetCommuneByDistrictId(Guid districtId)
        {
            return await _dbContext.Commune.Where(item => item.DistrictId == districtId).ToListAsync();
        }
    }
}
