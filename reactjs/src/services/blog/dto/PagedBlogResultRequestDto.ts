import { PagedFilterAndSortedRequest } from '../../dto/pagedFilterAndSortedRequest';

export interface PagedBlogResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}