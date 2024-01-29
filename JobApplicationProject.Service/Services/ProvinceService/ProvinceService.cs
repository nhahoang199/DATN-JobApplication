using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CountryRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using Microsoft.AspNetCore.Http.HttpResults;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.ProvinceService
{
    public class ProvinceService : IProvinceService
    {
        private readonly IProvinceRepo _provinceRepo;
        private readonly ICountryRepo _countryRepo;

        public ProvinceService(IProvinceRepo provinceRepo, ICountryRepo countryRepo)
        {
            _provinceRepo = provinceRepo;
            _countryRepo = countryRepo;
        }

        public async Task<Province> CreateProvince(ProvinceDto provinceDto)
        {
            var province = new Province()
            {
                Id = Guid.NewGuid(),
                Name = provinceDto.Name,
                CountryId = provinceDto.CountryId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (provinceDto.CountryId != null)
            {
                var country = await _countryRepo.GetById(provinceDto.CountryId.GetValueOrDefault());
                if (country == null) throw new InvalidOperationException("Country not found");
                province.Country = country;
            }

            return await _provinceRepo.Create(province);
        }

        public async Task<Province?> UpdateProvince(Guid id, ProvinceDto provinceDto)
        {
            var existingProvince = await _provinceRepo.GetById(id);

            if (existingProvince == null) throw new InvalidOperationException("Province not found");

            if (provinceDto.CountryId != null)
            {
                var country = await _countryRepo.GetById(provinceDto.CountryId.GetValueOrDefault());
                if (country == null) throw new InvalidOperationException("Country not found");
                existingProvince.Country = country;
            }

            existingProvince.Name = provinceDto.Name;
            existingProvince.CountryId = provinceDto.CountryId;
            existingProvince.UpdatedOn = DateTime.UtcNow;

            return await _provinceRepo.Update(existingProvince);
        }

        public async Task<PagedList<ProvinceDto>> GetAllProvinces(PaginationParameters paginationParameters)
        {
            return await _provinceRepo.GetAll(paginationParameters);
        }

        public async Task<Province?> GetProvinceById(Guid id)
        {
            return await _provinceRepo.GetById(id);
        }

        public async Task<Province?> DeleteProvince(Guid id)
        {
            return await _provinceRepo.Delete(id);
        }

        public async Task<List<Province>> GetProvincesByCountryId(Guid countryId)
        {
            return await _provinceRepo.GetProvincesByCountryId(countryId);
        }
    }
}
