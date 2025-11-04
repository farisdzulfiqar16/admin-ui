// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import './index.css'
import Exercise from './Exercise.jsx'
import PostCard from './PostCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostCard/>
  </StrictMode>,
)
