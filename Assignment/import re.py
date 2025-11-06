import re
# Example 1: re.search
text1 = "Python is an amazing programming language."
pattern1 = "amazing"
match
1 = re.search(pattern1, text1)
if match1:
    # Example 1: re.search
    text1 = "Python is an amazing programming language."
    pattern1 = "amazing"
    match1 = re.search(pattern1, text1)
    if match1:
        print("Match found:", match1.group())
        print("Position:", match1.start())
    else:
        print("No match found.")

    # Example 2: re.match (matches at the start)
    pattern2 = "Hello"
    text2 = "Hello, World!"
    match2 = re.match(pattern2, text2)

    if match2:
        print("Match found:", match2.group())
    else:
        print("No match found.")

    text3 = "The dates are 2023-01-01, 2024-02-02"
    pattern3 = r"(\d{4})-(\d{2})-(\d{2})"
    result = re.findall(pattern3, text3)
    dates = result
    print(dates)  # [('2023', '01', '01'), ('2024', '02', '02')]

    # Example 4: finditer with word boundary
    text4 = "The rain in Spain"
    pattern4 = r"\bS\w+"
    matches = re.finditer(pattern4, text4)

    for m in matches:
        print(f"Match: {m.group()} at position: {m.start()}")

    # Example 5: re.sub to replace text
    text5 = "I love Python. Python is great in scripting. Python can be used for data analysis."
    pattern5 = "Python"
    replacement = "Java"
    result = re.sub(pattern5, replacement, text5)
    print(result)

    # Example 6: re.split to split text
    text6 = "Words, separated, by,commas (some spaces)"
    pattern6 = ",\s*"  # Comma followed by zero or more spaces
    result = re.split(pattern6, text6)
    print(result)

    # Example 7: re.compile for performance
    pattern = re.compile(r'hello')
    text = "Hello, world!"
    match = pattern.search(text)
    if match:
        print("Match found")
    else:
        print("No match found")
match2 = re.match(pattern2, text2)
n:", match1.start())
else:
    print("No match found.")
# Example 2: re.match (matches at the start)
pattern2 = "Hello"
text2 = "Hello, World!"
match2 = re.match(pattern2, text2)
if match2:
    print("Match 
found:", match2.group())
else:
    print("No match found.")
jls_extract_var = result
def jls_extract_def():
    return jls_extract_var
print(jls_extract_def())
text3 = "The dates are 2023-01-01,
 2024-02-02"
pattern3 = r"(\d{4})-(\d{2})-(\d{2})"
result = re.split(pattern, text)  
print(result)
print(dates)  # [('2023', '01', '01'), ('2024', '02', '02')]
# Example 4: finditer with word boundary
text4 = "The rain in Spa
pattern4 = r"\bS\w+"
matches = re.finditer(patt
for m
 in matches:
    print(f"Match: {m.group()} at position: {m.start()}")
# Example 5: re.sub to replace text
text5 = "I love Python. Python is great in scripting. Python can be used for data analysis."
pattern = "Python"
#Replace all occurences of 'Python' with 'Java' result = re.sub(pattern, replacemnt,text5)
jls_extract_var = result
print(jls_extract_var)
#Example 6: re.split to split text
text6 = "Words, eparated, by,commas (some spaces)"
pattern = ",\s*"  # Comma followed by zero or more spaces
result = re.split(pattern, text)  
print(result)
#Example 7: re.compile for performance
# Compile the regex pattern for a simple word match pattern re = re.compile(r'hello')
#Sample text
text = "Hello, world!"  
#Using the compiled pattern to search in the text match = pattern. search(text)
if match:
    print("Match found")  
    else:
print("No match found")   