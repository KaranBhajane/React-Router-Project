import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const get = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .catch((err) => {
            return err;
        });
};

function UserInfo() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);

    let val = useParams()
    


    let fetchDataAndUpdate = () => {
        setLoading(true);
        get(`https://reqres.in/api/users/${val.prodid}`)
            .then((res) => {
                console.log(res);
                setUser(res);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDataAndUpdate();
    }, []);

    console.log(val);
    return (
        <div>

            <div className='flex justify-center gap-4 items-center   w-full h-52'>
                <div >
                    <img className='rounded-full  w-[100%] '  src={user.data?.avatar} alt="" />
                </div>
                <div className=' text-green-700 w-[70%]'>
                    <h1>{`${user.data?.first_name} ${user.data?.last_name}`}</h1>
                    <h1 className='text-blue-400'>{user.data?.email}</h1>
                    <h2>{user.support?.text}</h2>
                    <a className='text-blue-400' href={`${user.support?.url}`}> Press Here for Website! </a>

                </div>
            </div>
        </div>
    )
}

export default UserInfo