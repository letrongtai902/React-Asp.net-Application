import {CreateLienHeInputDto} from '../services/lienhe/dto/CreateLienHeInputDto'
import {getAllLienHe} from '../services/lienhe/dto/getAllLienHe';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PagedLienHeResultRequestDto} from '../services/lienhe/dto/PageLienHeResultRequestDto';
import {updateLienHeInput} from '../services/lienhe/dto/updateLienHeInput';
import LienHeModel from '../models/LienHes/LienHeModel'
import lienheService from '../services/lienhe/lienheService';
import { action, observable } from 'mobx';


class lienheStore{
    @observable lienhe! :PagedResultDto<getAllLienHe>;
    @observable lienheModel: LienHeModel = new LienHeModel();

    @action
    async create(createLienHeInput: CreateLienHeInputDto) {
      await lienheService.create(createLienHeInput);
    }

    @action 
    async CreateLienHe()
    {
        this.lienheModel = {
            diaChi: '',
            sdt: '',
            email: '',
            trangFaceBook: '',
            id: 0
        };
    }
    @action
    async update(updateLienHeInput: updateLienHeInput) {
      let result = await lienheService.update(updateLienHeInput);
  
      this.lienhe.items = this.lienhe.items.map((x: getAllLienHe) => {
        if (x.id === updateLienHeInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await lienheService.delete(entityDto);
        this.lienhe.items = this.lienhe.items.filter((x: getAllLienHe) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedLienHeResultRequestDto) {
        let result = await lienheService.getAll(pagedFilterAndSortedRequest);
        this.lienhe = result;
    }
    @action
    async get(entityDto: EntityDto) {
      let result = await lienheService.get(entityDto);
      this.lienheModel = result;
    }
}
export default lienheStore;