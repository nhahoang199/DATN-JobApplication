using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CompanyAddressService
{
    public interface ICompanyAddressService
    {
        Task<CompanyAddress> CreateCompanyAddress(CompanyAddressDto companyAddressDto);
        Task<CompanyAddress?> UpdateCompanyAddress(Guid id, CompanyAddressDto companyAddressDto);
        Task<List<CompanyAddress>> GetAllCompanyAddresss();
        Task<CompanyAddress?> GetCompanyAddressById(Guid id);
        Task<CompanyAddress?> DeleteCompanyAddress(Guid id);
    }
}
