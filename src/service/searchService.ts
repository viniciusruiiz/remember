import BaseService from "./baseService";
import { AxiosResponse } from "axios";

export default class SearchService extends BaseService {
    async invite(memoryLineId : string, userId: string) : Promise<AxiosResponse<any>> {
        return super.post(`${this.baseUrl}/memoryline/${memoryLineId}/${userId}`, undefined);
    }

    async getInvites() {
        return super.get(`${this.baseUrl}/memoryline/invites`);
    }

    async answerInvite(idInvite: string, isAccepted: boolean) : Promise<AxiosResponse<any>> {
        return super.post(`${this.baseUrl}/memoryline/invites/${idInvite}`, isAccepted);
    }
}