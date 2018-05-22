import axios from 'axios';

export const invokeUrl = 'http://111.231.192.70:9001';

export const request = axios.create({
  url: '/',
  baseURL: invokeUrl,
  timeout: 10000,
  withCredentials: true,
  responseType: 'json',
})

// const getUrl = (path: string, queryParams = {}) => {
//   if (Reflect.ownKeys(queryParams).length > 0) {
//     return invokeUrl + path + '?' + Reflect.ownKeys(queryParams).map(key => queryParams[key]).join('&')
//   }
//   return invokeUrl + path;
// }

// type requestType = {
//   method: string;
//   path: string;
//   queryParams: object;
//   body: object;
// }

// // 'GET' | 'POST' | 'PUT' | 'DELETE'
// export const request = ({method = 'GET', path, queryParams = {}, body = {}}: requestType) => {
//   return new Promise((resolve: any, reject: any) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = () => {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//             resolve(JSON.parse(xhr.responseText))
//           }
//       }
//       xhr.open(method, getUrl(path, ), true);  //设置异步请求
//       xhr.send(JSON.stringify(body));
//   })
// }