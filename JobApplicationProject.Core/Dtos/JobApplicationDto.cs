using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class JobApplicationDto
    {
        public Guid? UserId { get; set; }
        public Guid? JobDescriptionId { get; set; }
        public string? UserName { get; set; } = string.Empty;
        public string? JobDescriptionName { get; set; } = string.Empty;
        public string? CoverLetter { get; set; } = string.Empty;
        public string? CV { get; set; }
        public int? Status { get; set; }
        public bool? IsHRSatifiedWithRequest { get; set; }
        public string? ResponseSummary { get; set; } = string.Empty;
        public string? HRRejectReason { get; set; } = string.Empty;
        public bool? IsUserSatifiedWithResponse { get; set; }
        public string? UserFeedBack { get; set; } = string.Empty;
        public string? UserRejectReason { get; set; } = string.Empty;
        public string? WithdrawalReason { get; set; } = string.Empty;
        public DateTime? HRViewRequestTime { get; set; }
        public DateTime? HRResponseRequestTime { get; set; }
        public DateTime? UserViewResponseTime { get; set; }
        public DateTime? UserConfirmTime { get; set; }
        public Guid? Id { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
