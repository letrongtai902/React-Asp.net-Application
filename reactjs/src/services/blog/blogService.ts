
import { CreateBlogInputDto } from './dto/CreateBlogInputDto';
import { EntityDto } from '../../services/dto/entityDto';
import { GetAllBlog } from './dto/getAllblog';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedBlogResultRequestDto } from "./dto/PagedBlogResultRequestDto";
import { updateBlogInput } from './dto/updateBlogInput';
import http from '../httpService';

class blogService {
  public async create(CreateBlogInputDto: CreateBlogInputDto): Promise<GetAllBlog>  {
    let result = await http.post('api/services/app/Blog/PostBlog', CreateBlogInputDto);
    return result.data.result;
  }

  public async update(updateBlogInput: updateBlogInput): Promise<GetAllBlog> {
    let result = await http.put('api/services/app/Blog/UpdateBlog', updateBlogInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto<number>) {
    let result = await http.delete('api/services/app/Blog/DeleteBlog', { params: entityDto });
    return result.data;
  }
    public async getAll(pagedFilterAndSortedRequest: PagedBlogResultRequestDto): Promise<PagedResultDto<GetAllBlog>> {
    let result = await http.get('api/services/app/Blog/GetAllBlog', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
  public async get(entityDto: EntityDto<number>): Promise<GetAllBlog> {
    let result = await http.get('api/services/app/Blog/GetBlogForEdit', { params: entityDto });
    return result.data;
  }
}

export default new blogService();
