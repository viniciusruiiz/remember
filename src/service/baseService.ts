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
                console.log("refreshtoken programmed")
                BaseService.flRefreshToken = true;
                BaseService.refreshToken();
            }, 1000 * 60 * 59);
        }
    }

    private static flRefreshToken : boolean;

    public static setRefreshToken(fl: boolean) : void {
        this.flRefreshToken = fl;
    }

    public static currentUsername : string;
    public static currentName : string;
    public static currentFName : string;
    public static currentLName : string;
    public static currentUserPic : string;
    public static updateProfile : void;

    public static isAuthenticated(): boolean {
        return !!localStorage.getItem("refresh_token");
    }

    protected readonly baseUrl: string = 'https://1kamokmd96.execute-api.us-east-1.amazonaws.com/dev'

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