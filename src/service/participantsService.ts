import BaseService from "./baseService";
import { AxiosResponse } from "axios";

export default class ParticipantsService extends BaseService {
    
    get(memoryLineId : string) : Promise<AxiosResponse<any>> {
        return this.get(`${this.baseUrl}/memory-line/participants/${memoryLineId}`)
    }
}