using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.LienHes.Dtos
{
    public class LienHeDto:Entity<long>
    {
        public string DiaChi { get; set; }
        public string Sdt { get; set; }
        public string Email { get; set; }
        public string TrangFaceBook { get; set; }
    }
}
