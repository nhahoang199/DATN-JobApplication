using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.CareerRepo;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;
using JobApplicationProject.Data.Repositories.SkillRepo;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.JobApplicationService
{
    public class JobApplicationService : IJobApplicationService
    {
        private readonly ICompanyRepo _companyRepo;
        private readonly IAddressRepo _addressRepo;
        private readonly IJobApplicationRepo _jobApplicationRepo;
        private readonly ICareerRepo _careerRepo;
        private readonly ISkillRepo _skillRepo;

        public JobApplicationService(ICompanyRepo companyRepo, IJobApplicationRepo jobApplicationRepo, IAddressRepo addressRepo, ICareerRepo careerRepo, ISkillRepo skillRepo)
        {
            _companyRepo = companyRepo;
            _jobApplicationRepo = jobApplicationRepo;
            _addressRepo = addressRepo;
            _careerRepo = careerRepo;
            _skillRepo = skillRepo;
        }

        public async Task<JobApplication> CreateJobApplication(JobAppDto jobApplicationDto)
        {
            var jobApplication = new JobApplication()
            {
                Id = Guid.NewGuid(),
                Title = jobApplicationDto.Title,
                Type = jobApplicationDto.Type,
                Salary = jobApplicationDto.Salary,
                Expirence = jobApplicationDto.Expirence,
                Position = jobApplicationDto.Position,
                Gender = jobApplicationDto.Gender,
                Quantity = jobApplicationDto.Quantity,
                ExpiredOn = jobApplicationDto.ExpiredOn,
                Description = jobApplicationDto.Description,
                CompanyId = jobApplicationDto.CompanyId,
                JobRequired = jobApplicationDto.JobRequired,
                JobBenefit = jobApplicationDto.JobBenefit,
                CareerId = jobApplicationDto.CareerId,
                SkillId = jobApplicationDto.SkillId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (jobApplicationDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobApplicationDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                jobApplication.Company = company;
            }

            if (jobApplicationDto.CareerId != null)
            {
                var career = await _careerRepo.GetById(jobApplicationDto.CareerId.GetValueOrDefault());
                if (career == null) throw new InvalidOperationException("Career not found");
                jobApplication.Career = career;
            }
            if (jobApplicationDto.SkillId != null)
            {
                var skill = await _skillRepo.GetById(jobApplicationDto.SkillId.GetValueOrDefault());
                if (skill == null) throw new InvalidOperationException("Skill not found");
                jobApplication.Skill = skill;
            }
            return await _jobApplicationRepo.Create(jobApplication);
        }

        public async Task<JobApplication?> UpdateJobApplication(Guid id, JobAppDto jobApplicationDto)
        {
            var existingJobApplication = await _jobApplicationRepo.GetById(id);

            if (existingJobApplication == null) throw new InvalidOperationException("JobApplication not found");

            if (jobApplicationDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobApplicationDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                existingJobApplication.Company = company;
            }

            if (jobApplicationDto.CareerId != null)
            {
                var career = await _careerRepo.GetById(jobApplicationDto.CareerId.GetValueOrDefault());
                if (career == null) throw new InvalidOperationException("Career not found");
                existingJobApplication.Career = career;
            }
            if (jobApplicationDto.SkillId != null)
            {
                var skill = await _skillRepo.GetById(jobApplicationDto.SkillId.GetValueOrDefault());
                if (skill == null) throw new InvalidOperationException("Skill not found");
                existingJobApplication.Skill = skill;
            }

            existingJobApplication.Title = jobApplicationDto.Title;
            existingJobApplication.Type = jobApplicationDto.Type;
            existingJobApplication.Salary = jobApplicationDto.Salary;
            existingJobApplication.Expirence = jobApplicationDto.Expirence;
            existingJobApplication.Position = jobApplicationDto.Position;
            existingJobApplication.Gender = jobApplicationDto.Gender;
            existingJobApplication.Quantity = jobApplicationDto.Quantity;
            existingJobApplication.ExpiredOn = jobApplicationDto.ExpiredOn;
            existingJobApplication.Description = jobApplicationDto.Description;
            existingJobApplication.JobRequired = jobApplicationDto.JobRequired;
            existingJobApplication.JobBenefit = jobApplicationDto.JobBenefit;
            existingJobApplication.CompanyId = jobApplicationDto.CompanyId;
            existingJobApplication.CareerId = jobApplicationDto.CareerId;
            existingJobApplication.SkillId = jobApplicationDto.SkillId;
            existingJobApplication.UpdatedOn = DateTime.UtcNow;

            return await _jobApplicationRepo.Update(existingJobApplication);
        }

        public async Task<PagedList<JobApplication>> GetAllJobApplications(PaginationParameters paginationParameters)
        {
            var jobApplications = await _jobApplicationRepo.GetAll(paginationParameters);

            return new PagedList<JobApplication>(jobApplications, jobApplications.TotalCount, jobApplications.CurrentPage, jobApplications.PageSize, jobApplications.TotalPages);
        }
        public async Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters)
        {
            var jobApplications = await _jobApplicationRepo.GetJobsRefer(paginationParameters);

            return new PagedList<JobReferDto>(jobApplications, jobApplications.TotalCount, jobApplications.CurrentPage, jobApplications.PageSize, jobApplications.TotalPages);
        }
        public async Task<JobApplication?> GetJobApplicationById(Guid id)
        {
            return await _jobApplicationRepo.GetById(id);
        }
        public async Task<JobDetailsDto?> GetJobDetails(Guid id)
        {
            var jobDetails = await _jobApplicationRepo.GetJobDetails(id);
            var company = await _companyRepo.GetById(jobDetails.CompanyId.Value);
            var address = await _addressRepo.GetById(company.AddressId.Value);
            jobDetails.Company = new CompanyDto()
            {
                Name = company?.Name,
                UEN = company.UEN,
                Description = company.Description,
                FBLink = company.FBLink,
                TwitterLink = company.TwitterLink,
                Website = company.Website,
                Gmail = company.Gmail,
                Picture = company.Picture,
                DateOfIncorporation = company.DateOfIncorporation,
                AddressId = company.AddressId,
                WorkingDay = company.WorkingDay,
                CompanySize = company.CompanySize
            };
            jobDetails.Company.Address = new AddressDto()
            {
                HouseNumber = address.HouseNumber,
                Street = address.Street,
                CountryName = address.Country.Name,
                CountryId = address.Country.Id,
                ProvinceName = address.Province.Name,
                ProvinceId = address.Province.Id,
                DistrictName = address.District.Name,
                DistrictId = address.District.Id,
                CommuneName = address.Commune.Name,
                CommuneId = address.Commune.Id,
            };
            return jobDetails;
        }

        public async Task<JobApplication?> DeleteJobApplication(Guid id)
        {
            return await _jobApplicationRepo.Delete(id);
        }
    }
}
