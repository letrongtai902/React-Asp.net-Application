import { CreateMenuInputDto } from './dto/CreateMenuInputDto';
import { EntityDto } from '../../services/dto/entityDto';
import { getAllMenu } from './dto/getAllMenu';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedMenuResultRequestDto } from "./dto/PageMenuResultRequestDto";
import { updateMenuInput } from './dto/updateMenuInput';
import http from '../httpService';

class menuService {
  public async create(CreateMenuInputDto: CreateMenuInputDto) {
    let result = await http.post('api/services/app/Menu/PostMenu', CreateMenuInputDto);
    return result.data.result;
  }

  public async update(updateMenuInput: updateMenuInput) {
    let result = await http.put('api/services/app/Menu/UpdateMenu', updateMenuInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto<number>) {
    let result = await http.delete('api/services/app/Menu/DeleteMenu', { params: entityDto });
    return result.data;
  }
    public async getAll(pagedFilterAndSortedRequest: PagedMenuResultRequestDto): Promise<PagedResultDto<getAllMenu>> {
    let result = await http.get('api/services/app/Menu/GetAllMenu', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
  public async get(entityDto: EntityDto<number>): Promise<getAllMenu> {
    let result = await http.get('api/services/app/Menu/GetMenuForEdit', { params: entityDto });
    return result.data.result;
  }
}

export default new menuService();