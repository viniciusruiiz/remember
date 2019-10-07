import { AxiosResponse } from 'axios'
import BaseService from "./baseService";
import GetMomentsResponse from '../model/response/getMomentsResponse';

export default class MomentService extends BaseService {
    getAllMoments(memoryLineId : string) : Promise<AxiosResponse<GetMomentsResponse>> {

        if (!memoryLineId) memoryLineId = '5d8a444ba074aeff45f72308' //debug purposes

        return super.get(`${this.baseUrl}/moment/memory-line/${memoryLineId}`);
    }
}