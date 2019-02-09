import textrazor
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
textrazor.api_key = "
client = textrazor.TextRazor(extractors=["entities", "topics"])


@app.route("/python/ner", methods=["POST"])
def login():
    response = client.analyze(request.form["text"])

    entity_ids = []
    entity_types = []

    # Make sure the order is correct
    sorted_entities = sorted(
        response.entities(),
        key=lambda entity: entity.starting_position)

    for entity in sorted_entities:
        print(entity.id, entity.freebase_types)
        entity_ids.append(entity.id)
        entity_types.append(entity.freebase_types)

    to_return = {
        "entity_ids": entity_ids,
        "entity_types": entity_types
    }

    response = jsonify(to_return)
    return response



if __name__ == '__main__':
    app.run(host="0.0.0.0",
            port=6000,
            debug=False,
            threaded=True)
