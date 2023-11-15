using JobApplicationProject.Core.Dtos;
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
        Task<List<JobApplication>> GetAllJobApplications();
        Task<JobApplication?> GetJobApplicationById(Guid id);
        Task<JobApplication?> DeleteJobApplication(Guid id);
    }
}
