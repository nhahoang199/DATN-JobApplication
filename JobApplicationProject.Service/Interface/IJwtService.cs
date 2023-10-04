
using System.IdentityModel.Tokens.Jwt;

namespace JobApplicationProject.API.Services.Interface
{
    public interface IJwtService
    {
        public string Generate(Guid userId);
        public JwtSecurityToken Verify(string jwt);
    }
}
