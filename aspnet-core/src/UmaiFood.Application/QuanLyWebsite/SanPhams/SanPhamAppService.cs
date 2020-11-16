using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.SanPhams.Dtos;

namespace UmaiFood.QuanLyWebsite.SanPhams
{
    public class SanPhamAppService: UmaiFoodAppServiceBase, ISanPhamAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Sanpham, long> _sanphamRepository;
        public SanPhamAppService(UserManager userManager, IRepository<Sanpham, long> sanphamRepository)
        {
            _userManager = userManager;
            _sanphamRepository = sanphamRepository;
        }
        public async Task PostSanPham(CreateSanPhamInputDto input)
        {
            var SanPham = ObjectMapper.Map<Sanpham>(input);
            await _sanphamRepository.InsertAsync(SanPham);
        }
        public async Task<ListResultDto<SanPhamDto>> GetAllSanPham()
        {
            var result = await _sanphamRepository.GetAllListAsync();
            return new ListResultDto<SanPhamDto>(ObjectMapper.Map<List<SanPhamDto>>(result));
        }
        public async Task DeleteSanPham(EntityDto<long> input)
        {
            await _sanphamRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateSanPham(SanPhamEditDto input)
        {
            var result = await _sanphamRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<SanPhamEditDto> GetSanPhamForEdit(EntityDto<long> input)
        {
            var result = await _sanphamRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<SanPhamEditDto>(result);
        }
    }
}
