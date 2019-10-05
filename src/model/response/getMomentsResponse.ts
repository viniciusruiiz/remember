import MomentEntity from "../entity/momentEntity";
import BaseResponse from "../baseResponse";

export default class GetMomentsResponse extends BaseResponse<MomentEntity[]> {
    idMoment: string
    owner: string
    type: string  
    urlBucket: string
    idMemoryLine: string
    creationDate: string
    description: string
}