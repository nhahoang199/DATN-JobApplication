using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class JobApplication : BaseModel
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string JobRequired { get; set; } = string.Empty;
        public string JobBenefit { get; set; } = string.Empty;
        public int Type { get; set; }
        public int Salary { get; set; }
        public int Expirence { get; set; }
        public string Position { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public DateTime ExpiredOn { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? CareerId { get; set; }
        public Guid? SkillId { get; set; }
        public virtual Company? Company { get; set; }
        public virtual Career? Career { get; set; }
        public virtual Skill? Skill { get; set; }
    }
}
