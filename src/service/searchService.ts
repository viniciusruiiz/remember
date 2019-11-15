import BaseService from "./baseService";
import { AxiosResponse } from "axios";

export default class SearchService extends BaseService {
    async invite(memoryLineId : string, userId: string) : Promise<AxiosResponse<any>> {
        return super.post(`${this.baseUrl}/memory-line/${memoryLineId}/${userId}`, undefined);
    }

    async getInvites() {
        return super.get(`${this.baseUrl}/memory-line/invites`);
    }

    async answerInvite(idInvite: string, isAccepted: boolean) : Promise<AxiosResponse<any>> {
        return super.put(`${this.baseUrl}/memory-line/invites/${idInvite}`, isAccepted);
    }

    async search(q:string) : Promise<AxiosResponse<any>> {
        return super.get(`${this.baseUrl}/search/profile?q=${q}`)
    }
}