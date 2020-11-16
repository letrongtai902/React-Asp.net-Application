import {CreateMenuInputDto} from '../services/menu/dto/CreateMenuInputDto'
import {getAllMenu} from '../services/menu/dto/getAllMenu';
import { PagedResultDto } from '../services/dto/pagedResultDto';
import { EntityDto } from '../services/dto/entityDto';
import {PagedMenuResultRequestDto} from '../services/menu/dto/PageMenuResultRequestDto';
import {updateMenuInput} from '../services/menu/dto/updateMenuInput';
import MenuModel from '../models/Menus/MenuModel'
import menuService from '../services/menu/menuService';
import { action, observable } from 'mobx';


class menuStore{
    @observable menu! :PagedResultDto<getAllMenu>;
    @observable menuModel: MenuModel = new MenuModel();

    @action
    async create(createMenuInput: CreateMenuInputDto) {
      await menuService.create(createMenuInput);
    }

    @action 
    async CreateMenu()
    {
        this.menuModel = {
            ten: '',
            menuTypeId: 0,
            id: 0
        };
    }
    @action
    async update(updateMenuInput: updateMenuInput) {
      let result = await menuService.update(updateMenuInput);
  
      this.menu.items = this.menu.items.map((x: getAllMenu) => {
        if (x.id === updateMenuInput.id) x = result;
        return x;
      });
    }

    @action
    async delete(entityDto: EntityDto) {
        await menuService.delete(entityDto);
        this.menu.items = this.menu.items.filter((x: getAllMenu) => x.id !== entityDto.id);
    }

    @action
    async getAll(pagedFilterAndSortedRequest: PagedMenuResultRequestDto) {
        let result = await menuService.getAll(pagedFilterAndSortedRequest);
        this.menu = result;
    }
    @action
    async get(entityDto: EntityDto) {
      let result = await menuService.get(entityDto);
      this.menuModel = result;
    }

}
export default menuStore;