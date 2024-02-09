import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Content.css'

function Content() {
  const [quote,setQuote] = useState('');

    const randomQuotes = async () =>{
        try{
            const responce = await axios.get('https://dummyjson.com/quotes/random')
            setQuote(responce.data)
        }
        catch(error){
            console.error('Error fetching quote:', error)
        }
    };
    console.log(quote);

    useEffect(()=>{
        randomQuotes();
    },[]);
  return (
    <div className='main'>
        <div className="content" style={{textAlign:'center', marginTop:'200px',marginBottom:'200px',border: '2px solid' ,borderRadius:"15px",boxShadow:'rgba(0, 0, 0, 0.50) 0px 5px 15px',width:'60%',marginLeft: '20%',padding: '40px'}}>
          <p className='fs-3'><i class="fa-solid fa-quote-left"></i> {quote.quote} <i class="fa-solid fa-quote-right"></i></p>
          <div className="author" style={{textAlign:'end', marginRight:'10%'}}>
            <h5 className='fs-4 me-20px'>-{quote.author}</h5>
          </div>
          <button onClick={randomQuotes} className='btn btn-success'>Get Another Quote</button>
        </div>
    </div>
  )
}

export default Content