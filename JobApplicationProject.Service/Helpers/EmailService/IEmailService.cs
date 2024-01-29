using JobApplicationProject.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Service.Helpers.EmailService
{
    public interface IEmailService
    {
        void SendEmail(Email request);
    }
}
