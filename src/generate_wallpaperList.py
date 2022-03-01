import json
import os


def get_number_from_string(s):
    return int(s.split(".")[0])


wallpaper_list_path = "components/AllWallpapers/wallpaperList.jsx"
wallpapers_path = "../public/walls"
website = "https://chaudharynishant.github.io/mesher"
file_names = os.listdir(wallpapers_path)

with open(wallpaper_list_path, "w") as f:
    f.write("const wallpaperList = [\n")
    for file_name in sorted(file_names, key=get_number_from_string, reverse=True):
            f.write('{\n"name": "Mesh ' + str(get_number_from_string(file_name)) + '",\n')
            f.write('"author": "",\n')
            f.write('"url": "' + website + '/walls/' + file_name + '",\n')
            f.write('"thumbnail": "' + website + '/thumbs/' + file_name + '",\n')
            f.write('"collections": "ALL,MESH,GRADIENT"\n},\n')
    f.write("]\n\nexport default wallpaperList;")
