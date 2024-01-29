using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.DistrictService
{
    public class DistrictService : IDistrictService
    {
        private readonly IDistrictRepo _districtRepo;
        private readonly IProvinceRepo _provinceRepo;

        public DistrictService(IDistrictRepo districtRepo, IProvinceRepo provinceRepo)
        {
            _districtRepo = districtRepo;
            _provinceRepo = provinceRepo;
        }

        public async Task<District> CreateDistrict(DistrictDto districtDto)
        {
            var district = new District()
            {
                Id = Guid.NewGuid(),
                Name = districtDto.Name,
                ProvinceId = districtDto.ProvinceId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (districtDto.ProvinceId != null)
            {
                var province = await _provinceRepo.GetById(districtDto.ProvinceId.GetValueOrDefault());
                if (province == null) throw new InvalidOperationException("Province not found");
                district.Province = province;
            }

            return await _districtRepo.Create(district);
        }

        public async Task<District?> UpdateDistrict(Guid id, DistrictDto districtDto)
        {
            var existingDistrict = await _districtRepo.GetById(id);

            if (existingDistrict == null) throw new InvalidOperationException("District not found");

            if (districtDto.ProvinceId != null)
            {
                var province = await _provinceRepo.GetById(districtDto.ProvinceId.GetValueOrDefault());
                if (province == null) throw new InvalidOperationException("Province not found");
                existingDistrict.Province = province;
            }

            existingDistrict.Name = districtDto.Name;
            existingDistrict.ProvinceId = districtDto.ProvinceId;
            existingDistrict.UpdatedOn = DateTime.UtcNow;

            return await _districtRepo.Update(existingDistrict);
        }

        public async Task<PagedList<DistrictDto>> GetAllDistricts(PaginationParameters paginationParameters)
        {
            return await _districtRepo.GetAll(paginationParameters);
        }
        public async Task<List<District>> GetDistrictsByProviceId(Guid provinceId)
        {
            return await _districtRepo.GetDistrictsByProviceId(provinceId);
        }
        public async Task<District?> GetDistrictById(Guid id)
        {
            return await _districtRepo.GetById(id);
        }
        public async Task<DistrictDetails?> GetDetailsById(Guid id)
        {
            var district = await _districtRepo.GetById(id);
            var province = await _provinceRepo.GetById(district.ProvinceId.GetValueOrDefault());
            return new DistrictDetails()
            {
                Id = district.Id,
                Name = district.Name,
                ProvinceId = district.ProvinceId ?? null,
                CountryId = province?.CountryId ?? null,
                CreatedOn = district.CreatedOn,
                UpdatedOn = district.UpdatedOn,
            };
        }
        public async Task<District?> DeleteDistrict(Guid id)
        {
            return await _districtRepo.Delete(id);
        }
    }
}
