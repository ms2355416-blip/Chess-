const sb=supabase.createClient(CFG.url,CFG.key),$=i=>document.getElementById(i);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const parse=s=>Object.fromEntries(s.trim().split('\n').map(l=>{const i=l.indexOf('|');return[l.slice(0,i),l.slice(i+1)]}));
const D={en:parse(`
home|Home
play|Play
puzzles|Puzzles
learn|Learn
leaders|Leaderboard
profile|Profile
settings|Settings
login|Sign in
signup|Sign up
logout|Sign out
email|Email
pass|Password
uname|Username
guest|Continue as guest
forgot|Forgot password?
sent|Check your email to continue.
hero1|Master Your Game
hero2|Play, learn and climb the ranks.
playnow|Play now
explore|Explore
modes|Game modes
vscpu|Play Computer
vscpuD|Train against Stockfish
local|Local play
localD|Two players, one device
online|Play online
onlineD|Challenge a friend with a room code
puzD|Test your tactics
daily|Daily puzzle
dailyD|A fresh puzzle from Lichess every day.
solve|Solve
level|Level
easy|Easy
medium|Medium
hard|Hard
clock|Time control
none|No clock
custom|Custom
min|Minutes
incr|Increment (s)
color|Color
white|White
black|Black
rand|Random
start|Start game
create|Create room
join|Join
code|Room code
wait|Waiting for a friend… Code:
resign|Resign
draw|Draw
flip|Flip
undo|Takeback
rematch|New game
review|Review
win|You won
lose|You lost
drawn|Draw
wwin|White wins
bwin|Black wins
rating|Rating
games|Games
wins|Wins
losses|Losses
draws|Draws
winrate|Win rate
peak|Peak rating
recent|Recent games
ach|Achievements
empty|Nothing here yet.
err|Something went wrong.
bullet|Bullet
blitz|Blitz
rapid|Rapid
top|Top players
yourrank|Your rank
xp|XP
lvl|Level
hint|Hint
sol|Solution
newp|New puzzle
ok|Correct!
bad|Not quite. Try again.
solved|Puzzle solved!
streak|Streak
diff|Difficulty
easiest|Easiest
easier|Easier
normal|Normal
harder|Harder
hardest|Hardest
theme|Theme
dark|Dark
light|Light
sound|Sound
bt|Board
ps|Pieces
solid|Solid
outl|Outline
lang|Language
coords|Coordinates
hints|Legal move hints
on|On
off|Off
tips|Tactical tips
t1|Look for checks, captures and threats before every move.
t2|Develop knights and bishops, castle early, control the center.
t3|Before moving, ask: what does my opponent threaten now?
openings|Openings
needlogin|Sign in to use this feature.
more|More projects
unlocked|Achievement unlocked
edit|Edit name
opp|Opponent
you|You
cpu|Stockfish
acc|Accuracy
blund|Blunders
mist|Mistakes
inacc|Inaccuracies
mix|Mixed
m1|Mate in 1
m2|Mate in 2
fork|Fork
a_first_win|First Victory
a_sharp_mind|Sharp Mind
a_warrior|Warrior
a_unbeatable|Unbeatable
a_master|Master
a_puzzle_king|Puzzle King
d_first_win|Win your first game
d_sharp_mind|Solve 10 puzzles
d_warrior|Play 50 games
d_unbeatable|Win 5 games in a row
d_master|Reach 1500 rating
d_puzzle_king|Solve 100 puzzles
offer|Draw offered
offer2|Opponent offers a draw. Press Draw to accept.
analyzing|Analyzing
ok2|OK
cancel|Cancel
accept|Accept
decline|Decline
leaveT|Leave the game?
leaveD|If you leave now, the game counts as a loss.
leaveL|If you leave now, the game will be discarded.
leave|Leave
stay|Stay
drawReq|Draw offer
drawReqD|Your opponent offers a draw. Do you accept?
drawNo|The draw offer was not accepted.
drawLocal|Do both players agree to a draw?
resignQ|Do you want to resign?
save|Save
rnf|Room not found.
rfull|The room is full or the game already started.
rown|This is your own room. Use a different account on the other phone.
joining|Joining…
imp|Impossible
retry|Retry
engErr|The engine failed to load. Check your connection and retry.
thinking|Thinking…
friends|Friends
search|Search
reqs|Friend requests
sent2|Sent requests
add|Add
added|Added
remove|Remove
sentok|Friend request sent.
copied|PGN copied.
`),ar:parse(`
home|الرئيسية
play|لعب
puzzles|الألغاز
learn|تعلّم
leaders|المتصدرون
profile|حسابي
settings|الإعدادات
login|تسجيل الدخول
signup|إنشاء حساب
logout|تسجيل الخروج
email|البريد الإلكتروني
pass|كلمة المرور
uname|اسم المستخدم
guest|المتابعة كضيف
forgot|نسيت كلمة المرور؟
sent|راجع بريدك الإلكتروني للمتابعة.
hero1|أتقن لعبتك
hero2|العب وتعلّم وتسلّق التصنيف.
playnow|العب الآن
explore|استكشف
modes|أوضاع اللعب
vscpu|ضد الكمبيوتر
vscpuD|تدرّب ضد Stockfish
local|لعب محلي
localD|لاعبان على نفس الجهاز
online|أونلاين
onlineD|تحدَّ صديقك بكود غرفة
puzD|اختبر تكتيكاتك
daily|لغز اليوم
dailyD|لغز جديد من Lichess كل يوم.
solve|احلّه
level|المستوى
easy|سهل
medium|متوسط
hard|صعب
clock|نظام الوقت
none|بدون ساعة
custom|مخصص
min|الدقائق
incr|الوقت الإضافي (ث)
color|اللون
white|أبيض
black|أسود
rand|عشوائي
start|ابدأ المباراة
create|إنشاء غرفة
join|انضمام
code|كود الغرفة
wait|في انتظار صديقك… الكود:
resign|استسلام
draw|تعادل
flip|تدوير
undo|تراجع
rematch|مباراة جديدة
review|مراجعة
win|فزت
lose|خسرت
drawn|تعادل
wwin|فاز الأبيض
bwin|فاز الأسود
rating|التصنيف
games|المباريات
wins|الانتصارات
losses|الهزائم
draws|التعادلات
winrate|نسبة الفوز
peak|أعلى تصنيف
recent|آخر المباريات
ach|الإنجازات
empty|لا يوجد شيء بعد.
err|حدث خطأ ما.
bullet|بوليت
blitz|بليتز
rapid|رابيد
top|أفضل اللاعبين
yourrank|ترتيبك
xp|نقاط الخبرة
lvl|المستوى
hint|تلميح
sol|الحل
newp|لغز جديد
ok|صحيح!
bad|ليس تمامًا. حاول مرة أخرى.
solved|تم حل اللغز!
streak|السلسلة
diff|الصعوبة
easiest|الأسهل
easier|سهل
normal|عادي
harder|صعب
hardest|الأصعب
theme|النوع
dark|داكن
light|فاتح
sound|الصوت
bt|الرقعة
ps|القطع
solid|ممتلئة
outl|مفرغة
lang|اللغة
coords|الإحداثيات
hints|إظهار النقلات القانونية
on|تشغيل
off|إيقاف
tips|نصائح تكتيكية
t1|ابحث عن الكشّات والأَخذ والتهديدات قبل كل نقلة.
t2|طوّر الأحصنة والأفيال، بدّل مبكرًا، وتحكم في المركز.
t3|قبل أن تلعب اسأل: ماذا يهدد خصمي الآن؟
openings|الافتتاحيات
needlogin|سجّل الدخول لاستخدام هذه الميزة.
more|مشاريع أخرى
unlocked|إنجاز جديد
edit|تعديل الاسم
opp|الخصم
you|أنت
cpu|Stockfish
acc|الدقة
blund|أخطاء فادحة
mist|أخطاء
inacc|هفوات
mix|مختلط
m1|كش مات في نقلة
m2|كش مات في نقلتين
fork|شوكة
a_first_win|أول انتصار
a_sharp_mind|عقل حاد
a_warrior|محارب
a_unbeatable|لا يُهزم
a_master|ماستر
a_puzzle_king|ملك الألغاز
d_first_win|افز بأول مباراة
d_sharp_mind|احلّ 10 ألغاز
d_warrior|العب 50 مباراة
d_unbeatable|افز 5 مرات متتالية
d_master|صل إلى تصنيف 1500
d_puzzle_king|احلّ 100 لغز
offer|تم إرسال عرض التعادل
offer2|الخصم يعرض التعادل. اضغط تعادل للقبول.
analyzing|جاري التحليل
ok2|حسنًا
cancel|إلغاء
accept|قبول
decline|رفض
leaveT|تغادر المباراة؟
leaveD|لو خرجت الآن هتتحسب عليك خسارة.
leaveL|لو خرجت الآن المباراة هتتلغي.
leave|خروج
stay|ابقَ
drawReq|عرض تعادل
drawReqD|خصمك يعرض عليك التعادل. هل توافق؟
drawNo|لم يتم قبول عرض التعادل.
drawLocal|هل يتفق اللاعبان على التعادل؟
resignQ|هل تريد الاستسلام؟
save|حفظ
rnf|الغرفة غير موجودة.
rfull|الغرفة ممتلئة أو المباراة بدأت.
rown|دي غرفتك أنت. ادخل بحساب مختلف من الموبايل التاني.
joining|جاري الانضمام…
imp|مستحيل
retry|إعادة المحاولة
engErr|تعذّر تحميل المحرك. تأكد من الاتصال وأعد المحاولة.
thinking|جاري التفكير…
friends|الأصدقاء
search|بحث
reqs|طلبات الصداقة
sent2|طلبات مرسلة
add|إضافة
added|تمت الإضافة
remove|إزالة
sentok|تم إرسال طلب الصداقة.
copied|تم نسخ PGN.
`)};
let S=Object.assign({lang:'ar',theme:'dark',bt:'Forest',ps:'0',snd:'1',coords:'1',hints:'1'},JSON.parse(localStorage.getItem('cs')||'{}'));
const t=k=>D[S.lang][k]||D.en[k]||k,ic=(n,c)=>`<svg class="ic ${c||''}"><use href="#i-${n}"/></svg>`;
let user=null,P=null,guest=false,G=null,mode='cpu',pm='cpu',side='w',sel=null,flip=false,over=false,last=null,lvl=2,cfg={b:0,i:0},T={w:0,b:0},tm=null,rp=null,gid=0,room=null,chan=null,ready=false,oppName=null,sfw=null,sfq=Promise.resolve(),pz=null,pStreak=0,hintSq=null,drag=null,REV=null,busy=false,cur='',wantDaily=false,flagging=false,lbc='blitz',am='in',offerOpen=false,myOffer=false;
const GL={k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'},GO={k:'♔',q:'♕',r:'♖',b:'♗',n:'♘',p:'♙'};
const TC=[[0,0],[60,0],[120,1],[180,0],[300,0],[600,0],[900,10]],TL=['none','Bullet 1+0','Bullet 2+1','Blitz 3+0','Blitz 5+0','Rapid 10+0','Rapid 15+10'];
const ACH=[['first_win','medal'],['sharp_mind','bulb'],['warrior','flag'],['unbeatable','bolt'],['master','crown'],['puzzle_king','trophy']];
const OPEN=[['C50','Italian Game','e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4'],['C60','Ruy Lopez','e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O Be7'],['B20','Sicilian Defence','e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6'],['D06',"Queen's Gambit",'d4 d5 c4 e6 Nc3 Nf6 Bg5 Be7 e3 O-O'],['C00','French Defence','e4 e6 d4 d5 Nc3 Nf6 Bg5 Be7 e5 Nfd7'],['A45','London System','d4 d5 Nf3 Nf6 Bf4 e6 e3 c5 c3 Nc6']];
const levelOf=x=>Math.floor(Math.sqrt((x||0)/100))+1,ELO=c=>P?P['elo_'+c]:800;
const cls=(b,i)=>{const e=b+40*i;return !b||e>=480?'rapid':e<180?'bullet':'blitz'};
/* ---------- settings / ui ---------- */
function applyS(){const d=document.documentElement;d.lang=S.lang;d.dir=S.lang=='ar'?'rtl':'ltr';d.dataset.theme=S.theme;
 const b={Forest:['#779477','#E8DCC4'],Classic:['#B58863','#F0D9B5'],Slate:['#6b7a8f','#dee3e6']}[S.bt]||['#779477','#E8DCC4'];d.style.setProperty('--dk',b[0]);d.style.setProperty('--lt',b[1]);
 $('lg').textContent=S.lang=='ar'?'EN':'ع';$('th').innerHTML=ic(S.theme=='dark'?'sun':'moon');hdr();
 const N=[['home','home'],['play','play'],['puzzles','puzzle'],['learn','book'],['leaders','trophy'],['profile','user']];
 $('nav').innerHTML=N.map(n=>`<a href="#${n[0]}" data-r="${n[0]}">${ic(n[1])}${t(n[0])}</a>`).join('');
 $('mm').innerHTML=N.concat([['friends','users'],['settings','set']]).map(n=>`<a href="#${n[0]}" data-r="${n[0]}" onclick="$('mm').classList.remove('open')">${ic(n[1])}${t(n[0])}</a>`).join('');
 $('ft').innerHTML=`<div>${['home','play','puzzles','leaders','settings'].map(x=>`<a href="#${x}">${t(x)}</a>`).join('')}</div><div class="dd" id="dd"><button class="btn sm" onclick="event.stopPropagation();$('dd').classList.toggle('open')">${ic('globe')}${t('more')}</button><div class="ddm">${(CFG.projects||[]).filter(x=>/^https:\/\//.test(x.url)).map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(S.lang=='ar'?x.ar:x.en)}</a>`).join('')}</div></div><span>Chess Challenge</span>`;
 document.querySelectorAll('[data-r]').forEach(a=>a.classList.toggle('on',a.dataset.r==cur))}
function setS(k,v){S[k]=v;localStorage.setItem('cs',JSON.stringify(S));applyS();if(user)sb.from('profiles').update({settings:S}).eq('id',user.id).then(()=>{});
 if(k=='lang'&&!(G&&!over&&cur=='play'))route();else renderBoard()}
function hdr(){const a=$('acc');if(a)a.innerHTML=user&&P?`${P.avatar_url?avH(P,20):ic('user')}<span>${esc(P.username)} · ${levelOf(P.xp)}</span>`:t('login')}
function toast(m,k){const e=document.createElement('div');e.className='toast '+(k||'');e.textContent=m;$('toasts').append(e);setTimeout(()=>e.remove(),3500)}
const skel=n=>'<div class="sk"></div>'.repeat(n||2),showUnlocks=l=>(l||[]).forEach(k=>toast(t('unlocked')+': '+t('a_'+k)));
function beep(f){if(S.snd!='1')return;try{const a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.frequency.value=f;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.08,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.1);o.start();o.stop(a.currentTime+.1)}catch(e){}}
async function api(action,body){const{data,error}=await sb.functions.invoke('game',{body:Object.assign({action},body)});
 if(error||(data&&data.error)){let m=data&&data.error;try{m=m||(await error.context.json()).error}catch(e){}toast(m||t('err'),'err');return null}return data}
function ask(o){return new Promise(res=>{const m=$('md'),inp=o.input!=null;
 m.innerHTML=`<div class="mbox"><h3>${esc(o.title)}</h3>${o.text?`<p>${esc(o.text)}</p>`:''}${inp?`<input id="mi" value="${esc(o.input)}" maxlength="24">`:''}<div class="row"><button class="btn p" id="mo">${esc(o.ok||t('ok2'))}</button><button class="btn" id="mc">${esc(o.cancel||t('cancel'))}</button></div></div>`;
 m.classList.remove('hide');const done=v=>{m.classList.add('hide');m.innerHTML='';res(v)};
 $('mo').onclick=()=>done(inp?$('mi').value:true);$('mc').onclick=()=>done(inp?null:false);if(!o.sticky)m.onclick=e=>{if(e.target==m)done(inp?null:false)};
 if(inp){$('mi').focus();$('mi').onkeydown=e=>{if(e.key=='Enter')$('mo').click()}}})}
const pcSvg=(t,c)=>`<svg class="pc ${c}" viewBox="0 0 45 45"><use href="#p-${t}"/></svg>`,pcH=p=>pcSvg(p.type,p.color);
const avH=(p,s)=>p.avatar_url?`<img class="av" style="width:${s}px;height:${s}px" src="${esc(p.avatar_url)}" alt="">`:`<span class="av" style="width:${s}px;height:${s}px;font-size:${Math.round(s*.45)}px">${esc(((p.username||'?')[0]||'?').toUpperCase())}</span>`;
async function setAvatar(inp){const f=inp.files[0];if(!f)return;if(!/^image\//.test(f.type))return toast(t('err'),'err');
 try{const bmp=await createImageBitmap(f),c=document.createElement('canvas'),s=Math.min(bmp.width,bmp.height);c.width=c.height=256;c.getContext('2d').drawImage(bmp,(bmp.width-s)/2,(bmp.height-s)/2,s,s,0,0,256,256);
  const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',.85)),path=user.id+'/avatar.jpg',u=await sb.storage.from('avatars').upload(path,blob,{upsert:true,contentType:'image/jpeg'});
  if(u.error)return toast(u.error.message,'err');const url=sb.storage.from('avatars').getPublicUrl(path).data.publicUrl+'?v='+Date.now();
  const r=await sb.from('profiles').update({avatar_url:url}).eq('id',user.id);if(r.error)return toast(r.error.message,'err');await loadProf();hdr();route()}catch(e){toast(e.message||t('err'),'err')}}
const PD={elo_bullet:800,elo_blitz:800,elo_rapid:800,peak:800,games:0,wins:0,losses:0,draws:0,streak:0,xp:0,solves:0};
const normP=d=>Object.assign({},PD,Object.fromEntries(Object.entries(d||{}).filter(x=>x[1]!=null)),{created_at:(d&&d.created_at)||new Date().toISOString(),username:(d&&d.username)||'Player'});
/* ---------- auth ---------- */
async function loadProf(){if(!user)return;const{data,error}=await sb.from('profiles').select('*').eq('id',user.id).maybeSingle();if(error)toast(error.message,'err');P=normP(data||{username:user.email.split('@')[0]})}
async function submitAuth(){const email=$('em').value.trim(),password=$('pw').value;
 const r=am=='up'?await sb.auth.signUp({email,password,options:{data:{username:$('un').value.trim()||email.split('@')[0]}}}):await sb.auth.signInWithPassword({email,password});
 if(r.error)return toast(r.error.message,'err');if(!r.data.session)return toast(t('sent'),'warn');
 user=r.data.session.user;guest=false;await loadProf();hdr();go('home')}
async function forgot(){const email=$('em').value.trim();if(!email)return;const r=await sb.auth.resetPasswordForEmail(email,{redirectTo:location.href.split('#')[0]});toast(r.error?r.error.message:t('sent'),r.error?'err':'')}
function asGuest(){guest=true;P={username:'Guest',elo_bullet:800,elo_blitz:800,elo_rapid:800,xp:0};hdr();go('home')}
async function logout(){await sb.auth.signOut();user=null;P=null;guest=false;location.hash='auth';route()}
/* ---------- router ---------- */
const go=(r,m)=>{if(m)pm=m;if(location.hash=='#'+r)route();else location.hash=r};
const inGame=()=>cur=='play'&&G&&!over&&(mode=='online'?ready:G.history().length>0);
const active=()=>cur=='play'&&G&&!over&&$('gp')&&!$('gp').classList.contains('hide');
function segLock(){const s=$('seg');if(s)s.classList.toggle('lock',!!active())}
async function abandon(){if(mode=='online')await api('resign',{code:room});else if(mode=='cpu'&&G.history().length>=2){const rc=side;await conclude(rc=='w'?'b':'w','resign',null,rc)}over=true;clearInterval(tm);segLock()}
const leaveAsk=()=>ask({title:t('leaveT'),text:t(mode=='local'?'leaveL':'leaveD'),ok:t('leave'),cancel:t('stay')});
async function switchMode(m){if(m==pm)return;if(inGame()){if(!await leaveAsk())return;await abandon()}leave();clearInterval(tm);gid++;G=null;over=false;pm=m;route()}
window.addEventListener('beforeunload',e=>{if(inGame()){e.preventDefault();e.returnValue=''}});
function route(){let r=location.hash.slice(1)||'home';const anon=!user&&!guest;if(anon)r='auth';if(!R[r])r='home';
 if(inGame()&&r!=cur){const tgt=location.hash;history.replaceState(null,'','#play');leaveAsk().then(async ok=>{if(!ok)return;await abandon();location.hash=tgt});return}
 document.body.classList.toggle('anon',anon);
 if(cur!=r){clearInterval(tm);gid++;if(cur=='play')leave();if(r!='game'&&r!='learn')rp=null;G=null;over=false;sel=null;last=null;mode=r=='puzzles'?'puzzle':pm}
 cur=r;$('page').innerHTML=R[r].h();applyS();window.scrollTo(0,0);if(R[r].i)R[r].i()}
/* ---------- board ---------- */
function findK(g,c){for(let i=0;i<8;i++)for(let j=0;j<8;j++){const s='abcdefgh'[j]+(8-i),p=g.get(s);if(p&&p.type=='k'&&p.color==c)return s}}
function renderBoard(){const B=$('board'),g=rp?rp.g:G;if(!B||!g)return;
 const mv=sel&&!rp&&S.hints=='1'?g.moves({square:sel,verbose:true}).map(m=>m.to):[],kc=g.in_check()?findK(g,g.turn()):null,gl=S.ps=='1'?GO:GL;let h='';
 for(let r=0;r<8;r++)for(let f=0;f<8;f++){const rr=flip?7-r:r,ff=flip?7-f:f,s='abcdefgh'[ff]+(8-rr),p=g.get(s);
  h+=`<div class="sq ${(rr+ff)%2?'d':'l'}${s==sel?' sel':''}${last&&(s==last[0]||s==last[1])?' last':''}${s==hintSq?' hint':''}${mv.includes(s)?' mv':''}${s==kc?' chk':''}" data-s="${s}">${p?pcH(p):''}${S.coords=='1'&&f==0?`<small class="r">${8-rr}</small>`:''}${S.coords=='1'&&r==7?`<small class="f">${'abcdefgh'[ff]}</small>`:''}</div>`}
 B.className=S.ps=='1'?'out':'';B.innerHTML=h;const ml=$('ml');if(ml){const hs=g.history();ml.innerHTML=hs.map((m,i)=>`<span>${i%2?'':(i/2+1)+'. '}${m}</span>`).join('')}}
const canMove=()=>G&&!over&&!rp&&!busy&&(mode=='local'||(G.turn()==side&&(mode!='online'||ready)));
document.addEventListener('pointerdown',e=>{const q=e.target.closest('#board .sq');if(!q||!canMove())return;const s=q.dataset.s,p=G.get(s);
 const isDest=sel&&G.moves({square:sel,verbose:true}).some(m=>m.to==s);
 if(isDest)return tryMove(sel,s);
 if(p&&p.color==G.turn()){sel=s;drag={s,x:e.clientX,y:e.clientY,mv:false,t:q.querySelector('.pc').outerHTML,c:p.color};renderBoard()}else{sel=null;renderBoard()}});
document.addEventListener('pointermove',e=>{if(!drag)return;if(!drag.mv&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>8){drag.mv=true;const g=document.createElement('div');g.className='ghost';g.innerHTML=drag.t;g.id='gh';document.body.append(g);const o=document.querySelector(`[data-s="${drag.s}"] .pc`);if(o)o.style.opacity=.3}
 const g=$('gh');if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}});
document.addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;const g=$('gh');if(g)g.remove();
 if(d.mv){const q=document.elementFromPoint(e.clientX,e.clientY),tq=q&&q.closest('#board .sq');if(tq&&tq.dataset.s!=d.s)return tryMove(d.s,tq.dataset.s);renderBoard()}});
function pickPromo(c){return new Promise(res=>{const m=$('md'),end=v=>{m.classList.add('hide');m.innerHTML='';res(v)};
 m.innerHTML=`<div class="mbox"><div class="row c">${['q','r','b','n'].map(x=>`<button class="btn" data-p="${x}" style="padding:8px">${pcSvg(x,c)}</button>`).join('')}</div></div>`;m.classList.remove('hide');
 m.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>end(b.dataset.p));m.onclick=e=>{if(e.target==m)end(null)}})}
async function tryMove(a,b){let pr='q';if(G.moves({verbose:true}).some(m=>m.from==a&&m.to==b&&m.promotion)){busy=true;pr=await pickPromo(G.turn());busy=false;if(!pr){sel=null;renderBoard();return}}
 const m=G.move({from:a,to:b,promotion:pr});if(m)afterMove(m);else{const p=G.get(b);sel=p&&p.color==G.turn()?b:null;renderBoard()}}
function afterMove(m){sel=null;last=[m.from,m.to];hintSq=null;beep(m.captured?330:440);
 if(cfg.b&&(mode=='local'||mode=='cpu'))T[m.color]+=cfg.i;renderBoard();clk();
 if(mode=='puzzle')return puzzleMove(m);
 if(mode=='online'){api('move',{code:room,san:m.san}).then(r=>{if(r)onRoom(r.room);else{G.undo();last=null;renderBoard()}});return}
 if(G.game_over())return conclude(G.in_checkmate()?(G.turn()=='w'?'b':'w'):'d','end');
 if(G.in_check())beep(550);if(mode=='cpu'&&G.turn()!=side)ai()}
/* ---------- game flow ---------- */
const fmt=s=>cfg.b?Math.floor(Math.max(0,s)/60)+':'+('0'+Math.max(0,s)%60).slice(-2):'–';
function clk(){if(!$('ct')||!G)return;const top=flip?'w':'b',bot=flip?'b':'w';$('ct').textContent=fmt(T[top]);$('cb').textContent=fmt(T[bot]);
 $('ct').className='clock'+(G.turn()==top&&!over?' on':'');$('cb').className='clock'+(G.turn()==bot&&!over?' on':'')}
function tick(){if(over||!G||!cfg.b)return;const c=G.turn();if(mode=='online'){if(!ready)return;T[c]--;clk();if(T[c]<=-1&&!flagging){flagging=true;api('flag',{code:room}).then(r=>r&&onRoom(r.room)).finally(()=>flagging=false)}return}
 T[c]--;clk();if(T[c]<=0)conclude(c=='w'?'b':'w','time',c)}
function readTC(){const v=$('tc').value;if(v=='c')return{b:Math.max(1,+$('cm').value||5)*60,i:Math.max(0,+$('ci').value||0)};return{b:TC[+v][0],i:TC[+v][1]}}
function names(){if(!$('nt'))return;let a,b;if(mode=='cpu'){a=t('cpu')+' · '+t(['','easy','medium','hard','imp'][lvl]);b=P.username}else if(mode=='online'){a=oppName||t('opp');b=P.username}else{a=t(flip?'white':'black');b=t(flip?'black':'white')}$('nt').textContent=a;$('nb').textContent=b}
function showGP(){$('setup').classList.add('hide');$('gp').classList.remove('hide');segLock()}
function startGame(){mode=pm;clearInterval(tm);gid++;over=false;sel=null;last=null;rp=null;G=new Chess();cfg=readTC();T={w:cfg.b,b:cfg.b};
 if(mode=='cpu'){lvl=+$('lv').value;const c=$('co').value;side=c=='r'?(Math.random()<.5?'w':'b'):c}else side='w';
 flip=mode=='cpu'&&side=='b';showGP();names();$('msg').textContent='';if(cfg.b)tm=setInterval(tick,1000);renderBoard();clk();actions();if(mode=='cpu'&&side=='b')ai()}
function actions(done){const b=(f,i,l)=>`<button class="btn" onclick="${f}">${ic(i)}${t(l)}</button>`;
 $('act').innerHTML=done?b(mode=='online'?'route()':'startGame()','refresh','rematch')+b('openReview(G.history())','eye','review')+b('flipBoard()','flip','flip')
  :b('resign()','flag','resign')+(mode!='cpu'?b('drawBtn()','eq','draw'):'')+(mode=='cpu'&&!cfg.b?b('takeback()','undo','undo'):'')+b('flipBoard()','flip','flip')}
function flipBoard(){flip=!flip;if(mode=='local')names();renderBoard();clk()}
async function resign(){if(over)return;if(!await ask({title:t('resign'),text:t('resignQ'),ok:t('resign'),cancel:t('cancel')}))return;
 if(mode=='online')return api('resign',{code:room}).then(r=>r&&onRoom(r.room));const rc=mode=='local'?G.turn():side;conclude(rc=='w'?'b':'w','resign',null,rc)}
async function drawBtn(){if(over)return;if(mode=='online'){const r=await api('draw',{code:room});if(r){myOffer=r.room.draw_offer==side;toast(t('offer'));onRoom(r.room)}}
 else if(await ask({title:t('draw'),text:t('drawLocal'),ok:t('accept'),cancel:t('cancel')}))conclude('d','draw')}
function takeback(){if(over||busy)return;G.undo();if(G.turn()!=side)G.undo();last=null;sel=null;renderBoard();clk()}
async function conclude(res,reason,fc,rc){over=true;clearInterval(tm);clk();segLock();beep(res==side?700:260);
 const w=mode=='local'?t(res=='d'?'drawn':res=='w'?'wwin':'bwin'):res=='d'?t('drawn'):res==side?t('win'):t('lose');
 $('msg').innerHTML=esc(w);actions(true);if(guest||mode=='puzzle')return;
 const r=await api('finish',{mode,level:lvl,color:side,tc:cfg,moves:G.history(),resigned:reason=='resign',resigner:rc,flagged:fc||null,draw:reason=='draw'});
 if(r&&r.profile){P=normP(r.profile);$('msg').innerHTML=esc(w)+` · ${t('rating')} ${r.delta>=0?'+':''}${r.delta}`;hdr();showUnlocks(r.unlocked)}}
/* ---------- online ---------- */
function leave(){if(chan){sb.removeChannel(chan);chan=null}room=null;ready=false;oppName=null}
async function createRoom(){const b=$('crb');b.disabled=true;try{const c=readTC(),r=await api('create',{base:c.b,inc:c.i});if(r)enterRoom(r.code,r.color,c,null)}catch(e){toast(e.message||t('err'),'err')}finally{b.disabled=false}}
async function joinRoom(){const b=$('jb'),je=$('je');je.textContent='';const code=$('rc').value.trim().toUpperCase();$('rc').blur();
 const fail=m=>{je.textContent=m;toast(m,'err')};if(code.length<4)return fail(t('code'));b.disabled=true;
 try{const{data:row,error}=await sb.from('rooms').select('*').eq('code',code).maybeSingle();if(error)return fail(error.message);if(!row)return fail(t('rnf'));
  const mine=row.white==user.id||row.black==user.id,c={b:row.tc_base||0,i:row.tc_inc||0};
  if(mine){if(row.status=='playing')return enterRoom(code,row.white==user.id?'w':'b',c,row);return fail(t(row.status=='waiting'?'rown':'rfull'))}
  if(row.status!='waiting')return fail(t('rfull'));
  const r=await api('join',{code});if(r)enterRoom(code,r.color,{b:r.room.tc_base,i:r.room.tc_inc},r.room)}
 catch(e){fail(e.message||t('err'))}finally{b.disabled=false}}
function enterRoom(code,color,c,row){mode='online';room=code;side=color;flip=color=='b';cfg=c;G=new Chess();over=false;ready=!!row;sel=null;last=null;T={w:c.b,b:c.b};oppName=null;
 showGP();clearInterval(tm);tm=setInterval(tick,1000);if(chan)sb.removeChannel(chan);
 chan=sb.channel('r'+code).on('postgres_changes',{event:'UPDATE',schema:'public',table:'rooms',filter:'code=eq.'+code},p=>onRoom(p.new)).subscribe(s=>{if(s=='SUBSCRIBED')resync()});
 names();renderBoard();clk();actions();$('msg').textContent=row?'':t('wait')+' '+code;if(row)onRoom(row)}
async function resync(){if(!room)return;const{data}=await sb.from('rooms').select('*').eq('code',room).maybeSingle();if(data)onRoom(data)}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)resync()});
function onRoom(r){if(!G||r.code!=room)return;if(r.white&&r.black&&!ready){ready=true;$('msg').textContent=''}
 if(r.white&&r.black&&!oppName){oppName='…';sb.from('profiles').select('username').eq('id',side=='w'?r.black:r.white).single().then(x=>{oppName=x.data?x.data.username:t('opp');names()})}
 const ms=r.moves||[];if(ms.join()!=G.history().join()){G=new Chess();ms.forEach(m=>G.move(m));const h=G.history({verbose:true}).pop();last=h?[h.from,h.to]:null;sel=null;beep(440)}
 T={w:Math.round(r.w_time/1000),b:Math.round(r.b_time/1000)};if(r.status=='playing'&&cfg.b)T[G.turn()]-=Math.round((Date.now()-new Date(r.last_move_at))/1000);
 renderBoard();clk();
 if(r.status=='finished'&&!over){over=true;clearInterval(tm);offerOpen=false;myOffer=false;$('md').classList.add('hide');const res=r.result;$('msg').textContent=res=='d'?t('drawn'):res==side?t('win'):t('lose');actions(true);segLock();loadProf().then(hdr)}
 else if(r.status=='playing'&&!over){
  if(r.draw_offer&&r.draw_offer!=side){if(!offerOpen){offerOpen=true;ask({title:t('drawReq'),text:t('drawReqD'),ok:t('accept'),cancel:t('decline'),sticky:true}).then(async ok=>{offerOpen=false;if(over)return;const x=await api(ok?'draw':'decline',{code:room});if(x)onRoom(x.room)})}}
  else{if(offerOpen){offerOpen=false;$('md').classList.add('hide')}if(r.draw_offer==side)myOffer=true;else if(myOffer){myOffer=false;toast(t('drawNo'),'warn')}}}}
/* ---------- Stockfish ---------- */
function sfInit(){return sfw||(sfw=fetch('https://cdn.jsdelivr.net/npm/stockfish.js@10.0.2/stockfish.js').then(r=>{if(!r.ok)throw new Error('sf');return r.text()}).then(x=>{const w=new Worker(URL.createObjectURL(new Blob([x],{type:'text/javascript'})));w.postMessage('uci');return w}))}
function sf(fen,o){return sfq=sfq.then(async()=>{const w=await sfInit();return new Promise(res=>{let cp=0;setTimeout(()=>res({best:null,cp:0,err:true}),(o.ms||0)+20000);
 w.onmessage=e=>{const l=typeof e.data=='string'?e.data:'',m=l.match(/score (cp|mate) (-?\d+)/);if(m)cp=m[1]=='cp'?+m[2]:(+m[2]>0?10000:-10000);if(l.startsWith('bestmove'))res({best:l.split(' ')[1],cp})};
 w.postMessage('setoption name Hash value 32');w.postMessage('setoption name Skill Level value '+(o.skill==null?20:o.skill));w.postMessage('position fen '+fen);w.postMessage(o.depth?'go depth '+o.depth:'go movetime '+o.ms)})}).catch(()=>{sfw=null;return{best:null,cp:0,err:true}})}
async function ai(){const my=gid;busy=true;$('msg').textContent=t('thinking');const r=await sf(G.fen(),{skill:[0,2,10,20,20][lvl],ms:[0,150,400,900,3000][lvl]});busy=false;if(my!=gid||over||!G)return;
 const bad=()=>{$('msg').innerHTML=esc(t('engErr'))+` <button class="btn sm" onclick="sfw=null;ai()">${t('retry')}</button>`};
 if(r.err||!r.best||r.best=='(none)')return bad();$('msg').textContent='';
 const m=G.move({from:r.best.slice(0,2),to:r.best.slice(2,4),promotion:r.best[4]||'q'});if(!m)return bad();afterMove(m)}
/* ---------- puzzles (real Lichess data) ---------- */
async function loadPuzzle(daily){over=false;sel=null;last=null;hintSq=null;busy=true;$('msg').textContent='…';let d;
 const fail=()=>{busy=false;$('msg').innerHTML=esc(t('err'))+` <button class="btn sm" onclick="loadPuzzle(${!!daily})">${t('retry')}</button>`};
 try{const u=daily?'https://lichess.org/api/puzzle/daily':`https://lichess.org/api/puzzle/next?angle=${$('an').value}&difficulty=${$('df').value}`,res=await fetch(u);if(!res.ok)throw 0;d=await res.json();
  if(!d||!d.game||!d.puzzle||!d.puzzle.solution||!d.puzzle.solution.length)throw 0}catch(e){return fail()}
 const mv=d.game.pgn.trim().split(/\s+/).filter(x=>!/^\d+\.+$/.test(x)),u0=d.puzzle.solution[0].slice(0,4),ip=d.puzzle.initialPly;let g=null;
 for(const n of[ip+1,mv.length,ip]){const c=new Chess();let ok=true;for(let i=0;i<n&&i<mv.length;i++)if(!c.move(mv[i],{sloppy:true})){ok=false;break}
  if(ok&&c.moves({verbose:true}).some(m=>m.from+m.to==u0)){g=c;break}}
 if(!g)return fail();
 G=g;side=g.turn();flip=side=='b';pz={id:d.puzzle.id,sol:d.puzzle.solution,i:0,fails:0};busy=false;mode='puzzle';
 $('pi').textContent=`${t('rating')} ${d.puzzle.rating} · ${t(side=='w'?'white':'black')}`;$('msg').textContent='';renderBoard()}
