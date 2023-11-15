﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class DistrictDto
    {
        public string Name { get; set; } = string.Empty;
        public Guid? ProvinceId { get; set; }
    }
}
