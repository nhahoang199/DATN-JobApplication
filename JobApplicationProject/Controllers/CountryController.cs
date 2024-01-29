using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.CountryService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Org.BouncyCastle.Utilities;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService _countryService;

        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCountry(CountryDto countryDto)
        {
            try
            {
                var createdCountry = await _countryService.CreateCountry(countryDto);
                return Ok(createdCountry);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCountry(Guid id, CountryDto countryDto)
        {
            try
            {
                var updatedCountry = await _countryService.UpdateCountry(id, countryDto);
                if (updatedCountry == null)
                    return NotFound();
                return Ok(updatedCountry);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCountries([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var countries = await _countryService.GetAllCountries(paginationParameters);
                //Response.Headers.Add("X-Pagination", countries.GetHeader());
                return Ok(new ResponseModel<Country>(countries, countries.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllCountry()
        {
            try
            {
                var countries = await _countryService.GetAllCountry();
                //Response.Headers.Add("X-Pagination", countries.GetHeader());
                return Ok(countries);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetCountryById(Guid id)
        {
            try
            {
                var country = await _countryService.GetCountryById(id);
                if (country == null)
                    return NotFound();
                return Ok(country);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCountry(Guid id)
        {
            try
            {
                var deletedCountry = await _countryService.DeleteCountry(id);
                if (deletedCountry == null)
                    return NotFound();
                return Ok(deletedCountry);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
