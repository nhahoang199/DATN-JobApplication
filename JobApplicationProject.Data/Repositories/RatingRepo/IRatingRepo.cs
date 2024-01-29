using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Repositories.RatingRepo
{
    public interface IRatingRepo
    {
        Task<Rating> Create(Rating rating);
        Task<Rating> Update(Rating rating);
        Task<List<Rating>> GetAll();
        Task<Rating?> GetById(Guid id);
        Task<Rating?> Delete(Guid id);
    }
}
