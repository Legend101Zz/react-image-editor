import axios from 'axios';
import { API_NOTIFICATIOION_MESSAGES,SERVICE_URLS} from '../constants/config';
const API_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json",
        "x-api-key":"token"
    }
})

axiosInstance.interceptors.request.use(
    function (config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        // stop global loader here

        return processResponse(response);
    },
    function (error){
        //stop global loader here
        return Promise.reject(processError(error));
    }
)
///////////////////////////////////////
// if success -> return (issuccess:true,data:object)
// if fail => return(isFailure:true,status string,msg:string,code:int)
const processResponse = (response)=>{
    if(response?.status===200 || response?.status === 201){
        return {isSuccess:true,data:response}
    }
    else{
        return {
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError = (error)=>{
    if(error.response){
        //Reques made and server responded with a status other than 200
        // that falls out of the reange 2.x.x
        console.log('ERROR IN RESPONSE: ',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATIOION_MESSAGES.responseFailure,
            code:error.response.status
        } 
    }else if(error.request){
        //Request made but no response was received(connection issue b/w frontend and backend)
        console.log('ERROR IN REQUEST: ',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATIOION_MESSAGES.requestFailure,
            code:""
        } 
    } else{
        //Something happened in setting up request that triggers an error 
        console.log('ERROR IN NETWORK: ',error.toJSON());
        return{
            isError:true,
            msg:API_NOTIFICATIOION_MESSAGES.networkError,
            code:""
        } 
    }
}

const API = {};
for(const[key,value] of Object.entries(SERVICE_URLS)){
    API[key] = (body,showUploadProgress,showDownloadProgress)=>
    axiosInstance({
        method:value.method,
        url:value.url,
        data:body,
        responseType:value.responseType,
        onUploadProgress: function(progressEvent){
            if(showUploadProgress){
                let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                showUploadProgress(percentageCompleted);
            }
        },
        ondownloadProgress: function(progressEvent){
            if(showUploadProgress){
                let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                showDownloadProgress(percentageCompleted);
            }
        }
    })
}

export {API};