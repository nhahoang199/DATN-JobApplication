using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Helpers;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.CountryRepo
{
    public interface ICountryRepo
    {
        Task<Country> Create(Country country);
        Task<Country> Update(Country country);
        Task<PagedList<Country>> GetAll(PaginationParameters paginationParameters);
        Task<List<Country>> GetAllCountry();
        Task<Country?> GetById(Guid id);
        Task<Country?> Delete(Guid id);
    }
}
