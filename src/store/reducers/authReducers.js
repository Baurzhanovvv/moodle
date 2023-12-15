import axios from 'axios';

const REGISTER_USER = 'REGISTER-USER';
const SET_TOKEN = 'SET-TOKEN';
const LOGIN_STUDENT = 'LOGIN-STUDENT'

const localStore = {
    userData: [],
    data: []
};

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/api/'
})

export const AuthReducers = ( state = localStore, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                data: action.data
            }
        
        case LOGIN_STUDENT:
            return {
                ...state,
                userData: action.userData,
                data:action.data
            }

        
        default:
            return state
    }
}

const createUserAC = data => ({type: REGISTER_USER, data})
const setTokenAC = data => ({type: SET_TOKEN, data: data});
const loginStudentAC = (data, userData) => ({type: LOGIN_STUDENT, userData: userData, data: data});


export const registerUserTC = data => async dispatch => {
    try {
        // let dataForUser = {
        //     'email': data['email'],
        //     'username': data['username'],
        //     'password': data['password']
        // }
        // let dataForStudent = {
        //     'first_name': data['first_name'],
        //     'last_name': data['last_name'],
        //     'year': data['year'],
        //     'major': data['major'],
        //     'birth_date': data['birth_date'],
        //     'user': response.data.id,
        //     'gender': data['gender'],
        //     'university': data['university'],
        //     'phone_number': data['phone_number']
        // }
        let response = await instance.post('auth/users/', data);
        console.log(response.data);
        dispatch(createUserAC(response.data));
        // setTimeout(async () => {
        //     let resp = await instance.post('create/student', data)

        // })
    } catch (error) {
        console.error('Registration error:', error);
    }
};

export const loginStudentTC = data => async dispatch => {
    let response = await instance.post('auth/token/', data)
    dispatch(setTokenAC(response.data.access))
    setTimeout(async () => {
        let headers = {'Authorization': `Bearer ${response.data.access}`}
        let getToken = await instance.get('auth/users/me/', {headers: headers})
        let getProfile = await instance.get(`create/student?user=${getToken.data.id}`)
        let getProfileData = await instance.get(`student/${getProfile.data[0].id}`)
        console.log(getProfileData.data);
        dispatch(loginStudentAC(getProfileData.data, getToken.data))
    })
}