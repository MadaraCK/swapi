import React from 'react';
import './starwars.scss'
import '../people/people'


function Starwars({people}) {
    return (
        <div className="container">
            <iframe className="iframe" min-width="560" width="100%" min-height="315" height="650"  src="https://www.youtube.com/embed/3Yh_6_zItPU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

            </iframe>

        </div>
    );
}

export default Starwars;