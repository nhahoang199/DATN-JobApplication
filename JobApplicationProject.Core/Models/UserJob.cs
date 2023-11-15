using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class UserJob : BaseModel
    {
        public Guid? UserId { get; set; }
        public Guid? JobApplicationId { get; set; }

        public virtual User? User { get; set; }
        public virtual JobApplication? JobApplication { get; set; }
    }
}
