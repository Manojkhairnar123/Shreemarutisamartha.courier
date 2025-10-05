function bookPickup() {
  window.open("https://wa.me/919579850098?text=Hello! I’d like to book a pickup with Shree Maruti Samartha Courier.", "_blank");
  setTimeout(() => {
    alert("✅ Booking sent! Our team will contact you shortly.");
  }, 1000);
}

function checkTracking() {
  const id = document.getElementById("trackInput").value;
  const status = document.getElementById("statusMessage");

  if (id.startsWith("SMC") && id.length === 10) {
    status.textContent = "✅ Parcel is In Transit";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Invalid Tracking ID";
    status.style.color = "red";
  }
}

function sendBooking() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const message = `Hello! I’d like to book a pickup.\nName: ${name}\nAddress: ${address}`;
  window.open(`https://wa.me/919579850098?text=${encodeURIComponent(message)}`, "_blank");
}
