import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form";
import { TLoginInputs } from "../../../types/auth";

import { ClipLoader } from "react-spinners";
import { useLoginUserMutation } from "../../../redux/fetures/booksAPI/book";

export default function Login() {
    // const navigate = useNavigate()
    const [makeLogin, { isLoading, isSuccess, error }] = useLoginUserMutation()
    const location = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginInputs>();
    const onSubmit: SubmitHandler<TLoginInputs> = async (datas) => {
        try {
            const response = await makeLogin({ email: datas.email, password: datas.password })
            if ('data' in response) {
                const data = response.data;
                if (data.token) {
                    localStorage.setItem('token', data.token)
                }
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };


    if (isLoading) {
        return <ClipLoader color="#36d7b7" />
    }
    if (isSuccess) {
        alert('login successfully')
    } if (error) {
        alert('faild to login')
    }

    return (
        <div>
            <button className="text-xs uppercase my-3 ms-12  border-gray-500 rounded-lg  p-1 text-black border" onClick={() => location('/')}>Back</button>

            <div className="flex justify-center items-center h-screen">

                <div className="w-1/3  flex justify-center h-96">
                    <div className="flex items-center flex-col justify-center">
                        <p className="uppercase text-3xl">Welcome to boiporo</p>
                        <p className="uppercase text-xl text-neutral-600 space-x-4">Try to login</p>
                        <br />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">

                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("email", { required: true })} type="text" name="email" />
                                    {errors.email && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border "  {...register("password", { required: true })} type="password" name="password" />
                                    {errors.email && <span className="text-xs mt-1 mb-2 text-red-600 ">This field is required</span>}
                                </div>

                                <div  >
                                    <input type="submit" value={"Login"} className="text-sm uppercase  my-3 border-gray-500 rounded-lg block w-full p-2 text-black border "></input>
                                    <br />
                                    <button className="text-xs uppercase my-3 border-gray-500 rounded-lg block w-full p-1 text-black border" onClick={() => location('/registration')}>Create new account</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}