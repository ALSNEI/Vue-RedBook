export function setlocal(key,val){
    localStorage.setItem(key,val)
}
export function getlocal(key, val) {
    return localStorage.getItem(key)
}