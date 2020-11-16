using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.LoaiSanPhams.Dtos;

namespace UmaiFood.QuanLyWebsite.LoaiSanPhams
{
    public interface ILoaiSanPhamAppService: IApplicationService
    {
        Task PostLoaiSanPham(CreateLoaiSanPhamInputDto input);
        Task<ListResultDto<LoaiSanPhamDto>> GetAllLoaiSanPham();
        Task DeleteLoaiSanPham(EntityDto<long> input);
        Task UpdateLoaiSanPham(LoaiSanPhamEditDto input);
        Task<LoaiSanPhamEditDto> GetLoaiSanPhamForEdit(EntityDto<long> input);
    }
}
