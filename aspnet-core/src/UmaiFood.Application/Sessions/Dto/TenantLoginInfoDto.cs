using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using UmaiFood.MultiTenancy;

namespace UmaiFood.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
