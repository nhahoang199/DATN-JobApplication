using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
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
                Status = 0,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            var user = await _userRepo.GetById(jobApplicationDto.UserId.Value);
            if (user == null) throw new InvalidOperationException("User not found");
            jobApplication.User = user;
            jobApplication.UserName = user.Name;

            var jobDesc = await _jobDescRepo.GetById(jobApplicationDto.JobDescriptionId.Value);
            if (jobDesc == null) throw new InvalidOperationException("JobDescription not found");
            jobApplication.JobDescription = jobDesc;

            return await _jobApplicationRepo.Create(jobApplication);
        }

        public async Task<JobApplication?> UpdateJobApplication(Guid id, JobApplicationDto jobApplicationDto)
        {
            var existingJobApplication = await _jobApplicationRepo.GetById(id);

            if (existingJobApplication == null) throw new InvalidOperationException("JobApplication not found");
            var user = new User();
            if (jobApplicationDto.UserId != null)
            {
                user = await _userRepo.GetById(jobApplicationDto.UserId.Value);
                if (user == null) throw new InvalidOperationException("User not found");
                existingJobApplication.User = user;
                existingJobApplication.UserName = user.Name;
            }
            var jobDesc = new JobDescription();
            if (jobApplicationDto.JobDescriptionId != null)
            {
                jobDesc = await _jobDescRepo.GetById(jobApplicationDto.JobDescriptionId.Value);
                if (jobDesc == null) throw new InvalidOperationException("JobDescription not found");
                existingJobApplication.JobDescription = jobDesc;
            }

            if (jobApplicationDto.UserId != null) existingJobApplication.UserId = jobApplicationDto.UserId;
            if (jobApplicationDto.JobDescriptionId != null) existingJobApplication.JobDescriptionId = jobApplicationDto.JobDescriptionId;
            if (jobApplicationDto.CoverLetter != null) existingJobApplication.CoverLetter = jobApplicationDto.CoverLetter;
            if (jobApplicationDto.CV != null) existingJobApplication.CV = jobApplicationDto.CV;
            if (jobApplicationDto.Status != null) existingJobApplication.Status = jobApplicationDto.Status;
            if (jobApplicationDto.IsHRSatifiedWithRequest != null) existingJobApplication.IsHRSatifiedWithRequest = jobApplicationDto.IsHRSatifiedWithRequest;
            if (jobApplicationDto.ResponseSummary != null) existingJobApplication.ResponseSummary = jobApplicationDto.ResponseSummary;
            if (jobApplicationDto.HRRejectReason != null) existingJobApplication.HRRejectReason = jobApplicationDto.HRRejectReason;
            if (jobApplicationDto.IsUserSatifiedWithResponse != null) existingJobApplication.IsUserSatifiedWithResponse = jobApplicationDto.IsUserSatifiedWithResponse;
            if (jobApplicationDto.UserFeedBack != null) existingJobApplication.UserFeedBack = jobApplicationDto.UserFeedBack;
            if (jobApplicationDto.UserRejectReason != null) existingJobApplication.UserRejectReason = jobApplicationDto.UserRejectReason;
            if (jobApplicationDto.WithdrawalReason != null) existingJobApplication.WithdrawalReason = jobApplicationDto.WithdrawalReason;
            if (jobApplicationDto.HRViewRequestTime != null) existingJobApplication.HRViewRequestTime = jobApplicationDto.HRViewRequestTime;
            if (jobApplicationDto.HRResponseRequestTime != null) existingJobApplication.HRResponseRequestTime = jobApplicationDto.HRResponseRequestTime;
            if (jobApplicationDto.UserViewResponseTime != null) existingJobApplication.UserViewResponseTime = jobApplicationDto.UserViewResponseTime;
            if (jobApplicationDto.UserConfirmTime != null) existingJobApplication.UserConfirmTime = jobApplicationDto.UserConfirmTime;
            existingJobApplication.UpdatedOn = DateTime.UtcNow;

            return await _jobApplicationRepo.Update(existingJobApplication);
        }

        public async Task<PagedList<JobApplicationDto>> GetAllJobApplications(PaginationParameters paginationParameters)
        {
            return await _jobApplicationRepo.GetAll(paginationParameters);
        }

        public async Task<JobApplicationDto?> GetJobApplicationById(Guid id)
        {
            var jobApplicationModel = await _jobApplicationRepo.GetById(id);
            var user = await _userRepo.GetById(jobApplicationModel.UserId.Value);
            var jobDesc = await _jobDescRepo.GetById(jobApplicationModel.JobDescriptionId.Value);
            return new JobApplicationDto()
            {
                Id = jobApplicationModel.Id,
                UserId = jobApplicationModel.UserId.Value,
                UserName = user.Name,
                JobDescriptionId = jobApplicationModel.JobDescriptionId.Value,
                JobDescriptionName = jobDesc.Title,
                CoverLetter = jobApplicationModel.CoverLetter,
                CV = jobApplicationModel.CV,
                IsHRSatifiedWithRequest = jobApplicationModel.IsHRSatifiedWithRequest,
                ResponseSummary = jobApplicationModel.ResponseSummary,
                HRRejectReason = jobApplicationModel.HRRejectReason,
                IsUserSatifiedWithResponse = jobApplicationModel.IsUserSatifiedWithResponse,
                UserFeedBack = jobApplicationModel.UserFeedBack,
                UserRejectReason = jobApplicationModel.UserRejectReason,
                HRViewRequestTime = jobApplicationModel.HRViewRequestTime,
                HRResponseRequestTime = jobApplicationModel.HRResponseRequestTime,
                UserViewResponseTime = jobApplicationModel.UserViewResponseTime,
                UserConfirmTime = jobApplicationModel.UserConfirmTime,
                Status = jobApplicationModel.Status,
                CreatedOn = jobApplicationModel.CreatedOn,
                UpdatedOn = jobApplicationModel.UpdatedOn,
            };
        }

        public async Task<JobApplication?> DeleteJobApplication(Guid id)
        {
            return await _jobApplicationRepo.Delete(id);
        }
    }
}
