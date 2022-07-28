export const getPageCount = (totalCount, limit) => {
    const result = Math.ceil(totalCount / limit)
    return result
}

export const getPagesArray = (totalPages) => {
    const result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}