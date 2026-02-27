#!/usr/bin/env python3
"""Supprime le fond de l'image hero (homme + hologramme) et enregistre en PNG transparent."""
import sys
import shutil
from pathlib import Path

try:
    from rembg import remove
except ImportError:
    print("Installez rembg : pip install rembg pillow")
    sys.exit(1)

base = Path(__file__).resolve().parent.parent
input_path = base / "public/assets/images/home/home-hero-software-innovation.png"
# Écrit la version sans fond dans un fichier temporaire puis remplace l'original
output_path = base / "public/assets/images/home/home-hero-software-innovation-nobg.png"
final_path = base / "public/assets/images/home/home-hero-software-innovation.png"

if not input_path.exists():
    print(f"Fichier introuvable : {input_path}")
    sys.exit(1)

with open(input_path, "rb") as f:
    data = f.read()

print("Suppression du fond en cours (premier run peut télécharger un modèle)...")
out = remove(data)

with open(output_path, "wb") as f:
    f.write(out)
# Remplacer l'original par la version sans fond (même nom = pas de changement de code)
shutil.move(str(output_path), str(final_path))
print(f"OK : {final_path} (fond supprimé)")
