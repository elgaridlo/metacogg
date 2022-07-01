import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tournamentListAction } from '../Service/Actions/tournament.action'

const HomeScreen = () => {
    const tournamentList = useSelector(state => state.tournamentList)
    const { loading, error, listOfTournament } = tournamentList
    const dispatch = useDispatch()

    useState(() => {
        if (!listOfTournament) {
            dispatch(tournamentListAction())
        }
    }, [listOfTournament])
    return (
        <>
            <div className="row mb-2">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomeScreen
