import { useState, useEffect } from 'react';

export function SignupForm(){
                    const [email, setEmail] = useState(() =>{
                        return JSON.parse(window.localStorage.getItem('email')) ?? ''
                    });
                        /*
                        Это значение по умолчанию
                        Ленивая инициализация состояния. useState()
                        вызовет функцию только один раз при первом рендере
                        */
                    const [password, setPassword] = useState(() =>{
                        return JSON.parse(window.localStorage.getItem('password')) ?? ''
                    });

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

    useEffect(() => {
        console.log('email useEffect');
        window.localStorage.setItem('email', JSON.stringify(email));
        
    }, [email])

    useEffect(() => {
    window.localStorage.setItem('password', JSON.stringify(password));
    }, [password]);

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