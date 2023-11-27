using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobApplicationProject.Data.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCompany : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CompanySize",
                table: "Company",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkingDay",
                table: "Company",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanySize",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "WorkingDay",
                table: "Company");
        }
    }
}
