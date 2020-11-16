using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.Authorization.Users;
using UmaiFood.QuanLyWebsite.Blogs.Dtos;

namespace UmaiFood.QuanLyWebsite.Blogs
{
    public class BlogAppService: UmaiFoodAppServiceBase, IBlogAppService
    {
        private readonly UserManager _userManager;
        private readonly IRepository<Blog, long> _blogRepository;
        public BlogAppService(UserManager userManager, IRepository<Blog, long> blogRepository)
        {
            _userManager = userManager;
            _blogRepository = blogRepository;
        }
        public async Task PostBlog(CreateBlogInputDto input)
        {
            var Blog = ObjectMapper.Map<Blog>(input);
            await _blogRepository.InsertAsync(Blog);
        }
        public async Task<ListResultDto<BlogDto>> GetAllBlog()
        {
            var result = await _blogRepository.GetAllListAsync();
            return new ListResultDto<BlogDto>(ObjectMapper.Map<List<BlogDto>>(result));
        }
        public async Task DeleteBlog(EntityDto<long> input)
        {
            await _blogRepository.DeleteAsync(input.Id);
        }
        public async Task UpdateBlog(BlogEditDto input)
        {
            var result = await _blogRepository.FirstOrDefaultAsync(input.Id);
            ObjectMapper.Map(input, result);
        }
        public async Task<BlogEditDto> GetBlogForEdit(EntityDto<long> input)
        {
            var result = await _blogRepository.FirstOrDefaultAsync(input.Id);
            return ObjectMapper.Map<BlogEditDto>(result);
        }
    }
}
