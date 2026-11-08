const sb=supabase.createClient(CFG.url,CFG.key);
const $=i=>document.getElementById(i);
let user=null,P=null,isGuest=false,G,mode,side='w',sel=null,flip=false,over=false,last=null,sound=true,outline=false,lvl=2,T={w:0,b:0},tm=null,rp=null,gid=0,room=null,chan=null,ready=false,sfw=null,sfq=Promise.resolve();
const GL={w:{k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'},o:{k:'♔',q:'♕',r:'♖',b:'♗',n:'♘',p:'♙'}};
const pzs=['6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1','r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4','rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq - 0 2'];
const dayStr=()=>new Date().toDateString(),dayIdx=()=>Math.floor(Date.now()/864e5)%pzs.length;
/* ---------- auth ---------- */
async function boot(){const{data}=await sb.auth.getSession();if(data.session){user=data.session.user;await loadProf();enter()}else showAuth()}
function showAuth(){$('auth').classList.remove('hide');$('app').classList.add('hide')}
async function auth(t){
 const email=$('em').value.trim(),password=$('pw').value;$('err').textContent='';
 const r=t=='up'?await sb.auth.signUp({email,password,options:{data:{username:$('un').value.trim()||email.split('@')[0]}}}):await sb.auth.signInWithPassword({email,password});
 if(r.error){$('err').textContent=r.error.message;return}
 if(!r.data.session){$('err').textContent='Check your email to confirm, then sign in.';return}
 user=r.data.session.user;await loadProf();enter()}
function guest(){isGuest=true;P={username:'Guest',elo:800,games:0,wins:0,ach:[]};enter()}
async function logout(){await sb.auth.signOut();location.reload()}
async function loadProf(){
 let{data}=await sb.from('profiles').select('*').eq('id',user.id).maybeSingle();
 if(!data){await sb.from('profiles').insert({id:user.id,username:user.user_metadata.username||user.email.split('@')[0]});({data}=await sb.from('profiles').select('*').eq('id',user.id).single())}
 P=data;P.ach=P.ach||[]}
function saveProf(){if(isGuest)return;sb.from('profiles').update({elo:P.elo,games:P.games,wins:P.wins,ach:P.ach,puzzle_day:P.puzzle_day}).eq('id',user.id).then(()=>{})}
function enter(){$('auth').classList.add('hide');$('app').classList.remove('hide');theme('Forest');home()}
/* ---------- home ---------- */
function theme(n){const t={Forest:['#779477','#E8DCC4'],Classic:['#B58863','#F0D9B5'],Slate:['#6b7a8f','#dee3e6']}[n];document.documentElement.style.setProperty('--dk',t[0]);document.documentElement.style.setProperty('--lt',t[1])}
async function home(){
 clearInterval(tm);gid++;leave();$('view').classList.add('hide');$('home').classList.remove('hide');
 $('elo').textContent=P.username+' · Elo '+P.elo;$('hi').textContent=isGuest?'Guest mode: progress is not saved.':'Welcome back, '+P.username+'.';
 const A=[['first','First game'],['win','First win'],['hard','Beat Hard'],['five','5 games'],['puz','Puzzle solved'],['fast','Mate under 20 moves']];
 $('ach').innerHTML=A.map(a=>`<span class="badge ${P.ach.includes(a[0])?'on':''}">🏅 ${a[1]}</span>`).join('');
 $('pz').textContent=P.puzzle_day==dayStr()?'Solved today ✓':'Mate in one. Find the move.';
 const{data:lb}=await sb.from('profiles').select('username,elo').order('elo',{ascending:false}).limit(10);
 $('lb').innerHTML=(lb||[]).map((x,i)=>`<div class="li"><span>${i+1}. ${esc(x.username)}</span><b>${x.elo}</b></div>`).join('')||'<p>No players yet.</p>';
 if(isGuest){$('hist').innerHTML='<p>Sign in to keep your game history.</p>';return}
 const{data:h}=await sb.from('history').select('*').order('created_at',{ascending:false}).limit(10);window.H=h||[];
 $('hist').innerHTML=H.length?H.map((g,i)=>`<div class="li"><span>${new Date(g.created_at).toLocaleDateString()} · ${g.mode} · ${g.result}</span><span><button onclick="replay(${i})">Replay</button> <button onclick="analyze(H[${i}].moves)">Analyze</button></span></div>`).join(''):'<p>No games yet.</p>'}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function show(){$('home').classList.add('hide');$('view').classList.remove('hide');over=false;sel=null;last=null;rp=null;$('msg').textContent='';$('rp').innerHTML='';$('rep').innerHTML='';$('anb').classList.add('hide');$('again').style.display='';clearInterval(tm);gid++;window.scrollTo(0,0)}
function names(a,b){$('nt').textContent=a;$('nb').textContent=b}
function start(m){mode=m;leave();show();G=new Chess();lvl=+$('lvl').value;side=(m=='cpu'&&Math.random()<.5)?'b':'w';flip=side=='b';
 const t=+$('tc').value;T={w:t,b:t};names(m=='cpu'?'Stockfish ('+['','Easy','Medium','Hard'][lvl]+')':'Player 2',m=='cpu'?'You':'Player 1');
 if(t)tm=setInterval(tick,1000);render();clk();if(m=='cpu'&&side=='b')ai()}
function puzzle(){mode='puzzle';show();G=new Chess(pzs[dayIdx()]);side=G.turn();flip=side=='b';T={w:0,b:0};names('Daily puzzle','Mate in one');$('again').style.display='none';render();clk()}
/* ---------- online ---------- */
function leave(){if(chan){sb.removeChannel(chan);chan=null}room=null;ready=false}
async function createRoom(){
 if(isGuest)return alert('Sign in to play online.');
 const code=Math.random().toString(36).slice(2,7).toUpperCase();
 const{error}=await sb.from('rooms').insert({code,white:user.id});if(error)return alert(error.message);
 mode='online';show();G=new Chess();side='w';flip=false;room=code;T={w:0,b:0};names('Waiting for friend…','You (White)');$('again').style.display='none';
 $('msg').textContent='Room code: '+code;sub();render();clk()}
async function joinRoom(){
 if(isGuest)return alert('Sign in to play online.');
 const code=(prompt('Room code')||'').trim().toUpperCase();if(!code)return;
 const{data:r}=await sb.from('rooms').select('*').eq('code',code).maybeSingle();
 if(!r||(r.black&&r.black!=user.id)||r.white==user.id)return alert('Room not found or full.');
 await sb.from('rooms').update({black:user.id,status:'playing'}).eq('code',code);
 mode='online';show();G=new Chess();side='b';flip=true;room=code;ready=true;T={w:0,b:0};names('Friend (White)','You (Black)');$('again').style.display='none';
 (r.moves||[]).forEach(m=>G.move(m));sub();render();clk()}
function sub(){chan=sb.channel('room-'+room).on('postgres_changes',{event:'UPDATE',schema:'public',table:'rooms',filter:'code=eq.'+room},p=>onRoom(p.new)).subscribe()}
function onRoom(r){
 if(r.black&&!ready){ready=true;names('Friend (Black)','You (White)');$('msg').textContent=''}
 let m=false;while(G.history().length<(r.moves||[]).length){const x=G.move(r.moves[G.history().length]);last=[x.from,x.to];m=true}
 if(m){beep(440);render();clk();if(G.game_over()&&!over)finish()}}
/* ---------- board ---------- */
function render(){
 const g=rp?rp.g:G,mv=sel&&!rp?g.moves({square:sel,verbose:true}).map(m=>m.to):[],kc=g.in_check()?findK(g,g.turn()):null;let h='';
 for(let r=0;r<8;r++)for(let f=0;f<8;f++){const rr=flip?7-r:r,ff=flip?7-f:f,s='abcdefgh'[ff]+(8-rr),p=g.get(s);
  h+=`<div class="sq ${(rr+ff)%2?'d':'l'}${s==sel?' sel':''}${last&&(s==last[0]||s==last[1])?' last':''}${mv.includes(s)?' mv':''}${s==kc?' chk':''}" onclick="clickSq('${s}')">${p?`<span class="pc ${p.color}">${(outline?GL.o:GL.w)[p.type]}</span>`:''}</div>`}
 $('board').innerHTML=h}
function findK(g,c){for(let i=0;i<8;i++)for(let j=0;j<8;j++){const s='abcdefgh'[j]+(8-i),p=g.get(s);if(p&&p.type=='k'&&p.color==c)return s}}
function clickSq(s){
 if(over||rp)return;const turn=G.turn();
 if(!(mode=='local'||(turn==side&&(mode!='online'||ready))))return;
 if(sel){const m=G.move({from:sel,to:s,promotion:'q'});if(m)return moved(m)}
 const p=G.get(s);sel=p&&p.color==turn?s:null;render()}
function moved(m){
 sel=null;last=[m.from,m.to];beep(m.captured?330:440);render();clk();
 if(mode=='puzzle'){if(G.in_checkmate()){over=true;$('msg').textContent='Correct! Checkmate ✓';P.puzzle_day=dayStr();ach('puz');saveProf();beep(660)}else{$('msg').textContent='Not mate. Try again.';G.undo();last=null;setTimeout(render,600)}return}
 if(mode=='online')sb.from('rooms').update({moves:G.history(),turn:G.turn(),status:G.game_over()?'finished':'playing'}).eq('code',room).then(()=>{});
 if(G.game_over())return finish();
 if(G.in_check())beep(550);
 if(mode=='cpu'&&G.turn()!=side)ai()}
function finish(){
 let d='Draw',res='D';
 if(G.in_checkmate()){const w=G.turn()=='w'?'Black':'White';d=w+' wins by checkmate';res=mode=='local'?'W':(G.turn()==side?'L':'W')}
 end(d,res)}
/* ---------- clock & end ---------- */
const fmt=s=>s?Math.floor(s/60)+':'+('0'+s%60).slice(-2):'–';
function tick(){if(over)return;const c=G.turn();T[c]--;clk();if(T[c]<=0)end((c=='w'?'Black':'White')+' wins on time',mode=='local'?'W':(c==side?'L':'W'))}
function clk(){const top=flip?'w':'b',bot=flip?'b':'w';$('ct').textContent=fmt(T[top]);$('cb').textContent=fmt(T[bot]);
 $('ct').className='clock'+(G.turn()==top&&!over?' on':'');$('cb').className='clock'+(G.turn()==bot&&!over?' on':'')}
function ach(k){if(!P.ach.includes(k))P.ach.push(k)}
function end(d,res){
 over=true;clearInterval(tm);$('msg').textContent=d;clk();beep(res=='W'?700:260);$('anb').classList.remove('hide');
 if(mode=='cpu'){const opp=[0,600,1000,1400][lvl],e=1/(1+Math.pow(10,(opp-P.elo)/400)),ch=Math.round(32*((res=='W'?1:res=='D'?.5:0)-e));
  P.elo=Math.max(100,P.elo+ch);$('msg').textContent=d+' · Elo '+(ch>=0?'+':'')+ch;P.games++;ach('first');if(P.games>=5)ach('five');
  if(res=='W'){P.wins++;ach('win');if(lvl==3)ach('hard');if(G.history().length<40&&G.in_checkmate())ach('fast')}saveProf();$('elo').textContent=P.username+' · Elo '+P.elo}
 if(!isGuest&&mode!='puzzle')sb.from('history').insert({user_id:user.id,mode:mode=='cpu'?'vs CPU':mode,result:res=='W'?'Win':res=='L'?'Loss':'Draw',moves:G.history()}).then(()=>{})}
/* ---------- sound ---------- */
function beep(f){if(!sound)return;try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.frequency.value=f;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.08,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.1);o.start();o.stop(a.currentTime+.1)}catch(e){}}
/* ---------- Stockfish ---------- */
function sfInit(){return sfw||(sfw=fetch('https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js').then(r=>r.text()).then(t=>{const w=new Worker(URL.createObjectURL(new Blob([t],{type:'text/javascript'})));w.postMessage('uci');return w}))}
function sf(fen,o){return sfq=sfq.then(async()=>{const w=await sfInit();return new Promise(res=>{let cp=0;
 w.onmessage=e=>{const l=typeof e.data=='string'?e.data:'',m=l.match(/score (cp|mate) (-?\d+)/);if(m)cp=m[1]=='cp'?+m[2]:(+m[2]>0?10000:-10000);if(l.startsWith('bestmove'))res({best:l.split(' ')[1],cp})};
 w.postMessage('setoption name Skill Level value '+(o.skill==null?20:o.skill));w.postMessage('position fen '+fen);w.postMessage(o.depth?'go depth '+o.depth:'go movetime '+o.ms)})}).catch(()=>({best:null,cp:0}))}
