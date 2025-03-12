import clsx from 'clsx';
import cn from './style.module.scss';

function PicsSec() {

    let pics = [
        {
            id: 1,
            src: "/src/assets/turkiston.png",
            alt: "placeholder"
        },
        {
            id: 2,
            src: "/src/assets/bigImg.png",
            alt: "placeholder"
        },
        {
            id: 3,
            src: "/src/assets/tarix.png",
            alt: "placeholder"
        },
        {
            id: 4,
            src: "/src/assets/vazir.png",
            alt: "placeholder"
        },
        {
            id: 5,
            src: "/src/assets/avtonom.png",
            alt: "placeholder"
        },
    ]
    return (
        <div className={clsx(cn['PicsSec'])}>
            {pics.map(pic => (
                <img key={pic.id} src={pic.src} alt={pic.alt} />
            ))}
        </div>
    )

}

export default PicsSec; 