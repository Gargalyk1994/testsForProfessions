import { questions } from "../constants/questions"

export const ResultTest = ({correct}) => {
    return(
        <div className="result">
            <h2 className="result__title">{`Вы ответили правильно на ${correct} вопросов из ${questions.length}`}</h2>
            <button className="result__again-test">Попробовать снова</button>
            <button className="result__exit">Выйти</button>
        </div>
    )
}