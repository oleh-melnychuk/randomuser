import {useEffect, useState} from "react";


export const useContacts =  () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, serError] = useState(false);

    useEffect(()=>{
        const getContacts = async () =>
        {
            try {
                const response = await fetch("https://randomuser.me/api/?results=200");
                const {results} = await response.json();
                setData(results);
                console.log(results);
            }
            catch (e) {
                serError(true);
            }
            finally {
                setLoading(false);

            }
        };
        getContacts();
    },[]);
    return{
        data,
        isLoading,
        isError
    }
};
