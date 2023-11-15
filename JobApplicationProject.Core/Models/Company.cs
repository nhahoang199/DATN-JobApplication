using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Company : BaseModel
    {
        public string Name { get; set; } = string.Empty;
        public string UEN { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string? FBLink { get; set; } = string.Empty;
        public string? TwitterLink { get; set; } = string.Empty;
        public string? Website { get; set; } = string.Empty;
        public string? Gmail { get; set; } = string.Empty;
        public string? Picture { get; set; } = string.Empty;
        public DateTime? DateOfIncorporation { get; set; }
        public Guid? AddressId { get; set; }
        public virtual Address? Address { get; set; } = null;
    }
}
