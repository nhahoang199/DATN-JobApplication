using JobApplicationProject.Core.Dtos;
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
        Task<List<District>> GetAllDistricts();
        Task<District?> GetDistrictById(Guid id);
        Task<District?> DeleteDistrict(Guid id);
    }
}
