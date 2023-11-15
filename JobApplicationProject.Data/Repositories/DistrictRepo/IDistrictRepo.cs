using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.DistrictRepo
{
    public interface IDistrictRepo
    {
        Task<District> Create(District district);
        Task<District> Update(District district);
        Task<List<District>> GetAll();
        Task<District?> GetById(Guid id);
        Task<District?> Delete(Guid id);
    }
}
