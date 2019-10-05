import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import SignUpRequest from '../model/request/signUpRequest';
import LoginRequest from "../model/request/loginRequest";
import LoginResponse from "../model/response/loginResponse";
import BaseResponse from "../model/baseResponse";

export default class SignUpService extends BaseService {
    signUp(data: SignUpRequest): Promise<AxiosResponse<BaseResponse<any>>> {
        return super.post(this.baseUrl + "/account/signup", JSON.stringify(data));
    }
}