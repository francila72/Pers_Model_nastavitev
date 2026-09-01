# Kosovnica – ogrevanje in hlajenje

**Oznaka dokumenta:** KOS-01  
**Revizija:** 4  
**Datum:** 27. 8. 2026  
**Referenca:** P&ID revizija 23, listi 1–9, in tehnični dokument TD-01, revizija 4  
**Pisava:** Segoe UI; nadomestni pisavi Noto Sans in DejaVu Sans

## Navodilo za uporabo

- **Proizvajalčeva koda** pomeni model, serijo ali tipsko oznako.
- **Naročniška številka** pomeni kataloško številko za naročilo.
- Če naročniška številka ni javno potrjena, je zapisano **ni podana** ali
  **določi ponudnik**.
- Alternativna možnost je zapisana v naslednji vrstici; prvi stolpec ostane
  prazen.
- Ponujena alternativa mora izpolniti vse zahteve iz zadnjega stolpca in
  tehničnega dokumenta TD-01.

## 1. Glavna oprema

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| TČ-01 | Reverzibilna monoblok toplotna črpalka | 1 | Samsung | EHS Mono R290, 16 kW, 3~400 V | `AE160CXYBGK/EU` | Izbrana trifazna izvedba 380–415 V, 50 Hz; R290, ogrevanje/hlajenje, vgrajena P-HP, PSV 2,9 bar |
| RC-HP | Žični upravljalnik TČ-01 | 1 | Samsung | MWR-WW10N | `MWR-WW10N` | Potrditi združljivost in ali je že v kompletu TČ-01 |
| WIFI-HP | Komunikacijski modul | 0/1 | Samsung | MIM-H04N | `MIM-H04N` | Opcijsko; samo če funkcija ni vključena |
| K-01 | Uplinjevalni kotel na polena z regulatorjem | 1 | Seltron | UKP 20 SMART + BXD | ni podana | 21 kW, 132 L, PS 3 bar, varnostni HX, povratek ≥55 °C |
| T-01 | Hranilnik za ogrevanje in hlajenje | 1 | Cordivari | VOLANO BS HOT/COLD 1000 | `3001162150006` | 1.034 L, PS 7 bar, −10/+90 °C, izolacija za hlajenje; štirje sistemski priključki A = 3″ F |
| T-02 | Bojler z dvema tuljavama | 1 | Cordivari | BOLLY 2 AP INOX 400 | `3134052010303` | 425 L, inox 316L; hranilnik 6 bar/95 °C, HX 12 bar/110 °C; HX 1,3 m² in 2,0 m²; štirje priključki tuljav G 1″ F |
|  | Alternativni bojler z dvema tuljavama | 1 | Lapesa | GX400M2 | določi ponudnik | Dovoljen samo po ponovnem preračunu površin tuljav, moči in tlačnih izgub |

