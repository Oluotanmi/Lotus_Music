import React from 'react'
import home from './Home.module.css'
import Data from './Data'
import HomeSetup from './HomeSetup'
import Container from '../../comment/comment-Container/Container'
import Comment from '../../comment/Comment'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function Home(props){ 

 const Elements = Data.map(each => {
  return <HomeSetup
          key={each.id}
          img={each.img}
          name={each.name}
          source={each.player.source}
          
          />
      })

      return (
      <div className={home.contain} >
          <h1 className={home.allsong}> ALL SONGS</h1>
          <section className={home.section}>
               {Elements}
          </section>
          <Link to='/'>
            <button className={home.button}>Back</button>
          </Link>
          <Comment />
          <Container />
      
</div>

  )
}
