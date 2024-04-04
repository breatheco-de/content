# Elevate Your LearnPack Experience with Telemetry Configuration
Discover the power of LearnPack and take your course management to the next level by configuring telemetry. This feature is not just about collecting data; it's about unlocking insights that can revolutionize the learning journey. But how do you set up the path for telemetry.json or stream events as they happen?

### Simplify with learn.json
Every LearnPack course is bundled with a `learn.json` file, your command center for exercise testing, compiler selection, and more. The "telemetry" key is the latest innovation here, designed to streamline your data tracking.

Check out this sample of the telemetry key configuration:
![Telemetry Key Sample](https://github.com/breatheco-de/content/assets/107764250/70caf7ad-89df-4ead-9404-d7778cd6dd15)

For logged-in users, LearnPack is always on the pulse, streaming events for key interactions:
- Hitting the "next" button (event: open_step)
- Executing code with the "run" button (event: compile)
- Launching tests with the "run tests" button (event: test)
- Consulting the AI tutor (event: ai_interaction)

Make sure your stream and batch URLs are set to welcome POST requests. It's in your hands to devise the logic that will distill the essential data from these interactions.

Step into the world of telemetry configuration and elevate the educational experience with LearnPack!
