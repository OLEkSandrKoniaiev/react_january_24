import React from 'react';
import FormComponent from "../components/Form/FormComponent";
import styles from "../styles/General.module.css"

const AuthPage = () => {
    return (
        <div className={styles.justifyCenter}>
            <FormComponent/>
        </div>
    );
};

export default AuthPage;
