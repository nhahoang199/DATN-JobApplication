using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class JobDescription : BaseModel
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string JobRequired { get; set; } = string.Empty;
        public string JobBenefit { get; set; } = string.Empty;
        public int Type { get; set; }
        public int Status { get; set; }
        public int SalaryType { get; set; }
        public int MinSalary { get; set; }
        public int MaxSalary { get; set; }
        public int ExperirenceType { get; set; }
        public int MinYearExperience { get; set; }
        public int MaxYearExperience { get; set; }
        public string Position { get; set; } = string.Empty;
        public int Gender { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpiredOn { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? AddressId { get; set; }
        public Guid? CareerId { get; set; }
        public Guid? CurrencyId { get; set; }
        public Guid? CreatedByGUID { get; set; }
        public virtual Address? Address { get; set; }
        public virtual Company? Company { get; set; }
        public virtual Career? Career { get; set; }
        public virtual User? CreatedBy { get; set; }
        public virtual Currency? Currency { get; set; }
    }
}