## 2. Ekspanzijska, varnostna in sanitarna oprema

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| ET-01 | Ekspanzijska posoda tehnične vode | 1 | Zilmet | Cal-Pro 250 | `1300025000` | 250 L, PS 6 bar, p0 nastaviti na 1,5 bar |
|  | Alternativa ET-01 | 1 | Reflex | N 250 | `8214300` | Najmanj 250 L, PS ≥6 bar, temperaturno ustrezna |
|  | Alternativa ET-01 | 1 | Flamco | Contra-Flex 250 | `26225` | Najmanj 250 L, PS ≥6 bar, temperaturno ustrezna |
| SV-ET01 | Namenski servisni ventil ekspanzije | 1 | Reflex | SU R 1 × Rp 1 | `7613100` | EN 12828, zapiranje samo z orodjem, z izpustom; med obratovanjem odprt |
| ET-02 | Pretočna ekspanzijska posoda za pitno vodo | 1 | Zilmet | Hydroflex 50 | `11D0005002` – potrditi | 50 L, PS 10 bar, p0 nastaviti na 2,8 bar, Tmax membrane ≥70 °C; ustreza tudi pri tlaku 4,0 bar |
|  | Alternativa ET-02 | 1 | Zilmet | Hydroflex 35 | `11D0003502` | Pretočna izvedba 35 L je dovoljena samo pri nastavljenem in izmerjenem PRV-DHW ≤3,5 bar |
| ZDA-ET02 | Pretočna armatura ET-02 | 1 | Zilmet | ZDA G3/4" | ni podana | Obvezna pretočna izvedba; pravilna smer pretoka |
|  | Alternativna pretočna armatura | 1 | Reflex | Flowjet | `9116799` | Samo skupaj z ustrezno posodo Refix DD |
| PSV-K | Varnostni ventil kotla | 1 | Caleffi | serija 311, 3 bar, G3/4" | `311530` | Neposredno na K-01, brez zapore, zmogljivost za najmanj 21 kW |
| PSV-BUF | Varnostni ventil hranilnika | 1 | Caleffi | serija 311, 3 bar, G3/4" | `311530` | Neposredno na T-01, brez zapore |
| PSV-HP | Varnostni ventil TČ | 1 | Samsung | vgrajen 2,9 bar | del TČ-01 | Ostane funkcionalen pri servisni izolaciji |
| PSV-DHW | Varnostni ventil sanitarne vode | 1 | Caleffi | serija 311, 6 bar, G3/4" | `311560` | Pitna voda; brez zapore proti T-02 in ET-02 |
| TAS-K | Termični varnostni ventil kotla | 1 | Watts | STS.S, kapilara 1,3 m | `0232620` | Proženje 97 °C, G3/4", hladna voda ≥2 bar |
|  | Alternativa TAS-K z daljšo kapilaro | 1 | Watts | STS.S, kapilara 2 m | `0232720` | Enaka funkcija; uporabiti, če postavitev zahteva daljšo kapilaro |
| AAV-HP | Avtomatski odzračevalnik | 1 | Caleffi | MINICAL G1/2" | `502041` | 10 bar, 120 °C, visoka točka kroga TČ |
| AAV-K | Avtomatski odzračevalnik | 1 | Caleffi | MINICAL G1/2" | `502041` | 10 bar, 120 °C, visoka točka kotlovskega kroga |
| MAN-01 | Manometer | 1 | Watts | MG1-INOX, 0–6 bar, Ø63 mm | `PE350614LF` | Glicerinski, spodnji priključek G1/4" |
| PRV-DHW | Reduktor tlaka sanitarne vode | 1 | Caleffi | 5330H, G3/4" | `533051H` – potrditi | EN 1567, vhod do 16 bar, nastavitev 3,0 bar |
| NV-DHW | Preverljiv nepovratni ventil | 1 | Caleffi | serija 3045, tip EA, G3/4" | `304550` – potrditi | Pitna voda, EN 13959, pred ET-02 in T-02 |
| TMV-DHW | Termostatski mešalni ventil | 1 | Caleffi | serija 521, G3/4" | `521303` | 30–65 °C, z nepovratnima ventiloma in filtri |
|  | Alternativa TMV-DHW | 1 | Caleffi | serija 521 | `521500` | Potrebni ločeni nepovratni ventili in filtri |
| FILL-01 | Polnilni sklop z zaščito BA | 1 | Caleffi | serija 580, R1/2" | `580011` | EN 1717, filter, BA in PRV; izhod nastaviti na 1,8 bar |
|  | Alternativa FILL-01 | 1 | SYR | 6022 | določi ponudnik | Enaka zaščita BA po EN 1717 in reducirni ventil |
| HOSE-01 | Ločljiva polnilna cev | 1 komplet | po izbiri | G1/2", PN10+ | določi ponudnik | Po polnitvi mora biti fizično odstranjena; dolžina po izmeri |
| AFV-HP-S/R | Protizmrzovalni ventil dovoda oziroma povratka | 2 | Giacomini | R148HP | določi ponudnik | Za monoblok, samodejni izpust; uporabo mora dovoliti proizvajalec TČ |
| UPS-HP | Rezervno napajanje črpalke in krmilnika | 1 komplet | po elektroprojektu | določi elektroprojekt | določi ponudnik | Moč, zagonski tok in avtonomija po meritvah TČ-01 |

