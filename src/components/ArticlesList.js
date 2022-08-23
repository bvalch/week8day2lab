import React from 'react';
import Article from './Article';


const ArticlesList = ({data}) => {


    const articleNodes=data.map((item,index)=>{
        return <li><Article title={item.title} key={index} url={item.url}/></li>
    
    
    })

    return (
        <>
        {articleNodes}
        </>
    )

};
export default ArticlesList;