import { Formulary } from "./styled-form"
import { Card } from "../item-card/styled-card"
type Content = {
    content: JSX.Element
}

const Form = ({ content }: Content) => {
    return (
        <Card>
            <Formulary>
                {content}
            </Formulary>
        </Card>
    )
}

export default Form