import {Route} from 'react-router-dom';
import Handle404 from "../DoNotMove/Handle404";
import {useEffect, useState} from "react";
import axios from 'axios';
import GenerateForm from './GenerateForm';



function Form({form, fetchDataForm}) {

    useEffect(() => {
        fetchDataForm()
    }, [fetchDataForm])

    // function sendValidation(form) {
    //     let response = axios.post('https://challenge.keyboon.org/challenge/submit', {formResponse: formChallenge, keyChallenge}, {
    //         headers: {
    //             Authorization: `Bearer /*YOUR_TOKEN_HERE*/`
    //         }
    //     })
    //     if (response.data.tokenValidation)
    //         return response.tokenValidation //this one
    //
    // }

    return (
        <>
            <GenerateForm form={form}/>
        </>
    )

}

function Home() {
    const [form, setForm] = useState(null)
    const [keyChallenge, setKeyChallenge] = useState("")

    function fetchDataForm() {
        let response = axios.get('https://challenge.keyboon.org/challenge/ressources', {
            headers: {
                Authorization: `Bearer /*YOUR_TOKEN_HERE*/`
            }
        })
        setKeyChallenge(response.data.keyChallenge)
        setForm(response.data.formChallenge)
    }


    useEffect(() => {
        setKeyChallenge(keyChallenge + "KHJbezE32")
        form[0].isRequired = false
        form[0].label = "Must be empty"
        setForm(form)
    }, [keyChallenge, form])



    return (
        <>
            <Form form={form} setForm={setForm} fetchDataForm={fetchDataForm}/>
        </>
    )
}

function App() {

    return (
        <Handle404>
            <Route path={'page1'} element={<Home/>}/>
        </Handle404>
    )
}

export default function Challenge() {
    return (
        <Handle404>
            <Route path={"Challenge"} element={<App/>}/>
        </Handle404>
    )
}