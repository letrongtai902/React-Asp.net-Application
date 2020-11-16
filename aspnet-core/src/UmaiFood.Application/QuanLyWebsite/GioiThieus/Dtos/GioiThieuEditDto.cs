using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.GioiThieus.Dtos
{
    public class GioiThieuEditDto:EntityDto<long>
    {
        public string TieuDe { get; set; }
        public string NoiDung { get; set; }
        public string HinhAnh { get; set; }
    }
}
