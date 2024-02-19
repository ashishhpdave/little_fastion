
import { BsFillPlusCircleFill } from 'react-icons/bs';
function OurTeamCart(data) {
    return (
        <>
            <div className="col-lg-4 mb-4 col-12">
                <div className="team-thumb d-flex align-items-center">
                    <img src={data.img} className="img-fluid custom-circle-image team-image me-4" alt="" />

                    <div className="team-info">
                        <h5 className="mb-0">{data.h5}</h5>
                        <strong className="text-muted">{data.strong}</strong>

                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn custom-modal-btn" data-bs-toggle="modal" data-bs-target="#don">
                            <i className="bi-plus-circle-fill"><BsFillPlusCircleFill /></i>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeamCart