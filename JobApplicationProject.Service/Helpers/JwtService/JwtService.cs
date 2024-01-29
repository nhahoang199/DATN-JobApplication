using JobApplicationProject.Core.Models;
using JWT.Builder;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using JwtHeader = System.IdentityModel.Tokens.Jwt.JwtHeader;

namespace JobApplicationProject.Service.Helpers.JwtService
{
    public class JwtService : IJwtService
    {
        private readonly static string secureKey = "trannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoangtrannhahoang";
        private readonly SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));

        public string Generate(Guid userId)
        {
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);

            var payload = new JwtPayload(userId.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
        public string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(ClaimTypes.Email, user.Email),
            };
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha512Signature);
            var securityToken = new JwtSecurityToken(claims: claims,
                                                    expires: DateTime.Now.AddDays(1),
                                                    signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
        public JwtSecurityToken Verify(string jwt)
        {
            var tokeHandler = new JwtSecurityTokenHandler();

            tokeHandler.ValidateToken(jwt, new TokenValidationParameters
            {
                IssuerSigningKey = symmetricSecurityKey,
                ValidateIssuerSigningKey = true,
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);

            return (JwtSecurityToken)validatedToken;
        }

    }

}

