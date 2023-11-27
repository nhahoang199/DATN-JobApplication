using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.SkillRepo
{
    public interface ISkillRepo
    {
        Task<Skill> Create(Skill skill);
        Task<Skill> Update(Skill skill);
        Task<List<Skill>> GetAll();
        Task<Skill?> GetById(Guid id);
        Task<Skill?> Delete(Guid id);
    }
}
