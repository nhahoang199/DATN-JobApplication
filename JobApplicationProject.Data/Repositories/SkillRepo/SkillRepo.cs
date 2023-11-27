using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.SkillRepo
{
    public class SkillRepo : ISkillRepo
    {
        private readonly DBContext _dbContext;
        public SkillRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Skill> Create(Skill skill)
        {
            await _dbContext.Skill.AddAsync(skill);
            await _dbContext.SaveChangesAsync();
            return skill;
        }

        public async Task<Skill> Update(Skill skill)
        {
            _dbContext.Skill.Update(skill);
            await _dbContext.SaveChangesAsync();
            return skill;
        }

        public async Task<List<Skill>> GetAll()
        {
            return await _dbContext.Skill.ToListAsync();
        }

        public async Task<Skill?> GetById(Guid id)
        {
            return await _dbContext.Skill.FindAsync(id);
        }

        public async Task<Skill?> Delete(Guid id)
        {
            var skill = await _dbContext.Skill.FindAsync(id);
            if (skill != null)
            {
                _dbContext.Skill.Remove(skill);
                await _dbContext.SaveChangesAsync();
            }
            return skill;
        }
    }
}
