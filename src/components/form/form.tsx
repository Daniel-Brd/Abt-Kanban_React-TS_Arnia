import { Formulary } from "./styled-form"

type Content = {
    content: JSX.Element
}

const Form = ({ content }: Content) => {
    return (
        <Formulary>
            {content}
        </Formulary>
    )
}

export default Form