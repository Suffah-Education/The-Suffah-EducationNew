import React from "react";

const AllTeachers = () => {
  const teachers = [
    {
      name: "Hafiz Sayyed Mohammad Musaib",
      designation: "Aalim",
      experience: "8 years",
      specialization: "Qaida",
      graduated: 33,
      achievements: [
        "15 students completed Quran",
        "18 Students Completed Qaida",
      ],
      image: "/images/musaib(1).JPG",
    },
    {
      name: "Hafiz Musaddik Khan Pathan",
      designation: "Mufti, Aalim, Hafiz",
      experience: "5 years",
      specialization: "Qaida, Nazera",
      graduated: 300,
      achievements: [
        "200 students completed Qaida",
        "100 students completed Quran",
      ],
      image: "/images/musaddik.jpeg",
    },
    {
      name: "Hafiz Muzamil khan Pathan",
      designation: " Aalim, Hafiz",
      experience: "4 years",
      specialization: "Qaida, Nazera",
      graduated: 46,
      achievements: [
        "40 students completed Qaida",
        "6 students completed Quran",
      ],
      image: "/images/muzammil.jpeg",
    },
     {
      name: "Hafiz Pathan Mudassir  khan ",
      designation: "Aalim,hafiz",
      experience: "5 years",
      specialization: "Qaida, Nazera",
      graduated: 50,
      achievements: [
        "40 students completed Qaida",
        "10 students completed Quran",
      ],
      image: "/images/mudassir.jpeg",
    },
     {
      name: "Syed Muhsin syed Yusuf",
      designation: " Aalim",
      experience: "6 years",
      specialization: "Qaida, Nazera",
      graduated: 130,
      achievements: [
        "80 students completed Qaida",
        "50 students completed Quran",
      ],
      image: "/images/muhsin.jpeg",
    },
     {
      name: "Maulana A. Rashid Alamgiri",
      designation: " Aalim, Hafiz",
      experience: "15 years",
      specialization: "Qaida, Nazera",
      graduated: 500,
      achievements: [
        "500 students completed Qaida and Nazera", 
        
      ],
      image: "/images/Rashid.jpeg",
    },
    {
      name: "sayyed Ayesha fatema",
      designation: " Aalima, Hafiza",
      experience: "12 years",
      specialization: "Qaida, Nazera",
      graduated: 290,
      achievements: [
        "210 students completed Qaida ",
        "80 students completed Quran ",  
        
      ],
      image: "/images/F1.webp",
    },
    // ...baaki teachers yahan add kar lo
  ];

  return (
    <section className="faculties-section all-teachers-page">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">All Teachers</span>
          <h2 className="section-title">The Suffah Education Faculty</h2>
          <p className="section-subtitle">
            Meet all our dedicated Ustaads and Ustaadhas spreading the light of Qur’an & Sunnah 🌙
          </p>
        </div>

        <div className="faculty-list">
          {teachers.map((t, i) => (
            <div key={i} className="faculty-card">
              <div className="faculty-card-content">
                <div className="faculty-image-wrapper">
                  <img src={t.image} alt={t.name} className="faculty-image" />
                </div>
                <div className="faculty-info">
                  <h3 className="faculty-name">{t.name}</h3>
                  <p className="faculty-designation">{t.designation}</p>
                  <p className="faculty-specialization">
                    <span className="icon">📚</span> {t.specialization}
                  </p>
                  <div className="faculty-stats">
                    <div className="stat-badge graduates-badge">
                      <span className="icon">👥</span>
                      <span>
                        <strong>{t.graduated}</strong> Graduates
                      </span>
                    </div>
                    {t.achievements.map((ach, idx) => (
                      <div key={idx} className="stat-badge achievement-badge">
                        <span className="icon">⭐</span> <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTeachers;
