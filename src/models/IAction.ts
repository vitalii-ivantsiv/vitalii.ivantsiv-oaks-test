import {ITaskDoneActionValue} from "./ITaskDoneAction";

export interface IAction {
    type: string;
    value: ITaskDoneActionValue | unknown;
}