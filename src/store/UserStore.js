import {makeAutoObservable} from "mobx";

export default class UserStore {

    constructor() {
        this._isAuth = false;
        this._role = '';
        this._balance = 0;
        this._user = {}
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth=bool;
    }

    setUser(user) {
        this._user = user;
    }

    setRole(role) {
        this._role = role;
    }

    setBalance(balance) {
        this._balance = balance;
    }

    get isAuth() {
        return this._isAuth;
    }

    get role() {
        return this._role;
    }

    get balance() {
        return this._balance;
    }

    get user() {
        return this._user;
    }
}