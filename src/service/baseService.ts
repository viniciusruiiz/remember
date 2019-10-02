'use strict'

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class BaseService {

    private _getAxiosConfig(): AxiosRequestConfig | undefined {
        
        let token = localStorage.getItem("access_token")
    
        if (token) {
            return {
                headers: {
                    access_token: token
                }
            };
        }

        return undefined;
    }

    protected setTokenOnLocalStorage(token: string | null): void {
        localStorage.setItem("access_token", token as string);
    }

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

    protected patch(url: string, data?: any) : Promise<AxiosResponse<any>> {
        return axios.patch(url, data, this._getAxiosConfig());
    }
}