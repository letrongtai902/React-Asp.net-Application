using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("LoaiSanPhams")]
    public class LoaiSanPham: FullAuditedEntity<long>
    {
        public virtual string Ten { get; set; }
    }
}
