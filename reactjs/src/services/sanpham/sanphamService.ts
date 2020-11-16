
import { CreateSanPhamInputDto } from './dto/CreateSanPhamInputDto';
import { EntityDto } from '../dto/entityDto';
import { getAllSanPham } from './dto/getAllSanPham';
import { PagedResultDto } from '../dto/pagedResultDto';
import { PagedSanPhamResultRequestDto } from "./dto/PagedSanPhamResultRequestDto";
import { updateSanPhamInput } from './dto/updateSanPhamInput';
import http from '../httpService';


class sanphanService {
    public async create(CreateSanPhamInputDto: CreateSanPhamInputDto) {
        let result = await http.post('api/services/app/SanPham/PostSanPham', CreateSanPhamInputDto);
        return result.data.result;
      }
    
      public async update(updateSanPhamInput: updateSanPhamInput) {
        let result = await http.put('api/services/app/SanPham/UpdateSanPham', updateSanPhamInput);
        return result.data.result;
      }
    
      public async delete(entityDto: EntityDto<number>) {
        let result = await http.delete('api/services/app/SanPham/DeleteSanPham', { params: entityDto });
        return result.data;
      }
        public async getAll(pagedFilterAndSortedRequest: PagedSanPhamResultRequestDto): Promise<PagedResultDto<getAllSanPham>> {
        let result = await http.get('api/services/app/SanPham/GetAllSanPham', { params: pagedFilterAndSortedRequest });
        return result.data.result;
      }
      public async get(entityDto: EntityDto<number>): Promise<getAllSanPham> {
        let result = await http.get('api/services/app/SanPham/GetSanPhamForEdit', { params: entityDto });
        return result.data.result;
      }
}

export default new sanphanService;