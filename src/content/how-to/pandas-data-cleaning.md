---
title: "Data Cleaning with Pandas: A Comprehensive Guide"
subtitle: "Learn how to clean and preprocess data using Pandas in Python. Discover essential techniques and functions for handling missing values, duplicates, outliers, and more. "
tags: ["python","pandas"]
authors: ["DF27ARTS"]

---

In data science or [Machine learning](https://4geeksacademy.com/us/machine-learning-engineer/machine-learning-engineer), one of the most important tasks performed when working with large amounts of data is data cleaning, data cleaning is the process of removing typing errors, inconsistencies, and missing values from a dataset. In this article, we'll see how to clean a dataset using **pandas** step by step.

## What is Data Cleaning?

Data cleaning is the process of removing errors or inconsistencies from a dataset. To clean a dataset of information in data science or machine learning we have to make sure that there are no missing values, typing errors, type inconsistencies, duplicate rows, `None`, `NaN` or `empty` values, unnecessary columns, and many things more. The [Pandas library](https://4geeks.com/lesson/intro-to-pandas) offers us a powerful toolkit for data cleaning. It contains a variety of functions that help us deal with these errors and fix them. 

In the following example, you will see how to clean a mock dataset of information step by step with the **pandas** library. This dataset is a simulation of a customer list.

## Data cleaning tutorial step by step

First, you need to import pandas in Python

```py
import pandas as pd
```

After that, use the following code to create the user's data set:

```py
df_users = pd.DataFrame({
    "user_id": [234, 235, 236, 237, 237, 238, 239, 240, 241, 242, 242],
    "Name": ["Tom", "Alex--", "..Thomas", "John", "John", "Paul/", "Emma9", "Joy", "Samantha_", "Emily", "Emily"],
    "Last_name": ["Smith", "johnson", "brown", "Davis", "Davis", "None", "wilson", "Thompson", "Lee", "Johnson", "Johnson"],
    "age": [23, 32, 45, 22, 22, 50, 34, 47, 28, 19, 19],
    "Phone": ["555/123/4567", "333-234-5678", "444_456_7890", "111-222-3333", "111-222-3333", None, "333/987/4567", "222/345_987", "(777) 987-6543", "777-888-9999", "777-888-9999"],
    "Email": ["smith@email.com", "johnson@hotmail.com", "brown@email.com", "davis@mail.com", "davis@mail.com", "John@gmail.com", "wilson@mail.com", "thompson@email.com", "lee@email.com", "emily@hotmail.com", "emily@hotmail.com"],
    "Not_Useful_column": [None, None, None, None, None, None, None, None, None, None, None]
})

print(df_users)
```
> The user's data set will display in this way
```bash
    user_id       Name Last_name  age           Phone                Email Not_Useful_column
0       234        Tom     Smith   23    555/123/4567      smith@email.com              None
1       235     Alex--   johnson   32    333-234-5678  johnson@hotmail.com              None
2       236   ..Thomas     brown   45    444_456_7890      brown@email.com              None
3       237       John     Davis   22    111-222-3333       davis@mail.com              None
4       237       John     Davis   22    111-222-3333       davis@mail.com              None
5       238      Paul/      None   50            None       John@gmail.com              None
6       239      Emma9    wilson   34    333/987/4567      wilson@mail.com              None
7       240        Joy  Thompson   47     222/345_987   thompson@email.com              None
8       241  Samantha_       Lee   28  (777) 987-6543        lee@email.com              None
9       242      Emily   Johnson   19    777-888-9999    emily@hotmail.com              None
10      242      Emily   Johnson   19    777-888-9999    emily@hotmail.com              None
```

Here we use the pandas `DataFrame()` function to create a mock dataset, this dataset contains 7 columns and 11 rows, the columns are, a `user_id` which is the user's unique id, a `Name` column, a `Last_name` column, the user's `age`, the user's `Phone` number, the user's `Email`, and finally a non-useful column called `Not_Useful_column` which we will use as an example of how to delete an unnecessary column from a dataset.

As you can see in the example dataset, the data has some inconsistencies in the columns, a few unnecessary symbols in the `Name` column, some values in the `Last_name` column are not capitalized, and each of the values in the `Phone` column have different syntax which makes it difficult to work with them.

### 1. Delete duplicated rows

The first thing to do when cleaning a dataset is to check and delete duplicated rows. As you can see in the dataset example the rows in index `3` and `4` as well as in index `9` and `10` have the same values, to delete these duplicated rows use the following code:

```py
df_users = df_users.drop_duplicates()
```
> df_users
```bash
   user_id       Name Last_name  age           Phone                Email Not_Useful_column
0      234        Tom     Smith   23    555/123/4567      smith@email.com              None
1      235     Alex--   johnson   32    333-234-5678  johnson@hotmail.com              None
2      236   ..Thomas     brown   45    444_456_7890      brown@email.com              None
3      237       John     Davis   22    111-222-3333       davis@mail.com              None
5      238      Paul/      None   50            None       John@gmail.com              None
6      239      Emma9    wilson   34    333/987/4567      wilson@mail.com              None
7      240        Joy  Thompson   47     222/345_987   thompson@email.com              None
8      241  Samantha_       Lee   28  (777) 987-6543        lee@email.com              None
9      242      Emily   Johnson   19    777-888-9999    emily@hotmail.com              None
```

As you can see the function [drop_duplicates](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop_duplicates.html) removes all the duplicated rows, in our example dataset, the function successfully removed the rows at index `4` and `10`.

### 2. Delete unnecessary columns

After deleting the duplicated rows, we have to delete all the columns that we're not gonna need, in our case the `Not_Useful_column` column. To delete this column use the following code: 

```py
df_users = df_users.drop(columns="Not_Useful_column")
```
> df_users
```bash
   user_id       Name Last_name  age           Phone                Email
0      234        Tom     Smith   23    555/123/4567      smith@email.com
1      235     Alex--   johnson   32    333-234-5678  johnson@hotmail.com
2      236   ..Thomas     brown   45    444_456_7890      brown@email.com
3      237       John     Davis   22    111-222-3333       davis@mail.com
5      238      Paul/      None   50            None       John@gmail.com
6      239      Emma9    wilson   34    333/987/4567      wilson@mail.com
7      240        Joy  Thompson   47     222/345_987   thompson@email.com
8      241  Samantha_       Lee   28  (777) 987-6543        lee@email.com
9      242      Emily   Johnson   19    777-888-9999    emily@hotmail.com
```

The [drop](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html) method with the `columns="Not_Useful_column"` parameter removes the `Not_Useful_column` column from our example dataset, but it must be assigned back to the `df_users` variable to replace its values with those of the new dataset.

### 3. Correct syntax errors in columns

Now that we have removed all the duplicated rows and unnecessary columns, we have to check column by column to see if any of them need to be corrected. Some of the values in the `Name` column have unnecessary symbols at the beginning or end of the name, we can correct these errors with the following code: 

```py
df_users["Name"] = df_users["Name"].str.strip("[-_./0-9]{1}")
```
> df_users
```bash
   user_id      Name Last_name  age           Phone                Email
0      234       Tom     Smith   23    555/123/4567      smith@email.com
1      235      Alex   johnson   32    333-234-5678  johnson@hotmail.com
2      236    Thomas     brown   45    444_456_7890      brown@email.com
3      237      John     Davis   22    111-222-3333       davis@mail.com
5      238      Paul      None   50            None       John@gmail.com
6      239      Emma    wilson   34    333/987/4567      wilson@mail.com
7      240       Joy  Thompson   47     222/345_987   thompson@email.com
8      241  Samantha       Lee   28  (777) 987-6543        lee@email.com
9      242     Emily   Johnson   19    777-888-9999    emily@hotmail.com
```

The `strip()` method removes empty values at the beginning and at the end of a string, if we pass a specific value as a parameter it will look for that value at the beginning or at the end and remove it. In this example, we call the `strip()` method in the `Name` column `df_users["Name"].str.strip()` and pass it as parameters the values that we want to remove in a string `[-_./0-9]{1}`, then we access the dataset of the `Name` column `df_users["Name"]` and we assign it the new values.

Now that we have cleaned the `Name` column, we have to clean the `Last_name` column, as you can see in the dataset example, some of the values in the `Last_name` column do not have the first letter capitalized,
to fix this use de following code:

```py
df_users["Last_name"] = df_users["Last_name"].apply(
    lambda element: element[0:1].upper() + element[1:] if type(element) == str else element
)
```
> df_users
```bash
   user_id      Name Last_name  age           Phone                Email
0      234       Tom     Smith   23    555/123/4567      smith@email.com
1      235      Alex   Johnson   32    333-234-5678  johnson@hotmail.com
2      236    Thomas     Brown   45    444_456_7890      brown@email.com
3      237      John     Davis   22    111-222-3333       davis@mail.com
5      238      Paul      None   50            None       John@gmail.com
6      239      Emma    Wilson   34    333/987/4567      wilson@mail.com
7      240       Joy  Thompson   47     222/345_987   thompson@email.com
8      241  Samantha       Lee   28  (777) 987-6543        lee@email.com
9      242     Emily   Johnson   19    777-888-9999    emily@hotmail.com
```

The [apply](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.apply.html) function is used to apply a `lambda` function to each element in a column of a dataset, in this example, it is used to apply a function to the `Last_name` column that capitalize the first letter of each string with the syntax `element[0:1].upper() + element[1:]` but we have to check that the current value is of type `string`, if it's not then we have to return the same value, this can be done with the syntax `if type(element) == str else element`.

### 4. Set a unique pattern for a column

After cleaning the `Name` column and the `Last_name` column, we have to set a single pattern for the `Phone` column, as shown in the example dataset there are different patterns in the values of this column and we have to set a single one for all of them. To do this use the code: 

```py
df_users["Phone"] = df_users["Phone"].str.replace(r"[^0-9]", '', regex=True)

df_users["Phone"] = df_users["Phone"].apply(
    lambda item: f"{item[0:3]}-{item[3:6]}-{item[6:]}" if type(item) == str and len(item) == 10 else None
)
```
> df_users
```bash
   user_id      Name Last_name  age         Phone                Email
0      234       Tom     Smith   23  555-123-4567      smith@email.com
1      235      Alex   Johnson   32  333-234-5678  johnson@hotmail.com
2      236    Thomas     Brown   45  444-456-7890      brown@email.com
3      237      John     Davis   22  111-222-3333       davis@mail.com
5      238      Paul      None   50          None       John@gmail.com
6      239      Emma    Wilson   34  333-987-4567      wilson@mail.com
7      240       Joy  Thompson   47          None   thompson@email.com
8      241  Samantha       Lee   28  777-987-6543        lee@email.com
9      242     Emily   Johnson   19  777-888-9999    emily@hotmail.com
```

Here we want to establish the pattern `000-000-0000` on all the values in the `Phone` column, for this first, we have to delete all the values that are not a number with the [replace](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.replace.html) function and the syntax `r"[^0-9]",  '', regex=True`, after this, we want to set this pattern on all the phone numbers in this column, for this, we use a `lambda` function and the f-string (format string) expression `f"{item[0:3]}-{item[3:6]}-{item[6:]}"` which is used to embed expressions inside string literals, but we do this only if the current value has a `string` type and have ten characters, as you can see in the index `5` of the `Phone` column we have a `None` value and in the index index `7` of the same column we have a number with only 9 digits, none of these characters meet the condition so they are replaced by a `None` value that will be removed later.

### 5. Delete rows with None values

Now that we have cleaned all the rows in the dataset, we have to delete the rows that contain `None` values and redefine the index of the rows in the dataset.

```py
# Delete columns with None values
df_users = df_users.dropna()

# reset the index of the columns
df_users = df_users.reset_index(drop=True)
```
> df_users
```bash
   user_id      Name Last_name  age         Phone                Email
0      234       Tom     Smith   23  555-123-4567      smith@email.com
1      235      Alex   Johnson   32  333-234-5678  johnson@hotmail.com
2      236    Thomas     Brown   45  444-456-7890      brown@email.com
3      237      John     Davis   22  111-222-3333       davis@mail.com
4      239      Emma    Wilson   34  333-987-4567      wilson@mail.com
5      241  Samantha       Lee   28  777-987-6543        lee@email.com
6      242     Emily   Johnson   19  777-888-9999    emily@hotmail.com
```

The [dropna](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html) function deletes all the rows of a column containing `None` values and the [reset_index](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.reset_index.html) function with the `drop=True` parameter reset the index of the rows and delete the old ones.

Now we have a perfectly clean and consistent dataset to start working with. This was a simple example of how to clean the data of a dataset.

## Conclusion

Data cleaning is a very important step before starting to work with a dataset in **data science** or **machine learning**, it ensures that the data has no syntax errors, `None` or `NaN` values, duplicated rows, unnecessary columns, and many more things. A dataset can be clean in many ways not just the ones seen in this article, Pandas offers a wide variety of functions that helps us with this process. If you want to learn more about pandas in [Python](https://4geeks.com/lesson/intro-to-python) I recommend you to visit the following article which is a [pandas tutorial](https://4geeks.com/interactive-exercise/pandas-exercises-tutorial) where you can find coding exercises, and video tutorials that will help you to learn and improve your skills in the **Pandas** library.
