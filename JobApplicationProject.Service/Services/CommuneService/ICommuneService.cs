using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CommuneService
{
    public interface ICommuneService
    {
        Task<Commune> CreateCommune(CommuneDto communeDto);
        Task<Commune?> UpdateCommune(Guid id, CommuneDto communeDto);
        Task<List<Commune>> GetAllCommunes();
        Task<Commune?> GetCommuneById(Guid id);
        Task<Commune?> DeleteCommune(Guid id);
    }
}
