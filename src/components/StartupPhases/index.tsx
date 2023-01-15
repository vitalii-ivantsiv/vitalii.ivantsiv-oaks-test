import Stage from "../Stage";
import {IStage} from "../../models/IStage";
import RandomFact from "../RandomFact";

import './index.css';

type StartupPhasesProps = {
    label: string;
    stages: IStage[]
}


export default function StartupPhases({ label, stages }: StartupPhasesProps) {
    const firstNotDoneIndex = stages.findIndex(s => !s.isDone);
    const isCompletedAll = firstNotDoneIndex === -1;
    const showUntil = isCompletedAll ? stages.length : firstNotDoneIndex + 1;


    return (
        <div className="startup-phases">
            <div className='phase'>
                <h3 className="label">{label}</h3>
                {
                    stages.slice(0, showUntil).map(({ name, steps }, index) => <Stage key={name + index} stageNumber={index + 1} stageName={name} steps={steps} />)
                }
                <>
                    { isCompletedAll && <RandomFact /> }
                </>
            </div>
        </div>
    )
}