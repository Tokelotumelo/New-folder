const adventureCards = document.querySelectorAll(
  ".adventures .card[data-price]",
);
const optionsContainer = document.querySelector("#booking-options");

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

const bookingInputs = [...adventureCards].map((card, index) => {
  const name = card.querySelector("h2").textContent.trim();
  const price = Number(card.dataset.price);
  const label = document.createElement("label");
  const details = document.createElement("span");
  const title = document.createElement("strong");
  const fee = document.createElement("small");
  const input = document.createElement("input");

  label.className = "booking-option";
  label.htmlFor = `booking-quantity-${index}`;
  title.textContent = name;
  fee.textContent = `${formatCurrency(price)} per booking`;
  details.append(title, fee);
  input.id = `booking-quantity-${index}`;
  input.type = "number";
  input.min = "0";
  input.step = "1";
  input.value = "0";
  input.inputMode = "numeric";
  input.setAttribute("aria-label", `Number of ${name} bookings`);
  label.append(details, input);
  optionsContainer.append(label);

  return { input, price };
});

const updateSummary = () => {
  let bookingCount = 0;
  let subtotal = 0;

  for (const { input, price } of bookingInputs) {
    const quantity = Math.max(0, Math.floor(Number(input.value) || 0));
    input.value = quantity;
    bookingCount += quantity;
    subtotal += quantity * price;
  }

  const discountRate =
    bookingCount >= 4
      ? 0.15
      : bookingCount === 3
        ? 0.1
        : bookingCount === 2
          ? 0.05
          : 0;
  const savings = subtotal * discountRate;

  document.querySelector("#booking-count").textContent = bookingCount;
  document.querySelector("#booking-subtotal").textContent =
    formatCurrency(subtotal);
  document.querySelector("#booking-discount").textContent =
    `${discountRate * 100}%`;
  document.querySelector("#booking-savings").textContent =
    formatCurrency(savings);
  document.querySelector("#booking-total").textContent = formatCurrency(
    subtotal - savings,
  );
};

for (const { input } of bookingInputs) {
  input.addEventListener("input", updateSummary);
}

updateSummary();
