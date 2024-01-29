using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.ProvinceRepo
{
    public interface IProvinceRepo
    {
        Task<Province> Create(Province province);
        Task<Province> Update(Province province);
        Task<PagedList<ProvinceDto>> GetAll(PaginationParameters paginationParameters);
        Task<List<Province>> GetProvincesByCountryId(Guid countryId);
        Task<Province?> GetById(Guid id);
        Task<Province?> Delete(Guid id);
    }
}
