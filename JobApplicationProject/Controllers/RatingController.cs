using JobApplicationProject.Core.Dtos;
using JobApplicationProject.Service.Services.CompanyService;
using JobApplicationProject.Service.Services.RatingService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobApplicationProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly IRatingService _ratingService;
        private readonly ICompanyService _companyService;

        public RatingController(IRatingService ratingService, ICompanyService companyService)
        {
            _ratingService = ratingService;
            _companyService = companyService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRating(RatingDto ratingDto)
        {
            try
            {
                var createdRating = await _ratingService.CreateRating(ratingDto);
                var company = await _companyService.GetCompanyById(createdRating.CompanyId.GetValueOrDefault());
                var companyDto = new CompanyDto();
                companyDto.TotalOverallRatingScore += createdRating.OverallScore;
                companyDto.TotalBenefitRatingScore += createdRating.BenefitScore;
                companyDto.TotalTrainingRatingScore += createdRating.TraingScore;
                companyDto.TotalCareRatingScore += createdRating.CareScore;
                companyDto.TotalCutureRatingScore += createdRating.CultureScore;
                companyDto.TotalWorkspaceRatingScore += createdRating.WorkspaceScore;
                companyDto.TotalRatingQuantity++;
                if (createdRating.IsWantReferToFriend) companyDto.TotalIsWantReferToFriendScore++;
                await _companyService.UpdateCompany(company.Id, companyDto);
                return Ok(createdRating);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRating(Guid id, RatingDto ratingDto)
        {
            try
            {
                var updatedRating = await _ratingService.UpdateRating(id, ratingDto);
                if (updatedRating == null) return NotFound();
                return Ok(updatedRating);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRatings()
        {
            try
            {
                var ratings = await _ratingService.GetAllRatings();
                return Ok(ratings);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRatingById(Guid id)
        {
            try
            {
                var rating = await _ratingService.GetRatingById(id);
                if (rating == null)
                    return NotFound();
                return Ok(rating);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRating(Guid id)
        {
            try
            {
                var deletedRating = await _ratingService.DeleteRating(id);
                if (deletedRating == null) return NotFound();
                return Ok(deletedRating);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
