using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using UmaiFood.Authorization;

namespace UmaiFood
{
    [DependsOn(
        typeof(UmaiFoodCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class UmaiFoodApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<UmaiFoodAuthorizationProvider>();

            Configuration.Modules.AbpAutoMapper().Configurators.Add(CustomDtoMapper.CreateMappings);
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(UmaiFoodApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
