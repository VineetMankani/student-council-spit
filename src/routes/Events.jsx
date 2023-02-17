import React from "react";

import Navbar from "../components/Navbar";
import "../style.css";
import "./events.css";

import FN23 from '../assets/events/2022-23/Freshers_Night_2k23.JPG';


function Event(props) {
    return (
        <>
            {/* <div className="round-1"></div>
        <div className="round-2"></div> */}
            <div className="events_box row col-9 mx-4 p-4 mb-5">
                <div className="col-6 events_img py-2">
                    <img src={props.img} alt={props.name} />
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


                    </div>

                </main>

                <main classname="events22">

                    <h1 className="title text-white mb-3">Events 2021-22</h1>
                    <div className="projects row justify-content-evenly mt-4">

                        <Event
                            img={FN23}
                            name="Teacher's Day 2022"
                            date="5 SEP, 2022"
                            desc="In the month of September, a Teacher's day celebration was held in the honor of all the faculty and staff members. This event saw multiple performances by the talented students of MUDRA succeeded by a game of Housie where the faculty and staff members competed for the prizes. "
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="Fresher's Night 2022"
                            date="Date Still to put up"
                            desc="The arrival of the FEs in the institute was acknowledged by organizing the Freshers party which has been one of the flagship events organized by the Students Council. The event consisted of a Mr. and Ms. Fresher pageant followed by a newly introduced musical battle in which the FEs formed bands among their branches. The FEs then entered into a branch wise dance competition that saw great participation from all FE students."
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="Agility 2022"
                            date="Date to be put up"
                            desc="Agility is the introductory sports event of the college. The competition consisted of a bunch of sports events for the students belonging to the institute. This was the first offline event conducted in over two years and saw a great participation from all the students present in the institute. Agility was organized by the Sports Committee, the sports wing of the Students’ Council and being the first offline event of the academic year, it created immense enthusiasm amongst the students."
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="FE Induction (Batch 2025)"
                            date="Date to be put up"
                            desc="Being exposed to 2 years of online academics, the students were quite worried regarding how they would start interacting with their fellow batchmates. All their doubts regarding this issue were soon cleared as the Students’ Council in collaboration with the team of Oculus S.P.I.T., the annual techno-cultural fest of S.P.I.T., organized an induction session for these students that consisted of a great many icebreaker activities in an effort to initiate the bonding process among the newly entered students and kickstart their college journey. The students engaged in riveting discussions on various topics amassing sports, anime, movies, technology etc.."
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="S.P.I.T. Hackathon"
                            date="Date to be put up"
                            desc="The S.P.I.T. hackathon, took place in the month of January. Owing to the restrictions imposed due the pandemic, the hackathon took place in an online mode. The 24 hour hackathon saw great response from people participating from all over the country with about 150 teams participating in the event. The event saw the introduction of 3 new prizes: Best beginner’s Hack, Best UI/UX Design and Best Pitch"
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="SPoorthi"
                            date="Date to be put up"
                            desc="The annual Sports festival of S.P.I.T., SPoorthi, amassed an astounding number of responses. Participants from all over Maharashtra participated in various sports events in large numbers. The fest consisted of various events ranging from football to kabaddi and also saw the inclusion of indoor events such as carrom, chess and table tennis. To increase the female participation in these sports events, many events were organized solely for girls and saw a great response as they participated in huge numbers with great enthusiasm. The fest was influential in bringing out the qualities of leadership, sportsmanship and team spirit among the participants."
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="SPirit"
                            date="Date to be put up"
                            desc="In an effort to increase the synergy between the students and their respective branch mates as well as to increase the students attachment to the institute, the Students Council organized S.P.I.T. 's first ever inter branch championship, SPirit.
                            This championship was spread out over the span of a few months and included events pertaining to the domains of Technology, Cultural and Sports. Students belonging to all branches eagerly participated in this newly introduced championship to fight for the glory of their respective branches.
                           "
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="Annual Day"
                            date="Date to be put up"
                            desc="Sardar Patel Institute of Technology hosted its Annual Day in the month of April. This event was graced by the presence of esteemed guests like Mr. Nilesh Dungarwal (Co-founder, WorkIndia), Mr. Santosh Patil (SVP, Citiustech), Mrs. Mohini Palchowdhury (Head HR, Quantiphi), Mr. Vikas Kakwani (Founder, Aas Vidyalaya) and Mrs. Leena Kakwani (Co-founder, Aas Vidyalaya). The annual report was presented by the General Secretary, Mr. Sumeet Haldipur, who later encouraged the students to take up positions of responsibility within the Students' Council in the coming year. This event saw the felicitation of various students as they were presented with multiple awards and certificates for their exceptional achievements in academic and  extracurricular activities."
                            link="https://www.instagram.com/vineet.mankani"
                        />

                        <Event
                            img={FN23}
                            name="BE Farewell"
                            date="Date to be put up"
                            desc="The month of June saw the execution of the BE Farewell where the final year students shared laughs and tears one last time as they hung their college robes and commenced their journey into the great big world. This event was made interesting by asking the students to write confessions regarding their life in S.P.I.T. in the past 4 years. The event was also marked by a plethora of fun games and an award ceremony where awards such as the Notes Devta Award and the Phooti Kismat Award were given to the people who were voted by their batchmates. The event ended with a DJ night where the BEs danced their hearts out on the campus for a final time."
                            link="https://www.instagram.com/vineet.mankani"
                        />


                    </div>

                </main>


            </section>
        </>
    );
};

export default Events;