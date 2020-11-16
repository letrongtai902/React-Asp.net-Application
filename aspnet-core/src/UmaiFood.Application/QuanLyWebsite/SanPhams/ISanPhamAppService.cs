using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.SanPhams.Dtos;

namespace UmaiFood.QuanLyWebsite.SanPhams
{
    public interface ISanPhamAppService: IApplicationService
    {
        Task PostSanPham(CreateSanPhamInputDto input);
        Task<ListResultDto<SanPhamDto>> GetAllSanPham();
        Task DeleteSanPham(EntityDto<long> input);
        Task UpdateSanPham(SanPhamEditDto input);
        Task<SanPhamEditDto> GetSanPhamForEdit(EntityDto<long> input);
    }
}
