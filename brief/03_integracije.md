# HACS in integracije – Namestitev in konfiguracija

**Verzija:** 1.0  
**Datum:** 2026-06-21  
**Predpogoj:** HAOS 18.0 teče na `http://192.168.10.36:8123`, admin račun ustvarjen

---

## FAZA 1 – Namestitev HACS (Home Assistant Community Store)

HACS omogoča namestitev integracij, ki niso v uradnem HA repozitoriju (Sofar, SonoffLAN itd.).

### 1.1 Namesti Terminal & SSH Add-on

HACS se namesti prek terminala v HAOS.

1. Odpri `http://192.168.10.36:8123`
2. Pojdi na: **Settings → Add-ons → ADD-ON STORE** (gumb spodaj desno)
3. Poišči: **Terminal & SSH**
4. Klikni **Install** → počakaj ~1 min
5. Po namestitvi: **Nastavi** → zavihek **Configuration**:
   ```yaml
   # OPCIJSKO: nastavi geslo za SSH dostop
   password: "tvoje_varno_geslo"
   ```
6. Klikni **START** in nato **OPEN WEB UI** (odpre se terminal v brskalniku)

> 💡 Alternativa: Namesti **Advanced SSH & Web Terminal** iz HACS add-on store – ima več funkcij.

---

### 1.2 Namesti HACS prek terminala

V odprtem terminalu (Terminal & SSH → OPEN WEB UI) vnesi:

```bash
wget -O - https://get.hacs.xyz | bash -
```

Ta ukaz:
- Prenese HACS installer
- Namesti HACS v `/config/custom_components/hacs/`
- Pripravi vse potrebno za integracijo

> ⚠️ Če ukaz vrne napako "wget: not found", uporabi:
> ```bash
> curl -sfSL https://get.hacs.xyz | bash -
> ```

---

### 1.3 Ponovni zagon HA

**Obvezno** po namestitvi HACS:

1. V HA UI: **Settings → System → Restart Home Assistant**
2. Počakaj ~1-2 minuti

---

### 1.4 Aktivacija HACS integracije

1. Pojdi: **Settings → Devices & Services → ADD INTEGRATION**
2. Poišči in izberi **HACS**
3. Preveri kljukice:
   - ✅ Strinjam se s pogoji uporabe
   - ✅ Vem, da so to neoficialne integracije
   - ✅ Vem, da nimajo podpore HA ekipe
4. Klikni **Submit**
5. Odpre se **GitHub avtorizacija**:
   - Pojdi na `https://github.com/login/device`
   - Vnesi prikazano kodo (8-mestna)
   - Prijavi se z GitHub računom (ustvari brezplačno na github.com)
   - Avtoriziraj HACS
6. Po vrnitvi v HA: HACS je aktiven ✅

> 💡 GitHub račun je brezplačen in potreben samo za avtorizacijo HACS.

---

### 1.5 Preverjanje HACS

Po aktivaciji v levem meniju vidiš novo ikono **HACS**. Klikni nanjo – odpre se HACS store.

---

## FAZA 2 – Integracije naprav

---

### 2.1 Sofar HYD 20KTL – Solarni inverter

**Tip:** HACS integracija  
**Priporočena integracija:** `ha-solarman` (pysolarmanv5)

#### Potrebni podatki pred namestitvijo
- [ ] **IP naslov inverterja** v lokalnem omrežju (preveriti v routerju – DHCP tabela)
- [ ] **Serial number** SolarmanPV data loggerja (LSE stick) – na nalepki na loggerju ali v SolarmanPV aplikaciji
- [ ] Tip loggerja (LSE, LSW-3, ili WIFI-LSE)

#### Namestitev

**Korak 1: Namesti integracijo prek HACS**

1. V HA: klikni **HACS** v levem meniju
2. Klikni **Integrations** → ikona **+ Explore & download repositories**
3. Iskanje: `solarman`
4. Izberi: **Solarman** (avtor: `StephanJoubert` ali `davidrapan`)
5. Klikni **Download** → **Download** (potrdi verzijo)
6. **Settings → System → Restart Home Assistant**

**Korak 2: Dodaj integracijo**

1. **Settings → Devices & Services → ADD INTEGRATION**
2. Iskanje: `Solarman`
3. Vnesi podatke:
   ```
   Name:        Sofar Solar
   Host:        192.168.X.X    ← IP inverterja ali loggerja
   Serial:      17XXXXXXXXXX   ← serial loggerja (10 mestna številka)
   Port:        8899            ← privzeti Solarman port
   ```
4. Klikni **Submit**

#### Entitete po uspešni namestitvi
- `sensor.sofar_pv_power` – trenutna sončna moč (W)
- `sensor.sofar_battery_soc` – stanje baterije (%)
- `sensor.sofar_grid_power` – moč omrežja (W+/-)
- `sensor.sofar_load_power` – poraba hiše (W)
- `sensor.sofar_daily_generation` – dnevna proizvodnja (kWh)

