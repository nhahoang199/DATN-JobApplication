using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.JobApplicationService
{
    public interface IJobApplicationService
    {
        Task<JobApplication> CreateJobApplication(JobAppDto jobApplicationDto);
        Task<JobApplication?> UpdateJobApplication(Guid id, JobAppDto jobApplicationDto);
        Task<PagedList<JobApplication>> GetAllJobApplications(PaginationParameters paginationParameters);
        Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters);
        Task<JobApplication?> GetJobApplicationById(Guid id);
        Task<JobDetailsDto?> GetJobDetails(Guid id);
        Task<JobApplication?> DeleteJobApplication(Guid id);
    }
}
