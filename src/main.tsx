import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home/indexs';
import './styles/global.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { About } from './components/About/indexs';
import { Menu } from './components/Menu/indexs';
import { Posts } from './components/Posts/indexs';
import { Redirect } from './components/Redirect/indexs';
import { NotFound } from './components/NotFound/indexs';
import { Post } from './components/Post/indexs';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts" element={<Posts />}>
          <Route path=':id' element={<Post />} />
        </Route>
        {/*<Route path="/posts/:id" element={<Posts />}/>*/}
        <Route path="/redirect" element={<Redirect />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
