import React from 'react';

import Navbar from '../components/Navbar';
import './home.css';

// import Council_Logo from '../assets/home/Council_Logo_W.png';
import Council_Logo_R from '../assets/home/Counci_Logo_Right.png';

// const observer = new IntersectionObserver(e => {
//   e.forEach(e => {
//     console.log(e);
//     if(e.isIntersecting) e.target.classList.add('show');
//     else e.target.classList.remove('show');
//   })
// })

// const hiddenElms = document.querySelectorAll('.hidden');
// hiddenElms.forEach(el => observer.observe(el));

const Home = () => {
return (

<>
  <Navbar />

  <section id="home" className="">
      {/* <img src={SPIT_Entrance} className="SPIT_Entrance" alt="" /> */}
      
      <div className="img1 row justify-content-center align-items-center">
          <div className="col-5">
            <img src={Council_Logo_R} className="img-fluid hidden" alt="" />
            <h3 className="mt-4 text-white hidden">Sardar Patel Institute of Technology</h3>
          </div>
      </div>

      <article className="row justify-content-center align-items-center py-3 px-5">
        <div className="col-3">
          <h3 className="hidden">About Student's  Council S.P.I.T.</h3>
        </div>
        <div className="col-9">
          <p className="hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, sint dolores? Officiis officia provident ab! Illum ipsam totam illo excepturi sed, esse vitae asperiores. Minus cupiditate in sapiente, voluptatem fugiat molestiae blanditiis veniam unde eum fuga dicta, sint quisquam quidem ea. Ducimus, similique! Maxime esse adipisci incidunt harum possimus. Cum.</p>
        </div>
      </article>
      
      <div className="img2">
        <div className="text">Img 2 Text</div>
      </div>
      <article className="row justify-content-evenly align-items-center py-3">
        <div className="col-5">
          <h3>Mission</h3>
          <ul>
            <li className="text-start">Provide high quality education in engineering and technology promoting the Indian Values and Ethos that will prepare the participants to lead lives of personal integrity and civic responsibility in a global society.</li>
            <li className="text-start">Promote an Educational Environment that combines academic study with the excitement of intellectual curiosity for engineers of tomorrow.</li>
            <li className="text-start">Enhance career opportunities for students through Industry-Institute interaction, value-added courses and projects in cutting edge technology.</li>
            <li className="text-start">Inculcate Entrepreneurial mindset in students to make them job creators.</li>
            <li className="text-start">Focus on applied research to create next generation technologies.</li>
          </ul>
        </div>
        <div className="col-5">
          <h3>Vision</h3>
          <p>Keeping in view the growing and changing needs of Industry and society, we at S.P.I.T. are committed to creating an environment which will raise the intellectual and moral standards of our students. Our endeavor is to strive for the overall development of students, thereby enabling them to accept challenges. In tune with this our vision is To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.</p>
        </div>
      </article>

      <div className="img3">
        <div className="text">Img 23 Text</div>
      </div>
      <article>
        <h2>Section 3</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur animi deserunt ducimus non perspiciatis. Dolor earum amet praesentium officiis eligendi unde totam nihil ducimus, sit nisi deserunt, illo quae error, quaerat labore dolorem. Non corrupti iusto voluptatum? Officiis optio aut nesciunt explicabo sequi voluptatum libero reiciendis beatae soluta totam.</p>
      </article>

  </section>
</>
)
}

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