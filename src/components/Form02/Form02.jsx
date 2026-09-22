import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) =>{
    const [state, setState] = useState(()=>{
        return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);  
    
    return [state, setState];
};

export function SignupForm02(){
    const [email, setEmail]       = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');


    const handleChange = event =>{
        const { name, value } = event.target;

        console.log(name, value);

        switch (name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
                
            default:
                return;    
        }
    }

       return (
        <form autoComplete = "off">
            <label>
                <span>Пароль</span>

                <input
                        type =     "password"
                        name =     "password"
                        onChange = {handleChange}
                        value =    {password}
                />
            </label> 

            <label>
                <span>Почта</span>

                <input
                        type =     "email"
                        name =     "email"
                        onChange = {handleChange}
                        value =    {email}
                />
            </label>       

        </form>
    )

}

