import BaseService from "./baseService";
import ReactionEntity from "../model/entity/reactionEntity";
import { AxiosResponse } from "axios";
import GetAllReactionsResponse from "../model/response/getAllReactionsResponse";

export default class ReactionService extends BaseService {
    getReactions(targetId : string) : Promise<AxiosResponse<GetAllReactionsResponse>> {
        return super.get(`${this.baseUrl}/reaction/${targetId}`)
    }
    
    react(targetId : string, react: ReactionEntity) : Promise<AxiosResponse<any>> {
        return super.post(`${this.baseUrl}/reaction/${targetId}`, react)
    }

    deleteReact(idReact: string) : Promise<AxiosResponse<any>> {
        return super.delete(`${this.baseUrl}/reaction/${idReact}`)
    }

    updateReact(idReact: string, react: ReactionEntity) : Promise<AxiosResponse<any>>  {
        return super.put(`${this.baseUrl}/reaction/${idReact}`, react)
    }
}