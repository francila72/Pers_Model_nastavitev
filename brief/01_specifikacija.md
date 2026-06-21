# Home Assistant – Coding Brief

**Verzija:** 1.0  
**Datum:** 2026-06-21  
**Status:** V pripravi  

---

## 1. Cilj projekta

Namestiti in konfigurirati **Home Assistant OS (HAOS)** v virtualni mašini VMware Workstation na Windows 11 računalniku. Sistem mora biti dostopen lokalno in oddaljeno prek VPN ter integrirati vse naprave v hiši v enoten dashboard za upravljanje energije, naprav in varnosti.

### Primarni cilji
- Delujoča HAOS instanca v VMware Workstation z vzpostavljeno omrežno dostopnostjo
- Oddaljen dostop prek VPN brez izpostavljanja porta na internet
- Integrirane vse obstoječe naprave (solar, stikala, EV polnilec, kamere)
- Funkcionalen energetski dashboard z realnim prikazom solarnega sistema

---

## 2. Arhitektura sistema

```
Windows 11 Host
└── VMware Workstation
    └── Home Assistant OS (HAOS)
        ├── Network: Bridge mode (priporočeno) ali NAT
        ├── VPN Add-on (Tailscale ali WireGuard)
        └── Integracije
            ├── Sofar HYD 20KTL  →  Modbus TCP / SolarmanPV integration
            ├── Sonoff (eWeLink)  →  eWeLink HACS integration ali SonoffLAN
            ├── Merton EV         →  OCPP / custom integration
            ├── TP-Link Tapo      →  python-miio / Tapo integration (HACS)
            └── Ostale naprave    →  Zigbee2MQTT (USB dongle) / WiFi MQTT
```

### Omrežna topologija

```
Internet
  │
Router/Gateway (domača mreža)
  │
  ├── Windows 11 PC (host) – fizična IP
  │   └── VMware (bridge)
  │       └── HAOS – lastna IP v LAN
  │
  ├── Sofar inverter (Modbus TCP ali SolarmanPV cloud)
  ├── Sonoff naprave (eWeLink cloud ali lokalno LAN)
  ├── Merton EV polnilec
  └── Tapo kamere
```

---

## 3. Faze implementacije

### Faza 1 – Namestitev HAOS v VMware

**Cilj:** Delujoča HAOS instanca z dostopom prek brskalnika.

