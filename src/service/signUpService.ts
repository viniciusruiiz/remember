import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import SignUpRequest from '../model/request/signUpRequest';
import SignUpResponse from '../model/response/signUpResponse';
import LoginRequest from "../model/request/loginRequest";
import LoginResponse from "../model/response/loginResponse";

export default class SignUpService extends BaseService {
    signUp(data: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
        return super.post("https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta/signup", data);
    }

    //TODO: Validar response
    confirmSignUp(data: LoginRequest): Promise<AxiosResponse<LoginResponse>> {
        return super.post("https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta/confirmsignup", data);
    }
}