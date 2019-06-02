import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'
import Exterior from './page/Exterior'
import Interior from './page/Interior'
import Summary from './page/Summary'
import Polls from './page/Polls'
import Dashboard from './page/Dashboard'
import Project from './page/Project'
import Customer from './page/Customer'
import Quotation from './page/Quotation'
import TimeShift from './page/TimeShift'
import ContentX from './page/Content'
import Tracking from './page/Tracking'
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
            <Route path="/polls" component={Polls} />
            <Route path="/content" component={ContentX} />
            <Route path="/summary" component={Summary} />
            <Route path="/tracking" component={Tracking} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projects" component={Project} />
            <Route path="/quotation" component={Quotation} />
            <Route path="/timeshift" component={TimeShift} />
            <Route path="/customer" component={Customer} />
          </Content>
        </Layout>
      </div>
    </Router>
  )
}

export default App
