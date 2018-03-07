## Doc Name:
## Author: Anirudh Pa
## Purpose:

---

## Defects:

1. Using just a bool for TESTING variable is not good enough since there are multiple test configurations.
2. Camera defined at (0,0,0) unable to see anything.
3. Support JavaScript files not referenced in HTML.
4. Aspect ratio uses width/width instead of width/height.
5. Axes size too long.
6. Plate generations was constant, which has been changed to parametric.
7. Grid size higher than 100 freeze the Program. Solved by limiting Size to 100.
8. Material is shared so a color change applies to all objects using that color.
