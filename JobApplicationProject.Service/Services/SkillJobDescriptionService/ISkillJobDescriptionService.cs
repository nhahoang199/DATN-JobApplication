using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.SkillJobDescriptionService
{
    public interface ISkillJobDescriptionService
    {
        Task<SkillJobDescription> CreateSkillJobDescription(SkillJobDescriptionDto skillJobDescriptionDto);
        Task<SkillJobDescription?> UpdateSkillJobDescription(Guid id, SkillJobDescriptionDto skillJobDescriptionDto);
        Task<List<SkillJobDescription>> GetAllSkillJobDescriptions();
        Task<SkillJobDescription?> GetSkillJobDescriptionById(Guid id);
        Task<SkillJobDescription?> DeleteSkillJobDescription(Guid id);
    }
}
