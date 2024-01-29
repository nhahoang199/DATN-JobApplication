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
    public class JobApplicationConfig : IEntityTypeConfiguration<JobApplication>
    {
        public void Configure(EntityTypeBuilder<JobApplication> builder)
        {
            builder.ToTable("JobApplication");
            builder.HasKey(x => x.Id);
            builder.HasOne<User>(c => c.User).WithMany().HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<JobDescription>(c => c.JobDescription).WithMany().HasForeignKey(x => x.JobDescriptionId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
