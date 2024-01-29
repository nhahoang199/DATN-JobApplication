using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class ProvinceDto
    {
        public string Name { get; set; } = string.Empty;
        public Guid? Id { get; set; }
        public Guid? CountryId { get; set; }
        public string? CountryName { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
