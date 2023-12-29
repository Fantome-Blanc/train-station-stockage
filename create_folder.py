# -*- coding: utf-8 -*-

import os
import json

def create_folders(data, parent_path="."):
    for key, value in data.items():
        current_path = os.path.join(parent_path, key)
        os.makedirs(current_path, exist_ok=True)

        if isinstance(value, dict):
            create_folders(value, current_path)
        elif isinstance(value, list):
            for item in value:
                os.makedirs(os.path.join(current_path, item), exist_ok=True)

if __name__ == "__main__":
    with open("template.json", "r", encoding="utf-8") as file:
        template_data = json.load(file)

    create_folders(template_data)
    print("Dossiers créés avec succès.")