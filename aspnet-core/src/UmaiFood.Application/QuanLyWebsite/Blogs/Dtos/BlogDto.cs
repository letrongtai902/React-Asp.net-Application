using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.Blogs.Dtos
{
    public class BlogDto: EntityDto<long>
    {
        public string TieuDe { get; set; }
        public DateTime NgayXuatBan { get; set; }
        public string NoiDung { get; set; }
        public string HinhAnh { get; set; }
        public string TacGia { get; set; }
        public string Tag { get; set; }    
    }
}
