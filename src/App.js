import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import './Main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/main/Menu';


function App() {

  const class01 = 'title';

  const headingStyle = {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic'
  };

  function msg(){
    alert('Xin chào Unicode');
  }

  const name = 'Tạ Hoàng An';

  const product = {
    id: 1,
    name: 'Sản phẩm 1',
    price: 12000,
    status: 1
  }

  function productInfo(product){

    let element;
    if (product.status==1){
      element = <div className='product-info'>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.status==1?'Active':'Inactive'}</p>
  </div>;
    }else{
      element = <p>Không có sản phẩm</p>
    }

     return (
        element
     );
  }

  const users = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      status: 1
    },

    {
      id: 2,
      name: 'Nguyễn Văn B',
      email: 'nguyenvanb@gmail.com',
      status: 1
    },

    {
      id: 3,
      name: 'Nguyễn Văn C',
      email: 'nguyenvanc@gmail.com',
      status: 1
    },

    {
      id: 4,
      name: 'Nguyễn Văn D',
      email: 'nguyenvand@gmail.com',
      status: 1
    }
  ];

  const userLists = users.map((item, index)=>{
      return (
          <div className='user-item' key={index}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Status: {item.status==1?'Active':'Inactive'}</p>
          </div>
      );
  });


  return (
    <>
      {/* <h1 className={class01} style={headingStyle} onClick={msg}>
        Unicode Academy
      </h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" defaultValue="Hoàng An" placeholder="Username..." />
      <p>
        Xin chào tôi là: {name}
      </p> */}
      {/* {productInfo(product)} */}
      {/* <div className='user-lists'>
        {userLists}
      </div> */}
      <Header></Header>
      <main>
          <Menu></Menu>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
