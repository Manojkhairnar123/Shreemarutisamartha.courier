// 📦 Homepage WhatsApp Booking Button
function bookPickup()
  {
  window.open(
    "https://wa.me/919579850098?text=Hello! I’d like to book a pickup with Shree Maruti Samartha Courier.",
    "_blank"
  );
  setTimeout(() => {
    alert("✅ Booking sent! Our team will contact you shortly.");
  }, 1000);
}

// 🧾 Booking Form Logic (book.html)
function sendBooking() 
{
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const message = `Hello! I’d like to book a pickup.\nName: ${name}\nAddress: ${address}`;
  window.open(
    `https://wa.me/919579850098?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// 📍 Tracking ID Validator (track.html)
function checkTracking()
  {
  const id = document.getElementById("trackInput").value;
  const status = document.getElementById("statusMessage");

  if (id.startsWith("SMC") && id.length === 10)
  {
    status.textContent = "✅ Parcel is In Transit";
    status.style.color = "green";
  } else 
  {
    status.textContent = "❌ Invalid Tracking ID";
    status.style.color = "red";
  }
}

// ✨ Scroll Reveal Animation (about.html + others)
window.addEventListener("scroll", () => 
  {
  document.querySelectorAll(".reveal").forEach((el) => 
    {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100)
    {
      el.classList.add("visible");
    }
  });
});
// ✨ Scroll Reveal Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
