# Adventure Escape SA

Adventure Escape SA is a responsive, multi-page website for a Cape Town outdoor-adventure business. It presents guided adventure packages and activities, shares information about the business, and provides a contact and booking inquiry form.

## Website

The website is built with plain HTML and CSS. It has no build step or project dependencies.

- **Home** (`index.html`): introduction, mission, and reasons to choose Adventure Escape SA.
- **About** (`about.html`): the company story and values.
- **Adventures** (`adventures.html`): adventure packages and individual activities with prices, details, and a live booking calculator.
- **Contact** (`contact.html`): an inquiry form and business contact information.

### Booking calculator

On the Adventures page, enter a quantity for each package or activity to see the booking count, subtotal, discount, savings, and estimated total. Discounts are based on the total number of bookings: one booking gets no discount, two get 5%, three get 10%, and four or more get 15%. Prices are shown in South African rand (ZAR). The calculator runs in the browser and does not submit or store a booking.

### Run locally

The simplest option is to open `index.html` in a browser. For a local web address such as `http://localhost:5500`, use the **Live Server** extension in VS Code:

1. Install **Live Server** from the VS Code Extensions view.
2. Right-click `index.html` in the Explorer and select **Open with Live Server**.
3. Use the address shown in the browser. The other pages are `about.html`, `adventures.html`, and `contact.html` under the same address.

## App design in Figma

The Figma file contains app screen designs, including home, overview, about, contact, individual activity, and fee calculation screens. Those are design prototypes; this repository contains the website source, not a separate native mobile app or app backend.

To capture a locally running website page into Figma, install the **html.to.design** Figma plugin and its Chrome extension. Open the page in Chrome and use the extension's **Capture Current Page** option. The plugin's URL importer cannot access pages hosted on your computer at `localhost`.

## Contact form status

The contact form is currently front-end only. It does not send or store submissions because no form service or backend is connected.

## Project structure

```text
AdventureEscapeSA_Web/
├── index.html
├── about.html
├── adventures.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── calculator.js
    └── images/
```

Shared layout and page styling are in `assets/css/style.css`; page content is in the corresponding HTML files, the booking calculator logic is in `assets/js/calculator.js`, and visual assets are in `assets/images/`.
