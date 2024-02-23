using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.JobApplicationService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobApplicationController : ControllerBase
    {
        private readonly IJobApplicationService _jobApplicationService;

        public JobApplicationController(IJobApplicationService jobApplicationService)
        {
            _jobApplicationService = jobApplicationService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateJobApplication(JobApplicationDto jobApplicationDto)
        {
            try
            {
                var createdJobApplication = await _jobApplicationService.CreateJobApplication(jobApplicationDto);
                return Ok(createdJobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJobApplication(Guid id, JobApplicationDto jobApplicationDto)
        {
            try
            {
                var updatedJobApplication = await _jobApplicationService.UpdateJobApplication(id, jobApplicationDto);
                if (updatedJobApplication == null) return NotFound();
                return Ok(updatedJobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllJobApplications([FromQuery]  PaginationParameters paginationParameters)
        {
            try
            {
                var jobApplications = await _jobApplicationService.GetAllJobApplications(paginationParameters);
                return Ok(new ResponseModel<JobApplicationDto>(jobApplications, jobApplications.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetJobApplicationById(Guid id)
        {
            try
            {
                var jobApplication = await _jobApplicationService.GetJobApplicationById(id);
                if (jobApplication == null) return NotFound();
                return Ok(jobApplication);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobApplication(Guid id)
        {
            try
            {
                var deletedJobApplication = await _jobApplicationService.DeleteJobApplication(id);
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
