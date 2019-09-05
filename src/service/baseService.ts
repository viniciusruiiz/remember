import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {

    private _getAxiosConfig(): AxiosRequestConfig | undefined {
        if (BaseService._token) {
            return {
                headers: {
                    access_token: BaseService._token
                }
            };
        }

        return undefined;
    }

    private static _token: string | null;

    protected setToken(token: string | null): void {
        BaseService._token = token;
    }

    public static isAuthenticated() : boolean {
        return !!this._token;
    };

    protected get(url: string): Promise<AxiosResponse<any>> {
        return axios.get(url, this._getAxiosConfig());
    }

    protected post(url: string, data: any): Promise<AxiosResponse<any>> {
        return axios.post(url, data, this._getAxiosConfig());
    }

    protected put(url: string, data: any): Promise<AxiosResponse<any>> {
        return axios.put(url, data, this._getAxiosConfig());
    }

    protected delete(url: string): Promise<AxiosResponse<any>> {
        return axios.delete(url, this._getAxiosConfig());
    }

    //(validar se será ou não feito um sessionID)

    //public storeOnCookie(item : string, value : string) {
    //    document.cookie = `${item}=${value}; expires=${this._getCookieExpirationTime()}`;
    //}

    //private _getCookieExpirationTime() : Date {
    //    let dateNow = new Date();

    //    dateNow.setDate(dateNow.getDate() + 1);

    //    return dateNow;
    //}
}