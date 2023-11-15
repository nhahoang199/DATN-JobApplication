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
    public class AddressConfig : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.ToTable("Address");
            builder.HasKey(x => x.Id);
            builder.HasOne<Country>(c => c.Country).WithMany().HasForeignKey(x => x.CountryId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<Province>(c => c.Province).WithMany().HasForeignKey(x => x.ProvinceId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<District>(c => c.District).WithMany().HasForeignKey(x => x.DistrictId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<Commune>(c => c.Commune).WithMany().HasForeignKey(x => x.CommuneId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
