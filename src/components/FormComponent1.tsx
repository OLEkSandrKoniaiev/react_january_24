import React, {FormEvent, useState} from 'react';

interface IFormProps {
    username: string,
    password: string
}


const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'username',
        password: 'password'
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const form = e.target as HTMLFormElement;
        // console.log(form);
        // console.log(form.username.value);
        // console.log(form.password.value);

        // Типу надсилаємо дані
        let user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user);
    }

    // Перший спосіб контролювати інпути

    // const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, username: input.value});
    // }
    //
    // const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    //     const input = e.target as HTMLInputElement;
    //     console.log(input.value);
    //     setFormState({...formState, password: input.value});
    // }
    //
    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <input type={"text"} name={"username"} value={formState.username} onChange={handleUsernameChange}/>
    //             <input type={"text"} name={"password"} value={formState.password} onChange={handlePasswordChange}/>
    //             <button>send</button>
    //         </form>
    //     </div>
    // );


    // Другий спосібконтролювати інпути

    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"username"} value={formState.username} onChange={handleInputChange}/>
                <input type={"text"} name={"password"} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );



    // Окреме

    // const handler = (e:FormEvent<HTMLInputElement>) => {
    //
    // }
    //
    // return (
    //     <div>
    //         <form>
    //             <input type={"text"} name={"username"} onChange={handler}/>
    //             <input type={"text"} name={"password"}/>
    //             <button>send</button>
    //         </form>
    //     </div>
    // );
};

export default FormComponent;