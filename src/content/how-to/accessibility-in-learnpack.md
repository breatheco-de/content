# Accessibility in LearnPack

When discussing accessibility, it's important to reference web standards such as the Web Content Accessibility Guidelines (WCAG), which provide good practices for making web page content understandable for everyone, regardless of the user-agent.

LearnPack considers these guidelines and continuously strives to improve the user experience, making it easier to understand.

### Colors and Contrast
The primary text color in LearnPack is black, set against a white background. This yields a contrast ratio of 21:1, adhering to the color guidelines established in both WCAG AAA and WCAG AA.
- Verify the contrast here: [LearnPack contrast](https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=000000)

### Font Sizes and Readability
![LearnPack screenshot](https://github.com/breatheco-de/content/assets/107764250/865b7145-9e64-4668-b202-e8e70c441326)

LearnPack's font sizes are large enough to comply with WCAG's recommended practices. For lesson content, LearnPack uses a minimum text size of 16 pixels, increasing by 4 pixels for h3, another 4 pixels for h2, and an additional 3 pixels for h1. Since lesson content is written in markdown and converted to HTML, images always include alt text, adhering to the guidelines for the readability of non-text content. Other good practices followed for text readability include:
- No Justification: It's recommended not to justify text to prevent irregular spacing and enhance readability.
- Avoid Excessive Uppercase Usage: Minimize the use of uppercase letters, as it's unnatural and can strain the eyes.
- Paragraph Spacing: It's advisable to use a space between paragraphs that is 1.5 to 2 times the font size, which LearnPack implements.

### Key Commands
To make LearnPack easier to use, we've incorporated key bindings that allow interaction without a mouse, enabling full keyboard navigation.

- `Arrow Up` - `Down`: Natively supported by web pages, these keys allow you to scroll up or down.
- `Ctrl` + `Enter`: As LearnPack primarily focuses on teaching coding skills, this shortcut executes the code you've written.
- `Ctrl` + `Shift` + `Enter`: If an exercise includes tests, this shortcut runs the specific test for the exercise and provides the results.
- `Ctrl` + `Right Arrow`: Navigate to the next exercise.
- `Ctrl` + `Left Arrow`: Return to the previous exercise.
- `Ctrl` + `Alt` + `Enter`: Toggle the AI tutor if you're logged in.

These are some of the key aspects of accessibility in LearnPack. If you have any questions, please leave us a comment!
