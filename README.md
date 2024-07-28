
# TBC Concept

An analog site of "https://tbcconcept.ge" 


## Features

- **Responsive Design**: Adapts to different screen sizes.
- **Dynamic Content**: Interactive elements that respond to user actions.
- **Navigation**: Smooth and intuitive navigation.
- **Accordions**: Expandable sections for detailed content.
- **Sliders**: Horizontal content sliders for offers and awards.
- **Menu Toggle**: Burger menu for mobile navigation.



## Technologies Used

 - **HTML5**
 - **CSS3**
 - **JavaScript (ES6+)**
 - **Ionicons:** For icons
 - **Git:** Version control

 ## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Main text color | ![#333](https://via.placeholder.com/10/333?text=+) #333 |
| Text for Headers And Big texts | ![#141719](https://via.placeholder.com/10/141719?text=+) #141719 |
| Text with backgroung picture | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff |
| Buttons | ![#001682](https://via.placeholder.com/10/001682?text=+) #001682 |
| Link in navigation and offers | ![#182cc0](https://via.placeholder.com/10/182cc0?text=+) #182cc0 |
| Glow on hover | ![#007aff](https://via.placeholder.com/10/007aff?text=+) #007aff |



## Installation

Clone my-project with git

```bash
  git clone https://github.com/DataShalam/TBC-Concept.git
  cd TBC-Concept

  xdg-open index.html
  # OR
  firefox index.html
```
    
## Usage/Examples



#### Sliders
Use the navigation buttons to scroll through the offers and awards sections. You can also drag the scrollbar thumb to navigate.

#### Menu Toggle

Click the burger menu icon to open the mobile navigation menu and the close icon to close it.

#### Example Code Snippet

```javascript
const burgerMenu = document.querySelector(".burger-menu");
const closeMenu = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-navigation");

burgerMenu.addEventListener("click", () => {
  burgerMenu.style.display = "none";
  closeMenu.style.display = "block";
  mobileNav.style.zIndex = "100";
  mobileNav.style.opacity = "1";
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  burgerMenu.style.display = "block";
  mobileNav.style.zIndex = "-100";
  mobileNav.style.opacity = "0";
});
```

## ⚠️ Warning

**Please note:** Once you open index.html and some elements initialize in js, if you try to reduce screen width, overflow in slider will occure(Slider Thumb), to avoid this problem after changing the width reload the page.

---

**Important:** This problem will not occur if you open this page from a device and not change a resolution.
