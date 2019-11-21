import { AxiosResponse } from 'axios'
import BaseService from "./baseService";
import GetMomentsResponse from '../model/response/getMomentsResponse';

export default class MomentService extends BaseService {
    getAllMoments(memoryLineId : string, page : number) : Promise<AxiosResponse<GetMomentsResponse>> {
        return super.get(`${this.baseUrl}/moment/memory-line/${memoryLineId}/${page}`);
    }

    delete(momentId : string) :  Promise<AxiosResponse<any>> {
        return super.delete(`${this.baseUrl}/moment/${momentId}`);
    }
}