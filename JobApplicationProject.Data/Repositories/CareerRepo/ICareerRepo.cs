using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CareerRepo
{
    public interface ICareerRepo
    {
        Task<Career> Create(Career career);
        Task<Career> Update(Career career);
        Task<List<Career>> GetAll();
        Task<Career?> GetById(Guid id);
        Task<Career?> Delete(Guid id);
    }
}
