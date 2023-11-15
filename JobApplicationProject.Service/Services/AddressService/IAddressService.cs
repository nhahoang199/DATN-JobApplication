
using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.AddressService
{
    public interface IAddressService
    {
        Task<Address> CreateAddress(AddressDto addressDto);
        Task<Address?> UpdateAddress(Guid id, AddressDto addressDto);
        Task<List<Address>> GetAllAddresses();
        Task<Address?> GetAddressById(Guid id);
        Task<Address?> DeleteAddress(Guid id);
    }
}
