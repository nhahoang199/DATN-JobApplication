using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.AddressRepo
{
    public class AddressRepo : IAddressRepo
    {
        private readonly DBContext _dbContext;
        public AddressRepo(DBContext context)
        {
            _dbContext = context;
        }
        public async Task<Address> Create(Address address)
        {
            await _dbContext.Address.AddAsync(address);
            await _dbContext.SaveChangesAsync();
            return address;
        }

        public async Task<Address> Update(Address address)
        {
            _dbContext.Address.Update(address);
            await _dbContext.SaveChangesAsync();
            return address;
        }

        public async Task<List<Address>> GetAll()
        {
            return await _dbContext.Address.ToListAsync();
        }

        public async Task<Address?> GetById(Guid id)
        {
            return await _dbContext.Address.FindAsync(id);
        }

        public async Task<Address?> Delete(Guid id)
        {
            var address = await _dbContext.Address.FindAsync(id);
            if (address != null)
            {
                _dbContext.Address.Remove(address);
                await _dbContext.SaveChangesAsync();
            }
            return address;
        }
    }
}
