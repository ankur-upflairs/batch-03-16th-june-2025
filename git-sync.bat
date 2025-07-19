@echo off
setlocal

:: Set fixed commit message
set "commitMessage=code pushed"

:: Add all files
git add .

:: Commit with fixed message
git commit -m "%commitMessage%"

:: Push to the current branch
git push

echo.
echo ✅ Code pushed to GitHub with message: "%commitMessage%"
pause
