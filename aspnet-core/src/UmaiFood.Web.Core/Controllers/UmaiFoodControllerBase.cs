using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace UmaiFood.Controllers
{
    public abstract class UmaiFoodControllerBase: AbpController
    {
        protected UmaiFoodControllerBase()
        {
            LocalizationSourceName = UmaiFoodConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
