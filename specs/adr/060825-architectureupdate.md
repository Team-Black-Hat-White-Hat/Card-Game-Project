**Date:** 2025-06-08  
**Status:** Accepted  

---

## Context  
The card battle UI previously suffered from poor responsiveness, layout overflow, and inconsistent behavior across devices. Cards would overlap the battlefield when zoomed, and features like turn banners, cutscenes, and animations were partially implemented or broken.

---

## Decision  
The interface was restructured into a vertically split layout using `flexbox`, with `.battle-area` above and `.hand-area` below. Responsive scaling was introduced using `clamp()`, `aspect-ratio`, and `media queries` to ensure the entire UI scales proportionally across screens.

---

## 🔨 Changes Implemented  
- Restructured layout into battlefield and card sections  
- Made `.hand-area` responsive using `scale()` and media queries  
- Applied `clamp()` and `aspect-ratio` to cards for better scaling  
- Refactored `.card-banner`, `.card-description`, and `.card-type` for layout consistency  
- Prevented cards from overlapping battlefield on zoom  
- Added media breakpoints for device-specific behavior  
- Updated `enemy.js` logic  
- Built start and end game screens  

**Additional layout and functionality updates:**  
- Implemented player start turn banner (enemy support pending)  
- Added hit animations to Powell and Panda  
- Fixed `cutscene_2` logic and display issues  
- Moved `adoptedStyleSheets` into `connectedCallback` to fix style injection issues  
- Added inline documentation across components  
- Fixed unit test failures due to style timing and DOM updates  

---

## Result  
- Scalable layout 
- Less overlap between cards and battlefield  
- Game visuals now support animations and turn flow  
- Cleaned-up code with testable and maintainable structure  

