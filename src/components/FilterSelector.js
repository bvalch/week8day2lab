import React, { useState } from 'react';
import ArticlesList from './ArticlesList';

const FilterSelector = ({ onRangeSelected, data ,onSearchSelected}) => {
    const [searchCriteria, setSearchCriteria] = useState("")
    const range_array = [20, 50, 100, 250]
    const articleRangeSelect = range_array.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    const handleChange = (event) => {
        let range_selected = (event.target.value)
        onRangeSelected(range_selected)
    }
    const handleSearchTerm = (event) => {
        let search=event.target.value
        setSearchCriteria(search)
        onSearchSelected(search)
        
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <select defaultValue={'DEFAULT'} onChange={handleChange}>
                <option value={'DEFAULT'}>Select range</option>
                {articleRangeSelect}
            </select>
            <>
                <form type="text" onSubmit={handleSubmit} >
                    <input value={searchCriteria} placeholder="search in articles" onChange={handleSearchTerm}></input>

                </form>
            </>



            <>
                <ul>
                    <ArticlesList data={data} />
                </ul>
            </>
        </>

    )

};

export default FilterSelector;