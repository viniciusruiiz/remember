import BaseResponse from "../baseResponse";
import MemoryLineEntity from "../entity/memoryLineEntity";

export default class GetMemoryLinesResponse extends BaseResponse<GetMemoryLinesResponse> {
    public:MemoryLineEntity[];
    private:MemoryLineEntity[];
}