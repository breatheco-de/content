---
title: "How to check python version?"
excerpt: "Get the latest version of Python with this easy guide! Learn how to check your current version and upgrade to the newest version with just a few clicks. #Python #VersionCheck #Upgrade"
tags: ["python"]

---

```cmd
python --version
#Output:  Python 3.11.0
```

## Checking the python version

If you have installed python on your system, checking the python version it is as simple as writing the following code, doesn't matter the Operating System (OS) you are using since python will respond to the same commands on all of them.

### For Windows users:
 - Open command terminal (search on the menu bar for `cmd` or press `WIN + R` to open the run window and type `cmd`)
 - Type `python -V` or `python --version`

### For Linux users:
- Open a new terminal
- Type `python -V` or `python --version`

### For MacOS users:
- Go to Finder
- Click on Applications
- Select Utilities
- Terminal
- Type `python -V` or `python --version`
```cmd
python -V
#Output: Python 3.11.0
```

## Checking the Python Script Version

If you need to check the Python version that you are using for a project (remember we can have different python versions installed at the same time on our System, we call it Python Script Version), you can do it like this:

### Using `sys` module

```python
import sys
print (sys.version)
#Output: 3.10.4 (tags/v3.10.4:9d38120, Mar 23 2022, 23:13:41) [MSC v.1929 64 bit (AMD64)]
```

### Using the `platform` module

```python
import platform
print(platform.python_version())
#Output: 3.10.4
```

Both options will return the version with a `string` format. We can obtain this information in the tuple format as well. The return tuple syntax will contain five components: major, minor, micro, release level, and serial:

```python
import sys
print (sys.version_info)
# Output: sys.version_info(major=3, minor=10, micro=4, releaselevel='final', serial=0)
```

Since we are receiving the information in a Tuple format we can access and extract information using an index or by referring to it's name.

```python
import sys
print(sys.version_info[0])
#Output: 3
print(sys.version_info.releaselevel)
#Output: final
```

Hope you enjoy the reading and keep on the Geek side!