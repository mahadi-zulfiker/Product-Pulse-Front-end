import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AllQueriesDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allQueries/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });

    return (
        <div className="gadgetContainer mt-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[500px]" src={item.Product_Image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product_Name: {item.Product_Name}</h2>
                    <div className="text-white mb-1">
                        <p>Brand_Name: {item.Brand_Name}</p>
                        <p>Date_Posted: {item.Date_Posted}</p>
                        <p>Query_Title: {item.Query_Title}</p>
                        <p>Alternation_Reason: {item.Alternation_Reason}</p>
                        <p>recommendationCount: {item.recommendationCount}</p>
                        <div className="flex">
                            <p className="mt-3"> User name: {item.User_Info.name}</p>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={item.User_Info.thumbnail} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllQueriesDetails;