import { useEffect, useState } from "react";
import axios from 'axios';
import LoginRegister from "../LoginRegister";
import { useNavigate } from "react-router-dom";

const Auth = ({children}) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        verify()
    }, [])

    const verify = async() => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/user/auth', {
                withCredentials: true
            })
            if (response.status === 200) {
                setRedirect(true);
            }
        } catch (error) {
            console.log(error);
            setRedirect(false)
        }
    }

    return redirect ? children : <h2>not authorized to see admin panel</h2>
}
 
export default Auth;