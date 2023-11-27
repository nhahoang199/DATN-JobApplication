using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.SkillService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly ISkillService _skillService;

        public SkillController(ISkillService skillService)
        {
            _skillService = skillService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateSkill(SkillDto skillDto)
        {
            try
            {
                var createdSkill = await _skillService.CreateSkill(skillDto);
                return Ok(createdSkill);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSkill(Guid id, SkillDto skillDto)
        {
            try
            {
                var updatedSkill = await _skillService.UpdateSkill(id, skillDto);
                if (updatedSkill == null) return NotFound();
                return Ok(updatedSkill);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSkills()
        {
            try
            {
                var skills = await _skillService.GetAllSkills();
                return Ok(skills);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkillById(Guid id)
        {
            try
            {
                var skill = await _skillService.GetSkillById(id);
                if (skill == null) return NotFound();
                return Ok(skill);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(Guid id)
        {
            try
            {
                var deletedSkill = await _skillService.DeleteSkill(id);
                if (deletedSkill == null) return NotFound();
                return Ok(deletedSkill);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
