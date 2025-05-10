import clsx from 'clsx';
import cn from './style.module.scss';
import pic1 from '/src/assets/turkiston.png';
import pic2 from '/src/assets/bigImg.png';
import pic3 from '/src/assets/tarix.png';
import pic4 from '/src/assets/vazir.png';
import pic5 from '/src/assets/avtonom.png';

function PicsSec() {
  const pics = [
    {
      id: 1,
      src: pic1, // Use imported image
      alt: 'Turkiston',
    },
    {
      id: 2,
      src: pic2,
      alt: 'Big Image',
    },
    {
      id: 3,
      src: pic3,
      alt: 'Tarix',
    },
    {
      id: 4,
      src: pic4,
      alt: 'Vazir',
    },
    {
      id: 5,
      src: pic5,
      alt: 'Avtonom',
    },
  ];

  return (
    <div className={clsx(cn.PicsSec)}>
      {pics.map((pic) => (
        <img key={pic.id} src={pic.src} alt={pic.alt} />
      ))}
    </div>
  );
}

export default PicsSec;