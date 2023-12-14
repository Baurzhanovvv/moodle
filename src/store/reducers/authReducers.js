import axios from 'axios';

const REGISTER_USER = 'REGISTER-USER';

const localStore = {
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
        
        default:
            return state
    }
}

const createUserAC = data => ({type: REGISTER_USER, data})


export const registerUserTC = data => async dispatch => {
    try {
        let response = await instance.post('auth/users/', data);
        console.log(response.data);
        dispatch(createUserAC(response.data));
    } catch (error) {
        console.error('Registration error:', error);
    }
};

