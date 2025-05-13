import { questions } from "../constants/questions"

export const Test = ({step, setStep}) => {
    
    return(
        <>
            <div className="">
                <h2 className="">{questions.title}</h2>
                <ul>
                    {questions.list.map((text, i) => {
                        
                    })}
                </ul>
            </div>
        </>
    )
}