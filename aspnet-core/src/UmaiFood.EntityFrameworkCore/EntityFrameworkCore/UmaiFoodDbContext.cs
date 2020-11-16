using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using UmaiFood.Authorization.Roles;
using UmaiFood.Authorization.Users;
using UmaiFood.MultiTenancy;
using UmaiFood.QuanLyWebsite;

namespace UmaiFood.EntityFrameworkCore
{
    public class UmaiFoodDbContext : AbpZeroDbContext<Tenant, Role, User, UmaiFoodDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<Blog> Blogs { get; set; }
        public virtual DbSet<LienHe> LienHes { get; set; }
        public virtual DbSet<GioiThieu> GioiThieus { get; set; }
        public virtual DbSet<Sanpham> Sanphams { get; set; }
        public virtual DbSet<LoaiSanPham> LoaiSanPhams { get; set; }
        public UmaiFoodDbContext(DbContextOptions<UmaiFoodDbContext> options)
            : base(options)
        {
            
        }
    }
}
