using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class SkillJobDescription : BaseModel
    {
        public Guid? SkillId { get; set; }
        public Guid? JobDescriptionId { get; set; }
        public virtual Skill? Skill { get; set; }
        public virtual JobDescription? JobDescription { get; set; }
    }
}
