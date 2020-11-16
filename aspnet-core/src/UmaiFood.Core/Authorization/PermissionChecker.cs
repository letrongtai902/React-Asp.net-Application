using Abp.Authorization;
using UmaiFood.Authorization.Roles;
using UmaiFood.Authorization.Users;

namespace UmaiFood.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
