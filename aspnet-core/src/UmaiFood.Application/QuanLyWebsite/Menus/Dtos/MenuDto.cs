using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace UmaiFood.QuanLyWebsite.Menus.Dtos
{
    public class MenuDto:EntityDto<long>
    {
        public string Ten { get; set; }
        public long MenuTypeId { get; set; }
    }
}
