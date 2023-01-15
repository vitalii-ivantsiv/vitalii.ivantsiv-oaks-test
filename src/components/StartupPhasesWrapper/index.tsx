import React, {createContext, useEffect, useMemo, useReducer} from "react";
import {initialState, IState, startupPhasesReducer} from "../../reducer/StartupPhasesReducer";
import {IStartupPhasesContext} from "../../models/IStartupPhasesContext";

export const StartupPhasesContext = createContext({} as IStartupPhasesContext);

export function StartupPhasesWrapper({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(startupPhasesReducer, initialState);

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("state") as string)) {
            dispatch({
                type: "init_stored",
                value: JSON.parse(localStorage.getItem("state") as string) as IState,
            });
        }

        return () => localStorage.removeItem("state");
    }, []);

    useEffect(() => {
        if (state !== initialState) {
            localStorage.setItem("state", JSON.stringify(state));
        }
    }, [state]);

    return (
        <StartupPhasesContext.Provider value={contextValue}>
            {children}
        </StartupPhasesContext.Provider>
    )
}

