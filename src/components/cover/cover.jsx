import React from 'react';
import styles from './cover.module.scss';

export const Cover = ({title, subtitle}) => (<div className={styles.cover}>
    <div className="container">
        <div className="row">
            <div className="col">
                <small>Reading time: 5 minutes</small>
                <h1>{title}</h1>
            </div>
            <div className="col mt-4">
                {subtitle}
            </div>
        </div>
    </div>
</div>);