import React, { useState, useEffect } from 'react';
import { useProductsContext } from '../../context/products-context';
import ItemList from '../itemList/ItemList';


const Category = (props) => {


    const { products } = useProductsContext();

    const [categoryResult, setcategoryResult] = useState([])
    const [categoryKey, setcategoryKey] = useState("")

    const categoryKeyWords = props.match.params.type



    useEffect(() => {

        const catagoryFilter = () => {

            setcategoryKey(categoryKeyWords)
            const category = products.filter((name) => name.category === categoryKey)
            setcategoryResult(category)
        }
        
        catagoryFilter()
    }, [categoryKey, categoryKeyWords, products])

    return (
        <>
            {categoryResult &&
                // === null ? catagoryFilter() :
                <div className={categoryKey}>
                    <ItemList item={categoryResult} title={`All result for "${categoryKeyWords}"`} listClass={"itemList"} wrapClass={"itemWrap"} description={true} />
                </div>}
        </>
    )
}

export default Category