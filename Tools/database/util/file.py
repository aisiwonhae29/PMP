from pathlib import Path
import json

def read_file(data):
    file_path = Path(__file__).resolve().parents[1] / "data" / data
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()
        return lines

def text_to_json(data):
    json_data = {}
    title, _, *rest = data # first title, skip second, rest content
    json_data = {
                    "title" : title.strip().removeprefix("# "), 
                    "content" : {k: v for k, v in (item.strip().split(",", 1) for item in rest)}
                }
    return json_data

def test():
    exam = read_file("test.txt")
    json = text_to_json(exam)
    print(json)
    for item in json["content"]:
        print(item, ":", json["content"][item])