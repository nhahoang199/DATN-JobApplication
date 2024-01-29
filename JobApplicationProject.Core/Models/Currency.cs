using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class Currency : BaseModel
    {
        public string Name { get; set; }
        public string CurrencyCode { get; set; }
    }
}
