export default {
  formatJSON(arr, key){
    return arr.filter((item) => {
      if(item[key]){
        item[key] = item[key].split(',')
      }

      return item;
    })
  }
}