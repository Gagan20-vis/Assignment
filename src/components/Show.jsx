import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_SHOW } from '../Slice/MySlice';
import Image from '/default-featured-image.png.jpg';
export default function Show(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { show } = props;
    const onClick = () => {
        dispatch(SET_SHOW(show));
        navigate('/Assignment/Show');
    }
    return (
        show && <div className="card my-4" style={{ width: "18rem", border: 'none', background: '#d0d0d0' }}>
            <img src={show.image ? show.image.medium : Image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Language - {show.language}</h6>
                <p className="text-muted" style={{ fontSize: "small" }}>Type - {show.type}</p>
                <div className="d-grid gap-2">
                    <button onClick={onClick} className="btn btn-primary" type="button" style={{ borderRadius: '50px' }}>Know More</button>
                </div>
            </div>
        </div>
    )
}
