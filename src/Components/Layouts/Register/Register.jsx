import './Register.css'
function Register(){
    return(
            <div className="signup-form">
                <h2>New User Signup!</h2>
                    <form action="#" encType="multipart/form-data"  >
                    <input type="text" name="name"  placeholder="Name" />
                    <input type="email" name="email"  placeholder="Email Address" />
                    <input type="password" name="password"  placeholder="Password" />
                    <input type="text" name="phone"  placeholder="Phone" />
                    <input type="text" name="address"  placeholder="Address" />
                    <input type="text" name="level" placeholder="Level" value={"0"} />
                    <input type="file" name="Avatar"  />
                    <button type="submit">Signup</button>
                </form>
            </div>
    )
}
export default Register