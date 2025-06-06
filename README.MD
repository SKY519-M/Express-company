# EXPRESS Company Website - README

This README provides an overview of the design choices and technical implementation for the EXPRESS Company website.

---

## Color System (Palette + Rationale)

Our color system for EXPRESS is designed to evoke a sense of **trust, efficiency, and reliability**, while maintaining a clean and modern aesthetic.

* **Primary Accent Color:** `#12372A` (Dark Teal/Deep Green)
    * **Rationale:** This deep, rich color represents professionalism, stability, and growth. It's used for key call-to-action buttons (`Get Started`, `Reach out to us`) and important headings to draw immediate attention and convey a sense of established reliability. It's also used for the main company logo in the navigation, anchoring the brand identity.
* **Secondary Accent Color:** `hwb(165 80% 5% / 0.911)` (Light Mint Green/Aqua)
    * **Rationale:** This lighter, fresher green is used for background sections (like the Hero and More sections) to create an inviting and calming atmosphere. It complements the darker primary color, providing a sense of openness and modernity, often associated with seamless and efficient processes.
* **Tertiary Accent Colors (Contextual):**
    * **`#dfe232` (Yellow-Green):** Used for the "Articles & Guides" button. This vibrant, energetic color suggests discovery and learning.
    * **`#30dd3e` (Bright Green):** Used for the "Delivery Tips & Support" button. This lively green implies growth, freshness, and helpfulness.
    * **`#e26464` (Soft Red):** Used for the "Webinars & Workshops" button. This warm, inviting red can signify engagement and community.
    * **`#92aadd` (Muted Blue):** Used for the testimonial navigation arrows. This gentle blue conveys calmness and trust in user feedback.
    * **Rationale:** These contextual colors are sparingly applied to specific interactive elements to differentiate them visually and add a touch of dynamic variety without overwhelming the primary palette. They guide the user's eye to distinct actions or content categories.
* **Neutral Colors:** `whitesmoke`, `hsl(0, 0%, 100%)` (White), `rgb(13, 31, 12)` (Dark Gray/Near Black), `rgb(57, 66, 36)` (Olive Green/Brownish Gray)
    * **Rationale:** `Whitesmoke` and pure white are used extensively for backgrounds, text, and card elements to provide a clean, spacious, and readable canvas. The dark grays and near-black are used for body text and primary headings, ensuring high contrast and legibility against lighter backgrounds. The olive-green/brownish-gray is used for card backgrounds (`hsla(297, 81%, 89%, 0.582)` resolves to a very light purple/pink, but its usage appears to produce a muted, almost greige tone), offering a soft, warm contrast to the cooler greens and blues.

---

## Breakpoint Logic

Our responsive design strategy employs a **mobile-first approach**, building up styles for larger screens. The primary breakpoint observed in the provided CSS is for **`max-width: 768px`**, which corresponds to typical tablet and smaller desktop screens.

* **Default (Large Screens - LG and above):**
    * The `navbar` spans `95rem` and is centered, featuring a `flex` layout for `desktop-nav-links` with all navigation items visible in a single row, including the `EXPRESS COMPANY` logo centrally placed.
    * Sections like `Hero`, `about` (How It Works), `Services`, `More`, `testimonials`, `partners`, `community`, `need` (FAQ), and `contacts` are designed with multi-column `flex` layouts, utilizing generous padding and width (`90rem`) to optimize for wider displays. Images (`pic1`, `pic2`, `pic3`, `pic4`, `pic5`) are large and prominent.
    * The "Get Started" and "Reach out to us" buttons are wider (`padding: 14px 120px` and `1rem 4rem` respectively).
    * The `faq-container` has a `max-width` of `800px` and is centered.

