import { Switch } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails } from "./components"

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>

        </Layout>
      </div>
      <div className='foother'>

      </div>
    </div>
  );
}

export default App;
