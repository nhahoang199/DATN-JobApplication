using System.ComponentModel.DataAnnotations;

namespace JobApplicationProject.Models
{
    public class BaseModel
    {
        [Key]
        public Guid Id { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

        public DateTime? UpdatedOn { get; set; }

        public BaseModel()
        {
            Id = Guid.NewGuid();
        }
    }
}
