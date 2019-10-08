import BaseService from "./baseService";
import { AxiosResponse } from "axios";
import GetMemoryLinesResponse from "../model/response/getMemoryLinesResponse";
import MemoryLineEntity from "../model/entity/memoryLineEntity";

export default class MemoryLineService extends BaseService {

    getAllMemoryLine() : Promise<AxiosResponse<GetMemoryLinesResponse>> {
        return super.get(`${this.baseUrl}/memory-line/all`);
    }

    add() : Promise<AxiosResponse<MemoryLineEntity>> {
        return super.post(`${this.baseUrl}/memory-line`, undefined);
    }

    changeName(memoryLineId: string, newName: string) : Promise<AxiosResponse<any>> {
        return super.put(`${this.baseUrl}/memory-line/${memoryLineId}`, newName);
    }

    delete(memoryLineId: string) : Promise<AxiosResponse<any>> {
        return super.delete(`${this.baseUrl}/memory-line/${memoryLineId}`);
    }
}