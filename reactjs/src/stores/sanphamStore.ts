import {CreateSanPhamInputDto} from '../services/sanpham/dto/CreateSanPhamInputDto'
import {getAllSanPham} from '../services/sanpham/dto/getAllSanPham';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PagedSanPhamResultRequestDto} from '../services/sanpham/dto/PagedSanPhamResultRequestDto';
import {updateSanPhamInput} from '../services/sanpham/dto/updateSanPhamInput';
import SanPhamModel from '../models/SanPhams/SanPhamModel'
import sanphamService from '../services/sanpham/sanphamService';
import { action, observable } from 'mobx';


class sanphamStore{
    @observable sanpham! :PagedResultDto<getAllSanPham>;
    @observable sanphamModel: SanPhamModel = new SanPhamModel();

    @action
    async create(createSanPhamInput: CreateSanPhamInputDto) {
      await sanphamService.create(createSanPhamInput);
    }

    @action 
    async CreateSanPham()
    {
        this.sanphamModel = {
          ten: '',
          moTa: '',
          hinhAnh: '',
          loaiId: 0,
          id: 0
        };
    }
    @action
    async update(updateSanPhamInput: updateSanPhamInput) {
      let result = await sanphamService.update(updateSanPhamInput);
      this.sanpham.items = this.sanpham.items.map((x: getAllSanPham) => {
        if (x.id === updateSanPhamInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await sanphamService.delete(entityDto);
        this.sanpham.items = this.sanpham.items.filter((x: getAllSanPham) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedSanPhamResultRequestDto) {
        let result = await sanphamService.getAll(pagedFilterAndSortedRequest);
        this.sanpham = result;
    }
    @action
    async get(entityDto: EntityDto) {
      let result = await sanphamService.get(entityDto);
      this.sanphamModel = result;
    }

}
export default sanphamStore;