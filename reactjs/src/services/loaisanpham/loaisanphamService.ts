import { CreateLoaiSanPhamInputDto } from './dto/CreateLoaiSanPhamInputDto';
import { EntityDto } from '../../services/dto/entityDto';
import { getAllLoaiSanPham } from './dto/getAllLoaiSanPham';
import { PagedResultDto } from '../../services/dto/pagedResultDto';
import { PageLoaiSanPhamResultRequestDto } from "./dto/PageLoaiSanPhamResultRequestDto";
import { updateLoaiSanPhamInput } from './dto/updateLoaiSanPhamInput';
import http from '../httpService';

class loaisanphamService {
  public async create(CreateLoaiSanPhamInputDto: CreateLoaiSanPhamInputDto) {
    let result = await http.post('api/services/app/LoaiSanPham/PostLoaiSanPham', CreateLoaiSanPhamInputDto);
    return result.data.result;
  }

  public async update(updateLoaiSanPhamInput: updateLoaiSanPhamInput) {
    let result = await http.put('api/services/app/LoaiSanPham/UpdateLoaiSanPham', updateLoaiSanPhamInput);
    return result.data.result;
  }

  public async delete(entityDto: EntityDto<number>) {
    let result = await http.delete('api/services/app/LoaiSanPham/DeleteLoaiSanPham', { params: entityDto });
    return result.data;
  }
    public async getAll(pagedFilterAndSortedRequest: PageLoaiSanPhamResultRequestDto): Promise<PagedResultDto<getAllLoaiSanPham>> {
    let result = await http.get('api/services/app/LoaiSanPham/GetAllLoaiSanPham', { params: pagedFilterAndSortedRequest });
    return result.data.result;
  }
  public async get(entityDto: EntityDto<number>): Promise<getAllLoaiSanPham> {
    let result = await http.get('api/services/app/LoaiSanPham/GetLoaiSanPhamForEdit', { params: entityDto });
    return result.data.result;
  }
}

export default new loaisanphamService();