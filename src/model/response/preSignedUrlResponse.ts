import BaseResponse from "../baseResponse";

export default class PreSignedUrlResponse extends BaseResponse<PreSignedUrlResponse> {
    presigned_url: string;
    mime_type: string
}