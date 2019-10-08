import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import GetAllCommentsResponse from "../model/response/getAllCommentsResponse";

export default class CommentService extends BaseService {
    
    getComments(momentId : string) : Promise<AxiosResponse<GetAllCommentsResponse>> {
        return this.get(`${this.baseUrl}/comment/moment/${momentId}`)
    }

    comment(momentId : string, comment: any) : Promise<AxiosResponse<any>> { 
        return this.post(`${this.baseUrl}/comment/moment/${momentId}`, comment)
    }

    deleteComment(commentId: string) : Promise<AxiosResponse<any>> {
        return this.delete(`${this.baseUrl}/comment/${commentId}`)
    }

    updateComment(commentId: string, comment: any) : Promise<AxiosResponse<any>> {
        return this.put(`${this.baseUrl}/comment/${commentId}`, comment)
    }

    answerComment(commentId: string, comment: any) : Promise<AxiosResponse<any>> {
        return this.post(`${this.baseUrl}/comment/${commentId}`, comment)
    }
}