## 3. Črpalke in hidravlična armatura

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| P-HP | Primarna črpalka TČ | 1 | Samsung | vgrajena | del TČ-01 | Zagotoviti 2,75 m³/h in dokazati razpoložljivo zunanjo tlačno višino |
| P-K | Elektronska kotlovska črpalka | 1 | Grundfos | MAGNA3 32-40 | `97924254` | DN32; potrjena delovna točka najmanj 1,81 m³/h pri 1,2 m; začetna nastavitev približno 1,3 m |
|  | Alternativa P-K z večjo višino | 1 | Grundfos | MAGNA3 32-60 | `97924255` | Uporabiti samo, če izračun preseže območje 32-40 |
|  | Alternativa P-K | 1 | Wilo | Stratos MAXO DN32 | določi ponudnik | Delovna točka in temperaturno območje morata biti dokazani |
| P-L | Elektronska črpalka porabnikov | 1 | Grundfos | MAGNA1 25-100 180 | `99221214` | 1 × 230 V; projektna točka 2,36 m³/h pri najmanj 7,0 m; konstantni tlak; brezpotencialni alarm v REG-01 |
| P-BUF-DHW | Črpalka polnjenja zgornje tuljave iz T-01 | 1 | Grundfos | MAGNA3 32-40 | `97924254` | DN32; potrjena delovna točka najmanj 1,72 m³/h pri 1,1 m; začetna nastavitev približno 1,2 m |
|  | Alternativa P-BUF-DHW | 1 | Wilo | Stratos MAXO DN32 | določi ponudnik | Enaka delovna točka, Tmax ≥110 °C, povratni signal obratovanja |
| MV-DHW | Tripotni preklopni ventil s pogonom | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Kvs 16, 230 V, 2-točkovno, končna kontakta |
| MV-DHW-S | Tripotni preklopni ventil dovoda zgornjega HX | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Izbira K-01/T-01, Kvs 16, 230 V, končna kontakta; sinhroniziran z MV-DHW-R |
| MV-DHW-R | Tripotni preklopni ventil povratka zgornjega HX | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Izbira K-01/T-01, Kvs 16, 230 V, končna kontakta; sinhroniziran z MV-DHW-S |
| MV-SU | Tripotni preklopni ventil s pogonom | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Kvs 16, hlajena voda, 230 V, 2-točkovno, končna kontakta |
| MV-SL | Tripotni preklopni ventil s pogonom | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Enako kot MV-SU |
| MV-LU | Tripotni preklopni ventil s pogonom | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Enako kot MV-SU |
| MV-LL | Tripotni preklopni ventil s pogonom | 1 komplet | ESBE | VRG231 DN32 + ARA600 | ventil `11620300`; pogon določi ponudnik | Enako kot MV-SU |
|  | Alternativa tripotnim preklopnim ventilom | 7 kompletov | Belimo | DN32, tripotni | določi ponudnik | Kvs ≥16, enaka preklopna funkcija, 230 V, končna kontakta |
| MV-K | Tripotni mešalni ventil s pogonom | 1 komplet | ESBE | VRG131 DN32 + ARA600 | ventil `11601200`; pogon določi ponudnik | Kvs 16, 230 V, 3-točkovno, združljivost z BXD |
| MV-SEC | Tripotni modulacijski mešalni ventil sekundarja | 1 komplet | po izbiri | DN25, Kvs 6,3 | določi ponudnik | 0–10 V, povratna informacija položaja; varen položaj: dovod iz T-01 zaprt, bypass odprt; medij 5–70 °C ali širše |
| MZV-K | Dvopotni motorni ventil, fail-open | 1 komplet | Belimo | R2032-S3 + NRF230A-S2 | določi ponudnik | DN32, Kvs 32, 230 V, pomožna kontakta; brez napajanja odprt proti T-01 |
| MZV-DHW-K | Dvopotni motorni ventil, fail-closed | 1 komplet | Belimo | R2032-S3 + NRF230A-S2 | določi ponudnik | DN32, Kvs 32, 230 V, pomožna kontakta; brez napajanja zaprt |
| KV-DN32 | Polnopretočni servisni krogelni ventil | 14 | Giacomini | R910, 1 1/4" | določi ponudnik | Kvs približno 128, PN10+, −10/+110 °C; količina po izmeri |
| NV-K-PRI | Vzmetni nepovratni ventil primarnega kotlovskega dovoda | 1 | Oventrop | DN32, PN25 | `1072310` | Kvs 28,2; smer pretoka K-01 → T-01 |
| NV-DHW-K | Vzmetni nepovratni ventil kotlovske veje zgornjega HX | 1 | Oventrop | DN32, PN25 | `1072310` | Kvs 28,2; smer pretoka K-01 → zgornji HX T-02 |
| NV-BUF | Vzmetni nepovratni ventil veje T-01 → zgornji HX | 1 | Oventrop | DN32, PN25 | `1072310` | Kvs 28,2, preprečuje termosifonski in povratni tok |
| FIL-HP | Magnetni izločevalnik nečistoč | 1 | Caleffi | DIRTMAG DN32 | `546317` | 10 bar, 110 °C, magnetni; zahtevati Δp pri 2,75 m³/h |
|  | Alternativa FIL-HP | 1 | Flamco | XStream Clean DN32 | določi ponudnik | Magnetni, 10 bar, ≥110 °C, znan Δp |
|  | Alternativa FIL-HP | 1 | Spirotech | SpiroTrap MB3 DN32 | določi ponudnik | Magnetni, 10 bar, ≥110 °C, znan Δp |
| SEP-AIR | Mikroizločevalnik zraka | 1 | Caleffi | DISCAL DN32 | `551317` | 10 bar, ≥110 °C, pretok ≥2,75 m³/h, znan Δp |
|  | Alternativa SEP-AIR | 1 | Spirotech | SpiroVent DN32 | `83508306` | Enaka funkcija, 10 bar, ≥110 °C |
| DRAIN | Polnilno-praznilna pipa | 4 | Caleffi | G1/2", s kapo | `508040` | PN10+, najnižje servisne točke |
| FIL-SEC | Magnetni izločevalnik nečistoč sekundarja | 1 | po izbiri | DN32 | določi ponudnik | Na skupnem povratku; 6 bar ali več, 75 °C ali več, parozaporna izolacija, znan Δp pri 2,36 m³/h |
| SEP-AIR-SEC | Centralni mikroizločevalnik zraka sekundarja | 1 | po izbiri | DN32 | določi ponudnik | Ob RAZ-1; 6 bar ali več, 75 °C ali več, parozaporna izolacija |

