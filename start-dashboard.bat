@echo off
title SGM Dashboard Launcher
color 0A
cls
echo.
echo  ============================================
echo    SGM - Smart Generators Management
echo    Dashboard Launcher v2.0
echo  ============================================
echo.
echo  [*] Starting Next.js Dashboard...
echo  [*] Please wait while the server starts...
echo.

:: Open browser after 4 seconds
start "" /min cmd /c "timeout /t 4 /nobreak > nul && start http://localhost:3000"

:: Start the dashboard server
cd /d "%~dp0dashboard"

:: Check if node_modules exists
if not exist "node_modules\" (
    echo  [!] Installing dependencies first - this may take a moment...
    echo.
    npm install
    echo.
)

echo  [OK] Server starting at http://localhost:3000
echo  [OK] Press Ctrl+C to stop the server
echo.
npm run dev

pause
