import BaseResponse from "../baseResponse";

export default class AllMemoryLineResponse extends BaseResponse<AllMemoryLineResponse> {
    public:MemoryLine[];
    private:MemoryLine[];
}

class MemoryLine {
    idMemoryLine: string;
    idOwner: string;  
    quantityParticipants: string;
    creationDate: string;
    name: string;
    quantityMoments: string;
}