> 🔧 **Alternativa:** Če imaš RS485/Modbus kabel (ne LSE stick), uporabi HACS integracijo `sofar2mqtt` skupaj z MQTT brokerjem (Mosquitto).

---

### 2.2 Sonoff – Stikala in vtičnice (SonoffLAN)

**Tip:** HACS integracija  
**Integracija:** `SonoffLAN` – lokalna povezava brez oblaka (priporočeno)

#### Potrebni podatki
- [ ] **eWeLink email** (s katerim si registriral Sonoff naprave)
- [ ] **eWeLink geslo**
- [ ] Naprave morajo biti v **istem LAN omrežju** kot HAOS

#### Namestitev

**Korak 1: HACS**

1. **HACS → Integrations → + Explore**
2. Iskanje: `SonoffLAN`
3. Izberi: **SonoffLAN** (avtor: `AlexxIT`)
4. **Download** → restart HA

**Korak 2: Dodaj integracijo**

1. **Settings → Devices & Services → ADD INTEGRATION**
2. Iskanje: `SonoffLAN`
3. Vnesi:
   ```
   Username:  tvoj@email.com    ← eWeLink email
   Password:  xxxxxxxxxx        ← eWeLink geslo
   ```
4. Klikni **Submit**
5. Integracija bo **samodejno odkrila** vse Sonoff naprave v LAN

#### Lokalni vs. cloud način
SonoffLAN najprej poskusi **lokalni LAN mode** (hitrejši, brez oblaka). Če naprava ne podpira LAN mode, se samodejno vrne na eWeLink cloud (še vedno deluje, a z zakasnitvijo).

> 💡 **Alternativa (uradna):** Settings → ADD INTEGRATION → `eWeLink` – deluje prek oblaka brez HACS, a je počasnejši.

---

### 2.3 Merton EV Polnilec (OCPP)

**Tip:** HACS integracija  
**Integracija:** `OCPP` (Open Charge Point Protocol)

> ⚠️ **Predpogoj:** Preveriti ali Merton polnilec podpira **OCPP 1.6 ali 2.0**. To je navedeno v specifikacijah polnilca ali v aplikaciji. Brez OCPP podpore ta integracija ne bo delovala.

#### Potrebni podatki
- [ ] Potrjeno: Merton podpira **OCPP 1.6** ali **OCPP 2.0**
- [ ] **IP naslov** polnilca v LAN (fiksni IP priporoča)
- [ ] OCPP WebSocket URL (format: `ws://192.168.X.X/ocpp`)

#### Namestitev

**Korak 1: HACS**

1. **HACS → Integrations → + Explore**
2. Iskanje: `OCPP`
3. Izberi: **OCPP** (avtor: `lbbrhzn`)
4. **Download** → restart HA

**Korak 2: Konfiguracija**

OCPP deluje obratno – **HA je server**, polnilec se poveže na HA:

1. **Settings → Devices & Services → ADD INTEGRATION → OCPP**
2. Nastavi:
   ```
   Port:           9000         ← HA bo poslušal na tem portu
   SubProtocol:    ocpp1.6      ← ali ocpp2.0
   Central System: ws://192.168.10.36:9000/ocpp
   ```
3. V nastavitvah Merton polnilca nastavi **Central System URL**:
   ```
   ws://192.168.10.36:9000/ocpp
   ```
4. Polnilec se bo samodejno prijavil na HA

#### Entitete
- `sensor.merton_ev_status` – stanje polnjenja
- `sensor.merton_ev_current_import` – tok polnjenja (A)
- `sensor.merton_ev_energy_active_import` – skupna energija (kWh)
- `switch.merton_ev_charge_control` – vklop/izklop polnjenja

> 🔧 **Če Merton ne podpira OCPP:** Preveriti ali ima **Modbus TCP** ali **HTTP API**. Kontaktiraj Merton podporo za dokumentacijo protokola.

---

### 2.4 TP-Link Tapo – Kamere in naprave

**Tip:** ✅ **Uradna HA integracija** (ni potreben HACS!)  
**Integracija:** `TP-Link Smart Home`

#### Potrebni podatki
- [ ] **TP-Link Cloud email** (Tapo/Kasa app račun)
- [ ] **TP-Link Cloud geslo**
- [ ] Naprave so na **istem LAN** kot HAOS in imajo **statičen IP** (priporočeno)

#### Namestitev

**Samodejno odkrivanje (priporočeno):**

1. **Settings → Devices & Services**
2. Če so Tapo naprave v istem LAN, HA jih bo samodejno odkril pod **Discovered**
3. Klikni **Configure** ob TP-Link Smart Home
4. Vnesi TP-Link Cloud email in geslo za avtentikacijo

**Ročna namestitev:**

1. **Settings → Devices & Services → ADD INTEGRATION**
2. Iskanje: `TP-Link Smart Home`
3. Vnesi IP naslov naprave:
   ```
   Host: 192.168.X.X    ← IP Tapo kamere ali naprave
   ```
