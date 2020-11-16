using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using UmaiFood.Configuration;
using UmaiFood.Web;

namespace UmaiFood.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class UmaiFoodDbContextFactory : IDesignTimeDbContextFactory<UmaiFoodDbContext>
    {
        public UmaiFoodDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<UmaiFoodDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            UmaiFoodDbContextConfigurer.Configure(builder, configuration.GetConnectionString(UmaiFoodConsts.ConnectionStringName));

            return new UmaiFoodDbContext(builder.Options);
        }
    }
}
