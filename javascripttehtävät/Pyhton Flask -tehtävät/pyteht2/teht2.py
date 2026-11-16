"""Toteuta Flask-taustapalvelu, joka saa URL-osoitteessa englanninkielisen sanan ja palauttaa sen suomenkielisen käännöksen JSON-muodossa.
Tallenna englanti–suomi-sanakirja levylle erilliseen JSON-tiedostoon. (10p)
- Esimerkiksi sanan ”hello” GET-pyynnön http://127.0.0.1:3000/translate/hello on palautettava: json { "English": "hello", "Finnish": "hei" }
Tallenna sanakirja erilliseen dictionary.json-tiedostoon näin (lisää sanoja):
{
   "hello": "hei",
   "computer": "tietokone",
   "school": "koulu",
   ... lisää sisältöä tähän ...
}
Haku ei saa erotella isoja ja pieniä kirjaimia.
Jos sanaa ei löydy, palauta JSON-muotoinen virheilmoitus HTTP-tilakoodilla 404, esimerkiksi:
{
  "error": "Word not found"
}"""

import json

from flask import Flask, Response

import os

app = Flask(__name__)
@app.route('/translate/<engsana>')
def sanakirja(engsana):
        try:
            print(os.getcwd())
            with open("javascripttehtävät/Pyhton Flask -tehtävät/pyteht2/dictionary.json", "r") as tiedosto:
                kaannos = json.load(tiedosto)
            engsana_lowcase = engsana.lower()
            suomsana = kaannos[engsana_lowcase]
            response = {
                "English" : engsana_lowcase,
                "Finnish" : suomsana,
            }
            return response
        except KeyError:
            response = {
                "error": "Word not found",
            }
            json_response = json.dumps(response)
            http_response = Response(response=json_response, status=404, mimetype="application/json")
            return http_response

if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)