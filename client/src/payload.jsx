import arabicLogo from "./assets/Flag_of_the_Arab_League.svg.png";
import englishLogo from "./assets/Flag_of_Great_Britain_(English_version).png";

export const assets = {
  arabic: {
    logout: "سجل الخروج",
  },
  english: {
    logout: "Log out",
  },
};

export const navbarData = {
  arabic: {
    logo: arabicLogo,
    home: "الرئيسية",
    about_us: "من نحن",
    services: "خدماتنا",
    contact_us: "اتصل بنا",
    login: "سجل الدخول",
    register: "اشترك الآن",
    vehiclesList: "السيارات",
  },
  english: {
    logo: englishLogo,
    home: "Home",
    about_us: "About Us",
    services: "Services",
    contact_us: "Contact Us",
    login: "Login",
    register: "Register",
    vehiclesList: "Vehicles List",
  },
};

export const main = {
  arabic: {
    mainHead: "تبحث عن إيجار ولكنك لا تعرف أين تبحث؟",
    mainPara:
      "هذه المنصة هي وجهتك الرئيسية للإيجار والبحث عن سيارات للإيجار. تم تصميمها لتوفير تجربة مريحة وموثوقة للأفراد الذين يتطلعون للعثور على سيارة للاستئجار أو لأولئك الذين يرغبون في تأجير سيارتهم. تعتبر هذه المنصة مكانًا يجمع بين المؤجرين والمستأجرين، مما يسهل العثور على السيارة المناسبة بسرعة وسهولة.",
    addCar: "إضافة سيارة",
    carList: "قائمة السيرات",
  },
  english: {
    mainHead: "Looking To Rent But Don’t Know Where To Look?",
    mainPara:
      "This platform is your primary destination for renting cars and finding cars to rent. It has been designed to provide a convenient and reliable experience for individuals who are looking to find a rental car or for those who want to rent out their cars. This platform brings together both renters and rentees, making it easy to quickly and easily find the right car.",
    addCar: "Include a Vehicle",
    carList: "Vehicles List",
  },
};

export const howToStart = {
  arabic: {
    head: "كيف يمكنك البدء؟",
    subHead: "3 خطوات",
    add: {
      addTitle: "لإضافة سيارتك",
      stepOne: {
        title: "أنشئ إعلان",
        para: "شارك سيارتك مع المستأجرين عبر إنشاء إعلان مفصل. قدم معلومات حول سيارتك",
      },
      stepTwo: {
        title: "إدارة الطلبات",
        para: "قم بمراجعة طلبات الزبناء وقرر ما إذا كنت ستقبلها أو ترفضها ",
      },
      stepThree: {
        title: " تواصل مع المستأجر",
        para: "قم بالتنسيق مع المستأجر للإستلام والإعادة. بعد عملية تأجير ناجحة",
      },
    },
    rent: {
      rentTitle: "لكراء سيارة",
      stepOne: {
        title: "تصفح السيارات",
        para: "ابدأ رحلتك في استئجار السيارة من خلال تصفح مجموعة متنوعة من السيارات المتاحة",
      },
      stepTwo: {
        title: "اختر سيارتك",
        para: "بمجرد أن تجد السيارة المثالية لك، انقر عليها لعرض المزيد من التفاصيل، بما في ذلك الصور والتسعير ومعلومات المالك",
      },
      stepThree: {
        title: "احجز وانطلق",
        para: "قم بالتنسيق مع المالك للإستلام واستكمال عملية الحجز",
      },
    },
  },
  english: {
    head: "How to get started?",
    subHead: "3 steps",
    add: {
      addTitle: "To include your Vehicle",
      stepOne: {
        title: "Create a Listing",
        para: "Share your car with potential renters by creating a detailed listing. Provide information about your vehicle.",
      },
      stepTwo: {
        title: "Manage Requests",
        para: "Review booking requests from renters and decide whether to accept or decline them.",
      },
      stepThree: {
        title: "Communicate with the Renter",
        para: "Coordinate with the renter for pick-up and return. After a successful rental.",
      },
    },
    rent: {
      rentTitle: "To rent a car",

      stepOne: {
        title: "Browse Cars",
        para: "Start your car rental journey by browsing through a diverse selection of available vehicles.",
      },
      stepTwo: {
        title: "Choose Your Ride",
        para: "Once you've found the perfect car, click on it to view more details, including photos, pricing, and owner information.",
      },
      stepThree: {
        title: "Book and Drive",
        para: "After selecting your ideal car, make a reservation, and complete the booking process. You're now ready to hit the road.",
      },
    },
  },
};

