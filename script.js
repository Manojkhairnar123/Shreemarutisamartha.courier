function bookPickup() 
{
  const phoneNumber = "919579850098";
  const message = "Greetings. I’d like to arrange a courier pickup. Please share the available slots and required details.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
