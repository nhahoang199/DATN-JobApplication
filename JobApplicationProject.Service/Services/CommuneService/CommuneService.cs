using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CommuneRepo;
using JobApplicationProject.Data.Repositories.CountryRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using JobApplicationProject.Service.Services.DistrictService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CommuneService
{
    public class CommuneService : ICommuneService
    {
        private readonly IProvinceRepo _provinceRepo;
        private readonly IDistrictRepo _districtRepo;
        private readonly ICommuneRepo _communeRepo;

        public CommuneService(IDistrictRepo districtRepo, ICommuneRepo communeRepo, IProvinceRepo provinceRepo)
        {
            _districtRepo = districtRepo;
            _communeRepo = communeRepo;
            _provinceRepo = provinceRepo;
        }

        public async Task<Commune> CreateCommune(CommuneDto communeDto)
        {
            var commune = new Commune()
            {
                Id = Guid.NewGuid(),
                Name = communeDto.Name,
                DistrictId = communeDto.DistrictId,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            if (communeDto.DistrictId != null)
            {
                var district = await _districtRepo.GetById(communeDto.DistrictId.GetValueOrDefault());
                if (district == null) throw new InvalidOperationException("District not found");
                commune.District = district;
            }

            return await _communeRepo.Create(commune);
        }

        public async Task<Commune?> UpdateCommune(Guid id, CommuneDto communeDto)
        {
            var existingCommune = await _communeRepo.GetById(id);

            if (existingCommune == null) throw new InvalidOperationException("Commune not found");

            if (communeDto.DistrictId != null)
            {
                var district = await _districtRepo.GetById(communeDto.DistrictId.GetValueOrDefault());
                if (district == null) throw new InvalidOperationException("District not found");
                existingCommune.District = district;
            }

            existingCommune.Name = communeDto.Name;
            existingCommune.DistrictId = communeDto.DistrictId;
            existingCommune.UpdatedOn = DateTime.UtcNow;

            return await _communeRepo.Update(existingCommune);
        }

        public async Task<PagedList<CommuneDto>> GetAllCommunes(PaginationParameters paginationParameters)
        {
            return await _communeRepo.GetAll(paginationParameters);
        }

        public async Task<Commune?> GetCommuneById(Guid id)
        {
            return await _communeRepo.GetById(id);
        }
        public async Task<CommuneDetails?> GetCommuneDetailsById(Guid id)
        {
            var commune = await _communeRepo.GetById(id);
            var communeDetails = new CommuneDetails()
            {
                Id = commune.Id,
                Name = commune.Name,
                DistrictId = commune.DistrictId ?? null,
                UpdatedOn = commune.UpdatedOn,
                CreatedOn = commune.CreatedOn,
            };
            var district = await _districtRepo.GetById(commune.DistrictId.GetValueOrDefault());
            if (district != null)
            {
                communeDetails.ProvinceId = district.ProvinceId;
                var province = await _provinceRepo.GetById(district.ProvinceId.GetValueOrDefault());
                communeDetails.CountryId = province.CountryId;
            }
            return communeDetails;
        }
        public async Task<Commune?> DeleteCommune(Guid id)
        {
            return await _communeRepo.Delete(id);
        }

        public async Task<List<Commune>> GetCommuneByDistrictId(Guid districtId)
        {
            return await _communeRepo.GetCommuneByDistrictId(districtId);
        }
    }
}
