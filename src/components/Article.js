import React from 'react'

const Article=({ title, url }) => {



    return (
        <>
        <a href={url}>{ title }</a>
        </>

    )


};
export default Article;