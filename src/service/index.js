import Auth from '../configuration/configuration-aws'
import axios from 'axios';

const baseUrl = 'https://owzerhkxdg.execute-api.ap-southeast-1.amazonaws.com/dev'
let response
let token

export const getUser = async (params) => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await axios({
      method: 'get',
      url: `${baseUrl}/listdata`,  
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      params: params,
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
  return response
}

export const getdataeachUser = async (params) => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await axios({
      method: 'get',
      url: `${baseUrl}/user`,  
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      params: params,
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
  return response
}

export const getcountData = async () => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await axios({
      method: 'get',
      url: `${baseUrl}/countuser`,  
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

export const deleteuser = async (params) => {
  await Auth.currentSession()
  .then(res => {
    token = res.getAccessToken();
  })
  .catch(err => console.log(err));
  await axios({
      method: 'delete',
      url: `${baseUrl}/user`,  
      headers: { 
          'Authorization': token.getJwtToken(), 
          'Content-Type': 'text/plain'
      },
      params: params,
      }).then((res) => {
        response = res
      }).catch((err)=>{
        response = err
      })
  return response
}