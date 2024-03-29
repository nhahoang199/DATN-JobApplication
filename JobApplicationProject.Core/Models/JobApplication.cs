﻿using Microsoft.Build.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class JobApplication : BaseModel
    {
        public Guid? UserId { get; set; }
        public Guid? JobDescriptionId { get; set; }
        public string? UserName { get; set; } = string.Empty;
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

        public virtual User? User { get; set; }
        public virtual JobDescription? JobDescription { get; set; }
    }
}
