using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Commune : BaseModel
    {
        public string Name { get; set; } = string.Empty;
        public Guid? DistrictId { get; set; }
        public virtual District? District { get; set; }
    }
}
