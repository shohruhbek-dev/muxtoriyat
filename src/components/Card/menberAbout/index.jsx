import React from 'react';
import clsx from 'clsx';
import cn from './style.module.scss';

const MemberAbout = ( props ) => {
    const { img, p, h1} = props;

    return (
        <div  className={clsx(cn["MemberAbout"])}>
            <img src={img} alt="Member" />
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    );
};



export default MemberAbout;