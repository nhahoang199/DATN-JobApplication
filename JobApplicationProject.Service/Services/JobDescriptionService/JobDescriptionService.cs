using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.CareerRepo;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.CountryRepo;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using JobApplicationProject.Data.Repositories.SkillRepo;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JobApplicationProject.Data.Repositories.CommuneRepo;

namespace JobApplicationProject.Service.Services.JobApplicationService
{
    public class JobDescriptionService : IJobDescriptionService
    {
        private readonly ICompanyRepo _companyRepo;
        private readonly IAddressRepo _addressRepo;
        private readonly ICountryRepo _countryRepo;
        private readonly IProvinceRepo _provinceRepo;
        private readonly IDistrictRepo _districtRepo;
        private readonly ICommuneRepo _communeRepo;
        private readonly IJobDescriptionRepo _jobDescriptionRepo;
        private readonly ICareerRepo _careerRepo;
        private readonly ISkillRepo _skillRepo;

        public JobDescriptionService(ICompanyRepo companyRepo, IJobDescriptionRepo jobDescriptionRepo, IAddressRepo addressRepo, ICareerRepo careerRepo, ISkillRepo skillRepo, ICountryRepo countryRepo, IProvinceRepo provinceRepo, IDistrictRepo districtRepo, ICommuneRepo communeRepo)
        {
            _companyRepo = companyRepo;
            _jobDescriptionRepo = jobDescriptionRepo;
            _addressRepo = addressRepo;
            _careerRepo = careerRepo;
            _skillRepo = skillRepo;
            _countryRepo = countryRepo;
            _provinceRepo = provinceRepo;
            _districtRepo = districtRepo;
            _communeRepo = communeRepo;
        }

        public async Task<JobDescription> CreateJobDescription(JobDescDto jobDescDto)
        {
            var jobApplication = new JobDescription()
            {
                Id = Guid.NewGuid(),
                Title = jobDescDto.Title,
                Type = jobDescDto.Type,
                MinSalary = jobDescDto.MinSalary,
                MaxSalary = jobDescDto.MaxSalary,
                ExperirenceType = jobDescDto.ExperirenceType,
                MinYearExperience = jobDescDto.MinYearExperience,
                MaxYearExperience = jobDescDto.MaxYearExperience,
                Position = jobDescDto.Position,
                Gender = jobDescDto.Gender,
                Quantity = jobDescDto.Quantity,
                ExpiredOn = jobDescDto.ExpiredOn,
                Description = jobDescDto.Description,
                CompanyId = jobDescDto.CompanyId,
                JobRequired = jobDescDto.JobRequired,
                JobBenefit = jobDescDto.JobBenefit,
                CareerId = jobDescDto.CareerId,
                //SkillId = jobDescDto.SkillId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow,
                Status = jobDescDto.Status
            };

            if (jobDescDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobDescDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                jobApplication.Company = company;
            }

            if (jobDescDto.CareerId != null)
            {
                var career = await _careerRepo.GetById(jobDescDto.CareerId.GetValueOrDefault());
                if (career == null) throw new InvalidOperationException("Career not found");
                jobApplication.Career = career;
            }
            //if (jobDescDto.SkillId != null)
            //{
            //    var skill = await _skillRepo.GetById(jobDescDto.SkillId.GetValueOrDefault());
            //    if (skill == null) throw new InvalidOperationException("Skill not found");
            //    jobApplication.Skill = skill;
            //}
            return await _jobDescriptionRepo.Create(jobApplication);
        }

        public async Task<JobDescription?> UpdateJobDescription(Guid id, JobDescDto jobDescDto)
        {
            var existingJobDescription = await _jobDescriptionRepo.GetById(id);

            if (existingJobDescription == null) throw new InvalidOperationException("JobDescription not found");

            if (jobDescDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobDescDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                existingJobDescription.Company = company;
            }

            if (jobDescDto.CareerId != null)
            {
                var career = await _careerRepo.GetById(jobDescDto.CareerId.GetValueOrDefault());
                if (career == null) throw new InvalidOperationException("Career not found");
                existingJobDescription.Career = career;
            }

            existingJobDescription.Title = jobDescDto.Title;
            existingJobDescription.Type = jobDescDto.Type;
            existingJobDescription.MinSalary = jobDescDto.MinSalary;
            existingJobDescription.MaxSalary = jobDescDto.MaxSalary;
            existingJobDescription.ExperirenceType = jobDescDto.ExperirenceType;
            existingJobDescription.MinYearExperience = jobDescDto.MinYearExperience;
            existingJobDescription.MaxYearExperience = jobDescDto.MaxYearExperience;
            existingJobDescription.Position = jobDescDto.Position;
            existingJobDescription.Gender = jobDescDto.Gender;
            existingJobDescription.Quantity = jobDescDto.Quantity;
            existingJobDescription.ExpiredOn = jobDescDto.ExpiredOn;
            existingJobDescription.Description = jobDescDto.Description;
            existingJobDescription.JobRequired = jobDescDto.JobRequired;
            existingJobDescription.JobBenefit = jobDescDto.JobBenefit;
            existingJobDescription.CompanyId = jobDescDto.CompanyId;
            existingJobDescription.CareerId = jobDescDto.CareerId;
            existingJobDescription.UpdatedOn = DateTime.UtcNow;

            return await _jobDescriptionRepo.Update(existingJobDescription);
        }

