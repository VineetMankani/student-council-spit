import React from "react";
import Navbar from "../components/Navbar";
import "../style.css";

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
                {/* <div className="events_btn">
                    <a href={props.link} target="_blank" rel="noreferrer" className="mx-2 px-3 py-2">
                        <span className="text-white">Links</span>
                    </a>
                </div> */}
            </div>
        </div>
    </>
        
    )
}

const Events = () => {
  return (
    <>
    

      <Navbar />
        
      <section id="" className="mainSection">
            
      <main classname="events23">

        <h1 className="title mb-3">EVENTS 2022-23</h1>
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

        <h1 className="title text-white mb-3">EVENTS 2021-22</h1>
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