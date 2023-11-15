using System.ComponentModel.DataAnnotations;

namespace JobApplicationProject.Core.Models
{
    public class BaseModel
    {
        [Key]
        public Guid Id { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }

    }
}
