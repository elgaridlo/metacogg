import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTournamentResultAction, tournamentListAction } from '../../Service/Actions/tournament.action'
import Select from 'react-select'
import { teamByTournamentAction, teamListAction } from '../../Service/Actions/team.action'
import AlertComponent from '../../Components/AlertComponent'

const convertToSelectValue = (arr) => {
  let arrData = []
  arr.map((item) =>
    arrData.push({ label: item.name, value: item.id })
  )
  return arrData
}

const CreateLeaderboardScreen = () => {
  const [team_id, setTeamId] = useState('')
  const [position, setPosition] = useState('')
  const [point, setPoint] = useState(0)
  const [tournamentId, setTournamentId] = useState('')

  const [listTeam, setListTeam] = useState([])

  const tournamentList = useSelector(state => state.tournamentList)
  const { loading, error, listOfTournament } = tournamentList

  const teamByTournamentID = useSelector(state => state.teamByTournamentID)
  const { teamByTournament } = teamByTournamentID

  const createTournament = useSelector(state => state.createTournament)
  const { loading: createLoading, error: errorCreate, createTournamentWinner } = createTournament

  const dispatch = useDispatch()

  useEffect(() => {
    if (!listOfTournament) {
      dispatch(tournamentListAction())
    }
    console.log('lost = ', listTeam)
  }, [listOfTournament])

  useEffect(() => {
    dispatch(teamByTournamentAction(tournamentId))
  }, [tournamentId])

  useEffect(() => {
    setListTeam(teamByTournament)
  }, [teamByTournament])

  useEffect(() => {
    setPoint(position === '1' ? '5' : position === '2' ? '3' : '2')
  }, [position])

  useEffect(() => {
    if (createTournamentWinner) {
      window.location.href = `${origin}/leaderboard?sort=point&sortOrder=desc`
    }
  }, [createTournamentWinner])


  const submitHandler = () => {
    dispatch(createTournamentResultAction({ team_id, tournament_id: tournamentId, position, point }))

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
      </div>
      {errorCreate && (
        <AlertComponent variant={'danger'} message={errorCreate} />
      )}
      <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
        <form onSubmit={(e) => submitHandler()}>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              id="tournamentID"
              aria-label="Floating label select vacancy type"
              required
              onChange={(e) => setTournamentId(e.target.value)}
            >
              <option defaultValue>Vacancy Type Select</option>
              {listOfTournament && listOfTournament.map((item, index) => (
                <option key={index + `tournament`} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <label htmlFor="floatingSelect">Tournament</label>
          </div>
          <div className="form-floating mb-3">
            {
              listTeam && listTeam.length > 0 &&
              (<Select
                className="form-control"
                options={convertToSelectValue(listTeam)}
                onChange={(e) => setTeamId(e.value)}
              />)
            }
            <label htmlFor="floatingInput">Nama Team</label>
          </div>
          <div className="form-floating mb-3">
            <select className="form-select" id="positionSelect" aria-label="Floating label position select" onChange={
              (e) => setPosition(e.target.value)
            }>
              <option defaultValue>Pilih posisi</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelect">Pilih posisi</label>
          </div>

          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Point" value={point || '0'} readOnly />
            <label htmlFor="floatingInput">Point</label>
          </div>

          <div className="form-floating mb-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-primary" type="button" onClick={() => submitHandler()} disabled={createLoading}>
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