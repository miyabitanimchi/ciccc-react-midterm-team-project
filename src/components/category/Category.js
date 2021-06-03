import React, { useState, useEffect } from 'react';
import { useProductsContext } from '../../context/products-context';
import ItemList from '../itemList/ItemList';
// import '../'

const Category = (props) => {


    const { products } = useProductsContext();


    const [categoryResult, setcategoryResult] = useState([])
    const [categoryKey, setcategoryKey] = useState("")
    const [categoryTitle, setcategoryTitle] = useState("")

    const categoryKeyWords = props.match.params.type

    const catagoryFilter = () => {

        setcategoryKey(categoryKeyWords)

        const category = products.filter((name) => {

          return   name.category === categoryKey

            //    return  product.category.toLowerCase().indexOf(categoryKey) > -1
        })

        // setcategoryTitle(product.category)
        setcategoryResult(category)
        
    }

    useEffect(() => {
        catagoryFilter()
    }, [categoryKey, categoryKeyWords])

    console.log(categoryResult)


    return (
        <div className={categoryKey}>
            <ItemList item={categoryResult} title={`All result for "${categoryKeyWords}"`} listClass={"itemList"} wrapClass={"itemWrap"} />
        </div>

    )
}

export default Category