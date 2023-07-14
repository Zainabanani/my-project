import React from "react";
import "../Styles/covid.css";
import vaccine from "../assets/vaccine.png";

const Covid = () => {
  return (
    <div className="main-covid">
      <div className="covid-container">
        <div>
          <img src={vaccine} alt={"vaccine"} />
        </div>
        <div className="vaccine-admin">
          <h2>COVID-19 VACCINE ADMINISTRATION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum massa feugiat feugiat
            mauris ipsum risus. Vulputate elit vel dui fames auctor ultrices.
            Quis pellentesque amet massa sed purus adipiscing. Ornare faucibus
            sed id scelerisque odio habitant urna in nibh. Gravida nulla elit
            arcu scelerisque. Viverra lectus ullamcorper duis sed leo habitasse.
            Ac venenatis eget lacinia netus eros amet nunc. Vitae blandit nunc
            velit pretium et vitae morbi consequat. Id mi amet dui non leo
            tellus nunc pulvinar. Tortor in justo a in egestas proin ipsum.
            Lectus ut lobortis quam egestas consequat et aliquet ipsum vel.
            Risus eu pharetra cras gravida. Nunc in eget semper maecenas ligula
            amet et. Mattis ullamcorper amet at metus. Diam pretium pulvinar
            mattis rutrum nunc risus. Ut ipsum duis egestas non. Dictum nunc
            sodales nisi senectus adipiscing feugiat. Sed arcu pellentesque urna
            dolor ultrices condimentum risus. Interdum morbi mauris in a morbi
            felis tincidunt. Aenean enim sed pellentesque arcu. Lorem posuere
            elit est in interdum tempus.
          </p>
          <button type="submit">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Covid;
