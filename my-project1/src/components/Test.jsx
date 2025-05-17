import { questions } from "../constants/questions"
import { ProgressBar } from "./ProgressBar";

export const Test = ({onClickVariant}) => {
    
    const percentProgressBar = Math.round((step / questions.length) * 100)

    return(
        <>
            <div className="">
                <ProgressBar />
                <h2 className="test-title">{questions.title}</h2>
                <ul>
                    {questions.list.map((text, i) => {
                        <li key={text} onClick={() => onClickVariant(i)}>
                            {text}
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}