* **Medium to Small Screens (MD and below - `max-width: 768px`):**
    * **Navigation:** The `desktop-nav-links` are hidden (`display: none`), and the `hamburger-menu` becomes visible (`display: flex`). This triggers the **mobile menu** (`mobile-menu`), which appears as a vertical stack of links when activated, covering the full width below the navbar. The `navbar` itself adjusts its padding.
    * **Grid Layouts:** Sections that were previously `flex-direction: row` (like `Hero`, `about .container`, `More`, `community`, `contacts`) are expected to implicitly or explicitly switch to a **single-column vertical stack** (though explicit `flex-direction: column` isn't always present in the media query, the nature of `max-width` often forces this behavior, especially with images).
        * For example, the `Hero` section's images (`pic1`, `pic2`) will likely stack or resize dramatically to fit the narrower viewport, and the `hero` content will occupy the full width.
        * The **"How It Works" (`.about .container`)** section with `box1` and `box2` (image) would likely stack.
        * The **"Express & Efficiency" (`.Container`)** section with `#box3` and `#box4` would stack.
        * The **"More" section (`.More`)** content (`.more` and `.pic3`) would stack.
        * The **"Testimonials" (`.testimonials`)** and **"Explore & Learn" (`.xmore`)** sections would see their columns (`box1A`, `box1B`, `box1C` and `box2A`, `box2B`, `box2C`) stack vertically.
        * The **"Community" (`.community`)** section's text and image (`pic4`) would stack.
        * The **"FAQ" (`.help`)** and **"Contact" (`.contacts`)** sections would also transition to a single-column layout for better readability on smaller screens.
    * **Element Resizing:** General `padding` for the `body` is reduced to `1rem`. Button sizes are expected to adjust, and font sizes within sections like the `faq-title` and `faq-question` are slightly reduced for better fit.

---

## Creative Divergences from Mockup (Beyond Colors)

Since no specific mockup was provided, this section assumes "mockup" refers to a typical, unopinionated wireframe or a basic expectation for a delivery service website. Our creative divergences aimed to enhance user experience, visual appeal, and brand personality.

1.  **Dynamic Navigation & User Experience (UX):**
    * **Hamburger Menu Implementation:** Instead of a static, always-visible navigation, the website smartly implements a **hamburger menu for mobile/tablet views**. This is a crucial UX divergence, as it conserves screen real estate on smaller devices while providing an intuitive access point for navigation. The smooth `max-height` and `opacity` transitions for the mobile menu (`.mobile-menu.open`) offer a much more polished user experience than a simple `display: block/none` toggle.
    * **Sticky Navbar:** The `position: sticky` on the `navbar` ensures that the main navigation is always accessible as the user scrolls, improving usability, especially on longer pages.

2.  **Visually Engaging Hero Section:**
    * **Asymmetrical Image Placement & Overlap:** The `Hero` section uses two large, slightly overlapping images (`pic1` and `pic2`) positioned somewhat off-canvas with negative margins. This creates a **dynamic and less conventional layout** than a typical full-width banner or a simple side-by-side image and text. This visual asymmetry adds interest and a sense of movement, subtly hinting at "express" delivery.
    * **Integrated Call-to-Action:** The call to action (`Get Started` button) is prominently centered within the text, making it highly visible and encouraging immediate engagement.

3.  **Enhanced Content Presentation:**
    * **Consistent Card Styling:** Sections like "How It Works," "Services," "Explore & Learn," and parts of "FAQ" utilize a **consistent card-based design** with `border-radius`, `box-shadow`, and `background-color` for individual content blocks (`box1`, `box2`, `box3`, etc.). This approach breaks up content into digestible chunks, improving readability and visual organization across the site, making it feel cohesive and modern.
    * **Interactive FAQ Section:** The **FAQ section** (`.faq-container`) is designed with **collapsible accordion elements** (`faq-question`, `faq-answer`). This is a significant creative and functional divergence from a static list of questions and answers. It allows users to quickly scan questions and expand only the relevant answers, preventing information overload and creating a cleaner page. The visual cues like the rotating arrow (`faq-arrow`) and the border animation (`faq-question::before`) enhance the interactivity.
    * **Partner Logo Presentation:** The "We partner with" section displays partner logos in a distinct, centrally aligned flex container with ample `gap`, suggesting a strong network and credibility in a clean, modern way.

4.  **Aesthetic Details & Micro-interactions:**
    * **Subtle Button Hover Effects:** Buttons across the site (e.g., `nav-container a:hover`, testimonial buttons) have `transition` properties for `background-color` and `transform`, providing **subtle visual feedback** on interaction. This small detail enhances the perceived polish and responsiveness of the site.
    * **Typographic Hierarchy:** The use of varied font sizes and weights for headings (`h1`, `h3`, `h4`) and paragraphs (`p`, `.p2`, `.p3`) across different sections helps establish a clear **typographic hierarchy**, guiding the user's eye and making content easier to scan and digest.
    * **Contextual Button Styling:** The "Explore & Learn" section uses **differently colored buttons** for "Articles & Guides," "Delivery Tips & Support," and "Webinars & Workshops." This creative choice adds visual interest and helps users quickly differentiate between the types of resources available.