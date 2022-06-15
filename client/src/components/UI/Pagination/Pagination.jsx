import React, {useMemo} from 'react'
import cl from './Pagination.module.scss'
import { getPagesArray } from './../../../utils/pages'

const Pagination = ({ totalPages, page, changePage, ...props}) => {
    const pagesArray = useMemo(() => {
		const result = getPagesArray(totalPages)
		return result
	}, [totalPages])

    return (
        <div className={cl.pagination}>
            {
                pagesArray.map((item) => (
                    <div 
                    className={(item === page) ? [cl.item, cl.itemCurrent].join(' ') : cl.item } 
                    onClick={() => changePage(item)}
                    key={item}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination
