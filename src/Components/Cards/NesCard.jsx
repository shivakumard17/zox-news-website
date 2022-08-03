import React from 'react'
import {Card,Imgage,Author,Text,Heading,NewsCard,Anchor} from './NewsCard.styles'
import NewsImge from './NewsImge.jpg'

function NesCard({ title, name, url, urlToImage,publishedAt }) {

  let newApiDate=publishedAt;
    let timeStamp= new Date(newApiDate).getTime();
    let newDay=new Date(timeStamp).getDate();
    let newMonth=new Date(timeStamp).toLocaleString("default",{month:'short'});
    let newYear=new Date(timeStamp).getFullYear();
    let published=`${newDay}/${newMonth}/${newYear}`;
    
  return (
    
    
    <NewsCard>
    <Card>
     <Imgage src={urlToImage || NewsImge}
     alt=""/>
     <Author>
        <Text>{name}</Text>
        <Text>{published}</Text>
     </Author>
    <Heading>{title.substring(0,50)}...</Heading>
     <Anchor href={url} target="_blank" rel="noopener noreferrer"  >Read more</Anchor>
    </Card>
   
    </NewsCard>
  )
}

export default NesCard