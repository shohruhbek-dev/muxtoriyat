import clsx from "clsx";
import cn  from "./style.module.scss"

function ManPicCard (props){
    const { img, text} = props;
    return (
        <div className={clsx(cn["manPicCard"])}>

            <div className={clsx(cn["picSec"])}>
                <img src={img} className="imgs" />
            </div>

            <p>
                {text}
            </p>

        </div>
    )


}

export default ManPicCard