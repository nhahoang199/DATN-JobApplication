using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Dtos
{
    public class UserDto
    {
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime? DateOfBirth { get; set; }
        public int? Gender { get; set; }
        public string? PhoneNumber { get; set; } = string.Empty;
        //[JsonIgnore]
        public string? Password { get; set; } = null!;
        public string? RefreshToken { get; set; } = string.Empty;
        public string? Role { get; set; } = string.Empty;
        public string? ProfilePicture { get; set; } = string.Empty;
        public int? Status { get; set; } = 0;
        public Guid? Id { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? AddressId { get; set; }
        public DateTime? TokenCreated { get; set; }
        public DateTime? TokenExpires { get; set; }
        public string? CompanyName { get; set; } = string.Empty;
        public string? CompanyAvatar { get; set; }

    }
}
