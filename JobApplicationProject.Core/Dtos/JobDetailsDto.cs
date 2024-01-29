using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class JobDetailsDto
    {
        public Guid? Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string JobRequired { get; set; } = string.Empty;
        public string JobBenefit { get; set; } = string.Empty;
        public int Type { get; set; }
        public int MinSalary { get; set; }
        public int MaxSalary { get; set; }
        public string? Experience { get; set; } = string.Empty;
        public string? Position { get; set; } = string.Empty;
        public int? Gender { get; set; }
        public int? Quantity { get; set; }
        public CompanyDto? Company { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? CareerId { get; set; }
        public Guid? SkillId { get; set; }
        public string? CareerName { get; set; } = string.Empty;
        public string? SkillName { get; set; } = string.Empty;
        public DateTime? ExpiredOn { get; set; }
    }
}
