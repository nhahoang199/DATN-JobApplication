using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.CompanyAddressRepo;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CompanyAddressService
{
    public class CompanyAddressService : ICompanyAddressService
    {
        private readonly ICompanyAddressRepo _companyAddressRepo;
        private readonly ICompanyRepo _companyRepo;
        private readonly IAddressRepo _addressRepo;

        public CompanyAddressService(ICompanyRepo companyRepo, ICompanyAddressRepo companyAddressRepo, IAddressRepo addressRepo)
        {
            _companyRepo = companyRepo;
            _companyAddressRepo = companyAddressRepo;
            _addressRepo = addressRepo;
        }

        public async Task<CompanyAddress> CreateCompanyAddress(CompanyAddressDto companyAddressDto)
        {
            var companyAddress = new CompanyAddress()
            {
                Id = Guid.NewGuid(),
                CompanyId = companyAddressDto.CompanyId,
                AddressId = companyAddressDto.AddressId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            var address = await _addressRepo.GetById(companyAddressDto.AddressId);
            if (address == null) throw new InvalidOperationException("Address not found");
            companyAddress.Address = address;

            var company = await _companyRepo.GetById(companyAddressDto.CompanyId);
            if (company == null) throw new InvalidOperationException("Company not found");
            companyAddress.Company = company;

            return await _companyAddressRepo.Create(companyAddress);
        }

        public async Task<CompanyAddress?> UpdateCompanyAddress(Guid id, CompanyAddressDto companyAddressDto)
        {
            var existingCompanyAddress = await _companyAddressRepo.GetById(id);

            if (existingCompanyAddress == null) throw new InvalidOperationException(" CompanyAddress not found");
            var address = await _addressRepo.GetById(companyAddressDto.AddressId);
            if (address == null) throw new InvalidOperationException("Address not found");
            existingCompanyAddress.Address = address;

            var company = await _companyRepo.GetById(companyAddressDto.CompanyId);
            if (company == null) throw new InvalidOperationException("Company not found");
            existingCompanyAddress.Company = company;

            existingCompanyAddress.UpdatedOn = DateTime.UtcNow;

            return await _companyAddressRepo.Update(existingCompanyAddress);
        }

        public async Task<List<CompanyAddress>> GetAllCompanyAddresss()
        {
            return await _companyAddressRepo.GetAll();
        }

        public async Task<CompanyAddress?> GetCompanyAddressById(Guid id)
        {
            return await _companyAddressRepo.GetById(id);
        }

        public async Task<CompanyAddress?> DeleteCompanyAddress(Guid id)
        {
            return await _companyAddressRepo.Delete(id);
        }
    }
}
