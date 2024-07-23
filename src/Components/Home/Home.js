import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'

function Home() {
    const [loading, setLoading] = useState(true)
    const [lis, setLis] = useState([])
    useEffect(() => {
        let ab = async () => {
            let url = "https://apis.ccbp.in/ipl";
            const fet = await fetch(url);
            const result = await fet.json()
            // console.log(result.teams)
            setLis(result.teams)
            setLoading(false)
        }
        ab()
    }, [])
    return (
        <div className='flex  container justify-around'>
            <div className='w-[60vw] bg-slate-400 h-screen row  flex justify-around'>
                <h6 className='font-bold text-3xl'>IPL DASHBOARD</h6>

                {loading ? <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /> :
                    lis.map(e =>

                        <div className="col-5 rounded-3xl mb-2 border-2" key={e.id}>
                            <NavLink to={`/id/${e.id}`}>
                                <img className="w-2/12 " src={e.team_image_url} alt={e.id} />
                                <p className='ml-2'>{e.name}</p></NavLink>
                        </div>
                    )

                }

            </div>

        </div>
    )
}

export default Home