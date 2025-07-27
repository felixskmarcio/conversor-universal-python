@echo off
chcp 65001 >nul
echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                 CONVERSOR UNIVERSAL DE DOCUMENTOS            ║
echo ║                        Iniciando...                         ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

REM Verifica se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python não encontrado! Por favor, instale o Python 3.7 ou superior.
    echo 📥 Download: https://www.python.org/downloads/
    pause
    exit /b 1
)

echo ✅ Python encontrado!
echo.

REM Verifica se as dependências estão instaladas
echo 🔍 Verificando dependências...
python -c "import flask" >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Dependências não encontradas. Instalando...
    echo.
    pip install -r requirements.txt
    if errorlevel 1 (
        echo ❌ Erro ao instalar dependências!
        pause
        exit /b 1
    )
    echo ✅ Dependências instaladas com sucesso!
) else (
    echo ✅ Dependências já instaladas!
)

echo.
echo 🚀 Iniciando o Conversor Universal...
echo 🌐 Interface web será aberta em: http://localhost:5000
echo.
echo ⚠️  Para parar o servidor, pressione Ctrl+C
echo.

REM Inicia o servidor
cd backend
python app.py

echo.
echo 👋 Conversor finalizado!
pause