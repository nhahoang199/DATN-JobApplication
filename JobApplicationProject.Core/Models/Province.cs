using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Province : BaseModel
    {
        public string Name { get; set; } = string.Empty;
        public Guid? CountryId { get; set; }

        public virtual Country? Country { get; set; }
    }
}
