import router from "../router";
import { Login } from "./users";

const session = {
    user: null,
    messages: [],
    toRoute:'/feed',
    Login(handle, password){

        const user = Login(handle, password);

        this.user = user.user;
        
        router.push(this.toRoute);
    }
};

export default session;

//export function