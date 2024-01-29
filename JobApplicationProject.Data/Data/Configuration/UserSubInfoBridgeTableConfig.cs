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
    public class UserSubInfoBridgeTableConfig : IEntityTypeConfiguration<UserSubInfoBridgeTable>
    {
        public void Configure(EntityTypeBuilder<UserSubInfoBridgeTable> builder)
        {
            builder.ToTable("UserSubInfoBridgeTable");
            builder.HasKey(x => x.Id);
            builder.HasOne<User>(c => c.User).WithMany().HasForeignKey(x => x.UserId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
            builder.HasOne<UserSubInfo>(c => c.UserSubInfo).WithMany().HasForeignKey(x => x.SubInfoId).OnDelete(DeleteBehavior.SetNull).IsRequired(false);
        }
    }
}
