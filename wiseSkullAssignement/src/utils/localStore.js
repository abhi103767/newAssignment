
export const getLocalData = (key) => {
    if(key) {
        const data = localStorage.getItem(key);
        return data;
  }
}


export const setLocalData = (key,value) => {
    console.log(key,value);
    if(key && value){
        localStorage.setItem(key,value);
    }
}