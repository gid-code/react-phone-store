import React ,{useState} from 'react'
import { ButtonContainer } from '../Button'
import { Redirect } from 'react-router-dom'

const Signin = props => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const signInManuel = (email,password) => {
        props.signInCustom(email,password)
        props.history.push('/')
        setEmail('')
        setPassword('')
    }
    return (
        <div className="container">
        <div className="row col-12" >
            <div className="col-12" style={{justifyContent: "center"}}>
                <h1 className="h1 mb-3 font-weight-normal"
                style={{textAlign:"center"}}>Sign In</h1>
                <h3 className="h3 mb-3 font-weight-light"
                style={{textAlign:"center"}}>New to GidStore?<a href="/signup">Sign Up</a></h3>
            </div>
        </div>

        <div className="row col-12" style={{justifyContent:"center"}}>

            <form>
                <div className="col-12 form-group">
                    <button type="button" className="btn btn-outline-primary" onClick={props.signInG}>Sign In With Google</button>
                </div>
                <div className="col-12 form-group">
                    <input className="form-control" type="email" placeholder="Email address" value={email} onChange={emailHandler}/>
                </div>
                <div className="col-12 form-group">
                    <input className="form-control" type="password" placeholder="Password" 
                    value={password}
                    onChange={passwordHandler}/>
                </div>
                <div className="col-12 form-group" style={{justifyContent:"center"}}>
                    <button type="button" className="btn btn-primary"
                    onClick={()=> {signInManuel(email,password)}}>Sign In</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Signin