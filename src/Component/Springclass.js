import axios from "axios";

const url = "http://localhost:9000/";

class Springclass{

    signupuser(user){
       return  axios.post(url+"signupuser",user);
    }

    signinuser(user){
        return axios.post(url+"signinuser",user);
    }

    googleauth(user){
        return axios.post(url+"googleauth",user);
    }

}

export default new Springclass();