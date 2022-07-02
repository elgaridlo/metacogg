import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListAction } from '../../Service/Actions/user.action'
import nologo from '../../Hey.jpg'

const UserListScreen = () => {
    const userList = useSelector(state => state.userList)
    const { loading, error, listOfUser } = userList

    const dispatch = useDispatch()

    useState(() => {
        if (!listOfUser) {
            dispatch(userListAction())
        }
    }, [listOfUser])
    return (
        <>
            <div className="p-4 p-md-5 mb-4 text-center text-black rounded">
                <div className="col-md-12 px-0">
                    <h1 className="display-4 fst-italic">Leaderboard</h1>
                    <p className="lead my-3">Only the true champion who comes this far and puts their title to among the greatest player of all time.</p>
                </div>
            </div>

            {listOfUser && (
                <div className="row mt-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Position</th>
                                <th scope="col"></th>
                                <th scope="col">Team</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Coin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfUser.map((item, index) => {
                                return (
                                    <tr key={`${item._id}${index}`}>
                                        <th scope="row">{index + 1}</th>
                                        <td><img src={item.picture || nologo} alt={item.name} /></td>
                                        <td className="fs-6"><strong>{item.name} </strong></td>
                                        <td style={{ textAlign: 'center' }}>{item.coin}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default UserListScreen