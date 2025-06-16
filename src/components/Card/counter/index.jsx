import clsx from 'clsx';
import CountUp from 'react-countup';
import cn from './style.module.scss';
const Counter = (props) => {
    const { start, end, duration, text } = props;

    return (
        <div className={clsx(cn['Counter'])}>
            <CountUp
            className='count font-unbounded text-[18px]'
                end={end}
                start={start}
                duration={duration}
                suffix="+"
            />
            <p >{text}</p>
        </div>
    );
};

export default Counter;