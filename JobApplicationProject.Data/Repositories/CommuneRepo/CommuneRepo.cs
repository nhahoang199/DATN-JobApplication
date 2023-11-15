using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<Commune>> GetAll()
        {
            return await _dbContext.Commune.ToListAsync();
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
    }
}
