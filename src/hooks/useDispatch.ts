import {useStartupPhasesContext} from "./useStartupPhasesContext";
import {IAction} from "../models/IAction";

export function useDispatch(): (action: IAction) => void {
    const { dispatch } = useStartupPhasesContext();

    return dispatch;
}