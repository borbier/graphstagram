import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'
import Exterior from './page/Exterior'
import Interior from './page/Interior'
import Summary from './page/Summary'
import ContentX from './page/Content'
import Intro from './page/Intro'
import HeaderX from './components/Header'
const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Content>
            <Route exact path="/" component={Intro} />
            <Route path="/exterior" component={Exterior} />
            <Route path="/interior" component={Interior} />
            <Route path="/content" component={ContentX} />
            <Route path="/summary" component={Summary} />
          </Content>
        </Layout>
      </div>
    </Router>
  )
}

export default App
