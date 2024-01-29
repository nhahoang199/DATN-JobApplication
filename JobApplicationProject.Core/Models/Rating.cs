using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Rating : BaseModel
    {
        public Guid? CompanyId { get; set; }
        public Guid? UserId { get; set; }
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