4. Vnesi TP-Link Cloud email/geslo (potrebno za novejše naprave)

#### Kamere – RTSP stream

Za prikaz videa kamer v HA:

```yaml
# configuration.yaml - dodaj za vsako kamero
camera:
  - platform: generic
    name: "Kamera Vhod"
    still_image_url: "http://192.168.X.X/snapshot"
    stream_source: "rtsp://admin:geslo@192.168.X.X/stream1"
```

> 💡 RTSP podatki so odvisni od modela Tapo kamere. Preveriti v aplikaciji ali dokumentaciji.

#### Entitete (kamere)
- `camera.tapo_vhod` – video feed
- `binary_sensor.tapo_motion` – zaznavanje gibanja
- `sensor.tapo_signal_level` – moč WiFi signala

---

## FAZA 3 – Tailscale VPN (oddaljen dostop)

**Tip:** ✅ **Uradni HA add-on** (ni potreben HACS!)

Tailscale omogoča varni oddaljen dostop do HAOS brez izpostavljanja porta na internet.

### 3.1 Ustvari Tailscale račun (enkratno)

1. Odpri `https://tailscale.com` in klikni **Get Started**
2. Prijavi se z Google, Microsoft ali GitHub računom (brezplačno za osebno uporabo)
3. Tailscale free plan: do 100 naprav ✅

### 3.2 Namesti Tailscale add-on v HAOS

1. V HA: **Settings → Add-ons → ADD-ON STORE**
2. Poišči: **Tailscale**
3. Klikni **Install** → počakaj ~2 min
4. Po namestitvi klikni **START**
5. Odpri **OPEN WEB UI** – prikaže se Tailscale avtorizacijska stran

### 3.3 Avtorizacija naprave

1. V Tailscale UI (v HA add-on) klikni **Log in**
2. Odpre se Tailscale login stran
3. Prijavi se z istim računom kot v 3.1
4. Klikni **Authorize machine**
5. HAOS se pojavi v tvojem Tailscale omrežju z IP v obliki `100.X.X.X`

### 3.4 Dostop od zunaj

Po avtorizaciji:

| Dostop | URL |
|--------|-----|
| Lokalni | `http://192.168.10.36:8123` |
| Tailscale | `http://100.X.X.X:8123` (Tailscale IP) |
| Hostname | `http://homeassistant.tail-XXXX.ts.net` |

> 💡 **HTTPS prek Tailscale:** V Tailscale add-on nastavitvah vklopi `Accept DNS` in `Use Tailscale DNS` – dobiš atuomatski HTTPS certifikat.

### 3.5 Mobilni dostop

1. Prenesi **Tailscale** aplikacijo na telefon (iOS/Android)
2. Prijavi se z istim računom
3. Vklopi Tailscale na telefonu
4. Prenesi **Home Assistant** aplikacijo
5. Vnesi Tailscale URL v nastavitvah HA aplikacije

---

## Povzetek – Vrstni red namestitve

```
1. Terminal & SSH add-on  ─────────────────  Settings → Add-ons
2. HACS                   ─────────────────  Terminal: wget -O - https://get.hacs.xyz | bash -
3. Restart HA             ─────────────────  Settings → System → Restart
4. HACS aktivacija        ─────────────────  Settings → Integrations → HACS
5. Tailscale add-on       ─────────────────  Settings → Add-ons (Official)
6. TP-Link Tapo           ─────────────────  Settings → Integrations (Official / auto-discovered)
7. SonoffLAN              ─────────────────  HACS → Integrations → SonoffLAN
8. Solarman               ─────────────────  HACS → Integrations → Solarman
9. OCPP (Merton EV)       ─────────────────  HACS → Integrations → OCPP
```

---

## Checklist – Potrebni podatki

Pripravi pred namestitvijo:

| Naprava | Potrebni podatki |
|---------|-----------------|
| HACS | GitHub račun (brezplačen) |
| Sofar inverter | IP loggerja, Serial number (na LSE stick nalepki) |
| Sonoff | eWeLink email + geslo |
| Merton EV | Potrditi OCPP podpora, IP polnilca |
| Tapo kamere | TP-Link Cloud email + geslo |
| Tailscale | Google/Microsoft/GitHub račun |

---

## Naslednji koraki

Po namestitvi integracij nadaljuj z:
- 📊 **Energy Dashboard:** Settings → Energy → konfiguriraj senzorje
- 🏠 **Dashboard:** Overview → Edit Dashboard → dodaj kartice
- 📄 `brief/01_specifikacija.md` → Faza 7: Dashboard konfiguracija

---

*Dokument pripravil: GitHub Copilot CLI – OAP Agent*  
*Vir: [hacs.xyz](https://hacs.xyz) | [home-assistant.io](https://www.home-assistant.io/integrations/)*
