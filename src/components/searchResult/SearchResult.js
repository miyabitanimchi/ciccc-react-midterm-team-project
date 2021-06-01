import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import './SearchResult.scss';
import { useProductsContext } from '../../context/products-context';

const SearchResult = (props) => {

    const { products } = useProductsContext();


    const [result, setResult] = useState([])
    const [searchKey, setSearchKey] = useState("")

    const searchKeyWords = props.match.params.keywords

    const search = () => {
        setSearchKey(searchKeyWords)
        const searchResult = products.filter((product) => 
            product.title.toLowerCase().indexOf(searchKey) > -1 )

        console.log(searchResult)
        setResult(searchResult)
    }



    useEffect(() => {
        
        search()
    }, [products])



    return (
        <>
            <ItemList item={result} listClass={"itemResultList"} wrapClass={"itemResultWrap"}
            title={result.length === 0 ? `No result for "${searchKey}"`
            : result.length === 1 ? `${result.length} Result for "${searchKey}"` 
            : `${result.length} Results for "${searchKey}"`}/>
        </>
    )
}

export default SearchResult