import {useEffect,useState} from 'react';
import {useContacts} from '../components/useContacts';


export const Contacts = ()=>{
    const contacts = useContacts();

    if(contacts.isError){
        return ('Error')
    }
    if(contacts.isLoading){
        return ('loading...')
    }

    return (
        <div className="App">
            {contacts.data[0].name.first}
        </div>
    );
};

