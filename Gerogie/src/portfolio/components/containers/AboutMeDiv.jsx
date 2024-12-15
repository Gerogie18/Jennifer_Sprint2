import React from 'react';

const AboutMeDiv = () => {
    const aboutMeStyle = {
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    };
    const imgStyle = {
        ratio: '1/1',
        width:'40%',
        height:'40%',
        height: 'auto',
        borderRadius: '5px',
    };

    return (
        <div style={aboutMeStyle}>
            <img    src = "/profileimage.jpeg" 
                    alt="J Lyver profile picture" 
                    title="J Lyver profile picture"
                    style={{imgStyle}}/>
            <h2>Jennifer Lyver</h2>
            <p>
            "Based in St. John's, Newfoundland <br/> I have developed a strong foundation in information management, with a focus on the importance of organization, preservation, and accessibility. For fun, I'm drawn to craft and art and games, where I enjoy the puzzle-solving aspects and creative expression."
            </p>
        </div>
    )
}

export default AboutMeDiv;