## 4. Regulacija in tipala

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| DPT-201 | Kontaktno tipalo kondenzacije na RAZ-1 | 1 | Siemens | QXA2601 | `S55770-T325` | 24 V AC/DC, SPDT, IP54, neposredno tipanje na cevi |
|  | Alternativa DPT-201 | 1 | Siemens | QXA2602 | `S55770-T326` | Enaka osnovna funkcija; preveriti izhodni signal |
|  | Alternativa DPT-201 | 1 | E+E Elektronik | EE046-T11 | `EE046-T11` | Neposredno tipanje kondenzacije, združljiv izhod |
| REG-01 | Krmilna omara sistema | 1 komplet | po izbiri integratorja | modularni industrijski PLC/DDC | določi ponudnik | WAGO PFC200, Schneider M241, Siemens Climatix ali S7-1200; I/O razširljiv po spodnjih signalih; lokalni splet, e-pošta/potisna obvestila |
| HMI-01 | Lokalni barvni upravljalni panel | 1 | po izbranem regulatorju | industrijski HMI | določi ponudnik | AUTO/OGREVANJE/HLAJENJE/IZKLOP; lokalni servis brez gesla, samodejni povratek AUTO po 30 min |
| RIO-V1…V6 | Oddaljena Modbus I/O postaja vertikale | 6 | po izbranem regulatorju | DI/DO/AI Modbus RTU | določi ponudnik | Po ena postaja na vertikalo; ob izgubi komunikacije varno zapre prizadeto vertikalo |
| T-SYS | Temperaturna tipala | po I/O seznamu | po izbranem regulatorju | Pt1000 ali ustrezni NTC | določi ponudnik | Lastni tipali T-01 zgoraj/spodaj, sekundarni dovod/povratek in zunanja temperatura; skupna tipala so varnostno kritična |
| TRH-V1…V5 | Tipalo temperature in relativne vlage | 5 | po izbiri integratorja | 2 × 0–10 V | določi ponudnik | Lokacije V1-2, V2-1, V3-3, V4-1 in V5-3N; izračun rosišča |
| FS-FC | Visokonivojsko plovno stikalo kondenzata, NC | 16 | po izbiri | brezpotencialni kontakt | določi ponudnik | Po eno na vsakem hlajenem terminalu; alarm zapre terminal in zahteva ročni reset |
| TM-V1…V6 | Mehanski termomanometer | 12 | po izbiri | 0–6 bar, 0–80 °C ali širše | določi ponudnik | Dva na vertikalo, dovod in povratek; samo lokalni prikaz, brez signala REG-01 |
| AAV-V1…V6 | Avtomatski odzračevalnik vertikale | 6 kompletov | po izbiri | z zapornim servisnim ventilom | določi ponudnik | Na vrhu vsake vertikale; hladni deli parozaporno izolirani |
| REL-PICV | Prioritetni relejni sklop pogona PICV | 18 | po izbiri integratorja | 230 V AC | določi ponudnik | Medsebojno blokirana stanja FORCE CLOSED > FORCE OPEN > AUTO iz regulatorja CW |
| UPS-REG | Rezervno napajanje avtomatike | 1 komplet | obstoječi UPS / po elektroprojektu | določi elektroprojekt | določi ponudnik | REG-01, HMI, RIO in omrežje; signal izpada v REG-01 |
| ES-MV | Končni kontakti motornih ventilov | 16–18 kontaktov | proizvajalec pogonov | pomožni stikalni moduli | določi ponudnik | Suhi kontakti, tudi usklajen položaj MV-DHW-S/R pred zagonom P-BUF-DHW ali P-K |
| ALM-01 | Skupni optični/zvočni alarm | 1 komplet | po izbiri integratorja | del REG-01 | določi ponudnik | Alarm ventilov, rosišča, črpalk in previsoke temperature; breznapetostni kontakt |

