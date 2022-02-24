import { IDescription } from "../Shared/Models/DescriptionInterface";

const Description = (props: IDescription) => {
    const { titulo, body } = props
    return (
    <div>
       <div className="text--size-28 mg--32">{titulo}</div>
       <div className="text--size-16 mg--left-32 p--button-32">{body}</div>
    </div>
    )
}

export default Description;