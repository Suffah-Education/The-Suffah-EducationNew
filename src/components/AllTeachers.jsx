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
