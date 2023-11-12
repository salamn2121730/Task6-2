import { useState } from "react"
import './Slider.css'
import '../../App.js'
import {data} from '../../Data.js'

const Slider = ({ data }) => {

    const [dataIndex, setDataIndex] = useState(0)
    const slideStyle = {

        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${data[dataIndex].url})`
    }
    const goToPrev = () => {
        const isFirstSlide = dataIndex == 0 ;
        const newDataIndex = isFirstSlide ? data.length - 1 : dataIndex - 1 ;
        setDataIndex(newDataIndex);
    }
    const goToNext = () => {
        const isLastSlide = dataIndex == data.length - 1;
        const newDataIndex = isLastSlide ? 0 : dataIndex + 1;
        setDataIndex(newDataIndex);

    }
    const goToSlide =(index) => {
        setDataIndex(index)
    }
    return (
        <div className="slider">
            <div>
                <button className="leftButton" onClick={goToPrev}>
                    {"<"}
                </button>
            </div>
            <div >
                <button className="rightButton" onClick={goToNext}>
                    {">"}
                </button>
            </div>
            <div  style={slideStyle}><p className="num">{data[dataIndex].num}</p> </div>
            <div className="dotsContainer">
                {
                    data.map((slide, slideIndex) => (
                        <div key={slideIndex} className="dot" >
                            <div  style={{ color: slideIndex === dataIndex ? "gray" : "black" }}
                            onClick={() =>goToSlide(slideIndex)}>
                                {"."}
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Slider