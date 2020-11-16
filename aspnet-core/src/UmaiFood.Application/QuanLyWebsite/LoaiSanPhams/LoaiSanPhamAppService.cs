using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.LoaiSanPhams.Dtos;

namespace UmaiFood.QuanLyWebsite.LoaiSanPhams
{
    public class LoaiSanPhamAppService: UmaiFoodAppServiceBase, ILoaiSanPhamAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<LoaiSanPham, long> _loaisanphamRepository;
        public LoaiSanPhamAppService(UserManager userManager, IRepository<LoaiSanPham, long> loaisanphamRepository)
        {
            _userManager = userManager;
            _loaisanphamRepository = loaisanphamRepository;
        }
        public async Task PostLoaiSanPham(CreateLoaiSanPhamInputDto input)
        {
            var LoaiSanPham = ObjectMapper.Map<LoaiSanPham>(input);
            await _loaisanphamRepository.InsertAsync(LoaiSanPham);
        }
        public async Task<ListResultDto<LoaiSanPhamDto>> GetAllLoaiSanPham()
        {
            var result = await _loaisanphamRepository.GetAllListAsync();
            return new ListResultDto<LoaiSanPhamDto>(ObjectMapper.Map<List<LoaiSanPhamDto>>(result));
        }
        public async Task DeleteLoaiSanPham(EntityDto<long> input)
        {
            await _loaisanphamRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateLoaiSanPham(LoaiSanPhamEditDto input)
        {
            var result = await _loaisanphamRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<LoaiSanPhamEditDto> GetLoaiSanPhamForEdit(EntityDto<long> input)
        {
            var result = await _loaisanphamRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<LoaiSanPhamEditDto>(result);
        }
    }
}
