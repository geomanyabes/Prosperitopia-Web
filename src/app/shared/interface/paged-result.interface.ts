export interface PagedResult<T> {
    pageSize: number;
    page: number;
    totalCount: number;
    result: T[]
}
