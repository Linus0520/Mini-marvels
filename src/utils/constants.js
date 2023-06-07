import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Unleash the inner child in adults by offering a captivating collection of mini toys. We believe in the power of play, imagination, and the transformative magic of tiny wonders, creating moments of delight and endless possibilities for our customers.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'To be the ultimate destination for people seeking fun, mini toys. Continuously innovate, curate an expansive collection, and foster a vibrant community of mini toy enthusiasts.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Established in 2020, we embarked on a journey to create a haven where playfulness thrives. With each passing year, Mini Marvels has grown, becoming a beloved destination for mini toy enthusiasts worldwide.',
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`
