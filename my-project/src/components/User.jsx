import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

const get = (url) => {
    return fetch(url)
        .then((res) => res.json())
        .catch((err) => {
            return err;
        });
};

function User() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState([]);
    const [refresh, setRefresh] = useSearchParams()
    const [page, setPage] = useState(+refresh.get("Currnt_page") || 1)
    console.log(refresh.get("page"));
    


    let fetchDataAndUpdate = () => {
        setLoading(true);
        get(`https://reqres.in/api/users?page=${page}`)
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
        setRefresh({ Currnt_page: page })
    }, [page]);

    // useEffect(() => {
    //     setRefresh({ Currnt_page: page })

    // }, [page])

    console.log(page);

    console.log(user);

    function handlePage(num) {
        setPage(page + num)
    }
    return <>
        <div className="pt-6 pb-2  border grid grid-cols-3 gap-8  sticky top-0 z-10 ">
            {user?.data?.map((el) => {
                return <div key={el.id} className="w-[250px] h-[300px] border rounded-xl border-black p-3 m-auto">
                    <img className="w-[90%] m-auto rounded-full" src={el.avatar} alt={`${el.name}`} />
                    <div className="  text-center text-[16px] text-emerald-800 font-bold mt-1">
                        <h2>{`${el.first_name} ${el.last_name}`}</h2>
                        <h2>{el.email}</h2>
                    </div>
                    <div className="text-center"> <Link className="text-blue-500 text-sm font-bold text-center " to={`/user/${el.id}`}>More Info</Link></div>
                </div>
            })}

            <div className="flex justify-evenly  relative left-[100%] ">
                <button disabled={page <=1  ? true : false} className="w-fit border bg-emerald-400 px-2 rounded-md text-black text-l font-semibold" onClick={() => handlePage(-1)}>Prev</button>
                <h1 className="font-bold text-l">{page}</h1>
                <button disabled={page >=2? true : false} className="w-fit border bg-emerald-400 px-2 rounded-md text-black text-l font-semibold" onClick={() => handlePage(+1)}>Next</button>
                {console.log(page)}
            </div>
        </div>

    </>
}

export default User;
