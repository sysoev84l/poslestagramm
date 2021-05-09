import React, {useState} from 'react'
import styles from "./Paginator.module.scss"
import cn from "classnames"
import {Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({totalItemsCount,
                                               pageSize,
                                               currentPage,
                                               onPageChanged,
                                               portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        {
        <div className={styles.btnWrap}>
            <Button variant='success'
                    size='lg'
                    className={styles.btn}
                    disabled={portionNumber <= 1}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                        onPageChanged(((portionNumber-1)*portionSize-portionSize)+1);
                    }}>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </Button>
        </div>

        }
        <div className={styles.pagesWrap}>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={cn({
                        [styles.selectedPage]: currentPage === p
                    }, styles.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
        </div>
        {//portionCount > portionNumber &&
        <div className={styles.btnWrap}>
            <Button variant='success'
                    size='lg'
                    disabled={portionCount <= portionNumber}
                    className={styles.btn}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                        onPageChanged(portionNumber*portionSize+1);
                    }}>
                <FontAwesomeIcon icon={faArrowRight}/>
            </Button>
        </div>
        }


    </div>
}