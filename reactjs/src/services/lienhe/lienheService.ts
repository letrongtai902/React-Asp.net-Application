import { CreateLienHeInputDto } from './dto/CreateLienHeInputDto';
import { EntityDto } from '../../services/dto/entityDto';
import { getAllLienHe } from './dto/getAllLienHe';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PagedLienHeResultRequestDto } from "./dto/PageLienHeResultRequestDto";
import { updateLienHeInput } from './dto/updateLienHeInput';
import http from '../httpService';

class LienHeService {
  public async create(CreateLienHeInputDto: CreateLienHeInputDto) {
    let result = await http.post('api/services/app/LienHe/PostLienHe', CreateLienHeInputDto);
    return result.data.result;
  }

  public async update(updateLienHeInput: updateLienHeInput) {
    let result = await http.put('api/services/app/LienHe/UpdateLienHe', updateLienHeInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto<number>) {
    let result = await http.delete('api/services/app/LienHe/DeleteLienHe', { params: entityDto });
    return result.data;
  }
    public async getAll(pagedFilterAndSortedRequest: PagedLienHeResultRequestDto): Promise<PagedResultDto<getAllLienHe>> {
    let result = await http.get('api/services/app/LienHe/GetAllLienHe', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
  public async get(entityDto: EntityDto<number>): Promise<getAllLienHe> {
    let result = await http.get('api/services/app/LienHe/GetLienHeForEdit', { params: entityDto });
    return result.data.result;
  }
}

export default new LienHeService();