function puzzleMove(m){const u=m.from+m.to+(m.promotion||''),ex=pz.sol[pz.i];
 if(u==ex||G.in_checkmate()){pz.i++;if(pz.i>=pz.sol.length||G.in_checkmate())return solvedP();busy=true;
  setTimeout(()=>{const o=pz.sol[pz.i],mm=G.move({from:o.slice(0,2),to:o.slice(2,4),promotion:o[4]||'q'});pz.i++;last=[mm.from,mm.to];busy=false;renderBoard();if(pz.i>=pz.sol.length)solvedP();else $('msg').textContent=t('ok')},450)}
 else{pz.fails++;pStreak=0;$('ps2').textContent=t('streak')+' 0';$('msg').textContent=t('bad');busy=true;setTimeout(()=>{G.undo();last=null;busy=false;renderBoard()},700)}}
async function solvedP(){over=true;if(!pz.fails)pStreak++;$('ps2').textContent=t('streak')+' '+pStreak;$('msg').textContent=t('solved');beep(660);
 if(!guest){const r=await api('puzzle',{id:pz.id});if(r){P=normP(r.profile);hdr();showUnlocks(r.unlocked)}}}
function puzHint(){if(!pz||over)return;hintSq=pz.sol[pz.i].slice(0,2);renderBoard()}
function puzSol(){if(!pz||over)return;const g=new Chess(G.fen()),o=[];for(let k=pz.i;k<pz.sol.length;k++){const u=pz.sol[k],m=g.move({from:u.slice(0,2),to:u.slice(2,4),promotion:u[4]||'q'});if(m)o.push(m.san)}pStreak=0;$('ps2').textContent=t('streak')+' 0';$('msg').textContent=o.join(' ');pz.fails++}
/* ---------- review / analysis ---------- */
const openReview=mv=>{REV=mv;go('game')};
function rstep(d){rp.i=Math.max(0,Math.min(rp.mv.length,rp.i+d));const g=new Chess();for(let k=0;k<rp.i;k++)g.move(rp.mv[k]);rp.g=g;last=null;
 $('rp').innerHTML=`<button class="btn" onclick="rstep(-1e3)">⏮︎</button><button class="btn" onclick="rstep(-1)">◀︎</button><span>${rp.i} / ${rp.mv.length}</span><button class="btn" onclick="rstep(1)">▶︎</button><button class="btn" onclick="rstep(1e3)">⏭︎</button>`;
 if(rp.info&&rp.i>0){const a=rp.info[rp.i-1];if(a)$('msg').innerHTML=`${esc(rp.mv[rp.i-1])} ${a.l?`<span class="${a.l}">· ${a.l}</span> · ${esc(a.b||'')}`:''}`}renderBoard()}
