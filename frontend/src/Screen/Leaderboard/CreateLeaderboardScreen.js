import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CreateLeaderboardScreen = () => {
  const [team_id, setTeamId] = useState('')
  const [position, setPosition] = useState('')
  const [point, setPoint] = useState('')
  const [tournamentId, setTournament] = useState('')

  const dispatch = useDispatch()

  const submitHandler = () => {
    const body = {

    }
    dispatch()
  }
  return (
    <>
      <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
        <div className="col-md-12 px-0">
          <h1 className="display-4 fst-italic">Buat Daftar Perusahaan</h1>
          <p className="lead my-3">
            Digunakan untuk mendata perusahaan dengan detail.
          </p>
        </div>
        {/* {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )} */}
      </div>
      <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
        <form onSubmit={(e) => submitHandler()}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nama Perusahaan"
              required
              onChange={(e) => setTeamId(e.target.value)}
            />
            <label htmlFor="floatingInput">Nama Perusahaan</label>
          </div>
          {/* <div className="form-floating mb-3">
            <select
              className="form-select"
              id="floatingVacancyType"
              aria-label="Floating label select vacancy type"
              required
              onChange={(e) => setVacancyType(e.target.value)}
            >
              <option defaultValue>Vacancy Type Select</option>
              {vacancyTypeArray.map((item, index) => (
                <option key={index + `vacancy`} value={item.value}>
                  {item.desc}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">Vacancy Type</label>
          </div> */}
          <div className="form-floating mb-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-primary" type="button" onClick={() => submitHandler()}>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default CreateLeaderboardScreen