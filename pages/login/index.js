export default function Login(){
  return(
    <div className="singup-page">
      <div className="signup-page--text">
        <h3>Register with us for a seamless experience</h3>
      </div>
      <div className="signup-page--form">
       <label for="fname">Full Name</label>
       <input type="text" id="fname" name="fname" value=" "/>
       <label for="email">Email</label>
       <input type="text" id="email" name="email" value=" "/>
       <label for="number">Contact Number</label>
       <input type="tel" id="number" name="number" value=" "/>
      <label for="address">Address</label>
       <input type="text" id="address" name="address" value=" "/>
      </div>
      <div  className="singup-page--users">
        <h3>Already have account?</h3>
      </div>

    </div>
  )
}