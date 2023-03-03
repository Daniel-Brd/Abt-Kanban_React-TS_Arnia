import { Formulary } from "./styled-form"
import { Card } from "../item-card/styled-card"
import { ReactNode } from "react"
type FormProps = {
    children: ReactNode
}

const Form = ({ children }: FormProps) => {
    return (
        <Card>
            <Formulary>
                {children}
            </Formulary>
        </Card>
    )
}

export default Form