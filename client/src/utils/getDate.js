export const getDate = (str) => {
    const date = new Date(str);
    return date.toLocaleString('ru')
}