using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.CompanyService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> CreateCompany(CompanyDto companyDto)
        {
            try
            {
                var createdCompany = await _companyService.CreateCompany(companyDto);
                return Ok(createdCompany);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany(Guid id, CompanyDto companyDto)
        {
            try
            {
                var updatedCompany = await _companyService.UpdateCompany(id, companyDto);
                if (updatedCompany == null) return NotFound();
                return Ok(updatedCompany);
            }
            catch (DbUpdateException ex)
            {
                // Xem inner exception để lấy thông tin chi tiết
                var innerException = ex.InnerException;
                // Xử lý hoặc đưa ra thông báo tùy thuộc vào yêu cầu của bạn
                return BadRequest(innerException);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCompanys([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var companies = await _companyService.GetAllCompanies(paginationParameters);
                return Ok(new ResponseModel<Company>(companies, companies.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyById(Guid id)
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
        [HttpGet("searchByName")]
        public async Task<IActionResult> SearchCompanyByName(string name)
        {
            try
            {
                var companyList = await _companyService.SearchCompanyByName(name.ToLower().Trim());
                return Ok(companyList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(Guid id)
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
