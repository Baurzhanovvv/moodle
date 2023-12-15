import { connect } from "react-redux"
import Registration from "./regist"
import { registerUserTC } from "../../store/reducers/authReducers"

const RegistContainer = props => {
    return (
        <Registration register={props.registerUserTC}/>
    )
}

let mapStateToProps = state => ({
    auth: state.auth
})

export const RegistConnected = connect(mapStateToProps, {registerUserTC})(RegistContainer)