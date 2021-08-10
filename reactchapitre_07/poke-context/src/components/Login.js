import { useForm } from 'react-hook-form';
import { useState } from "react"
import '../App.css';


function Login() {
    const [username, setusername] = useState()
    const { register, handleSubmit, formState: { errors },} = useForm()
    const onSubmit = data => console.log(data)


    return (
        <div className="form">
            <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input" >
                    <label>
                        username
                    <input {...register("username", { required: true, maxlength: "15" })} type="text" />
                    </label>
                    {errors.username && <span>This is required</span>}
                    <label>
                        password
                    <input {...register("password", { required: true, minlength: "6" })} type="password" />
                    {errors.password && <span>Max length exceeded</span>}
                    </label>
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Login