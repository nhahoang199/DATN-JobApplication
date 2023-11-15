using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using Org.BouncyCastle.Crypto.Macs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CompanyService
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepo _companyRepo;
        private readonly IAddressRepo _addressRepo;

        public CompanyService(ICompanyRepo companyRepo, IAddressRepo addressRepo)
        {
            _companyRepo = companyRepo;
            _addressRepo = addressRepo;
        }

        public async Task<Company> CreateCompany(CompanyDto companyDto)
        {
            var company = new Company()
            {
                Id = Guid.NewGuid(),
                Name = companyDto.Name,
                UEN = companyDto.UEN,
                Description = companyDto.Description,
                FBLink = companyDto.FBLink,
                TwitterLink = companyDto.TwitterLink,
                Website = companyDto.Website,
                Gmail = companyDto.Gmail,
                Picture = companyDto.Picture,
                DateOfIncorporation = companyDto.DateOfIncorporation,
                AddressId = companyDto.AddressId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (companyDto.AddressId != null)
            {
                var address = await _addressRepo.GetById(companyDto.AddressId.GetValueOrDefault());
                if (address == null) throw new InvalidOperationException("Address not found");
                company.Address = address;
            }

            return await _companyRepo.Create(company);
        }

        public async Task<Company?> UpdateCompany(Guid id, CompanyDto companyDto)
        {
            var existingCompany = await _companyRepo.GetById(id);

            if (existingCompany == null) throw new InvalidOperationException("Company not found");

            if (companyDto.AddressId != null)
            {
                var address = await _addressRepo.GetById(companyDto.AddressId.GetValueOrDefault());
                if (address == null) throw new InvalidOperationException("Address not found");
                existingCompany.Address = address;
            }

            existingCompany.Name = companyDto.Name;
            existingCompany.UEN = companyDto.UEN;
            existingCompany.Description = companyDto.Description;
            existingCompany.FBLink = companyDto.FBLink;
            existingCompany.TwitterLink = companyDto.TwitterLink;
            existingCompany.Website = companyDto.Website;
            existingCompany.Gmail = companyDto.Gmail;
            existingCompany.Picture = companyDto.Picture;
            existingCompany.DateOfIncorporation = companyDto.DateOfIncorporation;
            existingCompany.AddressId = companyDto.AddressId;
            existingCompany.UpdatedOn = DateTime.UtcNow;

            return await _companyRepo.Update(existingCompany);
        }

        public async Task<List<Company>> GetAllCompanies()
        {
            return await _companyRepo.GetAll();
        }

        public async Task<Company?> GetCompanyById(Guid id)
        {
            return await _companyRepo.GetById(id);
        }

        public async Task<Company?> DeleteCompany(Guid id)
        {
            return await _companyRepo.Delete(id);
        }
    }
}
