using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.CareerService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CareerController : ControllerBase
    {
        private readonly ICareerService _careerService;

        public CareerController(ICareerService careerService)
        {
            _careerService = careerService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCareer(CareerDto careerDto)
        {
            try
            {
                var createdCareer = await _careerService.CreateCareer(careerDto);
                return Ok(createdCareer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCareer(Guid id, CareerDto careerDto)
        {
            try
            {
                var updatedCareer = await _careerService.UpdateCareer(id, careerDto);
                if (updatedCareer == null) return NotFound();
                return Ok(updatedCareer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCareers()
        {
            try
            {
                var careers = await _careerService.GetAllCareers();
                return Ok(careers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCareerById(Guid id)
        {
            try
            {
                var career = await _careerService.GetCareerById(id);
                if (career == null) return NotFound();
                return Ok(career);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCareer(Guid id)
        {
            try
            {
                var deletedCareer = await _careerService.DeleteCareer(id);
                if (deletedCareer == null) return NotFound();
                return Ok(deletedCareer);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
