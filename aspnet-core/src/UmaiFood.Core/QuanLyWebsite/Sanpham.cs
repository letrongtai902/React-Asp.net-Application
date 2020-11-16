using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("Sanphams")]
    public class Sanpham: FullAuditedEntity<long>
    {
        public virtual string Ten { get; set; }
        public virtual string MoTa { get; set; }
        public virtual string HinhAnh { get; set; }
        public virtual long LoaiId { get; set; }

    }
}
