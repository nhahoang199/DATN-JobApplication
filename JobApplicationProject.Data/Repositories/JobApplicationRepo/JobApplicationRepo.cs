using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<PagedList<JobApplication>> GetAll(PaginationParameters paginationParameters)
        {
            var jobApplications = _dbContext.JobApplication.AsQueryable();

            // Perform additional filtering, ordering, etc., if needed

            return await PagedList<JobApplication>.CreateAsync(jobApplications, paginationParameters.PageNumber, paginationParameters.PageSize);
        }
        public async Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters)
        {
            var jobApplications = _dbContext.JobApplication.Include(j => j.Company).Select(j => new
            JobReferDto
            {
                Id = j.Id,
                Title = j.Title,
                Type = j.Type,
                Salary = j.Salary,
                CompanyName = j.Company.Name,
                ProvinceName = j.Company.Address.Province.Name,
                DistrictName = j.Company.Address.District.Name,
                CompanyId = j.Company.Id,
                AddressId = j.Company.Address.Id,
                ProvinceId = j.Company.Address.Id,
                DistrictId = j.Company.Address.Id,
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed

            return await PagedList<JobReferDto>.CreateAsync(jobApplications, paginationParameters.PageNumber, paginationParameters.PageSize);
        }
        public async Task<JobApplication?> GetById(Guid id)
        {
            return await _dbContext.JobApplication.FindAsync(id);
        }
        public async Task<JobDetailsDto?> GetJobDetails(Guid id)
        {
            var jobInfor = await _dbContext.JobApplication.Where(j => j.Id == id)
                                .Select(j => new JobDetailsDto
                                {
                                    // Map properties you want to include in the new object
                                    Id = j.Id,
                                    Title = j.Title,
                                    Description = j.Description,
                                    Type = j.Type,
                                    Salary = j.Salary,
                                    Expirence = j.Expirence,
                                    ExpiredOn = j.ExpiredOn,
                                    Position = j.Position,
                                    Gender = j.Gender,
                                    Quantity = j.Quantity,
                                    CompanyId = j.CompanyId,
                                    SkillId = j.SkillId,
                                    CareerId = j.CareerId,
                                    JobRequired = j.JobRequired,
                                    JobBenefit = j.JobBenefit,
                                }).FirstOrDefaultAsync();
            return jobInfor;
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
