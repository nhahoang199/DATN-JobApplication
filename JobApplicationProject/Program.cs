using FluentValidation;
using FluentValidation.AspNetCore;
using JobApplicationProject.Data;
using JobApplicationProject.Data.Repositories.CountryRepo;
using JobApplicationProject.Data.Repositories.CommuneRepo;
using JobApplicationProject.Data.Repositories.ProvinceRepo;
using JobApplicationProject.Data.Repositories.UserRepo;
using JobApplicationProject.Service.Helpers.JwtService;
using JobApplicationProject.Service.Services.CountryService;
using JobApplicationProject.Service.Services.DistrictService;
using JobApplicationProject.Service.Services.ProvinceService;
using JobApplicationProject.Service.Services.UserService;
using JobApplicationProject.Service.Validation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;
using JobApplicationProject.Data.Repositories.DistrictRepo;
using JobApplicationProject.Service.Services.CommuneService;
using JobApplicationProject.Service.Services.AddressService;
using JobApplicationProject.Data.Repositories.AddressRepo;
using JobApplicationProject.Service.Services.CompanyService;
using JobApplicationProject.Data.Repositories.CompanyRepo;
using JobApplicationProject.Service.Services.JobApplicationService;
using JobApplicationProject.Data.Repositories.JobApplicationRepo;
using JobApplicationProject.Service.Services.CareerService;
using JobApplicationProject.Data.Repositories.CareerRepo;
using JobApplicationProject.Service.Services.SkillService;
using JobApplicationProject.Data.Repositories.SkillRepo;
using JobApplicationProject.Service.Services.RatingService;
using JobApplicationProject.Data.Repositories.RatingRepo;
using JobApplicationProject.Service.Services.CompanyAddressService;
using JobApplicationProject.Data.Repositories.CompanyAddressRepo;
using JobApplicationProject.Service.Services.SkillJobDescriptionService;
using JobApplicationProject.Data.Repositories.SkillJobApplicationRepo;
using JobApplicationProject.Data.Repositories.SkillJobDescriptionRepo;
using JobApplicationProject.Service.Helpers.EmailService;

var builder = WebApplication.CreateBuilder(args);
var service = builder.Services;

// Add services to the container.

service.AddCors();

service.AddDbContext<DBContext>(optionsAction =>
{
    optionsAction.UseSqlServer(builder.Configuration.GetConnectionString("Default"));
});

service.AddControllersWithViews();
service.AddValidatorsFromAssemblyContaining<UserValidator>();
service.AddScoped<IUserRepository, UserRepository>();
service.AddScoped<IUserService, UserService>();
service.AddScoped<ICountryService, CountryService>();
service.AddScoped<ICountryRepo, CountryRepo>();
service.AddScoped<IProvinceService, ProvinceService>();
service.AddScoped<IProvinceRepo, ProvinceRepo>();
service.AddScoped<IDistrictService, DistrictService>();
service.AddScoped<IDistrictRepo, DistrictRepo>();
service.AddScoped<ICommuneService, CommuneService>();
service.AddScoped<ICommuneRepo, CommuneRepo>();
service.AddScoped<IAddressService, AddressService>();
service.AddScoped<IAddressRepo, AddressRepo>();
service.AddScoped<ICompanyService, CompanyService>();
service.AddScoped<ICompanyRepo, CompanyRepo>();
service.AddScoped<IJobDescriptionService, JobDescriptionService>();
service.AddScoped<IJobDescriptionRepo, JobDescriptionRepo>();
service.AddScoped<IJobApplicationService, JobApplicationService>();
service.AddScoped<IJobApplicationRepo, JobApplicationRepo>();
service.AddScoped<IRatingService, RatingService>();
service.AddScoped<IRatingRepo, RatingRepo>();
service.AddScoped<ICompanyAddressService, CompanyAddressService>();
service.AddScoped<ICompanyAddressRepo, CompanyAddressRepo>();
service.AddScoped<ISkillJobDescriptionService, SkillJobDescriptionService>();
service.AddScoped<ISkillJobDescriptionRepo, SkillJobDescriptionRepo>();
service.AddScoped<ICareerService, CareerService>();
service.AddScoped<ICareerRepo, CareerRepo>();
service.AddScoped<ISkillService, SkillService>();
service.AddScoped<ISkillRepo, SkillRepo>();
service.AddScoped<IJwtService, JwtService>();
service.AddScoped<IEmailService, EmailService>();

service.AddEndpointsApiExplorer();
service.AddHttpContextAccessor();
service.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();
});
service.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("trannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoang")),
        ValidateIssuerSigningKey = true,
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.UseCors(options => options.WithOrigins(new[]
{
    "http://127.0.0.1:5000", "http://localhost:8000", "http://localhost:5000"
}).AllowCredentials().AllowAnyHeader().AllowAnyMethod()
);
app.UseAuthentication();
app.UseAuthorization();
app.MapFallbackToFile("index.html");

app.Run();
