using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.LoaiSanPhams.Dtos
{
    public class LoaiSanPhamDto:EntityDto<long>
    {
        public string Ten { get; set; }
    }
}
