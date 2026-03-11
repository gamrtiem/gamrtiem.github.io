from os import listdir
from os.path import isfile, join

filedir = "/run/media/icebrah/buh/SteamLibrary/steamapps/common/Risk of Rain 2/Risk of Rain 2_Data/StreamingAssets/Audio/GeneratedSoundBanks/Windows/"
outputdir = "/home/icebrah/Documents/bwa/"
onlyfiles = [f for f in listdir(filedir) if isfile(join(filedir, f))]

txtfiles = []
for f in onlyfiles:
    if f.endswith(".txt"):
        txtfiles.append(f)

text_file = open(outputdir + "output.html", "w")
text_file.write("<!DOCTYPE html>\n<html>\n<head>\n<link rel=\"stylesheet\" href=\"style.css\">\n<script src=\"https://kit.fontawesome.com/bfcdb4196e.js\"></script>\n\n</head>\n\n\n\n\n\n\n\n<h1>\nRisk Of Rain 2 Wwise Events\n</h1>\n<p> A list of every Wwise event located in risk of rain 2. You can play them using RoR2.Util.PlaySound(Event, gameObject)</p>\n\n\n\n\n")
text_file.write("<table id=\"default\">\n")
text_file.write("   <tr>\n")
text_file.write("       <th id=\"header\">ID</th>\n")
text_file.write("       <th id=\"header\">Name</th>\n")
text_file.write("       <th id=\"header\">Wwise Object Path</th>\n")
text_file.write("   </tr>\n")

for f in txtfiles:
    txt = open(filedir + f, "r")
    firstline = False
    for line in txt:
        if line.__contains__("\\SFX_param\\") or line.replace("\n", "") == "In Memory Audio	ID	Name	Audio source file		Wwise Object Path	Notes	Data Size" or line.replace("\n", "") == "In Memory Audio	ID	Name	Audio source file		Wwise Object Path	Notes	Data Size" or line.replace("\n", "") == "Game Parameter	ID	Name			Wwise Object Path	Notes" or line.replace("\n", "") == "Event	ID	Name			Wwise Object Path	Notes"  or line.replace("\n", "") == "Switch Group	ID	Name			Wwise Object Path	Notes" or line.replace("\n", "") == "Switch	ID	Name	Switch Group			Notes" or line.replace("\n", "") == "State Group	ID	Name			Wwise Object Path	Notes" or line.replace("\n", "") == "State	ID	Name	State Group			Notes"  or line.replace("\n", "") == "Effect plug-ins	ID	Name	Type				Notes" or line == "\n":
            continue
        if firstline:
            splitline = line.split("	")
            text_file.write("   <tr>\n")
            for split in splitline:
                if split != "":
                    text_file.write("       <td>%s</td>\n" % split.replace("\n", ""))
        else:
            firstline = True
        text_file.write("   </tr>\n")
text_file.write("</table>")