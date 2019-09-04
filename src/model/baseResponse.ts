export default class BaseResponse {
    public status: string;
    public msg: string;
    public success: boolean;
    public error: boolean;
    //TODO: validar se todos irão trazer esses mesmos atributos, ou será só a chamada de login
}