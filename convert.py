import os
import re

IN_DIR = 'stitch_screens'
OUT_DIR = 'frontend/src/components/screens'
os.makedirs(OUT_DIR, exist_ok=True)

def style_replace(match):
    style_str = match.group(1)
    # Basic conversion of style="width: 35%" to style={{width: '35%'}}
    pairs = [p.strip() for p in style_str.split(';') if p.strip()]
    obj_str = ", ".join([f'"{k.strip()}": "{v.strip()}"' for p in pairs for k, v in [p.split(':', 1)]])
    return f"style={{{{{obj_str}}}}}"

for file in os.listdir(IN_DIR):
    if not file.endswith('.html') or file == 'Dashboard.html':
        continue
    with open(os.path.join(IN_DIR, file), 'r') as f:
        html = f.read()
    
    # Extract <main> ... </main>
    main_match = re.search(r'<main[^>]*>(.*?)</main>', html, re.DOTALL | re.IGNORECASE)
    if not main_match:
        print(f"Skipping {file}, no <main> found.")
        continue
    content = main_match.group(1)
    
    # className
    content = content.replace('class="', 'className="')
    # htmlFor
    content = content.replace('for="', 'htmlFor="')
    # viewBox
    content = content.replace('viewbox="', 'viewBox="')
    
    # self-close tags
    def close_tag(match):
        tag, attrs = match.group(1), match.group(2)
        if attrs.endswith('/'): return f"<{tag}{attrs}>"
        return f"<{tag}{attrs} />"
    content = re.sub(r'<(img|input|br|hr|path|circle)([^>]*?)>', close_tag, content)
    
    # style=""
    content = re.sub(r'style="([^"]*)"', style_replace, content)
    
    # Comments <!-- --> to {/* */}
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    # Write component
    name = file.replace('.html', '')
    comp = f'''import React from "react";

export default function {name}() {{
  return (
    <main className="p-8 space-y-8 flex-1 overflow-y-auto">
      {{/* Header Section / Extracted from {name} */}}
{content}
    </main>
  );
}}
'''
    out_file = os.path.join(OUT_DIR, f"{name}.tsx")
    with open(out_file, 'w') as f:
        f.write(comp)
    print(f"Converted {name}")

