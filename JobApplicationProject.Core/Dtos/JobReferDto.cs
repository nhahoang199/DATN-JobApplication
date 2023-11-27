using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class JobReferDto
    {
        public Guid? Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public int Type { get; set; }
        public int Salary { get; set; }
        public string? CompanyName { get; set; } = string.Empty;
        public string? ProvinceName { get; set; } = string.Empty;
        public string? DistrictName { get; set; } = string.Empty;
        public Guid? CompanyId { get; set; }
        public Guid? AddressId { get; set; }
        public Guid? ProvinceId { get; set; }
        public Guid? DistrictId { get; set; }
    }
}