async function runReview(){const mv=REV||[];if(!mv.length){$('page').innerHTML=`<div class="empty">${t('empty')}</div>`;return}
 flip=false;rp={mv,i:mv.length,g:null,info:null};rstep(0);
 const g=new Chess(),fens=[g.fen()];mv.forEach(m=>{g.move(m);fens.push(g.fen())});const ev=[],bs=[];
 for(let i=0;i<fens.length;i++){if(cur!='game')return;$('msg').textContent=`${t('analyzing')} ${i+1}/${fens.length}`;const c=new Chess(fens[i]);
  if(c.game_over()){ev.push(c.in_checkmate()?(c.turn()=='w'?-1e4:1e4):0);bs.push(null);continue}const r=await sf(fens[i],{depth:10});if(r.err){$('msg').textContent=t('engErr');return}ev.push(r.cp*(c.turn()=='w'?1:-1));bs.push(r.best)}
 const info=[],acc={w:[],b:[]};
 for(let i=0;i<mv.length;i++){const w=i%2==0,loss=Math.max(0,w?ev[i]-ev[i+1]:ev[i+1]-ev[i]),l=loss>300?'Blunder':loss>150?'Mistake':loss>70?'Inaccuracy':loss>30?'Good':loss>10?'Excellent':'Best';
  const bm=bs[i]?new Chess(fens[i]).move({from:bs[i].slice(0,2),to:bs[i].slice(2,4),promotion:bs[i][4]||'q'}):null;info.push({l,b:l&&bm?bm.san:null});
  acc[w?'w':'b'].push(Math.max(0,Math.min(100,103.17*Math.exp(-.0043*Math.min(loss,1500))-3.17)))}
 const avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):0,cnt=(p,l)=>info.filter((x,i)=>i%2==p&&x.l==l).length;
 const pts=ev.map((v,i)=>`${i/(ev.length-1||1)*300},${50-Math.max(-500,Math.min(500,v))/10}`).join(' ');rp.info=info;$('msg').textContent='';
 $('rep').innerHTML=`<div class="card" style="max-width:520px;margin:8px auto">${[['white',0],['black',1]].map(([n,p])=>`<div class="li"><span>${t(n)} · ${t('acc')}</span><b>${avg(acc[p?'b':'w'])}%</b></div><div class="li"><span>${t('blund')} / ${t('mist')} / ${t('inacc')}</span><b>${cnt(p,'Blunder')} / ${cnt(p,'Mistake')} / ${cnt(p,'Inaccuracy')}</b></div>`).join('')}
 <svg viewBox="0 0 300 100" style="width:100%;margin-top:10px;background:#0004;border-radius:8px"><line x1="0" y1="50" x2="300" y2="50" stroke="#fff3"/><polyline fill="none" stroke="#C5A46D" stroke-width="1.5" points="${pts}"/></svg></div>`;rstep(0)}
