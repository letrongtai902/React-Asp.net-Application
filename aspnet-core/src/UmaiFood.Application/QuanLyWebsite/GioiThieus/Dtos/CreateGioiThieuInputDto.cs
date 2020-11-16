using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.GioiThieus.Dtos
{
    public class CreateGioiThieuInputDto:EntityDto<long>
    {
        public string TieuDe { get; set; }
        public string NoiDung { get; set; }
        public string HinhAnh { get; set; }
    }
}
