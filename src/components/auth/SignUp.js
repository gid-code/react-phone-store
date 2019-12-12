import React, {useState} from 'react'

const SignUp = props => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const signUpHandler = (email,password) => {
        props.signUp(email,password)
        props.history.push('/')
        setEmail('')
        setPassword('')
    }

    return (
        <div class="container">
            <div class="row col-12" >
                <div class="col-12" style={{justifyContent: "center"}}>
                    <h1 class="h1 mb-3 font-weight-normal"
                    style={{textAlign:"center"}}>Sign Up</h1>
                    {/* <h3 class="h3 mb-3 font-weight-light"
                    style={{textAlign:"center"}}>New to GidStore?<a href="/signup">Sign Up</a></h3> */}
                </div>
            </div>

            <div class="row col-12" style={{justifyContent:"center"}}>

                <form>
                {/* <div class="col-12 form-group">
                    <button type="button" class="btn btn-outline-primary" onClick={props.signInG}>Sign In With Google</button>
                </div> */}
                    <div class="col-12 form-group">
                        <input class="form-control" 
                        type="email" 
                        placeholder="Email address" 
                        value={email} 
                        onChange={emailHandler}/>
                    </div>
                    <div class="col-12 form-group">
                        <input class="form-control" 
                        type="password"
                        placeholder="Password" 
                        value={password}
                        onChange={passwordHandler}/>
                    </div>
                    <div class="col-12 form-group" style={{justifyContent:"center"}}>
                        <button type="button" 
                        class="btn btn-primary"
                        onClick={()=>{signUpHandler(email,password)}}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp