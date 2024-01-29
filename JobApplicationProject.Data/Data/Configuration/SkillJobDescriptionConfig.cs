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
    public class SkillJobApplicationConfig : IEntityTypeConfiguration<SkillJobDescription>
    {
        public void Configure(EntityTypeBuilder<SkillJobDescription> builder)
        {
            builder.ToTable("SkillJobDescription");
            builder.HasKey(x => x.Id);
            builder.HasOne<Skill>(c => c.Skill).WithMany().HasForeignKey(x => x.SkillId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<JobDescription>(c => c.JobDescription).WithMany().HasForeignKey(x => x.JobDescriptionId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
