import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en", // default language
  resources: {
    en: {
      translation: {
        // 🔹 Navbar Text
        home: "Home",
        courses: "Courses",
        faculties: "Faculties",
        services: "Services",
        about: "About",
        contact: "Contact",
        register: "Register",

        // 🔹 Hero Section (add when needed)
        hero_title: "Welcome to The Suffah Education",

        // 🔹 Stats Section
        students: "Students",
        expert_faculty: "Expert Faculty",
        graduates: "Graduates",
        success_rate: "Success Rate",

        //contact section
        contactBadge: "Contact",
        contactTitle: "Get in Touch",
        contactSubtitle: "Have questions? We are here to help.",
        contactInfoTitle: "Contact Information",
        contactInfoDesc: "You can reach us through phone, email, or WhatsApp.",
        contactFormTitle: "Send Us a Message",
        contactFormDesc: "Fill the form and our team will contact you soon.",

        facultyBadge: "Our Team",
        facultyTitle: "Meet Our Expert Faculty",
        facultySubtitle: "Learn from industry leaders and academic experts",
        graduates: "Graduates",
        linkedin: "LinkedIn",
        viewAllTeachers: "View All Teachers",
        ctaFacultyTitle: "Want to Learn From These Experts?",
        ctaFacultySubtitle: "Join our institution and get mentored by the best in the industry",
        applyNow: "Apply Now",

        //Features Section
        servicesBadge: "Our Services",
        servicesTitle: "Why Choose The Suffah Education?",
        servicesSubtitle: "Discover the features that make us different",

        feature1Title: "Memorizing Quran",
        feature1Desc: "Your personalized learning content goes here",

        feature2Title: "Academic Studies",
        feature2Desc: "Engaging interactive class content here",

        feature3Title: "Facilities In Suffah",
        feature3Desc: "Professional mentorship details here",

        feature4Title: "Highly Qualified Staff",
        feature4Desc: "Flexible timing information here",

        feature5Title: "The Suffah Advantages",
        feature5Desc: "Community features description here",

        feature6Title: "Life After Suffah",
        feature6Desc: "Career guidance content here",


      },
    },

    ur: {
      translation: {
        // 🔹 Navbar Text (Urdu)
        home: "ہوم",
        courses: "کورسز",
        faculties: "اساتذہ",
        services: "سروسز",
        about: "ہمارے بارے میں",
        contact: "رابطہ",
        register: "رجسٹر",

        // 🔹 Hero Section
        hero_title: "دی سفہ ایجوکیشن میں خوش آمدید",

        // 🔹 Stats Section
        students: "طلباء",
        expert_faculty: "ماہر اساتذہ",
        graduates: "فارغ التحصیل",
        success_rate: "کامیابی کی شرح",

        //contact section
        contactBadge: "رابطہ",
        contactTitle: "ہم سے رابطہ کریں",
        contactSubtitle: "کوئی سوال ہے؟ ہم مدد کے لیے موجود ہیں۔",
        contactInfoTitle: "رابطہ کی معلومات",
        contactInfoDesc: "آپ فون، ای میل یا واٹس ایپ کے ذریعے ہم تک پہنچ سکتے ہیں۔",
        contactFormTitle: "ہمیں پیغام بھیجیں",
        contactFormDesc: "فارم پُر کریں، ہماری ٹیم جلد آپ سے رابطہ کرے گی۔",

        facultyBadge: "ہماری ٹیم",
        facultyTitle: "ہمارے ماہر اساتذہ سے ملیے",
        facultySubtitle: "صنعتی ماہرین اور علمی رہنماؤں سے سیکھیں",
        graduates: "فارغ التحصیل",
        linkedin: "لنکڈ اِن",
        viewAllTeachers: "تمام اساتذہ دیکھیں",
        ctaFacultyTitle: "کیا آپ ان ماہرین سے سیکھنا چاہتے ہیں؟",
        ctaFacultySubtitle: "ہمارے ادارے میں شامل ہوں اور بہترین اساتذہ سے رہنمائی پائیں",
        applyNow: "ابھی داخلہ لیں",

        //Features Section
        servicesBadge: "ہماری خدمات",
        servicesTitle: "کیوں منتخب کریں دی سفہ ایجوکیشن؟",
        servicesSubtitle: "وہ خصوصیات جانیں جو ہمیں منفرد بناتی ہیں",

        feature1Title: "حفظِ قرآن",
        feature1Desc: "آپ کے لیے ذاتی تعلیمی مواد یہاں شامل ہوگا",

        feature2Title: "تعلیمی مطالعات",
        feature2Desc: "دلچسپ اور انٹرایکٹو کلاس مواد یہاں شامل ہوگا",

        feature3Title: "سفہ کی سہولیات",
        feature3Desc: "پیشہ ورانہ رہنمائی سے متعلق تفصیلات یہاں شامل ہیں",

        feature4Title: "انتہائی ماہر اسٹاف",
        feature4Desc: "لچکدار وقت کی معلومات یہاں شامل ہیں",

        feature5Title: "دی سفہ کی خصوصیات",
        feature5Desc: "کمیونٹی فیچرز کی تفصیل یہاں شامل ہے",

        feature6Title: "سفہ کے بعد کی زندگی",
        feature6Desc: "کیرئیر رہنمائی کا مواد یہاں شامل ہے",


      },
    },
  },
});

export default i18next;