**Koraki:**
1. Prenesi HAOS `.vmdk` sliko z [home-assistant.io/installation/](https://www.home-assistant.io/installation/windows/)
2. V VMware ustvari novo VM:
   - Guest OS: Linux / Other Linux 5.x (64-bit)
   - RAM: min. 2 GB (priporočeno 4 GB)
   - CPU: 2 jedri
   - Disk: uporabi obstoječi `.vmdk` (ne ustvari novega)
3. Omrežje: nastavi na **Bridged** (autodetect)
4. Zaženi VM in počakaj ~5 min na inicializacijo
5. Dostop: `http://homeassistant.local:8123` ali prek IP-ja (preveriti v routerju)
6. Zaključi onboarding čarovnik

**Preverjanje:** `http://homeassistant.local:8123` se naloži in prikaže HA login.

---

### Faza 2 – Omrežna konfiguracija in VPN dostop

**Cilj:** Stabilen lokalni dostop + oddaljen dostop prek VPN.

**Koraki:**
1. V routerju dodeli HAOS VM statičen IP naslov (DHCP rezervacija po MAC)
2. Namesti VPN add-on (priporočeno **Tailscale**):
   - HA → Add-ons → Add-on Store → Tailscale
   - Pridobi Tailscale račun (brezplačen)
   - Avtenticiraj napravo
3. Preveri Tailscale IP naslov HAOS instance
4. Nastavi **HTTPS** za zunanji dostop (HA Cloud ali Nginx Proxy Manager)

**Preverjanje:** Dostop do HA prek Tailscale IP-ja z mobilnega omrežja (brez domačega WiFi).

---

### Faza 3 – Integracija Sofar HYD 20KTL (solarni sistem)

**Cilj:** Prikaz solarnih podatkov (moč, energija, baterija, omrežje) v HA.

**Možnosti integracije (izberi glede na logger):**
- **LSE Stick Logger / SolarmanPV:** HACS integracija `pysolarmanv5` ali `Solarman-HA`
- **Sofar G3 dongle (RS485/Modbus TCP):** custom Modbus integracija
- **Inverter WiFi direktno:** `ha-solarman` ali `sofar2mqtt`

**Koraki:**
1. Ugotovi tip data loggerja inverterja (LSE stick, WiFi modul, RS485)
2. Namesti HACS (Home Assistant Community Store):
   - `Settings → Add-ons → Add-on Store → HACS` (ali ročno prek terminal add-on)
3. Namesti ustrezno HACS integracijoo za Sofar/SolarmanPV
4. Konfiguracija: IP/serial inverterja, serial number loggerja
5. Preveri entitete: `sensor.pv_power`, `sensor.battery_soc`, `sensor.grid_power`

**Preverjanje:** Entitete prikazujejo realne vrednosti v realnem času.

---

### Faza 4 – Integracija Sonoff (eWeLink)

**Cilj:** Upravljanje Sonoff stikal in vtičnic lokalno ali prek oblaka.

**Možnosti:**
- **eWeLink cloud:** Uradna HA integracija (Settings → Integrations → eWeLink)
- **SonoffLAN (priporočeno):** Lokalna integracija brez oblaka prek HACS

**Koraki:**
1. V HACS namesti `SonoffLAN` integracijo
2. Konfiguracija: eWeLink email/geslo za pridobitev naprav
3. Naprave bodo odkrite avtomatično (lokalni LAN mode)
4. Preveri entitete za vsako Sonoff napravo

**Preverjanje:** Stikalo se vklopi/izklopi iz HA brez zakasnitve.

---

### Faza 5 – Integracija Merton EV polnilec

**Cilj:** Prikaz statusa polnjenja in upravljanje EV polnilca.

**Možnosti:**
- **OCPP protokol:** HA OCPP integracija (če polnilec podpira OCPP 1.6/2.0)
- **API integracija:** Preveriti dokumentacijo Merton polnilca
- **Modbus TCP:** Če polnilec podpira Modbus

**Koraki:**
1. Preveriti specifikacije Merton polnilca (OCPP, API, protokol)
2. Namesti ustrezno integracijo (OCPP HACS ali custom)
3. Konfiguracija: IP/port polnilca
4. Entitete: status, tok polnjenja, skupna energija

**Preverjanje:** HA prikazuje trenutno stanje polnjenja.

---

### Faza 6 – Integracija TP-Link Tapo kamere

**Cilj:** Prikaz video feedov Tapo kamer v HA.

**Koraki:**
1. V HA: Settings → Integrations → TP-Link → Dodaj kamere
2. Ali prek HACS: `hacs-tapo` za razširjene funkcije
3. Za RTSP stream: `rtsp://user:pass@kamera-ip/stream1`
4. Dodaj camera card v dashboard

**Preverjanje:** Video feed kamere se prikaže v HA.

---

### Faza 7 – Dashboard energije in naprav

**Cilj:** Pregleden dashboard z vsemi ključnimi informacijami.

**Sekcije dashboarda:**
1. **Energija** – solarni sistem (PV moč, baterija, omrežje, poraba hiše)
2. **EV polnjenje** – status, tok, energija seje
3. **Naprave** – Sonoff stikala in vtičnice (vklop/izklop)
4. **Varnost** – Tapo kamere (video feed + motion detection)
5. **Vreme** – lokalna napoved (OpenWeatherMap integracija)

**HA Energy Dashboard:**
- Settings → Energy → Konfiguracija solarnih in omrežnih senzorjev

---

## 4. Potrebna orodja in viri

### Programska oprema
| Orodje | Namen | URL |
|--------|-------|-----|
| VMware Workstation Pro/Player | Virtualizacija | vmware.com |
| HAOS `.vmdk` slika | Home Assistant OS | home-assistant.io |
| HACS | Community Store za integracije | hacs.xyz |
| Tailscale | VPN dostop | tailscale.com |

### HACS integracije (po potrebi)
| Integracija | Naprava | Repozitorij |
|-------------|---------|-------------|
| Solarman HA | Sofar inverter | HACS |
| SonoffLAN | Sonoff naprave | HACS |
| TP-Link Tapo | Tapo kamere | uradna / HACS |
| OCPP | Merton EV | HACS |

### Dostopi in podatki (pripraviti pred namestitvijo)
- [ ] eWeLink email/geslo (Sonoff)
- [ ] Tapo email/geslo
- [ ] IP naslov Sofar inverterja v LAN
- [ ] Serial number SolarmanPV loggerja
- [ ] IP/dokumentacija Merton polnilca
- [ ] Tailscale račun

---

## 5. Tveganja in omejitve

| Tveganje | Verjetnost | Vpliv | Ublažitev |
|----------|-----------|-------|-----------|
| VMware bridge mode ne deluje (Hyper-V konflikt) | Srednja | Visok | Onemogoči Hyper-V ali uporabi NAT + port forwarding |
| Sofar inverter nima SolarmanPV loggerja | Srednja | Srednji | Fallback na Modbus TCP ali RS485 |
| Merton polnilec brez OCPP podpore | Srednja | Srednji | Preveriti API dokumentacijo, custom integration |
| Sonoff naprave v cloud-only načinu | Nizka | Nizek | eWeLink uradna integracija kot fallback |
| HAOS VM se ne zaganja ob restartu Windowsa | Visoka | Visok | Nastaviti VMware VM na auto-start |
| VPN latenca za kamere | Nizka | Nizek | Lokalni dostop za kamere, VPN za upravljanje |

---

## 6. Kriteriji uspešnosti

### Minimalni kriteriji (MVP)
- [ ] HAOS teče v VMware, dostopen na `http://homeassistant.local:8123`
- [ ] Oddaljen dostop prek Tailscale VPN deluje
- [ ] Vsaj ena Sonoff naprava je upravljana iz HA
- [ ] Sofar inverter podatki se prikazujejo v realnem času

### Polna implementacija
- [ ] Vse naprave integrirane (Sofar, Sonoff, Merton, Tapo)
- [ ] Energy dashboard prikazuje solarno produkcijo, porabo, EV polnjenje
- [ ] Kamere dostopne v HA dashboardu
- [ ] VM se samodejno zažene ob zagonu Windowsa
- [ ] HTTPS dostop (Let's Encrypt ali Tailscale HTTPS)
- [ ] Osnovna avtomatizacija (npr. sončna svetloba → izklop luči)

---

## 7. Naslednji koraki

1. **Takoj:** Prenesi HAOS `.vmdk` in nastavi VMware VM (Faza 1)
2. **Po namestitvi:** Nastavi statičen IP in Tailscale VPN (Faza 2)
3. **Postopoma:** Dodajaj integracije po fazah (3–6)
4. **Zadnje:** Sestavi dashboard (Faza 7)

---

*Dokument pripravil: GitHub Copilot CLI – OAP Agent*  
*Repozitorij: francila72/Pers_Model_nastavitev*
