
import { CreateGioiThieuInputDto } from './dto/CreateGioiThieuInputDto';
import { EntityDto } from '../../services/dto/entityDto';
import { getAllGioiThieu } from './dto/getAllGioiThieu';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedGioiThieuResultRequestDto } from "./dto/PagedGioiThieuResultRequestDto";
import { updateGioiThieuInput } from './dto/updateGioiThieuInput';
import http from '../httpService';

class gioithieuService {
  public async create(CreateGioiThieuInputDto: CreateGioiThieuInputDto) {
    let result = await http.post('api/services/app/GioiThieu/PostGioiThieu', CreateGioiThieuInputDto);
    return result.data.result;
  }

  public async update(updateGioiThieuInput: updateGioiThieuInput) {
    let result = await http.put('api/services/app/GioiThieu/UpdateGioiThieu', updateGioiThieuInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto<number>) {
    let result = await http.delete('api/services/app/GioiThieu/DeleteGioiThieu', { params: entityDto });
    return result.data;
  }
    public async getAll(pagedFilterAndSortedRequest: PagedGioiThieuResultRequestDto): Promise<PagedResultDto<getAllGioiThieu>> {
    let result = await http.get('api/services/app/GioiThieu/GetAllGioiThieu', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
  public async get(entityDto: EntityDto<number>): Promise<getAllGioiThieu> {
    let result = await http.get('api/services/app/GioiThieu/GetGioiThieuForEdit', { params: entityDto });
    return result.data;
  }
}

export default new gioithieuService();