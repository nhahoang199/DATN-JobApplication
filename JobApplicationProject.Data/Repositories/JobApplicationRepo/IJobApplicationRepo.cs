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
        Task<List<JobApplication>> GetAll();
        Task<JobApplication?> GetById(Guid id);
        Task<JobApplication?> Delete(Guid id);
    }
}
