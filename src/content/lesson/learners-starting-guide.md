# How to learn code with Learnpack

1. If you are a 4Geeks student, you can go to the `Learning Library/Practice Interactively` and click in `Start Practicing`
![How to go to the learning library](https://github.com/breatheco-de/content/assets/107764250/a2b43a37-f294-4e99-aa68-d57a2479ccd9)

2. Choose a tutorial of your interest and click `Start exercise`:
   ![Start exercise](https://github.com/breatheco-de/content/assets/107764250/b42f6559-dad4-4dca-9a6f-0e48b0e889e7)

3. If you are logged in, you will see an `Open with LearnPack` button, just click it.

4. Now choose between `Codespaces` or `Gitpod` clicking one of the buttons. For following this tutorial, choose `Codespaces`
![Gitpod or Codespaces](https://github.com/breatheco-de/content/assets/107764250/6d9f5213-321d-41a3-bfcf-6f8c328fd09c)

5. Click `Create codespace`:
![Create codespace](https://github.com/breatheco-de/content/assets/107764250/788c0dad-2e56-49c4-ad64-c37d3101d756)

6. And now Learnpack should be running on your codespace 
![learnpack running](https://github.com/breatheco-de/content/assets/107764250/2c3509d4-585d-469f-9cbe-22bbebaab543)


# Troubleshooting

## Learnpack is not running
Each of the following letter corresponds with certain scenarios that you might be facing, try depending of your case because they are not related.

A. You don't see either the instructions or Learnpack CLI running:
  1. Open a terminal
  2. Write `learnpack start`
  3. **Press** `enter`.
B. If Learnpack CLI is running but you can't see the instructions:
  1. Press `ctrl` + `k` and now press `w`, this should close all opened tabs in your editor.
  2. Try running `learnpack start` again.
  3. If you don't see the instructions already, but learnpack-cli is running
     - Press `ctrl` + `shift` + `p` to open the command palette and
     - **Write/click** `Learnpack: Open instructions`
C. I run `learnpack start` but an error happens:
  1. Check that you have learnpack installed running:
     ```bash
     npm ls -g @learnpack/learnpack
     ```


If you are still experiencing any difficulties to open learnpack, contact your teacher or ask in the Slack community.

