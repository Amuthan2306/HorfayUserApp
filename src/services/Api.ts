import {NodeApiEndPoint} from './config';
import auth from './auth';
import ErrorHandler from './auth'
import NetInfo from '@react-native-community/netinfo';
import {useSelector} from 'react-redux';
const {host} = NodeApiEndPoint;

export default class PostApi {
  static PostRequest = (url: any, params: any) => {
    console.log('urlh==>', `${host}${url}`);
    console.log('params==>',params);
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
              console.log('@@@@@', jsonReponse);
              if (
                jsonReponse.status === 200 ||
                jsonReponse.status === 202 ||
                jsonReponse.status === 'success'
              ) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              console.log('@@@@@error', error);

              reject(auth.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };
  
  static PutUrlRequest = (url:any, params:any) => {

    return new Promise((resolve, reject) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
          })
            .then((response) => response.json())
            .then((jsonReponse) => {
              console.log("json==> edit update", jsonReponse)
              if ( jsonReponse.status === 200 ||
                  jsonReponse.status === 202 ||
                  jsonReponse.status === 'success') {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch((error) => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = { message: global.const.networkError };
          reject(error);
        }
      });
    });
  };

  static PutRequest = (url: any, params: any) => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
          })
            .then(response => response.json())
            .then(jsonReponse => {
              console.info('response from api call', jsonReponse);
              if (
                jsonReponse.status === 200 ||
                jsonReponse.status === 202 ||
                jsonReponse.status === 'success'
              ) {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch(error => {
              console.info('error in catch in api call', error);
              reject(ErrorHandler.errorHandler(error));
            });
        } else {
          let error = {message: global.const.networkError};
          reject(error);
        }
      });
    });
  };

  static GetUrlRequest = (url:any ) => {
   console.log("url===>",url)
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((jsonReponse) => {
              console.log("json==>", jsonReponse);
              if (jsonReponse.status === 200 ||
                jsonReponse.status === 202 ||
                jsonReponse.status === 'success') {
                resolve(jsonReponse);
              }
            })
            .catch((error) => {
              reject(auth.errorHandler(error));
            });
        } else {
          let error = { message: global.const.networkError };
          reject(error);
        }
      });
    });
  };

  static PostBodyRequest = (url: any, params: any)  => {
    console.log("par===>", params)

    return new Promise((resolve, reject) => {
      // global.functions.getToken()
      // const header=()=>{
      //   global.functions.getToken()
      // }
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          fetch(`${host}${url}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // "Authorization": {header},
            },
            body: JSON.stringify(params),
          })
            .then((response) => response.json())
            .then((jsonReponse) => {
              console.log("jsonReponse==>", jsonReponse);
              if (jsonReponse.status === 200 ||
                 jsonReponse.status === 202 ||
                 jsonReponse.status === 'success') {
                resolve(jsonReponse);
              } else {
                reject(jsonReponse);
              }
            })
            .catch((error) => {
              console.log("error1===>", error);
              reject(auth.errorHandler(error));
            });
        } else {
          let error = { message: global.const.networkError };
          reject(error);
        }
      });
    });
  };

  static GetUrlparams = (url:any , params: any) => {
      console.log(`${host}${url}${params}`,)
      return new Promise((resolve, reject) => {
        NetInfo.fetch().then((state) => {
          if (state.isConnected) {
            fetch(`${host}${url}/${params}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((jsonReponse) => {
                console.log("json==>", jsonReponse)
                if (jsonReponse.status === 200 ||
                jsonReponse.status === 202 ||
                jsonReponse.status === 'success') {
                  resolve(jsonReponse);
                } 
              })
              .catch((error) => {
                reject(auth.errorHandler(error));
              });
          } else {
            let error = { message: global.const.networkError };
            reject(error);
          }
        });
      });
    };
  
}




