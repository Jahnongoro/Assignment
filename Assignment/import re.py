import re

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

# Example 3: re.findall to extract dates
text3 = "The dates are 2023-01-01, 2024-02-02"
pattern3 = r"(\d{4})-(\d{2})-(\d{2})"
dates = re.findall(pattern3, text3)
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
result5 = re.sub(pattern5, replacement, text5)
print(result5)

# Example 6: re.split to split text
text6 = "Words, separated, by,commas (some spaces)"
pattern6 = r",\s*"  # Comma followed by zero or more spaces
result6 = re.split(pattern6, text6)
print(result6)

# Example 7: re.compile for performance (case-insensitive)
compiled = re.compile(r'hello', re.IGNORECASE)
text7 = "Hello, world!"
match7 = compiled.search(text7)
if match7:
    print("Match found")
else:
    print("No match found")
    