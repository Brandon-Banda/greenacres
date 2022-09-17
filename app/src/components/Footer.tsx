import './Footer.css';

function Footer() {
  return (
    <div className="box">
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="heading">About Us</div>
            <a href="#">Aim</a>
            <a href="#">Vision</a>
            <a href="#">Testimonials</a>
          </div>
          <div className="column">
            <div className="heading">Services</div>
            <a href="#">Writing</a>
            <a href="#">Internships</a>
            <a href="#">Coding</a>
            <a href="#">Teaching</a>
          </div>
          <div className="column">
            <div className="heading">Contact Us</div>
            <a href="#">Uttar Pradesh</a>
            <a href="#">Ahemdabad</a>
            <a href="#">Indore</a>
            <a href="#">Mumbai</a>
          </div>
          <div className="column">
            <div className="heading">Social Media</div>
            <a href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </a>
            <a href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
