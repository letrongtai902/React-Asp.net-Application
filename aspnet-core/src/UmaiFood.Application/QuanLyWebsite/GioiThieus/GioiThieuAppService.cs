
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Roles;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.GioiThieus.Dtos;

namespace UmaiFood.QuanLyWebsite.GioiThieus
{
    public class GioiThieuAppService : UmaiFoodAppServiceBase,IGioiThieuAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<GioiThieu,long> _gioithieuRepository;
        public GioiThieuAppService(UserManager userManager, IRepository<GioiThieu,long> gioithieuRepository)
        {
            _userManager = userManager;
            _gioithieuRepository = gioithieuRepository;
        }
        public async Task PostGioiThieu(CreateGioiThieuInputDto input)
        {
            var gioithieu = ObjectMapper.Map<GioiThieu>(input);
            await _gioithieuRepository.InsertAsync(gioithieu);
        }
        public async Task<ListResultDto<GioiThieuDto>> GetAllGioiThieu()
        {
            var result = await _gioithieuRepository.GetAllListAsync();
            return new ListResultDto<GioiThieuDto>(ObjectMapper.Map<List<GioiThieuDto>>(result));
        }
        public async Task DeleteGioiThieu(EntityDto<long> input)
        {
            await _gioithieuRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateGioiThieu(GioiThieuEditDto input)
        {
            var result = await _gioithieuRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<GioiThieuEditDto> GetGioiThieuForEdit(EntityDto<long> input)
        {
            var result = await _gioithieuRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<GioiThieuEditDto>(result);
        }
    }
}
    