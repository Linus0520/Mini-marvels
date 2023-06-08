import React from 'react'
import styled from 'styled-components'
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 10% off</h3>
        <div className='content'>
          <p>
          Be the first to know! Sign up for our newsletter and enjoy an exclusive 10% discount on your first order. Stay in the loop with the latest arrivals, special offers, and mini marvels that will bring joy to your world!
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 70vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    padding: 0.8rem;
    border: 1px solid var(--clr-grey-7);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }

  .form-input::placeholder {
    color: var(--clr-grey-7);
    text-transform: capitalize;
  }
  .submit-btn {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-grey-8);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }

    .submit-btn {
    font-size: 1rem;
  }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }

  @media (max-width: 576px) {
  #btn-modify{
    width:200px;
    padding: 0.5rem 1rem;
  }

  .form-input,
  .submit-btn {
    padding:0.6rem;
  }
  }
`

export default Contact
