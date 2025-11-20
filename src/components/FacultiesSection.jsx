import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FacultiesSection = () => {
  const { t } = useTranslation();

  const faculties = [
    {
      id: 1,
      name: "Hafiz Sayyed Mohammad Musaib",
      designation: "Aalim",
      image: "/images/musaib(1).JPG",
      experience: "8 years",
      email: "mohammad.Musaib@institute.suffah",
      phone: "⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/Mohammadwase",
      specialization: "Qaida",
      graduated: 33,
      achievements: [
        "15 students completed Quran",
        "18 Students Completed Qaida",
      ],
    },
    {
      id: 2,
      name: "Hafiz Musaddik khan Pathan",
      designation: "Hafiz, Aalim, Mufti",
      image: "/images/musaddik.jpeg",
      experience: "5 years",
      email: "Musaddik.Khan@institute.Suffah",
      phone: "⭐⭐⭐⭐⭐",
      linkedin: "linkedin.com/in/Musaddikkhan",
      specialization: "Qaida, Nazera",
      graduated: 300,
      achievements: [
        "200 students completed Qaida",
        "100 students completed Quran",
      ],
    },
    // ...remaining teachers (same)
  ];

  return (
    <section id="faculties" className="faculties-section">
      <div className="container">

        {/* HEADER */}
        <div className="section-header">
          <span className="section-badge">{t("facultyBadge")}</span>
          <h2 className="section-title">{t("facultyTitle")}</h2>
          <p className="section-subtitle">{t("facultySubtitle")}</p>
        </div>

        {/* FACULTY LIST */}
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

                  {/* STATS */}
                  <div className="faculty-stats">
                    <div className="stat-badge graduates-badge">
                      <span className="icon">👥</span>
                      <span>
                        <strong>{faculty.graduated}</strong> {t("graduates")}
                      </span>
                    </div>

                    {faculty.achievements.map((achievement, idx) => (
                      <div key={idx} className="stat-badge achievement-badge">
                        <span className="icon">⭐</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* CONTACT */}
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
                      <span>{t("linkedin")}</span>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* BUTTON */}
          <div className="all-teachers-btn-wrapper" style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/all-teachers" className="all-teachers-btn">
              {t("viewAllTeachers")} →
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="faculty-cta">
          <h3 className="cta-title">{t("ctaFacultyTitle")}</h3>
          <p className="cta-subtitle">{t("ctaFacultySubtitle")}</p>
          <button className="cta-button">{t("applyNow")}</button>
        </div>

      </div>
    </section>
  );
};

export default FacultiesSection;
