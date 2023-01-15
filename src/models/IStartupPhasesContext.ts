import {IAction} from "./IAction";
import {IState} from "../reducer/StartupPhasesReducer";

export interface IStartupPhasesContext {
    state: IState;
    dispatch: (action: IAction) => void;
}