## 5. Primarni cevovod, izolacija in pritrditev

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| C-01 | INOX cev AISI 316L, 35 × 1,5 mm | 11 × 6 m | Conex Bänninger | >B< Press Inox 316L | določi ponudnik | DN32; 55 m neto in nabavno 66 m z izvedbeno rezervo; −35/+110 °C, najmanj 16 bar |
| F-01 | Ravna press spojka 35 mm | 12 | Conex Bänninger | PS5270, 35 mm | določi ponudnik | Isti certificirani press sistem kot C-01 |
| F-02 | Press koleno 90°, 35 mm | 32 | Conex Bänninger | PS5002, 35 mm | določi ponudnik | Projektna količina z rezervo; potrditi z izmero |
| F-03 | Enostransko press koleno 90°, 35 mm | 4 | Conex Bänninger | PS5001, 35 mm | določi ponudnik | Konfiguracijo koncev potrditi pred naročilom |
| F-04 | Press koleno 45°, 35 mm | 8 | Conex Bänninger | PS5040/PS5041, 35 mm | določi ponudnik | Izbrati pravilno moško/žensko izvedbo |
| F-05 | Enakostranski T-kos 35 mm | 6 | Conex Bänninger | PS5130, 35 mm | določi ponudnik | Isti certificirani sistem |
| F-06 | Moški navojni prehod 35 × R1 1/4" | 8 | Conex Bänninger | PS4243G | določi ponudnik | Količino uskladiti z dejanskimi ventili |
| F-07 | Ženski navojni prehod 35 × Rp1 1/4" | 8 | Conex Bänninger | PS4270G | določi ponudnik | Alternativna izvedba F-06 glede na priključke |
| F-08 | Razstavljiva prehodna garnitura 35 mm × G 1″ M | 4 | po izbranem press sistemu | press/navojna garnitura | določi ponudnik | **Kataloško potrjeno:** priključki F/G/I/L obeh tuljav T-02 so G 1″ F; tesnjenje in razstavljiv spoj po navodilu proizvajalca |
| F-09 | Reducirna in razstavljiva prehodna garnitura 35 mm × 3″ M | 4 | po izbiri projektanta | korozijsko združljiva garnitura | določi ponudnik | **Kataloško potrjeno:** štirje sistemski priključki A hranilnika T-01 so 3″ F; vključiti redukcijo, razstavljiv spoj in galvansko združljiv prehod ogljikovo/nerjavno jeklo |
| F-10 | Navojni prehod na TČ-01 | 2 | Conex Bänninger | po dejanskem navoju | določi ponudnik | Ne naročiti pred potrditvijo priključkov TČ-01 |
| I-01 | Izolacija vročih cevi 35/25 mm | 42 m | K-FLEX | ST 35 × 25 mm | določi ponudnik | Količina vključuje kotlovske in TSV veje z rezervo; Tmax ≥105 °C, vsi spoji zlepljeni |
| I-02 | Parozaporna izolacija cevi 35/32 mm | 24 m | K-FLEX | ST 35 × 32 mm | določi ponudnik | Zaprtocelična in neprekinjeno parozaporna |
|  | Alternativni izolacijski sistem | 24 m | Armacell | AF/ArmaFlex ustrezne dimenzije | določi ponudnik | Enaka ali manjša difuzijska prepustnost in ustrezna požarna klasifikacija |
| I-03 | Izolacijske plošče za armaturo | približno 6 m² | K-FLEX | ST, 25/32 mm | določi ponudnik | Ventili in fitingi morajo ostati parozaporno zaprti |
| I-04 | Lepilo, trak in tesnilna masa | 1 komplet | K-FLEX | sistemski pribor | določi ponudnik | Združljivo z izbrano izolacijo |
| I-05 | Zunanja UV in mehanska zaščita | po izmeri | K-FLEX | AL CLAD | določi ponudnik | Celotna zunanja izpostavljena dolžina |
| N-01 | Izolacijski cevni nosilec | 24 | K-FLEX | ST cevni nosilec | določi ponudnik | Brez stiskanja izolacije in toplotnega mostu |
|  | Alternativni izolacijski nosilec | 24 | Armacell | ArmaFix | določi ponudnik | Enaka nosilnost in parozaporna funkcija |
| N-02 | Objemka z gumo za cev 35 mm | 30 | po izbiri | inox oziroma korozijsko ustrezna | določi ponudnik | Nosilnost in razmak po izračunu |
| N-03 | Profili, konzole, palice in sidra | 1 komplet | Fischer | sistem po podlagi | določi ponudnik | Izbor po podlagi, obremenitvi in protikorozijskem razredu |
|  | Alternativni pritrdilni sistem | 1 komplet | Hilti ali Würth | po statični kontroli | določi ponudnik | Enaka ali večja nosilnost |

### 5.1 Primarnih cevi – dolžine za izračune

Naslednje dolžine so bile uporabljene za hidravličke izračune v TD-01 sekcija 6.1 in so sledljive skozi sistem kot merila za dimenzioniranje. Vsi odseki so INOX 35 × 1,5 mm:

| Odsek | Dolžina | Komentar | Sklicevanje |
|---|---:|---|---|
| K-01 (kotel) → T-01 (gornja tuljava) | 8 m (2 × 8 m) | Prosta trasa s polnjenjem/praznjenjekot | TD-01 sekcija 6.1 |
| K-01 → T-01 (spodnja tuljava) | 8 m (2 × 8 m) | Povratek iz spodnje tuljave | TD-01 sekcija 6.1 |
| K-01 → TČ-01 (vhod) | skupaj 19 m | Primarni dovod | TD-01 sekcija 6.1 |
| TČ-01 (izhod) → povratek | skupaj 19 m | Primarni povratek | TD-01 sekcija 6.1 |
| TČ-01 → T-01/T-02 (temperaturni senzor) | 2 × 7 m | Merilni priključki za T-01 in T-02 | TD-01 sekcija 6.1 |
| **Skupaj primarne cevi** | **55 m neto / 66 m nabavno** | vključuje 15 % rezervo za odmike in Reserve | TD-01 sekcija 6.1 |

## 6. Sekundarna distribucija in porabniki

### 6.1 Sekundarnih cevi – dolžine za izračune

Dimenzije in dolžine sekundarnega sistema PEX-AL-PEX (referenčno Uponor MLC press) so naslednje glede na TD-01 sekcija 6.2. Hidravlični izračun vključuje dodatnih 30 % ekvivalentne dolžine za fitinge, lokalne upore in armaturo:

