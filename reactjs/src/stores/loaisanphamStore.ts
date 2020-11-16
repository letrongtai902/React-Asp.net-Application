import {CreateLoaiSanPhamInputDto} from '../services/loaisanpham/dto/CreateLoaiSanPhamInputDto'
import {getAllLoaiSanPham} from '../services/loaisanpham/dto/getAllLoaiSanPham';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PageLoaiSanPhamResultRequestDto} from '../services/loaisanpham/dto/PageLoaiSanPhamResultRequestDto';
import {updateLoaiSanPhamInput} from '../services/loaisanpham/dto/updateLoaiSanPhamInput';
import LoaiSanPhamModel from '../models/LoaiSanPhams/LoaiSanPhamModel'
import loaisanphamService from '../services/loaisanpham/loaisanphamService';
import { action, observable } from 'mobx';


class loaisanphamStore{
    @observable loaisanpham! :PagedResultDto<getAllLoaiSanPham>;
    @observable loaisanphamModel: LoaiSanPhamModel = new LoaiSanPhamModel();

    @action
    async create(createLoaiSanPhamInput: CreateLoaiSanPhamInputDto) {
      await loaisanphamService.create(createLoaiSanPhamInput);
    }

    @action 
    async CreateLoaiSanPham()
    {
        this.loaisanphamModel = {
            ten: '',
            id: 0
        };
    }
    @action
    async update(updateLoaiSanPhamInput: updateLoaiSanPhamInput) {
      let result = await loaisanphamService.update(updateLoaiSanPhamInput);
  
      this.loaisanpham.items = this.loaisanpham.items.map((x: getAllLoaiSanPham) => {
        if (x.id === updateLoaiSanPhamInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await loaisanphamService.delete(entityDto);
        this.loaisanpham.items = this.loaisanpham.items.filter((x: getAllLoaiSanPham) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PageLoaiSanPhamResultRequestDto) {
        let result = await loaisanphamService.getAll(pagedFilterAndSortedRequest);
        this.loaisanpham = result;
    }
    @action
    async get(entityDto: EntityDto) {
      let result = await loaisanphamService.get(entityDto);
      this.loaisanphamModel = result;
    }

}
export default loaisanphamStore;