import React from 'react';

const FacultiesSection = () => {
  const faculties = [
    {
      id: 1,
      name: "Hafiz Sayyed Mohammad Musaib ",
      designation: "Aalim",
  image: "/images/musaib(1).JPG",
      experience: "8 years",
      email: "mohammad.Musaib@institute.suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/Mohammadwase",
      specialization: "Qaida ",
      graduated: 33,
      achievements: ["15 students completed Quran", "18 Students Completed Qaida"]
    },
    {
      id: 2,
      name: " Hafiz Musaddik khan Pathan ",
      designation: "Hafiz,Aalim, Mufti",
  image: "/images/musaddik.jpeg",
      experience: "5 years",
      email: "Musaddik.Khan@institute.Suffah",
      phone: "⭐⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/Musaddikkhan",
      specialization: "Qaida,Nazera,",
      graduated: 300,
      achievements: ["200 students completed Qaida", "100 students completed Quran"]
    },
    {
      id: 3,
      name: "Hafiz Muzamil khan Pathan ",
      designation: "Aalim,Hafiz",
  image: "/images/muzammil.jpeg",
      experience: "4 years",
      email: "Muzamil.Khan@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/vikrampatel",
      specialization: "Qaida,Nazera",
      graduated: 46,
      achievements: ["40 Students Completed  Qaida ", "6 students Completed Quran"]
    },
    {
      id: 4,
      name: "Hafiz Pathan Mudassir  khan ",
      designation: "Aalim,hafiz",
  image: "/images/mudassir.jpeg",
      experience: "5 years",
      email: "Mudassir.Khan@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/priyadesai",
      specialization: "Qaida,Nazera",
      graduated: 50,
      achievements: ["40 Students Completed Qaida", "10 students Completed Quran"]
    },
    {
      id: 5,
      name: "Syed Muhsin syed Yusuf",
      designation: "AAlim",
  image: "/images/muhsin.jpeg",
      experience: "6 years",
      email: "Syed.Syed@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/amitverma",
      specialization: "Qaida,Nazera",
      graduated: 130,
      achievements: ["80 Students Completed Qaida", "50 Students Completed Quran"]
    },
    {
      id: 6,
      name: "sayyed Ayesha fatema",
      designation: "Hafiza, Aalima",
  image: "/images/F1.webp",
      experience: "12 years",
      email: "Ayesha.Sayyed@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/snehareddy",
      specialization: "Qaida,nazera",
      graduated: 290,
      achievements: ["210 students completed Qaida", "*0 Students completed Quran"]
    },
    {
      id: 7,
      name: "Momin Khatija Ayyub",
      designation: "Aalima",
  image: "/images/F2.webp",
      experience: "20 years",
      email: "Khatija.momin@institute.edu",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/arunmehta",
      specialization: "Qaida",
      graduated: 45,
      achievements: ["45 students completed Qaida"]
    },
    {
      id: 8,
      name: "Maulana A. Rashid Alamgiri ",
      designation: "Hafiz,Aalim",
  image: "/images/Rashid.jpeg",
      experience: "15 years",
      email: "Rashid.Alamgir@institute.suffah",
      phone: "⭐⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/kavitasingh",
      specialization: "Qaida,Nazera,",
      graduated: 500,
      achievements: ["500 students Completed Qaida And Nazera"]
    },
    {
      id: 9,
      name: "Hafiz Aadil Khan Pathan",
      designation: "Aalim",
  image: "/images/F2.webp",
      experience: "21 years",
      email: "Aadil.Khan@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/sandeepjoshi",
      specialization: "Qaida,Nazera",
      graduated: 150,
      achievements: ["(90 Students Completed Qaida", "60 Students Completed Quran"]
    },
    {
      id: 10,
      name: "Hafiz Umar Sayyed ",
      designation: "aalim,Hafiz",
  image: "/images/F2.webp",
      experience: "13 years",
      email: "Umar.Sayyed@institute.Suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/meeranair",
      specialization: "Qaida,Nazera",
      graduated: 310,
      achievements: ["210 Students Completed qaida", "100 Students Completed quran"]
    }
  ];

  return (
    <section id="faculties" className="faculties-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">Meet Our Expert Faculty</h2>
          <p className="section-subtitle">Learn from industry leaders and academic experts</p>
        </div>

        <div className="faculty-list">
          {faculties.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="faculty-card-content">
                <div className="faculty-image-wrapper">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="faculty-image"
                  />
                </div>

                <div className="faculty-info">
                  <div className="faculty-header">
                    <div className="faculty-name-section">
                      <h3 className="faculty-name">{faculty.name}</h3>
                      <p className="faculty-designation">{faculty.designation}</p>
                      <p className="faculty-specialization">
                        <span className="icon">📚</span>
                        {faculty.specialization}
                      </p>
                    </div>
                    <div className="faculty-experience-badge">
                      <span className="icon">🏆</span>
                      <span>{faculty.experience}</span>
                    </div>
                  </div>

                  <div className="faculty-stats">
                    <div className="stat-badge graduates-badge">
                      <span className="icon">👥</span>
                      <span>
                        <strong>{faculty.graduated}</strong> Graduates
                      </span>
                    </div>
                    {faculty.achievements.map((achievement, idx) => (
                      <div key={idx} className="stat-badge achievement-badge">
                        <span className="icon">⭐</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="faculty-contact">
                    <a href={`mailto:${faculty.email}`} className="contact-link">
                      <span className="icon">✉️</span>
                      <span>{faculty.email}</span>
                    </a>
                    <a href={`tel:${faculty.phone}`} className="contact-link">
                      <span className="icon">🌟</span>
                      <span>{faculty.phone}</span>
                    </a>
                    <a
                      href={`https://${faculty.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      <span className="icon">💼</span>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faculty-cta">
          <h3 className="cta-title">Want to Learn From These Experts?</h3>
          <p className="cta-subtitle">
            Join our institution and get mentored by the best in the industry
          </p>
          <button className="cta-button">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default FacultiesSection;