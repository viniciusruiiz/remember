import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {

    protected _getAxiosConfig(): AxiosRequestConfig | undefined {

        let token = localStorage.getItem("access_token")

        if (token) {
            return {
                headers: {
                    Authorization: token
                }
            };
        }

        return undefined;
    }

    public static isAuthenticated(): boolean {
        return !!localStorage.getItem("access_token");
    }

    /**
     * TODO: implement refresh token
     */
    // refreshToken() : void {
    //     this.get()
    // }

    protected readonly baseUrl: string = 'https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta'

    protected setTokenOnLocalStorage(token: string): void {
        localStorage.setItem("access_token", token as string);
    }

    protected get(url: string): Promise<AxiosResponse<any>> {
        return axios.get(url, this._getAxiosConfig());
    }

    protected post(url: string, data: any): Promise<AxiosResponse<any>> {
        return axios.post(url, data, this._getAxiosConfig());
    }

    protected put(url: string, data: any, newConfig?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
        return axios.put(url, data, newConfig || this._getAxiosConfig());
    }

    protected delete(url: string): Promise<AxiosResponse<any>> {
        return axios.delete(url, this._getAxiosConfig());
    }

    protected patch(url: string, data?: any): Promise<AxiosResponse<any>> {
        return axios.patch(url, data, this._getAxiosConfig());
    }
}