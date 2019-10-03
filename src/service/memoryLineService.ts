import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import AllMemoryLineResponse from "../model/response/allMemoryLineResponse";

export default class MemoryLineService extends BaseService {

    getAllMemoryLine() : Promise<AxiosResponse<AllMemoryLineResponse>> {
         //debug purposes

        return super.get(`${this.baseUrl}/memory-line/all`);
    }
}