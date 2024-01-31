import axios from "axios"
import { useEffect, useState } from "react";
import Show from "./Show";
export default function AllShow() {
    const [allShow,setAllShow] = useState(null);
    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
    .then(res => {
        setAllShow(res.data);
    })
    .catch(e => console.log(e));
    },[]);
    return (
        <div className="container">
            <div className="row">
            {allShow && allShow.map((item,ind) => {
                return (
                    <div className="col-md-3" key={ind}>
                        <Show show={item.show}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
