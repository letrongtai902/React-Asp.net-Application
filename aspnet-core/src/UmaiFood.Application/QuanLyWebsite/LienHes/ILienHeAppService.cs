using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.LienHes.Dtos;

namespace UmaiFood.QuanLyWebsite.LienHes
{
    public interface ILienHeAppService: IApplicationService
    {
        Task PostLienHe(CreateLienHeInputDto input);
        Task<ListResultDto<LienHeDto>> GetAllLienHe();
        Task DeleteLienHe(EntityDto<long> input);
        Task UpdateLienHe(LienHeEditDto input);
        Task<LienHeEditDto> GetLienHeForEdit(EntityDto<long> input);

    }
}
