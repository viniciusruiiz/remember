'use strict'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {

    private _getAxiosConfig(): AxiosRequestConfig | undefined {
        if (BaseService._token) {
            return {
                headers: {
                    access_token: BaseService._getToken()
                }
            };
        }

        return undefined;
    }

    private static _token: string | null;

    private static _getToken() : string | null {
        if(!BaseService._token)
            BaseService._token = localStorage.getItem("access_token")

        return BaseService._getToken();
    }

    protected setToken(token: string | null): void {
        BaseService._token = token;
        if(token)
            localStorage.setItem("access_token", token as string);
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
}