using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("PbBlogs")]
    public class Blog: FullAuditedEntity<long>
    {
        public virtual string TieuDe { get; set; }
        public virtual DateTime NgayXuatBan { get; set; }
        public virtual string NoiDung { get; set; }
        public virtual string HinhAnh { get; set; }
        public virtual string TacGia { get; set; }
        public virtual string Tag { get; set; }
    }
}
