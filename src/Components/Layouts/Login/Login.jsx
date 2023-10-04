import './Login.css'
function Login(){
    return(
        <>
        <div id='login'>
            <div class="container">
                <div class="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className="login-form">
                                <h2>Login to your account</h2>
                                <form action="#" >
                                    <input type="text" name="email" placeholder="Email"  />
                                    <input type="password" name="password" placeholder="Password" />
                                    <button type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login