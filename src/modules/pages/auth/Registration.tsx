import { useNavigate } from "react-router-dom"

export default function Registration() {
  const location = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3  flex justify-center h-96">
        <div className="flex items-center flex-col justify-center">
          <p className="uppercase text-3xl">Welcome to boiporo</p>
          <br />
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " type="text" name="email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input className="text-sm border-gray-500 rounded-lg block w-full p-2.5 placeholder-gray-400 text-black border " type="password" name="password" />
            </div>
            <div  >
              <button className="text-sm uppercase  my-3 border-gray-500 rounded-lg block w-full p-2 text-black border ">registration</button>
              <br />
              <button className="text-xs uppercase  my-3 border-gray-500 rounded-lg block w-full p-1 text-black border " onClick={() => location('/login')}>Already have an account? Login</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}