async function ai(){
 const my=gid;$('msg').textContent='Thinking…';
 const r=await sf(G.fen(),{skill:[0,2,10,20][lvl],ms:[0,150,400,900][lvl]});
 if(my!=gid||over)return;$('msg').textContent='';
 let m=null;if(r.best&&r.best!='(none)')m=G.move({from:r.best.slice(0,2),to:r.best.slice(2,4),promotion:r.best[4]||'q'});
 if(!m){const ms=G.moves();m=G.move(ms[Math.floor(Math.random()*ms.length)])}
 moved(m)}
/* ---------- replay & analysis ---------- */
function replay(i){mode='replay';show();over=true;$('again').style.display='none';names('Replay',H[i].result);flip=false;rp={mv:H[i].moves,i:0,g:null,info:null};rstep(1e3)}
function rstep(d){
 rp.i=Math.max(0,Math.min(rp.mv.length,rp.i+d));const g=new Chess();for(let k=0;k<rp.i;k++)g.move(rp.mv[k]);rp.g=g;last=null;
 $('rp').innerHTML=`<button onclick="rstep(-1e3)">⏮</button><button onclick="rstep(-1)">◀</button><span>${rp.i} / ${rp.mv.length}</span><button onclick="rstep(1)">▶</button><button onclick="rstep(1e3)">⏭</button>`;
 if(rp.info&&rp.i>0){const a=rp.info[rp.i-1];$('msg').innerHTML=`${rp.mv[rp.i-1]} ${a.l?`<span class="${a.l}">· ${a.l}</span> · best: ${a.b||'-'}`:''}`}
 render()}