| Odsek | Dimenzija | Dolžina | Pretok pri projektu | Komentar | Sklicevanje |
|---|---|---:|---:|---|---|
| P-L–razcep (od črpalke do razdelnika) | 40 × 4 mm | 2 m | 2,355 m³/h | Skupni odsek pred razcepitvijo | TD-01 6.2 |
| Desna trasa – I. stopnja (V2–V3) | 32 × 3 mm | 5 m | 1,785 m³/h | Spust do V2 in nadalj V3 | TD-01 6.2 |
| Desna trasa – II. stopnja (V3–V4) | 32 × 3 mm | 5 m | 1,193 m³/h | Nadalj od V3 do V4 | TD-01 6.2 |
| Desna trasa – III. stopnja (V4 povratek) | 26 × 3 mm | 6 m | 592 m³/h | Povratek iz V4 proti skupnemu vratu | TD-01 6.2 |
| Leva trasa – I. stopnja (V1 dovod) | 26 × 3 mm | 3 m | 570 m³/h | Prvega veja levo (V1) | TD-01 6.2 |
| Leva trasa – II. stopnja (V1–V6) | 26 × 3 mm | 7 m | 570 m³/h | Povezava V1 in V6 | TD-01 6.2 |
| Leva trasa – III. stopnja (V6–V5) | 20 × 2,25 mm | 3 m | Glede na V5 | Spust do V5 | TD-01 6.2 |
| Vertikala V1 (22 m skupaj) | 20 × 2,25 mm | — | ~285 m³/h | 2 terminala (REGULAR 4000) na etaži | TD-01 6.2 |
| Vertikala V2 (22 m skupaj) | 26 × 3 mm | — | ~595 m³/h | 3 terminali (2× REGULAR 4000 + 1× REGULAR 2000) | TD-01 6.2 |
| Vertikala V3 (22 m skupaj) | 26 × 3 mm | — | ~595 m³/h | 3 terminali (1× REGULAR 4000 + 2× REGULAR 2000) | TD-01 6.2 |
| Vertikala V4 (22 m skupaj) | 26 × 3 mm | — | ~595 m³/h | 3 terminali (1× REGULAR 4000 + 2× REGULAR 2000) | TD-01 6.2 |
| Vertikala V5 (22 m skupaj) | 20 × 2,25 mm | — | ~285 m³/h | 2 terminala (REGULAR 2000 + LOW 4000) | TD-01 6.2 |
| Vertikala V6 (22 m skupaj) | 16 × 2 mm | — | ~140 m³/h | 2 terminala (REGULAR 2000) – samo ogrevanje | TD-01 6.2 |
| Priključek terminala (vsakega) | 16 × 2 mm | ~0,5 m (dovod + povratek) | Glede na terminal | 18 terminalov × 2 priključka = 36 × 0,5 m | TD-01 6.2 |
| **Skupaj sekundarne cevi** | **PEX-AL-PEX** | **približno 204 m** | — | vključuje 15 % rezerve za Reserve in fitinge | TD-01 6.2 |

Razrez po posameznih premeri se pred naročilom dopolni z izometrično izmero in dejansko trasirno potrdijo projekta.

### 6.2 Komponente sekundarne distribucije

