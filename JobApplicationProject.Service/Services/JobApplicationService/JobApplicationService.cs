using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using JobApplicationProject.Data.Repositories.UserRepo;
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
        private readonly IJobApplicationRepo _jobApplicationRepo;
        private readonly IJobDescriptionRepo _jobDescRepo;
        private readonly IUserRepository _userRepo;

        public JobApplicationService(IJobApplicationRepo jobApplication, IUserRepository userRepo, IJobDescriptionRepo jobDescRepo)
        {
            _jobApplicationRepo = jobApplication;
            _userRepo = userRepo;
            _jobDescRepo = jobDescRepo;
        }

        public async Task<JobApplication> CreateJobApplication(JobApplicationDto jobApplicationDto)
        {
            var jobApplication = new JobApplication()
            {
                Id = Guid.NewGuid(),
                UserId = jobApplicationDto.UserId,
                JobDescriptionId = jobApplicationDto.JobDescriptionId,
                CoverLetter = jobApplicationDto.CoverLetter,
                CV = jobApplicationDto.CV,
                Status = jobApplicationDto.Status,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            var user = await _userRepo.GetById(jobApplicationDto.UserId);
            if (user == null) throw new InvalidOperationException("User not found");
            jobApplication.User = user;
            jobApplication.UserName = user.Name;

            var jobDesc = await _jobDescRepo.GetById(jobApplicationDto.JobDescriptionId);
            if (jobDesc == null) throw new InvalidOperationException("JobDescription not found");
            jobApplication.JobDescription = jobDesc;

            return await _jobApplicationRepo.Create(jobApplication);
        }

        public async Task<JobApplication?> UpdateJobApplication(Guid id, JobApplicationDto jobApplicationDto)
        {
            var existingJobApplication = await _jobApplicationRepo.GetById(id);

            if (existingJobApplication == null) throw new InvalidOperationException("JobApplication not found");

            var user = await _userRepo.GetById(jobApplicationDto.UserId);
            if (user == null) throw new InvalidOperationException("User not found");
            existingJobApplication.User = user;
            existingJobApplication.UserName = user.Name;

            var jobDesc = await _jobDescRepo.GetById(jobApplicationDto.JobDescriptionId);
            if (jobDesc == null) throw new InvalidOperationException("JobDescription not found");
            existingJobApplication.JobDescription = jobDesc;

            existingJobApplication.UserId = jobApplicationDto.UserId;
            existingJobApplication.JobDescriptionId = jobApplicationDto.JobDescriptionId;
            existingJobApplication.CoverLetter = jobApplicationDto.CoverLetter;
            existingJobApplication.CV = jobApplicationDto.CV;
            existingJobApplication.Status = jobApplicationDto.Status;
            existingJobApplication.IsHRSatifiedWithRequest = jobApplicationDto.IsHRSatifiedWithRequest;
            existingJobApplication.ResponseSummary = jobApplicationDto.ResponseSummary;
            existingJobApplication.HRRejectReason = jobApplicationDto.HRRejectReason;
            existingJobApplication.IsUserSatifiedWithResponse = jobApplicationDto.IsUserSatifiedWithResponse;
            existingJobApplication.UserFeedBack = jobApplicationDto.UserFeedBack;
            existingJobApplication.UserRejectReason = jobApplicationDto.UserRejectReason;
            existingJobApplication.WithdrawalReason = jobApplicationDto.WithdrawalReason;
            existingJobApplication.HRViewRequestTime = jobApplicationDto.HRViewRequestTime;
            existingJobApplication.HRResponseRequestTime = jobApplicationDto.HRResponseRequestTime;
            existingJobApplication.UserViewResponseTime = jobApplicationDto.UserViewResponseTime;
            existingJobApplication.UserConfirmTime = jobApplicationDto.UserConfirmTime;
            existingJobApplication.UpdatedOn = DateTime.UtcNow;

            return await _jobApplicationRepo.Update(existingJobApplication);
        }

        public async Task<List<JobApplication>> GetAllJobApplications()
        {
            return await _jobApplicationRepo.GetAll();
        }

        public async Task<JobApplication?> GetJobApplicationById(Guid id)
        {
            return await _jobApplicationRepo.GetById(id);
        }

        public async Task<JobApplication?> DeleteJobApplication(Guid id)
        {
            return await _jobApplicationRepo.Delete(id);
        }
    }
}
