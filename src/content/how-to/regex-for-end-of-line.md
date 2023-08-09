# Regex for end of line
Have you ever wondered how you can identify the end of the line in a text? Regular expressions are a great way to achieve this goal. In this article, we will explore how to use regular expression to identify the end of a line in any text and will do it using JavaScript and Python so we see in both programming languages.
First, let’s check a quick example of a regular expression to verify the end of a line.

```js
const regex = /\r?\n/g

const text = 'Welcome!\nThis is an example\n with line breaks.'
const formattedText = text.replace(regex, 'br>')

console.log(formattedText) 
```

The regular expression  /\r?\n/g searches as line breaks in Windows ('\r\n') as regular ones ('\n') and replaces them with the `<br>` tag. By doing this, we can show the text correctly in a web page.

Now let’s dive deep into this topic using use cases.

**Look for final comments in the code.**

When we are developing, we might find the need to look for final comments in a source code to ensure that there are no missing tasks. We can use a regular expression to identify those comments:

```js
// JavaScript
const regex = /\/\/.*$/gm
const code = `
function calculateTotal() {
    //  Calcular el total
}

//  todo:   Add logic to calculate taxes
//  fix this:  correct bug in this section`

 const commentsInCode =  code.match(regex);


 console.log(comments)

```
The regular expression `\/\/.*$` searches any line that begins with '//'(a comment in JS) and gets any comment after that up to the end of the line using '$'. Also we use the flag 'gm' so the search is global ('g') and it does it in multiple lines ('m')

**Count words in each line.**

Let’s assume that we have a text file and want to find the average number of words per line. To get this, we use a regular expression to split words and calculate the average.

```python
import re

text = ' This a line with words.\n Here you can find more content and words.\n Even more words right here for you to count'

lines =  text.split('\n')
word_count =  0
for line in lines:
    words = re.findall(r'\w+',  line)
    word_count +=  len(words)

average_words  =  word_count / len(lines)

print(f’The final average of number of words is: {average_words:.2f}’ )

```
What we can see in this code is we use 're.findall(r'\w+',  line)' to find all the words in each line. Then, the expression '\w+' searches one or more alphanumeric characters that belong to the words in each line. Finally, we sum up the quantity of words in every line and calculate the average by dividing it with the total of lines.

**Formatting addresses**

Imagine that we are working on an app that shows addresses in a specific format, however, some of the addresses have undesired spaces at the end. We will use a regular expression to remove those final spaces in each address.

```js
const regex = /\s+$/gm

const addresses =
 [
   "123 Main Street City    ",
     "456 Secondary Avenue,  Town    ",
     "789 Central Highway, Villa   "

]

const cleanedAddresses  = addresses.map(address => address.replace(regex, ''))

console.log(cleanedAddresses);

```
In this final example, our regex `/\s+$/gm`  
searches for one or more white spaces at the end of each line ('$') and then it replace them with an empty string. Also note that we use the flags 'g' and ‘m’ so the search becomes global and applies for every line in our code.

# Conclusion

Regular expressions are quite a powerful tool  that can simplify many complex tasks that would require hours to get done. Through multiple examples, we have explored how to use these regular expressions to achieve different goals that we could face in real-word app development. By understanding how to work with the end of lines, we can move faster with  several programming and text analysis tasks. 
