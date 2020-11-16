
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.Blogs.Dtos;
using UmaiFood.QuanLyWebsite.Menus.Dtos;

namespace UmaiFood.QuanLyWebsite.Menus
{
    public class MenuAppService: UmaiFoodAppServiceBase,IMenuAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Menu, long> _menuRepository;
        public MenuAppService(UserManager userManager, IRepository<Menu, long> menuRepository)
        {
            _userManager = userManager;
            _menuRepository = menuRepository;
        }
        public async Task PostMenu(CreateMenuInputDto input)
        {
            var Menu = ObjectMapper.Map<Menu>(input);
            await _menuRepository.InsertAsync(Menu);
        }
        public async Task<ListResultDto<MenuDto>> GetAllMenu()
        {
            var result = await _menuRepository.GetAllListAsync();
            return new ListResultDto<MenuDto>(ObjectMapper.Map<List<MenuDto>>(result));
        }
        public async Task DeleteMenu(EntityDto<long> input)
        {
            await _menuRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateMenu(MenuEditDto input)
        {
            var result = await _menuRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<MenuEditDto> GetMenuForEdit(EntityDto<long> input)
        {
            var result = await _menuRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<MenuEditDto>(result);
        }
    }
}