import { ReactElement } from "react"

type HeadingProps = {
    title: string
}
const Heading = ({
    title
}: HeadingProps): ReactElement => {
    return (
        <div>Heading</div>
    )
}

export default Heading