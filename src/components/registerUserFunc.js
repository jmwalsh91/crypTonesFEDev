/* import axios from "axios";



export default function registerUser() {
    const axiosUser = axios.create({
    baseURL: 'http://127.0.0.1:4000/user',
    timeout: 10000,
  });
  
    async function registerUser() { 
        let userReg = {
            email: emailRef,
            password: passwordRef
        }

        axiosUser.post('/user', {userReg})

            .then(response => {
           console.log(userReg)
            })
            return () => {
           console.log('returned')
        }
      }
    } */