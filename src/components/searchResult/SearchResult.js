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

        setSearchKey(searchKeyWords.toLowerCase())

        const searchResult = products.filter((product) =>
            product.title.toLowerCase().indexOf(searchKey) > -1)
        console.log(searchResult)



        setResult(searchResult)

    }

    useEffect(() => {
        search()
    }, [searchKey, searchKeyWords, products])
    console.log(result)

    return (
        <>
            <ItemList item={result} listClass={"itemResultList"} wrapClass={"itemResultWrap"}
                title={result.length === 0 ? `No result for "${searchKeyWords}"`
                    : result.length === 1 ? `${result.length} Result for "${searchKeyWords}"`
                        : `${result.length} Results for "${searchKeyWords}"`} />
        </>
    )
}

export default SearchResult


// const searchResultCategory = products.filter((product) =>
        //     product.category.toLowerCase().indexOf(searchKey) > -1)
        // console.log(searchResultCategory)

        // for (let item in searchResultCategory){
        //     searchResult.push(searchResultCategory[item])
        // }