| Oznaka elementa | Element | Število | Proizvajalec | Proizvajalčeva koda | Naročniška številka | Komentar / karakteristike za alternativo |
|---|---|---:|---|---|---|---|
| RAZ-1 | Dovodni/povratni razdelilnik sekundarja | 1 komplet | po izbiri | najmanj DN32, šest vej | določi ponudnik | Projektni pretok 2,355 m³/h; centralno praznjenje; parozaporna izolacija |
| FC-R2000-CW | Ventilatorski konvektor Ventana REGULAR 2000 CW | 7 | Cordivari | Ventana REGULAR 2000 CW | `3584776100034` | 726 × 602 × 120 mm, RAL 9016; 5–75 °C, 1–6 bar, G1/2″ F; V3-2, V5-1, V5-2, V5-I, V5-S, V6-1, V6-2 |
| FC-R4000-CW | Ventilatorski konvektor Ventana REGULAR 4000 CW | 9 | Cordivari | Ventana REGULAR 4000 CW | `3584776100035` | 918 × 602 × 120 mm, RAL 9016; V1-1/2, V2-1/2/3, V3-1, V4-1/2/3 |
| FC-L4000-CW | Ventilatorski konvektor Ventana LOW 4000 CW | 2 | Cordivari | Ventana LOW 4000 CW | `3584776100039` | 918 × 432 × 120 mm, RAL 9016; V3-3 in V5-3N |
| PICV-LF | Tlačno neodvisni regulacijski ventil, nizki pretok | 14 | po izbiri | DN15, 20–200 l/h | določi ponudnik | Merilna priključka, najmanj 6 bar/75 °C; referenčno Danfoss AB-QM 4.0 LF ali Caleffi FLOWMATIC H20 |
| PICV-HF | Tlačno neodvisni regulacijski ventil | 4 | po izbiri | DN15, 80–400 l/h | določi ponudnik | V2-1, V2-2, V4-1, V4-2; merilna priključka; dopustni minimalni Δp do 25 kPa |
| ACT-PICV | Elektrotermični pogon PICV | 18 | po izbranem PICV | 230 V AC, NC | določi ponudnik | Brez napajanja zaprt; združljiv z ventilom in prioritetnim relejnim sklopom |
| KV-FC-S | Servisna zapora terminala | 18 | po izbiri | G1/2″ oziroma sistemska | določi ponudnik | Na dovodu vsakega terminala; dostopna; pri hlajenih terminalih parozaporno izolirana |
| FLEX-FC | Razstavljivi priključni komplet terminala | 18 kompletov | po izbiri | 16 × 2 mm / G1/2″ | določi ponudnik | Dovod in povratek, razstavljiv servisni spoj, izolacija po režimu |
| C-SEC-40 | Večslojna cev PEX-AL-PEX 40 × 4 mm | po izometrični izmeri | dobaviteljsko nevtralno | referenčno Uponor MLC | določi ponudnik | Skupni odsek P-L–razcep; press-fit |
| C-SEC-32 | Večslojna cev PEX-AL-PEX 32 × 3 mm | po izometrični izmeri | dobaviteljsko nevtralno | referenčno Uponor MLC | določi ponudnik | Desna prva dva odseka |
| C-SEC-26 | Večslojna cev PEX-AL-PEX 26 × 3 mm | po izometrični izmeri | dobaviteljsko nevtralno | referenčno Uponor MLC | določi ponudnik | Desni zadnji in levi prvi dve odseka; vertikale V2/V3/V4 |
| C-SEC-20 | Večslojna cev PEX-AL-PEX 20 × 2,25 mm | po izometrični izmeri | dobaviteljsko nevtralno | referenčno Uponor MLC | določi ponudnik | Levi zadnji odsek; vertikali V1/V5 |
| C-SEC-16 | Večslojna cev PEX-AL-PEX 16 × 2 mm | po izometrični izmeri | dobaviteljsko nevtralno | referenčno Uponor MLC | določi ponudnik | Vertikala V6 in vsi terminalni priklopi |
| C-SEC-SUM | Nabavna količina sekundarnih cevi | približno 204 m | — | vključuje 15 % rezerve | — | Razrez po premerih potrditi z izometrično izmero pred naročilom |
| FIT-SEC | Press fitingi, prehodi, razstavljivi spoji in nosilci | 1 komplet | isti certificirani sistem kot cevi | po izometrični izmeri | določi ponudnik | Količine potrditi po dejanski trasi; brez zmanjšanja potrjenih svetlih presekov |
| INS-SEC-25 | Zaprtocelična parozaporna izolacija 25 mm | po izmeri | dobaviteljsko nevtralno | referenčno AF/ArmaFlex | določi ponudnik | Glavna voda v neogrevanem pritličju; projektno 30 °C/70 % RH |
| INS-SEC-19 | Zaprtocelična parozaporna izolacija 19 mm | po izmeri | dobaviteljsko nevtralno | referenčno AF/ArmaFlex | določi ponudnik | Kratki deli vertikal v pritličju |
| INS-SEC-13 | Zaprtocelična parozaporna izolacija 13 mm | po izmeri | dobaviteljsko nevtralno | referenčno AF/ArmaFlex | določi ponudnik | Vertikale in priklopi v hlajenih prostorih |
| COND-20 | Kondenzni priklop terminala DN20 | 16 kompletov | po izbiri | gladka notranjost, servisno dostopen | določi ponudnik | Najmanj 3 % do zbirne črpalke; 9 mm izolacije |
| COND-25 | Kondenzni zbirnik vej V1–V4 DN25 | 4 trase | po izbiri | DN25 | določi ponudnik | Najmanj 3 % do zbirne črpalke; revizijske točke |
| COND-32 | Kondenzni zbirnik veje V5 DN32 | 1 trasa | po izbiri | DN32 | določi ponudnik | Najmanj 3 % do zbirne črpalke |
| COND-40 | Skupni kondenzni zbirnik DN40 | približno 15 m | po izbiri | DN40 | določi ponudnik | Črpalka pred tlačnim odsekom; za črpalko padec proti iztoku |
| CP-01 | Zbirna kondenzna črpalka | 1 komplet | Siccom | Mini Flowatch 2 | `DE05LC4400` | 230 V, do 15 l/h, rezervoar, nepovratni ventil, alarm NO/NC; alarm v REG-01 |
| TRAP-C | Suhi membranski sifon z revizijo | 1 komplet | po izbiri | DN40 oziroma prilagojen priključek | določi ponudnik | Dostopen za čiščenje; ne sme zmanjšati prostega odtoka |

## 7. Postavke, ki jih ponudnik dopolni

Ponudnik mora v ponudbi dopisati manjkajoče naročniške številke, tehnične liste,
dobavne roke in dokazila za:

1. črpalne delovne točke primarnega dela in označeno krivuljo P-L pri
   2,36 m³/h ter najmanj 7,0 m;
