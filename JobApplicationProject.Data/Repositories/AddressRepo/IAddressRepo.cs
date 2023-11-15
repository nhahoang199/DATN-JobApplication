using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.AddressRepo
{
    public interface IAddressRepo
    {
        Task<Address> Create(Address address);
        Task<Address> Update(Address address);
        Task<List<Address>> GetAll();
        Task<Address?> GetById(Guid id);
        Task<Address?> Delete(Guid id);
    }
}
