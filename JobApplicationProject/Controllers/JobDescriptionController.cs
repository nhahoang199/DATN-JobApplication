using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Service.Services.JobApplicationService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobDescriptionController : ControllerBase
    {
        private readonly IJobDescriptionService _jobDescriptionService;

        public JobDescriptionController(IJobDescriptionService jobDescriptionService)
        {
            _jobDescriptionService = jobDescriptionService;
        }

        [HttpPost("createJob")]
        public async Task<IActionResult> CreateJobDescription(JobDescDto jobApplicationDto)
        {
            try
            {
                var createdJobDescription = await _jobDescriptionService.CreateJobDescription(jobApplicationDto);
                return Ok(createdJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJobDescription(Guid id, JobDescDto jobApplicationDto)
        {
            try
            {
                var updatedJobDescription = await _jobDescriptionService.UpdateJobDescription(id, jobApplicationDto);
                if (updatedJobDescription == null) return NotFound();
                return Ok(updatedJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllJobDescriptions([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var jobApplications = await _jobDescriptionService.GetAllJobDescriptions(paginationParameters);

                return Ok(jobApplications);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("JobsRefer")]
        public async Task<IActionResult> GetJobsRefer([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var jobApplications = await _jobDescriptionService.GetJobsRefer(paginationParameters);

                return Ok(jobApplications);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetJobDescriptionById(Guid id)
        {
            try
            {
                var jobApplication = await _jobDescriptionService.GetJobDescriptionById(id);
                if (jobApplication == null) return NotFound();
                return Ok(jobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("details/{id}")]
        public async Task<IActionResult> GetJobDetails(Guid id)
        {
            try
            {
                var jobApplication = await _jobDescriptionService.GetJobDetails(id);
                if (jobApplication == null) return NotFound();
                return Ok(jobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobDescription(Guid id)
        {
            try
            {
                var deletedJobApplication = await _jobDescriptionService.DeleteJobDescription(id);
                if (deletedJobApplication == null) return NotFound();
                return Ok(deletedJobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
