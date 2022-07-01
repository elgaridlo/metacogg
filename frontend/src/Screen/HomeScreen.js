import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teamListAction } from '../Service/Actions/team.action'
import { tournamentListAction } from '../Service/Actions/tournament.action'
import nologo from '../Hey.jpg'

const HomeScreen = () => {
    const tournamentList = useSelector(state => state.tournamentList)
    const { loading, error, listOfTournament } = tournamentList

    const teamList = useSelector(state => state.teamList)
    const { listOfTeam } = teamList

    const dispatch = useDispatch()

    useState(() => {
        if (!listOfTournament) {
            dispatch(tournamentListAction())
        }
        if (!listOfTeam) {
            dispatch(teamListAction())
        }
    }, [listOfTournament, listOfTeam])
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
                <div className="col-md-12 px-0">
                    <h1 className="display-4 fst-italic">Leaderboard</h1>
                    <p className="lead my-3">Only the true champion who comes this far and puts their title to among the greatest player of all time.</p>
                </div>
            </div>

            {listOfTeam && (
                <div className="row mt-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Position</th>
                                <th scope="col"></th>
                                <th scope="col">Team</th>
                                <th scope="col" style={{textAlign: 'center'}}>Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfTeam.map((item, index) =>
                            (
                                <tr key={item._id}>
                                    <th scope="row">{index+1}</th>
                                    <td><img src={item.logo || nologo} alt={item.name}/></td>
                                    <td className="fs-6"><strong>{item.name} </strong></td>
                                    <td style={{textAlign: 'center'}}>{item.point}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default HomeScreen
