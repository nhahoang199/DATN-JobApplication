using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class CompanyDto
    {
        public string? Name { get; set; }
        public string? CRN { get; set; }
        public string? Description { get; set; }
        public string? FBLink { get; set; }
        public string? TwitterLink { get; set; }
        public string? Website { get; set; }
        public string? Email { get; set; }
        public string? BackgroundPicture { get; set; }
        public string? AvatarPicture { get; set; }
        public int? TotalOverallRatingScore { get; set; }
        public int? TotalBenefitRatingScore { get; set; }
        public int? TotalTrainingRatingScore { get; set; }
        public int? TotalCareRatingScore { get; set; }
        public int? TotalCutureRatingScore { get; set; }
        public int? TotalWorkspaceRatingScore { get; set; }
        public int? TotalIsWantReferToFriendScore { get; set; }
        public int? TotalRatingQuantity { get; set; }
        public int? Status { get; set; }
        public DateTime? DateOfIncorporation { get; set; }
        public string? StartWorkingDay { get; set; } = string.Empty;
        public string? EndWorkingDay { get; set; } = string.Empty;
        public int? CompanySizeType { get; set; }
        public int? CompanySizeMinValue { get; set; }
        public int? CompanySizeMaxValue { get; set; }
    }
}
