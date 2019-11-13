import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import LoginRequest from "../model/request/loginRequest";
import LoginResponse from "../model/response/loginResponse";

export default class LoginService extends BaseService {

    login(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        return super.post(this.baseUrl + "/account/signin", JSON.stringify(data));
    }

    logout(): void {
        BaseService.setTokenOnLocalStorage("");
        BaseService.setRefreshTokenOnLocalStorage("");
    }

    setAuthenticationToken(token: string) : void {
        BaseService.setTokenOnLocalStorage(token);
    }

    setRefreshToken(refreshToken: string) : void {
        BaseService.setRefreshTokenOnLocalStorage(refreshToken);
    }
}