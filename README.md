# Pers_Model_nastavitev

Nastavitev sistema po metodi **OAP – Orkestrirano Agentno Programiranje** (Janez Perš).

## 🚀 Hitra namestitev OAP okolja na novem računalniku

### Predpogoji
- Windows 11 (64-bit)
- Git: https://git-scm.com/download/win
- PowerShell 5.1+ (vgrajeno v Windows 11)

### Koraki namestitve

```powershell
# 1. Nastavi ExecutionPolicy
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force

# 2. Namesti Node.js LTS (v20+) – prek winget
winget install OpenJS.NodeJS.LTS

# 3. Odpri novo PowerShell okno in namesti Claude Code CLI
npm install -g @anthropic-ai/claude-code

# 4. Preveri namestitev
git --version
node --version
npm --version
claude --version
```

### Avtomatska namestitev prek GitHub Actions

Ta repozitorij vsebuje `.github/workflows/copilot-setup-steps.yml`, ki avtomatizira
namestitev OAP okolja za GitHub Copilot cloud agent (Windows runner).

**Kaj namesti workflow:**
| Orodje | Verzija |
|--------|---------|
| Git | (preveritev) |
| Node.js | LTS v20+ |
| npm | (skupaj z Node.js) |
| Claude Code CLI | najnovejša (`@anthropic-ai/claude-code`) |
| PowerShell ExecutionPolicy | `RemoteSigned` za `CurrentUser` |

**Ročno proženje:**
1. Pojdi na **Actions** zavihek repozitorija
2. Izberi **Copilot Setup Steps**
3. Klikni **Run workflow**

## 📁 Struktura repozitorija

```
brief/
  01_specifikacija.md     – specifikacija Home Assistant projekta
  02_vmware_namestitev.md – navodila za VMware HAOS namestitev
  03_integracije.md       – navodila za vse integracije (Sonoff, Solarman, Metron EV...)
.github/
  workflows/
    copilot-setup-steps.yml – OAP okolje za GitHub Copilot
```

## 🏠 Home Assistant projekt

HAOS teče na VMware Workstation VM (`192.168.10.36:8123`).

**Nameščene integracije:**
- ✅ SonoffLAN – stikala Sonoff
- ✅ ha-solarman – Sofar HYD 20KTL solarni inverter (LSW-3, SN=2764640149)
- ✅ Metron EV – polnilec EV (ws://192.168.10.105:80/ws, 34 entitet)
- ✅ Tailscale VPN – oddaljen dostop (IP: 100.72.121.122)
