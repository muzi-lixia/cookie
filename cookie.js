
/*
* 封装cookie
* */

let cookie = {
    /*
    * @params
    *   obj: object, 需要存储的键值对
    *   day: number, 过期时间
    * @return
    *   无返回
    * */
    set(obj,day){
        let date = new Date(new Date().getTime() + day*24*60*60*1000).toUTCString();
        for(let [k, v] of Object.entries(obj)){
            document.cookie = `${k}=${v}; expires=${date}`;
        }
    },

    /*
   * @params
   *   key: string, 要获取的键名
   * @return
   *   string, key对应的值， 没有则返回''
   * */
    get(key){
        new RegExp("(^|\\s)"+key+"=(.+?)(;|$)").test(document.cookie);
        return RegExp.$2;
    },


    /*
    * @params
    *   key: string, 要清除的键名
    * @return
    *   无返回
    * */
    remove(key){
        this.set({[key]: ""},-1);
    }
};