# Graus E‑commerce

Deze repository bevat een eenvoudige Next.js‑website voor **Graus E‑commerce**.  
Het doel is om potentiële klanten een overzicht van beschikbare social‑media‑boost‑pakketten te geven en hen gemakkelijk contact op te laten nemen.

## Installatie

1. Zorg ervoor dat Node.js (versie 18 of hoger) en npm zijn geïnstalleerd.  
2. Navigeer naar de projectmap:

   ```bash
   cd graus-ecommerce
   ```

3. Installeer de afhankelijkheden:

   ```bash
   npm install
   ```

4. Start de ontwikkelserver:

   ```bash
   npm run dev
   ```

   De applicatie draait daarna op [http://localhost:3000](http://localhost:3000).

## Productoverzicht

De website toont drie pakketten:

- **Starterpakket** – Bio‑optimalisatie, 10 tips & tricks en contentideeën.
- **Groei‑pakket** – Alles uit Starterpakket plus 30 extra ideeën en een op maat gemaakte Reel‑template.
- **Pro Boost‑pakket** – Alles uit Groei‑pakket met 500 gegarandeerde volgers en een AI‑geoptimaliseerde caption‑lijst.

Bezoekers kunnen via de bestelknoppen direct een e‑mail openen om het gewenste pakket te bestellen. Daarnaast is er een contactformulier waarmee algemene vragen gesteld kunnen worden; verzenden opent eveneens de e‑mailclient.

## Hosting via GitHub Pages

Deze site kan statisch worden gebouwd en gedeployed via GitHub Pages. Een mogelijke workflow:

1. Bouw de site:
   ```bash
   npm run build
   ```
2. Exporteer de website naar een statische versie:
   ```bash
   npx next export
   ```
   Dit genereert een map `out/` met statische HTML‑bestanden.
3. Commit de inhoud van de `out/` map naar de `gh-pages` branch van dit repository.
4. Activeer GitHub Pages via de repositoryinstellingen op de `gh-pages` branch.

## Licentie

De code in deze repository is uitsluitend bedoeld ter demonstratie en is niet gekoppeld aan een specifieke licentie.
