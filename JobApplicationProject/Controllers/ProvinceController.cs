using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.CountryService;
using JobApplicationProject.Service.Services.ProvinceService;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProvinceController : ControllerBase
    {
        private readonly IProvinceService _provinceService;

        public ProvinceController(IProvinceService provinceService)
        {
            _provinceService = provinceService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProvince(ProvinceDto provinceDto)
        {
            try
            {
                var createdProvince = await _provinceService.CreateProvince(provinceDto);
                return Ok(createdProvince);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProvince(Guid id, ProvinceDto provinceDto)
        {
            try
            {
                var updatedProvince = await _provinceService.UpdateProvince(id, provinceDto);
                if (updatedProvince == null) return NotFound();
                return Ok(updatedProvince);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProvinces([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var provinces = await _provinceService.GetAllProvinces(paginationParameters);
                return Ok(new ResponseModel<ProvinceDto>(provinces, provinces.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProvinceById(Guid id)
        {
            try
            {
                var province = await _provinceService.GetProvinceById(id);
                if (province == null)
                    return NotFound();
                return Ok(province);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("getProvinceByCountryId")]
        public async Task<IActionResult> GetProvinceByCountryId(Guid countryId)
        {
            try
            {
                var province = await _provinceService.GetProvincesByCountryId(countryId);
                //if (province == null)
                //    return NotFound();
                return Ok(province);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvince(Guid id)
        {
            try
            {
                var deletedProvince = await _provinceService.DeleteProvince(id);
                if (deletedProvince == null) return NotFound();
                return Ok(deletedProvince);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
