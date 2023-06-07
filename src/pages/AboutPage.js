import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg-3.jpg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about imge' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          At Mini Marvels, we believe that playfulness knows no age limits. Whether you're a toy enthusiast, a hobbyist, or simply looking for unique gifts, our curated selection of mini wonders will spark your imagination and bring a smile to your face. From tiny action figures and intricate puzzle sets to adorable keychain companions and whimsical novelty items, our collection is designed to capture the essence of playfulness in a pocket-sized package.
<br/><br/>
Navigating our user-friendly website is a breeze, allowing you to browse through our extensive range of mini marvels, read detailed descriptions, and make secure purchases with ease. We also offer convenient shipping options to ensure that your mini delights arrive promptly at your doorstep.
<br/><br/>
Join us on this enchanting journey and rediscover the joy of play. Embrace your inner child and unlock the magic of miniatures with Mini Marvels. Let the fun begin!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
