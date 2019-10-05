export default class BaseResponse<T> {
    public success: boolean;
    public data: T;
    public error: string;
}