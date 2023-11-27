using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.SkillRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.SkillService
{
    public class SkillService : ISkillService
    {
        private readonly ISkillRepo _skillRepo;

        public SkillService(ISkillRepo skillRepo)
        {
            _skillRepo = skillRepo;
        }

        public async Task<Skill> CreateSkill(SkillDto skillDto)
        {
            var skill = new Skill()
            {
                Id = Guid.NewGuid(),
                Name = skillDto.Name,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            return await _skillRepo.Create(skill);
        }

        public async Task<Skill?> UpdateSkill(Guid id, SkillDto skillDto)
        {
            var existingSkill = await _skillRepo.GetById(id);

            if (existingSkill == null) throw new InvalidOperationException("Skill not found");

            existingSkill.Name = skillDto.Name;
            existingSkill.UpdatedOn = DateTime.UtcNow;

            return await _skillRepo.Update(existingSkill);
        }

        public async Task<List<Skill>> GetAllSkills()
        {
            return await _skillRepo.GetAll();
        }

        public async Task<Skill?> GetSkillById(Guid id)
        {
            return await _skillRepo.GetById(id);
        }

        public async Task<Skill?> DeleteSkill(Guid id)
        {
            return await _skillRepo.Delete(id);
        }
    }
}
