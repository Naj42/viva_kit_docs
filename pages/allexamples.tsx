import { Button, Checkbox, Input } from "@vivakits/react-components"

export const LoginForm = ()=>{
    return(
        <div className="w-full flex flex-col gap-2 bg-slate-50 p-4 rounded-lg mx-auto my-0">
            <Input size="sm" label="User name" type="text" />
            <Input size="sm" label="Password" type="password" />
            <Button size="md" rounded="md" className="w-fit mx-auto">Login</Button>
            <Checkbox size="md">Remember Password</Checkbox>
            <a href="#" className="text-blue-800">Forgot your password?</a>
            <p className="m-0">click <a href="#" className="text-blue-800">here</a> to reset your password.</p>
        </div>
    )
}