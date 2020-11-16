using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("GioiThieus")]
    public class GioiThieu: FullAuditedEntity<long>
    {
        public virtual string TieuDe { get; set; }
        public virtual string NoiDung { get; set; }
        public virtual string HinhAnh { get; set; }
    }
}
