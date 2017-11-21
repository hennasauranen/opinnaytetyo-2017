# opinnaytetyo-2017

Täältä löytyy opinnäytetyöni testisovellukset, joita käytin havainnointiin ja testaukseen opinnäytetyössäni.
Lataa kokopaketti komennolla:
```
git clone https://github.com/hennasauranen/opinnaytetyo-2017.git
```

## Kansio isomorphic-react

Täältä löytyy isomorfinen testisovellukseni.

1. Siirry kansioon isomorphic-react ja aja komento: 
```
yarn
```
 - Tämä lataa tarvittavat riippuvuudet, jotta sovellus saadaan kasaan.
2. Asenna JSON-server: https://github.com/typicode/json-server

3. Siirry kansioon json-server ja käynnistä komennolla: 
```
json-server -p 4000 animals-json.json
```
 - Json-server -kansiosta löytyy animals-json.json niminen tiedosto, josta sovellus hakee tietonsa. Sovellus on laitettu kuuntelemaan osoitetta 'http://localhost:4000/animals-json'
4. Käynnistä sovellus komennolla 
```
yarn start
```
Tämä sovellus käyttää Welly Shenin repoa, jonka löytää osoitteesta <li href="https://github.com/wellyshen/react-cool-starter">https://github.com/wellyshen/react-cool-starter</li> 

###Miksi Json-server?
Json-serverillä on REST-rajapinta, jonka avulla sillä voi suoraan hakea yksittäisten osioiden tiedot suoraan syöttämällä niiden avain linkin perään. 

Esim. Jos on json tietosto, jossa on avaimina kissa ja koira linkki: http://localhost:4000/animals-json/kissa palauttaa clientille Jsonin, jossa on pelkän kissan tiedot. Tätä ominaisuutta tarvitaan sovelluksen isomorfisessa rakenteessa.

<h2>Kansio react</h2>

Tässä kansiossa on normaali react sovellukseni, joka pyörii herokun palvelimella osoitteessa:https://react-seo-sauranen.herokuapp.com/

Jos kuitenkin haluat napata sen omalle koneellesi toimi seuraavasti:
1. Siirry kansioon react ja aja komento: 
```
yarn
```
 - Tämä lataa tarvittavat riippuvuudet, jotta sovellus saadaan kasaan.
4. Käynnistä sovellus komennolla
```
yarn start
```
5. Tähän sovellukseen et tarvitse Json-serveriä, sillä sovellus on rakenteeltaan erilainen kuin isomorfinen sovellus. Tähän sovellukseen koko Json tuodaan kerralla <li href="https://api.myjson.com/bins/1aeuin">tästä osoitteesta</li> ja puretaan se clientin puolella. 

Tämä sovelluksen boilerplate: https://www.reactboilerplate.com/
