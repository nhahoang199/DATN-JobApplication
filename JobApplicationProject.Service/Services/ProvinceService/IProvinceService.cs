using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.ProvinceService
{
    public interface IProvinceService
    {
        Task<Province> CreateProvince(ProvinceDto provinceDto);
        Task<Province?> UpdateProvince(Guid id, ProvinceDto province);
        Task<List<Province>> GetAllProvinces();
        Task<Province?> GetProvinceById(Guid id);
        Task<Province?> DeleteProvince(Guid id);
    }
}
