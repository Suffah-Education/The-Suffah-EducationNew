import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const AboutSection = () => {
  const [aboutRef, isVisible] = useIntersectionObserver();
  const scrollRef = useRef(null);

  const reviews = [
    { name: "Aisha Khan", text: "Alhamdulillah! The Suffah Education has truly changed how I learn Qur’an online." },
    { name: "Ahmed Raza", text: "Best Islamic education platform. Teachers are humble and knowledgeable." },
    { name: "Fatima Zahra", text: "Mashallah! Very professional teaching with proper Tajweed guidance." },
    { name: "Mohammed Ali", text: "My children love learning here. Classes are interactive and fun." },
    { name: "Sara Malik", text: "Highly recommended! Authentic Islamic knowledge with a modern approach." },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0;
        scrollContainer.scrollLeft = scrollAmount;
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap');
        .about-section {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          color: #333;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .section-badge {
          color: #00bfff;
          font-weight: 600;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .content-placeholder h4 {
          font-weight: 400;
          line-height: 1.7;
        }

        /* 🌟 Full-width Review Section */
        .review-wrapper {
          margin-top: 50px;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background: #f8f9fa;
          overflow: hidden;
          padding: 30px 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
 
        .review-heading {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: #007bff;
        margin-bottom: 25px;
        letter-spacing: 1px;
        }

        .review-track {
          display: flex;
          width: max-content;
          gap: 25px;
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .review-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          width: 280px;
          flex-shrink: 0;
          box-shadow: 0 1px 6px rgba(0,0,0,0.1);
        }

        .review-name {
          font-weight: 700;
          color: #007bff;
          font-size: 16px;
          margin-bottom: 8px;
        }

        .review-text {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .review-card {
            width: 220px;
          }
        }
  .urdu-heading {
  font-weight: 700;
  font-size: 20px;
  color: #007bff;
  margin-top: -15px; /* 🔼 Moves heading slightly up */
  display: inline-block;
}

.urdu-paragraph {
  text-align: right;
  direction: rtl;
  font-size: 17px;
  line-height: 2.1;
  word-spacing: 2px;
  margin-top: 0; /* ↓ removes extra space below heading */
  font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'Noto Sans Arabic', serif;
  color: #222;
}


        /* 🕌 Urdu visual adjustments */
.visual-placeholder {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: -20px; /* 🔼 Moves the icon and Urdu text slightly up */
}

.placeholder-icon {
  font-size: 48px;
  margin-bottom: 10px;
  transform: translateY(-10px); /* Slight upward shift */
}

/* ⭐ Review Section — make it look larger and more spaced */
.review-wrapper {
  margin-top: 80px; /* extra spacing from content above */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #f8f9fa;
  overflow: hidden;
  padding: 60px 0; /* 🔼 increased padding for more breathing space */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.review-heading {
  text-align: center;
  font-size: 32px; /* bigger heading */
  font-weight: 800;
  color: #007bff;
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.review-card {
  background: white;
  border-radius: 16px;
  padding: 25px;
  width: 320px; /* 🔼 bigger cards */
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.review-card:hover {
  transform: translateY(-5px); /* 🌟 small hover effect */
}

      `}</style>

      <div className="container">
        <div className="about-grid">
          {/* English Section */}
          <div className={`about-content ${isVisible ? "animate" : ""}`}>
            <span className="section-badge">About The Suffah Education</span>
            <h2 className="section-title">Our Story & Mission</h2>
            <div className="content-placeholder">
              <h4>
                The Suffah Education is a religious and educational institution established to promote Islamic teachings in the
                light of the Qur’an and Sunnah. Its purpose is to awaken Islamic awareness among children, youth, and adults
                of the Muslim Ummah, to spread the understanding of the Holy Qur’an, and to present Islamic knowledge in
                a modern and accessible way. <br /><br />
                The Suffah Education is also an online platform created to spread Islamic knowledge to every corner of the
                world. Here, qualified scholars (Ulama) conduct live classes that include the teaching of Qur’an with Tajweed,
                Noorani Qaida, Hadith, Seerah of Prophet Muhammad ﷺ, lives of Sahabah, and Islamic history. <br /><br />
                Our mission is to nurture individuals who are righteous in character, sincere in faith, and active in spreading
                the message of Islam through both knowledge and practice.
              </h4>
            </div>
          </div>

        {/* Urdu Section */}
        <div className={`about-visual ${isVisible ? "animate" : ""}`}>
        <div className="visual-placeholder">
        <div className="placeholder-icon">🏛️</div>
        <p className="urdu-paragraph">
      <span className="urdu-heading">الصفہ کا تعارف:</span><br />
      الصفہ ایک دینی و تعلیمی ادارہ ہے جو قرآن و سنت کی روشنی میں اسلامی تعلیمات کے فروغ کے لیے قائم کیا گیا ہے۔
      اس کا مقصد امت مسلمہ کے بچوں، نوجوانوں اور بڑوں میں دینی شعور بیدار کرنا، قرآن مجید کی تعلیم و تفہیم عام کرنا،
      اور اسلامی علوم کو جدید انداز میں پیش کرنا ہے۔ الصفہ ایک آن لائن پلیٹ فارم بھی ہے جو دنیا کے ہر کونے میں اسلامی علم
      کو عام کرنے کے لیے بنایا گیا ہے۔ یہاں علماء کرام براہ راست (Live) کلاسز لیتے ہیں جن میں قرآن مجید مع تجوید،
      نورانی قاعدہ، حدیث، سیرت النبی ﷺ، صحابہ کرام رضی اللہ عنہم کی زندگیاں اور اسلامی تاریخ کی تعلیم دی جاتی ہے۔
    </p>
     </div>
      </div>
        </div>
      </div>

     {/* ⭐ Full-width Review Section Below Both */}
<div className="review-wrapper">
  <h2 className="review-heading">🌟 Reviews 🌟</h2>
  <div className="review-track" ref={scrollRef}>
    {[...reviews, ...reviews].map((review, index) => (
      <div className="review-card" key={index}>
        <div className="review-name">{review.name}</div>
        <div className="review-text">"{review.text}"</div>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default AboutSection;
