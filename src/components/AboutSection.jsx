import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutSection = () => {
  const [aboutRef, isVisible] = useIntersectionObserver();
  
  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="container">
        <div className="about-grid">
          <div className={`about-content ${isVisible ? 'animate' : ''}`}>
            <span className="section-badge">About The Suffah Education</span>
            <h2 className="section-title">Our Story & Mission</h2>
            <div className="content-placeholder">
              <div className="placeholder-text">
                <h4>The Suffah Education is a religious and educational institution established to promote Islamic teachings in the
light of the Qur’an and Sunnah. Its purpose is to awaken Islamic awareness among children, youth, and adults
of the Muslim Ummah, to spread the understanding of the Holy Qur’an, and to present Islamic knowledge in
a modern and accessible way.
The Suffah Education is also an online platform created to spread Islamic knowledge to every corner of the
world. Here, qualified scholars (Ulama) conduct live classes that include the teaching of Qur’an with Tajweed,
Noorani Qaida, the complete rules of Tajweed, Hadith, the Seerah of Prophet Muhammad صلى الله عليه وسلم, the lives of the
noble Companions (Sahabah), and Islamic history.
At The Suffah Education, students are taught Qur’an recitation (Nazra), Tajweed, Hifz (memorization),
translation and Tafseer, along with Fiqh, Hadith, Seerah, and the Arabic language. Our mission is to nurture
individuals who are righteous in character, sincere in faith, and active in spreading the message of Islam
through both knowledge and practice.
The Suffah Education is a centre of knowledge and character-building, where along with religious education,
emphasis is also placed on spiritual development and moral refinement. We firmly believe that true
education is the foundation of a better society.
***  </h4>
                
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'animate' : ''}`}>
            <div className="visual-placeholder">
              <div className="placeholder-icon">🏛️</div>
              <p>الصفہ کا تعارف::
الصفہ ایک دینی و تعلیمی ادارہ ہے جو قرآن و سنت کی روشنی میں اسالمی تعلیمات کے فروغ کے لیے قائم کیا گیا ہے۔
ِن اس کا مقصد ام ِت مسلمہ کے بچوں، نوجوانوں اور بڑوں میں دینی شعور بیدار کر
کرنا، قرآ یم کی تعل یم و تفہیم عام کرنا،
اور اسالمی علوم کو جدید انداز میں پیش کرنا ہے۔
الصفہ ایک آن الئن پلیٹ فارم بھی ہے جو دنیا کے ہر کونے میں اسالمی علم کو عام کرنے کے لیے بنایا گیا ہے۔ یہاں پر
ِن مجید مع تجوید، نورانی قاعدہ، تجوید کے تمام اصول، احادی ِث
علماء کرام براِہ راست )Live )کالسز لیتے ہیں جن میں قرآ
مبارکہ، سیرت النبی صلى الله عليه وسلم، صحابہ کرام رض ی ہللا عنہم کی زندگ یوں اور اسالمی تاریخ کی جامع تعلیم دی جاتی ہے۔
ِن الصفہ میں مج
قرآ ید کی ناظرہ، تجوید، حفظ، اور ترجمہ و تفسیر کے ساتھ ساتھ فقہ، حدیث، سیرت، اور عربی زبان کی
ِن تعلیم بھی دی جاتی ہے۔ ہمارا مقصد ایسے بااخالق، باعمل اور باایمان افراد تیار کرنا ہے جو دی
 اسالم کے پی غام کو علم و
عمل کے ساتھ دنیا بھر میں عام کریں۔
الصفہ علم و تربی ت کا وہ مرکز ہے جہاں دی نی علم کے ساتھ کردار سازی اور روحانی اصالح پر بھی خصوصی توجہ دی
جاتی ہے۔ ہمارا یقین ہے کہ صحیح تعلیم ہی ایک بہتر معاشرہ تشک یل دے سکتی ہے۔
***</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;