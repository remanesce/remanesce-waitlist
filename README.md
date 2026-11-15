# Remanesce — landing page

A static landing page for **Remanesce**, a collaborative internet scrap book.
Plain HTML5 + CSS3: no build step, no framework, no JavaScript.

```
remanesce-landing-page/
├── index.html          # the whole page
├── css/styles.css      # tokens, layout, components, responsive rules
├── assets/collage.jpg  # the board image used in the hero and the feature cards
├── mockup.png          # the design reference this page was built from
└── README.md
```

## Preview

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

The page is responsive: one column on phones, two or three feature cards on
tablets and desktops.

## Fonts

Loaded from Google Fonts (`Caveat Brush` for display type, `Poppins` for body
copy) with local fallbacks in case the CDN is unavailable:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Poppins:wght@400;500;600&display=swap">
```

The brush lettering in the mockup uses a font that is not on Google Fonts.
`Caveat Brush` is the closest free match, so the display type is stretched
slightly with `transform: scaleX()` to keep the proportions of the original.
The stretch is switched off below `62rem`, where there is not enough room for it.

## Customising

### Colors

All colors live in custom properties at the top of `css/styles.css`:

```css
:root {
  --color-cream: #F5F0E7;   /* page background */
  --color-navy: #28213D;    /* text, logo block, buttons */
  --color-navy-soft: rgba(40, 33, 61, 0.72);
}
```

### Social links

The three circles in the header are placeholders. Point them at your profiles
in `index.html`:

```html
<a class="social__link" href="#" aria-label="Remanesce on Instagram">
```

Swap the inline SVG for any icon you like — the circles are styled by
`.social__link`.

### The waitlist form

The form has no JavaScript: it submits with `GET` to the current page, so
pressing Enter or clicking **Join waitlist** reloads the page with the values
in the URL. To collect signups for real, change the `action` attribute to your
endpoint (Formspree, Buttondown, a Cloudflare Worker, a small API…):

```html
<form class="waitlist__form" action="https://formspree.io/f/xxxxxxx" method="POST">
```

If you switch to `POST`, the browser will do a normal form post and the
thank-you state can come from the endpoint's response.

The feature options in the `<select>` are suggestions — edit the `<option>`
elements to match what you actually plan to build.

### Images

`assets/collage.jpg` is used twice: as the hero board and as the picture in
each of the three feature cards (cropped with `object-fit: cover`). To use
different pictures, change the `src` of the feature images.

## Accessibility notes

- Semantic landmarks (`header`, `main`, `section`, `footer`) and a skip link.
- The form inputs have visually hidden `<label>`s, and the social icons have
  `aria-label`s.
- Visible focus rings on every interactive element.
- `prefers-reduced-motion` disables the transitions and smooth scrolling.
- The hero collage repeats the same image three times in the feature cards,
  where it is marked as decorative with a short `alt` instead.

## Browser support

Modern evergreen browsers. The hero button is sized with container query units
(`cqw`) so it scales with the artwork; browsers without support fall back to a
fixed size.
