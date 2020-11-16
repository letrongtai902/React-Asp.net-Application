using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.SanPhams.Dtos
{
    public class SanPhamDto:EntityDto<long>
    {
        public string Ten { get; set; }
        public string MoTa { get; set; }
        public string HinhAnh { get; set; }
        public long LoaiId { get; set; }
    }
}
