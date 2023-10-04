using JobApplicationProject.API.Services.Interface;
using JWT.Builder;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Cryptography;
using System.Text;
using JwtHeader = System.IdentityModel.Tokens.Jwt.JwtHeader;

namespace JobApplicationProject.API.Services
{
    public class JwtService : IJwtService
    {
        private readonly SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
        private readonly static string secureKey = "eyJhbGciOiJodHRw12312Oi8vd3d3LnczLm9yZy8yMDAx123123LzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE212312O12312312TYzNTI0MDAsImlzcyI6IjliOWM0YzFhLTNiZG12312312EtNDNjMy04N2ZhLWMwOWUyYzJhNjE1ZiJ9.yF9gNL8R8md7p-XlQB5u123121321212K3fEXPu-M2w61231231231212312SSMF1ljBTUo";

        public string Generate(Guid id)
        {
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }

        public JwtSecurityToken Verify(string jwt)
        {
            var tokeHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(secureKey);

            tokeHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }
    }

}

