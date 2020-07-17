/**
 * 防抖函数
 */
export function debounce(func, wait) {
    let timer;
    return function() {
        let context = this; // 注意 this 指向 window
        let args = arguments; // arguments中存着e
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}