async function analyze(mv){
 if(!mv||!mv.length)return;mode='replay';show();over=true;$('again').style.display='none';names('Analysis','Stockfish depth 10');
 const g=new Chess(),fens=[g.fen()];mv.forEach(m=>{g.move(m);fens.push(g.fen())});
 const ev=[],bs=[];
 for(let i=0;i<fens.length;i++){$('msg').textContent=`Analyzing ${i+1}/${fens.length}…`;const c=new Chess(fens[i]),sg=c.turn()=='w'?1:-1;
  if(c.game_over()){ev.push(c.in_checkmate()?(c.turn()=='w'?-1e4:1e4):0);bs.push(null);continue}
  const r=await sf(fens[i],{depth:10});ev.push(r.cp*sg);bs.push(r.best)}
 const info=[],acc={w:[],b:[]};
 for(let i=0;i<mv.length;i++){const w=i%2==0,loss=Math.max(0,w?ev[i]-ev[i+1]:ev[i+1]-ev[i]);
  let l=loss>300?'Blunder':loss>150?'Mistake':loss>70?'Inaccuracy':'';
  const b=bs[i]?(new Chess(fens[i]).move({from:bs[i].slice(0,2),to:bs[i].slice(2,4),promotion:bs[i][4]||'q'})||{}).san:null;
  info.push({l,b:l?b:null});acc[w?'w':'b'].push(Math.max(0,Math.min(100,103.17*Math.exp(-.0043*Math.min(loss,1500))-3.17)))}
 const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0,cnt=(p,l)=>info.filter((x,i)=>i%2==p&&x.l==l).length;
 const pts=ev.map((v,i)=>`${(i/(ev.length-1||1))*300},${50-Math.max(-500,Math.min(500,v))/10}`).join(' ');
 rp={mv,i:mv.length,g:null,info};$('msg').textContent='';
 $('rep').innerHTML=`<div class="card" style="max-width:520px;margin:8px auto">
  <div class="li"><span>White accuracy</span><b>${avg(acc.w)}%</b></div><div class="li"><span>Black accuracy</span><b>${avg(acc.b)}%</b></div>
  <div class="li"><span>White: blunders / mistakes / inaccuracies</span><b>${cnt(0,'Blunder')} / ${cnt(0,'Mistake')} / ${cnt(0,'Inaccuracy')}</b></div>
  <div class="li"><span>Black: blunders / mistakes / inaccuracies</span><b>${cnt(1,'Blunder')} / ${cnt(1,'Mistake')} / ${cnt(1,'Inaccuracy')}</b></div>
  <svg viewBox="0 0 300 100" style="width:100%;margin-top:10px;background:#0006;border-radius:8px"><line x1="0" y1="50" x2="300" y2="50" stroke="#fff3"/><polyline fill="none" stroke="#C5A46D" stroke-width="1.5" points="${pts}"/></svg>
  <div class="mv-list">${mv.map((m,i)=>`<span class="${info[i].l}" onclick="rstep(${i+1}-rp.i)">${i%2?'':(i/2+1)+'. '}${m}</span>`).join('')}</div></div>`;
 rstep(0)}
boot();
