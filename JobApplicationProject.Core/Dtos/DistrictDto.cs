using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class DistrictDto
    {
        public Guid? Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public Guid? ProvinceId { get; set; }
        public string? ProvinceName { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
    public class DistrictDetails
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public Guid? ProvinceId { get; set; }
        public Guid? CountryId { get; set; }
        public DateTime CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }
    }
}
