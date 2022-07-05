import React, { useState } from 'react'

const Filter = ({object, submitHandler }) => {
    // Input berupa object
    // Return Object keatas juga

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    return (
        <>
            <div className="position-fixed">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Filter</h5>
                        <hr />
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="5" onChange={(e) => setMin(e.target.value)} />
                                    <label htmlFor="floatingInput">{[object]} Minimal</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="100" onChange={(e)=> setMax(e.target.value)}/>
                                    <label htmlFor="floatingInput">{[object]} Maximal</label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="d-grid gap-3">
                                    <button type="button" className="btn btn-primary btn-block" onClick={(e) => submitHandler({min, max})}>Cari</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter