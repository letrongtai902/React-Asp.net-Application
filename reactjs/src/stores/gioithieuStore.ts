import {CreateGioiThieuInputDto} from '../services/gioithieu/dto/CreateGioiThieuInputDto'
import {getAllGioiThieu} from '../services/gioithieu/dto/getAllGioiThieu';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PagedGioiThieuResultRequestDto} from '../services/gioithieu/dto/PagedGioiThieuResultRequestDto';
import {updateGioiThieuInput} from '../services/gioithieu/dto/updateGioiThieuInput';
import GioiThieuModel from '../models/GioiThieus/GioiThieuModel'
import gioithieuService from '../services/gioithieu/gioithieuService';
import { action, observable } from 'mobx';


class gioithieuStore{
    @observable gioithieu! :PagedResultDto<getAllGioiThieu>;
    @observable gioithieuModel: GioiThieuModel = new GioiThieuModel();

    @action
    async create(createGioiThieuInput: CreateGioiThieuInputDto) {
      await gioithieuService.create(createGioiThieuInput);
    }

    @action 
    async CreateGioiThieu()
    {
        this.gioithieuModel = {
        tieuDe: '',
        noiDung: '',
        hinhAnh: '',
        id: 0,
        };
    }
    @action
    async update(updateGioiThieuInput: updateGioiThieuInput) {
      let result = await gioithieuService.update(updateGioiThieuInput);
  
      this.gioithieu.items = this.gioithieu.items.map((x: getAllGioiThieu) => {
        if (x.id === updateGioiThieuInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await gioithieuService.delete(entityDto);
        this.gioithieu.items = this.gioithieu.items.filter((x: getAllGioiThieu) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedGioiThieuResultRequestDto) {
        let result = await gioithieuService.getAll(pagedFilterAndSortedRequest);
        this.gioithieu = result;
    }
    @action
    async get(entityDto: EntityDto) {
      let result = await gioithieuService.get(entityDto);
      this.gioithieuModel = result;
    }

}
export default gioithieuStore;