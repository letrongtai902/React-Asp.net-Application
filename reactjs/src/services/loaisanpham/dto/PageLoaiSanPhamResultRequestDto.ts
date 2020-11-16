import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PageLoaiSanPhamResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}