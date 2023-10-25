// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATIOION_MESSAGES = {
    loading:{
        title:'Loading...',
        message:'Data is being laded, please wait'
    },
    success:{
        title:'Success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server please try after some time'
    },
    requrestFailure:{
        title:'Error',
        message:'An error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect with the server. please check the internet connectivity and try again later'
    }
}


//API SERVICE CALL

//SAMPLE REQUEST
//NEED SERVICE CALL:{url:'/},method:'POST/GET/PUT/DELETE' params:true/false,query:true/false

export const  SERVICE_URLS={
    userSignup:{url:'/api/user/create',method:'POST'},
    LoginApi:{url:'/api/user/login',method:'POST'}
}