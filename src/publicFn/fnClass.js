//删除数组某个元素
const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
};
