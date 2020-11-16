using Abp.Application.Services;
using UmaiFood.MultiTenancy.Dto;

namespace UmaiFood.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

