import React from 'react';
import CarouselItemSlide from './CarouselItemSlide';
import './Carousel.scss';

const Carousel = (props) => {


    return (
        <>
            <div className="carousel">
                <h2>{props.title}</h2>
                {props.item.length !== 0 && (
                        <CarouselItemSlide item={props.item}/>
                )}
            </div>
            
        </>
    )
}

export default Carousel

// const [randomItem, setRandomItem] = useState([])

    // //    ================ Shuffle function 
    // function shuffle(arr) {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         let temp = arr[i]
    //         arr[i] = arr[j]
    //         arr[j] = temp
    //     }
    //     return;
    // }

    // useEffect(() => {
    //     //    ================ Shuffle item 
    //     let randomItemArr = []
    //     if (item.length !== 0) {
    //         shuffle(item)
    //         for (let i = 0; i < 9; i++) {
    //             randomItemArr.push(item[i])
    //         }
    //     }

    //     //    ================ update item by useState
    //     setRandomItem(randomItemArr)
    //     // console.log(randomItem)
    // }, [item])

    // // useEffect(() => {
    // //     console.log(randomItem)
    // // }, [randomItem])

    // console.log(randomItem)