using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.DistrictService;
using JobApplicationProject.Service.Services.ProvinceService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DistrictController : ControllerBase
    {
        private readonly IDistrictService _districtService;

        public DistrictController(IDistrictService districtService)
        {
            _districtService = districtService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDistrict(DistrictDto districtDto)
        {
            try
            {
                var createdDistrict = await _districtService.CreateDistrict(districtDto);
                return Ok(createdDistrict);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDistrict(Guid id, DistrictDto districtDto)
        {
            try
            {
                var updatedDistrict = await _districtService.UpdateDistrict(id, districtDto);
                if (updatedDistrict == null) return NotFound();
                return Ok(updatedDistrict);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDistricts([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var districts = await _districtService.GetAllDistricts(paginationParameters);
                return Ok(new ResponseModel<DistrictDto>(districts, districts.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDistrictById(Guid id)
        {
            try
            {
                var district = await _districtService.GetDistrictById(id);
                if (district == null) return NotFound();
                return Ok(district);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getDetails")]
        public async Task<IActionResult> GetDistrictDetailsById(Guid id)
        {
            try
            {
                var district = await _districtService.GetDetailsById(id);
                if (district == null) return NotFound();
                return Ok(district);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getByProvinceId")]
        public async Task<IActionResult> GetDistrictsByProviceId(Guid provinceId)
        {
            try
            {
                var district = await _districtService.GetDistrictsByProviceId(provinceId);
                if (district == null) return NotFound();
                return Ok(district);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDistrict(Guid id)
        {
            try
            {
                var deletedDistrict = await _districtService.DeleteDistrict(id);
                if (deletedDistrict == null) return NotFound();
                return Ok(deletedDistrict);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
