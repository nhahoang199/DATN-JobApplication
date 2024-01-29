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
    public interface IJobDescriptionRepo
    {
        Task<JobDescription> Create(JobDescription jobApplication);
        Task<JobDescription> Update(JobDescription jobApplication);
        Task<PagedList<JobDescription>> GetAll(PaginationParameters paginationParameters);
        Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters);
        Task<JobDescription?> GetById(Guid id);
        //Task<JobDetailsDto?> GetJobDetails(Guid id);
        Task<JobDescription?> Delete(Guid id);
    }
}
