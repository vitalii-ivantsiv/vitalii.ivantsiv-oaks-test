import {useEffect, useState} from "react";
import './index.css';

export default function RandomFact() {
    const [fact, setFact] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadFact = async () => {
            try {
                setIsLoading(true);

                const data = await fetch('https://uselessfacts.jsph.pl/random.json');

                const fact = await data.json();

                setFact(fact.text);
            } catch (maybeError) {
                let message = String(maybeError);

                if (maybeError instanceof Error) {
                    message = maybeError.message
                }

                console.error(message);
            } finally {
                setIsLoading(false);
            }
        }

        loadFact();

        return () => {
            setFact(undefined);
        }
    }, [])


    if(isLoading) {
        return <div>Loading Fact</div>;
    }

    return (<div className="random-fact"><span className="bold-text">Random Fact:</span>{fact}</div>)
}