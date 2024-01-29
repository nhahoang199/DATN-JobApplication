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
    public interface IJobDescriptionService
    {
        Task<JobDescription> CreateJobDescription(JobDescDto jobApplicationDto);
        Task<JobDescription?> UpdateJobDescription(Guid id, JobDescDto jobApplicationDto);
        Task<PagedList<JobDescription>> GetAllJobDescriptions(PaginationParameters paginationParameters);
        Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters);
        Task<JobDescription?> GetJobDescriptionById(Guid id);
        Task<JobDetailsDto?> GetJobDetails(Guid id);
        Task<JobDescription?> DeleteJobDescription(Guid id);
    }
}
