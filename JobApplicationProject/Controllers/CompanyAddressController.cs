using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.CompanyAddressService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyAddressController : ControllerBase
    {
        private readonly ICompanyAddressService _companyAddressService;

        public CompanyAddressController(ICompanyAddressService companyAddressService)
        {
            _companyAddressService = companyAddressService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCompanyAddress(CompanyAddressDto companyAddressDto)
        {
            try
            {
                var createdCompanyAddress = await _companyAddressService.CreateCompanyAddress(companyAddressDto);
                return Ok(createdCompanyAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompanyAddress(Guid id, CompanyAddressDto companyAddressDto)
        {
            try
            {
                var updatedCompanyAddress = await _companyAddressService.UpdateCompanyAddress(id, companyAddressDto);
                if (updatedCompanyAddress == null) return NotFound();
                return Ok(updatedCompanyAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCompanyAddresss()
        {
            try
            {
                var companyAddresss = await _companyAddressService.GetAllCompanyAddresss();
                return Ok(companyAddresss);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyAddressById(Guid id)
        {
            try
            {
                var companyAddress = await _companyAddressService.GetCompanyAddressById(id);
                if (companyAddress == null) return NotFound();
                return Ok(companyAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyAddress(Guid id)
        {
            try
            {
                var deletedCompanyAddress = await _companyAddressService.DeleteCompanyAddress(id);
                if (deletedCompanyAddress == null) return NotFound();
                return Ok(deletedCompanyAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
