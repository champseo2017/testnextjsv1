import Fetch from 'isomorphic-unfetch';
import React, {useState, useEffect} from 'react'
import Layout from "../components/Layout";
import Prices from '../components/Prices'
import UserForm from '../components/UserForm'


const Index = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
    return (
      <Layout>
        <div>
          <h1>Welcome to BitzPrice</h1>
          <p>Check current Bitcoin rate</p>
            <Prices bpi={props.bpi}/>
            <p></p>
            <UserForm/>
        </div>
      </Layout>
    )  
};

// fetch data async  
Index.getInitialProps = async function (){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    
    return {
      // props 
      bpi: data.bpi
    }
} 

export default Index;