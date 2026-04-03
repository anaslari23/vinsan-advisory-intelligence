import os, glob, re

for path in glob.glob('frontend/src/components/screens/*.tsx'):
    with open(path, 'r') as f:
        content = f.read()
    
    # Simple replace
    content = content.replace('checked=""', 'defaultChecked')
    content = content.replace('selected=""', 'defaultValue')
    content = content.replace('onclick=', 'onClick=')
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    
    content = content.replace('stroke-linecap', 'strokeLinecap')
    content = content.replace('stroke-linejoin', 'strokeLinejoin')
    content = content.replace('stroke-width', 'strokeWidth')
    content = content.replace('stroke-dasharray', 'strokeDasharray')
    content = content.replace('stroke-dashoffset', 'strokeDashoffset')
    
    # We strip `</path>` and `</circle>`
    content = content.replace('</path>', '')
    content = content.replace('</circle>', '')

    with open(path, 'w') as f:
        f.write(content)

print("Safely fixed JSX syntax.")
