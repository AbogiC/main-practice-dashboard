import Carousel from "react-bootstrap/Carousel";

import BtsPic from "../assets/img/bts.jpg";
import PhonePic from "../assets/img/phone.jpg";
import WorktabPic from "../assets/img/worktab.jpg";

function CarouselsAction() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={BtsPic} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={PhonePic} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={WorktabPic} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsAction;
