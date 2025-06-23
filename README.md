
### **Project Title:**

**Khan Market – Restaurant Management**

---

### **Overview**

**Khan Market** is a complete restaurant management and online ordering platform built with Angular 19 and Bootstrap 5.3. It provides a responsive customer-facing website for browsing menus and placing orders, along with a dedicated admin panel for managing menu items, categories, and availability. The project uses `json-server` to simulate REST API endpoints, making it suitable for prototypes, MVPs, and educational projects.

---

### **Features**

* Responsive restaurant website with menu browsing and ordering capabilities
* Dynamic shopping cart and order summary functionality
* Admin dashboard with full CRUD operations for managing menu items and categories
* Modular and scalable Angular architecture with reusable components
* API integration using Angular's HttpClient
* Mock backend using `json-server` for rapid development and testing

---

### **Project Structure**

```
khan-market/
├── src/
│   ├── app/
│   │   ├── components/         # UI components for the customer interface and admin dashboard modules
│   │   └── services/           # API and data services
│   ├── assets/
│   └── index.html
├── db.json                    # Mock database used by json-server
```

---

### **Technology Stack**

* Angular 19
* Bootstrap 5.3
* TypeScript
* HTML5 & CSS3
* Font Awesome
* json-server (for simulating REST APIs)

---

### **Getting Started**

**1. Run the Frontend**

```bash
npm install
ng serve
```

Access the application at:
`http://localhost:4200`

**2. Run the Mock Backend**

```bash
npx json-server --watch db.json --port 3000
```

Mock API available at:
`http://localhost:3000/menu`

---

### **Developer**

Nada Essam
GitHub: [NadaEssam06](https://github.com/NadaEssam06)

