using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Data.Repositories.CommuneRepo;
using JobApplicationProject.Data.Repositories.CountryRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.AddressService
{
    public class AddressService : IAddressService
    {
        private readonly IAddressRepo _addressRepo;
        private readonly ICountryRepo _countryRepo;
        private readonly IProvinceRepo _provinceRepo;
        private readonly IDistrictRepo _districtRepo;
        private readonly ICommuneRepo _communeRepo;

        public AddressService(IDistrictRepo districtRepo, ICommuneRepo communeRepo, IAddressRepo addressRepo, ICountryRepo countryRepo, IProvinceRepo provinceRepo)
        {
            _districtRepo = districtRepo;
            _communeRepo = communeRepo;
            _addressRepo = addressRepo;
            _countryRepo = countryRepo;
            _provinceRepo = provinceRepo;
        }

        public async Task<Address> CreateAddress(AddressDto addressDto)
        {
            var address = new Address()
            {
                Id = Guid.NewGuid(),
                HouseNumber = addressDto.HouseNumber,
                Street = addressDto.Street,
                CountryId = addressDto.CountryId,
                ProvinceId = addressDto.ProvinceId,
                DistrictId = addressDto.DistrictId,
                CommuneId = addressDto.CommuneId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (addressDto.CountryId != null)
            {
                var country = await _countryRepo.GetById(addressDto.CountryId.GetValueOrDefault());
                if (country == null) throw new InvalidOperationException("Country not found");
                address.Country = country;
            }

            if (addressDto.ProvinceId != null)
            {
                var province = await _provinceRepo.GetById(addressDto.ProvinceId.GetValueOrDefault());
                if (province == null) throw new InvalidOperationException("Province not found");
                address.Province = province;
            }
            if (addressDto.DistrictId != null)
            {
                var district = await _districtRepo.GetById(addressDto.DistrictId.GetValueOrDefault());
                if (district == null) throw new InvalidOperationException("District not found");
                address.District = district;
            }
            if (addressDto.CommuneId != null)
            {
                var Commune = await _communeRepo.GetById(addressDto.CommuneId.GetValueOrDefault());
                if (Commune == null) throw new InvalidOperationException("Commune not found");
                address.Commune = Commune;
            }
            return await _addressRepo.Create(address);
        }

        public async Task<Address?> UpdateAddress(Guid id, AddressDto addressDto)
        {
            var existingAddress = await _addressRepo.GetById(id);

            if (existingAddress == null) throw new InvalidOperationException("Address not found");

            if (addressDto.CountryId != null)
            {
                var country = await _countryRepo.GetById(addressDto.CountryId.GetValueOrDefault());
                if (country == null) throw new InvalidOperationException("Country not found");
                existingAddress.Country = country;
            }

            if (addressDto.ProvinceId != null)
            {
                var province = await _provinceRepo.GetById(addressDto.ProvinceId.GetValueOrDefault());
                if (province == null) throw new InvalidOperationException("Province not found");
                existingAddress.Province = province;
            }
            if (addressDto.DistrictId != null)
            {
                var district = await _districtRepo.GetById(addressDto.DistrictId.GetValueOrDefault());
                if (district == null) throw new InvalidOperationException("District not found");
                existingAddress.District = district;
            }
            if (addressDto.CommuneId != null)
            {
                var Commune = await _communeRepo.GetById(addressDto.CommuneId.GetValueOrDefault());
                if (Commune == null) throw new InvalidOperationException("Commune not found");
                existingAddress.Commune = Commune;
            }

            existingAddress.HouseNumber = addressDto.HouseNumber;
            existingAddress.Street = addressDto.Street;
            existingAddress.CountryId = addressDto.CountryId;
            existingAddress.ProvinceId = addressDto.ProvinceId;
            existingAddress.DistrictId = addressDto.DistrictId;
            existingAddress.CommuneId = addressDto.CommuneId;
            existingAddress.UpdatedOn = DateTime.UtcNow;

            return await _addressRepo.Update(existingAddress);
        }

        public async Task<List<Address>> GetAllAddresses()
        {
            return await _addressRepo.GetAll();
        }

        public async Task<Address?> GetAddressById(Guid id)
        {
            return await _addressRepo.GetById(id);
        }

        public async Task<Address?> DeleteAddress(Guid id)
        {
            return await _addressRepo.Delete(id);
        }
    }
}
