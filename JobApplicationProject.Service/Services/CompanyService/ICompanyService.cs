using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CompanyService
{
    public interface ICompanyService
    {
        Task<Company> CreateCompany(CompanyDto companyDto);
        Task<Company?> UpdateCompany(Guid id, CompanyDto companyDto);
        Task<List<Company>> GetAllCompanies();
        Task<Company?> GetCompanyById(Guid id);
        Task<Company?> DeleteCompany(Guid id);
    }
}
