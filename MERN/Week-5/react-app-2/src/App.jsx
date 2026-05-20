import './App.css';
import Users from './components/Users';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UsersList from './components/UsersList';
import Counter from './components/Counter';

function App(){
    //state
    
    //return react element
    return(
        <div>
            <NavBar />
            <div className='m-16 min-h-screen'>
                <Counter />
                <UsersList />
            </div>
            <Footer />
        </div>
    )
}

export default App;