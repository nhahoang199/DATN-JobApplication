using System.ComponentModel.DataAnnotations;

namespace JobApplicationProject.Core.Dtos
{
    public class RegisterDto
    {
        //[Required]
        public string Name { get; set; } = null!;
        //[Required, EmailAddress]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
        [Required, Compare("Password")]
        public string ConfirmPassword { get; set; } = null!;
    }
}
