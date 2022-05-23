import Headshot from '../assets/image/profilepic.jpeg'

const AboutMe = () => {

    return(
        
     <div className="parentWrapper">
        <div className="photo">
            <img src={Headshot} alt="Me"/>
        </div>

        <div className="aboutMe">
            <div className="WhoIAm">
                <div className="WhoHeader">
                    <h2>Who I Am</h2>
                </div>
                <div className="WhoText">
                    <p>TK*text</p>
                </div>
            </div>
            <div className="WhatIKnow">
                <div className="WhatHeader">
                    <h2>What I Know</h2>
                </div>
                <div className="WhatText">
                    <p>TK*text</p>
                </div>
            </div>
            <div className="WhereIveWorked">
                <div className="WhereHeader">
                    <h2>Where I've Worked</h2>
                </div>
                <div className="WhereText">
                    <p>TK*text</p>
                </div>
            </div>
        </div>
     </div>
    )
};

export default AboutMe;