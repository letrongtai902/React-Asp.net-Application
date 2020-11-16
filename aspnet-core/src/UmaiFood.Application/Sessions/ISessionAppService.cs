using System.Threading.Tasks;
using Abp.Application.Services;
using UmaiFood.Sessions.Dto;

namespace UmaiFood.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
