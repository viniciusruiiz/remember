import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import ProfileEntity from "../model/entity/profileEntity";

export default class ProfileService extends BaseService {
    getProfile() : Promise<AxiosResponse<ProfileEntity>> { 
        return this.get(`${this.baseUrl}/account/profile`)
    }
}