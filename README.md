
# 📝 Form Validation with Bootstrap & JavaScript

A responsive HTML form that performs client-side validation using JavaScript and Bootstrap 5. This project demonstrates dynamic validation, user eligibility checking, and input interactivity for a better user experience.

---

## 📂 Project Structure

```
📁 project-folder/
│
├── index.html          # Main HTML structure
├── style.css           # Custom styling (optional)
├── validation.js       # JavaScript validation logic
└── README.md           # Project description
```

---

## ✨ Features

- 🔐 Password strength validation
- 📧 Email format check using regex
- ✅ Confirm password matching
- 📅 Birth year-based eligibility check
- 📦 Bootstrap 5 layout and styling
- 🔄 Reset button disables inputs and clears alerts

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/praseedasuresh1992/formValidation.git
cd formValidation
```

### 2. Open the Project

You can open `index.html` directly in your browser or use Live Server in VS Code for a better development experience.

---

## 🔧 How It Works

- **Form is disabled by default**.
- **User selects a valid birth year** → Inputs get enabled.
- **Each field** is validated on blur (losing focus).
- **Submit** only works if all validations pass.
- **Reset** disables inputs and clears all alerts.

---

## 🖥️ Technologies Used

- HTML5
- CSS3
- JavaScript 
- [Bootstrap 5.3.7](https://getbootstrap.com/)

---



## 📌 Notes

- `novalidate` attribute is used to override browser's native validation.
- The password must contain:
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 digit
  - At least 1 special character
  - Minimum 8 characters

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! If you'd like to contribute:
- Fork the repo
- Create a new branch
- Submit a PR with a clear description

---

## 📬 Contact

**Author**: [Praseeda Suresh](https://github.com/praseedasuresh1992)  
📧 Email: *praseeeda@gmail.com*  
🔗 GitHub: [formValidation Repository](https://github.com/praseedasuresh1992/formValidation)
