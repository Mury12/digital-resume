import Axios from 'axios';
export class AuthenticationService {
    password: string
    email: string

    constructor(password: string, email: string){
        this.password = password;
        this.email = email;
    }

    async authenticate(){
        try{
            const result = await Axios.post('/login', {password: this.password, email: this.email});
            Axios.defaults.headers.Authorization = result.data.token;
            return result.data;
        }catch(error){
            // handle error
        }
    }
}