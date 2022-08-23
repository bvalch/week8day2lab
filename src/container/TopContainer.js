import React, { useState, useEffect } from 'react'
import FilterSelector from '../components/FilterSelector';

const TopContainer = () => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        awaitNewsData();

    }, [])
    const onRangeSelected = (range_argument) => {
        awaitNewsData(range_argument);


    }
    const onSearchSelected = (search) => {
       const results =news.filter((item)=>(item.title.toLowerCase()).includes(search.toLowerCase()))
       setNews(results)
    }


    const awaitNewsData = async (range = 20) => {
        const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
        const data = await (response.json())
        const dataPromises = data.slice(0, range).map((item) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(result => result.json())
        }
        )
        Promise.all(dataPromises).then(data => setNews(data))
    }
    





    return (
        <>
            <FilterSelector onRangeSelected={onRangeSelected} data={news} onSearchSelected={onSearchSelected} />
        </>

    )

}

export default TopContainer;
