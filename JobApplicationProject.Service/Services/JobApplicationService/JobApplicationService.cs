using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;
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
        private readonly IJobApplicationRepo _jobApplicationDto;

        public JobApplicationService(ICompanyRepo companyRepo, IJobApplicationRepo jobApplicationDto)
        {
            _companyRepo = companyRepo;
            _jobApplicationDto = jobApplicationDto;
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
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (jobApplicationDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobApplicationDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                jobApplication.Company = company;
            }

            return await _jobApplicationDto.Create(jobApplication);
        }

        public async Task<JobApplication?> UpdateJobApplication(Guid id, JobAppDto jobApplicationDto)
        {
            var existingJobApplication = await _jobApplicationDto.GetById(id);

            if (existingJobApplication == null) throw new InvalidOperationException("JobApplication not found");

            if (jobApplicationDto.CompanyId != null)
            {
                var company = await _companyRepo.GetById(jobApplicationDto.CompanyId.GetValueOrDefault());
                if (company == null) throw new InvalidOperationException("Company not found");
                existingJobApplication.Company = company;
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
            existingJobApplication.CompanyId = jobApplicationDto.CompanyId;
            existingJobApplication.UpdatedOn = DateTime.UtcNow;

            return await _jobApplicationDto.Update(existingJobApplication);
        }

        public async Task<List<JobApplication>> GetAllJobApplications()
        {
            return await _jobApplicationDto.GetAll();
        }

        public async Task<JobApplication?> GetJobApplicationById(Guid id)
        {
            return await _jobApplicationDto.GetById(id);
        }

        public async Task<JobApplication?> DeleteJobApplication(Guid id)
        {
            return await _jobApplicationDto.Delete(id);
        }
    }
}
