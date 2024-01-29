using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CountryRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CountryService
{
    public class CountryService : ICountryService
    {
        private readonly ICountryRepo _countryRepo;

        public CountryService(ICountryRepo countryRepo)
        {
            _countryRepo = countryRepo;
        }

        public async Task<Country> CreateCountry(CountryDto countryDto)
        {
            var country = new Country()
            {
                Id = Guid.NewGuid(),
                Name = countryDto.Name,
                CountryCode = countryDto.CountryCode,
                CountryISOCode = countryDto.CountryISOCode,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };
            return await _countryRepo.Create(country);
        }

        public async Task<Country?> UpdateCountry(Guid id, CountryDto countryDto)
        {
            var existingCountry = await _countryRepo.GetById(id);

            if (existingCountry == null) throw new InvalidOperationException("Country not found");

            existingCountry.Name = countryDto.Name;
            existingCountry.CountryCode = countryDto.CountryCode;
            existingCountry.CountryISOCode = countryDto.CountryISOCode;
            existingCountry.UpdatedOn = DateTime.UtcNow;

            return await _countryRepo.Update(existingCountry);
        }

        public async Task<PagedList<Country>> GetAllCountries(PaginationParameters paginationParameters)
        {
            var countryList = await _countryRepo.GetAll(paginationParameters);
            return new PagedList<Country>(countryList, countryList.TotalCount, countryList.CurrentPage, countryList.PageSize, countryList.TotalPages);
        }
        public async Task<List<Country>> GetAllCountry()
        {
            return await _countryRepo.GetAllCountry();
        }

        public async Task<Country?> GetCountryById(Guid id)
        {
            return await _countryRepo.GetById(id);
        }

        public async Task<Country?> DeleteCountry(Guid id)
        {
            return await _countryRepo.Delete(id);
        }
    }
}
