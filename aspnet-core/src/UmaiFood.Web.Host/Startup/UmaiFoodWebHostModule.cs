using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using UmaiFood.Configuration;

namespace UmaiFood.Web.Host.Startup
{
    [DependsOn(
       typeof(UmaiFoodWebCoreModule))]
    public class UmaiFoodWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public UmaiFoodWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(UmaiFoodWebHostModule).GetAssembly());
        }
    }
}
