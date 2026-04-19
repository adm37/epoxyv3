import { motion } from "motion/react";
import { Shield, Zap, Droplets, Sparkles, CheckCircle2, ArrowRight, Star, Clock, Award, MapPin, Palette, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";

const getCategory = (slug: string) => {
  if (slug.includes('offerte')) return 'OFFERTE';
  if (slug.includes('prijs') || slug.includes('kosten')) return 'PRICE';
  if (slug.includes('metallic') || slug.includes('marmer') || slug.includes('pigment') || slug.includes('mica') || slug.includes('glitter') || slug.includes('marmereffect') || slug.includes('lichtspel')) return 'METALLIC';
  if (slug.includes('flake') || slug.includes('vlok') || slug.includes('chips') || slug.includes('chipsvloer') || slug.includes('terrazzo')) return 'FLAKE';
  if (slug.includes('garage')) return 'GARAGE';
  if (slug.includes('badkamer') || slug.includes('douche') || slug.includes('waterdicht')) return 'BATHROOM';
  if (slug.includes('buiten') || slug.includes('terras') || slug.includes('oprit') || slug.includes('uv-bestendig')) return 'OUTDOOR';
  if (slug.includes('industrie') || slug.includes('magazijn') || slug.includes('werkplaats') || slug.includes('esd')) return 'INDUSTRIAL';
  if (slug.includes('beton')) return 'BETON';
  return 'GENERAL';
};

const formatTitle = (slug: string) => {
  return slug
    .split('-')
    .map(word => {
      if (word === 'pu') return 'PU';
      if (word === 'esd') return 'ESD';
      if (word === 'uv') return 'UV';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const getCategoryContent = (category: string, keyword: string) => {
  const commonTail = `Bij Klasse Epoxy werken we niet met 'one size fits all'. Onze aanpak is gebaseerd op jarenlange ervaring en het besef dat elke ondergrond en elke gebruiksintensiteit een andere benadering vereist. Wij gebruiken uitsluitend de hoogste kwaliteit harsen en pigmenten van industriële standaarden, die uitvoerig zijn getest op treksterkte, druksterkte en esthetische dieptewerking.`;

  switch (category) {
    case 'METALLIC':
      return {
        intro: `Ontdek de sensationele wereld van de ${keyword.toLowerCase()}. Bij Klasse Epoxy transformeren we vloeren in ware kunstwerken met een ongekende dieptewerking en een uniek lichtspel dat elke ruimte een exclusieve uitstraling geeft. Geen twee metallic vloeren zijn hetzelfde; het is pure passie en vakmanschap in vloeibare vorm.`,
        section1: `Een ${keyword.toLowerCase()} is de ultieme keuze voor wie op zoek is naar een vloer met karakter en een luxe 'wow-factor'. Door gebruik te maken van speciale mica-pigmenten die in de transparante epoxyhars worden gesuspendeerd, creëren we effecten die doen denken aan vloeibaar metaal, marmeren aders of kosmische nevels. De manier waarop het licht reflecteert op de pigmenten zorgt voor een dynamisch oppervlak dat lijkt te bewegen wanneer u door de ruimte loopt. ${commonTail}`,
        section2: `Onze ${keyword.toLowerCase()} systemen zijn niet alleen visueel verbluffend, maar ook technisch superieur. Ze combineren de extreme hardheid en vloeistofdichtheid van industriële epoxy met de esthetiek van een hoogwaardig design-object. Of het nu gaat om een moderne woonkamer, een chique showroom of een exclusief hotel; met onze metallic harsen creëert u een naadloze eenheid die rust en luxe uitstraalt.`,
        deepDive: `De techniek achter ${keyword.toLowerCase()} is een zorgvuldig proces van timing en creativiteit. Het geheim zit in de manipulatie van de metallic pigmenten terwijl de hars nog vloeibaar is. Onze meester-applicateurs gebruiken speciale technieken — van subtiele cirkelvormige bewegingen tot het creëren van dramatische marmer-structuren — om het gewenste effect te bereiken. Bij Klasse Epoxy kijken we ook naar de 'dieptewerking'. Door meerdere dunne lagen met verschillende pigmentconcentraties over elkaar aan te brengen, ontstaat een 3D-effect dat met geen enkele andere vloerafwerking te evenaren is. We bieden een breed scala aan kleuren, van klassiek goud en zilver tot diep antraciet, koper en warm brons. Voor een extra dimensie kunnen we zelfs subtiele glitters of contrasterende mica-poeders toevoegen die het lichtspel nog verder versterken. Dit is geen vloer, dit is een statement.`,
        technical: `Technische gegevens voor ${keyword}: De toplaag heeft een Shore D hardheid van circa 82, wat een uitstekende krasbestendigheid garandeert. We maken gebruik van UV-stabiele systemen om te voorkomen dat de heldere harsen op termijn vergelen, waardoor de metallic kleuren hun briljante glans behouden. De hechting op de ondergrond is met >2.0 N/mm² extreem sterk, mits de voorbehandeling (diamantschuren) correct is uitgevoerd.`,
      };
    case 'FLAKE':
      return {
        intro: `Geef uw ruimte een speelse, moderne en uiterst duurzame uitstraling met de ${keyword.toLowerCase()} van Klasse Epoxy. Een decoratief vlokkensysteem (ook wel chipsvloer genoemd) is de perfecte combinatie van esthetiek en ongekende praktische voordelen voor elke intensief gebruikte ruimte.`,
        section1: `Een ${keyword.toLowerCase()} is opgebouwd uit een robuuste epoxy basislaag die volledig wordt ingestrooid met decoratieve kleurvlokken (chips). Deze vlokken zijn verkrijgbaar in duizenden kleurencombinaties, van subtiele 'terrazzo look' mixen tot gedurfde, kleurrijke patronen. Het resultaat is een levendig oppervlak dat niet alleen prachtig oogt, maar ook de meest effectieve manier is om oneffenheden in de ondergrond en vuil of stof optisch te camoufleren. ${commonTail}`,
        section2: `Onze ${keyword.toLowerCase()} systemen zijn de favoriete keuze voor garages, showrooms, kantoren en sanitaire ruimtes. Door de structuur van de vlokken ontstaat er van nature een subtiele antislip-waarde, wat de veiligheid in uw ruimte aanzienlijk verhoogt. Bovendien is de vloer door de dekkende vlokkenlaag extreem krasbestendig en ongevoelig voor bandsporen van auto's of zwaar meubilair.`,
        deepDive: `Het proces van een ${keyword.toLowerCase()} installatie is puur vakmanschap. Na de mechanische voorbehandeling brengen we een gekleurde primer aan die dient als 'beddingslaag'. Terwijl deze nog nat is, strooien wij de vlokken handmatig en met uiterste precisie in tot een volledige verzadiging (full broadcast). Hierbij is de techniek van het strooien cruciaal om een homogeen en rustig beeld te krijgen zonder 'eilandvorming'. Na uitharding verwijderen we het overtollige materiaal en schuren we de vlokken lichtjes aan om de textuur te verfijnen. De finale laag is een hoogwaardige, transparante topcoat die de vlokken insluit en de vloer zijn definitieve bescherming en glansgraad geeft. Voor ruimtes met veel direct zonlicht gebruiken we hiervoor UV-bestendige PU-harsen, zodat de kleuren decennialang levendig blijven. Of u nu kiest voor een fijnkorrelige terrazzo-uitstraling of grovere chips voor een industrieel karakter; met onze vlokkensystemen creëert u een vloer die zowel onverwoestbaar als visueel intrigerend is.`,
        technical: `Technische data voor ${keyword}: Het systeem heeft een gemiddelde dikte van 2 tot 3 mm en een uitstekende antislip-classificatie (R10 tot R12 mogelijk). De slagvastheid is extreem hoog door de meerlaagse opbouw en de flexibiliteit van de vinyl-chips. De vloer is volledig vloeistofdicht en bestand tegen de meeste huishoudelijke en industriële chemicaliën.`,
      };
    case 'OFFERTE':
      return {
        intro: `Op zoek naar een scherpe en transparante offerte voor uw ${keyword.toLowerCase()} project? Bij Klasse Epoxy maken we het u makkelijk. Deze pagina biedt u alle informatie over onze diverse diensten en de mogelijkheid om direct een offerte aan te vragen voor een meesterwerk op maat. Onze focus ligt op het transformeren van uw visie in een tastbaar, hoogwaardig resultaat.`,
        section1: `Een ${keyword.toLowerCase()} is een investering in de toekomst van uw vastgoed. Of het nu gaat om een particuliere woning, een stijlvolle showroom of een robuuste industriële hal; wij bieden voor elke discipline de juiste expertise. Op deze pagina vindt u diepgaande informatie over de verschillende soorten epoxyvloeren die wij aanbieden (zoals metallic, flake en industriële coatings) en hoe deze uw ruimte kunnen optimaliseren. Onze offertes zijn altijd volledig transparant, zonder verborgen kosten achteraf. We kijken niet alleen naar de vierkante meters, maar adviseren u over de beste systeemopbouw voor uw specifieke situatie.`,
        section2: `Waarom nu een offerte aanvragen bij Klasse Epoxy? Omdat wij geloven in snelheid, nauwkeurigheid en persoonlijke aandacht. Na uw aanvraag nemen wij binnen 24 uur contact met u op voor een eerste inventarisatie van uw wensen. Of u nu op zoek bent naar een designvloer voor uw moderne woonkamer of een vloeistofdichte oplossing voor een groot magazijn, wij vertalen uw technische eisen en esthetische voorkeuren naar een scherpe begroting. Indien nodig komen wij kosteloos op locatie voor een technische inspectie, zodat we exact weten welke voorbehandeling uw vloer nodig heeft.`,
        deepDive: `De weg naar een perfecte vloer begint bij een solide offerteproces. Wanneer u een aanvraag doet voor ${keyword.toLowerCase()}, kijken we naar de staat van de huidige ondervloer (vochtigheidspercentage, vlakheid, scheurvorming), de gewenste esthetiek (kleur, glansgraad, textuur) en de functionele eisen (mechanische belasting, chemische resistentie, antislip-waarde). Onze offertes bevatten een gedetailleerd stappenplan, van de mechanische voorbereiding tot de laatste beschermende topcoating. We leggen u uit waarom bepaalde keuzes cruciaal zijn voor de levensduur van uw vloer, zodat u een weloverwogen beslissing kunt nemen. Onze lead-generatie is gericht op kwaliteit: wij willen dat u precies weet waar u aan toe bent voordat er ook maar één liter hars wordt gemengd. Dit is de reden waarom Klasse Epoxy bekend staat om zijn betrouwbaarheid en vakmanschap.`,
        technical: `Onze offertes zijn gebaseerd op systemen die voldoen aan de strengste Europese kwaliteitsnormen (NEN-EN). We specificeren de Shore D hardheid, de viscositeit van de gebruikte harsen en de verwachte droogtijden. Transparantie staat voorop: we benoemen alle lagen in de systeemopbouw, inclusief primers, schraaplagen en de uiteindelijke gietlagen. U ontvangt bij de offerte ook technische datasheets van de gebruikte materialen indien gewenst.`,
      };
    case 'PRICE':
      return {
        intro: `Wat zijn de werkelijke ${keyword.toLowerCase()} in de huidige markt? Bij Klasse Epoxy geloven we niet in misleidende vaste prijzen per meter zonder context. Elke vloer is een uniek project dat een calculatie op maat verdient, gebaseerd op een grondige technische inspectie op locatie door onze experts.`,
        section1: `De ${keyword.toLowerCase()} worden bepaald door een complexe veelvoud aan factoren. Denk hierbij aan de conditie van de ondervloer (moet er geëgaliseerd worden?), de bereikbaarheid van de ruimte, het aantal benodigde functionele lagen en de specifieke eisen zoals UV-stabiliteit of antislip-waardes (R-klassen). Een 'goedkope' coating kan op de lange termijn duurkoop blijken als deze na enkele jaren begint te onthechten of vergeelt door zonlicht. Onze prijzen reflecteren de industriële kwaliteit en het diepe vakmanschap dat wij leveren voor elk uniek vloertype, of het nu een luxe metallic vloer of een industriële gietcoating is.`,
        section2: `Wij nodigen u uit voor een vrijblijvende technische inspectie bij u op locatie. Alleen op die manier kunnen we de ${keyword.toLowerCase()} exact en eerlijk bepalen. Tijdens dit bezoek testen we de druksterkte en het kritische vochtgehalte van de ondervloer met professionele meetapparatuur. Op basis van deze harde data en uw esthetische wensen stellen we een prijsplan op dat garant staat voor een vloer die tientallen jaren meegaat zonder zijn glans of sterkte te verliezen.`,
        deepDive: `Bij het analyseren van de ${keyword.toLowerCase()}, kijken we naar de 'Total Cost of Ownership'. Een Klasse Epoxyvloer heeft minimale onderhoudskosten en een extreem lange levensduur, wat de investering over de jaren heen uiterst rendabel maakt voor zowel particulieren als bedrijven. We leggen u haarfijn uit hoe de opbouw van de prijs per m² tot stand komt: van de kosten voor specialistisch diamant-schuren of stofvrij stralen (cruciaal voor de mechanische hechting) tot aan de hoogwaardige harsen die we inzetten. Geen enkele vloer is hetzelfde; een garagevloer vraagt om andere harsen dan een badkamer of een steriele cleanroom. Daarom is onze inspectie op locatie de enige manier om u een eerlijke, transparante en bindende prijs te bieden die past bij de unieke eigenschappen van uw ruimte.`,
        technical: `Onze prijs-calculaties zijn technisch onderbouwd conform de CUR-richtlijnen. We houden rekening met materiaalverbruik per m², exact gecalculeerd op basis van de porositeit en vlakheid van de ondergrond. Onze offertes voor ${keyword.toLowerCase()} zijn bindend en bevatten een garantiecertificaat voor de geleverde kwaliteit, hechting en kleurvastheid.`,
      };
    case 'GARAGE':
      return {
        intro: `Is uw garagevloer toe aan een upgrade? Met ${keyword.toLowerCase()} van Klasse Epoxy kiest u voor de ultieme bescherming tegen olie, zuren en zware mechanische belasting. Een garagevloer is niet zomaar een oppervlak; het is de fundering van uw werkplaats, opslag of stalling waar kwaliteit geen concessie mag zijn.`,
        section1: `Een garagevloer krijgt het dagelijks zwaar te verduren. Naast het enorme gewicht van voertuigen zijn er vloeistoffen zoals olie, remvloeistof en strooizout die onbehandeld beton onherstelbaar kunnen beschadigen. ${keyword} biedt een ondoordringbare, vloeistofdichte barrière die niet alleen beschermt, maar ook zorgt voor een professionele showroom-uitstraling waar u trots op kunt zijn. ${commonTail}`,
        section2: `Onze ${keyword.toLowerCase()} systemen zijn specifiaal ontwikkeld voor hoge mechanische belasting en chemische resistentie. Waar normale verf zal afbladderen onder warme autobanden (de zogenaamde 'hot tire pick-up'), blijft onze industriële klasse epoxy muurvast zitten aan de ondergrond. Dit komt door de superieure moleculaire hechting die we realiseren door een strikte voorbehandeling.`,
        deepDive: `De wetenschap achter een goede garagevloer coating is complex en vereist expertise. Het gaat om de perfecte balans tussen elasticiteit en hardheid. Een vloer moet hard genoeg zijn om de enorme druk van een auto (tot wel 2000kg) op vier kleine contactpunten te weerstaan, maar tegelijkertijd elastisch genoeg om niet te barsten als de temperatuur in de winter plotseling daalt. Bij Klasse Epoxy gebruiken we voor ${keyword.toLowerCase()} een specifieke hars-verharder verhouding die optimaal presteert in het wisselvallige Nederlandse klimaat. We kijken ook naar de afwerking; wilt u een zijdeglans look die minder reflecteert voor een rustig beeld, of juist een hoogglans vloer die de verlichting in uw garage accentueert? Voor autoliefhebbers is dit vaak de kers op de taart voor hun passie.`,
        technical: `Technische specificaties voor ${keyword}: Onze epoxy heeft een indrukwekkende druksterkte van circa 80 N/mm² en een treksterkte van 25 N/mm². Dit is vele malen sterker dan de betonvloer waar het systeem op ligt. De applicatie gebeurt in minimaal 3 tot 5 lagen, afhankelijk van de belasting en de staat van de ondergrond.`,
      };
    case 'BATHROOM':
      return {
        intro: `Een volledig naadloze en 100% waterdichte badkamer realiseren? Ontdek de ongekende mogelijkheden van ${keyword.toLowerCase()} bij Klasse Epoxy. De ultieme hygiënische oplossing voor uw persoonlijke welness-ruimte waar design en techniek samenkomen.`,
        section1: `Vocht is de allergrootste vijand van elke badkamer. Met ${keyword} elimineert u de zwakste schakel in het systeem: de voegen en kitranden waar schimmels en kalk zich graag nestelen. Een naadloze afwerking zorgt ervoor dat bacteriën geen kans krijgen, wat resulteert in een badkamer die niet alleen prachtig oogt, maar ook jarenlang als nieuw en hygiënisch schoon blijft.`,
        section2: `Veiligheid is essentieel in natte ruimtes. Daarom kunnen wij de ${keyword.toLowerCase()} voorzien van een subtiele, bijna onzichtbare antislip-structuur die maximale grip biedt, zelfs wanneer de vloer nat en zeepachtig is. Dit maakt onze vloeren de ideale en veilige keuze voor moderne inloopdouches en spa-omgevingen.`,
        deepDive: `Bij het professioneel installeren van ${keyword.toLowerCase()} in een natte ruimte zoals een badkamer is de waterdichtheid tot achter de plinten van cruciaal belang. We creëren zogenaamde 'holle plinten' waarbij de vloer naadloos en vloeistofdicht overloopt in de wandafwerking. Dit voorkomt effectief lekkages naar ondergelegen verdiepingen en de omliggende muren. De epoxyharsen die we selecteren voor badkamers zijn bovendien licht-elastisch geformuleerd. Dit is essentieel om kleine krimpscheuren in de ondergrond (veelvoorkomend bij nieuwbouw) op te vangen zonder dat de toplaag scheurt. Esthetisch gezien biedt de naadloze look een moderne, bijna hotel-waardige uitstraling die de ruimte optisch aanzienlijk vergroot omdat er geen storende onderbrekingen zijn in het zichtveld.`,
        technical: `Voor ${keyword.toLowerCase()} gebruiken wij uitsluitend systemen die volledig gecertificeerd zijn volgens de Europese normen voor natte ruimtes. De waterdoorlatendheid is 0.0 mg, wat betekent dat het systeem absoluut en gegarandeerd vloeistofkerend is. De hoge chemicaliënbestendigheid zorgt ervoor dat zelfs agressieve schoonmaakmiddelen de vloer niet aantasten.`,
      };
    case 'OUTDOOR':
      return {
        intro: `Zoekt u een onverwoestbare en stijlvolle oplossing voor uw terras of oprit? Onze ${keyword.toLowerCase()} is doorontwikkeld om de zwaarste weersinvloeden te trotseren met maximale UV-bestendigheid als kernkwaliteit.`,
        section1: `Buitentoepassingen stellen extreme eisen aan een vloersysteem. Temperatuurwisselingen van -20 tot +40 graden, constante vorst en directe UV-straling kunnen standaard harsen doen verkleuren of broos maken. Bij Klasse Epoxy gebruiken we voor ${keyword} uitsluitend harsen die hun kleur en flexibiliteit behouden ongeacht de weersomstandigheden. Zo blijft uw terras of oprit jarenlang het visitekaartje van uw woning.`,
        section2: `Of het nu gaat om een modern dakterras of een representatieve oprit die zware voertuigen moet dragen; ${keyword.toLowerCase()} zorgt voor een onderhoudsvriendelijk oppervlak waar onkruid, algen en mos geen grip op hebben. Vergeet het jaarlijkse werk van onkruid verwijderen tussen de tegels; onze naadloze oplossing is de toekomst.`,
        deepDive: `De grootste technische uitdaging bij buitencoatings is de destructieve kracht van UV-straling. Standaard aromatische epoxy wordt onder invloed van zonlicht snel krijtachtig, geel en verliest zijn sterkte. Voor ${keyword.toLowerCase()} passen we daarom uitsluitend Polyurethaan of hoogwaardige, gemodificeerde UV-stabiele epoxy systemen toe. Deze systemen zijn bovendien 'damp-open' geformuleerd. Dit is cruciaal voor opritten en terrassen die direct op de grond liggen, omdat vocht onder de vloer via de coating moet kunnen ontsnappen zonder dat er blazen ontstaan of de hechting verloren gaat. De esthetiek van een op kleur gebracht terras geeft uw tuin een architectonische meerwaarde die met traditionele klinkers of tegels simpelweg nooit te evenaren is.`,
        technical: `De technische eisen voor ${keyword.toLowerCase()} buiten zijn bij Klasse Epoxy ongeëvenaard hoog. Onze systemen zijn uitvoerig getest in klimaatkamers op temperaturen van -40°C tot +70°C. De UV-stabiliteit is beoordeeld met de hoogste klasse op de internationale schaal voor lichtechtheid. De mechanische hechtsterkte op voorbehandeld buitenbeton is minimaal 2.5 MPa.`,
      };
    case 'INDUSTRIAL':
      return {
        intro: `Maximale operationele efficiëntie en absolute veiligheid in uw bedrijfspand beginnen bij de basis: de vloer. Onze ${keyword.toLowerCase()} voldoet aan de allerstrengste industriële standaarden en wettelijke certificeringen.`,
        section1: `In een druk magazijn, dynamische werkplaats of steriele cleanroom is stilstand van uw proces simpelweg geen optie. ${keyword} van Klasse Epoxy is ontworpen om zwaar heftruckverkeer, chemische morsingen en intensieve mechanische belasting te weerstaan zonder de integriteit te verliezen. Wij bieden bovendien 'fast-cure' systemen die een razendsnelle ingebruikname mogelijk maken.`,
        section2: `Voor specifieke high-tech sectoren leveren wij ${keyword.toLowerCase()} die exact voldoet aan ESD-eisen (Electrostatic Discharge) of medische hygiëne-certificeringen (HACCP), waarbij wij de hoogste standaarden op het gebied van elektrische geleiding en microbiële resistentie garanderen voor uw bedrijfskritische omgeving.`,
        deepDive: `In de industriële sector wordt de vloer niet als decoratie gezien, maar als een essentieel onderdeel van het productieproces. Slijtvastheid op moleculair niveau staat hier op de eerste plaats. Voor ${keyword.toLowerCase()} in de zware industrie implementeren we vaak gevulde epoxy mortels of gietcoatings met een extreem hoge Shore D hardheid. Dit betekent dat vallend gereedschap, zware pallets of chemische lekkages de vloer niet direct fataal beschadigen. Voor cleanrooms of laboratoria bouwen we het systeem zo op dat het volledig kiemvrij te reinigen is, zonder naden waar bacteriën kunnen groeien. Onze vloeren zijn bovendien vloeistofdicht conform de Nederlandse CUR-richtlijnen, wat milieuvervuiling voorkomt en uw bedrijfspand toekomstbestendig maakt tegen strenger wordende regelgeving.`,
        technical: `Onze industriële ${keyword.toLowerCase()} systemen bezitten een Shore D hardheid van 80 of hoger. Ze zijn berekend op puntbelastingen van vele duizenden kilo's per vierkante meter. De chemische resistentielijst omvat honderden agressieve stoffen, van industriële zuren tot diverse logen en oliën.`,
      };
    case 'BETON':
      return {
        intro: `Wilt u uw kwetsbare betonvloer effectief verduurzamen, stofvrij maken en beschermen? Ontdek de kracht van professionele ${keyword.toLowerCase()} voor een vloeistofdichte en slijtvaste afwerking die de tand des tijds doorstaat.`,
        section1: `Onbehandeld beton ziet er misschien robuust uit, maar het is in werkelijkheid poreus en onderhevig aan constante slijtage, vlekken en stofvorming. Door te kiezen voor ${keyword} impregneert u de toplaag en creëert u een onverwoestbare verbinding met de ondergrond. Het resultaat is een oppervlak dat niet alleen functioneel superieur is, maar ook esthetisch de uitstraling van uw ruimte naar een hoger niveau tilt.`,
        section2: `Onze ${keyword.toLowerCase()} systemen verhogen de levensduur van uw constructievloer met vele decennia. Het maakt het beton niet alleen vele malen sterker tegen trek- en drukkrachten, maar maakt het ook volledig resistent tegen vloeistoffen en oliën die anders in de vloer zouden trekken en betonrot of vervuiling zouden veroorzaken.`,
        deepDive: `Bij een succesvolle ${keyword.toLowerCase()} op beton is de voorbereiding meer dan 90% van het werk. Wij maken uitsluitend gebruik van geavanceerde diamant-schuurapparatuur om de zwakke 'cementhuid' volledig te verwijderen. Dit opent de capillaire poriën van het beton, waardoor de hoogwaardige epoxy primer diep kan penetreren en zich letterlijk verankert in de constructie. Alleen op deze manier kunnen we een hechting garanderen die nooit meer loslaat. We monitoren hierbij ook de opstijgende dampdruk; als er geen actieve vochtbarrière onder het fundament ligt, selecteren we een specifiaalk ontwikkelde vochttolerante epoxy om latere onthechting te voorkomen. Onze coatings veranderen een grauwe, stoffige ondergrond in een glanzende of matte industriële vloer die de lichtopbrengst in uw ruimte verbeterd en een gezonde werk- of leefomgeving creëert.`,
        technical: `Voor ${keyword.toLowerCase()} garanderen we een mechanische hechtsterkte op het beton van minimaal 1.5 tot 2.0 N/mm². Onze harsen worden geproduceerd met een extreem laag aandeel vluchtige organische stoffen (VOC), waardoor ze veilig zijn voor mens en milieu tijdens en na de applicatie.`,
      };
    default:
      return {
        intro: `Bent u op zoek naar dé erkende specialist voor uw ${keyword.toLowerCase()}? Klasse Epoxy levert hoogwaardige, naadloze vloersystemen die exact zijn afgestemd op de eisen van zowel de particuliere als de veeleisende zakelijke markt.`,
        section1: `Een ${keyword.toLowerCase()} is de ultieme oplossing voor wie geen concessies wil doen op het gebied van hygiëne, duurzaamheid en een moderne esthetiek. Of het nu gaat om een minimalistisch design in uw woning of een functionele oplossing voor uw bedrijfspand; wij leveren maatwerk dat naadloos aansluit bij de technische vereisten van uw ruimte. Onze vloeren zijn de ruggengraat van uw interieur.`,
        section2: `De jarenlange intensieve ervaring van Klasse Epoxy met ${keyword.toLowerCase()} staat garant voor een resultaat dat aan de allerhoogste kwaliteitsstandaarden voldoet. We werken uitsluitend met de beste grondstoffen en gecertificeerde applicateurs om uw visie te vertalen naar een vloer die niet alleen vandaag schittert, maar ook over tien jaar nog in topconditie verkeert.`,
        deepDive: `In de dynamische wereld van de kunststofvloeren is technische innovatie onze drijvende kracht. Voor ${keyword.toLowerCase()} gebruiken wij de nieuwste generaties polymeren om systemen te bouwen die esthetisch verbluffend en technisch nagenoeg onverwoestbaar zijn. Onze focus op continu onderzoek stelt ons in staat om coatings aan te bieden die superieur bestand zijn tegen krassen, minder gevoelig zijn voor UV-verkleuring en sneller belastbaar zijn dan traditionele systemen. Elke laag die we aanbrengen, van de grondlaag tot de topfinish, wordt gecontroleerd op dikte en egaliteit. Of u nu kiest voor een gedurfde kleur, een subtiele betonlook of een uniek patroon; elk project krijgt de aandacht die een meesterwerk verdient. De lange levensduur van onze systemen is onze grootste trots en de beste garantie voor uw investering.`,
        technical: `Onze ${keyword.toLowerCase()} systemen zijn uitvoerig gecertificeerd door onafhankelijke instituten conform de geldende ISO-normen. De treksterkte, elasticiteit en Shore-D hardheid zijn doorgetest voor een extreem breed scala aan toepassingen. Wij leveren bij elk project een volledig onderhoudsadvies en technische specificaties van de toegepaste harsen.`,
      };
  }
};

interface Props { slug?: string; }
export default function KeywordLandingPage({ slug = "" }: Props) {
  const keyword = formatTitle(slug);
  const category = getCategory(slug);
  const content = getCategoryContent(category, keyword);

  return (
    <div className="min-h-screen bg-white selection:bg-epoxy-accent selection:text-epoxy-black">
      <Navbar />
      
      <main className="pt-20">
        <section className="relative py-32 bg-epoxy-black overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://i.ibb.co/KxK89vjx/Epoxy-vloer-www-klasse-epoxy-nl.png" 
              alt={keyword} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-epoxy-accent text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <Sparkles className="w-3 h-3" />
              Specialist in {keyword}
            </motion.div>
            <h1 className="text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8 leading-none">
              {keyword.toUpperCase()}.
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              {content.intro}
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="btn-dark">Gratis Offerte Aanvragen</a>
              <a href="/portfolio/" className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                Bekijk Portfolio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Trust />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-12 uppercase">
              De ultieme gids voor {keyword}
            </h2>
            
            <div className="prose prose-lg max-w-none text-black/70 space-y-24 leading-relaxed">
              <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-black/5 mb-24">
                <p className="font-bold text-epoxy-black italic m-0 text-xl md:text-2xl leading-snug">
                   Klasse Epoxy is de nummer één specialist voor {keyword.toLowerCase()}. {content.section1}
                </p>
              </div>

              <section className="space-y-12">
                <h3 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-10">Waarom kiezen voor {keyword}?</h3>
                <div className="space-y-8 text-lg">
                  <p>
                    {content.section2}
                  </p>
                  <p>
                    Of u nu een particulier bent die zijn droomhuis realiseert, of een ondernemer die gaat voor maximale duurzaamheid; <strong>{keyword.toLowerCase()}</strong> biedt de technische eigenschappen die u nodig heeft. Onze systemen zijn volledig naadloos, wat betekent dat er geen zwakke plekken zijn waar vocht of vuil kan binnendringen.
                  </p>
                </div>
              </section>

              <section className="space-y-12">
                <h3 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-10">De Technische Voordelen</h3>
                <ul className="grid md:grid-cols-2 gap-10 list-none pl-0">
                  {[
                    { t: "Chemische Resistentie", c: "Onze coatings zijn bestand tegen de meest agressieve zuren en oliën." },
                    { t: "Hygiëne Voorop", c: "Omdat de vloer geen naden heeft, is deze uiterst eenvoudig te desinfecteren." },
                    { t: "Extreme Hardheid", c: "Epoxy is harder dan beton en biedt superieure bescherming tegen krassen." },
                    { t: "Design op Maat", c: "Kies uit honderden kleuren en diverse texturen voor de perfecte look." }
                  ].map((benefit, i) => (
                    <li key={i} className="bg-white border border-black/5 p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                      <CheckCircle2 className="text-epoxy-accent w-8 h-8 mb-6" />
                      <h4 className="font-bold uppercase text-lg mb-4">{benefit.t}</h4>
                      <p className="text-base m-0 leading-relaxed">{benefit.c}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-12 border-t border-black/5 pt-24">
                <h3 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-tight mb-10">Hoe wij te werk gaan</h3>
                <div className="space-y-8 text-lg">
                  <p>
                    Bij Klasse Epoxy geloven we in een grondige aanpak voor elke <strong>{keyword.toLowerCase()}</strong> installatie. Wij beginnen altijd met een analyse van de ondergrond. Is het beton droog genoeg? Zijn er scheuren die eerst constructief hersteld moeten worden? Pas als de basis 100% goed is, beginnen we met het opbouwen van de verschillende lagen.
                  </p>
                </div>
                <div className="space-y-8 bg-gray-50 p-12 md:p-16 rounded-[3.5rem] mt-12">
                  {[
                    "Stap 1: Mechanische voorbereiding van de vloer.",
                    "Stap 2: Aanbrengen van de hechtprimer.",
                    "Stap 3: Reparatie en egalisatie van oneffenheden.",
                    `Stap 4: Applicatie van de ${keyword.toLowerCase()}.`,
                    "Stap 5: Afwerking met een beschermende topcoat."
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 items-center border-b border-black/5 pb-6 last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-full bg-epoxy-black text-epoxy-accent flex items-center justify-center font-bold text-sm shrink-0 shadow-lg">{i+1}</div>
                      <p className="m-0 text-base md:text-lg font-bold uppercase tracking-widest leading-none">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight mb-6">Expertise en Advies</h3>
                <p>
                  Niet elke <strong>{keyword.toLowerCase()}</strong> is hetzelfde. Er zijn enorme verschillen in kwaliteit tussen budget-coatings en de professionele systemen die wij gebruiken. Bij Klasse Epoxy gebruiken we uitsluitend harsen van industriële kwaliteit die niet vergelen en hun elasticiteit behouden. Dit zorgt ervoor dat uw investering in {keyword.toLowerCase()} zich over de jaren dubbel en dwars terugbetaalt.
                </p>
                <p>
                  {content.deepDive}
                </p>
                <p>
                  Heeft u specifieke wensen voor {keyword}? Wilt u een antislip afwerking, of juist een hoogglans spiegel-effect? Onze adviseurs komen graag bij u langs om de mogelijkheden te bespreken en een offerte op maat te maken die aansluit bij uw visie en budget.
                </p>
              </section>

              <section className="bg-white border-y border-black/5 py-16 space-y-8">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight">De Geschiedenis en Evolutie van {keyword}</h3>
                <p>
                  Om de waarde van <strong>{keyword.toLowerCase()}</strong> echt te begrijpen, moeten we kijken naar de oorsprong van dit materiaal. Epoxyharsen werden voor het eerst ontwikkeld in de jaren 30 van de vorige eeuw door pioniers zoals Dr. Pierre Castan in Zwitserland en Dr. Sylvan Greenlee in de Verenigde Staten. In eerste instantie was het bedoeld als een superieure lijm en bindmiddel voor de luchtvaartindustrie en de tandheelkunde. Pas veel later ontdekte men dat de uitzonderlijke eigenschappen van epoxy — de enorme trekkracht, chemische inertie en de krimpvrije uitharding — de perfecte basis vormden voor vloersystemen die bestand moesten zijn tegen de meest extreme industriële omstandigheden.
                </p>
                <p>
                  Vandaag de dag is {keyword.toLowerCase()} geëvolueerd van een pure industriële oplossing naar een esthetisch meesterwerk. Dankzij moderne pigmentatietechnieken en verbeterde UV-stabilisatoren kunnen we nu vloeren creëren die niet alleen de functionele kwaliteiten van de vroege industriële harsen bezitten, maar ook passen in de meest luxueuze interieurontwerpen. Bij Klasse Epoxy combineren we deze klassieke duurzaamheid met de modernste applicatietechnieken, waardoor we resultaten behalen die vroeger ondenkbaar waren. De evolutie van {keyword} staat niet stil. We experimenteren constant met nieuwe toevoegingen, zoals grafeen voor extra geleiding of nanotechnologie voor nog gladdere en harder oppervlaktes.
                </p>
                <p>
                  Wanneer u kiest voor {keyword.toLowerCase()}, kiest u voor een materiaal dat al bijna een eeuw lang bewezen heeft de sterkste verbinding te vormen die er is. Het is een technologie die zich door de jaren heen heeft verfijnd en gepolijst, resulterend in het product van topklasse dat wij vandaag bij u installeren.
                </p>
              </section>

              <section className="space-y-8">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight">Onderhoud en Reiniging van uw {keyword}</h3>
                <p>
                  Een van de grootste voordelen van <strong>{keyword.toLowerCase()}</strong> is het minimale onderhoud dat vereist is om de vloer in showroom-conditie te houden. Omdat het oppervlak volledig porievrij en naadloos is, kunnen vuil en bacteriën zich nergens aan hechten. In tegenstelling tot tegels met voegen of houten vloeren met kieren, volstaat voor een epoxyvloer een eenvoudige reinigingsroutine.
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="font-bold uppercase text-xs tracking-widest text-epoxy-accent">Dagelijkse Reiniging</h4>
                    <p className="text-sm">Het is raadzaam om losliggend stof en zand regelmatig te verwijderen met een zachte borstel of stofzuiger. Zand kan namelijk fungeren als schuurpapier onder uw schoenen en op de lange termijn de glans van de toplaag beïnvloeden. Een simpele dweilbeurt met lauw water is meestal voldoende voor de dagelijkse hygiëne.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold uppercase text-xs tracking-widest text-epoxy-accent">Periodiek Onderhoud</h4>
                    <p className="text-sm">Gebruik voor de wekelijkse dweilbeurt een PH-neutrale vloerreiniger die speciaal is ontwikkeld voor kunststofvloeren. Vermijd agressieve allesreinigers of schoonmaakmiddelen op basis van zeep; zeep kan een doffe film achterlaten op de vloer die de glans wegneemt. Mocht er een keer agressief chemisch spul worden gemorst op uw {keyword.toLowerCase()}, veeg dit dan direct op. Hoewel de vloer chemisch resistent is, kan langdurige blootstelling aan sommige stoffen de toplaag verkleuren.</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  Tip van de expert: Gebruik onder meubels en stoelen altijd viltjes en vermijd rubberen doppen, omdat rubber weekmakers kan bevatten die bruine vlekken in de coating kunnen veroorzaken (migratie). Door deze simpele regels te volgen, blijft uw {keyword.toLowerCase()} project er decennia lang als nieuw uitzien.
                </p>
              </section>

              <section className="bg-gray-50 p-12 rounded-[3.5rem] space-y-10">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight">Vergelijking: {keyword} vs. Andere Vloersystemen</h3>
                <p>
                  Wanneer u overweegt om <strong>{keyword.toLowerCase()}</strong> aan te laten leggen, vraagt u zich misschien af hoe dit zich verhoudt tot alternatieven zoals PVC, gietasfalt of een traditionele zandcementvloer met tegels. Wij hebben de belangrijkste verschillen voor u op een rij gezet zodat u de juiste keuze kunt maken voor uw specifieke toepassing.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-black/10">
                        <th className="py-4 font-bold uppercase text-xs tracking-widest">Kenmerk</th>
                        <th className="py-4 font-bold uppercase text-xs tracking-widest bg-epoxy-accent/10 px-4 text-epoxy-black">{keyword}</th>
                        <th className="py-4 font-bold uppercase text-xs tracking-widest">Tegelvloer</th>
                        <th className="py-4 font-bold uppercase text-xs tracking-widest">PVC Vloer</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-black/5">
                        <td className="py-4 font-bold">Naadloosheid</td>
                        <td className="py-4 bg-epoxy-accent/5 px-4">100% Volledig naadloos</td>
                        <td className="py-4">Voegen die vervuilen</td>
                        <td className="py-4">Zichtbare naden of lasnaden</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-4 font-bold">Hygiëne</td>
                        <td className="py-4 bg-epoxy-accent/5 px-4">Anorganisch, geen bacteriegroei</td>
                        <td className="py-4">Bacteriën in voegen</td>
                        <td className="py-4">Lijmverbindingen kunnen lekken</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-4 font-bold">Hardheid</td>
                        <td className="py-4 bg-epoxy-accent/5 px-4">Extreem hoog (Shore D 80+)</td>
                        <td className="py-4">Broos (kan barsten)</td>
                        <td className="py-4">Zacht (gevoelig voor deuken)</td>
                      </tr>
                      <tr className="border-b border-black/5">
                        <td className="py-4 font-bold">Vloeistofdicht</td>
                        <td className="py-4 bg-epoxy-accent/5 px-4">Ja, tot op moleculair niveau</td>
                        <td className="py-4">Alleen de tegel zelf</td>
                        <td className="py-4">Afhankelijk van de lijm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Zoals u ziet, wint <strong>{keyword.toLowerCase()}</strong> op nagenoeg elk cruciaal vlak als het gaat om duurzaamheid en technische prestaties. Het is een integraal systeem dat één wordt met uw gebouw, in plaats van een losse afwerklaag die erop ligt.
                </p>
              </section>

              <section className="space-y-8 border-l-4 border-epoxy-accent pl-12">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight">Veelgemaakte Fouten bij {keyword} Installatie</h3>
                <p>
                  Omdat het aanbrengen van <strong>{keyword.toLowerCase()}</strong> een chemisch proces is, kan er veel misgaan als dit niet door professionals wordt uitgevoerd. Bij Klasse Epoxy zien we vakmatig helaas vaak de gevolgen van onvakkundige installaties. Hier zijn de meest voorkomende valkuilen waar wij u voor beschermen:
                </p>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold underline uppercase text-xs mb-2">Onvoldoende Voorbereiding</h5>
                    <p className="text-sm">Het simpelweg 'overrollen' van een stoffige vloer leidt onherroepelijk tot onthechting. Wij diamantschuren elke centimeter om een mechanische verankering te garanderen.</p>
                  </div>
                  <div>
                    <h5 className="font-bold underline uppercase text-xs mb-2">Verkeerde Mengverhouding</h5>
                    <p className="text-sm">Epoxy bestaat uit een component A (hars) and B (verharder). Als de verhouding niet tot op de gram nauwkeurig is, zal de vloer nooit volledig uitharden of kleverige plekken vertonen. Wij gebruiken precisie-weegapparatuur voor elke batch.</p>
                  </div>
                  <div>
                    <h5 className="font-bold underline uppercase text-xs mb-2">Negeren van het Dauwpunt</h5>
                    <p className="text-sm">Als de temperatuur van de vloer te dicht bij het dauwpunt ligt, ontstaat er condensatie die de uitharding ruïneert. Onze applicateurs meten altijd de temperatuur, luchtvochtigheid en het dauwpunt voordat de harsen worden gemengd voor uw {keyword.toLowerCase()} project.</p>
                  </div>
                </div>
                <p>
                   Door te kiezen voor de experts van Klasse Epoxy, vermijdt u deze kostbare fouten en bent u verzekerd van een resultaat dat in één keer goed is en tientallen jaren blijft liggen.
                </p>
              </section>

              <section className="bg-epoxy-black text-white p-12 rounded-[3rem]">
                <h3 className="text-3xl font-bold text-epoxy-accent uppercase tracking-tight mb-6">Technische Specificaties</h3>
                <p className="text-white/70">
                   Voor de professionals en technische beslissers hebben we de kerncijfers van onze <strong>{keyword.toLowerCase()}</strong> op een rij gezet. Deze specificaties garanderen de kwaliteit en duurzaamheid waar Klasse Epoxy om bekend staat.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="border-l-2 border-epoxy-accent pl-6">
                    <h4 className="font-bold uppercase text-sm mb-2 text-epoxy-accent">Fysieke Eigenschappen</h4>
                    <p className="text-sm opacity-60 leading-relaxed">
                      {content.technical}
                    </p>
                  </div>
                  <div className="border-l-2 border-epoxy-accent pl-6">
                    <h4 className="font-bold uppercase text-sm mb-2 text-epoxy-accent">Normen & Certificering</h4>
                    <p className="text-sm opacity-60 leading-relaxed">
                      Onze systemen voldoen aan NEN-EN 13813 en zijn gecertificeerd voor vloeistofdichtheid conform de CUR-richtsnoeren. Dit betekent dat u verzekerd bent van een vloer die niet alleen aan uw eisen voldoet, maar ook aan alle wettelijke standaarden.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-4xl font-bold text-black uppercase tracking-tighter mb-12">Veelgestelde Vragen over {keyword}</h3>
                <div className="space-y-8">
                  {[
                    {
                      q: `Wat is de droogtijd van ${keyword.toLowerCase()}?`,
                      a: "De droogtijd hangt af van de omgevingstemperatuur en luchtvochtigheid. Over het algemeen is de vloer na 24 uur beloopbaar. Na 48 uur is de vloer mechanisch belastbaar (u kunt er dan zware meubels op plaatsen). Na 7 dagen is de epoxy volledig chemisch uitgehard en bestand tegen water en schoonmaakmiddelen. Het is essentieel om deze periodes strikt aan te houden voor het beste eindresultaat."
                    },
                    {
                      q: `Kan ${keyword.toLowerCase()} over een bestaande tegelvloer?`,
                      a: "Ja, in veel gevallen is dit mogelijk. De tegels moeten echter wel muurvast zitten. We schuren de glazuurlaag van de tegels diamant-open en gebruiken een speciale 'hechtprimer voor niet-zuigende ondergronden'. Hierdoor bespaart u zich het hak- en breekwerk van het verwijderen van de oude vloer. Een inspectie ter plaatse is wel vereist om de stabiliteit van de tegels te beoordelen."
                    },
                    {
                      q: `Hoe duurzaam is ${keyword.toLowerCase()} werkelijk?`,
                      a: "Bij Klasse Epoxy gebruiken we de term 'levensduur-bestendig'. Een goed aangelegde epoxyvloer gaat minimaal 25 tot 30 jaar mee zonder zijn technische eigenschappen te verliezen. Door de extreme hardheid is slijtage minimaal, zelfs bij intensief gebruik. Mocht de glans na 10 jaar wat afnemen, dan kan de zijdeglans/hoogglans laag eenvoudig worden 'opgefrist' met een nieuwe topcoat, zonder de hele vloer te vervangen."
                    },
                    {
                      q: `Is ${keyword.toLowerCase()} geschikt voor vloerverwarming?`,
                      a: "Absoluut. Epoxy heeft een uitstekende warmtegeleiding (zelfs beter dan hout of laminaat). De warmte wordt gelijkmatig over het oppervlak verdeeld en vastgehouden. Omdat epoxy naadloos is, hoeft u ook geen rekening te houden met dilatatievoegen die bij tegels vaak voor problemen zorgen in combinatie met de uitzetting van vloerverwarming."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-black/10 pb-8">
                      <h4 className="font-bold text-xl mb-4 flex items-start gap-4">
                        <span className="text-epoxy-accent shrink-0">Q.</span>
                        {faq.q}
                      </h4>
                      <p className="text-black/60 pl-8 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-gray-50 p-12 rounded-[3rem]">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight mb-8">Waarom Klasse Epoxy voor uw project?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-black text-epoxy-accent text-5xl">01</h4>
                    <h5 className="font-bold uppercase tracking-widest text-sm">Vakmanschap</h5>
                    <p className="text-xs leading-relaxed opacity-60 m-0">Onze applicateurs hebben jarenlange ervaring en passie voor het vak. Geen uitdaging is ons te groot.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-epoxy-accent text-5xl">02</h4>
                    <h5 className="font-bold uppercase tracking-widest text-sm">Topkwaliteit</h5>
                    <p className="text-xs leading-relaxed opacity-60 m-0">Wij werken alleen met A-merk harsen die we zelf hebben getest op duurzaamheid en kleurvastheid.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-epoxy-accent text-5xl">03</h4>
                    <h5 className="font-bold uppercase tracking-widest text-sm">Garantie</h5>
                    <p className="text-xs leading-relaxed opacity-60 m-0">Wij staan achter ons werk. Daarom krijgt u bij ons uitgebreide garanties op hechting en esthetiek.</p>
                  </div>
                </div>
              </section>

              <section className="border-t border-black/5 pt-12">
                <h3 className="text-3xl font-bold text-black uppercase tracking-tight mb-6">Conclusie</h3>
                <p>
                   De keuze voor <strong>{keyword.toLowerCase()}</strong> is een keuze voor de lange termijn. Of het nu gaat om de indrukwekkende technische specificaties, het ongekende onderhoudsgemak of de moderne uitstraling; epoxy is de vloer van de toekomst. Bij Klasse Epoxy begrijpen we dat u niet elke dag een nieuwe vloer koopt. Daarom nemen we de tijd om u te adviseren en samen met u de perfecte afwerking te kiezen.
                </p>
                <p>
                  Wilt u meer weten over de mogelijkheden van {keyword}? Neem vandaag nog contact met ons op voor een adviesgesprek op locatie of een vrijblijvende offerte. Onze experts staan klaar om van uw vloer een Klasse Epoxy vloer te maken.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="py-24 bg-epoxy-accent text-epoxy-black">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 uppercase">
              Start uw {keyword} project
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto font-medium">
              Ontvang vandaag nog een vrijblijvende offerte voor uw <strong>{keyword.toLowerCase()}</strong>.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="#contact" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-tighter hover:scale-105 transition-transform text-center">
                Offerte Aanvragen
              </a>
              <a href="tel:0752340037" className="border-2 border-black px-12 py-5 font-bold uppercase tracking-tighter hover:bg-black hover:text-white transition-all text-center">
                Bel direct: 0752340037
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
