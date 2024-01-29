using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using JobApplicationProject.Core.Dtos;
using System.Linq.Expressions;

namespace JobApplicationProject.Data.Repositories.JobApplicationRepo
{
    public class JobDescriptionRepo : IJobDescriptionRepo
    {
        private readonly DBContext _dbContext;
        public JobDescriptionRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<JobDescription> Create(JobDescription jobDescription)
        {
            await _dbContext.JobDescription.AddAsync(jobDescription);
            await _dbContext.SaveChangesAsync();
            return jobDescription;
        }

        public async Task<JobDescription> Update(JobDescription jobDescription)
        {
            _dbContext.JobDescription.Update(jobDescription);
            await _dbContext.SaveChangesAsync();
            return jobDescription;
        }

        public async Task<PagedList<JobDescription>> GetAll(PaginationParameters paginationParameters)
        {
            var jobDescriptions = _dbContext.JobDescription.AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<JobDescription, object>>)(x => x.Title);

            return await PagedList<JobDescription>.ToPagedList(jobDescriptions, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }
        public async Task<PagedList<JobReferDto>> GetJobsRefer(PaginationParameters paginationParameters)
        {
            var jobDescriptions = _dbContext.JobDescription.Include(j => j.Company).Select(j => new
            JobReferDto
            {
                Id = j.Id,
                Title = j.Title,
                Type = j.Type,
                MinSalary = j.MinSalary,
                MaxSalary = j.MaxSalary,
                CompanyName = j.Company.Name,
                //ProvinceName = j.Company.Address.Province.Name,
                //DistrictName = j.Company.Address.District.Name,
                CompanyId = j.Company.Id,
                //AddressId = j.Company.Address.Id,
                //ProvinceId = j.Company.Address.Id,
                //DistrictId = j.Company.Address.Id,
            }).AsQueryable();

            // Perform additional filtering, ordering, etc., if needed
            var orderBy = (Expression<Func<JobReferDto, object>>)(x => x.Title);

            return await PagedList<JobReferDto>.ToPagedList(jobDescriptions, paginationParameters.PageNumber, paginationParameters.PageSize, orderBy);
        }
        public async Task<JobDescription?> GetById(Guid id)
        {
            return await _dbContext.JobDescription.FindAsync(id);
        }
        //public async Task<JobDetailsDto?> GetJobDetails(Guid id)
        //{
        //    var jobInfor = await _dbContext.JobDescription.Where(j => j.Id == id)
        //.Select(j => new JobDetailsDto
        //{
        //    // Map properties you want to include in the new object
        //    Id = j.Id,
        //    Title = j.Title,
        //    Description = j.Description,
        //    Type = j.Type,
        //    Salary = j.Salary,
        //    Expirence = j.Expirence,
        //    ExpiredOn = j.ExpiredOn,
        //    Position = j.Position,
        //    Gender = j.Gender,
        //    Quantity = j.Quantity,
        //    CompanyId = j.CompanyId,
        //    SkillId = j.SkillId,
        //    CareerId = j.CareerId,
        //    JobRequired = j.JobRequired,
        //    JobBenefit = j.JobBenefit,
        //}).FirstOrDefaultAsync();
        //    return jobInfor;
        //}
        public async Task<JobDescription?> Delete(Guid id)
        {
            var jobDescription = await _dbContext.JobDescription.FindAsync(id);
            if (jobDescription != null)
            {
                _dbContext.JobDescription.Remove(jobDescription);
                await _dbContext.SaveChangesAsync();
            }
            return jobDescription;
        }
    }
}
