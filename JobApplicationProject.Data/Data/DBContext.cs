using Microsoft.EntityFrameworkCore;
using System.Reflection;
using JobApplicationProject.Data.Data.Configuration;
using JobApplicationProject.Core.Models;

namespace JobApplicationProject.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }
        public DbSet<Address> Address { set; get; }
        public DbSet<User> Users { set; get; }
        public DbSet<Commune> Commune { set; get; }
        public DbSet<Company> Company { set; get; }
        public DbSet<Country> Country { set; get; }
        public DbSet<District> District { set; get; }
        public DbSet<JobApplication> JobModel { set; get; }
        public DbSet<Province> Province { set; get; }
        public DbSet<JobApplication> JobApplication { set; get; }
        public DbSet<UserJob> UserJob { set; get; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserConfiguration).Assembly);
        }
    }
}
