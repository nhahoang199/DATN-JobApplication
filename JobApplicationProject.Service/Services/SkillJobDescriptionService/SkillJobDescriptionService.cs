using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.SkillJobDescriptionRepo;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JobApplicationProject.Service.Services.JobApplicationService;
using JobApplicationProject.Service.Services.SkillJobDescriptionService;
using JobApplicationProject.Data.Repositories.SkillJobApplicationRepo;
using JobApplicationProject.Data.Repositories.SkillRepo;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;

namespace JobApplicationProject.Service.Services.SkillJobDescriptionService
{
    public class SkillJobDescriptionService : ISkillJobDescriptionService
    {
        private readonly ISkillJobDescriptionRepo _skillJobDescriptionRepo;
        private readonly IJobDescriptionRepo _jobDescriptionRepo;
        private readonly ISkillRepo _skillRepo;

        public SkillJobDescriptionService(IJobDescriptionRepo jobDescription, ISkillJobDescriptionRepo skillJobDescriptionRepo, ISkillRepo skillRepo)
        {
            _jobDescriptionRepo = jobDescription;
            _skillJobDescriptionRepo = skillJobDescriptionRepo;
            _skillRepo = skillRepo;
        }

        public async Task<SkillJobDescription> CreateSkillJobDescription(SkillJobDescriptionDto skillJobDescriptionDto)
        {
            var skillJobDescription = new SkillJobDescription()
            {
                Id = Guid.NewGuid(),
                SkillId = skillJobDescriptionDto.SkillId,
                JobDescriptionId = skillJobDescriptionDto.JobDescriptionId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            var skill = await _skillRepo.GetById(skillJobDescriptionDto.SkillId);
            if (skill == null) throw new InvalidOperationException("Skill not found");
            skillJobDescription.Skill = skill;

            var jobDescription = await _jobDescriptionRepo.GetById(skillJobDescriptionDto.JobDescriptionId);
            if (jobDescription == null) throw new InvalidOperationException("Company not found");
            skillJobDescription.JobDescription = jobDescription;

            return await _skillJobDescriptionRepo.Create(skillJobDescription);
        }

        public async Task<SkillJobDescription?> UpdateSkillJobDescription(Guid id, SkillJobDescriptionDto skillJobDescriptionDto)
        {
            var existingSkillJobDescription = await _skillJobDescriptionRepo.GetById(id);

            if (existingSkillJobDescription == null) throw new InvalidOperationException("SkillJobDescription not found");

            var skill = await _skillRepo.GetById(skillJobDescriptionDto.SkillId);
            if (skill == null) throw new InvalidOperationException("Skill not found");
            existingSkillJobDescription.Skill = skill;

            var jobDescription = await _jobDescriptionRepo.GetById(skillJobDescriptionDto.JobDescriptionId);
            if (jobDescription == null) throw new InvalidOperationException("Company not found");
            existingSkillJobDescription.JobDescription = jobDescription;

            existingSkillJobDescription.UpdatedOn = DateTime.UtcNow;

            return await _skillJobDescriptionRepo.Update(existingSkillJobDescription);
        }

        public async Task<List<SkillJobDescription>> GetAllSkillJobDescriptions()
        {
            return await _skillJobDescriptionRepo.GetAll();
        }

        public async Task<SkillJobDescription?> GetSkillJobDescriptionById(Guid id)
        {
            return await _skillJobDescriptionRepo.GetById(id);
        }

        public async Task<SkillJobDescription?> DeleteSkillJobDescription(Guid id)
        {
            return await _skillJobDescriptionRepo.Delete(id);
        }
    }
}
