using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<JobApplication>> GetAll()
        {
            return await _dbContext.JobApplication.ToListAsync();
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
