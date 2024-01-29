using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.DistrictRepo
{
    public interface IDistrictRepo
    {
        Task<District> Create(District district);
        Task<District> Update(District district);
        Task<PagedList<DistrictDto>> GetAll(PaginationParameters paginationParameters);
        Task<List<District>> GetDistrictsByProviceId(Guid provinceId);
        Task<District?> GetById(Guid id);
        Task<District?> Delete(Guid id);
    }
}
