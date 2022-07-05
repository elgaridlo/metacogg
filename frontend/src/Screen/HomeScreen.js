import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teamListAction } from '../Service/Actions/team.action'
import nologo from '../Hey.jpg'
import Filter from '../Layout/Filter'

const queryParamsFunc = (data) => {
    let stringParam = []
    for(let i in data) {
        if (data[i]) {
            stringParam.push(`${i}=${data[i]}`)
        }
    }
    
    return stringParam.join('&')
}

const HomeScreen = () => {
    // const tournamentList = useSelector(state => state.tournamentList)
    // const { loading, error, listOfTournament } = tournamentList
    const [sort, setSort] = useState('?sort=point&sortOrder=desc')

    const teamList = useSelector(state => state.teamList)
    const { listOfTeam } = teamList

    const {origin} = window.location

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('sort home = ', sort)
        dispatch(teamListAction(sort))
    }, [sort])

    const submitHandler = async({min, max}) => {
        const stringParam = queryParamsFunc({min, max})
        let stringQuery = `?sort=point&sortOrder=desc`
        
        console.log('params = ', stringParam)
        if (stringParam) {
            stringQuery += `&${stringParam}&field=point`
        }
        
        dispatch(teamListAction(stringQuery))
    }

    const navigateAddWinner = () => {
        window.location.href = `${origin}/leaderboard/create`
    }
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
                <div className="col-md-12 px-0">
                    <h1 className="display-4 fst-italic">Leaderboard</h1>
                    <p className="lead my-3">Only the true champion who comes this far and puts their title to among the greatest player of all time.</p>
                </div>
                <button className="btn btn-primary" onClick={()=> navigateAddWinner()} >Add The Tournament Winner</button>
            </div>

            {listOfTeam && (
                <div className="row mt-2">
                    <div className="col-lg-3">
                        <Filter object={'Point'} submitHandler={submitHandler} />
                    </div>
                    <div className="col-lg-8">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Position</th>
                                    <th scope="col"></th>
                                    <th scope="col">Team</th>
                                    <th scope="col" style={{ textAlign: 'center' }}>Point</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOfTeam.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td><img src={item.logo || nologo} alt={item.name} /></td>
                                            <td className="fs-6"><strong>{item.name} </strong></td>
                                            <td style={{ textAlign: 'center' }}>{item.point}</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            )}
        </>
    )
}

export default HomeScreen
