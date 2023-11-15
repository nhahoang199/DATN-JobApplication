using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.AddressService;
using JobApplicationProject.Service.Services.CommuneService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateProvince(AddressDto addressDto)
        {
            try
            {
                var createdAddress = await _addressService.CreateAddress(addressDto);
                return Ok(createdAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProvince(Guid id, AddressDto addressDto)
        {
            try
            {
                var updatedAddress = await _addressService.UpdateAddress(id, addressDto);
                if (updatedAddress == null) return NotFound();
                return Ok(updatedAddress);
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
                var addresss = await _addressService.GetAllAddresses();
                return Ok(addresss);
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
                var address = await _addressService.GetAddressById(id);
                if (address == null) return NotFound();
                return Ok(address);
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
                var deletedAddress = await _addressService.DeleteAddress(id);
                if (deletedAddress == null) return NotFound();
                return Ok(deletedAddress);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
