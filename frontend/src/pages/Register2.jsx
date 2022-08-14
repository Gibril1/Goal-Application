import { FaUser } from 'react-icons/fa'
import { useState } from 'react'

function Register2() {
    const { formData, setFormData } = useState({
        name:'',
        email:'',
        password:'',
        password2:''
      })

    //   const { name, email, password, password2 } = formData
  return (
    <>
        <section className="heading">
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className="form">
            <form>
                <div className="form-group">
                    <input 
                    type="text" 
                    className='form-control'
                    id='name'
                    name='name'
                    // value={name}
                    placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    className='form-control'
                    id='email'
                    name='email'
                    // value={email}
                    placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    className='form-control'
                    id='password'
                    name='password'
                    // value={password}
                    placeholder="Enter your password"/>
                {/*  */}
                </div>
                <div className="form-group">
                    <input 
                    type="password" 
                    className='form-control'
                    id='password2'
                    name='password2'
                    // value={password2}
                    placeholder="Confirm your password"/>
                </div>
                <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
            </form>
        </section>
    </>
  )
}

export default Register2