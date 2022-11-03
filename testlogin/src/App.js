import './App.css';
import profile from "./image/1.png";
import email from "./image/2.png";
import pass from "./image/3.png";

function App() {
  return (
    <div className='main'>
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt="profile" className='profile' />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className='email' />
              <input type="text" placeholder="user name" className='name'/>
            </div>

            <div className='second-input'>
              <img src={pass} alt="pass" className='email' />
              <input type="text" placeholder="password" className='name'/>
            </div>
            <button>Login</button>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
