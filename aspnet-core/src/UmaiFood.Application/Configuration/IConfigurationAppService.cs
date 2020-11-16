using System.Threading.Tasks;
using UmaiFood.Configuration.Dto;

namespace UmaiFood.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
