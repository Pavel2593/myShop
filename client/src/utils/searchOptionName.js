export const searchOptionName = (id, array) => {
    if (array) {
        const result = array.map((item) => {
            if (id === item.id) {
                return item.name
            }
    
            return ''
        })
        return result
    } else {
        return false
    }
}