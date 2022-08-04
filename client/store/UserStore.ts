import {makeAutoObservable} from 'mobx'

export default class UserStore {
    _isAuth: boolean
    _user: string

    constructor() {
        this._isAuth = false
        this._user = ''
        makeAutoObservable(this)
    }

    setIsAuth(bool: boolean): void {
        this._isAuth = bool
    }

    setUser(user: string): void {
        this._user = user
    }

    get isAuth():boolean {
        return this._isAuth
    }

    get user():string {
        return this._user
    }
}