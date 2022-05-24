import Headshot from './Assets/profilepic.jpg'

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
                <p>Thanks for stopping by! I'm Sarah, a new developer and engineer with a background in communications and marketing. I’m passionate about science, animation, and culinary history. I currently live in Atlanta with a robotic cat I built myself, and in my free time I make stained glass windows, host a YouTube show about the future of food on Mars, and eat way too many noodles.</p>
                </div>
            </div>
            <div className="WhatIKnow">
                <div className="WhatHeader">
                    <h2>What I Know</h2>
                </div>
                <div className="WhatText">
                    <p>I have experience with: MERN stack, React, Node, Express, Javascript, jQuery, Bootstrap, PHP, SQL, third-party APIs, SQL, HTML5, CSS, Git</p>
                </div>
            </div>
            <div className="WhereIveWorked">
                <div className="WhereHeader">
                    <h2>Where I've Worked</h2>
                </div>
                <div className="WhereText">
                    <p>I'm managed websites for global asset management firms like Legg Mason, universities like Georgia State, and non-profits like the Task Force for Global Health. I’ve also worked for some of the world’s biggest brands, including Domino’s Pizza, Burt’s Bees, Smashbox, Sally Hansen, OPI, and more. I’ve lived and worked in Atlanta, London, and New York, giving me a unique global perspective that can help take your  brand to the next level.</p>
                </div>
            </div>
        </div>
     </div>
    )
};

export default AboutMe;