/* ---------- pages ---------- */
const modeCard=(m,i,l)=>`<div class="mode" onclick="go('play','${m}')">${ic(i)}<b>${t(l)}</b><span>${t(l+'D')}</span></div>`;
const tcSel=()=>`<div class="row"><div class="fld"><label>${t('clock')}</label><select id="tc" onchange="$('cx').classList.toggle('hide',this.value!='c')">${TL.map((x,i)=>`<option value="${i}">${i?x:t('none')}</option>`).join('')}<option value="c">${t('custom')}</option></select></div></div><div class="row hide" id="cx"><div class="fld"><label>${t('min')}</label><input id="cm" type="number" min="1" value="5"></div><div class="fld"><label>${t('incr')}</label><input id="ci" type="number" min="0" value="0"></div></div>`;
async function boardTop(c,el){const{data,error}=await sb.from('profiles').select('username,elo_'+c).order('elo_'+c,{ascending:false}).limit(20);if(error)toast(error.message,'err');const rows=data||[];
 if(!rows.length){el.innerHTML=`<div class="empty">${t('empty')}</div>`;return rows}return rows}
const R={
auth:{h:()=>`<div class="auth card"><div class="seg"><button class="btn ${am=='in'?'on':''}" onclick="am='in';route()">${t('login')}</button><button class="btn ${am=='up'?'on':''}" onclick="am='up';route()">${t('signup')}</button></div>
 ${am=='up'?`<input id="un" placeholder="${t('uname')}" autocomplete="username">`:''}<input id="em" type="email" placeholder="${t('email')}" autocomplete="email"><input id="pw" type="password" placeholder="${t('pass')}" autocomplete="${am=='up'?'new-password':'current-password'}">
 <div class="row"><button class="btn p" onclick="submitAuth()">${t(am=='up'?'signup':'login')}</button><button class="btn" onclick="asGuest()">${t('guest')}</button></div><p style="text-align:center;cursor:pointer" onclick="forgot()">${t('forgot')}</p></div>`},
home:{h:()=>`<section class="hero"><h1>${t('hero1')}</h1><p>${t('hero2')}</p><div class="row"><button class="btn p" onclick="go('play','cpu')">${ic('play')}${t('playnow')}</button><button class="btn" onclick="go('learn')">${ic('book')}${t('explore')}</button></div></section>
 <h2>${t('modes')}</h2><div class="grid">${modeCard('cpu','cpu','vscpu')}${modeCard('local','users','local')}${modeCard('online','globe','online')}<div class="mode" onclick="go('puzzles')">${ic('puzzle')}<b>${t('puzzles')}</b><span>${t('puzD')}</span></div></div>
 <h2>${t('daily')}</h2><div class="card row"><div><h3>${t('daily')}</h3><p style="margin:0">${t('dailyD')}</p></div><button class="btn p" style="flex:none" onclick="wantDaily=true;go('puzzles')">${t('solve')}</button></div>
 <h2>${t('top')}</h2><div class="card" id="top">${skel(1)}</div>`,
 i:async()=>{const el=$('top'),r=await boardTop('blitz',el);if(r.length)el.innerHTML=r.slice(0,3).map((x,i)=>`<div class="li"><span>${ic(i?'medal':'crown')} ${esc(x.username)}</span><b>${x.elo_blitz}</b></div>`).join('')}},
play:{h:()=>`<div class="seg" id="seg">${[['cpu','cpu','vscpu'],['local','users','local'],['online','globe','online']].map(x=>`<button class="btn ${pm==x[0]?'on':''}" onclick="switchMode('${x[0]}')">${ic(x[1])}${t(x[2])}</button>`).join('')}</div>
 <div class="card" id="setup">${(m=>`<div class="mhead">${ic(m[0])}<b>${t(m[1])}</b><small>${t(m[1]+'D')}</small></div>`)({cpu:['cpu','vscpu'],local:['users','local'],online:['globe','online']}[pm])}${pm=='cpu'?`<div class="row"><div class="fld"><label>${t('level')}</label><select id="lv"><option value="1">${t('easy')}</option><option value="2" selected>${t('medium')}</option><option value="3">${t('hard')}</option><option value="4">${t('imp')}</option></select></div><div class="fld"><label>${t('color')}</label><select id="co"><option value="w">${t('white')}</option><option value="b">${t('black')}</option><option value="r">${t('rand')}</option></select></div></div>`:''}
 ${tcSel()}${pm=='online'?(guest?`<p>${t('needlogin')}</p><button class="btn p" onclick="logout()">${t('login')}</button>`:`<div class="row"><button class="btn p" id="crb" onclick="createRoom()">${ic('globe')}${t('create')}</button></div><div class="row"><input id="rc" placeholder="${t('code')}" maxlength="5" style="text-transform:uppercase"><button class="btn" id="jb" style="flex:none" onclick="joinRoom()">${t('join')}</button></div><div class="err" id="je"></div>`):`<div class="row"><button class="btn p" onclick="startGame()">${ic('play')}${t('start')}</button></div>`}</div>
 <div id="gp" class="hide"><div class="bar"><span id="nt"></span><span class="clock" id="ct"></span></div><div id="board"></div><div class="bar"><span id="nb"></span><span class="clock" id="cb"></span></div><div class="actions" id="act"></div><div class="msg" id="msg"></div><div class="mvl" id="ml"></div></div>`},
puzzles:{h:()=>`<div class="card"><div class="row"><div class="fld"><label>${t('diff')}</label><select id="df">${['easiest','easier','normal','harder','hardest'].map(x=>`<option value="${x}" ${x=='normal'?'selected':''}>${t(x)}</option>`).join('')}</select></div><div class="fld"><label>${t('theme')}</label><select id="an">${[['mix','mix'],['mateIn1','m1'],['mateIn2','m2'],['fork','fork']].map(x=>`<option value="${x[0]}">${t(x[1])}</option>`).join('')}</select></div></div></div>
 <div class="bar" style="margin-top:10px"><span id="pi"></span><span class="clock" id="ps2">${t('streak')} ${pStreak}</span></div><div id="board"></div><div class="msg" id="msg"></div>
 <div class="actions"><button class="btn p" onclick="loadPuzzle(false)">${ic('refresh')}${t('newp')}</button><button class="btn" onclick="loadPuzzle(true)">${ic('puzzle')}${t('daily')}</button><button class="btn" onclick="puzHint()">${ic('bulb')}${t('hint')}</button><button class="btn" onclick="puzSol()">${ic('eye')}${t('sol')}</button></div>`,
 i:()=>{mode='puzzle';const d=wantDaily;wantDaily=false;loadPuzzle(d)}},
learn:{h:()=>`<h2 style="margin-top:0">${t('openings')}</h2><div class="card">${OPEN.map((o,i)=>`<div class="li" style="cursor:pointer" onclick="showOpen(${i})"><span>${o[0]} · ${o[1]}</span>${ic('play')}</div>`).join('')}</div>
 <div id="ob" class="hide"><div id="board"></div><div class="row c" id="rp"></div><div class="msg" id="msg"></div></div>
 <h2>${t('tips')}</h2><div class="card">${['t1','t2','t3'].map(k=>`<div class="li">${ic('bulb')}<span style="flex:1;margin-inline:10px">${t(k)}</span></div>`).join('')}</div>`},
leaders:{h:()=>`<div class="seg">${['blitz','bullet','rapid'].map(c=>`<button class="btn ${lbc==c?'on':''}" onclick="lbc='${c}';route()">${t(c)}</button>`).join('')}</div><div id="lbx">${skel(3)}</div>`,
 i:async()=>{const c=lbc,el=$('lbx'),r=await boardTop(c,el);if(!r.length)return;let mine='';
  if(!guest&&P){const{count}=await sb.from('profiles').select('id',{count:'exact',head:true}).gt('elo_'+c,P['elo_'+c]);mine=`<div class="card" style="margin-top:10px"><div class="li"><span>${t('yourrank')}</span><b>#${(count||0)+1} · ${P['elo_'+c]}</b></div></div>`}
  el.innerHTML=`<div class="pod">${r.slice(0,3).map((x,i)=>`<div class="stat">${ic(i?'medal':'crown')}<b>${x['elo_'+c]}</b><span>${esc(x.username)}</span></div>`).join('')}</div><div class="card">${r.slice(3).map((x,i)=>`<div class="li"><span>${i+4}. ${esc(x.username)}</span><b>${x['elo_'+c]}</b></div>`).join('')||`<div class="empty">–</div>`}</div>${mine}`}},
profile:{h:()=>skel(3),i:async()=>{if(guest){$('page').innerHTML=`<div class="empty">${t('needlogin')}<br><br><button class="btn p" onclick="logout()">${t('login')}</button></div>`;return}
 await loadProf();hdr();const[a,b]=await Promise.all([sb.from('games').select('*').eq('user_id',user.id).order('created_at',{ascending:false}).limit(30),sb.from('user_achievements').select('key').eq('user_id',user.id)]);
 const gs=a.data||[],have=(b.data||[]).map(x=>x.key),L=levelOf(P.xp),lo=(L-1)**2*100,hi=L*L*100,wr=P.games?Math.round(P.wins/P.games*100):0;
 const rt=gs.filter(g=>g.rating_after).reverse().map(g=>g.rating_after),pts=rt.map((v,i)=>`${i/(rt.length-1||1)*300},${90-(v-Math.min(...rt))/(Math.max(...rt)-Math.min(...rt)||1)*80}`).join(' ');
 const rtx=g=>g.mode=='local'?t(g.result=='d'?'drawn':g.result=='w'?'wwin':'bwin'):g.result=='d'?t('drawn'):g.result==g.color?t('win'):t('lose');
 $('page').innerHTML=`<div class="card row"><label class="avwrap">${avH(P,56)}<input type="file" accept="image/*" hidden onchange="setAvatar(this)"><span class="avcam">${ic('cam')}</span></label>
  <div style="flex:3"><h3 style="margin:0">${esc(P.username)}</h3><p style="margin:0">${new Date(P.created_at).toLocaleDateString()}</p></div><button class="btn sm" style="flex:none" onclick="editName()">${t('edit')}</button></div>
  <div class="card" style="margin-top:12px"><div class="li"><span>${t('lvl')} ${L}</span><span>${P.xp} ${t('xp')}</span></div><div class="bar2"><i style="width:${Math.round((P.xp-lo)/(hi-lo)*100)}%"></i></div></div>
  <h2>${t('rating')}</h2><div class="grid g3">${[['bullet','bolt'],['blitz','timer'],['rapid','clock']].map(x=>`<div class="stat">${ic(x[1])}<b>${P['elo_'+x[0]]}</b><span>${t(x[0])}</span></div>`).join('')}</div>
  <div class="grid g3" style="margin-top:12px">${[['games',P.games],['wins',P.wins],['losses',P.losses],['draws',P.draws],['winrate',wr+'%'],['peak',P.peak]].map(x=>`<div class="stat"><b>${x[1]}</b><span>${t(x[0])}</span></div>`).join('')}</div>
  ${rt.length>1?`<div class="card" style="margin-top:12px">${ic('chart')}<svg viewBox="0 0 300 100" style="width:100%"><polyline fill="none" stroke="#C5A46D" stroke-width="2" points="${pts}"/></svg></div>`:''}
  <h2>${t('ach')}</h2><div class="grid">${ACH.map(x=>`<div class="ach ${have.includes(x[0])?'':'lock'}">${ic(have.includes(x[0])?x[1]:'lock')}<div><b>${t('a_'+x[0])}</b><small>${t('d_'+x[0])}</small></div></div>`).join('')}</div>
  <h2>${t('recent')}</h2><div class="card">${gs.slice(0,10).map((g,i)=>`<div class="li"><span>${new Date(g.created_at).toLocaleDateString()} · ${g.mode} · ${rtx(g)}${g.rating_after?' · '+g.rating_after:''}</span><button class="btn sm" onclick="openReview(window.GS[${i}].moves)">${ic('eye')}${t('review')}</button></div>`).join('')||`<div class="empty">${t('empty')}</div>`}</div>
  <div class="row" style="margin-top:16px"><button class="btn" onclick="go('friends')">${ic('users')}${t('friends')}</button><button class="btn" onclick="go('settings')">${ic('set')}${t('settings')}</button><button class="btn" onclick="logout()">${t('logout')}</button></div>`;window.GS=gs}},
settings:{h:()=>{const sel=(k,o)=>`<select onchange="setS('${k}',this.value)">${o.map(x=>`<option value="${x[0]}" ${S[k]==x[0]?'selected':''}>${x[1]}</option>`).join('')}</select>`,oo=[['1',t('on')],['0',t('off')]];
 return `<div class="card">${[['lang',sel('lang',[['ar','العربية'],['en','English']])],['theme',sel('theme',[['dark',t('dark')],['light',t('light')]])],['sound',sel('snd',oo)],['bt',sel('bt',['Forest','Classic','Slate'].map(x=>[x,x]))],['ps',sel('ps',[['0',t('solid')],['1',t('outl')]])],['coords',sel('coords',oo)],['hints',sel('hints',oo)]].map(x=>`<div class="li"><span>${t(x[0])}</span><div style="width:150px">${x[1]}</div></div>`).join('')}</div>`}},
game:{h:()=>`<div id="board"></div><div class="row c" id="rp"></div><div class="msg" id="msg"></div><div class="row c"><button class="btn sm" onclick="copyPGN()">${ic('copy')}PGN</button></div><div id="rep"></div>`,i:()=>runReview()},
friends:{h:()=>skel(3),i:async()=>{if(guest){$('page').innerHTML=`<div class="empty">${t('needlogin')}</div>`;return}
 const uid=user.id,{data:fs,error}=await sb.from('friendships').select('*').or(`requester.eq.${uid},addressee.eq.${uid}`);if(error){$('page').innerHTML=`<div class="empty">${esc(error.message)}</div>`;return}
 const ids=[...new Set((fs||[]).flatMap(f=>[f.requester,f.addressee]).filter(x=>x!=uid))],{data:ps}=ids.length?await sb.from('profiles').select('id,username,avatar_url,elo_blitz').in('id',ids):{data:[]},pm_=Object.fromEntries((ps||[]).map(x=>[x.id,x]));
 const row=(o,b)=>{const x=pm_[o]||{username:'?'};return `<div class="li"><span class="fr">${avH(x,34)}<b>${esc(x.username)}</b>${x.elo_blitz?`<small>${x.elo_blitz}</small>`:''}</span><span class="fb">${b}</span></div>`},
  acc=(fs||[]).filter(f=>f.status=='accepted'),inc=(fs||[]).filter(f=>f.status=='pending'&&f.addressee==uid),out=(fs||[]).filter(f=>f.status=='pending'&&f.requester==uid);window.FR=fs||[];
 $('page').innerHTML=`<div class="card"><div class="row"><input id="fq" placeholder="${t('uname')}"><button class="btn p" style="flex:none" onclick="searchF()">${ic('users')}${t('search')}</button></div><div id="fres"></div></div>
 ${inc.length?`<h2>${t('reqs')}</h2><div class="card">${inc.map(f=>row(f.requester,`<button class="btn sm p" onclick="frAct('acc',${f.id})">${t('accept')}</button><button class="btn sm" onclick="frAct('del',${f.id})">${t('decline')}</button>`)).join('')}</div>`:''}
 <h2>${t('friends')}</h2><div class="card">${acc.map(f=>row(f.requester==uid?f.addressee:f.requester,`<button class="btn sm" onclick="frAct('del',${f.id})">${t('remove')}</button>`)).join('')||`<div class="empty">${t('empty')}</div>`}</div>
 ${out.length?`<h2>${t('sent2')}</h2><div class="card">${out.map(f=>row(f.addressee,`<button class="btn sm" onclick="frAct('del',${f.id})">${t('cancel')}</button>`)).join('')}</div>`:''}`}}};
