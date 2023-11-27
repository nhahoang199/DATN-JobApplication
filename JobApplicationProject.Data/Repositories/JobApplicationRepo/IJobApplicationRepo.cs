using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.JobApplicationRepo
{
    public interface IJobApplicationRepo
    {
        Task<JobApplication> Create(JobApplication jobApplication);
        Task<JobApplication> Update(JobApplication jobApplication);
        Task<PagedList<JobApplication>> GetAll(PaginationParameters paginationParameters);
        Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters);
        Task<JobApplication?> GetById(Guid id);
        Task<JobDetailsDto?> GetJobDetails(Guid id);
        Task<JobApplication?> Delete(Guid id);
    }
}
