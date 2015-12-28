import BaseStore from './BaseStore';

class LoginStore extends BaseStore {
    constructor() {
        super();
    }

    isLoggedIn() {
        return false;
    }
}

export default new LoginStore();