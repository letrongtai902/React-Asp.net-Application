import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedMenuResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}