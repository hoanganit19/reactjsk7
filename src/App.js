import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import './Main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/main/Menu';
import Member from './components/Member';
import Comment from './components/Comment';

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

  const memberInfo = {
    name: 'Tạ Hoàng An',
    age: 30,
    addressShipping: 'Hà Nội'
  }

  const memberListsArr = [
    {
        name: 'Tạ Hoàng An',
        age: 30,
        addressShipping: 'Hà Nội',
        comment: {
          subject: 'Comment user 01',
          content: 'Content user 01'
        }
    },

    {
      name: 'Văn Quân',
      age: 35,
      addressShipping: 'Đà Nẵng',
      comment: {
        subject: 'Comment user 02',
        content: 'Content user 02'
      }
    },

    {
      name: 'Nguyễn Chí Ngọc',
      age: 20,
      addressShipping: 'Hồ Chí Minh',
      comment: {
        subject: 'Comment user 03',
        content: 'Content user 03'
      }
    },

    {
      name: 'Minh Thức',
      age: 30,
      addressShipping: 'Quảng Nam',
      comment: {
        subject: 'Comment user 04',
        content: 'Content user 04'
      }
    }
  ];

  const memberRender = memberListsArr.map((item, index)=>{
      return (
        <Member key={index} name={item.name} age={item.age} addressShipping={item.addressShipping} comment={<Comment subject={item.comment.subject} content={item.comment.content}/>}/>
        
      );
  }); 

  const member = {
    image: 'https://picsum.photos/100',
    name: 'Hoàng An',
    age: 30
  };

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
          {/* <Member name={memberInfo.name} age={memberInfo.age} addressShipping={memberInfo.addressShipping}/> */}
          {/* <Member name="Văn Quân" age="35" addressShipping="Hồ Chí Minh"/>
          <Member name="Nguyễn Chí Ngọc" age="20" addressShipping=""/> */}
          {/* {memberRender} */}
          <Member image={member.image} name={member.name} age={member.age} />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
