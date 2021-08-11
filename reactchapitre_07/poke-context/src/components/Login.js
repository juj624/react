import { useForm } from 'react-hook-form';
import { useState, useContext } from "react"
import '../App.css';
import { UserContext } from '../App';




function Login() {
    const logContext = useContext(UserContext)
    const [username, setUsername] = useState()
    const { register, handleSubmit, formState: { errors },} = useForm()
    const onSubmit = data => console.log(data)

    const onClick = () => logContext.setAuth()

    return (
        <div className="form">
            <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input" >
                    
                    <input placeholder ="username"{...register("username", { required: true, maxlength: "15" })} type="text" />
                    {errors.username && <span>This is required !</span>}
                    <input placeholder ="password"{...register("password", { required: true, minlength: "6" })} type="password" />
                    {errors.password && <span>Max length exceeded !</span>}


                    {!logContext.isLogged ? <input className="button" type="submit" value="se connecter" /> : <input className="button" type="submit" value="se déconnecter" /> }
                </div>
            </form>
        </div>
    );
}

export default Login