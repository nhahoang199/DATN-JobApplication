using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class UserSubInfoBridgeTable : BaseModel
    {
        public Guid? UserId { get; set; }
        public Guid? SubInfoId { get; set; }
        public virtual User? User { get; set; }
        public virtual UserSubInfo? UserSubInfo { get; set; }
    }
}
