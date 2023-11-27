using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.SkillService
{
    public interface ISkillService
    {
        Task<Skill> CreateSkill(SkillDto skillDto);
        Task<Skill?> UpdateSkill(Guid id, SkillDto skillDto);
        Task<List<Skill>> GetAllSkills();
        Task<Skill?> GetSkillById(Guid id);
        Task<Skill?> DeleteSkill(Guid id);
    }
}
