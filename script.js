const informationHeader = document.getElementById("informationHead");
const informationText = document.getElementById("informationText");
const left = document.getElementById("left");
const right = document.getElementById("right");
const helloWorld = document.getElementById('helloWorld');
let i = 0;

const infoArray = [
    {
        head: 'Kort om mig',
        text: 'Tobias heter jag och bor i Ludvika med fru och 4 barn. <br><br>Med tanke på antalet barn så blir det inte så mycket PC för mig på fritiden, men nu har jag hittat en ursäkt som min fru godtar, kod! <br><br>Jag har alltid suttit vid en dator. Det började med att man spelade SkiFree på pappas laptop. Sedan har intresset fortsatt med diverse spel, musik, film och allt annat roligt man kan göra på en dator. Detta ledde mig till att söka den gymnasielinje, som jag kunde söka i närheten av vart jag bodde och där mina poäng räckte till; El- dator. Skoltröttheten tog över, men datorintresset har alltid legat latent. Har försökt lära mig koda vid tidigare tillfällen, men livet har kommit emellan. Men nu är det dags på riktigt! <br><br>Har studerat i c:a en månad och har en utstansad linje för att till slut landa i full-stack. Efter det ligger även C# och C++ som språk som jag vill lära mig tillsammans med spelmotorerna Unity och Unreal, men det hör till fritiden. Målsättningen är att få ett jobb så snart som möjligt för att finslipa det som jag kommer att lära mig nu under sommaren.'
    },{
        head: 'Olika arbetsplatser',
        text: 'Började min karriär innuti grottorna belagda i den lokala ICA Nära som finns i Björnlunda. Där tjänade jag endast en kortare period i deras lager samt ansvarade över läsk och frukt&grönt.'
    },{
        head: 'Olika arbetsplatser',
        text: 'GoExcellent är ett outsourcingföretag för kundtjänster. Där var jag anställd i 3 år med huvuduppdraget SL. Var även i kontakt med Waxholmsbolaget, Nescafé, Flygbussarna och lite annat smått och gått. Efter dessa 3 år så tappade GoExcellent SL-uppdraget och man fick välja om man ville arbeta på Viasat eller söka sig vidare, varav jag valde det senare.'
    },{
        head: 'Olika arbetsplatser',
        text: 'Stockholm Spårvägar erbjöd mig rollen som gruppchef som jag med stor glädje accepterade. Detta för att jag tagit på mig en hel del kvalitetsansvar i kundbemötande på GoExcellent och de tyckte sig se en lämplig kandidat i mig.'
    },{
        head: 'Olika arbetsplatser',
        text: 'Nobina var en väg vidare till någonting större. Resan från spårbundet till buss var häftig då jag valde att söka vidare för att komma närmare hemmet, men även för att Nobina är ett mer etablerat företag och kommer med en hel del kunskap att ta del av.'
    },{
        head: 'Olika arbetsplatser',
        text: 'Efter en del arbeten och flytt runt omkring i Stockholm så valde jag att flytta till min flickvän som jag hade i Dalarna. Innan flytten kunde gå igenom så behövde jag ett arbete, vilket då blev butikschef på Lidl i Ludvika. Ett högt tempo med en knivskarp planering krävdes för att butiken skulle fungera som det var tänkt.'
    },{
        head: 'Olika arbetsplatser',
        text: 'Butikslivet var aldrig riktigt min grej, varken på ICA eller Lidl. Jag valde därför att söka mig vidare och blev sedan driftchef på Coor. Ytterliggare ett stort företag med gott om kunskap och även ett varmt hjärta. Den nisch som jag ansvarade för var lokalvården inne på ABB/Hitatchi, men även en del mindre kunder i närmområdet till Ludvika.'
    },{
        head: 'Framtid',
        text: 'IT. Mer och mer IT.<br><br>Jag startade upp ett konto på www.codecademy.com och håller just nu på att läsa deras "full stack"-paket som går igenom HTML, CSS, JavaScript, nodeJS, mocha, SQL och mycket, mycket mer.'
    },{
        head: 'Trafikverket',
        text: 'En chans som inte visar sig allt för ofta.<br><br>Mitt uppe i mina fritidsstudier så fick jag ett tips om att detta låg ute och möjlighet fanns till att komma snabbare fram till mitt nuvarande delmål. En chans att komma i kontakt med ett företag som är väletablerat sedan länge. Det stämmer även bra överrens med tidigare bana från min Stockholmsturné där kollektivtrafik var något jag levde och andades.<br><br>Att få komma till Borlänge och vidareutvecklas som Systemtekniker låter nästan för bra för att vara sant. <br><br><b>Jag vill dock skriva en brasklapp om att jag är villig att se till andra inriktningar om ni ser att det passar mig bättre</b>.'
    }

]


function changeRight() {
    helloWorld.style.display = 'none';
    informationHeader.innerHTML = '';
    informationText.innerHTML = '';
    if(i<=8 || i>-1){
    informationHeader.innerHTML = infoArray[i].head;
    informationText.innerHTML = infoArray[i].text;
    ++i;
    }
    if(i === 9){
        i = 0;
    }
}

function changeLeft() {
    helloWorld.style.display = 'none';
    informationHeader.innerHTML = '';
    informationText.innerHTML = '';
    
    informationHeader.innerHTML = infoArray[i].head;
    informationText.innerHTML = infoArray[i].text;
    --i;
    if(i === -1){
        i = 8;
    }
}

right.addEventListener('click', changeRight);
left.addEventListener('click', changeLeft);