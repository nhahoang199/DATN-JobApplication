using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class CompanyAddress : BaseModel
    {
        public Guid? CompanyId { get; set; }
        public Guid? AddressId { get; set; }
        public virtual Company? Company { get; set; }
        public virtual Address? Address { get; set; }
    }
}
