from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import random
import asyncio

app = FastAPI()

bot_running = False
profit = 0

html = """
<!DOCTYPE html>
<html>
<head>
<title>AI Trading Dashboard</title>
<style>
body{
background:#0f172a;
color:white;
font-family:Arial;
padding:20px;
}
.card{
background:#1e293b;
padding:20px;
border-radius:15px;
margin-top:20px;
}
button{
padding:15px;
border:none;
border-radius:10px;
font-size:18px;
margin-right:10px;
cursor:pointer;
}
.start{
background:#22c55e;
color:white;
}
.stop{
background:#ef4444;
color:white;
}
</style>
</head>
<body>

<h1>AI Trading Bot</h1>

<div class="card">
<h2>Status: <span id="status">OFF</span></h2>
<h2>Profit: $<span id="profit">0</span></h2>

<button class="start" onclick="startBot()">START</button>
<button class="stop" onclick="stopBot()">STOP</button>
</div>

<script>
async function startBot(){
await fetch('/start');
document.getElementById('status').innerText='RUNNING';
}

async function stopBot(){
await fetch('/stop');
document.getElementById('status').innerText='OFF';
}

setInterval(async ()=>{
const res = await fetch('/stats');
const data = await res.json();
document.getElementById('profit').innerText=data.profit;
},1000);
</script>

</body>
</html>
"""

@app.get("/", response_class=HTMLResponse)
async def home():
    return html

@app.get("/start")
async def start():
    global bot_running
    bot_running = True
    return {"status":"started"}

@app.get("/stop")
async def stop():
    global bot_running
    bot_running = False
    return {"status":"stopped"}

@app.get("/stats")
async def stats():
    return {"profit": profit}

async def fake_trading():
    global profit

    while True:
        if bot_running:
            trade = random.choice([0.92, -1])
            profit += trade

        await asyncio.sleep(5)

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(fake_trading())
