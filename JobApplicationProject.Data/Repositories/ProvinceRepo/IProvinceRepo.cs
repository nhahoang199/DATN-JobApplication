using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.ProvinceRepo
{
    public interface IProvinceRepo
    {
        Task<Province> Create(Province province);
        Task<Province> Update(Province province);
        Task<List<Province>> GetAll();
        Task<Province?> GetById(Guid id);
        Task<Province?> Delete(Guid id);
    }
}
