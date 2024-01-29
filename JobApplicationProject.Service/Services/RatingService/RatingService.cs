using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Core.Models;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Data.Repositories.RatingRepo;
using JobApplicationProject.Data.Repositories.UserRepo;
using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Services.RatingService
{
    public class RatingService : IRatingService
    {
        private readonly IRatingRepo _ratingRepo;
        private readonly ICompanyRepo _companyRepo;
        private readonly IUserRepository _userRepo;

        public RatingService(IRatingRepo ratingRepo, ICompanyRepo companyRepo, IUserRepository userRepo)
        {
            _ratingRepo = ratingRepo;
            _companyRepo = companyRepo;
            _userRepo = userRepo;
        }

        public async Task<Rating> CreateRating(RatingDto ratingDto)
        {
            var rating = new Rating()
            {
                Id = Guid.NewGuid(),
                CompanyId = ratingDto.CompanyId,
                UserId = ratingDto.UserId,
                Title = ratingDto.Title,
                Message = ratingDto.Message,
                OverallScore = ratingDto.OverallScore,
                BenefitScore = ratingDto.BenefitScore,
                TraingScore = ratingDto.TraingScore,
                CareScore = ratingDto.CareScore,
                CultureScore = ratingDto.CultureScore,
                WorkspaceScore = ratingDto.WorkspaceScore,
                IsWantReferToFriend = ratingDto.IsWantReferToFriend,
                UpdatedOn = DateTime.UtcNow,
                CreatedOn = DateTime.UtcNow
            };

            var user = await _userRepo.GetById(ratingDto.UserId);
            if (user == null) throw new InvalidOperationException("User not found");
            rating.User = user;

            var company = await _companyRepo.GetById(ratingDto.CompanyId);
            if (company == null) throw new InvalidOperationException("Company not found");
            rating.Company = company;

            return await _ratingRepo.Create(rating);
        }

        public async Task<Rating?> UpdateRating(Guid id, RatingDto ratingDto)
        {
            var existingRating = await _ratingRepo.GetById(id);

            if (existingRating == null) throw new InvalidOperationException("Rating not found");

            var user = await _userRepo.GetById(ratingDto.UserId);
            if (user == null) throw new InvalidOperationException("User not found");
            existingRating.User = user;

            var company = await _companyRepo.GetById(ratingDto.CompanyId);
            if (company == null) throw new InvalidOperationException("Company not found");
            existingRating.Company = company;

            existingRating.CompanyId = ratingDto.CompanyId;
            existingRating.UserId = ratingDto.UserId;
            existingRating.Title = ratingDto.Title;
            existingRating.Message = ratingDto.Message;
            existingRating.OverallScore = ratingDto.OverallScore;
            existingRating.BenefitScore = ratingDto.BenefitScore;
            existingRating.TraingScore = ratingDto.TraingScore;
            existingRating.CareScore = ratingDto.CareScore;
            existingRating.CultureScore = ratingDto.CultureScore;
            existingRating.WorkspaceScore = ratingDto.WorkspaceScore;
            existingRating.IsWantReferToFriend = ratingDto.IsWantReferToFriend;
            existingRating.UpdatedOn = DateTime.UtcNow;

            return await _ratingRepo.Update(existingRating);
        }

        public async Task<List<Rating>> GetAllRatings()
        {
            return await _ratingRepo.GetAll();
        }

        public async Task<Rating?> GetRatingById(Guid id)
        {
            return await _ratingRepo.GetById(id);
        }

        public async Task<Rating?> DeleteRating(Guid id)
        {
            return await _ratingRepo.Delete(id);
        }
    }
}
