import { useSelector } from "react-redux"
import DOMPurify from 'dompurify';
const ShowSummary = ({ summary }) => {
    const sanitizedSummary = DOMPurify.sanitize(summary);
    return (
        <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} style={{ fontSize: '1.4rem' }} />
    );
};
export default function ShowDetail() {
    const show = useSelector(state => state.show);
    return (
        show && <div className="container mt-5" style={{ color: 'white' }}>
            <div className="d-flex justify-content-center">
                <h1 className="mb-5 mt-3">{show.name}</h1>
            </div>
            <div className="d-flex">
                <div className="image">
                    <img src={show.image && show.image.original} alt="image" style={{ width: '30rem', borderRadius: '20px' }} />
                </div>
                <div className="ms-5">
                    <ShowSummary summary={show.summary} />
                    <div style={{ fontSize: '1.2rem' }}>
                        <p><b>Type :</b> {show.type}</p>
                        <p><b>Language :</b> {show.language}</p>
                        <p><b>Country</b>{show.network.country.name}</p>
                        <h5><b>Rating : </b>{show.rating.average} / 10</h5>
                        <div className="d-flex">
                            <b>Official Site : </b>
                            <a href={show.officialSite} className="ms-2" target="blank"> {show.officialSite}</a>
                        </div>
                        <p><b>Official Site : </b>{
                            show.genres.map(item => {
                                return (
                                    item + "  "
                                )
                            })
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
