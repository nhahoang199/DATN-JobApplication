using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CompanyAddressRepo
{
    public interface ICompanyAddressRepo
    {
        Task<CompanyAddress> Create(CompanyAddress companyAddress);
        Task<CompanyAddress> Update(CompanyAddress companyAddress);
        Task<List<CompanyAddress>> GetAll();
        Task<CompanyAddress?> GetById(Guid id);
        Task<CompanyAddress?> Delete(Guid id);
    }
}
