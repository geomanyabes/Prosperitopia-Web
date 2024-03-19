export enum SearchType {
  EXACT = 'EXACT',
  CONTAINS = 'CONTAINS',
  ENDS_WITH = 'ENDS_WITH',
  STARTS_WITH = 'STARTS_WITH',
}

export const SearchTypeEnumMapping: Record<SearchType, string> = {
  [SearchType.EXACT]: 'Exact',
  [SearchType.CONTAINS]: 'Contains',
  [SearchType.ENDS_WITH]: 'Ends With',
  [SearchType.STARTS_WITH]: 'Starts With'
};