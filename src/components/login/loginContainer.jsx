import { connect } from "react-redux"
import Login from "./login"
import { registerUserTC } from "../../store/reducers/authReducers"

const LoginContainer = props => {
    return (
        <Login register={props.registerUserTC}/>
    )
}

let mapStateToProps = state => ({
    auth: state.auth
})

export const LoginConnected = connect(mapStateToProps, {registerUserTC})(LoginContainer)