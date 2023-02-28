import React from 'react';

import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {
    return (
        <div
            className={`${classes.myModal} ${visible ? classes.active : ''}`}
            onClick={() => setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(event) => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;