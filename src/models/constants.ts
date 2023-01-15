import {IStep} from "./IStep";
import {IStage} from "./IStage";

export const STAGES = [
    {
        name: "Foundation",
        steps: [
            {
                name: 'Setup',
                value: 'foundation-setup',
                isDone: false
            },
            {
                name: 'Set mission',
                value: 'foundation-mission',
                isDone: false
            },
            {
                name: 'Select business name',
                value: 'foundation-business-name',
                isDone: false
            }
        ] as IStep[]
    },
    {
        name: "Discovery",
        steps: [
            {
                name: 'Create roadmap',
                value: 'discovery-roadmap',
                isDone: false
            },
            {
                name: 'Competitor',
                value: 'discovery-comp',
                isDone: false
            },
        ] as IStep[]
    },
    {
        name: "Delivery",
        steps: [
            {
                name: 'Release website',
                value: 'delivery-website',
                isDone: false
            },
            {
                name: 'Release MVP',
                value: 'delivery-mvp',
                isDone: false
            },
        ] as IStep[]
    }
] as IStage[]