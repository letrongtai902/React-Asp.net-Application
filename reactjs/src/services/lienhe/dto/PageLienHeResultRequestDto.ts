import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedLienHeResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}