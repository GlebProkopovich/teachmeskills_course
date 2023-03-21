import Nav from './components/Navigation/Navigation';
import Tabs from './components/Tabs/Tabs';
import PostList from './components/PostList/PostList';
import SignIn from './components/SignIn/SignIn';
import Footer from './components/Footer/Footer';
import Success from './components/Success/Success';
import SelectedPosts from './components/SelectedPosts/SelectedPosts';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <div className="main">
        <Tabs />
        <PostList />
        <SignIn />
        <Success />
        <SelectedPosts />
        <Footer />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
