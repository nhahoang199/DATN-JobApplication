using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class JobDescDto
    {
        public Guid? Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string JobRequired { get; set; } = string.Empty;
        public string JobBenefit { get; set; } = string.Empty;
        public int Type { get; set; }
        public int SalaryType { get; set; }
        public int MinSalary { get; set; }
        public int MaxSalary { get; set; }
        //public string Salary { get; set; } = string.Empty;
        public int ExperienceType { get; set; }
        public int MinYearExperience { get; set; }
        public int MaxYearExperience { get; set; }
        public string Position { get; set; } = string.Empty;
        public int Gender { get; set; }
        public string? CompanyName { get; set; } = string.Empty;
        public string? CareerName { get; set; } = string.Empty;
        public string? CurrencyName { get; set; } = string.Empty;
        public string? CreatedByName { get; set; } = string.Empty;
        public AddressDto? Address { get; set; }
        public int Quantity { get; set; }
        public DateTime ExpiredOn { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? CareerId { get; set; }
        public Guid? CurrencyId { get; set; }
        //public Guid? SkillId { get; set; }
        public Guid? CreatedBy { get; set; }
    }
}
