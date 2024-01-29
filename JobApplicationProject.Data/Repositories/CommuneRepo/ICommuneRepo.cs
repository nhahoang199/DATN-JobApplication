using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CommuneRepo
{
    public interface ICommuneRepo
    {
        Task<Commune> Create(Commune commune);
        Task<Commune> Update(Commune commune);
        Task<PagedList<CommuneDto>> GetAll(PaginationParameters paginationParameters);
        Task<List<Commune>> GetCommuneByDistrictId(Guid districtId);
        Task<Commune?> GetById(Guid id);
        Task<Commune?> Delete(Guid id);
    }
}
