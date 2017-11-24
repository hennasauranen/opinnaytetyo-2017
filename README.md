# opinnaytetyo-2017

Täältä löytyy opinnäytetyöni testisovellukset, joita käytin havainnointiin ja testaukseen opinnäytetyössäni.
Lataa kokopaketti komennolla:
```
git clone https://github.com/hennasauranen/opinnaytetyo-2017.git
```
Käytän työssä npm:n sijaan Yarn:ia, jonka voit asentaa täältää: https://yarnpkg.com/lang/en/

## Kansio isomorphic-react

Täältä löytyy isomorfinen testisovellukseni.

1. Siirry kansioon isomorphic-react ja asenna riippuudet: 
```
cd isomorphic-react
yarn
```
 - Yarn lataa tarvittavat riippuvuudet, jotta sovellus saadaan kasaan.
2. Asenna JSON-server koneellesi täältä: https://github.com/typicode/json-server

3. Avaa toinen command-line työkalu ja siirry sillä kansioon json-server ja käynnistä komennolla: 
```
cd ../json-server
json-server -p 4000 animals-json.json
```
 - Json-server -kansiosta löytyy animals-json.json niminen tiedosto, josta sovellus hakee tietonsa. Sovellus on laitettu kuuntelemaan osoitetta 'http://localhost:4000/animals-json' 
 
4. Käynnistä sovellus ensimmäisellä command-linella komennolla 
```
yarn start:production
```
5. Avaa selain ja mene osoitteeseen:
```
localhost:8080
```
Tämä sovellus käyttää Welly Shenin repoa, jonka löytää osoitteesta <li href="https://github.com/wellyshen/react-cool-starter">https://github.com/wellyshen/react-cool-starter</li> 

###Miksi Json-server?
Json-serverillä on valmis REST-rajapinta, jonka avulla sillä voi suoraan hakea yksittäisten avainparejen arvot JSON-tiedostosta syöttämällä avain linkin perään. 

Esim. Jos on JSON-tietosto, jossa on avaimina kissa ja koira, linkki: http://localhost:4000/animals-json/kissa palauttaa clientille JSON-muodossa vain kissan tiedot. Tätä ominaisuutta tarvitaan sovelluksen isomorfisessa rakenteessa.

<h2>Kansio react</h2>

Tässä kansiossa on normaali react sovellus, joka pyörii herokun palvelimella osoitteessa:https://react-seo-sauranen.herokuapp.com/

Jos kuitenkin haluat testata sen omalla koneellesi toimi seuraavasti:
1. Siirry kansioon react ja asenna riippuvuudet: 
```
cd react

yarn
```
 - Tämä lataa tarvittavat riippuvuudet, jotta sovellus saadaan kasaan.
4. Käynnistä sovellus komennolla
```
yarn start
```
5.sovellus näkyy selaimessa osoitteessa 
```
localhost:3000
```
6. Tähän sovellukseen et tarvitse Json-serveriä, sillä sovellus on rakenteeltaan erilainen kuin isomorfinen sovellus. Tähän sovellukseen koko Json tuodaan kerralla <li href="https://api.myjson.com/bins/1aeuin">tästä osoitteesta</li> ja puretaan se clientin puolella. 

Tämä sovelluksen boilerplate: https://www.reactboilerplate.com/
