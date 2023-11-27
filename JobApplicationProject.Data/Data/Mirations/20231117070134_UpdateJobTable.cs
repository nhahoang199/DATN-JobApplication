using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobApplicationProject.Data.Data.Mirations
{
    /// <inheritdoc />
    public partial class UpdateJobTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "CareerId",
                table: "JobApplication",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "JobBenefit",
                table: "JobApplication",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "JobRequired",
                table: "JobApplication",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "SkillId",
                table: "JobApplication",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Career",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Career", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Skill",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skill", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobApplication_CareerId",
                table: "JobApplication",
                column: "CareerId");

            migrationBuilder.CreateIndex(
                name: "IX_JobApplication_SkillId",
                table: "JobApplication",
                column: "SkillId");

            migrationBuilder.AddForeignKey(
                name: "FK_JobApplication_Career_CareerId",
                table: "JobApplication",
                column: "CareerId",
                principalTable: "Career",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);

            migrationBuilder.AddForeignKey(
                name: "FK_JobApplication_Skill_SkillId",
                table: "JobApplication",
                column: "SkillId",
                principalTable: "Skill",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JobApplication_Career_CareerId",
                table: "JobApplication");

            migrationBuilder.DropForeignKey(
                name: "FK_JobApplication_Skill_SkillId",
                table: "JobApplication");

            migrationBuilder.DropTable(
                name: "Career");

            migrationBuilder.DropTable(
                name: "Skill");

            migrationBuilder.DropIndex(
                name: "IX_JobApplication_CareerId",
                table: "JobApplication");

            migrationBuilder.DropIndex(
                name: "IX_JobApplication_SkillId",
                table: "JobApplication");

            migrationBuilder.DropColumn(
                name: "CareerId",
                table: "JobApplication");

            migrationBuilder.DropColumn(
                name: "JobBenefit",
                table: "JobApplication");

            migrationBuilder.DropColumn(
                name: "JobRequired",
                table: "JobApplication");

            migrationBuilder.DropColumn(
                name: "SkillId",
                table: "JobApplication");
        }
    }
}
