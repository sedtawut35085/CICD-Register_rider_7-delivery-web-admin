import Auth from '../configuration/configuration-aws'
import axios from 'axios';

const baseUrl = 'https://owzerhkxdg.execute-api.ap-southeast-1.amazonaws.com/dev'
let response
let token

export const getUser = async () => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await axios({
      method: 'get',
      url: `${baseUrl}/users`,  
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
  return response
}