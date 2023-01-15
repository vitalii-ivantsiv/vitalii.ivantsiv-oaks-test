import {useContext} from "react";
import {IStartupPhasesContext} from "../models/IStartupPhasesContext";
import {StartupPhasesContext} from "../components/StartupPhasesWrapper";

export function useStartupPhasesContext(): IStartupPhasesContext {
    return useContext(StartupPhasesContext);
}