import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {

    protected _getAxiosConfig(): AxiosRequestConfig | undefined {
        BaseService.refreshToken();

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

    public static async refreshToken() {
        if(BaseService.flRefreshToken && BaseService.isAuthenticated()) {

            BaseService.flRefreshToken = false;
            
            console.log("REFRESH TOKEN BE CAREFUUUUUUUUUUUUUUUUL")
            
            let refreshToken = await this.getRefreshToken(localStorage.getItem("refresh_token"));

            this.setTokenOnLocalStorage(refreshToken.data.data.access_token);

            setTimeout(() => {
                console.log("refreshtoken set to true")
                BaseService.flRefreshToken = true;
            }, 1000 * 60 * 30);
        }
    }

    private static flRefreshToken : boolean = true;

    public static isAuthenticated(): boolean {
        return !!localStorage.getItem("refresh_token");
    }

    protected readonly baseUrl: string = 'https://1kamokmd96.execute-api.us-east-1.amazonaws.com/beta'

    protected static setTokenOnLocalStorage(token: string): void {
        localStorage.setItem("access_token", token);
    }

    protected static setRefreshTokenOnLocalStorage(token: string): void {
        localStorage.setItem("refresh_token", token);
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

    private static async getRefreshToken(refreshToken : string | null) : Promise<AxiosResponse<any>> {
        let bs = new BaseService();
        let url = `${bs.baseUrl}/account/refresh-token`
        return axios.post(url, JSON.stringify({"refresh_token":refreshToken}), bs._getAxiosConfig());
    }
}