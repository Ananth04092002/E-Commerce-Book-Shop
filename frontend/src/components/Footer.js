import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="container-fluid text-light bg-primary d-flex justify-content-around p-3" style={{ height: 'auto' }}>
         {/* Following Section */}
         <div className="d-flex flex-column " style={{ width: '25%' }}>
          <h3>Follow Us On</h3>
          <ul className="list-unstyled">
            <li><i className="fa-brands fa-instagram mt-2"></i> <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" className="text-white">Instagram</a></li>
            <li><i className="fa-brands fa-facebook-f mt-4"></i> <a href="https://www.facebook.com/login.php/" target="_blank" className="text-white">Facebook</a></li>
            <li><i className="fa-brands fa-twitter mt-4"></i> <a href="https://x.com/i/flow/login" target="_blank" className="text-white">Twitter</a></li>
          </ul>
        </div>
        {/* Address Section */}
        <div className="d-flex flex-column" style={{ width: '25%' }}>
          <h3>Address</h3>
          <p className="mt-2"><i className="fa-solid fa-location-dot"></i> 22, 3rd Cross Street,<br />
            Vijaya Nagar, Velachery,<br />
            Chennai, Tamil Nadu -<br />
            600042
          </p>
          <p><i className="fa-solid fa-phone-volume"></i> +91 73976179</p>
          <p><i className="fa-regular fa-envelope"></i> Bookshop234@gmail.com</p>
        </div>
        {/* Google Map Section */}
        <div className="d-flex flex-column" style={{ width: '25%' }}>
          <h3>Google Map</h3>
          <iframe className="mt-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25958.41319361671!2d80.22226595002371!3d12.991830506285519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267891f335e13%3A0xad60d1ce4c5881c9!2sTharamani%2C%20Chennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1735185180533!5m2!1sen!2sin"
            width="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </footer>
    );
  }  