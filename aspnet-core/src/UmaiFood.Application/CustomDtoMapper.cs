using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using UmaiFood.QuanLyWebsite;
using UmaiFood.QuanLyWebsite.Blogs.Dtos;
using UmaiFood.QuanLyWebsite.GioiThieus.Dtos;
using UmaiFood.QuanLyWebsite.LienHes.Dtos;
using UmaiFood.QuanLyWebsite.LoaiSanPhams.Dtos;
using UmaiFood.QuanLyWebsite.Menus.Dtos;
using UmaiFood.QuanLyWebsite.SanPhams.Dtos;

namespace UmaiFood
{
    internal static class CustomDtoMapper
    {
        public static void CreateMappings(IMapperConfigurationExpression configuration)
        {
            //Map của phần giới thiệu
            configuration.CreateMap<CreateGioiThieuInputDto, GioiThieu>().ReverseMap();
            configuration.CreateMap<GioiThieu, GioiThieuDto>().ReverseMap();
            configuration.CreateMap<GioiThieuEditDto, GioiThieu>().ReverseMap();

            //Map của phần Blog
            configuration.CreateMap<CreateBlogInputDto, Blog>().ReverseMap();
            configuration.CreateMap<Blog, BlogDto>().ReverseMap();
            configuration.CreateMap<BlogEditDto, Blog>().ReverseMap();

            //Map của phần Menu
            configuration.CreateMap<CreateMenuInputDto, Menu>().ReverseMap();
            configuration.CreateMap<Menu, MenuDto>().ReverseMap();
            configuration.CreateMap<MenuEditDto, Menu>().ReverseMap();


            //Map của phần sản phẩm
            configuration.CreateMap<CreateSanPhamInputDto, Sanpham>().ReverseMap();
            configuration.CreateMap<Sanpham, SanPhamDto>().ReverseMap();
            configuration.CreateMap<SanPhamEditDto, Sanpham>().ReverseMap();


            //Map của phần Liên Hệ
            configuration.CreateMap<CreateLienHeInputDto, LienHe>().ReverseMap();
            configuration.CreateMap<LienHe, LienHeDto>().ReverseMap();
            configuration.CreateMap<LienHeEditDto, LienHe>().ReverseMap();

            //Map của phần Liên Hệ
            configuration.CreateMap<CreateLoaiSanPhamInputDto, LoaiSanPham>().ReverseMap();
            configuration.CreateMap<LoaiSanPham, LoaiSanPhamDto>().ReverseMap();
            configuration.CreateMap<LoaiSanPhamEditDto, LoaiSanPham>().ReverseMap();
        }
    }
}
