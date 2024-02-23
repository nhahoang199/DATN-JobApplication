using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.JobApplicationRepo
{
    public class JobApplicationRepo : IJobApplicationRepo
    {
        private readonly DBContext _dbContext;
        public JobApplicationRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<JobApplication> Create(JobApplication jobApplication)
        {
            await _dbContext.JobApplication.AddAsync(jobApplication);
            await _dbContext.SaveChangesAsync();
            return jobApplication;
        }

        public async Task<JobApplication> Update(JobApplication jobApplication)
        {
            _dbContext.JobApplication.Update(jobApplication);
            await _dbContext.SaveChangesAsync();
            return jobApplication;
        }

        public async Task<PagedList<JobApplicationDto>> GetAll(PaginationParameters paginationParameters)
        {
            var jobApplicationList = _dbContext.JobApplication.Include(p => p.User).Include(p => p.JobDescription).Select(p => new JobApplicationDto
            {
                Id = p.Id,
                UserId = p.UserId.Value,
                UserName = p.User.Name,
                JobDescriptionId = p.JobDescriptionId.Value,
                JobDescriptionName = p.JobDescription.Title,
                Status = p.Status,
                CreatedOn = p.CreatedOn,
                UpdatedOn = p.UpdatedOn,
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            // Example with custom ordering by a property named "SomeProperty"
            var orderBy = (Expression<Func<JobApplicationDto, object>>)(x => x.CreatedOn);

            return await PagedList<JobApplicationDto>.ToPagedList(jobApplicationList, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }

        public async Task<JobApplication?> GetById(Guid id)
        {
            return await _dbContext.JobApplication.FindAsync(id);
        }

        public async Task<JobApplication?> Delete(Guid id)
        {
            var jobApplication = await _dbContext.JobApplication.FindAsync(id);
            if (jobApplication != null)
            {
                _dbContext.JobApplication.Remove(jobApplication);
                await _dbContext.SaveChangesAsync();
            }
            return jobApplication;
        }
    }
}
