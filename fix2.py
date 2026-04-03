import os, glob, re

for path in glob.glob('frontend/src/components/screens/*.tsx'):
    with open(path, 'r') as f:
        content = f.read()
    
    # fix SVGs (stroke- attributes)
    content = content.replace('stroke-linecap', 'strokeLinecap')
    content = content.replace('stroke-linejoin', 'strokeLinejoin')
    content = content.replace('stroke-width', 'strokeWidth')
    content = content.replace('stroke-dasharray', 'strokeDasharray')
    content = content.replace('stroke-dashoffset', 'strokeDashoffset')
    
    # fix self-closing
    def close_tag(match):
        t, attrs = match.group(1), match.group(2)
        if not attrs.endswith('/'):
            return f"<{t}{attrs} />"
        return f"<{t}{attrs}>"
    content = re.sub(r'<(path|circle)([^>]*?)>', close_tag, content)

    with open(path, 'w') as f:
        f.write(content)

# fix page.tsx use client
with open('frontend/src/app/page.tsx', 'r') as f:
    page = f.read()
if '"use client";' not in page:
    with open('frontend/src/app/page.tsx', 'w') as f:
        f.write('"use client";\n' + page)

print("Fixed SVGs and page.tsx.")
