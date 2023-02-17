import React from "react";

import Navbar from "../components/Navbar";
import "./committees.css";

import Council_Logo from '../assets/home/Council_Logo_W.png';
import Council_Logo_R from "../assets/home/Counci_Logo_Right.png";

import stuco        from '../assets/committees/stuco.png';
import csi          from '../assets/committees/csi.png';
import ecell        from '../assets/committees/ecell.png';

import nisp         from '../assets/committees/nisp.png';
import iete         from '../assets/committees/iete.png';
import ieee         from '../assets/committees/ieee.png';

import ieeeaess     from '../assets/committees/ieeeaess.png';
import ieeecs       from '../assets/committees/ieeeaess.png';
import ieeewie      from '../assets/committees/ieeeaess.png';

import spark        from '../assets/committees/spark.png';
import mudra        from '../assets/committees/mudra.png';
import sportscomm   from '../assets/committees/sportscomm.png';

import oculus       from '../assets/committees/oculus.png';
import rc           from '../assets/committees/rc.png';
import enactus      from '../assets/committees/enactus.png';

import iic          from '../assets/committees/iic.png';
import ela          from '../assets/committees/ela.png';
import idealab      from '../assets/committees/idealab.png';

import face         from '../assets/committees/face.png';
import acses        from '../assets/committees/acses.png';
import eesa         from '../assets/committees/eesa.png';

import ace          from '../assets/committees/ace.png';

function Committee(props){
    return(
        <>
        {/* <div className="round-1"></div><div className="round-2"></div> */}
        <div className="box col-xxl-3 col-md-5 col-sm-8 col-9 mx-2 px-5 py-4 mb-5">
            <div className="profile-img"><img className="img-fluid" src={props.img} alt={props.name}/></div>
            <h4 className="text-white p-0 mb-2 mt-4">{props.name}</h4>
            <h5 className="text-white mb-2">{props.designation}</h5>
            <q className="text-center mb-4">{props.description}</q>
            <p className="btn-area">
                <a href={props.website} target="_blank" className="ex mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-globe2" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/></svg>
                    {/* <span className="text-white">Website</span> */}
                </a>
                <a href={props.email} target="_blank" className="mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                    {/* <span className="text-white">Email</span> */}
                </a>
                <a href={props.instagram} target="_blank" className="ex mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                    {/* <span className="text-white">Instagram</span> */}
                </a>
                <a href={props.linkedin} target="_blank" className="mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                    {/* <span className="text-white">LinkedIn</span> */}
                </a>
            </p>
        </div>
    </>
        
    )
}

const Committees = () => {
  return (
    <>
      <Navbar />

      <section id="committees" className="">
            
            <h1 className="title text-white mb-3">COMMITTEES</h1>
            <div className="projects row justify-content-evenly mt-4">
                                
                <Committee
                    img={stuco}
                    name="Student's Council S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    website="../"
                    email="mailto:studentcouncilspit@gmail.com"
                    instagram="https://www.instagram.com/student_council_spit"
                    linkedin="./404"
                />
                                
                <Committee
                    img={csi}
                    name="CSI S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={ecell}
                    name="E-Cell S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

                <Committee
                    img={nisp}
                    name="NISP S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={iete}
                    name="IETE S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={ieee}
                    name="IEEE S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={ieeeaess}
                    name="IEEE AESS S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={ieeecs}
                    name="IEEE CS S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={ieeewie}
                    name="IEEE WIE S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={spark}
                    name="SPark"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={mudra}
                    name="Mudra"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={sportscomm}
                    name="Sports Committee S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={oculus}
                    name="OCULUS - The Fest"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={rc}
                    name="Rotaract Club S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                
                <Committee
                    img={enactus}
                    name="Enactus S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

                <Committee
                    img={iic}
                    name="IIC S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

                <Committee
                    img={idealab}
                    name="IdeaLab S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

                <Committee
                    img={ela}
                    name="ELA S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                             
                <Committee
                    img={face}
                    name="FACE S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
                                     
                <Committee
                    img={acses}
                    name="ACSES S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

                <Committee
                    img={eesa}
                    name="EESA S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />
              
                                
                <Committee
                    img={ace}
                    name="ACE S.P.I.T."
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos perferendis!"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    website="https://ecell.spit.ac.in/"
                />

            </div>
      </section>
    </>
  );
};

export default Committees;