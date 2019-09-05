import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import LoginRequest from "../model/request/loginRequest";
import LoginResponse from "../model/response/loginResponse";

export default class LoginService extends BaseService {

    login(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        return super.post("https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta/signin", data);
    }

    logout(): void {
        super.setToken(null);
    }

    setAuthenticationToken(token: string){
        super.setToken(token);
    }
}