using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Service.Services.CommuneService;
using JobApplicationProject.Service.Services.DistrictService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommuneController : ControllerBase
    {
        private readonly ICommuneService _communeService;

        public CommuneController(ICommuneService communeService)
        {
            _communeService = communeService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCommune(CommuneDto communeDto)
        {
            try
            {
                var createdCommune = await _communeService.CreateCommune(communeDto);
                return Ok(createdCommune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCommune(Guid id, CommuneDto communeDto)
        {
            try
            {
                var updatedCommune = await _communeService.UpdateCommune(id, communeDto);
                if (updatedCommune == null) return NotFound();
                return Ok(updatedCommune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCommunes([FromQuery] PaginationParameters paginationParameters)
        {
            try
            {
                var communes = await _communeService.GetAllCommunes(paginationParameters);
                return Ok(new ResponseModel<CommuneDto>(communes, communes.GetPagination()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommuneById(Guid id)
        {
            try
            {
                var commune = await _communeService.GetCommuneById(id);
                if (commune == null) return NotFound();
                return Ok(commune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getDetails")]
        public async Task<IActionResult> GetCommuneDetailsById(Guid id)
        {
            try
            {
                var commune = await _communeService.GetCommuneDetailsById(id);
                if (commune == null) return NotFound();
                return Ok(commune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("getCommuneByDistrictId")]
        public async Task<IActionResult> GetCommuneByDistrictId(Guid districtId)
        {
            try
            {
                var commune = await _communeService.GetCommuneByDistrictId(districtId);
                if (commune == null) return NotFound();
                return Ok(commune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommune(Guid id)
        {
            try
            {
                var deletedCommune = await _communeService.DeleteCommune(id);
                if (deletedCommune == null) return NotFound();
                return Ok(deletedCommune);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
