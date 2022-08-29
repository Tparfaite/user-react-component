import React,{useState,useEffect} from 'react';
import styles from "./user.module.css";

const User=()=> {
const[user,setUser]=useState([]);
    const fetchData=async()=>{
        const fetching=await (await fetch("https://api.github.com/users")).json()
        console.log(fetching)
       setUser(fetching)
    }
    useEffect(()=>{
        fetchData()
    },[])
   ;
  return (
    <div>
       {user.map((item)=>(
        <div className={styles.container} key={item.id}>
            <div className={styles.avatar} >  
                <img src={item.avatar_url} alt="" /> 
            </div>
            <div className={styles.login}>{item.login}</div><br/>
            <div className={styles.text}>Our Equilibrium colection Promotes balance and calm</div><br/>
            <div className={styles.id}>{item.id}</div><br/>
            <hr/>
            <div className={styles.footer}>
                <div className={styles.image}>
                  <img src={item.avatar_url}/>
                </div>
                <div className={styles.lastLogin}>{item.login}</div>
                  
            </div>
        </div>
       ))}
    </div>
  )
}

export default User;
