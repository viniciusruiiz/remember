import BaseResponse from "../baseResponse";

export default class LoginResponse extends BaseResponse<LoginResponse> {
    access_token?: string;
    refresh_token?: string;
}