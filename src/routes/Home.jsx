import React from "react";
import Navbar from "../components/Navbar";
import "../style.css";
// import "./home.js";

import FN23    from '../assets/events/2022-23/Freshers_Night_2k23.JPG';

const observer = new IntersectionObserver(es => {
  es.forEach(e => {
    console.log(e);
    if(e.isIntersecting) e.target.classList.add('show');
    else e.target.classList.remove('show');
  })
})

let hiddenElms = document.querySelectorAll('.hidden');
hiddenElms.forEach(el => observer.observe(el));


function Home_Event(props){
  return(
      <>
      <div className="events_box col-3 mx-2 px-4 py-4 mb-5">
          <div className="events_img"><img src={props.img} alt={props.name}/></div>
          <h2 className="events_name  text-white p-0 mb-0 mt-4">{props.name}</h2>
          <h4 className="events_date text-center text-info mb-2">{props.date}</h4>
          <q className="events_desc text-center mb-4">{props.desc}</q>
          {/* <div className="events_btn mt-4">
              <a href={props.link} target="_blank" rel="noreferrer" className="mx-2 px-3 py-2">
                  <span className="text-white">More..</span>
              </a>
          </div> */}
      </div>
  </>
      
  )
}


// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;

// document.querySelector(".stuco").onmouseover = event => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");

//     if(iteration >= event.target.dataset.value.length){
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// }

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home" className="">
        {/* <img src={SPIT_Entrance} className="SPIT_Entrance" alt="" /> */}

        <div className="a75 row justify-content-center align-items-center">
            <div className="col-5">
              {/* <img src={Council_Logo_R} className="img-fluid hidden pt-5" alt="" /> */}
              <div data-value="STUDENT COUNCIL" className="home_title pt-5">STUDENT<br/>COUNCIL</div>
              <h3 data-value="Sardar Patel Institute of Technology" className="mt-4 text-white spit">Sardar Patel Institute of Technology</h3>
            </div>
        </div>

        <div className="b25"></div>

        <div className="c40">
          <div className="container">
            <h2 className="text-white">About Student's Council S.P.I.T.</h2>
            <p className="mx-5 hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sint dolores? Officiis officia provident ab! Illum ipsam totam
              illo excepturi sed, esse vitae asperiores. Minus cupiditate in
              sapiente, voluptatem fugiat molestiae blanditiis veniam unde eum
              fuga dicta, sint quisquam quidem ea. Ducimus, similique! Maxime
              esse adipisci incidunt harum possimus. Cum.
            </p>
          </div>
        </div>
        



        <div className="d100 mainSection">
          <h2 className="title">RECENT EVENTS</h2>
          <div className="events row justify-content-evenly mt-4">                 
              <Home_Event
                  img={FN23}
                  name="S.P.I.T. Hackathon"
                  date="4 & 5 FEB, 2023"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate."                   
                  link="https://www.instagram.com/vineet.mankani"
              />   
                              
              <Home_Event
                  img={FN23}
                  name="Fresher's Night"
                  date="25 JAN, 2023"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate."                   
                  link="https://www.instagram.com/vineet.mankani"
              />
                              
              <Home_Event
                  img={FN23}
                  name="Garba Night"
                  date="25 JAN, 2023"
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis molestias eveniet eos vitae cupiditate."                   
                  link="https://www.instagram.com/vineet.mankani"
              />
          </div>
          <p className="btn">
              <a href="./events" target="_blank" rel="noreferrer" className="mx-2">
                  <span>More Events</span>
              </a>
          </p>
        </div>




        <div className="e60 mainSection row justify-content-center align-items-center">
          <h2 className="title">FIND US</h2>
          <div className="row mx-5">
            <div className="col-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.646049226284!2d72.83392671469824!3d19.123177587060844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d90e067ba9%3A0x16268e5d6bca2e6a!2sBharatiya%20Vidya%20Bhavan&#39;s%20Sardar%20Patel%20Institute%20of%20Technology%20(SPIT)!5e0!3m2!1sen!2sin!4v1676825862517!5m2!1sen!2sin" width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-6">
              <div className="address">
                Sardar Patel Institute of Technology,
                <br/>Bhavan's Campus, Munshi Nagar,
                <br/>Andheri West, Mumbai - 400 058
                <br/>Email: studentcouncilspit@gmail.com
              </div>

              <div className="social">
                <a target="_blank" className="ex mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-globe2" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/></svg>
                    {/* <span className="text-white">Website</span> */}
                </a>
                <a target="_blank" className="mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg>
                    {/* <span className="text-white">Email</span> */}
                </a>
                <a  target="_blank" className="ex mx-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                    {/* <span className="text-white">Instagram</span> */}
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;

/* <section id="home" className="">
  <div className="container mt-3">
    <div className="row my-5 align-items-center">
      <div className="col-6"><img src="https://picsum.photos/300/200" className="" alt="" /></div>
      <div className="col-6">
        <h3>Why Reading is Important?</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quis ipsa, facilis vero nisi optio eaque, aut ratione repudiandae sapiente, dolorem inventore. Sunt voluptates esse repellendus nobis dolorem id, quis consequuntur repudiandae ut deleniti quidem optio mollitia maxime molestiae, veritatis laboriosam autem omnis explicabo reiciendis assumenda rem fuga, cupiditate sed. Neque, in illum inventore assumenda vitae velit laborum eveniet quidem ipsum ducimus quas molestiae atque sunt totam cupiditate ea! Quas sapiente iste iure numquam dolorum porro fuga. </p>
      </div>
    </div>
    <div className="row mt-5 align-items-center">
      <div className="col-6">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ullam quis ipsa, facilis vero nisi optio eaque, aut ratione repudiandae sapiente, dolorem inventore. Sunt voluptates esse repellendus nobis dolorem id, quis consequuntur repudiandae ut deleniti quidem optio mollitia maxime molestiae, veritatis laboriosam autem omnis explicabo reiciendis assumenda rem fuga, cupiditate sed. Neque, in illum inventore assumenda vitae velit laborum eveniet quidem ipsum ducimus quas molestiae atque sunt totam cupiditate ea! Quas sapiente iste iure numquam dolorum porro fuga. </p>
      </div>
      <div className="col-6"><img src="https://picsum.photos/300/200" className="" alt="" /></div>
    </div>
  </div>
</section> */

/* <div className="img1 row align-items-center justify-content-center">
        <div className="col-6 mx-5">
          <img src={Council_Logo_R} className="img-fluid" alt="" />
        </div>
    </div> */
