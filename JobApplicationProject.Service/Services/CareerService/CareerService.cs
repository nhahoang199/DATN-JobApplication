using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CareerRepo;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CareerService
{
    public class CareerService : ICareerService
    {
        private readonly ICareerRepo _careerRepo;

        public CareerService(ICareerRepo careerRepo)
        {
            _careerRepo = careerRepo;
        }

        public async Task<Career> CreateCareer(CareerDto careerDto)
        {
            var career = new Career()
            {
                Id = Guid.NewGuid(),
                Name = careerDto.Name,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            return await _careerRepo.Create(career);
        }

        public async Task<Career?> UpdateCareer(Guid id, CareerDto careerDto)
        {
            var existingCareer = await _careerRepo.GetById(id);

            if (existingCareer == null) throw new InvalidOperationException("Career not found");

            existingCareer.Name = careerDto.Name;
            existingCareer.UpdatedOn = DateTime.UtcNow;

            return await _careerRepo.Update(existingCareer);
        }

        public async Task<List<Career>> GetAllCareers()
        {
            return await _careerRepo.GetAll();
        }

        public async Task<Career?> GetCareerById(Guid id)
        {
            return await _careerRepo.GetById(id);
        }

        public async Task<Career?> DeleteCareer(Guid id)
        {
            return await _careerRepo.Delete(id);
        }
    }
}
