import {CreateBlogInputDto} from '../services/blog/dto/CreateBlogInputDto'
import {GetAllBlog} from '../services/blog/dto/getAllblog';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PagedBlogResultRequestDto} from '../services/blog/dto/PagedBlogResultRequestDto';
import {updateBlogInput} from '../services/blog/dto/updateBlogInput';
import BlogModel from '../models/Blogs/BlogModel'
import blogService from '../services/blog/blogService';
import { action, observable } from 'mobx';


class blogStore{
    @observable blog! :PagedResultDto<GetAllBlog>;
    @observable blogModel: BlogModel = new BlogModel();
    @action
    async create(createBlogInput: CreateBlogInputDto) {
      await blogService.create(createBlogInput);
    }

    @action 
    async CreateBlog()
    {
        this.blogModel = {
        tieuDe: '',
        ngayXuatBan:'',
        noiDung: '',
        hinhAnh: '',
        tacGia: '',
        tag: '',
        id: 0,
        };
    }
    @action
    async update(updateBlogInput: updateBlogInput) {
      let result = await blogService.update(updateBlogInput);
  
      this.blog.items = this.blog.items.map((x: GetAllBlog) => {
        if (x.id === updateBlogInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await blogService.delete(entityDto);
        this.blog.items = this.blog.items.filter((x: GetAllBlog) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedBlogResultRequestDto) {
        let result = await blogService.getAll(pagedFilterAndSortedRequest);
        this.blog = result;
    }
    
    @action
    async get(entityDto: EntityDto) {
      let result = await blogService.get(entityDto);
      this.blogModel = result;
    }
    
}
export default blogStore;