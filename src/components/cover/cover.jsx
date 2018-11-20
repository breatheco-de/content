import React from 'react';
import styles from './cover.module.scss';

export const Cover = ({title, subtitle, time, background, textColor}) => (<div 
    style={{
        backgroundImage: `url(${background})`,
        color: textColor
    }}
    className={styles.cover}>
    <div className="container">
        <div className="row">
            <div className="col">
                <small>{time}</small>
                <h1>{title}</h1>
            </div>
            <div className="col mt-4">
                {subtitle}
            </div>
        </div>
    </div>
</div>);