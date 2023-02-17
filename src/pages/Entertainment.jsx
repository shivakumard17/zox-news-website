import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsCard from '../Components/Cards/NesCard';
import { Card,Box } from './styles';
import Error from './Error';

function Entertainment() {
  const [articles, setArticles] = useState([])

    useEffect(() => {
        
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=004551c8b9734e6992841149e222c96a`)
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

export default Entertainment
