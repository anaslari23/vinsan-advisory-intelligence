import json
import urllib.request
import os

screens_file = '/Users/anaslari/.gemini/antigravity/brain/eb030249-ee0e-4ebe-ab42-310883b6718d/.system_generated/steps/32/output.txt'

with open(screens_file, 'r') as f:
    data = json.load(f)

out_dir = '/Volumes/Crucial X9/vinsan_advisory_intelligence/stitch_screens'
os.makedirs(out_dir, exist_ok=True)

for screen in data.get('screens', []):
    title = screen.get('title', 'Untitled').replace(' ', '_')
    print(f"Downloading {title}...")
    
    # Download HTML
    if 'htmlCode' in screen and 'downloadUrl' in screen['htmlCode']:
        html_url = screen['htmlCode']['downloadUrl']
        html_file = os.path.join(out_dir, f"{title}.html")
        urllib.request.urlretrieve(html_url, html_file)
        
    # Download Screenshot
    if 'screenshot' in screen and 'downloadUrl' in screen['screenshot']:
        img_url = screen['screenshot']['downloadUrl']
        img_file = os.path.join(out_dir, f"{title}.png")
        try:
            urllib.request.urlretrieve(img_url, img_file)
        except Exception as e:
            print(f"Failed to download image for {title}: {e}")

print("Done downloading screens.")
