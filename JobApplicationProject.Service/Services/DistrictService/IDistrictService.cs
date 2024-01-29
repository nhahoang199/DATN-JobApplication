using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.DistrictService
{
    public interface IDistrictService
    {
        Task<District> CreateDistrict(DistrictDto districtDto);
        Task<District?> UpdateDistrict(Guid id, DistrictDto districtDto);
        Task<PagedList<DistrictDto>> GetAllDistricts(PaginationParameters paginationParameters);
        Task<List<District>> GetDistrictsByProviceId(Guid provinceId);
        Task<District?> GetDistrictById(Guid id);
        Task<DistrictDetails> GetDetailsById(Guid id);
        Task<District?> DeleteDistrict(Guid id);
    }
}
