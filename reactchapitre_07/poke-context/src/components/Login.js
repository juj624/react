import { useForm } from 'react-hook-form';
import { useState } from "react"


function Login() {
    const [username, setusername] = useState()
    const { register, handleSubmit, formState: { errors },} = useForm()
    const onSubmit = data => console.log(data)


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username", { required: true, maxlength: "15" })} type="text" />
                {errors.username && <span>This is required</span>}
                <input {...register("password", { required: true, minlength: "6" })} type="password" />
                {errors.password && <span>Max length exceeded</span>}
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login