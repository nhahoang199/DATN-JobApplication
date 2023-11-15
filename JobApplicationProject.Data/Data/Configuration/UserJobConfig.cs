using JobApplicationProject.Core.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Data.Data.Configuration
{
    public class UserJobConfig : IEntityTypeConfiguration<UserJob>
    {
        public void Configure(EntityTypeBuilder<UserJob> builder)
        {
            builder.ToTable("UserJob");
            builder.HasKey(x => x.Id);
            builder.HasOne<User>(c => c.User).WithMany().HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<JobApplication>(c => c.JobApplication).WithMany().HasForeignKey(x => x.JobApplicationId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
