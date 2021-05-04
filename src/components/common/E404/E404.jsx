import React from 'react';
import s from './E404.module.scss';

const E404 = (props) => {
    return (
        <div className={s.wrapper}>
            <h1 className="h1 m-4 p-4 text-center">404 ERROR</h1>
            <hr className="" />
                <h2 className="h2 m-2 p-2 text-center">Aliquid abiit iniuriam!!</h2>
                <h2 className="h2 m-2 p-2 text-center">That was, something went wrong!!</h2>
                <h2 className="h2  m-2 p-2 text-center">Что то пошло не так!!</h2>
                <h2 className="h2 m-2 p-2 text-center">Etwas ist schief gelaufen!!</h2>
                <h2 className="h2 m-2 p-2 text-center">Qualcosa è andato storto!!</h2>
                <h2 className="h2 m-2 p-2 text-center">¡Algo salió mal!!</h2>
                <hr className="" />
        </div>
)
}

export default E404