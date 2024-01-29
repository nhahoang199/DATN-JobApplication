using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
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
                CRN = companyDto.CRN,
                Description = companyDto.Description,
                FBLink = companyDto.FBLink,
                TwitterLink = companyDto.TwitterLink,
                Website = companyDto.Website,
                Email = companyDto.Email,
                AvatarPicture = companyDto.AvatarPicture,
                BackgroundPicture = companyDto.BackgroundPicture,
                DateOfIncorporation = companyDto.DateOfIncorporation,
                //TotalRatingQuantity = companyDto.TotalRatingQuantity,
                //TotalOverallRatingScore = companyDto.TotalOverallRatingScore,
                //TotalBenefitRatingScore = companyDto.TotalBenefitRatingScore,
                //TotalCareRatingScore = companyDto.TotalCareRatingScore,
                Status = 1,
                //AddressId = companyDto.AddressId,
                CompanySizeType = companyDto.CompanySizeType,
                CompanySizeMinValue = companyDto.CompanySizeMinValue,
                CompanySizeMaxValue = companyDto.CompanySizeMaxValue,
                StartWorkingDay = companyDto.StartWorkingDay,
                EndWorkingDay = companyDto.EndWorkingDay,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow,
            };

            //if (companyDto.AddressId != null)
            //{
            //    var address = await _addressRepo.GetById(companyDto.AddressId.GetValueOrDefault());
            //    if (address == null) throw new InvalidOperationException("Address not found");
            //    company.Address = address;
            //}

            return await _companyRepo.Create(company);
        }

        public async Task<Company?> UpdateCompany(Guid id, CompanyDto companyDto)
        {
            var existingCompany = await _companyRepo.GetById(id);

            if (existingCompany == null) throw new InvalidOperationException("Company not found");

            //if (companyDto.AddressId != null)
            //{
            //    var address = await _addressRepo.GetById(companyDto.AddressId.GetValueOrDefault());
            //    if (address == null) throw new InvalidOperationException("Address not found");
            //    existingCompany.Address = address;
            //}

            if (companyDto.Name != null) existingCompany.Name = companyDto.Name;
            if (companyDto.CRN != null) existingCompany.CRN = companyDto.CRN;
            if (companyDto.Description != null) existingCompany.Description = companyDto.Description;
            if (companyDto.FBLink != null) existingCompany.FBLink = companyDto.FBLink;
            if (companyDto.TwitterLink != null) existingCompany.TwitterLink = companyDto.TwitterLink;
            if (companyDto.Website != null) existingCompany.Website = companyDto.Website;
            if (companyDto.Email != null) existingCompany.Email = companyDto.Email;
            if (companyDto.Status != null) existingCompany.Status = (int)companyDto.Status;
            if (companyDto.AvatarPicture != null) existingCompany.AvatarPicture = companyDto.AvatarPicture;
            if (companyDto.BackgroundPicture != null) existingCompany.BackgroundPicture = companyDto.BackgroundPicture;
            //if(companyDto.TotalRatingQuantity != null) existingCompany.TotalRatingQuantity = companyDto.TotalRatingQuantity;
            //if(companyDto.TotalRatingScore != null) existingCompany.TotalRatingScore = companyDto.TotalRatingScore;
            if (companyDto.DateOfIncorporation != null) existingCompany.DateOfIncorporation = companyDto.DateOfIncorporation;
            //if(companyDto.Name != null) existingCompany.AddressId = companyDto.AddressId;
            if (companyDto.CompanySizeType != null) existingCompany.CompanySizeType = companyDto.CompanySizeType;
            if (companyDto.CompanySizeMinValue != null) existingCompany.CompanySizeMinValue = companyDto.CompanySizeMinValue;
            if (companyDto.CompanySizeMaxValue != null) existingCompany.CompanySizeMaxValue = companyDto.CompanySizeMaxValue;
            if (companyDto.StartWorkingDay != null) existingCompany.StartWorkingDay = companyDto.StartWorkingDay;
            if (companyDto.EndWorkingDay != null) existingCompany.EndWorkingDay = companyDto.EndWorkingDay;
            existingCompany.UpdatedOn = DateTime.UtcNow;

            return await _companyRepo.Update(existingCompany);
        }

        public async Task<PagedList<Company>> GetAllCompanies(PaginationParameters paginationParameters)
        {
            return await _companyRepo.GetAll(paginationParameters);
        }

        public async Task<Company?> GetCompanyById(Guid id)
        {
            return await _companyRepo.GetById(id);
        }

        public async Task<Company?> DeleteCompany(Guid id)
        {
            return await _companyRepo.Delete(id);
        }

        public async Task<List<Company>> SearchCompanyByName(string name)
        {
            return await _companyRepo.SearchByName(name);
        }
    }
}
