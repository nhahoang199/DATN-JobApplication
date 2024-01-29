using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace JobApplicationProject.Core.Models
{
    public class User : BaseModel
    {
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public int Gender { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        [JsonIgnore]
        public string Password { get; set; } = null!;
        public string RefreshToken { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string ProfilePicture { get; set; } = string.Empty;
        public int Status { get; set; } = 1;
        public Guid? CompanyId { get; set; }
        public Guid? AddressId { get; set; }
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }
        public virtual Company? Company { get; set; }
        public virtual Address? Address { get; set; }
    }
    public enum UserRole
    {
        SystemAdmin, HRAdmin, HRUser, BasicUser
    }
}
