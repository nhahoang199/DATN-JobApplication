using JobApplicationProject.Core.Models;
using System.IdentityModel.Tokens.Jwt;

namespace JobApplicationProject.Service.Helpers.JwtService
{
    public interface IJwtService
    {
        public string Generate(Guid userId);
        public JwtSecurityToken Verify(string jwt);
        public string CreateToken(User user);
    }
}
