import React, { useState } from 'react';
import { FaPaintBrush } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiRolledCloth, GiArchiveResearch } from "react-icons/gi";
import { PiYarnBold } from "react-icons/pi";
import { LuGamepad2 } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

const PopupDiv = () => {
    const [activeDiv, setActiveDiv] = useState(null);
    const divKey = [
        {key: 0,    icon: FaPaintBrush, 
                    title: 'Art', 
                    content:"I'm passionate about art and its ability to inspire and enrich our lives. I enjoy exploring different creative outlets and have recently developed an interest in creating 3D assets using Blender. This experience has been a great way for me to combine my technical skills with my artistic side, and I'm excited about the role of art in my life."},
        {key: 1,    icon: GiRolledCloth, 
                    title: 'Textile Design', 
                    content: "I have a formal education in Textile Design from the College of the North Atlantic. I'm drawn to the unique intersection of craft and art in textile design, where functionality meets aesthetics. In particular, I enjoy the challenge and precision of pattern drafting, which is my favorite form of applied maths."},
        {key: 2,    icon: PiYarnBold, 
                    title: 'Craft', 
                    content: "I've had the opportunity to both teach and learn various traditional crafts, and I appreciate the sense of community that comes with sharing these skills. Knitting, in particular, has a way of bringing people together, and I enjoy the meditative quality of the craft, which allows me to get lost in the rhythm of the stitches. I also enjoy the problem-solving aspect of crafting, whether it's deconstructing existing items to understand their construction or designing new projects from scratch, where I can plan and execute the pattern and structure to bring my ideas to life."},
        {key: 3,    icon: GiArchiveResearch,
                    title: 'Information Management', 
                    content: "Throughout my life, I've had a fascination with learning and a deep appreciation for the role of libraries in preserving and providing access to knowledge. My academic pursuits at Memorial University of Newfoundland initially focused on library sciences, but I soon discovered a passion for archives and the critical work of acquiring, preserving, and making information accessible. I firmly believe that the value of information lies not only in its content, but also in its organization, maintenance, and presentation. With a combination of employment, volunteer, and coursework experience in information management, I've developed a strong foundation in this field and a commitment to ensuring that information is accurate, reliable, and accessible to those who need it."},
        {key: 4,    icon: FaComputer, 
                    title: 'Code', 
                    content: "I am drawn to the intellectual challenge of coding, where I can apply logical reasoning and creative thinking to solve complex problems. With experience in languages such as Python, React, JavaScript, HTML, and CSS, I appreciate the unique characteristics and strengths of each. I find it fascinating to explore the intricacies of how different languages approach similar problems, and to understand the design decisions and evolution that have shaped their development. For me, coding is about understanding the strengths and weaknesses of various languages and applying that knowledge to craft effective solutions."},
        {key: 5,    icon: LuGamepad2, 
                    title: 'Games', 
                    content: "Games are a universal language, and I'm excited to be part of a community that shares my passion for interactive storytelling and immersive experiences. For me, games represent a convergence of my interests in art, puzzle-solving, design, and community-building. They offer a unique platform for bringing stories to life and exploring new ideas. As a hobby, I've been learning GDScript and enjoying the creative challenges of game design, which allows me to combine my technical and artistic skills."},
    ];

    const buttonRow = (
        <div className="button-row" style={{buttonRowStyle}}>
          {divKey.map((item) => (
            <button key={item.key} onClick={() => setActiveDiv(item.key)} style={buttonStyle}
                title= {`Interest: ${item.title}`}>
              <item.icon /> {item.title}
            </button>
          ))}
        </div>
      );

    const divContainer = divKey.map((item) => (
        <div key={item.key} style={activeDiv === item.key ? visibleDivStyle : invisibleDivStyle} className={'popup-div' `div-${item.key}`}>
            {item.content}
            <button onClick={() => setActiveDiv(null)} style={closeButtonStyle}>
                <IoCloseCircle />
            </button>
        </div>
    ));

//Styles
    const invisibleDivStyle = {
        display: 'none',
    };

    const visibleDivStyle = {
        display: 'block',
    };

    const buttonRowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    };

    const buttonStyle = {
        margin: '10px',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        left: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }

    const containerStyle = {
        padding: '20px',
        margin: '20px',
        borderRadius: '5px',
        position: 'relative',
    };
    const headerStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '80%',
    };


    return (
        <div
            className="popup-container" 
            style={containerStyle}> 
            <h2>Interests</h2>
            {buttonRow}
            {divContainer}
        </div>
    )
}

export default PopupDiv;