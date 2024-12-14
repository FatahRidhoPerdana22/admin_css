document.getElementById("menu-btn").addEventListener("click", function () {
  document.body.classList.toggle("full-width");
  document.getElementById("sidebar").classList.toggle("hide-aside");
  document.getElementById("sidebar").classList.toggle("show");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("show");
});

const userBtn = document.getElementById("user-btn");
const userMenu = document.getElementById("user-menu");

userBtn.addEventListener("click", () => {
  userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
});

// Optional: To close the menu if clicked outside
document.addEventListener("click", (e) => {
  if (!userBtn.contains(e.target) && !userMenu.contains(e.target)) {
    userMenu.style.display = "none";
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Get the element with the class 'has-submenu'
  const submenuToggle = document.querySelector('.has-submenu');
  
  // Add click event listener
  submenuToggle.addEventListener('click', function() {
    // Toggle 'active' class on click
    submenuToggle.classList.toggle('active');
  });
});




const checkbox = document.getElementById("mode");
const body = document.body;
const elementsToToggle = [
  "header",
  "aside",
  ".homepage",
  ".form",
  ".logo",
  ".menu-sidebar a",
  ".box-bars",
  ".box-user",
  ".language",
  ".table-container",
  "footer",
  ".body-container",
  ".box-close",
  ".dropdown-menu",
  "#user-menu ul li a",
];

const setMode = (isDarkMode) => {
  body.style.backgroundColor = isDarkMode ? "#000" : "";
  elementsToToggle.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.toggle("darkMode", isDarkMode);
    });
  });
};

// On window load, check localStorage for mode status
window.onload = function () {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  checkbox.checked = isDarkMode; // Set checkbox status
  setMode(isDarkMode); // Set mode based on stored status
};

// Whenever checkbox is changed, save status to localStorage
checkbox.addEventListener("change", function () {
  const isDarkMode = this.checked;
  localStorage.setItem("darkMode", isDarkMode); // Save status
  setMode(isDarkMode); // Change mode
});

const translations = {
  en: {
    dashboard: "Dashboard",
    total_users: "Total Users",
    home: "Home",
    data_category: "Data Kategori",
    data_product: "Data Produk",
    data_employees: "Data Karyawan",
    logout: "Logout",
    registration_form: "Registration Form",
    name: "Name",
    email: "Email",
    age: "Age",
    favorite_color: "Favorite Color",
    gender: "Gender",
    hobbies: "Hobbies",
    city: "City",
    subscribe: "Subscribe to newsletter",
    submit: "Submit",
    footer: "© 2024 MINUS (Mie Nusantara). All Rights Reserved.",
    total_users_count: "1,234", // Terjemahan untuk jumlah pengguna
    placeholder_email: "Enter your email", // Placeholder email
    male: "Male", // Label untuk radio button
    female: "Female", // Label untuk radio button
    reading: "Reading", // Label untuk checkbox
    traveling: "Traveling", // Label untuk checkbox
    coding: "Coding", // Label untuk checkbox
  },
  pt: {
    dashboard: "Painel de Controle",
    total_users: "Total de Usuários",
    home: "Início",
    data_category: "Dados da Categoria",
    data_product: "Dados do Produto",
    data_employees: "Dados dos Funcionários",
    logout: "Sair",
    registration_form: "Formulário de Registro",
    name: "Nome",
    email: "Email",
    age: "Idade",
    favorite_color: "Cor Favorita",
    gender: "Gênero",
    hobbies: "Hobbies",
    city: "Cidade",
    subscribe: "Inscrever-se na newsletter",
    submit: "Enviar",
    footer: "© 2024 MINUS (Mie Nusantara). Todos os direitos reservados.",
    total_users_count: "1.234", // Terjemahan untuk jumlah pengguna
    placeholder_email: "Digite seu email", // Placeholder email
    male: "Masculino", // Label untuk radio button
    female: "Feminino", // Label untuk radio button
    reading: "Leitura", // Label untuk checkbox
    traveling: "Viajando", // Label untuk checkbox
    coding: "Programação", // Label untuk checkbox
  },
  ar: {
    dashboard: "لوحة التحكم",
    total_users: "إجمالي المستخدمين",
    home: "الرئيسية",
    data_category: "بيانات الفئة",
    data_product: "بيانات المنتج",
    data_employees: "بيانات الموظفين",
    logout: "تسجيل خروج",
    registration_form: "نموذج التسجيل",
    name: "الاسم",
    email: "البريد الإلكتروني",
    age: "العمر",
    favorite_color: "لونك المفضل",
    gender: "الجنس",
    hobbies: "الهوايات",
    city: "المدينة",
    subscribe: "الاشتراك في النشرة الإخبارية",
    submit: "إرسال",
    footer: "© 2024 MINUS (مناشيت). جميع الحقوق محفوظة.",
    total_users_count: "١,٢٣٤", // Terjemahan untuk jumlah pengguna
    placeholder_email: "أدخل بريدك الإلكتروني", // Placeholder email
    male: "ذكر", // Label untuk radio button
    female: "أنثى", // Label untuk radio button
    reading: "قراءة", // Label untuk checkbox
    traveling: "السفر", // Label untuk checkbox
    coding: "ترميز", // Label untuk checkbox
  },
};

// Mendapatkan elemen dropdown bahasa
const languageDropdown = document.getElementById("language");

// Mengambil pilihan bahasa dari localStorage jika ada
const savedLanguage = localStorage.getItem("language") || "en"; // default ke "en"

// Mengatur bahasa yang dipilih di dropdown
languageDropdown.value = savedLanguage;

// Fungsi untuk menerjemahkan halaman
function translatePage(language) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    element.textContent = translations[language][key] || element.textContent;
  });
}

// Menjalankan fungsi terjemahan pada halaman dimuat
translatePage(savedLanguage);

// Menangani perubahan pada dropdown bahasa
languageDropdown.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  // Simpan pilihan bahasa ke localStorage
  localStorage.setItem("language", selectedLanguage);

  // Terjemahkan halaman dengan bahasa yang dipilih
  translatePage(selectedLanguage);
});
