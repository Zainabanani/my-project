import React from "react";
import "../Styles/services.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import allura from "../assets/allura.png";
import mota from "../assets/mota.png";
import babyboy from "../assets/babyboy.png";
import smiledoctor from "../assets/smiledoctor.png";
import doki from "../assets/doki.png";
import pregnant from "../assets/pregnant.png";
import line from "../assets/line.png"

const Services = () => {
  return (
    <div>
      <Header />
      {/* background */}
      <div className="bg">
        <h3>Services</h3>
        <p> Lorem ipsum dolor sit amet consectetur. Ac tellus sed proin </p>
        <p> ullamcorper arcu ut eget augue. Fermentum eget id massa</p>
        <p> morbi risus.</p>
      </div>
      {/* first layer */}
      <div className="one daya">
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>
              COVID-19 Vaccine <br /> Administration
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"} />
            <h1>COVID-19 Vaccine Administration</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
         
        </div>
       
        <div className="vaccine-bottle">
          <img src={allura} alt={"mota"} />
        </div>
      </div>
       {/* second layer */}
       <div className="one haba">
       <div className="vaccine-bottle">
          <img src={mota} alt={"mota"}/>
        </div>
        
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>
             Ambulance
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"} />
            <h1>Ambulance</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
        </div>
       
       
      </div>
       {/* third layer */}
       <div className="one">
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>Gynecology </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"} />
            <h1>Gynecology</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
        </div>
       
        <div className="vaccine-bottle">
          <img src={pregnant} alt={"pregnant"}/>
        </div>
      </div>
       {/* fourth layer */}
       <div className="one haba">
       <div className="vaccine-bottle">
          <img src={babyboy} alt={"babyboy"}/>
        </div>
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>
            Paediatrics
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"}className="line"/>
            <h1>Paediatrics</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
        </div>
       
       
      </div>
       {/* fifth layer */}
       <div className="one">
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>
            Optometry
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"} />
            <h1>Optometry</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
        </div>
       
        <div className="vaccine-bottle">
          <img src={smiledoctor} alt={"smiledoctor"}/>
        </div>
      </div>
      {/* sixth layer */}
      <div className="one haba">
               
      <div className="vaccine-bottle">
          <img src={doki} alt={"doki"}/>
        </div>
        <div className="vaccine">
          <div className="mobile">
            <img src={line} alt={"line"} className="line"/>
            <h1>
            General Physician
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetur. Ullamcorper sodales</p>
            <p>utnetusamcorperquisque.Phasel</p>
            <p> lus lectus ut suspendisse tortor</p>
            <p> eget sit senectus.</p>
            <button>See Details</button>
          </div>
          <div className="laptop">
          <img src={line} alt={"line"} />
            <h1>General Physician</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales</p>
            <p> ut netus dictum tellus nunc ullamcorper quisque. Lectus in</p>
            <p> nisl viverra nisl faucibus. Id pharetra nisl a amet leo non</p>
            <p> mollis. Phasellus lectus ut suspendisse tortor eget sit</p>
            <p> senectus.</p>
            <button>See Details</button>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Services;
