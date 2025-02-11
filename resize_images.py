from PIL import Image
import os

# Folder containing images
image_folder = "C:/Users/Jayadev/Desktop/Vijay_REsume/portfolio"
output_folder = "C:/Users/Jayadev/Desktop/Vijay_REsume/portfolio"

# Ensure output folder exists
os.makedirs(output_folder, exist_ok=True)

# Resize settings
max_width = 300  # Adjust max width as needed

for filename in os.listdir(image_folder):
    if filename.endswith((".jpg", ".jpeg", ".png")):
        img_path = os.path.join(image_folder, filename)
        img = Image.open(img_path)

        # Maintain aspect ratio
        width_percent = (max_width / float(img.size[0]))
        new_height = int((float(img.size[1]) * float(width_percent)))
        resized_img = img.resize((max_width, new_height), Image.ANTIALIAS)

        # Save the resized image
        resized_img.save(os.path.join(output_folder, filename))

print("✅ All images resized successfully!")
