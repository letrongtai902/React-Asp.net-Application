using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.Menus.Dtos;

namespace UmaiFood.QuanLyWebsite.Menus
{
    public interface IMenuAppService: IApplicationService
    {
        Task PostMenu(CreateMenuInputDto input);
        Task<ListResultDto<MenuDto>> GetAllMenu();
        Task DeleteMenu(EntityDto<long> input);
        Task UpdateMenu(MenuEditDto input);
        Task<MenuEditDto> GetMenuForEdit(EntityDto<long> input);
    }
}
