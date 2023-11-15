using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace JobApplicationProject.Core.Models
{
    public class User : BaseModel
    {
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        [JsonIgnore]
        public string Password { get; set; } = null!;
        public string RefreshToken { get; set; } = string.Empty;
        public Guid? CompanyId { get; set; }
        public DateTime TokenCreated { get; set; }
        public DateTime TokenExpires { get; set; }
        public virtual Company? Company { get; set; }
    }
}
