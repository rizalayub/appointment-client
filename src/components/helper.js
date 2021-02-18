import axios from 'axios'
export default {
    install(Vue){
     
        Vue.prototype.$login = async function (username, password) {
            let data  = {
                username,
                password
            }
            const res = await axios.post(`${process.env.VUE_APP_API_URL}/technician/login`, data)      
            try {
                return res.data
            }
            catch(error)  {
                console.log(error)
            }
        }
      
    }

}



// export const myLogin = {
//     async login(username, password) {       
//     let data  = {
//         username,
//         password
//     }
//     const res = await axios.post(`${process.env.VUE_APP_API_URL}/technician/login`, data)      
//     try {
//          return res.data
//     }
//     catch(error)  {
//         console.log(error)
//     }
//    }  
  
// }

