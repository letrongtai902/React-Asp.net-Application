using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("LienHes")]
    public class LienHe:FullAuditedEntity<long>
    {
        public virtual string DiaChi { get; set; }
        public virtual string Sdt { get; set; }
        public virtual string Email { get; set; }
        public virtual string TrangFaceBook { get; set; }
    }
}
