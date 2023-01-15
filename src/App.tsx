import React, {useEffect} from 'react';
import StartupPhases from "./components/StartupPhases";
import {useStartupPhasesContext} from "./hooks/useStartupPhasesContext";
import {STAGES} from "./models/constants";

import './App.css';

function App() {
    const {state: {stages}, dispatch} = useStartupPhasesContext();

    useEffect(() => {
        dispatch({
            type: 'init_stored',
            value: {
                stages: STAGES
            }
        })
    }, [dispatch])


    return (
        <div className="App">
            <StartupPhases label="My startup progress" stages={stages}/>
        </div>
    );
}

export default App;
