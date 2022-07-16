import React from 'react'
import '../movielist/Movielist.css'
import Data from '../../common/moviedata/moviesData';

function Movielist() {
    return (
        <>
            <div className="movielistdiv">

                <div className="movielist">

                    {
                        Data.map((data) => {
                            return (
                                <>
                                    <div className="movies">
                                        <img src={data.poster_url} alt="" />
                                    </div>

                                </>
                            )
                        })}
                </div>


                <div className="moviefilter">

              <p>FIND MOVIES BY</p>

              <div className="filter">
              <input type="text" placeholder='Movies Name' id='moviename'/>
              </div>

              <div className="filter">
              <input type="text" placeholder='Genres' id='genres' />
              </div>

              <div className="filter">
              <input type="text" placeholder='Artists' id='artists'/>
              </div>

              <div className="filter">
              <input  placeholder='Movies Name' type="date" id='rdate' />
              </div>

              <div className="filter">
              <input type="date" placeholder='Movies Name' id='edate'/>
              </div>

                </div>

            </div>
        </>
    )
}

export default Movielist