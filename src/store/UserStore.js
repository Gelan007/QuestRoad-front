import {makeAutoObservable} from "mobx";

export default class  UserStore {
    constructor() {
        this._isAuth = false // создание переменных
        this._user = {} // underscore означает что эту переменную нельзя изменять
        // теперь mobx  будес следить за изменениями этих переменных и перерендывать компоненты при их изменениия
        makeAutoObservable(this)
    }
    // создание action(функции, которые как-то изменяют состояние)
    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    // computed функции, вызываются только в том случае, если переменная внутри была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}