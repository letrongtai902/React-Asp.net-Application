using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using UmaiFood.QuanLyWebsite.Blogs.Dtos;

namespace UmaiFood.QuanLyWebsite.Blogs
{
    public interface IBlogAppService: IApplicationService
    {
        Task PostBlog(CreateBlogInputDto input);
        Task<ListResultDto<BlogDto>> GetAllBlog();
        Task DeleteBlog(EntityDto<long> input);
        Task<BlogEditDto> GetBlogForEdit(EntityDto<long> input);
        Task UpdateBlog(BlogEditDto input);
    }
}
