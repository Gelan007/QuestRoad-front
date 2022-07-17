import {makeAutoObservable} from "mobx";

export default class  UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._questId = 0;
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setQuestId(questId) {
        this._questId = questId;
    }

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