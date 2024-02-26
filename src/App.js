import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login-components/login';
import SearchPw from './login-components/search.pw';
import SearchNewPw from './login-components/search.new.pw';
import SearchId from './login-components/search.id';
import SearchMain from './login-components/search.main';
import Signup1 from './login-components/signup1';
import Signup2 from './login-components/signup2';
import Signup3 from './login-components/signup3';
import Signup4 from './login-components/signup4';
import Signup5 from './login-components/signup5';
import SearchPwEnd from './login-components/search.pw.end';

const Router = () => {
	return (
		<BrowserRouter>                                  
      <Routes>
                                                 
        <Route path='/' element={<Login />} /> 
        <Route path='/signup' element={<Signup1/>} />
        <Route path='/searchmain' element={<SearchMain/>} />
        <Route path='/searchid' element={<SearchId/>} />
        <Route path='/searchpw' element={<SearchPw/>} />
        <Route path='/searchnewpw' element={<SearchNewPw/>} />
        <Route path='/searchpwend' element={<SearchPwEnd/>} />
        <Route path='/signup2' element={<Signup2/>} />
        <Route path='/signup3' element={<Signup3/>} />
        <Route path='/signup4' element={<Signup4/>} />
        <Route path='/signup5' element={<Signup5/>} />
      </Routes>
    </BrowserRouter>
	);
};

export default Router;