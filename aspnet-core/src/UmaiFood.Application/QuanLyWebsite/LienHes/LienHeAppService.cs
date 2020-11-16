using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.LienHes.Dtos;

namespace UmaiFood.QuanLyWebsite.LienHes
{
    public class LienHeAppService: UmaiFoodAppServiceBase, ILienHeAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<LienHe, long> _lienheRepository;
        public LienHeAppService(UserManager userManager, IRepository<LienHe, long> lienheRepository)
        {
            _userManager = userManager;
            _lienheRepository = lienheRepository;
        }
        public async Task PostLienHe(CreateLienHeInputDto input)
        {
            var LienHe = ObjectMapper.Map<LienHe>(input);
            await _lienheRepository.InsertAsync(LienHe);
        }
        public async Task<ListResultDto<LienHeDto>> GetAllLienHe()
        {
            var result = await _lienheRepository.GetAllListAsync();
            return new ListResultDto<LienHeDto>(ObjectMapper.Map<List<LienHeDto>>(result));
        }
        public async Task DeleteLienHe(EntityDto<long> input)
        {
            await _lienheRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateLienHe(LienHeEditDto input)
        {
            var result = await _lienheRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<LienHeEditDto> GetLienHeForEdit(EntityDto<long> input)
        {
            var result = await _lienheRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<LienHeEditDto>(result);
        }

    }
}
