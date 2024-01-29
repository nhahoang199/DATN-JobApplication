using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.SkillJobApplicationRepo
{
    public interface ISkillJobDescriptionRepo
    {
        Task<SkillJobDescription> Create(SkillJobDescription skillJobDescription);
        Task<SkillJobDescription> Update(SkillJobDescription skillJobDescription);
        Task<List<SkillJobDescription>> GetAll();
        Task<SkillJobDescription?> GetById(Guid id);
        Task<SkillJobDescription?> Delete(Guid id);
    }
}
