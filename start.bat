@echo off
title TAPASA Luxury Design - Web Application
echo ========================================================
echo        TAPASA - Luxury Design Atelier
echo ========================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed on this computer.
    echo Please download and install Node.js from: https://nodejs.org
    echo Once installed, double-click this file again.
    echo.
    pause
    exit /b
)

:: Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies (this only happens the first time)...
    call npm install --legacy-peer-deps
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b
    )
)

echo Starting TAPASA local server...
echo The site will automatically open in your browser at http://localhost:3000
echo (Keep this window open while browsing. Press Ctrl+C to stop.)
echo.

start http://localhost:3000
call npm run dev -- -p 3000
pause
