import React from 'react';
import {getPageArray} from "../../../utils/pages";
import classes from "./Pagination.module.css"

const Pagination = ({totalPages, page, changePage}) => {
    const pageArray = getPageArray(totalPages);
    return (
        <div className={classes.page__wrapper}>
            {
                pageArray.map(p =>
                    <span
                        key={p}
                        className={page === p ? `${classes.page} ${classes.page__current}` : classes.page}
                        onClick={() => changePage(p)}
                    >
                        {p}
                    </span>)
            }
        </div>
    );
};

export default Pagination;