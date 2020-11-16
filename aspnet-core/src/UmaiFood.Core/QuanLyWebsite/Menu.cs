using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace UmaiFood.QuanLyWebsite
{
    [Table("Menus")]
    public class Menu: FullAuditedEntity<long>
    {
        public virtual string Ten { get; set; }
        public virtual long MenuTypeId { get; set; }
    }
}
