using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobApplicationProject.Data.Data.Migrations
{
    /// <inheritdoc />
    public partial class mi1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExperienceType",
                table: "JobDescription",
                newName: "ExperirenceType");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ExperirenceType",
                table: "JobDescription",
                newName: "ExperienceType");
        }
    }
}
