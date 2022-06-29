import React, {useMemo} from 'react'
import cl from './Pagination.module.scss'

const Pagination = ({ totalPages, page, changePage, ...props}) => {
    
    const getPagesArray = (totalPages) => {
        const result = []
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result
    }

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
