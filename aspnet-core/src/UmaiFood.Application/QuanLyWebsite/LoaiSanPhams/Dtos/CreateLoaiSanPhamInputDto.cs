using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.LoaiSanPhams.Dtos
{
    public class CreateLoaiSanPhamInputDto:Entity<long>
    {
        public string Ten { get; set; }
    }
}