async function searchF(){const q=$('fq').value.trim().replace(/[%_,()]/g,'');if(q.length<2)return;const{data,error}=await sb.from('profiles').select('id,username,avatar_url').ilike('username','%'+q+'%').neq('id',user.id).limit(8);
 if(error)return toast(error.message,'err');const rel=id=>(window.FR||[]).some(f=>f.requester==id||f.addressee==id);
 $('fres').innerHTML=(data||[]).map(x=>`<div class="li"><span class="fr">${avH(x,34)}<b>${esc(x.username)}</b></span>${rel(x.id)?`<small>${t('added')}</small>`:`<button class="btn sm p" onclick="addF('${x.id}')">${t('add')}</button>`}</div>`).join('')||`<div class="empty">${t('empty')}</div>`}
async function addF(id){const{error}=await sb.from('friendships').insert({requester:user.id,addressee:id});if(error)return toast(error.message,'err');toast(t('sentok'));route()}
async function frAct(k,id){const r=k=='acc'?await sb.from('friendships').update({status:'accepted'}).eq('id',id):await sb.from('friendships').delete().eq('id',id);if(r.error)return toast(r.error.message,'err');route()}
function copyPGN(){const g=new Chess();(REV||[]).forEach(m=>g.move(m));navigator.clipboard.writeText(g.pgn()).then(()=>toast(t('copied')),()=>toast(t('err'),'err'))}
function showOpen(i){$('ob').classList.remove('hide');flip=false;rp={mv:OPEN[i][2].split(' '),i:0,g:null,info:null};rstep(0);$('ob').scrollIntoView({behavior:'smooth'})}
async function editName(){const n=await ask({title:t('uname'),input:P.username,ok:t('save'),cancel:t('cancel')});if(!n||!n.trim())return;const{error}=await sb.from('profiles').update({username:n.trim().slice(0,24)}).eq('id',user.id);if(error)return toast(error.message,'err');await loadProf();hdr();route()}
/* ---------- boot ---------- */
window.addEventListener('hashchange',route);document.addEventListener('click',()=>{const d=$('dd');if(d)d.classList.remove('open')});
(async()=>{const{data}=await sb.auth.getSession();if(data.session){user=data.session.user;await loadProf();if(P&&P.settings)S=Object.assign(S,P.settings)}applyS();route()})();
