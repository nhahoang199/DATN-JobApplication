using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.CompanyService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProvince(CompanyDto companyDto)
        {
            try
            {
                var createdCompany = await _companyService.CreateCompany(companyDto);
                return Ok(createdCompany);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProvince(Guid id, CompanyDto companyDto)
        {
            try
            {
                var updatedCompany = await _companyService.UpdateCompany(id, companyDto);
                if (updatedCompany == null) return NotFound();
                return Ok(updatedCompany);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProvinces()
        {
            try
            {
                var companies = await _companyService.GetAllCompanies();
                return Ok(companies);
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
                var company = await _companyService.GetCompanyById(id);
                if (company == null) return NotFound();
                return Ok(company);
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
                var deletedCompany = await _companyService.DeleteCompany(id);
                if (deletedCompany == null) return NotFound();
                return Ok(deletedCompany);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
