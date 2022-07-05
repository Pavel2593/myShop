export const searchOptionName = (value, array) => {
    const result = array.map((item) => {
        if (value === item.value) {
            return item.name
        }

        return ''
    })
    return result
}