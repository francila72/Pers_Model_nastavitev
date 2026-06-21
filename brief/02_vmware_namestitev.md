# VMware Workstation Pro – Namestitev in konfiguracija za HAOS

**Verzija:** 1.0  
**Datum:** 2026-06-21  
**Vir:** [home-assistant.io/installation/windows](https://www.home-assistant.io/installation/windows/)

---

## 1. Prenos VMware Workstation Pro (brezplačno za osebno uporabo)

VMware Workstation Pro je od leta 2024 brezplačen za osebno in nekomercialno uporabo. Distribuira ga Broadcom.

### Uradni URL za prenos

```
https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware+Workstation+Pro
```

> ⚠️ **Broadcom zahteva registracijo** pred prenosom. Brez registracije prenos ni mogoč.

---

## 2. Registracija in prenos – korak za korakom

### 2.1 Ustvari Broadcom račun (enkratno)

1. Odpri: **https://profile.broadcom.com/web/registration**
2. Izpolni obrazec:
   - Email naslov (priporočeno: osebni Gmail/Outlook)
   - Ime in priimek
   - Država
   - Tip organizacije: **Personal Use** (osebna uporaba)
3. Potrdi email (aktivacijska povezava pride v 1–5 min)
4. Prijavi se na **https://support.broadcom.com**

### 2.2 Prenos VMware Workstation Pro

1. Po prijavi obišči:
   `https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware+Workstation+Pro`
2. V seznamu najdi **VMware Workstation Pro** (za Windows)
3. Klikni na željeno verzijo (priporočena: **najnovejša stabilna** – trenutno v17.x ali v18.x)
4. Sprejmi licenčne pogoje
5. Prenesi installer: `VMware-workstation-full-XX.X.X-XXXXXXX.exe` (~600 MB)

### 2.3 Namestitev VMware Workstation Pro

1. Zaženi preneseni `.exe` kot **Administrator** (desni klik → Zaženi kot skrbnik)
2. Sledi namestitvenemu čarovniku:
   - **Next** → sprejmi licenco → **Next**
   - **Enhanced Keyboard Driver:** priporočeno obkljukati
   - **Check for product updates:** po želji
   - **Join VMware Customer Experience:** po volji (odjava je dovoljena)
   - Izberi namestitveno mapo (privzeta: `C:\Program Files (x86)\VMware\`)
   - **Install**
3. Ko namestitev konča → **Finish** → **Restart Now** (obvezni ponovni zagon)
4. Po ponovnem zagonu zaženi VMware Workstation
5. Ko vprašan za licenco: izberi **Use VMware Workstation 17 for Personal Use** (brezplačno)

---

## 3. Minimalne sistemske zahteve

### 3.1 Zahteve za gostitelja (Windows 11 host PC)

| Komponenta | Minimum | Priporočeno |
|------------|---------|-------------|
| CPU | 64-bit, 4 jedra | 6+ jeder |
| RAM (skupaj) | 8 GB | 16 GB+ |
| Disk (prosti prostor) | 20 GB | 60 GB+ |
| OS | Windows 10 64-bit | Windows 11 64-bit |
| Virtualizacija | Intel VT-x ali AMD-V (vklopljeno v BIOS) | — |

> ⚠️ **Hyper-V mora biti onemogočen** ali VMware mora teči nad Hyper-V (WHP mode). Na Windows 11 z WSL2 to vmware samodejno zazna.

### 3.2 Minimalne zahteve za HAOS VM

Po uradni dokumentaciji Home Assistant:

| Vir | Absolutni minimum | Priporočeno za domačo rabo |
|-----|-------------------|---------------------------|
| RAM | 2 GB | 4 GB |
| vCPU | 2 jedri | 2–4 jedra |
| Disk | 32 GB (HAOS privzeto) | 64 GB+ |
| Omrežje | Bridge adapter | Bridge adapter |

---

## 4. Prenos HAOS `.vmdk` slike

Uradna slika je na GitHub releases:

```
https://github.com/home-assistant/operating-system/releases/latest
```

Neposredna povezava za zadnjo verzijo (18.0):
```
https://github.com/home-assistant/operating-system/releases/download/18.0/haos_ova-18.0.vmdk.zip
```

> 📁 Po prenosu razpakuj `.zip` → dobiš `haos_ova-18.0.vmdk`

---

## 5. Ustvarjanje HAOS virtualne mašine v VMware

### 5.1 Nov VM čarovnik

1. Odpri **VMware Workstation Pro**
2. Klikni **Create a New Virtual Machine**
3. Izberi: **I will install the operating system later** → **Next**
4. Guest OS: **Linux** → verzija: **Other Linux 5.x kernel 64-bit** → **Next**
5. Ime VM: `home-assistant`
6. Lokacija: npr. `C:\VMs\home-assistant` → **Next**
7. Disk: vnesi velikost (priporočeno **64 GB**) → izberi **Store virtual disk as a single file** → **Next**
8. Klikni **Customize Hardware** (pred Finish!)

### 5.2 Priporočene VM nastavitve (Customize Hardware)

| Nastavitev | Vrednost | Opomba |
|------------|---------|--------|
| **Memory (RAM)** | **4096 MB** (4 GB) | Min 2048 MB |
| **Processors** | **2 jedri** | 1 socket × 2 cores |
| **Hard Disk** | Ohrani (bo zamenjan) | Privzeta velikost |
| **New CD/DVD** | **Odstrani** (Remove) | Ne bo potreben |
| **Network Adapter** | **Bridged** | Direktno v LAN |
| → Configure Adapters | Samo fizični Ethernet adapter | Odznači virtualne in Bluetooth |
| → Replicate physical state | **NE** (odkljukaj) | Prepreči izgubo povezave |
| **USB Controller** | Ohrani | Potrebno za Zigbee dongel |
| **Sound Card** | Odstrani (opcijsko) | Ni potreben |
| **Printer** | Odstrani (opcijsko) | Ni potreben |

9. Klikni **Close** → **Finish**

### 5.3 Zamenjava VMDK diska (kritičen korak!)

Po končanem čarovniku:

1. V **Windows Raziskovalcu** pojdi v `C:\VMs\home-assistant\`
2. **Izbriši** datoteko `home-assistant.vmdk` (prazna placeholder datoteka)
3. Kopiraj preneseni `haos_ova-18.0.vmdk` v ta folder
4. **Preimenuj** ga v `home-assistant.vmdk`

### 5.4 Dodaj EFI firmware (obvezno!)

Brez tega HAOS ne bo zagnal:

1. V mapi VM-ja najdi datoteko `home-assistant.vmx`
2. Desni klik → **Odpri z** → **Beležnica (Notepad)**
3. Poišči vrstico `.encoding = "UTF-8"` (ali podobno, na vrhu datoteke)
4. Takoj **pod** to vrstico dodaj:
   ```
   firmware = "efi"
   ```
5. Shrani datoteko in zapri Beležnico

### 5.5 Zagon VM

1. V VMware klikni na `home-assistant` VM → **Power On**
2. Opazuj boot process (~2–5 min za prvo inicializacijo)
3. Ko vidiš `homeassistant login:` prompt → HAOS je zagnan
4. Odpri brskalnik in pojdi na: **http://homeassistant.local:8123**

> Če `homeassistant.local` ne deluje, preveri IP HAOS VM v routerju (DHCP tabela) in uporabi direkten IP: `http://192.168.x.x:8123`

---

## 6. Samodejni zagon VM ob zagonu Windowsa

Da HAOS teče vedno, ko se PC vklopi:

1. V VMware: **Edit** → **Preferences** → **Shared VMs** ali
2. Za specifičen VM: desni klik na VM → **Settings** → **Options** → **Advanced**
3. Ali ročno: ustvari Windows opravilo (Task Scheduler) ob zagonu:

```powershell
# Pot do vmrun.exe
$vmrun = "C:\Program Files (x86)\VMware\VMware Workstation\vmrun.exe"
$vmx = "C:\VMs\home-assistant\home-assistant.vmx"
& $vmrun start $vmx nogui
```

---

## 7. Pogosta napaka: Hyper-V / virtualizacijski konflikt

### Simptom
VMware prikaže napako: *"This host supports Intel VT-x, but Intel VT-x is disabled"* ali podobno.

### Vzroki in rešitve

| Vzrok | Rešitev |
|-------|---------|
| Virtualizacija ni vklopljena v BIOS | Vstopi v BIOS/UEFI → vklopi Intel VT-x ali AMD-V |
| Hyper-V je aktiven | `bcdedit /set hypervisorlaunchtype off` → restart |
| WSL2 / Windows Sandbox aktiven | Onemogočiti ali pustiti (VMware 17+ deluje z WHP) |
| Device Guard / Core Isolation | Windows Security → Core isolation → izklopi Memory integrity |

> 💡 **Priporočilo:** VMware Workstation 17+ zna delovati **vzporedno s Hyper-V** na Windows 11 prek WHP (Windows Hypervisor Platform) brez onemogočanja Hyper-V. Če pride do težav, preizkusi najprej brez kakršnih koli sprememb.

---

## 8. Checklist pred nadaljevanjem

- [ ] Broadcom račun ustvarjen in potrjen
- [ ] VMware Workstation Pro prenešen in nameščen
- [ ] PC po namestitvi vmware znova zagnan
- [ ] `haos_ova-XX.X.vmdk.zip` prenešen in razpakiran
- [ ] VM ustvarjen z ustreznimi nastavitvami (RAM 4GB, 2 vCPU, Bridge omrežje)
- [ ] Placeholder `.vmdk` zamenjan z HAOS `.vmdk`
- [ ] Dodana vrstica `firmware = "efi"` v `.vmx` datoteko
- [ ] VM zagnan, HAOS dostopen na `http://homeassistant.local:8123`

---

## 9. Naslednji koraki

Po uspešni namestitvi HAOS nadaljuj z:
- 📄 `brief/01_specifikacija.md` → **Faza 2:** Omrežna konfiguracija in VPN dostop (Tailscale)
- 📄 `brief/01_specifikacija.md` → **Faza 3+:** Integracije naprav

---

*Dokument pripravil: GitHub Copilot CLI – OAP Agent*  
*Vir: [home-assistant.io/installation/windows](https://www.home-assistant.io/installation/windows/) | [Broadcom Support Portal](https://support.broadcom.com)*
