import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/DogList';
import BookDetails from './components/DogDetails';
import EnquiryList from './components/EnquiryList';
import EnquiryForm from './components/EnquiryForm';
import Profile from './components/Profile';
import PrivateRoute from './components/protected/PrivateRoute';
import StaffRoute from './components/protected/StaffRoute';

const { Header, Content, Footer } = Layout;


export default function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/DogList">DogList</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/ApplicationForm">ApplicationForm</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/DogList" element={<DogList />} />
          <Route path="/Login" element = {<Login /> } />
          <Route path="/Register" element = {<Register /> } />
          <Route path="/ApplicationForm" element = {<ApplicationForm /> } />
        </Routes>
      </Content>
      <Footer>
        <p>Dog Shelter</p>
      </Footer>
    </Router>
  )
}

