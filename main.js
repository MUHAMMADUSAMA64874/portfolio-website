document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById("project-modal");
  const span = document.getElementsByClassName("close")[0];
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const projects = [
    { id: 1, name: "E-commerce Website", description: "A full-fledged e-commerce platform with payment integration and real-time inventory management.", image: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717286400&semt=ais_user" },
    { id: 2, name: "Portfolio Website", description: "A personal portfolio website to showcase projects and skills.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9hcKUbxsmY5HmX_26-QuaiandcalBf8UDg&s" },
    { id: 3, name: "Blog Platform", description: "A content management system for creating and managing blog posts.", image: "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717286400&semt=sph" }
  ];

  const projectList = document.querySelector('.project-list');
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <img src="${project.image}" alt="${project.name}" />
      <button onclick="showProjectDetails(${project.id})">Details</button>
    `;
    projectList.appendChild(projectDiv);
  });

  window.showProjectDetails = function (projectId) {
    const project = projects.find(p => p.id === projectId);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <img src="${project.image}" alt="${project.name}" />
    `;
    modal.style.display = "block";
  }

  const skills = [
    { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
    { name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
    { name: "Firebase", icon: "https://img.icons8.com/color/48/000000/firebase.png" }
  ];
  
  const skillsList = document.querySelector('.skills-list');
  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.innerHTML = `
      <img src="${skill.icon}" alt="${skill.name}" title="${skill.name}" />
      <p>${skill.name}</p>
    `;
    skillsList.appendChild(skillDiv);
  });

  const testimonials = [
    { name: "Client A", feedback: "Great to work with, delivered on time!", image: "https://picsum.photos/100?random=4" },
    { name: "Client B", feedback: "Excellent skills and very professional.", image: "https://picsum.photos/100?random=5" },
    { name: "Client C", feedback: "Would highly recommend!", image: "https://picsum.photos/100?random=6" }
  ];
  
  const testimonialsList = document.querySelector('.testimonials-list');
  testimonials.forEach(testimonial => {
    const testimonialDiv = document.createElement('div');
    testimonialDiv.innerHTML = `
      <img src="${testimonial.image}" alt="${testimonial.name}" />
      <p><strong>${testimonial.name}</strong></p>
      <p>${testimonial.feedback}</p>
    `;
    testimonialsList.appendChild(testimonialDiv);
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    firebase.database().ref('messages').push({
      name: name,
      email: email,
      message: message
    });

    alert('Message sent successfully!');
    contactForm.reset();
  });

  modeToggle.addEventListener('click', function () {
    if (body.classList.contains('light-mode')) {
      body.classList.replace('light-mode', 'dark-mode');
      modeToggle.textContent = "Switch to Light Mode";
    } else {
      body.classList.replace('dark-mode', 'light-mode');
      modeToggle.textContent = "Switch to Dark Mode";
    }
  });
});