        public async Task<PagedList<JobDescription>> GetAllJobDescriptions(PaginationParameters paginationParameters)
        {
            var jobApplications = await _jobDescriptionRepo.GetAll(paginationParameters);

            return new PagedList<JobDescription>(jobApplications, jobApplications.TotalCount, jobApplications.CurrentPage, jobApplications.PageSize, jobApplications.TotalPages);
        }
        public async Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters)
        {
            var jobApplications = await _jobDescriptionRepo.GetJobsRefer(paginationParameters);
            return new PagedList<JobReferDto>(jobApplications, jobApplications.TotalCount, jobApplications.CurrentPage, jobApplications.PageSize, jobApplications.TotalPages);
        }
        public async Task<JobDescription?> GetJobDescriptionById(Guid id)
        {
            return await _jobDescriptionRepo.GetById(id);
        }
        public async Task<JobDetailsDto?> GetJobDetails(Guid id)
        {
            var jobApplication = await _jobDescriptionRepo.GetById(id);
            var company = await _companyRepo.GetById(new Guid("cb31e91e-eca4-46f0-8c52-007f020cff65"));
            //var company = await _companyRepo.GetById(jobApplication.CompanyId.Value);
            //var address = await _addressRepo.GetById(company.AddressId.Value);
            //var country = await _countryRepo.GetById(address.CountryId.Value);
            //var province = await _provinceRepo.GetById(address.ProvinceId.Value);
            //var district = await _districtRepo.GetById(address.DistrictId.Value);
            //var commune = await _communeRepo.GetById(address.CommuneId.Value);
            var jobDetails = new JobDetailsDto
            {
                // Map properties you want to include in the new object
                Id = jobApplication.Id,
                Title = jobApplication.Title,
                Description = jobApplication.Description,
                Type = jobApplication.Type,
                MinSalary = jobApplication.MinSalary,
                MaxSalary = jobApplication.MaxSalary,
                Experience = "" + jobApplication.MinYearExperience + jobApplication.MaxYearExperience,
                ExpiredOn = jobApplication.ExpiredOn,
                Position = jobApplication.Position,
                Gender = jobApplication.Gender,
                Quantity = jobApplication.Quantity,
                CompanyId = jobApplication.CompanyId,
                //SkillId = jobApplication.SkillId,
                CareerId = jobApplication.CareerId,
                JobRequired = jobApplication.JobRequired,
                JobBenefit = jobApplication.JobBenefit,
            };
            jobDetails.Company = new CompanyDto()
            {
                Name = company?.Name,
                CRN = company.CRN,
                Description = company.Description,
                FBLink = company.FBLink,
                TwitterLink = company.TwitterLink,
                Website = company.Website,
                Email = company.Email,
                AvatarPicture = company.AvatarPicture,
                DateOfIncorporation = company.DateOfIncorporation,
                //AddressId = company.AddressId,
                StartWorkingDay = company.StartWorkingDay,
                EndWorkingDay = company.EndWorkingDay,
                CompanySizeType = company.CompanySizeType,
                CompanySizeMinValue = company.CompanySizeMinValue,
                CompanySizeMaxValue = company.CompanySizeMaxValue
            };
            //jobDetails.Company.Address = new AddressDto()
            //{
            //    HouseNumber = address.HouseNumber,
            //    Street = address.Street,
            //    CountryName = country.Name,
            //    CountryId = country.Id,
            //    ProvinceName = province.Name,
            //    ProvinceId = province.Id,
            //    DistrictName = district.Name,
            //    DistrictId = district.Id,
            //    CommuneName = commune.Name,
            //    CommuneId = commune.Id,
            //};
            return jobDetails;
        }

        public async Task<JobDescription?> DeleteJobDescription(Guid id)
        {
            return await _jobDescriptionRepo.Delete(id);
        }
    }
}
