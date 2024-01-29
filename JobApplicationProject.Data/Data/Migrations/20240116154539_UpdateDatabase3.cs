using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobApplicationProject.Data.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateDatabase3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Company_Address_AddressId",
                table: "Company");

            migrationBuilder.DropIndex(
                name: "IX_Company_AddressId",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SkillName",
                table: "SkillJobDescription");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "Rating");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Rating");

            migrationBuilder.DropColumn(
                name: "CountryName",
                table: "Province");

            migrationBuilder.DropColumn(
                name: "CareerName",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "CreatedByName",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "Experience",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "ProvinceName",
                table: "District");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "CompanyAddress");

            migrationBuilder.DropColumn(
                name: "AddressId",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "DistrictName",
                table: "Commune");

            migrationBuilder.DropColumn(
                name: "CommuneName",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "CountryName",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "DistrictName",
                table: "Address");

            migrationBuilder.DropColumn(
                name: "ProvinceName",
                table: "Address");

            migrationBuilder.RenameColumn(
                name: "WorkingDay",
                table: "Company",
                newName: "StartWorkingDay");

            migrationBuilder.RenameColumn(
                name: "CompanySize",
                table: "Company",
                newName: "EndWorkingDay");

            migrationBuilder.AlterColumn<int>(
                name: "Gender",
                table: "JobDescription",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<Guid>(
                name: "CurrencyId",
                table: "JobDescription",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ExperienceType",
                table: "JobDescription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MaxYearExperience",
                table: "JobDescription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MinYearExperience",
                table: "JobDescription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "SalaryType",
                table: "JobDescription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "CV",
                table: "JobApplication",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(byte),
                oldType: "tinyint");

            migrationBuilder.AddColumn<int>(
                name: "CompanySizeMaxValue",
                table: "Company",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CompanySizeMinValue",
                table: "Company",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CompanySizeType",
                table: "Company",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Currency",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CurrencyCode = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Currency", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSubInfo",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Category = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Organization = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartTime = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    EndTime = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSubInfo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserSubInfoBridgeTable",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    SubInfoId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSubInfoBridgeTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserSubInfoBridgeTable_UserSubInfo_SubInfoId",
                        column: x => x.SubInfoId,
                        principalTable: "UserSubInfo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                    table.ForeignKey(
                        name: "FK_UserSubInfoBridgeTable_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobDescription_CurrencyId",
                table: "JobDescription",
                column: "CurrencyId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSubInfoBridgeTable_SubInfoId",
                table: "UserSubInfoBridgeTable",
                column: "SubInfoId");

            migrationBuilder.CreateIndex(
                name: "IX_UserSubInfoBridgeTable_UserId",
                table: "UserSubInfoBridgeTable",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_JobDescription_Currency_CurrencyId",
                table: "JobDescription",
                column: "CurrencyId",
                principalTable: "Currency",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_JobDescription_Currency_CurrencyId",
                table: "JobDescription");

            migrationBuilder.DropTable(
                name: "Currency");

            migrationBuilder.DropTable(
                name: "UserSubInfoBridgeTable");

            migrationBuilder.DropTable(
                name: "UserSubInfo");

            migrationBuilder.DropIndex(
                name: "IX_JobDescription_CurrencyId",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "CurrencyId",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "ExperienceType",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "MaxYearExperience",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "MinYearExperience",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "SalaryType",
                table: "JobDescription");

            migrationBuilder.DropColumn(
                name: "CompanySizeMaxValue",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "CompanySizeMinValue",
                table: "Company");

            migrationBuilder.DropColumn(
                name: "CompanySizeType",
                table: "Company");

            migrationBuilder.RenameColumn(
                name: "StartWorkingDay",
                table: "Company",
                newName: "WorkingDay");

            migrationBuilder.RenameColumn(
                name: "EndWorkingDay",
                table: "Company",
                newName: "CompanySize");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SkillName",
                table: "SkillJobDescription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "Rating",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Rating",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CountryName",
                table: "Province",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "JobDescription",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "CareerName",
                table: "JobDescription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "JobDescription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CreatedByName",
                table: "JobDescription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Experience",
                table: "JobDescription",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<byte>(
                name: "CV",
                table: "JobApplication",
                type: "tinyint",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "ProvinceName",
                table: "District",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "CompanyAddress",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "AddressId",
                table: "Company",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DistrictName",
                table: "Commune",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CommuneName",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CountryName",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DistrictName",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProvinceName",
                table: "Address",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Company_AddressId",
                table: "Company",
                column: "AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Company_Address_AddressId",
                table: "Company",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }
    }
}
