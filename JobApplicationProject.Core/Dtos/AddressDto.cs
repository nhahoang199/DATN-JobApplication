using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class AddressDto
    {
        public string HouseNumber { get; set; } = string.Empty;
        public string Street { get; set; } = string.Empty;
        public Guid? CountryId { get; set; }
        public Guid? ProvinceId { get; set; }

        public Guid? DistrictId { get; set; }
        public Guid? CommuneId { get; set; }
    }
}
