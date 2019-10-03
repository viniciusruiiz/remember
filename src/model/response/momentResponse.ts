import BaseResponse from "../baseResponse";

export default class MomentResponse extends BaseResponse<Moment[]> {

}

class Moment {
    idMoment: string;
    owner: string;
    type: string;  
    urlBucket: string;
    idMemoryLine: string;
    creationDate: string;
    description: string;
}