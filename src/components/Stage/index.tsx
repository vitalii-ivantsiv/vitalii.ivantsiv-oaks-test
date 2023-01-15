import React from 'react';
import CheckBox from "../Checkbox";
import Checkmark from "../Checkmark";
import {IStep} from "../../models/IStep";
import {ITaskDoneActionValue} from "../../models/ITaskDoneAction";
import {useDispatch} from "../../hooks/useDispatch";

import './index.css';

type StageProps = {
    stageNumber: number;
    stageName: string;
    steps: Array<IStep>;
}

export default function Stage({stageName, stageNumber, steps}: StageProps) {
    const dispatch = useDispatch();
    const isStageCompleted = steps.every(({isDone}) => isDone);

    const onStepChange = ({target: {value, checked}}: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "task_done",
            value: {
                stage: stageName,
                step: value,
                isDone: checked
            } as ITaskDoneActionValue,
        })
    }


    return (
        <div className="stage">
            <h3>
                <span>
                    <span className="stage-number">{stageNumber}</span>
                    {stageName}
                </span>
                {
                    isStageCompleted && <Checkmark/>
                }
            </h3>
            <div className="steps">
                {
                    steps.map(({name, isDone, value}) => (
                        <CheckBox key={name} label={name} value={value} isChecked={isDone} onChange={onStepChange}/>))
                }
            </div>
        </div>
    )

}