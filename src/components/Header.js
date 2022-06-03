import logo from '../logo.svg';

function Header(){
    return (
        <header>
          <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo192.png'}/>
          </div>  
          <h1>HEADER</h1>
        </header>
    );
}

export default Header;