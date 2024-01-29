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
    public class JobDescriptionConfig : IEntityTypeConfiguration<JobDescription>
    {
        public void Configure(EntityTypeBuilder<JobDescription> builder)
        {
            builder.ToTable("JobDescription");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Title).HasColumnType("nvarchar(500)").IsRequired();
            builder.HasOne<Address>(c => c.Address).WithMany().HasForeignKey(x => x.AddressId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<Company>(c => c.Company).WithMany().HasForeignKey(x => x.CompanyId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<Career>(c => c.Career).WithMany().HasForeignKey(x => x.CareerId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<User>(c => c.CreatedBy).WithMany().HasForeignKey(x => x.CreatedByGUID).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<Currency>(c => c.Currency).WithMany().HasForeignKey(x => x.CurrencyId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
