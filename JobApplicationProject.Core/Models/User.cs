using System.Diagnostics.CodeAnalysis;
using System.Text.Json.Serialization;

namespace JobApplicationProject.Models
{
    public class User : BaseModel
    {
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        [JsonIgnore]
        public string Password { get; set; } = null!;
    }
}
