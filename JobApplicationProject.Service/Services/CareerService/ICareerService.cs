using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CareerService
{
    public interface ICareerService
    {
        Task<Career> CreateCareer(CareerDto careerDto);
        Task<Career?> UpdateCareer(Guid id, CareerDto careerDto);
        Task<List<Career>> GetAllCareers();
        Task<Career?> GetCareerById(Guid id);
        Task<Career?> DeleteCareer(Guid id);
    }
}
