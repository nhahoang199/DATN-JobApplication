using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
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
        Task<PagedList<Company>> GetAllCompanies(PaginationParameters paginationParameters);
        Task<List<Company>> SearchCompanyByName(string name);
        Task<Company?> GetCompanyById(Guid id);
        Task<Company?> DeleteCompany(Guid id);
    }
}
