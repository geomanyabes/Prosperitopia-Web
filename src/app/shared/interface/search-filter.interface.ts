import { SearchType } from '../enum/searchtype.enum';
export interface SearchFilter {
    search?: string | '';
    searchType?: string;
}