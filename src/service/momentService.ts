import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import MomentResponse from "../model/response/momentResponse";

export default class MomentService extends BaseService {

    getAllMoments(idMemoryLine : string) : Promise<AxiosResponse<MomentResponse>> {
        if(!idMemoryLine) idMemoryLine = '5d8a444ba074aeff45f72308' //debug purposes

        return super.get(`${this.baseUrl}/moment/${idMemoryLine}`);
    }
}