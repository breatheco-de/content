---
title: "Python list extend method"
subtitle: "A simple way to add elements to a list would be using the Python .extend() method"
tags: ["python","list","extend"]
date: "2020-10-19T16:36:30+00:00"
authors: []
status: "draft"

---

Here is a simple way to add elements to a list using **Python List Extend Method**:

```py
names = ["Rigoberto", "Alan", "Barry"]

names.extend(["Annessia", "Dorothy", "Stephany"])

print(names) #Output: ["Rigoberto", "Alan", "Barry", "Annessia", "Dorothy", "Stephany"]
```

You can also assign the new elements that you want to add to the list to a new variable as follows:

```py
names = ["Rigoberto", "Alan", "Barry"]

names2 = ["Annessia", "Dorothy", "Stephany"]

names.extend(names2)

print(names) #Output: ["Rigoberto", "Alan", "Barry", "Annessia", "Dorothy", "Stephany"]
```

This is a simple way to add elements to a list, let's see more information on how the Python list extend method works and its use cases in the following sections.

![extended list](https://cantswingacat.co.uk/wp-content/uploads/2019/08/spongebob-list-gif.gif?raw=true)

## Python List Extend Method (Adding a List)

Sometimes we will need to add items from one list to another, and by adding items we mean adding those items one by one to our desired list. Why are we telling you this? You might already be familiarized with the `.append()` method to add elements to a list, this method takes an argument and adds it as one more element to our original list, it means that, if we pass a list as an argument, it will be added as a list inside our original list, like this:

```py
brands = ["Apple", "Tesla", "Netflix"]

extra_brands = ["Nike", "Samsung", "Sony"]

brands.append(extra_brands)

print(brands) #Output: ["Apple", "Tesla", "Netflix", ["Nike", "Samsung", "Sony"]]
```

See that the `extra_brands` list was added as a list inside the `brands` list instead of just adding the `extra_brands` list elements one by one. Here is where we use the extend method as follows:

```py
brands = ["Apple", "Tesla", "Netflix"]

extra_brands = ["Nike", "Samsung", "Sony"]

brands.extend(extra_brands)

print(brands) #Output: ["Apple", "Tesla", "Netflix", "Nike", "Samsung", "Sony"]
```

Now the elements of the `extra_brands` list were individually added to the `brands` list, and not as a "list inside a list". This is since the extend method iterates the argument that it takes, this is called the iterable (`.extend(iterable)`) and adds each element of that argument iterating through all of the argument elements. 

## Python List Extend Method (Adding a String)

The extend method also accepts other sequences besides a list, in this case, let's see how adding a string using the extend method works. Remember that a string is a chain of characters, so when we use the extend method, all the characters of the string will be added to the list as individual elements. Let's see an example as follows:

```py
brands = ["Apple", "Tesla", "Netflix"]

extra_brand = "Nike"

brands.extend(extra_brand)

print(brands) #Output: ['Apple', 'Tesla', 'Netflix', "N", "i", "k", "e"]
```

If you'd like to add the whole string as a new element to any list, it is best to use `.append()` so you would have:

```py
brands = ["Apple", "Tesla", "Netflix"]

extra_brand = "Nike"

brands.append(extra_brand)

print(brands) #Output: ['Apple', 'Tesla', 'Netflix', "Nike"]
```

## Python List Extend Method (Adding an Integer)

If we try to extend a list with any integer, we will get an error since an integer is not an iterable element, it is not a sequence of elements where we can iterate each one of them. So, we will get a `TypeError: 'int' object is not iterable`. **We cannot add an integer to a list using the extend method**, but don't panic, we can still use the `.append()` method to add it without problems as follows:

```py
# Using extend to add an integer into a list:
stuff = ["Bat", "Tire", "Computer"]

random_number = 13

stuff.extend(random_number)

print(stuff) # Output: Traceback (most recent call last): File "<string>", line 5, in <module> TypeError: 'int' object is not iterable
  
# Using append to add an integer into a list:

stuff = ["Bat", "Tire", "Computer"]

random_number = 13

stuff.append(random_number)

print(stuff) # Output: ['Bat', 'Tire', 'Computer', 13]
```

## Python List Extend Method (Adding a Tuple or a Set)

Adding a Tuple or a Set to a list using the Python list extend method works the same way as adding a list. Both Sets and Tuples are chains of elements that can be iterable in the same way as lists, if we use the extend method, all elements of a Set or Tuple will be added to our desired list. Let's see an example below:

```py
# Adding a Tuple:
brands = ["Apple", "Tesla", "Netflix"]

tuple_brands = ("Nike", "Samsung", "Sony")

brands.extend(tuple_brands)

print(brands) #Output: ["Apple", "Tesla", "Netflix", "Nike", "Samsung", "Sony"]

# Adding a Set:
brands = ["Apple", "Tesla", "Netflix"]

set_brands = {"Nike", "Samsung", "Sony"}

brands.extend(set_brands)

print(brands) #Output: ["Apple", "Tesla", "Netflix", "Nike", "Samsung", "Sony"]
```

## Python List Extend Method (Adding a Dictionary)

We can either add the dictionary keys or values using the Python list extend method into any list, if we just want to add the dictionary keys, we just need to pass our dictionary variable to the extend method and if we want to add the dictionary values, we need to pass our dictionary variable alongside `.values()`, like this `list.extend(dictionary.values())`. Let's see an example below:

```py
# Adding Dictionary Keys:
names = ["Charlie", "Melissa", "Jake"]

ages = {"age1":15, "age2":50, "age3": 8}

names.extend(ages)

print(names) #Output: ["Charlie", "Melissa", "Jake", "age1", "age2", "age3"]

# Adding Dictionary Values:
names = ["Charlie", "Melissa", "Jake"]

ages = {"age1":15, "age2":50, "age3": 8}

names.extend(ages.values())

print(names) #Output: ["Charlie", "Melissa", "Jake", 15, 50, 8]
```

In this article we could see that the Python List Extend method is used in different ways depending on the type of data we are working with in our projects, make sure you are aware of this in your future projects!