2. Kvs in varnostne položaje motornih ventilov;
3. tlačni izgubi FIL-HP in SEP-AIR pri 2,75 m³/h;
4. ustreznost elementov za pitno vodo;
5. električne podatke pogonov, tipal, REG-01, oddaljenih I/O, relejnih sklopov,
   UPS-HP in UPS-REG;
6. izometrično potrjene količine fitingov, izolacije in nosilcev;
7. nastavitveni zapisnik vseh PICV in funkcijski preizkus CP-01;
8. zagonski dokaz temperatur 65 °C in 7 °C na vmesniku T-01.

Kataloški velikosti F-08 in F-09 nista več odprti potrditvi. Ponudnik dopolni
le sestavo, proizvajalca in naročniške številke garnitur, ki morajo ohraniti
polni presek DN32 ter omogočiti razstavljanje naprav.

## 8. Dokazila za potrjene priključke

| Postavka | Dokazilo | Potrjeni podatek |
|---|---|---|
| F-08 / T-02 | Cordivari, *BOLLY 2 AP INOX – high performances*, 11/2023, model 400, koda `3134052010303` | F/G spodnjega in I/L zgornjega HX: G 1″ F |
| F-09 / T-01 | Cordivari, *VOLANO BS HOT/COLD – Mild Steel*, model 1000, koda `3001162150006` | štirje sistemski priključki A: 3″ F |

Kopiji tehničnih listov sta priloženi kot
[`VOLANO BS HOT/COLD`](reference/cordivari-volano-bs-hot-cold.pdf) in
[`BOLLY 2 AP INOX`](reference/cordivari-bolly-2-ap-inox-11-2023.pdf).

Za sekundarne terminale so uporabljeni Cordivari,
*Fan Coil Catalogue 2025*, ter uradna tehnična lista in navodila za montažo
Ventana REGULAR/LOW. Dokumentacija potrjuje kataloške številke, mere,
zmogljivosti po EN 1397, priključke G1/2″ F, območje vode 5–75 °C,
delovni tlak 1–6 bar ter kondenzno posodo z naravnim odtokom.

## 9. Izolacijski materiali in zaščita

### 9.1 Režim SAMO OGREVANJE (500L bojler – T-02 BOLLY 2 AP)

| Element | Tip izolacije | Debelina | Material | Proizvod. koda | Naročniška št. |
|---|---|---|---|---|---|
| T-01 | Mineralna volna | 50 mm | λ=0,038 W/mK | ISO-MW-50 | naročiti |
| T-02 | Mineralna volna | 50 mm | λ=0,038 W/mK | ISO-MW-50 | naročiti |
| Primarni vodi | Mineralna volna | 30 mm | Paroizolacijski omot | ISO-MW-30 | naročiti |
| Sekundarni vodi | Mineralna volna | 30 mm | Paroizolacijski omot | ISO-MW-30 | naročiti |

**Sklici**: Dodatne specifikacije v TD-01 in P&ID rev24; primerna za sisteme brez hlajenja.

### 9.2 Režim OGREVANJE + HLAJENJE (500L bojler – T-01 VOLANO BS HOT/COLD)

| Element | Tip izolacije | Debelina | Material | Proizvod. koda | Naročniška št. |
|---|---|---|---|---|---|
| T-01 | Hierarhična, HR | 80 mm | λ=0,030 W/mK, ločnica | ISO-HR-80 | naročiti |
| T-02 | Hierarhična, HR | 80 mm | λ=0,030 W/mK, zaščita | ISO-HR-80 | naročiti |
| Primarni vodi | Hierarhična, HR | 50 mm | λ=0,030 W/mK, zaščita | ISO-HR-50 | naročiti |
| Sekundarni vodi | Hierarhična, HR | 50 mm | λ=0,030 W/mK, zaščita | ISO-HR-50 | naročiti |

**Sklici**: Dodatne specifikacije v TD-01 in P&ID rev24; obvezna za sisteme s hlajenjem.

### 9.3 Navodila za izvajanje izolacije

Izolacija vseh toplotnih akumulatorjev, primarnih in sekundarnih vodov se izvede v skladu z
naslednjimi standardi in navodili:

- **SIST EN 12828** – Sistemi za ogrevanje zgradbe – Zasnova in vgradnja toplovodnih sistemov
- **DIN 4724** – Izolacija toplovoznih cevovodov in naprav – Predpisani minimalni zneski

Podrobne specifikacije za izbiro materialov, debeline in načina montaže so navedene v
tehnični dokumentaciji TD-01 in na načrtih P&ID rev24. Ponudnik v ponudbi dopolni:

1. Dokazilo za ustreznost izbrane izolacije glede na režim delovanja (samo ogrevanje ali
   ogrevanje + hlajenje).
2. Tehnične liste proizvajalca z navedbo toplotne prevodnosti λ in certifikatov o ustreznosti
   evropskim standardom.
3. Načrt izvajanja izolacije in termična analiza za verifikacijo izgub toplote oziroma
   hlajenja.
