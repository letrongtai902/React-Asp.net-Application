using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace UmaiFood.EntityFrameworkCore
{
    public static class UmaiFoodDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<UmaiFoodDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<UmaiFoodDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
