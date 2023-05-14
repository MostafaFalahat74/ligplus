import { useState, useEffect } from 'react';
import Card from './Card';
import Filter from './Filter';
import Product from './Product';
import json from '../data.json'
const Home = () => {

    const [sortType, setSortType] = useState("");
    const [data, setData] = useState(json.products);
    const initType = (type) => {
        setSortType(type)
    }
    // useEffect(() => {
    //     let sotredData;
    //     if (sortType === "asce")
    //         sotredData = data.sort((a, b) => a > b ? 1 : -1);
    //     if (sortType === "desc") {
    //         sotredData = data.sort((a, b) => a < b ? 1 : -1);
    //     }
    //     setData(sotredData)
    // }, [sortType])
    return (
        <div className='container'>
            <header>
                <div className='title'>
                    طرفه نگار
                </div>
            </header>
            <main>
                <div className='main-content'>
                    <Filter initType={initType} />
                    <Product data={data} />
                </div>
                <div className='card'>
                    <Card />
                </div>
            </main>
            <footer>
                {/* طراحی و توسعه من و تو */}
            </footer>
        </div>
    )
}
export default Home;
