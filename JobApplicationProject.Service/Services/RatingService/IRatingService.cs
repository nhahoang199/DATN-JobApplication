using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.RatingService
{
    public interface IRatingService
    {
        Task<Rating> CreateRating(RatingDto ratingDto);
        Task<Rating?> UpdateRating(Guid id, RatingDto ratingDto);
        Task<List<Rating>> GetAllRatings();
        Task<Rating?> GetRatingById(Guid id);
        Task<Rating?> DeleteRating(Guid id);
    }
}
