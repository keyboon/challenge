import {Route} from 'react-router-dom';
import Handle404 from "../DoNotMove/Handle404";
import {useEffect, useState} from "react";
import axios from 'axios';
import GenerateForm from './GenerateForm';


//to validate the challenge
//formResponse should be the original JSON object from the api with little modifications and the value field should be the value of the input
//keyChallenge should be the keyChallenge from the api with little modifications

function Form({form, fetchDataForm}) {

    useEffect(() => {
        fetchDataForm()
    }, [fetchDataForm])

    // function sendValidation(formChallenge, keyChallenge) {
    //     let response = axios.post('https://api.challenge.keyboon.org/challenge/submit', {formResponse: formChallenge, keyChallenge}, {
    //         headers: {
    //             Authorization: `Bearer /*YOUR_TOKEN_HERE*/`
    //         }
    //     })
    //     if (response.data.flag)  {
    //         console.log(response.data.message)
    //         return response.data.flag //this one must be sent on the challenge website
    //     }
    //
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

        let response = axios.get('https://api.challenge.keyboon.org/challenge/resources', {
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