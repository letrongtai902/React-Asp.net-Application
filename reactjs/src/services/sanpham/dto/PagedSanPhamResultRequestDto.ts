import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedSanPhamResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}