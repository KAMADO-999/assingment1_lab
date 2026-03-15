import React from 'react';
import { Phone, Mail, User, Info } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-panel">

        <div className="left-section">
          <h2>Welcome to United Group Of Institutions</h2>
          <p>
            The United Group, founded by late Shri Shiv Ram Das Gulati in 1951 emerged from a transport business to the giants in the fields of education, services, transportation and journalism. The group made a mammoth leap in the education arena in the mid 80s by being the pioneers in computer education.
          </p>
          <p>
            Now, with 08 well established institutes in Allahabad and Greater Noida, over 11200 students and more than 750 faculty members, the United Group of Institutions is poised to reach the next level providing the best technical education. Our establishment offers NBA accredited courses, Quality recognised by the World Bank and boasts of more than 14000 alumni base. Our placement scenario is booming with over 11400 jobs already offered......
          </p>

          <div className="details-link">
            <span>For More Details</span>
            <button className="click-here-btn">Click Here..</button>
          </div>

          <div className="support-section">
            <p>For any support queries please contact us at:</p>
            <div className="contact-info">
              <span><Phone size={16} /> 1800 3131 808, </span>
              <span className="email"><Mail size={16} /> info@united.ac.in (Prayagraj)</span>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="logo-area">
            <h1><span className="logo-green">i</span>Campus</h1>
            <span className="logo-subtext">A complete solution for educational institutions</span>
            <div className="erp-badge">
              <span className="erp-text">ERP</span>
              <div className="hat-icon">🎓</div>
            </div>
          </div>

          <div className="login-buttons">
            <button className="btn-student-login">
              <User size={20} /> Student Login
            </button>
            <button className="btn-new-registration">
              <div className="reg-text"><span className="r-icon">R</span> New Registration</div>
              <div className="reg-subtext"><Info size={14} /> For newly admitted students only</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
