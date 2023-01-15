import {IStep} from "./IStep";

export interface IStage {
    name: string;
    steps: Array<IStep>;
    isDone: boolean;
}