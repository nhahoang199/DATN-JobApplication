interface IPaginationModel {
    currentPage: number
    pageSize: number
    totalCount: number
    totalPages: number
    hasPrevious: boolean
    hasNext: boolean
}

export type { IPaginationModel }
