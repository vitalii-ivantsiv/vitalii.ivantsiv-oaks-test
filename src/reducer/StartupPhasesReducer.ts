import {IStage} from "../models/IStage";
import {IStep} from "../models/IStep";
import {IAction} from "../models/IAction";
import {ITaskDoneActionValue} from "../models/ITaskDoneAction";

export interface IState {
    stages: IStage[]
}

export const initialState = {
    stages: [],
} as IState;

export const startupPhasesReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "init_stored": {
            return action.value as IState;
        }
        case "task_done": {
            const actionValue = action.value as ITaskDoneActionValue;

            const stage = state.stages.find(( { name }) => name === actionValue.stage) as IStage;
            const steps = stage.steps.map(step => step.value === actionValue.step ? {
               ...step,
                isDone: actionValue.isDone
            } : step) as IStep[];
            const isStageDone = steps.every(s => s.isDone);

            const currentStage = { ...stage, isDone: isStageDone, steps };

            return {
                stages: state.stages.map(stage => stage.name === actionValue.stage ? currentStage : stage),
            };
        }
        default:
            return state;
    }
};