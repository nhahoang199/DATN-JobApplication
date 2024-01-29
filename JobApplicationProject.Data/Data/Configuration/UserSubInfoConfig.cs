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
    public class UserSubInfoConfig : IEntityTypeConfiguration<UserSubInfo>
    {
        public void Configure(EntityTypeBuilder<UserSubInfo> builder)
        {
            builder.ToTable("UserSubInfo");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).HasColumnType("nvarchar(100)").IsRequired(true);
            builder.Property(x => x.Description).HasColumnType("nvarchar(max)").IsRequired(false);
            builder.Property(x => x.Category).HasColumnType("nvarchar(100)").IsRequired(true);
            builder.Property(x => x.StartTime).HasColumnType("nvarchar(100)").IsRequired(false);
            builder.Property(x => x.EndTime).HasColumnType("nvarchar(100)").IsRequired(false);
        }
    }
}
