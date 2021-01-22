import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'

import Footer from '../components/Footer'

const SubTitle = styled.h2`
  background-color: var(--primary);
  color: white;
  display: inline-block;
  padding: 5px;
`

export default function Home(props) {
  return (
    <div>
      <header className="headerContainer">        
        <img src={props.avatar_url}/>        
        
        <Link href="/sobre">
          <a><h1>DevGordinho</h1></a>
        </Link>
      </header>

      <section className="postsContainer">
        <SubTitle>Posts</SubTitle>
        <article className="postsContainer__post">
          <a href="/">
            Aprendendo React e Next.js.
          </a>
          <p>
            Criando um blog simples em 20 minutos com React e Next.js.
          </p>
        </article>
      </section>

      <section className="postsContainer">
        <SubTitle>Repositórios favoritos do GitHub</SubTitle>
        {
          props.repos.map((project) => {
            return (
              <article key={project.repo} className="postsContainer__post">
                <a href="/">
                  {project.repo}
                </a>
                <p>
                  {project.description}
                </p>
              </article>
            )})
        }
      </section>
      
      <Footer />
    </div>    
  )
}

export async function getStaticProps(){

  const githubResonse = await fetch('https://api.github.com/users/HudsonCarlos')
    .then(res => res.json())

  const repos = await fetch('https://gh-pinned-repos.now.sh/?username=HudsonCarlos')
    .then(res => res.json())

  return {
    props:{
      avatar_url: githubResonse.avatar_url,
      repos,
    }
  }
}