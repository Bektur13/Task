import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Wish from './components/Wish';
import BookList from './components/Book/BookList';
import './App.css';

function App() {

  const [books, setBooks] = useState([
    {
      id: 1,
      name: 'Cover Story',
      writer: 'Susan Rigetti',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063072053_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 2,
      name: 'Remarkably Bright Creatures',
      writer: 'Shelby Van Pelt',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780063204157_p0_v8%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 3,
      name: 'The Candy House',
      writer: 'Jennifer Egan',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781476716763_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 4,
      name: 'The Homewreckers',
      writer: 'Mary Kay Andrews',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250278364_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 5,
      name: 'It All Comes Down to This',
      writer: 'Therese Anne Fowler',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250278074_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 6,
      name: 'You Made a Fool of Death with Your Beauty',
      writer: 'Akwaeke Emezi',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982188702_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 7,
      name: 'Notes on Your Sudden Disappearance',
      writer: 'Alison Espach',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781250823144_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    },
    {
      id: 8,
      name: 'The Shore',
      writer: 'Katie Runde',
      url: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982180171_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D'
    }
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<BookList books={books} />}/>
          </Routes>
          <Routes>
            <Route path='wish' element={<Wish />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;