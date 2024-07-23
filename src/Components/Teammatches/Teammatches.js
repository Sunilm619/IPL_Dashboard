import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'
function Teammatches(props) {
    let [recent, setRecent] = useState({})
    let [teamimg, sestTeamimg] = useState("")
    let [latestarray, setLatestarray] = useState([])
    let [cls, setCls] = useState("Won")
    // console.log(useParams())
    let { id } = useParams()
    let urr = `https://apis.ccbp.in/ipl/${id}`
    useEffect(() => {
        let fun = async () => {
            let response = await fetch(urr)
            let data = await response.json()
            // console.log(data)
            const { team_banner_url, recent_matches, latest_match_details } = data
            // console.log(recent_matches)
            // console.log(latest_match_details)
            let img = team_banner_url
            sestTeamimg(img)
            let upda =
                recent_matches.map(e =>
                ({
                    competingTeam: e.competing_team,
                    competingTeamLogo: e.competing_team_logo,
                    firstInnings: e.first_innings,
                    id: e.id,
                    result: e.result,
                    date: e.date,
                    mom: e.man_of_the_match,
                    matchStatus: e.match_status,
                    second_innings: e.second_innings,
                    umpires: e.umpires,
                    venue: e.venue
                }))
            // console.log(upda)
            setLatestarray(upda)
            let recentmatc = {
                competingTeam: latest_match_details.competing_team,
                competingTeamLogo: latest_match_details.competing_team_logo,
                firstInnings: latest_match_details.first_innings,
                id: latest_match_details.id,
                result: latest_match_details.result,
                date: latest_match_details.date,
                mom: latest_match_details.man_of_the_match,
                matchStatus: latest_match_details.match_status,
                secondInnings: latest_match_details.second_innings,
                umpires: latest_match_details.umpires,
                venue: latest_match_details.venue
            }
            console.log(recentmatc)
            setRecent(recentmatc)

        }
        fun()
    }, [])
    // console.log(latestarray.competingTeam)
    return (
        <div className='container'>
            <img src={teamimg} className='h-[440px]' alt='kli' />
            <p>Latest Matces</p>
            <div className=' bg' >
                <div className='row'>
                    <div className='flex justify-around items-center'>
                        <div>
                            <h5>{recent.competingTeam}</h5>
                            <p>{recent.date}</p>
                            <p>{recent.venue}</p>
                            <p>{recent.result}</p>
                        </div>
                        <div >
                            <img src={recent.competingTeamLogo} />
                        </div>
                        <div>
                            <p><span>FirstInnings :</span>{recent.firstInnings}</p>
                            <p><span>secondInnings :</span>{recent.secondInnings}</p>
                            <p><span>man_of_the_match :</span>{recent.mom}</p>
                            <p><span>umpires :</span>{recent.umpires}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='row'>

                {latestarray.map(e =>
                    <div className='col-3 bg-slate-800 text-zinc-300 border-2 flex flex-col justify-center'>
                        <img className='w-2/12 ml-20' src={e.competingTeamLogo} alt={e.id} />
                        <p>{e.competingTeam}</p>
                        <p>{e.result}</p>
                        <p className='text-green-400'>{e.matchStatus}</p>
                    </div>

                )}
            </div>
        </div >
    )
}

export default Teammatches