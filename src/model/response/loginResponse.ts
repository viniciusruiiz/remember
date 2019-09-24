import BaseResponse from "../baseResponse";

export default class LoginResponse extends BaseResponse {
    data: LoginResponse;
    access_token?: string;
    user_id?: string;
}