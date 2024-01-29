using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class RatingDto
    {
        public Guid CompanyId { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public Guid UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public int OverallScore { get; set; }
        public int BenefitScore { get; set; }
        public int TraingScore { get; set; }
        public int CareScore { get; set; }
        public int CultureScore { get; set; }
        public int WorkspaceScore { get; set; }
        public bool IsWantReferToFriend { get; set; }
        public virtual Company? Company { get; set; }
        public virtual User? User { get; set; }
    }
}
