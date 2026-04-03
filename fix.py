import os, glob
for path in glob.glob('frontend/src/components/screens/*.tsx'):
    with open(path, 'r') as f:
        content = f.read()
    content = content.replace('checked=""', 'defaultChecked')
    content = content.replace('selected=""', 'defaultValue')
    content = content.replace('onclick=', 'onClick=')
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    # extra style replacements if any
    with open(path, 'w') as f:
        f.write(content)
print("Fixed JSX attributes.")
