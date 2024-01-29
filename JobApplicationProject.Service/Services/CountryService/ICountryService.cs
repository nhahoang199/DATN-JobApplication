using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.CountryService
{
    public interface ICountryService
    {
        Task<Country> CreateCountry(CountryDto countryDto);
        Task<Country?> UpdateCountry(Guid id, CountryDto countryDto);
        Task<PagedList<Country>> GetAllCountries(PaginationParameters paginationParameters);
        Task<List<Country>> GetAllCountry();
        Task<Country?> GetCountryById(Guid id);
        Task<Country?> DeleteCountry(Guid id);
    }
}
