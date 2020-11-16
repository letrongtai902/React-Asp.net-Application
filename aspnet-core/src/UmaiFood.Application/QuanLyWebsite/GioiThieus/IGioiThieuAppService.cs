using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.GioiThieus.Dtos;

namespace UmaiFood.QuanLyWebsite.GioiThieus
{
    public interface IGioiThieuAppService : IApplicationService
    {
        Task PostGioiThieu(CreateGioiThieuInputDto input);
        Task<ListResultDto<GioiThieuDto>> GetAllGioiThieu();
        Task DeleteGioiThieu(EntityDto<long> input);
        Task<GioiThieuEditDto> GetGioiThieuForEdit(EntityDto<long> input);
        Task UpdateGioiThieu(GioiThieuEditDto input);
    }
}
