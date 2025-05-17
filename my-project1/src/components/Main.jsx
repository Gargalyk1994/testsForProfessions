import { Test } from "./Test";
import { Header } from "./Header";
import { questions } from "../constants/questions";
import { ResultTest } from "./ResultTest";

export const Main = () => {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];
    const onClickVariant = (index) => {
        console.log(index, step)
        setStep(step + 1)

        if(index === question.correct){
            setCorrect(correct + 1)
        }
    }

    return(
        <>
            <Header/>
            {step !== questions.length ? 
                <Test onClickVariant={onClickVariant}/> 
                : <ResultTest correct={correct}/>
            }
            <Footer/>
        </>
    )
}