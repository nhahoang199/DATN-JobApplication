using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CompanyRepo
{
    public interface ICompanyRepo
    {
        Task<Company> Create(Company company);
        Task<Company> Update(Company company);
        Task<List<Company>> GetAll();
        Task<Company?> GetById(Guid id);
        Task<Company?> Delete(Guid id);
    }
}
