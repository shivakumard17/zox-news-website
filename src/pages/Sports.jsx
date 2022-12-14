import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from '../Components/Cards/NesCard';
import { Card,Box } from './styles';
import Error from './Error';

function Sports() {
  const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f0d1eff0cd78421eb8f6223510e8ee56`)
            setArticles(response.data.articles);
            console.log(response);
        }

        getArticles()
    }, [])
    return (
        <Box>
          {articles?<Card>

{articles.map(article => {
    return(
        <NewsCard 
        title={article.title}
       
        url={article.url}
        urlToImage={article.urlToImage} 
        name={article.source.name}
        publishedAt={article.publishedAt}
        />
    )
})}
</Card>:<Error/>}</Box>
    )
}

export default Sports