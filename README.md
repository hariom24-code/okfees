# newokfeeeee (Coaching Platform)

This repository contains a React + Vite frontend (`client/`) and an Express backend (`server/`).

Quick start (Windows PowerShell)

1. Install dependencies

   cd "c:\Users\Hariom kumbhkar\Downloads\newokfeeeee\server"
   npm install

   cd "c:\Users\Hariom kumbhkar\Downloads\newokfeeeee\client"
   npm install

2. Start backend and frontend (recommended to open two separate terminals)

   # Terminal 1 - backend
   cd "c:\Users\Hariom kumbhkar\Downloads\newokfeeeee\server"
   npm run dev

   # Terminal 2 - frontend
   cd "c:\Users\Hariom kumbhkar\Downloads\newokfeeeee\client"
   npm run dev

Notes

- The client dev script runs Vite with `--host` so it binds to all interfaces (avoids IPv6-only binding issues).
- Dev server defaults:
  - Backend: http://localhost:5000
  - Frontend: http://localhost:5173
- Node.js: Vite requires Node.js >= 20.19.0 (or >= 22.12.0). If you see engine warnings, consider upgrading your Node installation.

Troubleshooting

- If you see "localhost refused to connect":
  - Ensure both dev servers are running (see netstat for listening ports).
  - Try `curl http://127.0.0.1:5173/` and `curl http://127.0.0.1:5000/` from PowerShell.
  - Temporarily disable VPN/proxy/firewall to verify connectivity.

If you'd like, I can add a Windows PowerShell script to start both servers in separate windows automatically.
