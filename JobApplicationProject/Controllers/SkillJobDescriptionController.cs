using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.SkillJobDescriptionService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillJobDescriptionController : ControllerBase
    {
        private readonly ISkillJobDescriptionService _skillJobDescriptionService;

        public SkillJobDescriptionController(ISkillJobDescriptionService skillJobDescriptionService)
        {
            _skillJobDescriptionService = skillJobDescriptionService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateSkillJobDescription(SkillJobDescriptionDto skillJobDescriptionDto)
        {
            try
            {
                var createdSkillJobDescription = await _skillJobDescriptionService.CreateSkillJobDescription(skillJobDescriptionDto);
                return Ok(createdSkillJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSkillJobDescription(Guid id, SkillJobDescriptionDto skillJobDescriptionDto)
        {
            try
            {
                var updatedSkillJobDescription = await _skillJobDescriptionService.UpdateSkillJobDescription(id, skillJobDescriptionDto);
                if (updatedSkillJobDescription == null) return NotFound();
                return Ok(updatedSkillJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSkillJobDescriptions()
        {
            try
            {
                var skillJobDescriptions = await _skillJobDescriptionService.GetAllSkillJobDescriptions();
                return Ok(skillJobDescriptions);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkillJobDescriptionById(Guid id)
        {
            try
            {
                var skillJobDescription = await _skillJobDescriptionService.GetSkillJobDescriptionById(id);
                if (skillJobDescription == null) return NotFound();
                return Ok(skillJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkillJobDescription(Guid id)
        {
            try
            {
                var deletedSkillJobDescription = await _skillJobDescriptionService.DeleteSkillJobDescription(id);
                if (deletedSkillJobDescription == null) return NotFound();
                return Ok(deletedSkillJobDescription);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
