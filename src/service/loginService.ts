import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import LoginRequest from "../model/request/loginRequest";
import LoginResponse from "../model/response/loginResponse";

export default class LoginService extends BaseService {

    login(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {

        //let string = '{"username":"'+ data.username +'", password:"'+ data.password +'"}' 
        //console.log('ok1', string)
        //let teste = JSON.parse(string);
        //console.log('ok', teste)
        //console.log(data);
        //console.log(JSON.stringify(data));
        //console.log(teste);
        //console.log(JSON.parse(teste));
        return super.post("https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta/signin", JSON.stringify(data));
    }

    logout(): void {
        super.setTokenOnLocalStorage(null);
    }

    setAuthenticationToken(token: string) : void {
        super.setTokenOnLocalStorage(token);
    }
}