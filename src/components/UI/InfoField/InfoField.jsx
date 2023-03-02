import React from 'react';
import classes from './InfoField.module.css'

const InfoField = ({title, description}) => {
    return (
        <div className={classes.field__wrapper}>
            <div className={classes.field__term}>
                {title}
            </div>
            <div className={classes.field__description}>
                {description}
            </div>

        </div>
    );
};

export default InfoField;