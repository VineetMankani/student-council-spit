import React from "react";

import Navbar from "../components/Navbar";
import "../style.css";
import "./team.css";

import GS23    from '../assets/team/2022-23/Yug_Harlalka_GS.jpg';
import CS23    from '../assets/team/2022-23/Nikhil_Motwani_CS.jpg';
import VCS23   from '../assets/team/2022-23/Anmol_Khy_VCS.jpg';
import TH23    from '../assets/team/2022-23/Vineet_Mankani_TH.jpg';
import DTH23   from '../assets/team/2022-23/Ankit_Mishra_DTH.jpg';
import SS23    from '../assets/team/2022-23/Nikita_Joby_SS.png';
import VSS23   from '../assets/team/2022-23/Vinesh_Nadar_VSS.jpg';
import FS23    from '../assets/team/2022-23/Shubh_Shah_FS.jpg';
import VFS23   from '../assets/team/2022-23/Riti_Vakil_VFS.jpg';
import LR23    from '../assets/team/2022-23/Anushree_Deshmukh_LR.jpg';

import DA22    from '../assets/team/2021-22/JigneshSir.jpg';
import JS      from '../assets/team/2021-22/JigneshSir.jpg';
import GS22    from '../assets/team/2021-22/Sumeet_Haldipur_GS.jpg';
import CS22    from '../assets/team/2021-22/Swaraj_Salunke_CS.jpg';
import VCS22   from '../assets/team/2021-22/Nikhil_Motwani_VCS.jpg';
import TH22    from '../assets/team/2021-22/Aayush_Kawathekar_TH.jpg';
import DTH22   from '../assets/team/2021-22/Yug_Harlalka_DTH.jpg';
import SS22    from '../assets/team/2021-22/Darshan_Somani_SS.jpg';
import VSS22   from '../assets/team/2021-22/Tanisha_Kalathil_VSS.jpg';
import FS22    from '../assets/team/2021-22/Abhishek_Chopra_FS.jpg';
import VFS22   from '../assets/team/2021-22/Abhishek_Chopra_FS.jpg';                   ///
import LR22    from '../assets/team/2021-22/Janhavi_Dabhane_LR.jpg';



function Member(props){
    return(
        <>
        {/* <div className="round-1"></div>
        <div className="round-2"></div> */}
        <div className="box col-3 mx-4 px-5 py-4 mb-5">
            <div className="profile-img"><img src={props.img} alt={props.name}/></div>
            <h2 className="name p-0 mb-0 mt-4">{props.name}</h2>
            <h4 className="post text-white mb-3">{props.position}</h4>
            <q className="desc text-center mb-4">{props.description}</q>
            <p className="btn-area">
                <a href={props.linkedIn} target="_blank" rel="noreferrer" className=" mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin me-2" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                    <span>LinkedIn</span>
                </a>
                <a href={props.instagram} target="_blank" rel="noreferrer" className="ex mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram me-2" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                    <span className="text-white">Instagram</span>
                </a>
            </p>
        </div>
    </>
        
    )
}

const Team = () => {
  return (
    <>
      <Navbar />

      <section id="team" className="">
            
        <main classname="team23">

            <h1 className="title text-white mb-3">TEAM of 2022-23</h1>
            <div className="projects row justify-content-evenly mt-4">
                                
                <Member
                    img={GS23}
                    name="Kiran Talele"
                    position="Dean, Student Affairs"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

                <Member
                    img={GS23}
                    name="Yug Harlalka"
                    position="General Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

                <Member
                    img={GS23}
                    name="Narendra Bhagat"
                    position="Head of Gymkhana"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />   
                                
                <Member
                    img={CS23}
                    name="Nikhil Motwani"
                    position="Cultural Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VCS23}
                    name="Anmol Khy"
                    position="Vice Cultural Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={FS23}
                    name="Shubh Shah"
                    position="Finance Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VFS23}
                    name="Riti Vakil"
                    position="Vice Finance Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={SS23}
                    name="Nikita Joby"
                    position="Sports Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VSS23}
                    name="Vinesh Nadar"
                    position="Vice Sports Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={TH23}
                    name="Vineet Mankani"
                    position="Technical Head"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={DTH23}
                    name="Ankit Mishra"
                    position="Deputy Technical Head"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={LR23}
                    name="Anushree Deshmukh"
                    position="Ladies Representative"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

            </div>

        </main>
            
        <hr className="text-white mx-5" />
        
        <main classname="team22">

            <h1 className="title text-white mb-3">TEAM of 2021-22</h1>
            <div className="projects row justify-content-evenly mt-4">
                                
                <Member
                    img={DA22}
                    name="Prof. Rita Das"
                    position="Dean, Student Affairs"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

                <Member
                    img={GS22}
                    name="Sumeet Haldipur"
                    position="General Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

                <Member
                    img={JS}
                    name="Prof. Jignesh Sisodia"
                    position="Head of _____"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />   
                                
                <Member
                    img={CS22}
                    name="Swaraj Salunke"
                    position="Cultural Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VCS22}
                    name="Nikhil Motwani"
                    position="Vice Cultural Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={FS22}
                    name="Abhishek Chopra"
                    position="Finance Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VFS22}
                    name="Harshita Jogi"
                    position="Vice Finance Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={SS22}
                    name="Darshan Somani"
                    position="Sports Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={VSS22}
                    name="Tanisha Kalathil"
                    position="Vice Sports Secretary"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={TH22}
                    name="Aayush Kawathekar"
                    position="Technical Head"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={DTH22}
                    name="Yug Harlalka"
                    position="Deputy Technical Head"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />
                                
                <Member
                    img={LR22}
                    name="Janhavi Dabhane"
                    position="Ladies Representative"
                    description="Hello guys lorem ipusm dolor sir yayo Hello guys lorem ipusm dolor sir yayo"                   
                    instagram="https://www.instagram.com/vineet.mankani"
                    linkedIn=""
                />

            </div>

        </main>

      </section>
    </>
  );
};

export default Team;

/* <div className="card p-card mx-xl-3 mb-5 p-0">
            <img src={props.img} className="card-img-top p-2 pb-0 img-fluid" alt={props.name}/>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{props.name}</h5>
                </div>
            </div>
            <div className="card-footer text-muted">{props.position}</div>
        </div> */