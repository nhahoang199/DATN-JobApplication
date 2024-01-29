using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Company : BaseModel
    {
        public string Name { get; set; } = string.Empty;
        public string CRN { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? FBLink { get; set; } = string.Empty;
        public string? TwitterLink { get; set; } = string.Empty;
        public string? Website { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? BackgroundPicture { get; set; } = string.Empty;
        public string? AvatarPicture { get; set; } = string.Empty;
        public DateTime? DateOfIncorporation { get; set; }
        public int? CompanySizeType { get; set; } = 0;
        public int? CompanySizeMinValue { get; set; }
        public int? CompanySizeMaxValue { get; set; }
        public string? StartWorkingDay { get; set; } = string.Empty;
        public string? EndWorkingDay { get; set; } = string.Empty;
        public int TotalOverallRatingScore { get; set; } = 0;
        public int TotalBenefitRatingScore { get; set; } = 0;
        public int TotalTrainingRatingScore { get; set; } = 0;
        public int TotalCareRatingScore { get; set; } = 0;
        public int TotalCutureRatingScore { get; set; } = 0;
        public int TotalWorkspaceRatingScore { get; set; } = 0;
        public int TotalIsWantReferToFriendScore { get; set; } = 0;
        public int TotalRatingQuantity { get; set; } = 0;
        public int Status { get; set; } = 1;
    }
}
