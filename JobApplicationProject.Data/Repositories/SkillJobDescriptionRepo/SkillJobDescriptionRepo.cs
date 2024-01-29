using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.SkillJobApplicationRepo;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.SkillJobDescriptionRepo
{
    public class SkillJobDescriptionRepo : ISkillJobDescriptionRepo
    {
        private readonly DBContext _dbContext;
        public SkillJobDescriptionRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<SkillJobDescription> Create(SkillJobDescription skillJobDescription)
        {
            await _dbContext.SkillJobDescription.AddAsync(skillJobDescription);
            await _dbContext.SaveChangesAsync();
            return skillJobDescription;
        }

        public async Task<SkillJobDescription> Update(SkillJobDescription skillJobDescription)
        {
            _dbContext.SkillJobDescription.Update(skillJobDescription);
            await _dbContext.SaveChangesAsync();
            return skillJobDescription;
        }

        public async Task<List<SkillJobDescription>> GetAll()
        {
            return await _dbContext.SkillJobDescription.ToListAsync();
        }

        public async Task<SkillJobDescription?> GetById(Guid id)
        {
            return await _dbContext.SkillJobDescription.FindAsync(id);
        }

        public async Task<SkillJobDescription?> Delete(Guid id)
        {
            var skillJobDescription = await _dbContext.SkillJobDescription.FindAsync(id);
            if (skillJobDescription != null)
            {
                _dbContext.SkillJobDescription.Remove(skillJobDescription);
                await _dbContext.SaveChangesAsync();
            }
            return skillJobDescription;
        }
    }
}
