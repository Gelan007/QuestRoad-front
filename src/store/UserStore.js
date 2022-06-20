import {makeAutoObservable} from "mobx";

export default class  UserStore {
    constructor() {
        this._isAuth = false // создание переменных
        this._user = {} // underscore означает что эту переменную нельзя изменять
        // теперь mobx  будес следить за изменениями этих переменных и перерендывать компоненты при их изменениия
        this._questId = 0;
        makeAutoObservable(this)
    }
    // создание action(функции, которые как-то изменяют состояние)
    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setQuestId(questId) {
        this._questId = questId;
    }

    // computed функции, вызываются только в том случае, если переменная внутри была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }

    get questId() {
        return this._questId;
    }


}