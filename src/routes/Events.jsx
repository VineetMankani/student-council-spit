import React from "react";

import Navbar from "../components/Navbar";
import "../style.css";
import "./events.css";

import FN23    from '../assets/events/2022-23/Freshers_Night_2k23.JPG';


function Event(props){
    return(
        <>
        {/* <div className="round-1"></div>
        <div className="round-2"></div> */}
        <div className="events_box row col-9 mx-4 p-4 mb-5">
            <div className="col-6 events_img py-2">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="col-6 px-4">
                <h1 className="events_name text-white p-0 mb-0 mt-4">{props.name}</h1>
                <h4 className="events_date text-light mb-3">{props.date}</h4>
                <p className="events_desc mb-4">{props.desc}</p>
                <div className="events_btn">
                    <a href={props.link} target="_blank" rel="noreferrer" className="mx-2 px-3 py-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-instagram me-2" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg> */}
                        <span className="text-white">Links</span>
                    </a>
                </div>
            </div>
        </div>
    </>
        
    )
}

const Events = () => {
  return (
    <>
      <Navbar />

      <section id="events" className="">
            
      <main classname="events23">

        <h1 className="title text-white mb-3">Events 2022-23</h1>
        <div className="projects row justify-content-evenly mt-4">
                            
            <Event
                img={FN23}
                name="S.P.I.T. Hackathon"
                date="4 & 5 FEB, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />   
                            
            <Event
                img={FN23}
                name="Fresher's Night 2k23"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="Garba Night 2k23"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="FE Induction (Batch 2026)"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="Teacher's Day 2k22"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                        

        </div>

        </main>

      <main classname="events22">

        <h1 className="title text-white mb-3">Events 2021-22</h1>
        <div className="projects row justify-content-evenly mt-4">
                            
            <Event
                img={FN23}
                name="Fresher's Night 2k23"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="Garba Night 2k23"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="FE Induction (Batch 2026)"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                            
            <Event
                img={FN23}
                name="Teacher's Day 2k22"
                date="25 JAN, 2023"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate aperiam nihil impedit architecto ea, odio quasi mollitia ipsum, consequatur atque quaerat veniam blanditiis porro ut, veritatis vel. A, pariatur reprehenderit. Eligendi laborum molestiae dolores consectetur quia at quo rerum voluptates animi, voluptatem laudantium culpa animi, voluptatem laudantium culpa."                   
                link="https://www.instagram.com/vineet.mankani"
            />
                        

        </div>

        </main>


      </section>
    </>
  );
};

export default Events;