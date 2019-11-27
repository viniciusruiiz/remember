import { AxiosResponse, AxiosRequestConfig } from 'axios';
import BaseService from "./baseService";
import PreSignedUrlResponse from "../model/response/preSignedUrlResponse";

export default class FileService extends BaseService {

    getPreSignedUrl(data: File, memoryLineId?: string): Promise<AxiosResponse<PreSignedUrlResponse>> {

        return super.get(this.baseUrl + '/bucket/presigned-put/?object_name=' + data.name + (!!memoryLineId ? ('&id_memory_line=' + memoryLineId) : ""));
    }

    uploadFile(presigned_url : string, data: File, mimeType: string) {
        
        let newAxiosConfig = { headers: { 'Content-Type': mimeType }}

        return super.put(presigned_url, data, newAxiosConfig);
    }
}