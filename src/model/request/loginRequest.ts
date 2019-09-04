export default class LoginRequest {
    public username: string;
    public password: string;
    public emailConfirmation?: string; //TODO: validar nome do campo para a API
}