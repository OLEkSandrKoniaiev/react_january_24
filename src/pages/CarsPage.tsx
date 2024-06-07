import React from 'react';
import styles from "../styles/General.module.css"
import PaginationComponent from "../components/Pagination/PaginationComponent";
import classNames from "classnames";


const CarsPage = () => {
    return (
        <div className={classNames(styles.justifyContent, styles.columnAlignCenter)}>
            <PaginationComponent/>
        </div>
    );
};

export default CarsPage;
