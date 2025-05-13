import { use } from "react"
import { Test } from "./Test";
import { Header } from "./Header";

export const Main = (params) => {
    const [step, setStep] = useState();

    return(
        <>
            <Header/>
            <Test step={step} setStep={setStep}/>
            <Footer/>
        </>
    )
}