export const firstArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="169"
    height="25"
    viewBox="0 0 169 25"
    fill="none"
  >
    <path
      d="M1.08592 22.5047C0.583208 22.7334 0.361069 23.3263 0.589759 23.829C0.818449 24.3317 1.41137 24.5538 1.91408 24.3252L1.08592 22.5047ZM169 23.4149L162.266 14.0349L157.51 24.5569L169 23.4149ZM1.91408 24.3252C3.83671 23.4505 5.73415 22.6021 7.60778 21.7799L6.80404 19.9485C4.92185 20.7745 3.01626 21.6265 1.08592 22.5047L1.91408 24.3252ZM19.0895 16.9524C23.0672 15.3586 26.9399 13.8945 30.723 12.5591L30.0572 10.6731C26.2456 12.0187 22.3468 13.4927 18.3456 15.0958L19.0895 16.9524ZM42.5447 8.72222C46.6397 7.51691 50.64 6.47578 54.5678 5.59713L54.1311 3.64537C50.1572 4.53434 46.1142 5.58677 41.98 6.8036L42.5447 8.72222ZM66.7551 3.36084C70.9142 2.77151 75.0154 2.37461 79.088 2.16815L78.9868 0.170714C74.8523 0.380309 70.6912 0.783129 66.4745 1.38062L66.7551 3.36084ZM91.4679 2.12762C95.5652 2.30918 99.6655 2.68417 103.799 3.25106L104.071 1.2696C99.8782 0.694616 95.7167 0.313929 91.5564 0.129578L91.4679 2.12762ZM116 5.45186C119.938 6.32675 123.931 7.36704 128.005 8.5717L128.572 6.65381C124.458 5.43713 120.42 4.38506 116.433 3.49946L116 5.45186ZM139.822 12.4382C143.61 13.7896 147.48 15.2709 151.449 16.8812L152.201 15.0279C148.208 13.408 144.311 11.9164 140.494 10.5545L139.822 12.4382Z"
      fill="#E6492A"
    />
  </svg>
);
export const secondArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="169"
    height="26"
    viewBox="0 0 169 26"
    fill="none"
  >
    <path
      d="M0.57806 2.90662C0.0773453 2.67359 -0.139655 2.07878 0.0933764 1.57806C0.326408 1.07734 0.921226 0.860346 1.42194 1.09338L0.57806 2.90662ZM169 2L162.347 11.4378L157.5 0.957235L169 2ZM1.42194 1.09338C3.34645 1.98904 5.2458 2.8579 7.12136 3.70005L6.30213 5.52456C4.41793 4.67854 2.51036 3.80591 0.57806 2.90662L1.42194 1.09338ZM18.6184 8.64623C22.6035 10.2802 26.4835 11.7814 30.2737 13.151L29.5941 15.0319C25.7749 13.6519 21.8685 12.1404 17.8597 10.4967L18.6184 8.64623ZM42.1242 17.0885C46.2328 18.3268 50.2462 19.3965 54.1867 20.2994L53.74 22.2489C49.7524 21.3352 45.6955 20.2537 41.5471 19.0034L42.1242 17.0885ZM66.4222 22.5994C70.6 23.206 74.7195 23.6145 78.8101 23.8269L78.7064 25.8242C74.5523 25.6085 70.3715 25.1938 66.1348 24.5787L66.4222 22.5994ZM91.2481 23.8685C95.3636 23.6815 99.4824 23.2955 103.635 22.7119L103.913 24.6924C99.7003 25.2845 95.519 25.6765 91.3388 25.8664L91.2481 23.8685ZM115.883 20.4481C119.834 19.5489 123.84 18.48 127.927 17.2423L128.507 19.1565C124.379 20.4067 120.327 21.4879 116.327 22.3982L115.883 20.4481ZM139.774 13.2738C143.569 11.888 147.445 10.3694 151.421 8.7186L152.188 10.5657C148.188 12.2264 144.285 13.7557 140.46 15.1524L139.774 13.2738Z"
      fill="#E6492A"
    />
  </svg>
);

export const loginData = {
  arabic: {
    title: "تسجيل الدخول",
    usernamePlaceholder: "إسم المستخدم",
    passwordPlaceholder: "كلمة المرور",
    forgotPasswordText: "هل نسيت كلمة المرور؟",
    dontHaveAcc: "ليس لديك حساب؟",
    loginButtonLabel: "دخول",
    register: "إشترك",
    googleAuth: "سجل الدخول مع جوجل",
  },
  english: {
    title: "Login",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    forgotPasswordText: "Forgot Password?",
    dontHaveAcc: "You don't have an account?",
    loginButtonLabel: "Submit",
    register: "Register",
    googleAuth: "CONTINUE WITH GOOGLE",
  },
};
export const registerData = {
  arabic: {
    title: "إنشاء حساب",
    usernamePlaceholder: "إسم المستخدم",
    emailPlaceholder: "بريدك الالكتروني",
    passwordPlaceholder: "كلمة المرور",
    signInButtonLabel: "دخول",
    googleAuth: "سجل الدخول مع جوجل",
    alreadyHaveAcc: "لديك حساب؟",
    login: "سجل الدخول",
  },
  english: {
    title: "Create Account",
    usernamePlaceholder: "Username",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    signInButtonLabel: "Submit",
    googleAuth: "SIGN IN WITH GOOGLE",
    alreadyHaveAcc: "Already Have An Account?",
    login: "Login",
  },
};

export const about = {
  arabic: {
    title: "من نحن",
    content: `
    تم تصميم منصتنا بعناية شديدة بهدف تقديم تجربة مريحة وجديرة بالثقة للأفراد الذين يبحثون عن سيارة للاستئجار، وأيضًا لأولئك الذين يرغبون في تأجير سياراتهم. نحن نفهم أهمية وجود وسيلة نقل موثوقة، ونحن هنا لرسم جسر التواصل بين أصحاب السيارات وأولئك الذين في حاجة للتنقل.

مقرنا في قلب الصحراء، ونحن نفتخر بخدمة المجتمع المحلي ونتطلع إلى أن نكون الحلا الأمثل لجميع احتياجات استئجار السيارات. مهمتنا هي جعل استئجار السيارات ميسرًا وسهلاً واقتصاديًا للجميع في الصحراء وخارجها
    `,
    readMore: "إقرء المزيد",
  },
  english: {
    title: "About Us",
    content: `
    Our platform has been meticulously designed with the primary aim of offering a convenient and trustworthy experience for individuals seeking to rent a car, as well as those looking to rent out their vehicles. We understand the importance of reliable transportation, and we are here to bridge the gap between car owners and those in need of a ride.

    Based in the heart of Sahara, we take great pride in serving the local community and aspire to be the go-to solution for all your car rental requirements. Our mission is to make car rental accessible, seamless, and cost-effective for everyone in Sahara and beyond.
    `,
    readMore: "Read More",
  },
};
