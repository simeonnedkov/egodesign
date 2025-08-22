// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  if (name && email && message) {
    // Here you would typically send the form data to a server
    alert("Благодарим ви за съобщението! Ще се свържем с вас скоро.")

    // Reset form
    this.reset()
  } else {
    alert("Моля, попълнете всички полета.")
  }
})

// Add scroll effect to navigation
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 100) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    nav.style.backdropFilter = "blur(10px)"
  } else {
    nav.style.backgroundColor = "#fff"
    nav.style.backdropFilter = "none"
  }
})

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
    this.style.transition = "transform 0.3s ease"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

window.addEventListener("scroll", () => {
  const parallaxElement = document.querySelector(".parallax-element")
  if (parallaxElement) {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    parallaxElement.style.transform = `translateY(${rate}px)`
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.querySelector(".interactive-hero")
  const heroImage = document.querySelector(".hero-image")

  if (heroContainer && heroImage) {
    heroContainer.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
    })

    heroContainer.addEventListener("mouseleave", () => {
      heroImage.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    })
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const aboutContainer = document.querySelector(".interactive-about")
  const aboutImage = document.querySelector(".about-img")

  if (aboutContainer && aboutImage) {
    aboutContainer.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15

      aboutImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`
    })

    aboutContainer.addEventListener("mouseleave", () => {
      aboutImage.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    })
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.querySelector(".interactive-hero")

  if (heroContainer) {
    heroContainer.addEventListener("click", () => {
      // Scroll to projects section when hero image is clicked
      const projectsSection = document.querySelector("#work")
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  }
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".project-card, .about-content, .contact-info")

  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // Create cursor elements
  const cursor = document.createElement("div")
  cursor.className = "cursor"
  document.body.appendChild(cursor)

  let mouseX = 0
  let mouseY = 0

  // Track mouse movement
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    // Update cursor position immediately
    cursor.style.left = mouseX - 10 + "px"
    cursor.style.top = mouseY - 10 + "px"

    // Create trail effect
    createTrail(mouseX, mouseY)
  })

  // Create trail particles
  function createTrail(x, y) {
    const trail = document.createElement("div")
    trail.className = "cursor-trail"
    trail.style.left = x - 2 + "px"
    trail.style.top = y - 2 + "px"
    document.body.appendChild(trail)

    // Remove trail after animation
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail)
      }
    }, 500)
  }

  // Cursor hover effects for interactive elements
  const interactiveElements = document.querySelectorAll(
    "a, button, .interactive-hero, .interactive-about, .project-card",
  )

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)"
      cursor.style.backgroundColor = "#000"
    })

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursor.style.backgroundColor = "#dc2626"
    })
  })

  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0"
  })

  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1"
  })
})
