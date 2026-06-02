// ── seed.js ────────────────────────────────────────────────────────────────
// Demo seed data for Scheda — Kingdom of Caid Class & Volunteer Registry
// Loaded by index.html and volunteer.html when IS_DEMO is true.
// All changes reset on page refresh. Safe to commit alongside app files.
// ──────────────────────────────────────────────────────────────────────────

// ── Events ─────────────────────────────────────────────────────────────────
// Canonical event list. Used by both the class module (dEv) and volunteer
// module (dVolEvents). Class fields: rooms, daySchedule, teacherMsg, etc.
// Volunteer fields: id (short key used by shifts), start/end (date strings).

const SEED_EVENTS = [
  {
    id: 'collegium2026',
    name: 'Collegium 2026',
    startDate: '2026-03-14', endDate: '2026-03-14',
    start: '2026-03-14', end: '2026-03-14',
    rooms: ['Society Skills Rm 1','Society Skills Rm 2','Arts/History Rm 1','History Rm 2','Archery','Grab Bag Rm 1','Grab Bag Rm 2','Metal/Leather Rm','Grab Bag Rm 3','Cooking/Costuming','Dance (Gym)','Fiber Arts','Outdoor Shade','Field - Martial Class'],
    address: '', url: '', active: true, published: true,
    location: ''
  },
  {
    id: 'crescent2026',
    name: 'Crescent Artisan 2026',
    startDate: '2026-06-06', endDate: '2026-06-06',
    start: '2026-06-06', end: '2026-06-06',
    rooms: ['Great Hall','Craft Room','Fiber Room','Library'],
    address: 'El Camino Real Charter High School North Campus, 7401 Shoup Ave, West Hills, CA 91307',
    url: 'http://places.sca-caid.org/caid/', active: true, published: true,
    location: 'West Hills, CA'
  },
  {
    id: 'gww2026',
    name: 'Great Western War 2026',
    startDate: '2026-11-05', endDate: '2026-11-08',
    start: '2026-11-05', end: '2026-11-08',
    rooms: ['A&S Tent','List Field','Archery Range','Bardic Circle'],
    address: '13601 Ironbark Rd, Taft, CA 93268',
    directionsUrl: 'https://maps.app.goo.gl/q5vkkRntXNkHh5Jr8',
    url: 'https://places.sca-caid.org/gww/', active: true, published: true,
    location: 'Taft, CA',
    daySchedule: [
      {date:'2026-11-05',start:'09:00',end:'18:00'},
      {date:'2026-11-06',start:'09:00',end:'18:00'},
      {date:'2026-11-07',start:'09:00',end:'18:00'},
      {date:'2026-11-08',start:'09:00',end:'14:00'}
    ],
    teacherMsg: 'Thank you for volunteering to teach at Great Western War 2026! 🎉\n\nSubmissions are due by October 1st. If you need to cancel or make changes after submitting, please contact the A\u0026S officer directly.\n\nQuestions? Reach out to the class coordinator at as@sca-caid.org.'
  }
];

// Shaped for index.html (dEv): name-keyed, no id needed
const dEv = SEED_EVENTS.map(({name, startDate, endDate, rooms, address, directionsUrl, url, active, published, daySchedule, teacherMsg}) =>
  ({name, startDate, endDate, rooms: rooms||[], address: address||'', directionsUrl, url: url||'', active, published, daySchedule, teacherMsg})
);

// Shaped for volunteer.html (dVolEvents): id-keyed, start/end shorthand
const dVolEvents = SEED_EVENTS.map(({id, name, start, end, location}) =>
  ({id, name, start, end, location: location||''})
);

// ── Classes ────────────────────────────────────────────────────────────────
const SEED_CLASSES=[
  // ── Collegium 2026 — March 14, 2026 ──
  {id:'1',title:`Ottoman Garb Basics`,teacher:`Rayhana bint Estafanos al-Ábbas`,email:'rayhana@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Costuming',event:'Collegium 2026',room:`Cooking/Costuming`,level:'Beginner',audience:'newcomer-friendly',desc:`This class walks through the basics of period-appropriate mid-16th century Ottoman clothing, with practical guidance on layers, silhouettes, and accessible starting points for creating garb suitable for the Perfectly Period Ottoman Feast in August.`,bring:`N/A`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Rayhana has been researching and recreating Ottoman and Eastern Mediterranean garb for a decade. Her persona is set in 16th-century Istanbul and she documents her work extensively.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'2',title:`Bransles: Easy 16th Century French Dance`,teacherTitle:'Baroness',teacher:`Delphine de Montallieu`,email:'delphine@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,level:'Beginner',audience:'newcomer-friendly',desc:`Can you step back and forth? You can do a Bransle! This class will cover the four Bransles that will be on the dance set for the ball at Muse's Masque. Come with comfortable shoes and water to drink.`,bring:`Comfortable shoes and water to drink`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Baroness Delphine has been dancing and teaching period dance in the SCA for over twelve years, specializing in 15th and 16th century French and Italian forms.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'3',title:`Block Printed Napkins: Experimenting with Different Materials`,teacherTitle:'THLady',teacher:`Rosie Black Rune`,email:'rosie@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Fiber Arts`,desc:`We will be block printing on linen napkins with three different types of blocks — wooden, linoleum, and 3D printed — to explore how different composite blocks affect the print on linen. Bring any item you'd like to experiment on!`,bring:`Any item you wish to experiment on (optional)`,fee:'',zoomLink:'',max:null,prereqs:'None needed',bio:`THLady Rosie Black Rune is an experienced fiber arts and textile printing instructor with a focus on pre-modern printing techniques.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'4',title:`Persona Development for the Beginner`,teacherTitle:'Kyr',teacher:`Yaroslav the Persistent`,email:'yaroslav@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 2`,level:'Beginner',audience:'newcomer-friendly',desc:`How to take the first steps in developing your SCA persona. Whether you have no idea where to start or just want to refine what you have, this class will help you build a persona that feels real and inspires your SCA journey.`,bring:`Nothing — handouts provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Kyr Yaroslav the Persistent has been active in the SCA for many years and enjoys helping newcomers find their footing in the Society.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'5',title:`Big Project Management`,teacherTitle:'Dame',teacher:`Richenda Elizabeth Coffin`,email:'richenda@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Arts & Sciences Competition Preparation',event:'Collegium 2026',room:`Arts/History Rm 1`,desc:`Ever wonder why your huge projects never actually get done? Come discuss strategies and tips for actually getting that dream across the finish line. Bring your ideas for big projects.`,bring:`Note-taking materials, ideas for big projects`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Dame Richenda Elizabeth Coffin is a Pentathlon and inter-kingdom competition winner with extensive experience coaching SCA artisans through large, complex projects.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'6',title:`Musicology of Western Chant`,teacher:`Frida Hrosskætilsdottir`,email:'frida@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Collegium 2026',room:`History Rm 2`,desc:`Recent studies of medieval music treatises have found new information on how chant was sung. This class will introduce relevant topics in music theory, explore what the treatises say about style and ornaments, and discuss the history of how our modern view of medieval chant evolved.`,bring:`Note-taking materials`,fee:'',zoomLink:'',max:null,prereqs:'No prerequisite',bio:`Frida Hrosskætilsdottir is a musician and researcher specializing in medieval vocal music and the history of chant performance practice.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'7',title:`History and Making of a Rope Sling`,teacher:`Gideon the Genuine`,email:'gideon@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Archery',event:'Collegium 2026',room:`Archery`,desc:`Learn about the history of rope slings, their development, and their impact on medieval warfare — then make one to take home. All materials provided.`,bring:`Nothing — handouts, rope, and tennis balls provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Gideon the Genuine has been shooting and teaching archery in the SCA for eighteen years. He brings a background in physics to his teaching and holds multiple Royal Round records.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'8',title:`Learn Beginning Leather Tooling`,teacherTitle:'Baroness',teacher:`Amabel Radleigh`,email:'amabel@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Collegium 2026',room:`Metal/Leather Rm`,level:'Beginner',audience:'newcomer-friendly',desc:`Students will transfer and tool a Celtic knot onto a piece of leather, finish the edges, and sew the corners up to create a usable take-home valet/catch-all tray. $10 class material fee covers all supplies including leather, thread, and tools.`,bring:`Nothing — all tools and materials provided`,fee:'$10 materials',zoomLink:'',max:null,prereqs:'None',bio:`Baroness Amabel Radleigh is an experienced leatherworker who teaches traditional tooling and stitching techniques at events throughout Caid.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'9',title:`Field Heraldry for Demos`,teacherTitle:'Maistreas',teacher:`Brig inghean Uatéìr`,email:'brig@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Heraldry',event:'Collegium 2026',room:`Grab Bag Rm 1`,audience:'newcomer-friendly',desc:`In addition to basic field heraldry, this class will focus on tips for heralding at a demo. Heralds make great chatelaines. Bring your voice and a curious mind!`,bring:`A voice and a curious mind`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Maistreas Brig inghean Uatéìr is an experienced herald who has called at demos, tournaments, and courts across the kingdom.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'10',title:`Exchequer — How to Prepare for and Run Gate`,teacherTitle:'Mistress',teacher:`Cara Michelle DuValier`,email:'cara@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Grab Bag Rm 3`,desc:`This class covers all the steps to prepare to manage the gate table at events. Mainly geared for existing branch Exchequers, but volunteers who want to help are welcome. No prerequisites — all volunteers are appreciated.`,bring:`Note-taking materials`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Mistress Cara Michelle DuValier is a long-serving exchequer in Caid with extensive experience managing event finances and training gate volunteers.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'11',title:`Tips and Tricks for Doing Well in Competitions`,teacherTitle:'Dame',teacher:`Richenda Elizabeth Coffin`,email:'richenda@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'Arts & Sciences Competition Preparation',event:'Collegium 2026',room:`Arts/History Rm 1`,desc:`Come learn from a Pentathlon and inter-kingdom competition winner how to make the rules and rubrics work for you, not against you. Practical strategies for documentation, presentation, and judging.`,bring:`Nothing — handouts provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Dame Richenda Elizabeth Coffin is a Pentathlon and inter-kingdom competition winner with extensive experience coaching SCA artisans.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'12',title:`A Medieval Broderer in London`,teacherTitle:'HL',teacher:`Jerusha a'Laon`,email:'jerusha@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`History Rm 2`,desc:`Embroidery was not just an idle pastime for noble ladies — it was an industry with rules and regulations. This lecture-style class covers the known information about the profession of Embroiderer, focusing on London.`,bring:`Paper and pencil for notes`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`HL Jerusha a'Laon is a scholar of medieval textile history with a particular focus on embroidery as a commercial trade in medieval English cities.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'13',title:`How Manuscripts Were Made`,teacherTitle:'',teacher:`Bruce Draconarius of Mistholme`,email:'bruce@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`Grab Bag Rm 1`,audience:'newcomer-friendly',desc:`What were the steps medieval scribes took to turn parchment into a book? A brief overview of the history of manuscripts, how the process changed to suit its customer base, and why most modern books are taller than they are wide.`,bring:`Note-taking materials as desired`,fee:'',zoomLink:'',max:null,prereqs:'No experience needed',bio:`Bruce Draconarius of Mistholme is a long-time scribe and calligrapher who teaches manuscript history and calligraphy across the SCA.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'14',title:`How to Survive a CoH Garden Meeting`,teacherTitle:'Lord',teacher:`Séamus mac Néill Uí Chonchobhair`,email:'seamus@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'Heraldry',event:'Collegium 2026',room:`Grab Bag Rm 2`,audience:'newcomer-friendly',desc:`Introduces new heralds to what happens at Garden meetings and how they fit into the submissions process. Practical guidance on how to follow discussions, participate with confidence, and contribute meaningfully — even without deep technical knowledge.`,bring:`Pencil and paper for notes`,fee:'',zoomLink:'',max:null,prereqs:'A willingness to learn',bio:`Lord Séamus mac Néill Uí Chonchobhair is a consulting herald in Caid who enjoys making the College of Heralds accessible to newcomers.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'15',title:`Italian Dance for Beginners`,teacherTitle:'Baroness',teacher:`Delphine de Montallieu`,email:'delphine@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,level:'Beginner',audience:'newcomer-friendly',desc:`Come learn some 15th and 16th century Italian dances — either in preparation for the ball at Muse's Masque, or just to have fun! No experience required.`,bring:`Comfortable shoes, water to drink`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Baroness Delphine de Montallieu has been dancing and teaching period dance in the SCA for over twelve years.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'16',title:`Weave a Napkin (or Towel)`,teacherTitle:'Magistra',teacher:`Astra Christiana Benedict`,email:'astra@example.com',date:'2026-03-14',time:'09:00',duration:60,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Outdoor Shade`,desc:`Experience the joy of creating fabric by weaving your own napkin or towel in this one-on-one class. One-hour slots are available throughout the day. Pre-warped loom and all yarn provided. Sign up for your time slot in advance.`,bring:`Nothing — pre-warped loom and yarn provided`,fee:'',zoomLink:'',max:1,prereqs:'None',bio:`Magistra Astra Christiana Benedict and Duchess Bridget Lucia MacKenzie offer this ongoing one-on-one weaving class throughout the day at Collegium.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'17',title:`Exchequer 101`,teacherTitle:'Baron',teacher:`Tomaso da Barbiano`,email:'tomaso@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 1`,level:'Beginner',audience:'newcomer-friendly',desc:`An introduction to the exchequer's office. This class is for those looking to assume the office or anyone wanting to know more about how SCA branch finances work. No prerequisites required.`,bring:`Nothing — handouts provided`,fee:'',zoomLink:'',max:null,prereqs:'No prerequisites',bio:`Baron Tomaso da Barbiano has served as an exchequer at multiple levels of Caid's organization and enjoys teaching financial administration to new officers.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'18',title:`History of Textile Printing Across the World`,teacherTitle:'THLady',teacher:`Rosie Black Rune`,email:'rosie@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`Arts/History Rm 1`,desc:`A journey across the world to explore the different types of textile printing that existed before 1650, with examples of how certain places are still printing fabrics in these traditional methods today.`,bring:`Your favorite notebook`,fee:'',zoomLink:'',max:null,prereqs:'N/A',bio:`THLady Rosie Black Rune teaches both the history and practice of textile printing, drawing on a wide range of global traditions.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'19',title:`Calligraphy 101`,teacher:`Bruce Draconarius of Mistholme`,email:'bruce@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Scribal Arts',event:'Collegium 2026',room:`Grab Bag Rm 1`,level:'Beginner',audience:'newcomer-friendly',desc:`An introduction to basic medieval calligraphy. Students will learn pen strokes and the ductus for two of the more popular medieval hands (possibly more as time permits). Loaner pens and ink available.`,bring:`Paper; pencil; see-through ruler. Students encouraged to bring their own calligraphic pen/ink.`,fee:'',zoomLink:'',max:null,prereqs:'No experience needed',bio:`Bruce Draconarius of Mistholme is a long-time scribe and calligrapher who teaches manuscript history and calligraphy across the SCA.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'20',title:`Armory 101: How to Create Armory for the SCA`,teacherTitle:'Lord',teacher:`Séamus mac Néill Uí Chonchobhair`,email:'seamus@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Heraldry',event:'Collegium 2026',room:`Grab Bag Rm 2`,audience:'newcomer-friendly',desc:`Have Their Majesties commanded you to consult with their heralds to determine suitable arms, but the process sounds daunting? Learn the basic rules for SCA armory (and how to break them if you want), and where to find period examples for comparison.`,bring:`Ideas!`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Lord Séamus mac Néill Uí Chonchobhair is a consulting herald in Caid with a love of the more unusual corners of the heraldic tradition.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'21',title:`Arrow Making Workshop`,teacherTitle:'THLord',teacher:`Merlin Wynn`,email:'merlin@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Archery',event:'Collegium 2026',room:`Archery`,desc:`In this workshop you will learn to prepare shafts and fully assemble arrows for use in the Target Archery Open Handbow Division within the SCA. All materials provided.`,bring:`Nothing — all materials provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THLord Merlin Wynn is an experienced SCA archer and arrowsmith who has been teaching arrow-making at events for many years.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'22',title:`Beginning Metal Thread Embroidery / Making a Change Purse`,teacherTitle:'Comptesse',teacher:`Albra Katrine Marie Isabel Bautiste`,email:'albra@example.com',date:'2026-03-14',time:'11:00',duration:90,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Fiber Arts`,desc:`Students will learn 3 basic metal thread embroidery stitches, the difference between laid and passing metal threads, and general tips for handling metal threads — all while creating a little change purse to take home.`,bring:`A 6" round embroidery hoop; small scissors for clipping metal threads only; needle threader`,fee:'',zoomLink:'',max:null,prereqs:'Some embroidery skills helpful but not required',bio:`Comptesse Albra Katrine Marie Isabel Bautiste is an accomplished embroiderer who specializes in metal thread work and period textile arts.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'23',title:`The Care and Maintenance of Blades/Swords`,teacherTitle:'THL',teacher:`Paul Stoddard`,email:'paul@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Collegium 2026',room:`Metal/Leather Rm`,desc:`An introductory course on how to maintain and clean swords and blades — a hybrid of lecture and hands-on learning. So you've hit vendor's row and purchased a sword. How do you keep it looking good over time?`,bring:`The sword and/or blade you wish to have cleaned`,fee:'',zoomLink:'',max:null,prereqs:'A desire to learn',bio:`THL Paul Stoddard is a martial artist and weapons enthusiast who teaches blade care and maintenance at SCA events throughout Caid.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'24',title:`English Country Dance for the Masque`,teacherTitle:'Coune',teacher:`Brocc of Alderden`,email:'brocc@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,desc:`Beginning and intermediate English Country dances that will be done at the Masque on August 29 will be taught. The class will be tailored to the skill level of the attendees.`,bring:`N/A`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Coune Brocc of Alderden is an experienced dance teacher and caller who specializes in English Country Dance and its use in SCA ball settings.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'25',title:`Beginning Using a Sewing Machine You Can't Break`,teacher:`Alia la rousse`,email:'alia@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Costuming',event:'Collegium 2026',room:`Grab Bag Rm 3`,level:'Beginner',audience:'newcomer-friendly',desc:`This class is for people who know nothing about how to work a sewing machine. Instruction will be very basic, and everyone will get to try using the unbreakable sewing machine. You'll leave with a small drawstring bag you made yourself.`,bring:`Clean hands; no food or beverages`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Alia la rousse teaches introductory sewing and period fabric arts, making textile skills accessible to complete beginners.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'26',title:`Curing Bacon 101`,teacherTitle:'Master',teacher:`Guy Rand Gallandon`,email:'guy@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Cooking & Brewing',event:'Collegium 2026',room:`Cooking/Costuming`,desc:`Learn how to cure, flavor, and make your own bacon. Handouts will be provided.`,bring:`Nothing — handouts provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Master Guy Rand Gallandon has been experimenting with period and period-inspired food preservation for many years, with a particular love of cured meats.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'27',title:`Winter Weekend 101`,teacherTitle:'Sir',teacher:`Robear Du Bois`,email:'robear@example.com',date:'2026-03-14',time:'12:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 1`,audience:'newcomer-friendly',desc:`A brief history of Winter Weekend: how it began and how it has evolved. Where and when it takes place, what facilities the camp provides, what activities are available, what to bring, how the cooking and kitchen-sharing work, and how to make reservations. Robear was the original event steward and has attended since it began.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Sir Robear Du Bois was the original event steward for Winter Weekend and has attended the event since its founding.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'28',title:`When Good Gentles Falter: Practicing Grace in Our Society`,teacherTitle:'Lady',teacher:`Ren Shu`,email:'ren@example.com',date:'2026-03-14',time:'12:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 2`,desc:`This roundtable invites participants to reflect on how offering grace to ourselves and others can help sustain strong relationships when emotions run high or mistakes occur. We'll explore ways to respond to conflict and miscommunication with patience and empathy.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Lady Ren Shu is a thoughtful community member who facilitates discussions on interpersonal dynamics and conflict resolution within the SCA.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'29',title:`The Beauty of Parsi: A Brief Introduction to the Persian Language`,teacherTitle:'Noble',teacher:`Azar Parsa`,email:'azar@example.com',date:'2026-03-14',time:'12:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`History Rm 2`,desc:`A brief introduction to Parsi through poetry. Handouts and materials included.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Noble Azar Parsa is a scholar of Persian language and culture whose persona is rooted in the medieval Iranian world.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'30',title:`Simple Iron Gall Ink`,teacher:`Fiachra an Doire`,email:'fiachra@example.com',date:'2026-03-14',time:'12:00',duration:60,format:'in-person',topic:'Scribal Arts',event:'Collegium 2026',room:`Grab Bag Rm 2`,audience:'newcomer-friendly',desc:`Learn to make an easy, simple, and effective iron gall ink based on a late 14th or early 15th century English recipe. A handout and ink sample will be provided to take home.`,bring:`Nothing — handout and ink sample provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Fiachra an Doire is a scribe and calligrapher with a particular interest in medieval ink recipes and writing materials. He has been recreating period inks for over eight years.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'31',title:`Brewers' Exploration of Microbes`,teacherTitle:'Duena',teacher:`Tsura Romani`,email:'tsura@example.com',date:'2026-03-14',time:'12:00',duration:60,format:'in-person',topic:'Cooking & Brewing',event:'Collegium 2026',room:`Metal/Leather Rm`,desc:`Explore the differences in safely fermentable microbiomes in a tasty adventure. Handouts and samples will be available. If you have fermented items to share, please bring them along with a list of ingredients.`,bring:`Appropriate fermented items to share (optional); list of ingredients for any shareable items`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Duena Tsura Romani is a brewer and fermentation enthusiast who teaches the science and history of fermented beverages in the SCA.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'32',title:`SCA Photography Basics`,teacherTitle:'THLord',teacher:`Suleiman ibn Rawh`,email:'suleiman@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 1`,audience:'newcomer-friendly',desc:`Basic concepts and tips for capturing moments in a historical reenactment group, and how to use your camera (or phone) effectively. Bring your camera or phone if you can.`,bring:`Your camera or phone (whichever type)`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THLord Suleiman ibn Rawh is an SCA photographer who specializes in documenting events in ways that highlight the historical authenticity and community spirit of the Society.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'33',title:`1500s Printing`,teacher:`Fadi AlQahiri`,email:'fadi@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`Arts/History Rm 1`,audience:'newcomer-friendly',desc:`Learn how to print a picture using 16th-century techniques from a metal plate using ink and a rolling press. Each student will leave with a print they made themselves.`,bring:`Interest in learning`,fee:'',zoomLink:'',max:null,prereqs:'None needed',bio:`Fadi AlQahiri is a printmaker and historical arts enthusiast who specializes in early print culture and the history of image reproduction.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'34',title:`Bardic 101`,teacherTitle:'Master',teacher:`True Thomas Whitehart`,email:'truethomas@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Collegium 2026',room:`Grab Bag Rm 2`,audience:'newcomer-friendly',desc:`An overview of the various types of bardic and performance arts in the SCA, including major performance opportunities, basic etiquette for both performers and audience, and resources for newer performers.`,bring:`Notebook and writing implement; ears to listen and mouths to speak, sing, and laugh`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Master True Thomas Whitehart is a seasoned SCA bard with decades of experience performing and teaching at events throughout the known world.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'35',title:`Late Period Welted Shoes — Design`,teacher:`Todde mac Donnell`,email:'todde@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Collegium 2026',room:`Metal/Leather Rm`,desc:`A demonstration of patterning and last-making for welted latchet shoes common from 1570 to 1620. Welted shoes are double-soled, double-seamed shoes built right-side out on the last. Students may have time to work on foot tracings.`,bring:`Measuring tape (helpful)`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Todde mac Donnell is a cobbler specializing in late-period shoe construction who teaches both design and construction of historical footwear.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'36',title:`How to Wrap Your Head`,teacherTitle:'HL',teacher:`Jerusha a'Laon`,email:'jerusha@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Costuming',event:'Collegium 2026',room:`Cooking/Costuming`,audience:'newcomer-friendly',desc:`This class goes over different methods of wrapping your head using scarves and kerchiefs. The instructor will demonstrate various techniques and will have additional supplies for students to practice with.`,bring:`Paper and pencil for notes`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`HL Jerusha a'Laon teaches both the history and practical skills of period headwear construction and draping techniques.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'37',title:`Processional Dance: Pavane and Almaine`,teacherTitle:'Magistra',teacher:`Adelaide de Beaumont`,email:'adelaide@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,audience:'newcomer-friendly',desc:`Let's walk with attitude! Some dances were all about looking and being looked at — and these dances are simple, mostly low-impact and sweat-free. Perfect for those new to period dance.`,bring:`Comfy shoes`,fee:'',zoomLink:'',max:null,prereqs:'None!',bio:`Magistra Adelaide de Beaumont is a dance teacher who specializes in processional and ceremonial dances of the 16th century.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'38',title:`Creating Cross Stitch Patterns`,teacherTitle:'THL',teacher:`Tracy the Gray`,email:'tracy@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Fiber Arts`,audience:'newcomer-friendly',desc:`Learn to turn SCA devices and other simple designs into cross stitch patterns using nothing but a pencil and graph paper. Examples and instructions will be given.`,bring:`Nothing — handouts and graph paper provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THL Tracy the Gray and Baroness Lynnette de Sandoval del Valle de los Unicornios teach needlework and pattern-making together at SCA events.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'39',title:`Serving on Court 101`,teacherTitle:'THL',teacher:`Kutaiba al-Azrak`,email:'kutaiba@example.com',date:'2026-03-14',time:'14:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 2`,audience:'newcomer-friendly',desc:`An introduction to duties and expectations once you've joined a court. What does a court herald do? A chamberlain? This class walks through the roles and how to perform them with grace.`,bring:`Note-taking supplies`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THL Kutaiba al-Azrak has served in and around royal and baronial courts in Caid for many years and enjoys teaching the protocols of court service.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'40',title:`How to Run Lists for Tournaments`,teacherTitle:'Mestresse',teacher:`Tezar of Aeolis`,email:'tezar@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 1`,desc:`A discussion of what it means to be a list person, your contribution to the martial forms, and how to run different types of tournaments. No previous experience required.`,bring:`Notetaking materials`,fee:'',zoomLink:'',max:null,prereqs:'No previous experience required',bio:`Mestresse Tezar of Aeolis is an experienced list mistress who has run tournaments at events throughout Caid and the West Kingdom.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'41',title:`Caid Choir Rehearsal`,teacher:`Lady Sadhbh inghean Duinn`,email:'sadhbh@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Collegium 2026',room:`Grab Bag Rm 2`,desc:`Come sing with us! We'll look through a few potential pieces for future performances. Sheet music will be provided.`,bring:`Nothing — sheet music provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Lady Sadhbh inghean Duinn directs the Caid Choir and teaches vocal performance in SCA contexts.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'42',title:`12th Century Herbal Hair Powder`,teacher:`Alienor Strongbow de Clare`,email:'alienorsc@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`History Rm 2`,desc:`This class explores the recipe for making a powder to perfume the hair from the 12th century, found in the Trotula manuscript. Handouts provided.`,bring:`Notebook`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Alienor Strongbow de Clare is a researcher of medieval medical and cosmetic texts, with a focus on the Trotula and related sources.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'43',title:`Hand Finishing Hems`,teacher:`Mary Dedwydd verch Gwallter`,email:'mary@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Fiber Arts`,audience:'newcomer-friendly',desc:`Learn two simple hand hem stitches for finishing napkins for PPF (or any other hem, honestly). Supplies will be provided. Great for beginners who want clean, professional-looking finishes.`,bring:`Nothing — needles and thread provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Mary Dedwydd verch Gwallter teaches both needlework and bardic arts. She is also known for her work in persona-based performance.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'44',title:`Arrow Dynamics: How Does an Arrow Shot Work?`,teacher:`Gideon the Genuine`,email:'gideon@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Archery',event:'Collegium 2026',room:`Archery`,desc:`This class covers the dynamics of what happens when an arrow is shot from a bow — how it is released, how it bends, and how it flies. Physics made accessible and engaging.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Gideon the Genuine has been shooting in the SCA for eighteen years and holds multiple Royal Round records. He brings a background in physics to his archery teaching.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'45',title:`Persian Court Dance`,teacher:`Faizeh al Zarqa`,email:'faizeh@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,desc:`In this class we will explore how to perform period Persian court dance. Water and note-taking implements recommended.`,bring:`Water, note-taking implements`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Faizeh al Zarqa is a dancer and researcher specializing in medieval Persian dance forms and their cultural context.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'46',title:`The World of the Scythians`,teacherTitle:'Mistress',teacher:`Sibylla de Haze`,email:'sibylla@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'History',event:'Collegium 2026',room:`Arts/History Rm 1`,desc:`A deep dive into the material world of the Scythians — their lives, culture, and stunning material culture. Lecture-based with handouts.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Mistress Sibylla de Haze is a scholar of ancient and early medieval steppe cultures, with a focus on Scythian and related peoples.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'47',title:`Electronic Payment (PayPal) Authorized User Training`,teacherTitle:'Mistress',teacher:`Cara Michelle DuValier`,email:'cara@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Grab Bag Rm 1`,desc:`This training will allow students to volunteer to accept electronic payments at Caidan SCA events. Students must be SCA members in good standing and over 18 years old.`,bring:`Note-taking materials`,fee:'',zoomLink:'',max:null,prereqs:'SCA membership in good standing; must be 18+',audience:'adults-only',bio:`Mistress Cara Michelle DuValier is a long-serving exchequer who has trained many Caidan event volunteers in electronic payment processing.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'48',title:`Late Period Welted Shoes — Construction`,teacher:`Todde mac Donnell`,email:'todde@example.com',date:'2026-03-14',time:'16:00',duration:120,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Collegium 2026',room:`Metal/Leather Rm`,desc:`A demonstration of building the upper, lasting, and seaming a double-soled latchet shoe, done "cooking show" style to demonstrate key steps. Students will practice sewing seams but not build their own shoes. Please take the Design class first.`,bring:`Nothing — handout provided`,fee:'',zoomLink:'',max:null,prereqs:'Please take the Design class first',bio:`Todde mac Donnell is a cobbler specializing in late-period shoe construction who teaches both design and construction of historical footwear.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'49',title:`Dining Etiquette in the Ottoman Empire`,teacherTitle:'Maestra',teacher:`Elisheva bat Yisrael`,email:'elisheva@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Cooking & Brewing',event:'Collegium 2026',room:`Cooking/Costuming`,desc:`In preparation for PPF: Ottoman, we are reviewing expected dining etiquette generally in the Muslim world in our period, and specifically in the Ottoman Empire, with particular attention to in-period commentary on the Turks.`,bring:`Personal note-taking materials if desired`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Maestra Elisheva bat Yisrael is a scholar of Ottoman and Islamic material culture who teaches both dining history and period dance.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'50',title:`Dances of the Medieval Ottomans`,teacherTitle:'Maestra',teacher:`Elisheva bat Yisrael`,email:'elisheva@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Dance (Gym)`,desc:`An overview lecture of various dances from religious to entertainment used during the medieval Ottoman era, with opportunities to try some of the basic forms.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Maestra Elisheva bat Yisrael is a scholar of Ottoman and Islamic material culture who teaches both dining history and period dance.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'51',title:`Thread Woven Buttons`,teacher:`Rayhana bint Estafanos al-Ábbas`,email:'rayhana@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Fiber Arts & Needlework',event:'Collegium 2026',room:`Fiber Arts`,desc:`Learn to create thread-covered wooden buttons common in 16th-century tailoring. Students practice wrapping and stitching techniques on wooden bead cores. Includes a kit to complete a full set.`,bring:`Nothing — practice buttons for class and a kit to make 12 provided, plus handout`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Rayhana has been researching and recreating Ottoman and Eastern Mediterranean garb for a decade. Her persona is set in 16th-century Istanbul.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'52',title:`Developing a Persona-Based Performance`,teacher:`Mary Dedwydd verch Gwallter`,email:'mary@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Collegium 2026',room:`Field - Martial Class`,desc:`A seldom-explored option for a bardic performance set is to perform as your period self. This class introduces persona-based performance, covering useful approaches to creating a unique historically informed performance.`,bring:`Ideas and a willingness to play a bit`,fee:'',zoomLink:'',max:null,prereqs:'Some idea of your SCA persona and their where, when, and what',bio:`Mary Dedwydd verch Gwallter teaches both needlework and bardic arts, with a particular love of persona-driven performance.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'53',title:`Movement for Hip & Lower Body Flexibility`,teacherTitle:'Maestra',teacher:`Elisheva bat Yisrael`,email:'elisheva@example.com',date:'2026-03-14',time:'10:00',duration:60,format:'in-person',topic:'Dance',event:'Collegium 2026',room:`Field - Martial Class`,desc:`A yoga-like routine focusing on flexibility for the hip and lower body, enabling easier sitting on the floor, getting up and down, supporting lunge movements, and preventing injury. Easily modifiable for all levels, though some familiarity with yoga poses will help.`,bring:`Yoga mat or towel/blanket large enough to lay on`,fee:'',zoomLink:'',max:null,prereqs:'None — some yoga familiarity helpful',bio:`Maestra Elisheva bat Yisrael brings her knowledge of period movement and body mechanics to this practical flexibility class.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'54',title:`Closing the Distance`,teacher:`Galien Crow`,email:'galien@example.com',date:'2026-03-14',time:'11:00',duration:60,format:'in-person',topic:'Combat - Rapier',event:'Collegium 2026',room:`Field - Martial Class`,audience:'adults-only',desc:`A hands-on, practical lesson on ways to enter your opponent's range and strike them without dying, while getting the most out of your lunges. Strong physical component — be prepared to practice movements that may be taxing on unused muscles.`,bring:`Rapier gear: swords, masks, armor, and gorget`,fee:'',zoomLink:'',max:null,prereqs:'Rapier gear required',bio:`Galien Crow is an experienced rapier fighter who focuses on practical footwork and distance management in SCA rapier combat.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'55',title:`Female-Identifying Fighters Forum`,teacherTitle:'THL',teacher:`Livith filia Organae`,email:'livith@example.com',date:'2026-03-14',time:'15:00',duration:60,format:'in-person',topic:'Combat - Rapier',event:'Collegium 2026',room:`Society Skills Rm 2`,audience:'adults-only',desc:`A safe space for female-identifying fighters to discuss common challenges and brainstorm potential solutions to benefit our community. Bring a willingness to discuss difficult or taboo topics with a resolution-oriented mindset.`,bring:`A willingness to discuss difficult and/or taboo topics`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THL Livith filia Organae is a fighter and community advocate who creates space for underrepresented voices in the SCA martial community.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'56',title:`Massage Technique`,teacherTitle:'Duena',teacher:`Tsura Romani`,email:'tsura@example.com',date:'2026-03-14',time:'16:00',duration:60,format:'in-person',topic:'Society Skills',event:'Collegium 2026',room:`Society Skills Rm 2`,audience:'adults-only',desc:`A beginner's introduction to western massage. An additional waiver is required. Guardian presence required for minors.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'Additional waiver required',bio:`Duena Tsura Romani teaches massage technique alongside her work in brewing and fermentation.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  // ── Great Western War 2026 ──
  {id:'60',title:`Dyeing with Natural Pigments`,teacher:`Sorcha inghean Uí Fhaoláin`,email:'sorcha@example.com',date:'2026-11-05',time:'10:00',duration:90,format:'in-person',topic:'Fiber Arts & Needlework',event:'Great Western War 2026',room:`A&S Tent`,desc:`An introduction to natural dyeing using madder, weld, and woad. We'll discuss mordanting, color modifiers, and period dye recipes. Hands-on dyeing of small wool samples included.`,bring:`Old clothes you don't mind staining.`,fee:'$4 materials',zoomLink:'',max:14,prereqs:'',bio:`Mistress Sorcha is a Pelican with twenty years of experience in natural dyeing and fiber arts.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Margery la Rousse','Finn Eriksson','Aelric of Thornwood','Ingrid Halfdansdottir','Rosamund of the Dales','Wulfric the Wanderer'],waitlistRoster:[]},
  {id:'60b',title:`History and Making of a Rope Sling`,teacher:`Gideon the Genuine`,email:'gideon@example.com',date:'2026-11-05',time:'10:00',duration:60,format:'in-person',topic:'Archery',event:'Great Western War 2026',room:`Archery Range`,desc:`Learn about the history of rope slings, their development and impact, and make one to take home. Handouts, rope, and tennis balls provided.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Gideon the Genuine has been shooting and teaching archery in the SCA for eighteen years.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Thomas of Ely','Dmitri Volkonsky','Leofric the Just','Yusuf al-Rashid'],waitlistRoster:[]},
  {id:'60c',title:`Bardic 101`,teacherTitle:'Master',teacher:`True Thomas Whitehart`,email:'truethomas@example.com',date:'2026-11-05',time:'10:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Great Western War 2026',room:`Bardic Circle`,audience:'newcomer-friendly',desc:`An overview of the various types of bardic and performance arts in the SCA, including major performance opportunities, basic etiquette for performers and audience, and resources for newer performers.`,bring:`Notebook and writing implement`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Master True Thomas Whitehart is a seasoned SCA bard with decades of experience performing and teaching.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Cecilia de Montfort','Elspeth of Dunbar','Sigrid Bjornsdottir','Constance of Hartwood','Isabeau de Montpellier'],waitlistRoster:[]},
  {id:'61',title:`Reading a Medieval Recipe`,teacher:`Gwenllian ferch Caradog`,email:'gwenllian@example.com',date:'2026-11-05',time:'13:00',duration:60,format:'in-person',topic:'Cooking & Brewing',event:'Great Western War 2026',room:`A&S Tent`,level:'Beginner',audience:'newcomer-friendly',desc:`How do you turn a cryptic 14th-century recipe into something you can actually cook? This class walks through the redaction process step by step, with examples from multiple sources.`,bring:`Nothing needed.`,fee:'',zoomLink:'',max:null,prereqs:'',bio:`Mistress Gwenllian is a Pelican whose passion is 14th-century English cookery.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Margery la Rousse','Finn Eriksson','Aelric of Thornwood','Ingrid Halfdansdottir','Rosamund of the Dales','Wulfric the Wanderer'],waitlistRoster:[]},
  {id:'61b',title:`Arrow Making Workshop`,teacherTitle:'THLord',teacher:`Merlin Wynn`,email:'merlin@example.com',date:'2026-11-05',time:'13:00',duration:60,format:'in-person',topic:'Archery',event:'Great Western War 2026',room:`Archery Range`,desc:`Learn to prepare shafts and fully assemble arrows for use in the SCA Target Archery Open Handbow Division. All materials provided.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`THLord Merlin Wynn is an experienced SCA archer and arrowsmith.`,imageUrl:'',registrationCount:3,waitlistCount:0,roster:['Leofric the Just','Dmitri Volkonsky','Yusuf al-Rashid'],waitlistRoster:[]},
  {id:'61c',title:`Musicology of Western Chant`,teacher:`Frida Hrosskætilsdottir`,email:'frida@example.com',date:'2026-11-05',time:'13:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Great Western War 2026',room:`Bardic Circle`,desc:`Recent studies of medieval music treatises have found new information on how chant was sung. Covers music theory, treatise commentary on style and ornaments, and how our modern view of medieval chant evolved.`,bring:`Note-taking materials`,fee:'',zoomLink:'',max:null,prereqs:'No prerequisite',bio:`Frida Hrosskætilsdottir is a musician and researcher specializing in medieval vocal music.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Cecilia de Montfort','Elspeth of Dunbar','Thomas of Ely','Constance of Hartwood'],waitlistRoster:[]},
  {id:'62',title:`Sprang: The Lost Textile Art`,teacher:`Aelswith of Mercia`,email:'aelswith@example.com',date:'2026-11-06',time:'10:00',duration:120,format:'in-person',topic:'Fiber Arts & Needlework',event:'Great Western War 2026',room:`A&S Tent`,desc:`Sprang is an ancient textile technique that predates knitting by millennia — elastic, strong, and used across medieval Europe. This class introduces the basic structure and gets students started on a small piece.`,bring:`Nothing — frames and thread provided.`,fee:'$5 materials',zoomLink:'',max:10,prereqs:'',bio:`Lady Aelswith has been tablet weaving for twelve years and particularly enjoys early medieval Scandinavian and Anglo-Saxon patterns.`,imageUrl:'',registrationCount:10,waitlistCount:2,roster:['Sigrid Bjornsdottir','Cecilia de Montfort','Elspeth of Dunbar','Leofric the Just','Constance of Hartwood','Yusuf al-Rashid','Thomas of Ely','Dmitri Volkonsky','Isabeau de Montpellier','Margery la Rousse'],waitlistRoster:[{pos:1,name:'Finn Eriksson'},{pos:2,name:'Wulfric the Wanderer'}]},
  {id:'62b',title:`Arrow Dynamics: How Does an Arrow Shot Work?`,teacher:`Gideon the Genuine`,email:'gideon@example.com',date:'2026-11-06',time:'10:00',duration:60,format:'in-person',topic:'Archery',event:'Great Western War 2026',room:`Archery Range`,desc:`This class covers the dynamics of what happens when an arrow is shot from a bow — release, flex, and flight. Physics made accessible and engaging.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Gideon the Genuine has been shooting in the SCA for eighteen years and holds multiple Royal Round records.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Aelric of Thornwood','Rosamund of the Dales','Ingrid Halfdansdottir','Wulfric the Wanderer','Finn Eriksson'],waitlistRoster:[]},
  {id:'62c',title:`Havamal: Introduction and Discussion`,teacher:`Hallr brjost Starsson`,email:'hallr@example.com',date:'2026-11-06',time:'10:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Great Western War 2026',room:`Bardic Circle`,desc:`A discussion of the collection of Old Norse maxims and words of advice. We'll discuss the poems' content, context, and what they tell us about Norse values and worldview.`,bring:`A willingness to participate in discussion`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Hallr brjost Starsson is a researcher and enthusiast of Norse language, literature, and games.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Cecilia de Montfort','Elspeth of Dunbar','Leofric the Just','Dmitri Volkonsky','Yusuf al-Rashid','Constance of Hartwood'],waitlistRoster:[]},
  {id:'63',title:`Illuminating a Scroll: Full Workflow`,teacherTitle:'Mistress',teacher:`Alienor of Wakefield`,email:'alienor@example.com',date:'2026-11-06',time:'14:00',duration:90,format:'in-person',topic:'Scribal Arts',event:'Great Western War 2026',room:`A&S Tent`,level:'Intermediate',desc:`From blank vellum to finished scroll — this class covers layout, ruling, calligraphy placement, and illumination in sequence. We'll use a 13th-century English charter as our model.`,bring:`Small brush if you have one; all other supplies provided.`,fee:'$3 materials',zoomLink:'',max:10,prereqs:'',bio:`Mistress Alienor has been studying and teaching medieval manuscript illumination in the SCA for over fifteen years.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Aelric of Thornwood','Rosamund of the Dales','Ingrid Halfdansdottir','Wulfric the Wanderer','Elspeth of Dunbar','Finn Eriksson'],waitlistRoster:[]},
  {id:'63b',title:`Persona Development for the Beginner`,teacherTitle:'Kyr',teacher:`Yaroslav the Persistent`,email:'yaroslav@example.com',date:'2026-11-06',time:'14:00',duration:60,format:'in-person',topic:'Society Skills',event:'Great Western War 2026',room:`Bardic Circle`,audience:'newcomer-friendly',desc:`How to take the first steps in developing your SCA persona. Whether you have no idea where to start or just want to refine what you have, this class will help.`,bring:`Nothing — handouts provided`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Kyr Yaroslav the Persistent has been active in the SCA for many years and enjoys helping newcomers find their footing.`,imageUrl:'',registrationCount:7,waitlistCount:0,roster:['Sigrid Bjornsdottir','Cecilia de Montfort','Thomas of Ely','Dmitri Volkonsky','Yusuf al-Rashid','Constance of Hartwood','Isabeau de Montpellier'],waitlistRoster:[]},
  {id:'64',title:`Army of Caid Structure and Use`,teacher:`Methius le Vaux`,email:'methius@example.com',date:'2026-11-07',time:'14:00',duration:60,format:'in-person',topic:'Combat - Armored',event:'Great Western War 2026',room:`List Field`,desc:`Designed for members of the Caid Armored Melee community to learn the structure and use of commands and the abilities of the Army of Caid. Open to the general populace who wants to learn.`,bring:`Armor if wanting to participate in fighting.`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Methius le Vaux is an experienced melee fighter in Caid who teaches armored combat tactics and army structure.`,imageUrl:'',registrationCount:8,waitlistCount:0,roster:['Leofric the Just','Finn Eriksson','Dmitri Volkonsky','Wulfric the Wanderer','Thomas of Ely','Aelric of Thornwood','Sigrid Bjornsdottir','Yusuf al-Rashid'],waitlistRoster:[]},
  {id:'64b',title:`Simple Iron Gall Ink`,teacher:`Fiachra an Doire`,email:'fiachra@example.com',date:'2026-11-07',time:'10:00',duration:60,format:'in-person',topic:'Scribal Arts',event:'Great Western War 2026',room:`A&S Tent`,audience:'newcomer-friendly',desc:`Learn to make an easy, effective iron gall ink based on a late 14th or early 15th century English recipe. A handout and ink sample will be provided.`,bring:`Nothing`,fee:'',zoomLink:'',max:null,prereqs:'None',bio:`Fiachra an Doire is a scribe and calligrapher with a particular interest in medieval ink recipes.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Rosamund of the Dales','Ingrid Halfdansdottir','Elspeth of Dunbar','Constance of Hartwood','Isabeau de Montpellier'],waitlistRoster:[]},
  {id:'64c',title:`Developing a Persona-Based Performance`,teacher:`Mary Dedwydd verch Gwallter`,email:'mary@example.com',date:'2026-11-07',time:'10:00',duration:60,format:'in-person',topic:'Bardic Arts',event:'Great Western War 2026',room:`Bardic Circle`,desc:`A seldom-explored option for a bardic performance set is to perform as your period self. Covers useful approaches to creating a unique, historically informed performance.`,bring:`Ideas and a willingness to play a bit`,fee:'',zoomLink:'',max:null,prereqs:'Some idea of your SCA persona',bio:`Mary Dedwydd verch Gwallter teaches both needlework and bardic arts, with a particular love of persona-driven performance.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Cecilia de Montfort','Elspeth of Dunbar','Thomas of Ely','Dmitri Volkonsky'],waitlistRoster:[]},
  {id:'65',title:`Blackwork Embroidery Fundamentals`,teacher:`Rayhana bint Estafanos al-Ábbas`,email:'rayhana@example.com',date:'2026-11-08',time:'10:00',duration:90,format:'in-person',topic:'Fiber Arts & Needlework',event:'Great Western War 2026',room:`A&S Tent`,level:'Beginner',desc:`Blackwork is the elegant counted embroidery seen on Tudor portraits — geometric, reversible, and endlessly adaptable. This class teaches the basic double-running stitch and three starter patterns.`,bring:`Nothing — needles, fabric, and thread provided.`,fee:'$2 materials',zoomLink:'',max:12,prereqs:'',bio:`Rayhana has been researching and recreating Ottoman and Eastern Mediterranean garb for a decade.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Aelric of Thornwood','Rosamund of the Dales','Ingrid Halfdansdottir','Wulfric the Wanderer','Finn Eriksson'],waitlistRoster:[]},
  {id:'65b',title:`Calligraphy 101`,teacher:`Bruce Draconarius of Mistholme`,email:'bruce@example.com',date:'2026-11-08',time:'10:00',duration:60,format:'in-person',topic:'Scribal Arts',event:'Great Western War 2026',room:`Bardic Circle`,level:'Beginner',audience:'newcomer-friendly',desc:`An introduction to basic medieval calligraphy. Students will learn pen strokes and the ductus for two popular medieval hands. Loaner pens and ink available.`,bring:`Paper; pencil; see-through ruler`,fee:'',zoomLink:'',max:null,prereqs:'No experience needed',bio:`Bruce Draconarius of Mistholme is a long-time scribe and calligrapher who teaches across the SCA.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Cecilia de Montfort','Thomas of Ely','Dmitri Volkonsky','Leofric the Just','Yusuf al-Rashid','Constance of Hartwood'],waitlistRoster:[]},
  // ── Crescent Artisan 2026 — June 6, 2026 ──
  {id:'70',title:`Fabris Fundamentals`,teacher:`Rodrigo de Castilla`,email:'rodrigo@example.com',date:'2026-06-06',time:'10:00',duration:120,format:'in-person',topic:'Combat - Rapier',event:'Crescent Artisan 2026',room:`Great Hall`,level:'Beginner',audience:'adults-only',desc:`An introduction to the rapier system of Salvator Fabris, one of the most influential fencing masters of the early 17th century. Students will learn the foundational postures, guards, and measure concepts from his 1606 treatise. Loaner gear available.`,bring:`Rapier gear if you have it; some loaner gear available`,fee:'',zoomLink:'',max:7,prereqs:'None',bio:`Don Rodrigo holds the rank of Don in Caid's rapier community and has been teaching historical fencing for over a decade, with a focus on Italian masters of the late 16th and early 17th century.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Wulfric the Wanderer','Finn Eriksson','Leofric the Just','Thomas of Ely','Dmitri Volkonsky','Cecilia de Montfort'],waitlistRoster:[]},
  {id:'71',title:`Beginning Lapidary`,teacher:`Torsten Bjørnsen`,email:'torsten@example.com',date:'2026-06-06',time:'10:00',duration:120,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Crescent Artisan 2026',room:`Craft Room`,level:'Beginner',audience:'newcomer-friendly',desc:`An introduction to lapidary arts — the cutting, grinding, and polishing of stones. Students will work with soft stones to learn basic shaping and polishing techniques, and leave with a small cabochon they made themselves.`,bring:`Nothing — all tools and materials provided`,fee:'$5 materials',zoomLink:'',max:null,prereqs:'None',bio:`Lord Torsten Bjørnsen has been working with stone and metal for over ten years, with a particular interest in Norse and early medieval jewelry traditions.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'72',title:`Introductory Bobbin Lace`,teacher:`Isadora di Venezia`,email:'isadora@example.com',date:'2026-06-06',time:'10:00',duration:120,format:'in-person',topic:'Fiber Arts & Needlework',event:'Crescent Artisan 2026',room:`Fiber Room`,level:'Beginner',audience:'newcomer-friendly',desc:`Learn the basics of bobbin lace — setting up your pillow, winding bobbins, and working a simple torchon ground. Students will leave with a small lace sample in progress and a pattern to continue at home.`,bring:`Nothing — pillow, bobbins, and thread provided`,fee:'$3 materials',zoomLink:'',max:5,prereqs:'None',bio:`Lady Isadora di Venezia has been making bobbin lace for eight years with a focus on 16th-century Italian and Flemish patterns.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Ingrid Halfdansdottir','Rosamund of the Dales','Elspeth of Dunbar','Sigrid Bjornsdottir'],waitlistRoster:[]},
  {id:'73',title:`Italian Dance`,teacherTitle:'Baroness',teacher:`Delphine de Montallieu`,email:'delphine@example.com',date:'2026-06-06',time:'10:00',duration:120,format:'in-person',topic:'Dance',event:'Crescent Artisan 2026',room:`Great Hall`,audience:'newcomer-friendly',desc:`Come learn a selection of dances from the 15th and 16th centuries. All of these dances will be on the set list for Muse's Masque in August, so if you're planning on attending, now is a great time to learn! Dances include: Amoroso, Petit Rose, Petit Vriens, Rostiboli Gioiosa, Ballo del Fiore, Saltarello, Gelosia.`,bring:`Comfortable shoes, water`,fee:'',zoomLink:'',max:18,prereqs:'None',bio:`Baroness Delphine de Montallieu has been dancing and teaching period dance in the SCA for over twelve years, specializing in 15th and 16th century French and Italian forms.`,imageUrl:'',registrationCount:12,waitlistCount:0,roster:['Margery la Rousse','Aelric of Thornwood','Constance of Hartwood','Isabeau de Montpellier','Yusuf al-Rashid','Wulfric the Wanderer','Cecilia de Montfort','Thomas of Ely','Elspeth of Dunbar','Rosamund of the Dales','Ingrid Halfdansdottir','Sigrid Bjornsdottir'],waitlistRoster:[]},
  {id:'74',title:`Bara Tape Patterning for Late 16th Century Clothing`,teacher:`Sigrún Hrafnsdóttir`,email:'sigrun@example.com',date:'2026-06-06',time:'10:00',duration:120,format:'in-person',topic:'Costuming',event:'Crescent Artisan 2026',room:`Craft Room`,level:'Intermediate',desc:`Learn to use bara tape — a period patterning tool — to draft accurate patterns for late 16th century garments directly from the body. We'll work through the method for a fitted bodice or doublet. Some sewing experience helpful.`,bring:`Measuring tape, notepad; wear fitted underlayers you can measure over`,fee:'',zoomLink:'',max:3,prereqs:'Some sewing experience helpful',bio:`Lady Sigrún Hrafnsdóttir is a costumer and pattern drafter specializing in late-period fitted garments from Norse and continental European traditions.`,imageUrl:'',registrationCount:2,waitlistCount:0,roster:['Philippa of Rouen','Constance of Hartwood'],waitlistRoster:[]},
  {id:'75',title:`Introduction to Medieval Calligraphy`,teacher:`Bruce Draconarius of Mistholme`,email:'bruce@example.com',date:'2026-06-06',time:'13:00',duration:120,format:'in-person',topic:'Scribal Arts',event:'Crescent Artisan 2026',room:`Library`,level:'Beginner',audience:'newcomer-friendly',desc:`An introduction to two foundational medieval scripts — Caroline minuscule and Gothic textura — with guided pen practice on each. Students leave with a reference sheet and a starter exemplar.`,bring:`Paper; pencil; see-through ruler. Students encouraged to bring their own pen/ink.`,fee:'',zoomLink:'',max:10,prereqs:'No experience needed',bio:`Bruce Draconarius of Mistholme is a long-time scribe and calligrapher who teaches manuscript history and calligraphy across the SCA.`,imageUrl:'',registrationCount:8,waitlistCount:0,roster:['Aelric of Thornwood','Ingrid Halfdansdottir','Thomas of Ely','Dmitri Volkonsky','Leofric the Just','Finn Eriksson','Sigrid Bjornsdottir','Rosamund of the Dales'],waitlistRoster:[]},
  {id:'76',title:`Sinister Calligraphy Workshop`,teacher:`Ramvoldus Kröll`,email:'ramvoldus@example.com',date:'2026-06-06',time:'13:00',duration:120,format:'in-person',topic:'Scribal Arts',event:'Crescent Artisan 2026',room:`Library`,level:'Beginner',desc:`This hands-on workshop is specifically tailored for left-handed individuals with little to no experience. Leave your doubts at the door — forget the smudged pencil lead and smeared ink nightmares from your childhood. You will be creating beautiful hand-drawn letters in an hour or less. Materials provided; bring your own nib holder or slant board if you have one.`,bring:`Your own nib holder or slant board if you have one`,fee:'',zoomLink:'',max:8,prereqs:'None',bio:`Ramvoldus Kröll is a calligrapher and left-handed writing advocate who has developed a specialized method for teaching medieval scripts to left-handed students.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Cecilia de Montfort','Elspeth of Dunbar','Wulfric the Wanderer','Yusuf al-Rashid'],waitlistRoster:[]},
  {id:'77',title:`Absolute Beginner's Pewter Casting`,teacher:`Aldric von Köln`,email:'aldric@example.com',date:'2026-06-06',time:'13:00',duration:120,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Crescent Artisan 2026',room:`Craft Room`,level:'Beginner',audience:'newcomer-friendly',desc:`Learn to cast simple period objects in pewter using soapstone molds. We'll cover mold carving, alloy safety, melting, and finishing. Students leave with a pendant or button they cast themselves. All materials and safety equipment provided.`,bring:`Nothing — all materials and safety equipment provided`,fee:'$5 materials',zoomLink:'',max:null,prereqs:'None',bio:`Lord Aldric von Köln is a metalsmith and medieval craft researcher who teaches pewter casting and related metalworking skills at events throughout Caid.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'78',title:`Royal Armouries MS I.33: Sword and Buckler`,teacher:`Galien Crow`,email:'galien@example.com',date:'2026-06-06',time:'13:00',duration:120,format:'in-person',topic:'Combat - Rapier',event:'Crescent Artisan 2026',room:`Great Hall`,audience:'adults-only',desc:`An introduction to the guards, wards, and plays of MS I.33, the oldest known European fencing manual (c. 1300). Students will work through basic binds and counter-binds with a partner. Loaner bucklers available; bring your own sword if you have one.`,bring:`Rapier gear; loaner bucklers available`,fee:'',zoomLink:'',max:6,prereqs:'Some rapier experience preferred',bio:`Galien Crow is an experienced rapier fighter and historical fencing researcher with a focus on early medieval fighting manuals.`,imageUrl:'',registrationCount:4,waitlistCount:0,roster:['Finn Eriksson','Leofric the Just','Dmitri Volkonsky','Thomas of Ely'],waitlistRoster:[]},
  {id:'79',title:`Advanced Embroidery: Or Nué`,teacherTitle:'Dame',teacher:`Richenda Elizabeth Coffin`,email:'richenda@example.com',date:'2026-06-06',time:'13:00',duration:240,format:'in-person',topic:'Fiber Arts & Needlework',event:'Crescent Artisan 2026',room:`Fiber Room`,level:'Advanced',sessionNum:1,sessionTotal:2,desc:`A 4-hour hands-on class on the stitch patterns and shading techniques for Or Nué — the prestige goldwork technique seen in the finest medieval embroideries. This class continues in the 3–5pm period. Prerequisite: some embroidery experience required.`,bring:`Your own 6" hoop; small sharp scissors`,fee:'$8 materials',zoomLink:'',max:3,prereqs:'Some embroidery experience required',bio:`Dame Richenda Elizabeth Coffin OL OP is a Pentathlon and inter-kingdom competition winner with deep expertise in historical embroidery techniques.`,imageUrl:'',registrationCount:2,waitlistCount:1,roster:['Constance of Hartwood','Philippa of Rouen'],waitlistRoster:[{pos:1,name:'Margery la Rousse'}]},
  {id:'80',title:`Illuminated Letters`,teacherTitle:'Mistress',teacher:`Alienor of Wakefield`,email:'alienor@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Scribal Arts',event:'Crescent Artisan 2026',room:`Library`,level:'Beginner',audience:'newcomer-friendly',desc:`Learn to paint illuminated decorative letters in the style of 13th-century English manuscripts. We'll cover basic gilding, pigment mixing, and letterform. All supplies provided — beginners very welcome.`,bring:`Small brush if you have one`,fee:'',zoomLink:'',max:10,prereqs:'None',bio:`Mistress Alienor has been studying and teaching medieval manuscript illumination in the SCA for over fifteen years.`,imageUrl:'',registrationCount:6,waitlistCount:0,roster:['Aelric of Thornwood','Ingrid Halfdansdottir','Rosamund of the Dales','Elspeth of Dunbar','Sigrid Bjornsdottir','Finn Eriksson'],waitlistRoster:[]},
  {id:'81',title:`Beginning Embroidery`,teacher:`Isadora di Venezia`,email:'isadora@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Fiber Arts & Needlework',event:'Crescent Artisan 2026',room:`Fiber Room`,level:'Beginner',audience:'newcomer-friendly',desc:`A gentle introduction to hand embroidery for complete beginners. Students will learn running stitch, back stitch, satin stitch, and chain stitch while working a small sampler to take home. All materials provided.`,bring:`Nothing — all materials provided`,fee:'',zoomLink:'',max:7,prereqs:'None',bio:`Lady Isadora di Venezia teaches embroidery and needlework at all skill levels across Caid events.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Cecilia de Montfort','Thomas of Ely','Dmitri Volkonsky','Leofric the Just','Wulfric the Wanderer'],waitlistRoster:[]},
  {id:'82',title:`Introduction to Historical Games`,teacher:`Hallr brjost Starsson`,email:'hallr@example.com',date:'2026-06-06',time:'15:00',duration:240,format:'in-person',topic:'History',event:'Crescent Artisan 2026',room:`Great Hall`,audience:'newcomer-friendly',desc:`A survey and play session covering period games from across medieval Europe and the Islamic world — including tables (backgammon), merels, chess variants, and dice games. Drop in and out as you like. Games and period rules provided.`,bring:`Nothing`,fee:'',zoomLink:'',max:20,prereqs:'None',bio:`Hallr brjost Starsson is a researcher and enthusiast of medieval games and recreation who brings period game sets and reconstructed rules to events across Caid.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Yusuf al-Rashid','Finn Eriksson','Rosamund of the Dales','Wulfric the Wanderer','Leofric the Just'],waitlistRoster:[]},
  {id:'83',title:`Headwear / Sorguç Aigrette`,teacher:`Rayhana bint Estafanos al-Ábbas`,email:'rayhana@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Costuming',event:'Crescent Artisan 2026',room:`Craft Room`,desc:`A survey of common men's and women's headwear in 16th-century Ottoman culture — turbans, hats, veils, and the styles that distinguished rank, region, and occasion. We'll then focus on the sorguç, the jeweled aigrette used to ornament headwear across genders, including its signature plume. Participants will shape and decorate their own brass aigrette with feathers included to take home.`,bring:`Nothing — all materials provided`,fee:'$5 materials',zoomLink:'',max:5,prereqs:'None',bio:`Rayhana has been researching and recreating Ottoman and Eastern Mediterranean garb for a decade. Her persona is set in 16th-century Istanbul.`,imageUrl:'',registrationCount:3,waitlistCount:0,roster:['Margery la Rousse','Ingrid Halfdansdottir','Cecilia de Montfort'],waitlistRoster:[]},
  {id:'84',title:`Period Martial Arts Demystified`,teacher:`Diago de las Casas`,email:'diago@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Combat - Rapier',event:'Crescent Artisan 2026',room:`Great Hall`,audience:'adults-only',desc:`This course examines how to utilize period texts on fighting and swordsmanship — how to contextually examine examples, plays, and the methodology of period masters, then think critically about the ideas presented and apply them practically. Drills and breakout exercises will be performed. Gear must meet SCA rapier requirements; some loaner gear available.`,bring:`Rapier gear meeting SCA requirements; some loaner gear available`,fee:'',zoomLink:'',max:7,prereqs:'Some rapier experience helpful',bio:`Diago de las Casas is a historical fencer and researcher who studies period martial arts manuals and their practical application in SCA rapier combat.`,imageUrl:'',registrationCount:5,waitlistCount:0,roster:['Dmitri Volkonsky','Aelric of Thornwood','Thomas of Ely','Leofric the Just','Finn Eriksson'],waitlistRoster:[]},
  {id:'85',title:`Advanced Woodworking: Working with Difficult Grain`,teacherTitle:'',teacher:`Rycharde the Bowemon`,email:'rycharde@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Metal / Wood / Leather / Glass',event:'Crescent Artisan 2026',room:`Craft Room`,level:'Advanced',desc:`A hands-on class using hand planes and scrapers to reduce and eliminate tear-out in changing grains and crotch woods. Students will practice on prepared blanks and leave with a better understanding of grain direction and tool selection.`,bring:`Your own hand plane or card scraper if you have one`,fee:'',zoomLink:'',max:null,prereqs:'Some woodworking experience recommended',bio:`Rycharde the Bowemon OL is a woodworker, bowyer, and Laurel who has been working wood in period styles for over twenty years.`,imageUrl:'',registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]},
  {id:'86',title:`Vocal Coaching: How to Be LOUD`,teacher:`Frida Hrosskætilsdottir`,email:'frida@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Bardic Arts',event:'Crescent Artisan 2026',room:`Library`,desc:`Practical vocal techniques for heralds, bards, and anyone who needs to project their voice in outdoor or large indoor settings — without straining or shouting. We'll cover breath support, resonance, and clear diction. Bring a willingness to make noise.`,bring:`Water; comfortable clothing`,fee:'',zoomLink:'',max:3,prereqs:'None',bio:`Frida Hrosskætilsdottir is a musician and vocalist who teaches both period music and practical voice technique in the SCA.`,imageUrl:'',registrationCount:2,waitlistCount:0,roster:['Elspeth of Dunbar','Sigrid Bjornsdottir'],waitlistRoster:[]},
  {id:'87',title:`Advanced Embroidery: Or Nué`,teacherTitle:'Dame',teacher:`Richenda Elizabeth Coffin`,email:'richenda@example.com',date:'2026-06-06',time:'15:00',duration:120,format:'in-person',topic:'Fiber Arts & Needlework',event:'Crescent Artisan 2026',room:`Fiber Room`,level:'Advanced',sessionNum:2,sessionTotal:2,desc:`Continuation of the Or Nué class from Period 2. Students work through shading and more complex couching patterns on their in-progress piece. Enrollment by completing the Period 2 session only.`,bring:`Your in-progress piece from Period 2`,fee:'',zoomLink:'',max:3,prereqs:'Must have attended the Period 2 session',bio:`Dame Richenda Elizabeth Coffin OL OP is a Pentathlon and inter-kingdom competition winner with deep expertise in historical embroidery techniques.`,imageUrl:'',registrationCount:2,waitlistCount:1,roster:['Constance of Hartwood','Philippa of Rouen'],waitlistRoster:[{pos:1,name:'Margery la Rousse'}]}
];

const dC = SEED_CLASSES.map(c => ({...c}));

// ── Pending class submissions ──────────────────────────────────────────────
const dP=[{id:'p1',title:'Introduction to Heraldic Embroidery',teacher:'Brigid ingen Faeláin',email:'brigid@example.com',date:'',time:'',duration:90,format:'in-person',topic:'Fiber Arts',event:'Collegium 2026',room:'',level:'Beginner',audience:'newcomer-friendly',desc:'A hands-on introduction to embroidering heraldic devices onto fabric — perfect for decorating a banner, pouch, or garment. We will cover basic satin stitch and couching techniques using your own device or a provided sample design.',bring:'Nothing — needles, fabric, and thread provided. Bring your device blazon if you have one.',fee:'$2 materials',zoomLink:'',max:10,prereqs:'',bio:'Brigid has been doing needlework in the SCA for eight years, with a focus on Irish and early medieval embroidery traditions. This is her first time teaching at Collegium.',imageUrl:'',timepref:'Morning preferred — I am also helping with feast setup in the afternoon.',status:'pending',sessionNum:1,sessionTotal:1},{id:'p2',title:'Nalbinding for Beginners',teacherTitle:'Lord',teacher:'Gunnar Ivarsson',email:'gunnar@example.com',date:'',time:'',duration:120,format:'in-person',topic:'Fiber Arts',event:'Great Western War 2026',room:'',level:'Beginner',audience:'newcomer-friendly',desc:'Nalbinding is a pre-knitting textile technique used across the Norse and Byzantine world. Students will learn the Oslo stitch and start a small swatch to take home. No prior fiber arts experience needed.',bring:'Nothing — needles and wool provided.',fee:'$3 materials',zoomLink:'',max:8,prereqs:'',bio:'Lord Gunnar has been practicing nalbinding for six years and researches Viking Age textile finds. He teaches regularly at West Kingdom events.',imageUrl:'',timepref:'Thu, Nov 5: 9:00 AM–12:00 PM · Fri, Nov 6: 9:00 AM–1:00 PM',status:'pending',sessionNum:1,sessionTotal:1},
  {id:'p3',title:'Period Calligraphy Hands: Foundational Strokes',teacherTitle:'Duke',teacher:'Cormac mac Aoidh',email:'cormac@example.com',date:'',time:'',duration:90,format:'in-person',topic:'Scribal Arts',event:'Collegium 2026',room:'',level:'Beginner',audience:'newcomer-friendly',desc:'An introduction to three foundational period scripts — Caroline minuscule, Gothic textura, and Italic — with guided practice on each. Students leave with a reference sheet and a starter exemplar.',bring:'Nothing — all materials provided.',fee:'$3 materials',zoomLink:'',max:14,prereqs:'',bio:'Duke Cormac has been studying and teaching period scripts for over twenty years. He holds a Laurel for his work in calligraphy and manuscript studies and has served as Kingdom Signet.',imageUrl:'',peerages:'laurel,royalpeer',timepref:'Morning preferred.',status:'pending',sessionNum:1,sessionTotal:1}];
// ── Teacher profiles ───────────────────────────────────────────────────────
const dTeachers=[
  {email:'alienor@example.com',name:'Alienor of Wakefield',title:'Mistress',barony:'Calafia',phone:'',bio:'Mistress Alienor has been studying and teaching medieval manuscript illumination in the SCA for over fifteen years, with a focus on 12th–14th century English and French styles.',peerages:['laurel'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'rayhana@example.com',name:'Rayhana bint Estafanos al-Ábbas',title:'',barony:'Gyldenholt',phone:'',bio:'Rayhana has been researching and recreating Ottoman and Eastern Mediterranean garb for a decade. Her persona is set in 16th-century Istanbul.',peerages:[],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'delphine@example.com',name:'Delphine de Montallieu',title:'Baroness',barony:'Dreiburgen',phone:'',bio:'Baroness Delphine de Montallieu has been dancing and teaching period dance in the SCA for over twelve years, specializing in 15th and 16th century French and Italian forms.',peerages:['pelican'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'richenda@example.com',name:'Richenda Elizabeth Coffin',title:'Dame',barony:'Calafia',phone:'',bio:'Dame Richenda Elizabeth Coffin is a Pentathlon and inter-kingdom competition winner with deep expertise in historical embroidery and A&S competition strategy.',peerages:['laurel','pelican'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'bruce@example.com',name:'Bruce Draconarius of Mistholme',title:'',barony:'Lyondemere',phone:'',bio:'Bruce Draconarius of Mistholme is a long-time scribe and calligrapher who teaches manuscript history and calligraphy across the SCA.',peerages:['laurel'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'gideon@example.com',name:'Gideon the Genuine',title:'',barony:'Dun Or',phone:'',bio:'Gideon has been shooting in the SCA for eighteen years and holds multiple Royal Round records.',peerages:['orderofthemark'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'rodrigo@example.com',name:'Rodrigo de Castilla',title:'Don',barony:'Calafia',phone:'',bio:"Don Rodrigo holds the rank of Don in Caid's rapier community and has been teaching historical fencing for over a decade.",peerages:['masterofdefense'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'sorcha@example.com',name:'Sorcha inghean Uí Fhaoláin',title:'Mistress',barony:'Dun Or',phone:'',bio:'Mistress Sorcha is a Pelican with twenty years of experience in natural dyeing and fiber arts.',peerages:['pelican'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'gwenllian@example.com',name:'Gwenllian ferch Caradog',title:'Mistress',barony:'Calafia',phone:'',bio:'Mistress Gwenllian is a Pelican whose passion is 14th-century English cookery.',peerages:['pelican'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'seamus@example.com',name:'Séamus mac Néill Uí Chonchobhair',title:'Lord',barony:'Lyondemere',phone:'',bio:'Lord Séamus is a consulting herald in Caid with a love of the more unusual corners of the heraldic tradition.',peerages:[],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'fiachra@example.com',name:'Fiachra an Doire',title:'',barony:'Dreiburgen',phone:'',bio:'Fiachra is a scribe and calligrapher with a particular interest in medieval ink recipes and writing materials.',peerages:[],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'frida@example.com',name:'Frida Hrosskaetilsdottir',title:'',barony:'Calafia',phone:'',bio:'Frida Hrosskaetilsdottir is a musician and vocalist who teaches both period music and practical voice technique in the SCA.',peerages:[],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'galien@example.com',name:'Galien Crow',title:'',barony:'Angels',phone:'',bio:'Galien Crow is an experienced rapier fighter who focuses on practical footwork, distance management, and historical fighting manuals.',peerages:['masterofdefense'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'elisheva@example.com',name:'Elisheva bat Yisrael',title:'Maestra',barony:'Gyldenholt',phone:'',bio:'Maestra Elisheva bat Yisrael is a scholar of Ottoman and Islamic material culture who teaches both dining history and period dance.',peerages:['laurel'],royalPeer:false,sittingRoyalty:false,stepDownDate:''},
  {email:'rycharde@example.com',name:'Rycharde the Bowemon',title:'',barony:'Dreiburgen',phone:'',bio:'Rycharde the Bowemon OL is a woodworker, bowyer, and Laurel who has been working wood in period styles for over twenty years.',peerages:['laurel'],royalPeer:false,sittingRoyalty:false,stepDownDate:''}
];

// ── Registrations ──────────────────────────────────────────────────────────
const dRegs={
  // Collegium 2026
  '30':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
  ],
  '19':[
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
  ],
  '12':[
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
  ],
  '22':[
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Constance of Hartwood',email:'constance@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
  ],
  '24':[
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
  ],
  // Crescent Artisan 2026
  '73':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Constance of Hartwood',email:'constance@example.com',hidden:false},
    {scaName:'Isabeau de Montpellier',email:'isabeau2@example.com',hidden:false},
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
  ],
  '83':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
  ],
  '79':[
    {scaName:'Constance of Hartwood',email:'constance@example.com',hidden:false},
    {scaName:'Philippa of Rouen',email:'anon1@example.com',hidden:true},
  ],
  '87':[
    {scaName:'Constance of Hartwood',email:'constance@example.com',hidden:false},
    {scaName:'Philippa of Rouen',email:'anon1@example.com',hidden:true},
  ],
  '70':[
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
  ],
  '72':[
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
  ],
  '75':[
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
  ],
  '76':[
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
  ],
  '78':[
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
  ],
  '80':[
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
  ],
  '81':[
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
  ],
  '82':[
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
  ],
  '84':[
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
  ],
  '86':[
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
  ],
  // GWW
  '62':[
    {scaName:'Sigrid Bjornsdottir',email:'sigrid@example.com',hidden:false},
    {scaName:'Cecilia de Montfort',email:'cecilia@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Leofric the Just',email:'leofric@example.com',hidden:false},
    {scaName:'Constance of Hartwood',email:'constance@example.com',hidden:false},
    {scaName:'Yusuf al-Rashid',email:'yusuf@example.com',hidden:false},
    {scaName:'Thomas of Ely',email:'bthomas@example.com',hidden:false},
    {scaName:'Dmitri Volkonsky',email:'dmitri@example.com',hidden:false},
    {scaName:'Isabeau de Montpellier',email:'isabeau2@example.com',hidden:false},
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
  ],
  '63':[
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
    {scaName:'Elspeth of Dunbar',email:'elspeth@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
  ],
  '60':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
  ],
  '61':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Aelric of Thornwood',email:'aelric@example.com',hidden:false},
    {scaName:'Ingrid Halfdansdottir',email:'ingrid@example.com',hidden:false},
    {scaName:'Rosamund of the Dales',email:'rosamund@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
  ],
},
dWL={
  '62':[
    {scaName:'Finn Eriksson',email:'finn@example.com',hidden:false},
    {scaName:'Wulfric the Wanderer',email:'wulfric@example.com',hidden:false},
  ],
  '79':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
  ],
  '87':[
    {scaName:'Margery la Rousse',email:'margery@example.com',hidden:false},
  ],
};

let dPid=1000,allClasses=[],allAdminClasses=[],myRegs={},scheduleEmail='';
let allTeachers={};

function showBadgeTip(el,label){
  const tip=document.getElementById('badge-tip');
  if(!tip)return;
  if(tip._el===el&&tip.classList.contains('show')){tip.classList.remove('show');tip._el=null;return;}
  tip._el=el;
  tip.textContent=label;
  tip.classList.add('show');
  // Position after browser has measured the updated text width
  requestAnimationFrame(()=>{
    const r=el.getBoundingClientRect();
    tip.style.left=Math.min(r.left+r.width/2-tip.offsetWidth/2,window.innerWidth-tip.offsetWidth-8)+'px';
    tip.style.top=(r.top-tip.offsetHeight-6+window.scrollY)+'px';
  });
  clearTimeout(tip._t);
  tip._t=setTimeout(()=>{tip.classList.remove('show');tip._el=null;},2500);
}
// Delegated click handler for data-tip badges
document.addEventListener('click',e=>{
  const tip=document.getElementById('badge-tip');
  const badge=e.target.closest('.badge-emoji[data-tip]');
  if(badge){e.stopPropagation();showBadgeTip(badge,badge.dataset.tip);return;}
  if(tip&&!e.target.closest('#badge-tip')){tip.classList.remove('show');tip._el=null;}
});

const PEERAGES=[
  {key:'chivalry',label:'Chivalry',abbr:'K/MA',color:'#8B0000',emoji:'\u{1F6E1}'},
  {key:'laurel',label:'Laurel',abbr:'Laurel',color:'#2e7d4e',emoji:'\u{1F33F}'},
  {key:'pelican',label:'Pelican',abbr:'Pelican',color:'#1A3F7A',emoji:'\u{1F9A2}'},
  {key:'masterofdefense',label:'Master of Defense',abbr:'MoD',color:'#4a4a4a',emoji:'\u2694\uFE0F'},
  {key:'orderofthemark',label:'Order of the Mark',abbr:'Mark',color:'#7a5c1e',emoji:'\u{1F3AF}'},
  {key:'royalpeer',label:'Royal Peer',abbr:'Royal Peer',color:'#5a4a9a',emoji:'\uD83C\uDF3C'}
];

function buildTeacherRecord(c){
  return {name:c.teacher||'',title:c.teacherTitle||'',email:c.email||'',phone:c.phone||'',barony:c.barony||'',bio:c.bio||'',peerages:[],royalPeer:false,sittingRoyalty:false,topics:[],classes:[]};
}
function upsertTeacher(c){
  const key=(c.email||'').toLowerCase().trim();
  if(!key)return;
  if(!allTeachers[key])allTeachers[key]=buildTeacherRecord(c);
  const t=allTeachers[key];
  if(c.teacher)t.name=c.teacher;
  if(c.teacherTitle)t.title=c.teacherTitle;
  if(c.phone)t.phone=c.phone;
  if(c.barony)t.barony=c.barony;
  if(c.bio)t.bio=c.bio;
  // Store self-reported peerages as 'pending' — admin confirms in Teachers tab
  if(c.peerages&&typeof c.peerages==='string'){
    c.peerages.split(',').filter(Boolean).forEach(pk=>{
      if(!t.peerages.includes(pk))t.peerages_pending=(t.peerages_pending||[]).concat(pk);
    });
  }
  const alreadyIn=t.classes.some(x=>String(x.id)===String(c.id));
  if(!alreadyIn)t.classes.push({id:c.id,title:c.title,event:c.event||'',date:c.date||'',topic:c.topic||''});
  if(!t.topics)t.topics=[];
  if(c.topic&&!t.topics.includes(c.topic))t.topics.push(c.topic);
}
let adminToken=sessionStorage.getItem('aT')||null,pendingClasses=[],availEvents=[];

// ── SHARED VOLUNTEER DATA (demo seed — replace with API calls in live env) ──

// ── Volunteer shifts ────────────────────────────────────────────────────────
const dVolShifts = [
  {id:'vs1', eventName:'Great Western War XXVII', title:'Gate Check-In', dept:'Gate', day:'2025-10-07', start:'08:00', end:'12:00', demand:'sedentary', ticketMult:1, location:'Main Gate'},
  {id:'vs2', eventName:'Great Western War XXVII', title:'Gate Check-In', dept:'Gate', day:'2025-10-07', start:'12:00', end:'16:00', demand:'sedentary', ticketMult:1, location:'Main Gate'},
  {id:'vs3', eventName:'Great Western War XXVII', title:'Troll Runner', dept:'Gate', day:'2025-10-07', start:'08:00', end:'18:00', demand:'active', ticketMult:1, location:'Gate / HQ'},
  {id:'vs4', eventName:'Great Western War XXVII', title:'A&S Room Monitor', dept:'Arts & Sciences', day:'2025-10-08', start:'09:00', end:'13:00', demand:'light', ticketMult:1, location:'A&S Pavilion'},
  {id:'vs5', eventName:'Great Western War XXVII', title:'Youth Activity Helper', dept:'Youth', day:'2025-10-08', start:'10:00', end:'14:00', demand:'light', ticketMult:1, location:'Youth Area'},
  {id:'vs6', eventName:'Great Western War XXVII', title:'Water Bearer', dept:'Armored Combat', day:'2025-10-09', start:'09:00', end:'13:00', demand:'active', ticketMult:2, location:'Main Combat Field'},
  {id:'vs7', eventName:'Great Western War XXVII', title:'Chirurgeon Support', dept:'Chirurgeon', day:'2025-10-09', start:'08:00', end:'17:00', demand:'sedentary', ticketMult:2, location:'Chirurgeon Point'},
  {id:'vs8', eventName:'Great Western War XXVII', title:'Herald – Field', dept:'Heralds', day:'2025-10-10', start:'09:00', end:'12:00', demand:'active', ticketMult:1, location:'Main Combat Field'},
  {id:'vs9', eventName:'Great Western War XXVII', title:'Closing Cleanup Crew', dept:'General', day:'2025-10-12', start:'08:00', end:'13:00', demand:'active', ticketMult:2, location:'Full Site'},
  {id:'vs10', eventName:'Collegium Caidis 2025', title:'Registration Desk', dept:'Gate', day:'2025-11-15', start:'08:30', end:'12:30', demand:'sedentary', ticketMult:1, location:'Main Entrance'},
  {id:'vs11', eventName:'Collegium Caidis 2025', title:'Room Monitor', dept:'Arts & Sciences', day:'2025-11-15', start:'09:00', end:'17:00', demand:'light', ticketMult:1, location:'Various Classrooms'},
];
// Demo: Margery is claimed on a couple of shifts
let myVolShifts = {'vs6': {verified:false}, 'vs8': {verified:true}};
// ── END SHARED VOLUNTEER DATA ────────────────────────────────────────────────
let curModalId=null,curModalWL=false,curApprovingId=null;

if(lockedEvent){showFormBody(true);}
if(window.location.hash==='#submit')setTimeout(()=>showPanel('submit',document.getElementById('nav-submit')),50);
if(window.location.hash==='#requests')setTimeout(()=>showPanel('requests',document.getElementById('nav-requests')),50);
updateAdminNavBtn();
function showFormBody(show){const body=document.getElementById('fc-form-body');if(body)body.style.display=show?'block':'none';}
loadClasses();
clearExpiredRoyalty();
// Populate static time selects
populateTimeSelect('fc-ti','09:00');
populateTimeSelect('lg-start-time','09:00');
populateTimeSelect('lg-end-time','17:00');
populateTimeSelect('am-time','09:00');
populateTimeSelect('em-time','09:00');

async function api(p){
  if(IS_DEMO)return apiD(p);
  const u=new URL(APPS_SCRIPT_URL);
  Object.entries(p).forEach(([k,v])=>u.searchParams.set(k,v));
  return(await fetch(u.toString())).json();
}
function apiD(p){
  const{action}=p;
  if(action==='adminGetClasses'){
    const ef=p.event||'';
    return{ok:true,classes:dC.filter(c=>!ef||c.event===ef).map(c=>{
      const r=dRegs[c.id]||[],w=dWL[c.id]||[];
      return{...c,registrationCount:r.length,waitlistCount:w.length,
        roster:r.map(x=>x.hidden?'Anonymous attendee':x.scaName),
        waitlistRoster:w.map((x,i)=>({pos:i+1,name:x.hidden?'Anonymous attendee':x.scaName}))};
    })};
  }
  if(action==='getClasses'){
    const ef=p.event||'';
    const unpublished=new Set(dEv.filter(e=>e.published===false&&!e.cancelled).map(e=>e.name));
    return{ok:true,classes:dC.filter(c=>(!ef||c.event===ef)&&!unpublished.has(c.event||'')).map(c=>{
      const r=dRegs[c.id]||[],w=dWL[c.id]||[];
      return{...c,registrationCount:r.length,waitlistCount:w.length,
        roster:r.map(x=>x.hidden?'Anonymous attendee':x.scaName),
        waitlistRoster:w.map((x,i)=>({pos:i+1,name:x.hidden?'Anonymous attendee':x.scaName}))};
    })};
  }
  if(action==='getEvents')return{ok:true,events:dEv};
  if(action==='submitClass'){
    const repeatMap={'once':1,'twice':2,'three+':3};
    const total=repeatMap[p.repeat||'once']||1;
    const ids=[];
    for(let i=1;i<=total;i++){
      const id='d'+(dPid++);
      dP.push({...p,id,status:'pending',sessionNum:i,sessionTotal:total});
      ids.push(id);
    }
    return{ok:true,id:ids[0]};
  }
  if(action==='register'){
    const{classId,scaName,email,hideFromRoster,override}=p;
    const cls=dC.find(c=>String(c.id)===String(classId));
    if(!cls)return{ok:false,error:'Class not found'};
    if(override!=='true'){
      const myC=dC.filter(c=>(dRegs[c.id]||[]).some(r=>r.email===email));
      const s=t2m(cls.time),e=s+(cls.duration||60);
      const ov=myC.filter(c=>{if(c.date!==cls.date)return false;const cs=t2m(c.time),ce=cs+(c.duration||60);return s<ce&&e>cs;});
      if(ov.length)return{ok:false,overlap:true,overlapWith:ov.map(c=>c.title)};
    }
    if(!dRegs[classId])dRegs[classId]=[];
    if(!dWL[classId])dWL[classId]=[];
    const full=cls.max&&dRegs[classId].length>=cls.max;
    if(full){dWL[classId].push({scaName,email,hidden:hideFromRoster==='true'});return{ok:true,waitlisted:true};}
    dRegs[classId].push({scaName,email,hidden:hideFromRoster==='true'});return{ok:true,waitlisted:false};
  }
  if(action==='unregister'){
    const{classId,email}=p;
    if(dRegs[classId])dRegs[classId]=dRegs[classId].filter(r=>r.email!==email);
    if(dWL[classId]&&dWL[classId].length){const nxt=dWL[classId].shift();if(nxt)dRegs[classId].push(nxt);}
    return{ok:true};
  }
  if(action==='leaveWaitlist'){const{classId,email}=p;if(dWL[classId])dWL[classId]=dWL[classId].filter(r=>r.email!==email);return{ok:true};}
  if(action==='getRoster'){
    const r=(dRegs[p.classId]||[]).map(x=>({scaName:x.scaName,hidden:x.hidden}));
    const w=(dWL[p.classId]||[]).map((x,i)=>({pos:i+1,name:x.hidden?'Anonymous attendee':x.scaName}));
    return{ok:true,roster:r,waitlist:w};
  }
  if(action==='adminLogin')return p.password==='admin123'?{ok:true,token:'demo'}:{ok:false,error:'Wrong password'};
  if(action==='adminGetPending')return{ok:true,pending:dP.filter(c=>c.status==='pending')};
  if(action==='adminApprove'){
    const i=dP.findIndex(c=>String(c.id)===String(p.id));
    if(i<0)return{ok:false,error:'Not found'};
    const base=dP[i];
    const cls={...base,status:'approved',
      date:p.date||base.date,time:p.time||base.time,room:p.room||'',
      event:p.event!==undefined?p.event:base.event||'',
      title:p.title||base.title,
      topic:p.topic||base.topic,
      duration:p.duration?Number(p.duration):base.duration,
      max:p.max?Number(p.max):base.max||null,
      fee:p.fee!==undefined?p.fee:base.fee,
      registrationCount:0,waitlistCount:0,roster:[],waitlistRoster:[]};
    dP.splice(i,1);dC.push(cls);return{ok:true};
  }
  if(action==='adminReject'){const i=dP.findIndex(c=>String(c.id)===String(p.id));if(i>=0)dP.splice(i,1);return{ok:true};}
  if(action==='adminRemove'){const i=dC.findIndex(c=>String(c.id)===String(p.id));if(i>=0)dC.splice(i,1);return{ok:true};}
  if(action==='adminEditClass'){
    const c=dC.find(x=>String(x.id)===String(p.id));
    if(!c)return{ok:false,error:'Not found'};
    if(p.title)c.title=p.title;if(p.date)c.date=p.date;if(p.time)c.time=p.time;
    c.room=p.room||c.room;c.fee=p.fee!==undefined?p.fee:c.fee;
    c.bring=p.bring!==undefined?p.bring:c.bring;c.desc=p.desc||c.desc;
    c.max=p.max?Number(p.max):null;
    if(p.prereqs!==undefined)c.prereqs=p.prereqs;
    if(p.level!==undefined)c.level=p.level;
    if(p.audience!==undefined)c.audience=p.audience;
    if(p.electricity!==undefined)c.electricity=p.electricity;
    if(p.bio!==undefined)c.bio=p.bio;
    if(p.imageUrl!==undefined)c.imageUrl=p.imageUrl;
    if(p.zoomLink!==undefined)c.zoomLink=p.zoomLink;
    if(p.topic)c.topic=p.topic;
    if(p.format)c.format=p.format;
    if(p.duration)c.duration=Number(p.duration);
    return{ok:true};
  }
  if(action==='adminCancelClass'){
    const c=dC.find(x=>String(x.id)===String(p.id));
    if(!c)return{ok:false,error:'Not found'};
    c.cancelled=true;return{ok:true};
  }
  if(action==='adminCreateEvent'){if(!p.name)return{ok:false,error:'Name required'};const rooms=p.rooms?p.rooms.split(',').map(r=>r.trim()).filter(Boolean):[];dEv.push({name:p.name,startDate:p.startDate||'',startTime:p.startTime||'',endDate:p.endDate||p.startDate||'',endTime:p.endTime||'',rooms,address:p.address||'',url:p.url||'',imageUrl:p.imageUrl||'',active:true,published:false});return{ok:true};}
  if(action==='adminGetRoster'){
    const r=(dRegs[p.classId]||[]).map(x=>({scaName:x.scaName,email:x.email,barony:x.barony||'',hidden:x.hidden}));
    const w=(dWL[p.classId]||[]).map((x,i)=>({pos:i+1,scaName:x.scaName,email:x.email,barony:x.barony||'',hidden:x.hidden}));
    return{ok:true,roster:r,waitlist:w};
  }
  if(action==='adminGetGrid')return{ok:true,approved:dC.filter(c=>!p.event||c.event===p.event),pending:dP.filter(c=>!p.event||c.event===p.event)};
  if(action==='submitRequest'){const id='r'+(dReqPid++);allRequests.push({id,topic:p.topic,topicTag:p.topicTag||'',event:p.event||'',level:p.level||'',format:p.format||'',notes:p.notes||'',submitter:p.submitter||'',hearts:0,ts:Date.now()});return{ok:true,id};}
  if(action==='heartRequest'){const r=allRequests.find(x=>String(x.id)===String(p.id));if(r){r.hearts=Math.max(0,r.hearts+(p.dir==='up'?1:-1));if(!r.voters)r.voters=[];if(p.dir==='up'&&p.email&&!r.voters.includes(p.email))r.voters.push(p.email);if(p.dir==='down'&&p.email)r.voters=r.voters.filter(e=>e!==p.email);}return{ok:true};}
  if(action==='getRequests')return{ok:true,requests:allRequests};
  if(action==='adminDeleteRequest'){const i=allRequests.findIndex(x=>String(x.id)===String(p.id));if(i>=0)allRequests.splice(i,1);return{ok:true};}
  if(action==='adminHideRequest'){const r=allRequests.find(x=>String(x.id)===String(p.id));if(r)r.hidden=p.hidden==='true';return{ok:true};}
  return{ok:false,error:'Unknown action'};
}

function t2m(t){if(!t)return 0;const p=String(t).split(':');return parseInt(p[0])*60+parseInt(p[1]||0);}
function fD(d){if(!d)return'';const[y,m,dy]=String(d).split('-');return new Date(y,m-1,dy).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}
function fT(t){if(!t)return'';const p=String(t).split(':');const h=parseInt(p[0]);return(h>12?h-12:h||12)+':'+(p[1]||'00')+'\u202f'+(h>=12?'PM':'AM')+'\u202fPT';}
function isReg(c){return!!myRegs[c.id]&&!myRegs[c.id].waitlisted;}
function isWL(c){return!!myRegs[c.id]&&myRegs[c.id].waitlisted;}
function isFull(c){return c.max&&c.registrationCount>=c.max;}
function wlPos(c){if(!isWL(c))return 0;const w=c.waitlistRoster||[];const n=myRegs[c.id]?.scaName;return(w.find(x=>x.name===n)||{pos:w.length}).pos;}

function showPanel(name,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  if(btn)btn.classList.add('active');
  if(name==='schedule')renderSchedule();
  if(name==='catalog')rC();
  if(name==='admin')initAdmin();
  if(name==='submit')initSubmit();
  if(name==='requests')initRequests();
}
function closeModal(id){document.getElementById(id).classList.remove('open');}
function openThumbLightbox(el){
  const type=el.dataset.lbType;
  const val=el.dataset.lbVal;
  const img=document.getElementById('thumb-lightbox-img');
  const ph=document.getElementById('thumb-lightbox-placeholder');
  if(type==='img'){
    img.src=val;img.style.display='block';ph.style.display='none';
  } else {
    ph.style.background=val;ph.style.display='block';img.style.display='none';
  }
  document.getElementById('thumb-lightbox').classList.add('open');
}
function closeThumbLightbox(){document.getElementById('thumb-lightbox').classList.remove('open');}
function openBioModal(btn){
  const name=btn.dataset.bioName||'';
  const badgeKeys=(btn.dataset.bioBadges||'').split('|').filter(Boolean);
  const text=btn.dataset.bioText||'';
  const imgSrc=btn.dataset.bioImg||'';
  document.getElementById('bio-modal-name').textContent=name;
  const avatarWrap=document.getElementById('bio-modal-avatar-wrap');
  if(imgSrc){
    avatarWrap.innerHTML='<img class="bio-modal-avatar" src="'+escH(imgSrc)+'" alt="">';
  } else {
    const initials=name.split(' ').map(w=>w[0]||'').filter(Boolean).slice(0,2).join('').toUpperCase();
    avatarWrap.innerHTML='<div class="bio-modal-avatar-placeholder">'+escH(initials)+'</div>';
  }
  const badgeEl=document.getElementById('bio-modal-badges');
  badgeEl.innerHTML=badgeKeys.map(k=>{
    if(k==='royalty')return '<span class="bio-modal-badge">\u{1F451} Royalty</span>';
    const pd=PEERAGES.find(x=>x.key===k);
    return pd?'<span class="bio-modal-badge">'+pd.emoji+' '+escH(pd.label)+'</span>':'';
  }).filter(Boolean).join('');
  document.getElementById('bio-modal-body').textContent=text;
  document.getElementById('bio-modal').classList.add('open');
}

async function loadClasses(){
  const b=document.getElementById('api-banner');
  if(IS_DEMO){b.style.display='flex';b.style.flexDirection='column';b.style.alignItems='flex-start';b.style.gap='4px';b.innerHTML='<div style="display:flex;align-items:center;gap:7px;font-weight:600"><i class="ti ti-flask"></i> Demo Mode <span style="font-size:11px;font-weight:400;opacity:.75;margin-left:4px">· Last updated June 2, 2026 · 11:33 PM PT</span></div><div style="font-size:12px;line-height:1.6">Feel free to explore — register for classes, submit a class proposal, or browse the wishlist. <strong>Any changes reset when you refresh.</strong> To try admin tools, click the ⚙️ icon in the top right and enter password <code style="background:rgba(26,63,122,.12);padding:1px 5px;border-radius:3px;font-size:11px">admin123</code>.</div><div style="margin-top:8px;display:flex;align-items:center;gap:8px"><span style="font-size:12px;font-family:sans-serif;color:rgba(26,63,122,.7);font-style:italic">Start here</span><span style="font-size:16px;line-height:1">→</span><a href="./changelog.html" target="_blank" style="display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:700;color:#fff;background:#1A3F7A;border:1px solid #1A3F7A;padding:5px 14px;border-radius:99px;text-decoration:none;white-space:nowrap"><i class="ti ti-clipboard-list"></i> Testing Guide</a></div><div style="font-size:12px;line-height:1.6;margin-top:4px;border-top:1px solid rgba(26,63,122,.15);padding-top:6px">Thanks for checking out this project! If you have feedback, please PM me. — Rayhana</div>';}
  try{
    const res=await api({action:'getClasses'});
    if(res.ok){
      allClasses=res.classes;
      // Seed from dTeachers first (has emails+peerages), then overlay class data
      if(typeof dTeachers!=='undefined')dTeachers.forEach(t=>{const key=t.email.toLowerCase();allTeachers[key]={...t,classes:[],topics:t.topics||[]};});
      allClasses.forEach(upsertTeacher);
      await loadEvFilter();populateTopics();rC();
    }
  }catch(e){b.style.display='flex';b.className='api-banner err';b.innerHTML='<i class="ti ti-alert-circle"></i> Could not load classes.';}
}
async function loadEvFilter(){
  const res=await api({action:'getEvents'});
  if(!res.ok)return;
  availEvents=res.events||[];
  const s=document.getElementById('fe');
  s.innerHTML='<option value="" disabled selected>Choose an event…</option><option value="">All events</option>';
  availEvents.filter(ev=>ev.published!==false).forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;s.appendChild(o);});
  if(lockedEvent){s.value=lockedEvent;s.disabled=true;}
}
function populateTopics(){
  populateAllTopicSelects();
}
function rC(){
  const q=(document.getElementById('si').value||'').toLowerCase();
  const fm=document.getElementById('ff').value,tp=document.getElementById('ft').value,ev=document.getElementById('fe').value,so=document.getElementById('fs').value;
  const fmy=document.getElementById('fmy')?.value||'';
  const fav=document.getElementById('fav')?.value||'';
  const flLevel=document.getElementById('fl-level')?.value||'';
  const flAud=document.getElementById('fl-aud')?.value||'';
  let fl=allClasses.filter(c=>{
    if(fm&&c.format!==fm)return false;
    if(tp&&c.topic!==tp)return false;
    if(ev&&c.event!==ev)return false;
    if(fmy==='mine'&&!myRegs[c.id])return false;
    if(flLevel&&!(c.level||'').split(',').map(s=>s.trim()).includes(flLevel))return false;
    if(flAud&&!(c.audience||'').includes(flAud))return false;
    if(document.getElementById('fhc')?.checked&&c.cancelled)return false;
    if(document.getElementById('fhw')?.checked&&isFull(c))return false;
    if(q&&!c.title.toLowerCase().includes(q)&&!c.teacher.toLowerCase().includes(q)&&!c.desc.toLowerCase().includes(q))return false;
    return true;
  });
  // Update filter badge count
  const activeFilters=[fm,tp,flLevel,flAud,document.getElementById('fhc')?.checked,document.getElementById('fhw')?.checked].filter(Boolean).length;
  const badge=document.getElementById('cat-filter-badge');
  if(badge){badge.textContent=activeFilters||'';badge.style.display=activeFilters?'inline':'none';}
  if(so==='date')fl=[...fl].sort((a,b)=>(String(a.date)+String(a.time)).localeCompare(String(b.date)+String(b.time)));
  else if(so==='title')fl=[...fl].sort((a,b)=>a.title.localeCompare(b.title));
  else if(so==='teacher')fl=[...fl].sort((a,b)=>(a.teacher||'').localeCompare(b.teacher||''));
  const g=document.getElementById('cg');
  // Show/hide grid toggle button and re-render grid if open
  const catGridBtn=document.getElementById('cat-grid-btn');
  const catGridWrap=document.getElementById('cat-grid-wrap');
  const catSeeAll=document.getElementById('cat-see-all-btn');
  const evSelected=!!(document.getElementById('fe').value);
  if(catGridBtn) catGridBtn.style.display=evSelected?'flex':'none';
  const anyFilter=!!(evSelected||q||(document.getElementById('ff')||{}).value||(document.getElementById('ft')||{}).value||document.getElementById('fl-level')?.value||document.getElementById('fl-aud')?.value||document.getElementById('fhc')?.checked||document.getElementById('fhw')?.checked);
  if(catSeeAll) catSeeAll.style.display=anyFilter?'':'none';
  // Hide grid when event is deselected; re-render if already open
  if(catGridWrap){
    if(!evSelected){
      catGridWrap.style.display='none';
      if(catGridBtn)catGridBtn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
    } else if(catGridWrap.style.display!=='none'){
      renderCatalogGrid();
    }
  }
  const cardsLabel=document.getElementById('cat-cards-label');
  if(cardsLabel) cardsLabel.style.display=(evSelected&&catGridWrap&&catGridWrap.style.display!=='none')?'block':'none';
  // Event info banner
  const catEvBanner=document.getElementById('cat-event-banner');
  if(catEvBanner){
    if(evSelected){
      const evObj=availEvents.find(e=>e.name===ev);
      document.getElementById('cat-ev-name').textContent=ev;
      const dateRow=document.getElementById('cat-ev-date');
      const start=evObj&&evObj.startDate?fD(evObj.startDate):'';
      const end=evObj&&evObj.endDate&&evObj.endDate!==evObj.startDate?fD(evObj.endDate):'';
      if(start){dateRow.querySelector('span').textContent=start+(end?' \u2013 '+end:'');dateRow.style.display='flex';}
      else dateRow.style.display='none';
      const timeRow=document.getElementById('cat-ev-time');
      const st=evObj&&evObj.startTime?fT(evObj.startTime):'';
      const et=evObj&&evObj.endTime?fT(evObj.endTime):'';
      if(st){timeRow.querySelector('span').textContent=st+(et?' \u2013 '+et:'');timeRow.style.display='flex';}
      else timeRow.style.display='none';
      const addrRow=document.getElementById('cat-ev-addr');
      if(evObj&&evObj.address){addrRow.querySelector('span').textContent=evObj.address;addrRow.style.display='flex';}
      else addrRow.style.display='none';
      const linkEl=document.getElementById('cat-ev-link');
      if(evObj&&evObj.url){linkEl.href=evObj.url;linkEl.style.display='inline-flex';}
      else linkEl.style.display='none';
      const dirEl=document.getElementById('cat-ev-dir');
      if(evObj&&(evObj.directionsUrl||evObj.address)){dirEl.href=evObj.directionsUrl||('https://maps.google.com/?q='+encodeURIComponent(evObj.address));dirEl.style.display='inline-flex';}
      else dirEl.style.display='none';
      const thumbWrap=document.getElementById('cat-ev-thumb-wrap');
      const thumbImg=document.getElementById('cat-ev-thumb');
      const thumbPh=document.getElementById('cat-ev-thumb-ph');
      if(evObj&&evObj.imageUrl){
        thumbImg.src=evObj.imageUrl;thumbImg.style.display='block';
        if(thumbPh)thumbPh.style.display='none';
        thumbWrap.style.display='block';
      } else {
        thumbImg.style.display='none';
        if(thumbPh){thumbPh.textContent=(ev||'?')[0].toUpperCase();thumbPh.style.display='flex';}
        thumbWrap.style.display='block';
      }
      catEvBanner.style.display='block';
    } else {
      catEvBanner.style.display='none';
    }
  }
  if(!fl.length){g.innerHTML='<div style="grid-column:1/-1;padding:2rem;text-align:center;color:var(--text2);font-size:14px;font-family:sans-serif;">No classes match your filters.</div>';return;}
  g.innerHTML=fl.map(c=>{
    const reg=isReg(c),wl=isWL(c),full=isFull(c),cancelled=!!c.cancelled;
    const sl=c.max!=null?c.max-c.registrationCount:null,low=sl!=null&&sl<=3&&sl>0;
    let bc='enroll-btn',bt='Register';
    if(cancelled){bc+=' enroll-btn';bt='Cancelled';}
    else if(reg){bc+=' enrolled';bt='\u2713 Registered';}
    else if(wl){bc+=' waitlisted';bt='Waitlist #'+wlPos(c);}
    else if(full){bc+=' waitlist-btn';bt='Join waitlist';}
    const cancelledBanner=cancelled?'<div style="font-size:12px;font-family:sans-serif;padding:5px 10px;background:var(--red-bg);color:var(--red-text);border-radius:var(--radius);margin-bottom:8px;font-weight:600;border:1px solid var(--red-border)"><i class="ti ti-ban"></i> This class has been cancelled</div>':'';
    const sp=c.max==null?'<span class="spots">Open enrollment</span>':full?'<span class="spots full">Full \u00b7 '+c.waitlistCount+' waiting</span>':low?'<span class="spots low">'+sl+' spot'+(sl===1?'':'s')+' left!</span>':'<span class="spots">'+c.registrationCount+' / '+c.max+'</span>';
    const fp=c.fee?'<span class="logistics-pill fee"><i class="ti ti-coin"></i> '+c.fee+'</span>':'<span class="logistics-pill free"><i class="ti ti-check"></i> Free</span>';
    const bp=c.bring?'<span class="logistics-pill"><i class="ti ti-backpack"></i> Bring: '+c.bring+'</span>':'';
    const roId='ro-'+c.id;
    const ro=c.roster&&c.roster.length?'<button class="roster-toggle" onclick="toggleR(&apos;'+roId+'&apos;)"><i class="ti ti-users" style="font-size:12px"></i> See who\'s registered ('+c.registrationCount+')</button><div class="roster-list" id="'+roId+'"><ul>'+c.roster.map(n=>'<li>'+n+'</li>').join('')+'</ul>'+(c.waitlistRoster&&c.waitlistRoster.length?'<div class="roster-wl-title">Waitlist</div><ul>'+c.waitlistRoster.map(w=>'<li>#'+w.pos+' '+w.name+'</li>').join('')+'</ul>':'')+'</div>':'';
    const du='';
    const duPill=c.duration?'<span class="logistics-pill"><i class="ti ti-clock"></i> '+(c.duration<60?c.duration+'min':Math.floor(c.duration/60)+(c.duration%60?'.5':'')+'h')+'</span>':'';
    const thumbColor=getTopicColor(c.topic);
    const thumb=c.imageUrl
      ?'<img class="card-thumb-sq" src="'+c.imageUrl+'" alt="" data-lb-type="img" data-lb-val="'+escH(c.imageUrl)+'" onclick="openThumbLightbox(this)">'
      :'<div class="card-thumb-sq-placeholder" style="background:'+thumbColor+'" data-lb-type="color" data-lb-val="'+thumbColor+'" onclick="openThumbLightbox(this)" title="'+escH(c.topic||'')+'"></div>';
    const tRecord=allTeachers[(c.email||'').toLowerCase()];
    const royaltyTip='Sitting Royalty'+(tRecord&&tRecord.stepDownDate?' · steps down '+tRecord.stepDownDate:'');
    const displayTeacher=(c.teacherTitle?c.teacherTitle+' ':'')+c.teacher;
    const pBadgeKeys=tRecord?[
      ...(tRecord.peerages||[]),
      tRecord.sittingRoyalty?'royalty':''
    ].filter(Boolean):[];
    const pBadges=tRecord?pBadgeKeys.map(k=>{if(k==='royalty')return '<span class="badge-emoji" data-tip="'+royaltyTip+'">\u{1F451}</span>';const pd=PEERAGES.find(x=>x.key===k);return pd?'<span class="badge-emoji" data-tip="'+pd.label+'">'+pd.emoji+'</span>':'';}).filter(Boolean).join(''):'';
    const pBadgeHtml=pBadges?'<div style="display:flex;flex-wrap:wrap;gap:4px;margin:4px 0 6px">'+pBadges+'</div>':'';
    const teacherImg=tRecord&&tRecord.imageUrl?tRecord.imageUrl:'';
    const bioBtn=c.bio||pBadges?'<button class="bio-btn" tabindex="0" aria-label="Teacher bio" data-bio-name="'+escH(displayTeacher)+'" data-bio-badges="'+escH(pBadgeKeys.join('|'))+'" data-bio-text="'+escH(c.bio||'')+'" data-bio-img="'+escH(teacherImg)+'" onclick="openBioModal(this)"><i class="ti ti-info-circle"></i></button>':'';
    // Consolidated tag row
    const allTags=[];
    if(c.level)c.level.split(',').forEach(l=>allTags.push('<span class="card-tag level">'+l+'</span>'));
    if(c.audience){
      if(c.audience.includes('newcomer-friendly'))allTags.push('<span class="card-tag newcomer">★ Newcomers</span>');
      if(c.audience.includes('kids-welcome'))allTags.push('<span class="card-tag kids">Kids welcome</span>');
      if(c.audience.includes('adults-only'))allTags.push('<span class="card-tag adults">18+ only</span>');
    }
    if(c.sessionTotal>1){
      allTags.push('<span class="card-tag session">Session '+c.sessionNum+' of '+c.sessionTotal+'</span>');
      allTags.push('<button class="see-more-times card-tag" data-title="'+escH(c.title)+'" style="background:none;border:none;color:var(--accent);cursor:pointer;text-decoration:underline;font-size:11px;font-family:sans-serif;padding:2px 6px;border-radius:10px">More times</button>');
    }
    const tagRow=allTags.length?'<div class="card-tags">'+allTags.join('')+'</div>':'';
    const evObjC=availEvents.find(e=>e.name===c.event);
    const evCancelledC=evObjC&&evObjC.cancelled;
    const evDisplayC=evCancelledC?'<s>'+escH(c.event)+'</s> <span style="color:var(--red-text);font-size:10px;font-weight:600">Cancelled</span>':escH(c.event||'');
    const locationStr=cancelled?(c.event?evDisplayC:escH(c.room)):(c.event?evDisplayC:'')+(c.event&&c.room?' · ':'')+escH(c.room||'');
    const dateStr=c.date?'<span style="font-size:11.5px;font-family:sans-serif;color:var(--text2);display:flex;align-items:center;gap:5px;flex-wrap:wrap"><i class="ti ti-calendar" style="font-size:11px"></i> '+fD(c.date)+' · '+fT(c.time)+(c.event?' · '+escH(c.event):'')+(reg&&c.room?' <span style="display:inline-flex;align-items:center;gap:3px"><i class="ti ti-map-pin" style="font-size:11px"></i> '+escH(c.room)+'</span>':'')+'</span>':'';
    const formatBadge='<span class="tag '+c.format+' card-thumb-badge">'+(c.format==='zoom'?'Online':'In person')+'</span>';
    const thumbWrap='<div class="card-thumb-wrap">'+thumb+formatBadge+'</div>';
    return '<div class="class-card'+(reg?' registered':'')+(cancelled?' cancelled-card':'')+'">'
      +'<div class="card-top-row" style="margin-bottom:14px">'+thumbWrap+'<div class="card-top-text"><div class="card-title" style="margin-bottom:0">'+c.title+'</div></div></div>'
      +cancelledBanner
      +(!cancelled?(
          '<div class="card-desc" style="margin-bottom:8px">'+c.desc+'</div>'
          +'<div class="card-meta" style="margin-bottom:8px">'
          +'<span class="meta-teacher">'+(tRecord&&tRecord.sittingRoyalty?'<span class="badge-emoji" data-tip="'+royaltyTip+'" style="margin-right:3px">👑</span>':'<i class="ti ti-user" style="color:var(--accent-mid)"></i> ')+displayTeacher+bioBtn+'</span>'
          +'</div>'
          +tagRow
          +'<div class="card-logistics">'+duPill+fp+(bp?bp:'')+'</div>'
          +(c.zoomLink&&reg?'<a class="sched-zoom-btn" href="'+c.zoomLink+'" target="_blank" style="margin-bottom:8px"><i class="ti ti-video"></i> Join online</a>':'')
          +'<div class="card-footer">'+dateStr+'<button class="'+bc+'" onclick="handleEnroll(\''+c.id+'\')">'  +bt+'</button></div>'
          +ro
        ):(
          '<div class="card-desc" style="opacity:.6;margin-bottom:8px">'+c.desc+'</div>'
          +'<div class="card-footer"><button class="'+bc+'" disabled style="opacity:.4;cursor:not-allowed">'+bt+'</button></div>'
        ))
      +'</div>';
  }).join('');
}
document.getElementById('cg').addEventListener('click',function(e){
  const btn=e.target.closest('.see-more-times');
  if(btn)searchByTitle(btn.dataset.title);
});
function searchByTitle(title){
  const si=document.getElementById('si');
  if(si){si.value=title;si.dispatchEvent(new Event('input'));}
  // Make sure filters panel is visible so user sees the search is active
  const panel=document.getElementById('cat-secondary-filters');
  if(panel&&panel.style.display==='none')toggleCatFilters();
  // Scroll to top of catalog
  document.getElementById('cg')?.scrollIntoView({behavior:'smooth',block:'start'});
}
function toggleReqFilters(){
  const panel=document.getElementById('rq-secondary-filters');
  const btn=document.getElementById('rq-filter-toggle');
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'flex';
  btn.style.background=open?'var(--bg2)':'var(--accent-light)';
  btn.style.borderColor=open?'var(--border2)':'var(--accent)';
  btn.style.color=open?'var(--text2)':'var(--accent)';
}
function toggleAdminClassFilters(){
  const panel=document.getElementById('acf-secondary-filters');
  const btn=document.getElementById('acf-filter-toggle');
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'flex';
  btn.style.background=open?'var(--bg2)':'var(--accent-light)';
  btn.style.borderColor=open?'var(--border2)':'var(--accent)';
  btn.style.color=open?'var(--text2)':'var(--accent)';
}
function toggleAdminReqFilters(){
  const panel=document.getElementById('req-admin-secondary-filters');
  const btn=document.getElementById('req-admin-filter-toggle');
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'flex';
  btn.style.background=open?'var(--bg2)':'var(--accent-light)';
  btn.style.borderColor=open?'var(--border2)':'var(--accent)';
  btn.style.color=open?'var(--text2)':'var(--accent)';
}
function clearAdminClassFilters(){
  ['acf-q','acf-tp','acf-fm'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=el.tagName==='INPUT'?'':el.options[0].value;});
  const so=document.getElementById('acf-so');if(so)so.value='date';
  renderPending();renderApproved();
  if(!document.querySelector('.admin-tab.active'))showAdminTab('classes');
}
function clearAdminReqFilters(){
  ['req-admin-filter','req-admin-topic'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const so=document.getElementById('req-admin-sort');if(so)so.value='hearts';
  renderAdminRequests();
}
function toggleCatFilters(){
  const panel=document.getElementById('cat-secondary-filters');
  const btn=document.getElementById('cat-filter-toggle');
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'flex';
  btn.style.background=open?'var(--bg2)':'var(--accent-light)';
  btn.style.borderColor=open?'var(--border2)':'var(--accent)';
  btn.style.color=open?'var(--text2)':'var(--accent)';
}
function toggleR(id){const e=document.getElementById(id);if(e)e.classList.toggle('open');}
function focusCatalogCard(id){
  // Switch to card view if grid is showing
  const wrap=document.getElementById('cat-grid-wrap');
  const cg=document.getElementById('cg');
  const btn=document.getElementById('cat-grid-btn');
  if(wrap&&wrap.style.display!=='none'){
    wrap.style.display='none';cg.style.display='';
    if(btn)btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
  }
  // Clear search and re-render with just this class
  const si=document.getElementById('si');
  const c=allClasses.find(x=>String(x.id)===String(id));
  if(!c)return;
  if(si)si.value=c.title;
  rC();
  // Scroll to the card
  setTimeout(()=>{
    const el=document.querySelector('.class-card');
    if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  },50);
}

function catClearEvent(){
  const ids=['fe','ff','ft','fl-level','fl-aud','fmy','fs','si'];
  ids.forEach(id=>{const el=document.getElementById(id);if(!el)return;el.tagName==='INPUT'?el.value='':el.value=el.options[0].value;});
  ['fhc','fhw'].forEach(id=>{const el=document.getElementById(id);if(el)el.checked=false;});
  const fs=document.getElementById('fs');if(fs)fs.value='date';
  rC();
}

function toggleCatalogGrid(){
  const wrap=document.getElementById('cat-grid-wrap');
  const btn=document.getElementById('cat-grid-btn');
  const cardsLabel=document.getElementById('cat-cards-label');
  const showing=wrap.style.display!=='none';
  if(showing){
    wrap.style.display='none';
    if(btn)btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
    if(cardsLabel)cardsLabel.style.display='none';
  } else {
    wrap.style.display='block';
    if(btn)btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
    if(cardsLabel)cardsLabel.style.display='block';
    renderCatalogGrid();
  }
}

function renderCatalogGrid(){
  const evName=document.getElementById('fe').value;
  const ev=availEvents.find(e=>e.name===evName);
  const hideCancelled=document.getElementById('fhc')?.checked;
  const cls=allClasses.filter(c=>c.event===evName&&(!hideCancelled||!c.cancelled));
  const days=getEventDays(ev,cls);
  const tbl=document.getElementById('cat-grid-table');
  const wrap=document.getElementById('cat-grid-wrap');
  // Remove old day tabs and single-day header
  const old=wrap.querySelector('.day-tabs');if(old)old.remove();
  const oldDh=wrap.querySelector('.single-day-header');if(oldDh)oldDh.remove();
  if(!days.length){tbl.innerHTML='<tr><td style="padding:1rem;font-family:sans-serif;color:var(--text2)">No scheduled classes found for this event.</td></tr>';return;}
  if(days.length<=1){
    if(days[0]){
      const dh=document.createElement('div');
      dh.className='single-day-header';
      dh.style.cssText='font-size:14px;font-weight:600;font-family:Lora,Georgia,serif;color:var(--accent);margin-bottom:8px;';
      dh.textContent=fD(days[0]);
      wrap.insertBefore(dh,wrap.querySelector('.grid-wrap'));
    }
    renderCatalogGridDay(cls,days[0]||null);return;
  }
  const tabBar=document.createElement('div');
  tabBar.className='day-tabs';
  tabBar.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;';
  days.forEach((d,i)=>{
    const btn=document.createElement('button');
    btn.className='print-btn'+(i===0?' day-tab-active':'');
    if(i===0)btn.style.cssText='background:var(--accent);color:#fff;border-color:var(--accent)';
    btn.textContent=fD(d);btn.dataset.date=d;
    btn.onclick=function(){
      wrap.querySelectorAll('.day-tabs button').forEach(b=>{b.style.cssText='';b.classList.remove('day-tab-active');});
      this.style.cssText='background:var(--accent);color:#fff;border-color:var(--accent)';
      this.classList.add('day-tab-active');
      renderCatalogGridDay(cls,this.dataset.date);
    };
    tabBar.appendChild(btn);
  });
  wrap.insertBefore(tabBar,wrap.querySelector('.grid-wrap'));
  renderCatalogGridDay(cls,days[0]);
}

function renderCatalogGridDay(cls,filterDate){
  const times=['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
  const hideCatCancelled=document.getElementById('fhc')?.checked;
  const hideCatFull=document.getElementById('fhw')?.checked;
  const dayCls=(filterDate?cls.filter(c=>c.date===filterDate):cls).filter(c=>(!hideCatCancelled||!c.cancelled)&&(!hideCatFull||!isFull(c)));
  const rooms=[...new Set(dayCls.map(c=>c.room||'Unassigned').filter(Boolean))].sort();
  const tbl=document.getElementById('cat-grid-table');
  if(!rooms.length){tbl.innerHTML='<tr><td style="padding:1rem;font-family:sans-serif;color:var(--text2)">No classes with rooms assigned yet'+(filterDate?' for '+fD(filterDate):'')+'. </td></tr>';return;}
  let h='<tr><th>Time</th>'+rooms.map(r=>'<th>'+escH(r)+'</th>').join('')+'</tr>';
  times.forEach(t=>{
    const rowHasCls=dayCls.some(c=>String(c.time).slice(0,5)===t);
    if(!rowHasCls)return;
    h+='<tr><td class="sgtime">'+fT(t)+'</td>';
    rooms.forEach(r=>{
      const sl=dayCls.filter(c=>(c.room||'Unassigned')===r&&String(c.time).slice(0,5)===t);
      h+='<td>';
      sl.forEach(c=>{
        const du=Number(c.duration)||60;
        const reg=isReg(c),wl=isWL(c);
        const cancelled=!!c.cancelled;
        const full=isFull(c)&&!reg&&!wl;
        let style,extra='';
        if(cancelled){
          style='background:var(--red-bg);color:var(--red-text);border-left:3px solid var(--red-border);';
        } else if(full){
          style='background:#f0f0f0;color:#888;';
        } else if(reg){
          extra=' style="border-left:3px solid var(--accent-mid)"';
          style='';
        } else if(wl){
          extra=' style="border-left:3px solid var(--gold-mid)"';
          style='';
        } else {
          style='';
        }
        const clickStyle=cancelled?'':'cursor:pointer;';
        h+='<div class="gc" onclick="'+(cancelled?'':'focusCatalogCard(\''+c.id+'\')')+'" style="'+(style||'')+clickStyle+'" '+((!style&&extra)?extra.replace(' style=','').replace(/^"|"$/g,''):'')
          +' title="'+escH(c.title)+' — '+escH(c.teacher)+' ('+du+'min)'+(cancelled?' — CANCELLED':full?' — Full':'')+'">'
          +'<strong style="'+(cancelled?'text-decoration:line-through;':'')+'">'+escH(c.title.slice(0,26)+(c.title.length>26?'…':''))+'</strong><br>'
          +(cancelled
            ? '<span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.04em">Cancelled</span>'
            : escH(c.teacher)+(du!==60?' ('+du+'m)':'')
              +(full?'<br><span style="font-size:10px;font-style:italic">Waitlist available</span>':'')
              +(reg?' <i class="ti ti-check" style="font-size:10px"></i>':wl?' <i class="ti ti-clock" style="font-size:10px"></i>':''))
          +'</div>';
      });
      h+='</td>';
    });
    h+='</tr>';
  });
  tbl.innerHTML=h;
}

function handleEnroll(id){
  const c=allClasses.find(x=>String(x.id)===String(id));
  if(!c)return;
  if(isReg(c)){doUnreg(id);return;}
  if(isWL(c)){doLeaveWL(id);return;}
  openReg(id,isFull(c),false,[]);
}
function openReg(id,wl,hasOv,ovWith){
  const c=allClasses.find(x=>String(x.id)===String(id));
  curModalId=id;curModalWL=wl;
  document.getElementById('rm-title').textContent=wl?'Join waitlist':'Register for class';
  document.getElementById('rm-sub').textContent=c.title;
  document.getElementById('rm-wl').style.display=wl?'block':'none';
  const ovEl=document.getElementById('rm-ov'),ovBtn=document.getElementById('rm-override'),cnBtn=document.getElementById('rm-confirm');
  if(hasOv){
    ovEl.style.display='block';
    ovEl.innerHTML='<i class="ti ti-alert-circle"></i> <strong>Schedule conflict:</strong> overlaps with <em>'+ovWith.join(', ')+'</em>. You can still register if you wish.';
    ovBtn.style.display='inline-flex';cnBtn.style.display='none';
  }else{ovEl.style.display='none';ovBtn.style.display='none';cnBtn.style.display='inline-flex';}
  const feEl=document.getElementById('rm-fee');
  if(c.fee){feEl.style.display='block';document.getElementById('rm-fee-txt').textContent='Fee: '+c.fee+' \u2014 pay teacher at class.';}
  else feEl.style.display='none';
  const st={sca:window._lastSca||'',email:window._lastEmail||''};
  document.getElementById('rm-sca').value=st.sca||'';
  document.getElementById('rm-email').value=st.email||'';
  document.getElementById('rm-hide').checked=false;
  cnBtn.textContent=wl?'Join waitlist':'Register';
  cnBtn.className='modal-confirm'+(wl?' mc-gold':'');
  document.getElementById('reg-modal').classList.add('open');
  setTimeout(()=>document.getElementById('rm-sca').focus(),50);
}
async function doRegister(override){
  const sca=document.getElementById('rm-sca').value.trim(),email=document.getElementById('rm-email').value.trim(),hide=document.getElementById('rm-hide').checked;
  if(!sca||!email){alert('SCA name and email are required.');return;}
  if(!email.includes('@')){alert('Please enter a valid email address.');return;}
  // Remember for convenience within this session only
  window._lastSca=sca;window._lastEmail=email;
  const btn=override?document.getElementById('rm-override'):document.getElementById('rm-confirm');
  btn.disabled=true;btn.innerHTML='<span class="spinner"></span>';
  const res=await api({action:'register',classId:String(curModalId),scaName:sca,email,hideFromRoster:String(hide),override:String(override)});
  btn.disabled=false;btn.textContent=curModalWL?'Join waitlist':'Register';
  if(!res.ok&&res.overlap){openReg(curModalId,isFull(allClasses.find(c=>String(c.id)===String(curModalId))),true,res.overlapWith);return;}
  if(!res.ok){alert(res.error||'Registration failed.');return;}
  myRegs[curModalId]={scaName:sca,email,waitlisted:res.waitlisted};
  const c=allClasses.find(x=>String(x.id)===String(curModalId));
  if(c){if(res.waitlisted)c.waitlistCount++;else{c.registrationCount++;c.roster.push(hide?'Anonymous attendee':sca);}}
  closeModal('reg-modal');updSC();rC();
}
async function doUnreg(id){
  const i=myRegs[id];if(!i)return;
  if(!confirm('Remove this class from your schedule?'))return;
  await api({action:'unregister',classId:String(id),email:i.email});
  const c=allClasses.find(x=>String(x.id)===String(id));
  if(c){c.registrationCount=Math.max(0,c.registrationCount-1);c.roster=c.roster.filter(n=>n!==i.scaName&&n!=='Anonymous attendee');}
  delete myRegs[id];updSC();rC();renderSchedule();
}
async function doLeaveWL(id){
  const i=myRegs[id];if(!i)return;
  if(!confirm('Leave the waitlist for this class?'))return;
  await api({action:'leaveWaitlist',classId:String(id),email:i.email});
  const c=allClasses.find(x=>String(x.id)===String(id));
  if(c)c.waitlistCount=Math.max(0,c.waitlistCount-1);
  delete myRegs[id];updSC();rC();renderSchedule();
}
function updSC(){document.getElementById('sched-count').textContent=Object.values(myRegs).filter(r=>!r.waitlisted).length;}

async function lookupSchedule(){
  const emailInput=document.getElementById('sched-email');
  const email=emailInput.value.trim();
  const msg=document.getElementById('sched-lookup-msg');
  const l=document.getElementById('sl');
  if(!email||!email.includes('@')){
    msg.style.display='block';msg.style.color='var(--red-text)';
    msg.innerHTML='<i class="ti ti-alert-circle"></i> Please enter a valid email address.';
    return;
  }
  msg.style.display='block';msg.style.color='var(--text2)';
  msg.innerHTML='<span class="spinner"></span> Looking up schedule\u2026';
  l.innerHTML='';
  // Build myRegs from all classes matching this email
  myRegs={};
  scheduleEmail=email;
  // In demo mode, scan dRegs, dWL, and teaching assignments
  allClasses.forEach(c=>{
    if(c.email&&c.email.toLowerCase()===email.toLowerCase()){
      myRegs[c.id]={scaName:c.teacher,email,waitlisted:false,teaching:true};
      return;
    }
    const reg=(IS_DEMO?(dRegs[c.id]||[]):[]).find(r=>r.email===email);
    const wl=(IS_DEMO?(dWL[c.id]||[]):[]).find(r=>r.email===email);
    if(reg)myRegs[c.id]={scaName:reg.scaName,email,waitlisted:false};
    else if(wl)myRegs[c.id]={scaName:wl.scaName,email,waitlisted:true};
  });
  const teachingCount=Object.values(myRegs).filter(r=>r.teaching).length;
  const attendingCount=Object.values(myRegs).filter(r=>!r.teaching&&!r.waitlisted).length;
  const waitlistCount=Object.values(myRegs).filter(r=>r.waitlisted).length;
  const count=Object.keys(myRegs).length;
  updSC();
  if(!count){
    msg.innerHTML='<i class="ti ti-info"></i> No schedule found for <strong>'+email+'</strong>. Double-check the address or register via the catalog.';
    l.innerHTML='';
    return;
  }
  msg.style.color='var(--green-text)';
  const parts=[];
  if(teachingCount)parts.push(teachingCount+' teaching');
  if(attendingCount)parts.push(attendingCount+' attending');
  if(waitlistCount)parts.push(waitlistCount+' waitlisted');
  msg.innerHTML='<i class="ti ti-check"></i> Found '+parts.join(', ')+' for <strong>'+email+'</strong>';
  renderSchedule();
}

function renderSchedule(){
  const mc=allClasses.filter(c=>myRegs[c.id]);
  const l=document.getElementById('sl');
  const evDiv=document.getElementById('sched-events');
  const myEvents=[...new Set(mc.map(c=>c.event).filter(Boolean))];
  if(myEvents.length){
    const todayStr=new Date().toISOString().slice(0,10);
    evDiv.style.display='block';
    evDiv.innerHTML=myEvents.map(evName=>{
      const evObj=availEvents.find(e=>e.name===evName);
      if(!evObj)return'';
      const evEnd=evObj.endDate||evObj.startDate||'';
      if(evEnd&&evEnd<todayStr)return'';
      const dateStr=evObj.startDate?(evObj.endDate&&evObj.endDate!==evObj.startDate?fD(evObj.startDate)+' \u2013 '+fD(evObj.endDate):fD(evObj.startDate)):'';
      return'<div class="modal-note mn-info" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:8px">'
        +'<div><strong>'+escH(evName)+'</strong>'+(dateStr?' \u00b7 <span style="font-weight:400">'+dateStr+'</span>':'')
        +(evObj.address?' <span style="font-size:12px;opacity:.8">\u00b7 '+escH(evObj.address)+'</span>':'')+'</div>'
        +'<div style="display:flex;gap:8px;flex-wrap:wrap">'
        +(evObj.address||evObj.directionsUrl?'<a class="sched-zoom-btn" href="'+(evObj.directionsUrl||'https://maps.google.com/?q='+encodeURIComponent(evObj.address))+'" target="_blank" style="font-size:12px;padding:5px 12px"><i class="ti ti-map-pin"></i> Directions</a>':'')
        +(evObj.url?'<a class="sched-zoom-btn" href="'+escH(evObj.url)+'" target="_blank" style="font-size:12px;padding:5px 12px"><i class="ti ti-info-circle"></i> Event details</a>':'')
        +'</div></div>';
    }).join('');
    const fmy=document.getElementById('fmy');
    if(fmy){fmy.style.display='block';}
  } else {
    evDiv.style.display='none';
  }

  // ── Volunteer shifts ──────────────────────────────────────────────────────
  const myVS=dVolShifts.filter(s=>myVolShifts[s.id]);
  function vsHours(s){return Math.round((t2m(s.end)-t2m(s.start))/60*10)/10;}
  function vsTickets(s){return Math.round(vsHours(s)*(s.ticketMult||1));}
  function buildVolCard(s){
    const verified=myVolShifts[s.id]&&myVolShifts[s.id].verified;
    const hours=vsHours(s);const tickets=vsTickets(s);
    const badge=verified
      ?'<span class="vol-badge"><i class="ti ti-shield-check"></i> Volunteer \u00b7 Verified</span>'
      :'<span class="vol-badge vol-unverified"><i class="ti ti-clock"></i> Volunteer \u00b7 Awaiting PIN</span>';
    const ticketEl=verified
      ?'<span class="ticket-chip-sm'+(s.ticketMult===2?' double':'')+'"><i class="ti ti-ticket"></i> '+tickets+' ticket'+(tickets!==1?'s':'')+'</span>'
      :'';
    return '<div class="sched-item sched-item-vol">'
      +'<div class="sched-time">'+fD(s.day)+'<br>'+fT(s.start)+'</div>'
      +'<div style="min-width:0">'+badge
      +'<div class="sched-title">'+escH(s.title)+'</div>'
      +'<div class="sched-meta">'+escH(s.dept)+' \u00b7 '+escH(s.location)+' \u00b7 '+fT(s.start)+'\u2013'+fT(s.end)+' ('+hours+'h)</div>'
      +(ticketEl?'<div style="margin-top:5px">'+ticketEl+'</div>':'')
      +'</div>'
      +'<a href="volunteer.html" style="font-size:11px;padding:4px 10px;border-radius:var(--radius);border:1px solid var(--border);text-decoration:none;color:var(--text2);font-family:sans-serif;white-space:nowrap;background:var(--bg)">Manage</a>'
      +'</div>';
  }

  if(!mc.length&&!myVS.length){
    if(!scheduleEmail)l.innerHTML='<div class="empty-sched"><i class="ti ti-mail" style="font-size:36px;display:block;margin:0 auto 10px;opacity:.25"></i>Enter your email address above to view your schedule.</div>';
    else l.innerHTML='<div class="empty-sched">No classes or shifts found for that email.</div>';
    return;
  }
  const filtersDiv=document.getElementById('sched-filters');
  if(filtersDiv&&mc.length){
    filtersDiv.style.display='block';
    const fevSel=document.getElementById('sched-fev');
    if(fevSel){
      const currentFev=fevSel.value;
      fevSel.innerHTML='<option value="">All events</option>';
      [...new Set(mc.map(c=>c.event).filter(Boolean))].sort().forEach(ev=>{
        const o=document.createElement('option');o.value=ev;o.textContent=ev;fevSel.appendChild(o);
      });
      fevSel.value=currentFev;
    }
  }
  const fq=(document.getElementById('sched-q')||{}).value||'';
  const fev=(document.getElementById('sched-fev')||{}).value||'';
  const ftype=(document.getElementById('sched-ftype')||{}).value||'';
  const filtered=mc.filter(c=>{
    if(fev&&c.event!==fev)return false;
    if(ftype){
      const teaching=!!(myRegs[c.id]&&myRegs[c.id].teaching);
      const wl=!teaching&&isWL(c);
      if(ftype==='teaching'&&!teaching)return false;
      if(ftype==='waitlist'&&!wl)return false;
      if(ftype==='attending'&&(teaching||wl))return false;
    }
    if(fq){const q=fq.toLowerCase();if(!c.title.toLowerCase().includes(q)&&!c.teacher.toLowerCase().includes(q))return false;}
    return true;
  });
  const today=new Date();today.setHours(0,0,0,0);
  function isPast(c){
    if(!c.date)return false;
    const d=new Date(c.date+'T'+(c.time||'00:00'));
    if(c.duration){d.setMinutes(d.getMinutes()+Number(c.duration));}
    return d<today;
  }
  function isVolPast(s){return new Date(s.day+'T'+(s.end||'23:59'))<today;}
  const so=(document.getElementById('sched-sort')||{}).value||'date';
  const sortFn=(a,b)=>{
    if(so==='title')return a.title.localeCompare(b.title);
    if(so==='event')return(a.event||a.eventName||'').localeCompare(b.event||b.eventName||'')||(String(a.date||a.day)+String(a.time||a.start)).localeCompare(String(b.date||b.day)+String(b.time||b.start));
    if(so==='type'){
      const ta=!!(myRegs[a.id]&&myRegs[a.id].teaching),tb=!!(myRegs[b.id]&&myRegs[b.id].teaching);
      if(ta!==tb)return ta?-1:1;
      return(String(a.date||a.day)+String(a.time||a.start)).localeCompare(String(b.date||b.day)+String(b.time||b.start));
    }
    return(String(a.date||a.day)+String(a.time||a.start)).localeCompare(String(b.date||b.day)+String(b.time||b.start));
  };
  const allUpcoming=[
    ...filtered.filter(c=>!isPast(c)).map(c=>({...c,_type:'class'})),
    ...myVS.filter(s=>!isVolPast(s)).map(s=>({...s,_type:'vol',date:s.day,time:s.start}))
  ].sort(sortFn);
  const allPast=[
    ...filtered.filter(c=>isPast(c)).map(c=>({...c,_type:'class'})),
    ...myVS.filter(s=>isVolPast(s)).map(s=>({...s,_type:'vol',date:s.day,time:s.start}))
  ].sort(sortFn);
  function buildCard(c){
    if(c._type==='vol')return buildVolCard(c);
    const du=c.duration?' \u00b7 '+(c.duration>=60?Math.floor(c.duration/60)+(c.duration%60?'.5':'')+'h':c.duration+'min'):'';
    const isZoom=c.format==='zoom';
    const teaching=!!(myRegs[c.id]&&myRegs[c.id].teaching);
    const wl=!teaching&&isWL(c),pos=wlPos(c);
    const teachBanner=teaching?'<div style="display:flex;align-items:center;gap:8px;background:var(--accent-light);color:var(--accent);border:1px solid var(--accent-mid);border-radius:var(--radius);padding:7px 11px;margin-bottom:8px;font-size:13px;font-family:sans-serif;font-weight:600"><i class="ti ti-chalkboard" style="font-size:16px;flex-shrink:0"></i><span>You are teaching this class</span></div>':'';
    const wlBanner=wl?'<div style="display:flex;align-items:center;gap:8px;background:var(--gold-light);color:var(--accent);border:1px solid var(--gold-mid);border-radius:var(--radius);padding:7px 11px;margin-bottom:8px;font-size:13px;font-family:sans-serif;font-weight:600"><i class="ti ti-clock" style="font-size:16px;flex-shrink:0"></i><span>Waitlist position #'+pos+' \u2014 you\u2019ll be notified if a spot opens</span></div>':'';
    const borderStyle=teaching?'border-left:4px solid var(--accent-mid);background:var(--accent-light);':wl?'border-left:4px solid var(--gold-mid);':'';
    const removeBtn=teaching?'':'<button class="remove-btn" onclick="'+(wl?'doLeaveWL':'doUnreg')+'(\''+c.id+'\')" style="'+(wl?'color:var(--accent-mid);border-color:var(--gold-mid)':'')+'"><i class="ti ti-x"></i> '+(wl?'Leave waitlist':'Cancel')+'</button>';
    return '<div class="sched-item'+(isZoom&&!wl&&!teaching?' sched-item-zoom':'')+(c.cancelled?' sched-item-cancelled':'')+'" style="'+borderStyle+'">'
      +'<div class="sched-time">'+(c.date?fD(c.date)+'<br>':'')+(c.time?fT(c.time):'TBD')+'</div>'
      +'<div style="min-width:0">'+teachBanner+wlBanner+'<div class="sched-title">'+c.title+'</div>'
      +'<div class="sched-meta">'+(teaching?'Your class':'By: '+(c.teacherTitle?c.teacherTitle+' ':'')+c.teacher)+(c.event?' \u00b7 '+c.event:'')+(c.room?' \u00b7 '+c.room:'')+du+'</div>'
      +(c.cancelled?'<div style="font-size:12px;font-family:sans-serif;color:var(--red-text);font-weight:700;margin-top:3px"><i class="ti ti-ban"></i> CANCELLED</div>':'')
      +(c.fee?'<div class="sched-meta" style="color:var(--accent-mid);margin-top:2px"><i class="ti ti-coin"></i> '+c.fee+'</div>':'')
      +(c.bring&&!teaching?'<div class="sched-meta" style="margin-top:2px"><i class="ti ti-backpack"></i> Bring: '+c.bring+'</div>':'')
      +(isZoom&&c.zoomLink?'<a class="sched-zoom-btn" href="'+c.zoomLink+'" target="_blank"><i class="ti ti-video"></i> '+(teaching?'Your meeting link':'Join online')+'</a>':'')
      +'</div>'
      +removeBtn
      +'</div>';
  }
  const earnedTickets=myVS.filter(s=>myVolShifts[s.id]&&myVolShifts[s.id].verified).reduce((a,s)=>a+vsTickets(s),0);
  const volSummary=myVS.length
    ?'<div style="display:flex;align-items:center;gap:10px;padding:9px 13px;background:var(--gold-light);border:1px solid var(--gold-mid);border-radius:var(--radius);margin-bottom:1rem;font-family:sans-serif;font-size:13px;color:var(--accent);flex-wrap:wrap">'
      +'<i class="ti ti-ticket" style="font-size:18px;flex-shrink:0"></i>'
      +'<span><strong style="font-size:18px;font-family:Lora,Georgia,serif">'+earnedTickets+'</strong> raffle ticket'+(earnedTickets!==1?'s':'')+' earned \u00b7 '
      +myVS.filter(s=>myVolShifts[s.id]&&myVolShifts[s.id].verified).length+' of '+myVS.length+' volunteer shift'+(myVS.length!==1?'s':'')+' verified'
      +' \u00b7 <a href="volunteer.html" style="color:var(--accent);font-weight:600">Manage shifts \u2192</a></span>'
      +'</div>'
    :'';
  const upcomingHtml=allUpcoming.map(buildCard).join('');
  const pastHtml=allPast.map(c=>{
    const card=buildCard(c);
    return card.replace('class="sched-item','class="sched-item sched-item-past');
  }).join('');
  const pastToggle=allPast.length
    ?'<button class="roster-toggle" id="past-toggle" onclick="togglePast()" style="margin-bottom:10px">'
     +'<i class="ti ti-clock" style="font-size:12px"></i> Show '+allPast.length+' past item'+(allPast.length===1?'':'s')
     +'</button>'
     +'<div id="past-list" style="display:none">'+pastHtml+'</div>'
    :'';
  l.innerHTML=volSummary+(upcomingHtml||'<div class="empty-sched" style="padding:1.5rem 0">No upcoming classes or shifts.</div>')+pastToggle;
}
function togglePast(){
  const list=document.getElementById('past-list');
  const btn=document.getElementById('past-toggle');
  const open=list.style.display==='block';
  list.style.display=open?'none':'block';
  const count=list.querySelectorAll('.sched-item').length;
  btn.innerHTML=(open
    ?'<i class="ti ti-clock" style="font-size:12px"></i> Show '+count+' past class'+(count===1?'':'es')
    :'<i class="ti ti-chevron-up" style="font-size:12px"></i> Hide past classes');
}

function initSubmit(){
  populateAllTopicSelects();
  const lock=lockedEvent;
  const banner=document.getElementById('ev-banner');
  if(banner)banner.style.display='none';
  const pill=document.getElementById('ev-lock-pill');
  const pillTxt=document.getElementById('ev-lock-pill-txt');
  const evSel=document.getElementById('fc-ev');
  evSel.innerHTML='<option value="">— Choose an event or format —</option><option value="__inperson__">In person / standalone (not at an event)</option><option value="__online__">Online / Zoom</option>';
  availEvents.forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;evSel.appendChild(o);});
  if(lock){
    if(pill)pill.style.display='none';
    evSel.value=lock;evSel.disabled=true;
    evSel.onclick=function(){
      if(pill){pill.style.display='flex';pillTxt.textContent='Choose \u201cTeach a Class\u201d in the menu to submit for a different event.';}
    };
  } else {
    if(pill)pill.style.display='none';
    evSel.onclick=null;
    evSel.disabled=false;
  }
  fcEvChange();
}

function fcEvChange(){
  const lock=lockedEvent;
  const evVal=document.getElementById('fc-ev').value;
  const isOnline=evVal==='__online__';
  const isInperson=evVal==='__inperson__';
  const isEvent=!!(lock||(evVal&&!isOnline&&!isInperson));
  const fmEl=document.getElementById('fc-fm');
  if(fmEl)fmEl.value=isOnline?'zoom':'in-person';
  populateTimeSelect('fc-ti',isOnline?'19:30':'09:00');
  document.getElementById('zf').style.display=isOnline?'block':'none';
  document.getElementById('af').style.display=isInperson?'block':'none';
  const schedDt=document.getElementById('sched-dt');
  const schedPf=document.getElementById('sched-pf');
  const schedLbl=document.getElementById('sched-lbl');
  schedDt.style.display=isEvent?'none':'block';
  schedPf.style.display=isEvent?'block':'none';
  schedLbl.textContent=isEvent?'Scheduling preferences':'Scheduling';
  renderTimePrefPicker(isEvent ? (lock || evVal) : null);
  const elecRow=document.getElementById('fc-elec-row');
  if(elecRow){elecRow.style.display=isEvent?'block':'none';if(!isEvent)document.getElementById('fc-elec').checked=false;}
  const hint=document.getElementById('fc-ev-hint');
  if(hint){
    if(isEvent)hint.textContent='Admin will assign your date and time. Share your preferences below.';
    else if(isOnline||isInperson)hint.textContent='You\'ll set your own date and time below.';
    else hint.textContent='';
  }
  // Event card + teacher message
  const evName=lock||(!isOnline&&!isInperson?evVal:'');
  const evCard=document.getElementById('fc-event-card');
  const evCardName=document.getElementById('fc-ev-card-name');
  const evCardMeta=document.getElementById('fc-ev-card-meta');
  const msgBox=document.getElementById('fc-teacher-msg-box');
  if(evName&&isEvent){
    const evObj=availEvents.find(e=>e.name===evName);
    evCard.style.display='block';
    evCardName.textContent=evName;
    const metaParts=[];
    if(evObj){
      if(evObj.startDate){
        const ds=evObj.startDate===evObj.endDate||!evObj.endDate?fD(evObj.startDate):fD(evObj.startDate)+' \u2013 '+fD(evObj.endDate);
        metaParts.push('<span style="font-size:13px;font-family:sans-serif;color:var(--text2);display:flex;align-items:center;gap:5px"><i class="ti ti-calendar" style="font-size:13px"></i> '+ds+'</span>');
      }
      if(evObj.address)metaParts.push('<span style="font-size:13px;font-family:sans-serif;color:var(--text2);display:flex;align-items:center;gap:5px"><i class="ti ti-map-pin" style="font-size:13px"></i> '+escH(evObj.address)+'</span>');
    }
    evCardMeta.innerHTML=metaParts.join('');
    if(evObj&&evObj.teacherMsg){
      msgBox.style.display='block';
      msgBox.textContent=evObj.teacherMsg;
    } else {
      msgBox.style.display='none';
    }
  } else {
    evCard.style.display='none';
    msgBox.style.display='none';
  }
  // Show form body if a valid selection has been made
  showFormBody(!!(lock||evVal));
}
function toggleEmLevelPill(btn){
  btn.classList.toggle('active');
  const vals=[...document.querySelectorAll('#em-level-pills .level-pill.active')].map(b=>b.dataset.val);
  document.getElementById('em-level').value=vals.join(',');
}
function toggleLevelPill(btn){
  btn.classList.toggle('active');
  const vals=[...document.querySelectorAll('#fc-level-pills .level-pill.active')].map(b=>b.dataset.val);
  document.getElementById('fc-level').value=vals.join(',');
}
function getAudience(){
  const tags=[];
  if(document.getElementById('fc-aud-newcomer')?.checked)tags.push('newcomer-friendly');
  if(document.getElementById('fc-aud-kids')?.checked)tags.push('kids-welcome');
  if(document.getElementById('fc-aud-adults')?.checked)tags.push('adults-only');
  return tags.join(',');
}
document.getElementById('fc-da').min=new Date().toISOString().slice(0,10);

function renderTimePrefPicker(evName){
  const wrap=document.getElementById('fc-tpref-wrap');
  const hidden=document.getElementById('fc-tpref');
  if(!wrap||!hidden)return;
  if(!evName){wrap.innerHTML='';hidden.value='';return;}
  const ev=availEvents.find(e=>e.name===evName);
  const sched=ev&&ev.daySchedule&&ev.daySchedule.length?ev.daySchedule.filter(d=>d.start&&d.end):null;
  if(!sched||!sched.length){
    wrap.innerHTML='<textarea id="fc-tpref-text" class="form-textarea" style="min-height:60px;width:100%" placeholder="e.g. Friday afternoon preferred, avoid Saturday morning"></textarea>';
    const ta=wrap.querySelector('#fc-tpref-text');
    ta.addEventListener('input',()=>hidden.value=ta.value.trim());
    hidden.value='';
    return;
  }

  function toMins(t){const[h,m]=t.split(':').map(Number);return h*60+(m||0);}
  function fmt12(mins){
    const h=Math.floor(mins/60),m=mins%60;
    const ampm=h<12?'am':'pm';
    const h12=h===0?12:h>12?h-12:h;
    return m?h12+':'+String(m).padStart(2,'0')+ampm:h12+ampm;
  }

  function syncHidden(){
    const parts=[];
    wrap.querySelectorAll('.tpref-day-row').forEach(row=>{
      const cb=row.querySelector('.tpref-cb');
      if(!cb||!cb.checked)return;
      const dayLabel=row.dataset.label;
      const startMins=parseInt(row.dataset.startMins);
      const lo=parseInt(row.querySelector('.tpref-lo').value);
      const hi=parseInt(row.querySelector('.tpref-hi').value);
      parts.push(dayLabel+': '+fmt12(startMins+lo)+'\u2013'+fmt12(startMins+hi));
    });
    hidden.value=parts.join(' \u00b7 ');
  }

  const maxTotalMins=Math.max(...sched.map(d=>toMins(d.end)-toMins(d.start)));
  wrap.innerHTML=sched.map((day,i)=>{
    const d=new Date(day.date+'T00:00:00');
    const dayLabel=d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
    const startMins=toMins(day.start);
    const endMins=toMins(day.end);
    const totalMins=endMins-startMins;
    const trackPct=Math.round(totalMins/maxTotalMins*100);
    return `<div class="tpref-day-row" data-date="${day.date}" data-label="${dayLabel}" data-start-mins="${startMins}" data-end-mins="${endMins}" style="display:flex;flex-direction:column;gap:8px;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius);background:var(--bg2)">
  <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-family:sans-serif;font-size:13px;font-weight:600;color:var(--text)">
    <input type="checkbox" class="tpref-cb" style="width:16px;height:16px;accent-color:var(--accent);cursor:pointer">
    ${dayLabel}
    <span class="tpref-range-label" style="margin-left:auto;font-size:12px;font-weight:400;color:var(--text2);font-style:italic">&mdash; not available</span>
  </label>
  <div class="tpref-slider-wrap" style="display:none;flex-direction:column;gap:6px;padding:0 4px">
    <div style="position:relative;height:36px">
      <div style="position:absolute;top:50%;left:0;width:${trackPct}%;height:6px;background:var(--bg3);border-radius:3px;transform:translateY(-50%)"></div>
      <div class="tpref-fill" style="position:absolute;top:50%;height:6px;background:var(--accent);border-radius:3px;transform:translateY(-50%);left:0%;right:${100-trackPct}%"></div>
      <input type="range" class="tpref-lo" min="0" max="${totalMins}" step="30" value="0"
        style="position:absolute;width:${trackPct}%;top:50%;transform:translateY(-50%);appearance:none;-webkit-appearance:none;background:transparent;pointer-events:none;height:36px;margin:0">
      <input type="range" class="tpref-hi" min="0" max="${totalMins}" step="30" value="${totalMins}"
        style="position:absolute;width:${trackPct}%;top:50%;transform:translateY(-50%);appearance:none;-webkit-appearance:none;background:transparent;pointer-events:none;height:36px;margin:0">
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;font-family:sans-serif;color:var(--text2);width:${trackPct}%">
      <span>${fmt12(startMins)}</span><span>${fmt12(endMins)}</span>
    </div>
  </div>
</div>`;
  }).join('');

  if(!document.getElementById('tpref-thumb-style')){
    const s=document.createElement('style');
    s.id='tpref-thumb-style';
    s.textContent=`.tpref-lo::-webkit-slider-thumb,.tpref-hi::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;border-radius:50%;background:var(--accent);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3);pointer-events:all;cursor:grab}.tpref-lo::-moz-range-thumb,.tpref-hi::-moz-range-thumb{width:24px;height:24px;border-radius:50%;background:var(--accent);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.3);pointer-events:all;cursor:grab;border:2px solid #fff}`;
    document.head.appendChild(s);
  }

  wrap.querySelectorAll('.tpref-day-row').forEach(row=>{
    const cb=row.querySelector('.tpref-cb');
    const sliderWrap=row.querySelector('.tpref-slider-wrap');
    const lo=row.querySelector('.tpref-lo');
    const hi=row.querySelector('.tpref-hi');
    const fill=row.querySelector('.tpref-fill');
    const rangeLabel=row.querySelector('.tpref-range-label');
    const startMins=parseInt(row.dataset.startMins);
    const endMins=parseInt(row.dataset.endMins);
    const totalMins=endMins-startMins;
    const minWindow=Math.min(240,totalMins);

    const trackFrac=totalMins/maxTotalMins;
    function updateFill(){
      const loVal=parseInt(lo.value),hiVal=parseInt(hi.value);
      fill.style.left=(loVal/maxTotalMins*100)+'%';
      fill.style.right=(100-(hiVal/maxTotalMins*100))+'%';
      rangeLabel.textContent=fmt12(startMins+loVal)+'\u2013'+fmt12(startMins+hiVal);
      lo.style.zIndex=loVal>=totalMins-minWindow?'3':'2';
    }

    lo.addEventListener('input',()=>{
      if(parseInt(lo.value)>parseInt(hi.value)-minWindow)lo.value=parseInt(hi.value)-minWindow;
      updateFill();syncHidden();
    });
    hi.addEventListener('input',()=>{
      if(parseInt(hi.value)<parseInt(lo.value)+minWindow)hi.value=parseInt(lo.value)+minWindow;
      updateFill();syncHidden();
    });
    cb.addEventListener('change',()=>{
      sliderWrap.style.display=cb.checked?'flex':'none';
      if(cb.checked)updateFill();
      else rangeLabel.textContent='\u2014 not available';
      syncHidden();
    });

    // Single-day event: auto-check and open the slider
    if(sched.length===1){
      cb.checked=true;
      cb.closest('label').style.pointerEvents='none';
      sliderWrap.style.display='flex';
      updateFill();
      syncHidden();
    } else {
      updateFill();
    }
  });
}
function updateCharCount(id, max){
  const el=document.getElementById(id);
  const counter=document.getElementById(id+'-count');
  if(!el||!counter)return;
  const remaining=max-el.value.length;
  counter.textContent=remaining;
  counter.style.color=remaining<50?'#c0392b':remaining<100?'#e67e22':'';
}
function applySubmitTimeConstraints(){const ev=document.getElementById('fc-ev')?.value;const ti=document.getElementById('fc-ti');if(ti)applyEvTimeConstraints(ti,ev&&ev!=='__online__'&&ev!=='__inperson__'?ev:'');}
function handleThumbUpload(input){
  const file=input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const dataUrl=e.target.result;
    document.getElementById('fc-img').value=dataUrl;
    document.getElementById('fc-img-preview-img').src=dataUrl;
    document.getElementById('fc-img-preview').style.display='block';
    document.getElementById('fc-img-label-txt').textContent=file.name;
  };
  reader.readAsDataURL(file);
}
function previewCard(){
  const title=document.getElementById('fc-t').value.trim()||'Untitled class';
  const teacherRaw=document.getElementById('fc-tc').value.trim()||'Your name';
  const ttl=document.getElementById('fc-ttl')?.value.trim()||'';
  const displayTeacher=(ttl?ttl+' ':'')+teacherRaw;
  const descRaw=document.getElementById('fc-d').value.trim();
  const desc=descRaw?escH(descRaw):'<em style="color:var(--text2);opacity:.6">No description yet.</em>';
  const topic=document.getElementById('fc-tp')?.value||'';
  const fee=document.getElementById('fc-fe').value.trim();
  const bring=document.getElementById('fc-br').value.trim();
  const duration=document.getElementById('fc-du').value;
  const max=document.getElementById('fc-mx').value;
  const format=document.getElementById('fc-fm')?.value||'in-person';
  const bio=document.getElementById('fc-bio').value.trim();
  const imageUrl=document.getElementById('fc-img').value.trim();
  const profileDataUrl=document.getElementById('fc-profile').value||'';
  const levelEl=document.getElementById('fc-level');
  const levels=(levelEl&&levelEl.value)?levelEl.value.split(',').filter(Boolean):[];
  const newcomer=document.getElementById('fc-aud-newcomer')?.checked;
  const kids=document.getElementById('fc-aud-kids')?.checked;
  const adults=document.getElementById('fc-aud-adults')?.checked;

  // Square thumbnail — matches real card exactly
  const thumbColor=getTopicColor(topic);
  const thumb=imageUrl
    ?'<img class="card-thumb-sq" src="'+imageUrl+'" alt="">'
    :'<div class="card-thumb-sq-placeholder" style="background:'+thumbColor+'" title="'+escH(topic||'')+'"></div>';
  const formatBadge='<span class="tag '+(format==='zoom'?'zoom':'in-person')+' card-thumb-badge">'+(format==='zoom'?'Online':'In person')+'</span>';
  const thumbWrap='<div class="card-thumb-wrap">'+thumb+formatBadge+'</div>';

  // Pills
  const fp=fee?'<span class="logistics-pill fee"><i class="ti ti-coin"></i> '+escH(fee)+'</span>':'<span class="logistics-pill free"><i class="ti ti-check"></i> Free</span>';
  const bp=bring?'<span class="logistics-pill"><i class="ti ti-backpack"></i> Bring: '+escH(bring)+'</span>':'';
  const duNum=parseInt(duration)||60;
  const duPill='<span class="logistics-pill"><i class="ti ti-clock"></i> '+(duNum<60?duNum+'min':Math.floor(duNum/60)+(duNum%60?'.5':'')+'h')+'</span>';

  // Teacher meta
  const bioBtn=bio?'<button class="bio-btn" tabindex="0" aria-label="Teacher bio" data-bio-name="'+escH(displayTeacher)+'" data-bio-badges="" data-bio-img="'+escH(profileDataUrl)+'" data-bio-text="'+escH(bio)+'" onclick="openBioModal(this)"><i class="ti ti-info-circle"></i></button>':'';
  const teacherLine='<i class="ti ti-user" style="color:var(--accent-mid)"></i> '+escH(displayTeacher)+bioBtn;

  // Tags
  const allTags=[];
  levels.forEach(l=>allTags.push('<span class="card-tag level">'+escH(l)+'</span>'));
  if(newcomer)allTags.push('<span class="card-tag newcomer">★ Newcomers</span>');
  if(kids)allTags.push('<span class="card-tag kids">Kids welcome</span>');
  if(adults)allTags.push('<span class="card-tag adults">18+ only</span>');
  const tagRow=allTags.length?'<div class="card-tags">'+allTags.join('')+'</div>':'';

  // Spots line
  const sp=max?'<span class="spots">0 / '+max+'</span>':'<span class="spots">Open enrollment</span>';

  const html='<div class="class-card">'
    +'<div class="card-top-row" style="margin-bottom:14px">'+thumbWrap+'<div class="card-top-text"><div class="card-title" style="margin-bottom:0">'+escH(title)+'</div></div></div>'
    +'<div class="card-desc" style="margin-bottom:8px">'+desc+'</div>'
    +'<div class="card-meta" style="margin-bottom:8px"><span class="meta-teacher">'+teacherLine+'</span></div>'
    +tagRow
    +'<div class="card-logistics">'+duPill+fp+bp+'</div>'
    +'<div class="card-footer">'+sp+'<button class="enroll-btn" disabled>Register</button></div>'
    +'</div>';

  document.getElementById('preview-card-wrap').innerHTML=html;
  document.getElementById('preview-modal').classList.add('open');
}
function clearThumbUpload(){
  document.getElementById('fc-img').value='';
  document.getElementById('fc-img-preview-img').src='';
  document.getElementById('fc-img-preview').style.display='none';
  document.getElementById('fc-img-label-txt').textContent='Choose a photo…';
  const fileInput=document.querySelector('#fc-img-label input[type=file]');
  if(fileInput)fileInput.value='';
}

function handleProfileUpload(input){
  const file=input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    const dataUrl=e.target.result;
    document.getElementById('fc-profile').value=dataUrl;
    document.getElementById('fc-profile-img').src=dataUrl;
    document.getElementById('fc-profile-img').style.display='block';
    document.getElementById('fc-profile-placeholder').style.display='none';
    document.getElementById('fc-profile-label-txt').textContent=file.name;
    document.getElementById('fc-profile-clear').style.display='inline';
  };
  reader.readAsDataURL(file);
}
function clearProfileUpload(){
  document.getElementById('fc-profile').value='';
  document.getElementById('fc-profile-img').src='';
  document.getElementById('fc-profile-img').style.display='none';
  document.getElementById('fc-profile-placeholder').style.display='flex';
  document.getElementById('fc-profile-label-txt').textContent='Choose photo…';
  document.getElementById('fc-profile-clear').style.display='none';
  const fi=document.querySelector('#fc-profile-label input[type=file]');
  if(fi)fi.value='';
}

function lookupTeacher(){
  const email=(document.getElementById('fc-lookup-email')?.value||'').toLowerCase().trim();
  const result=document.getElementById('fc-lookup-result');
  if(!result)return;
  if(!email){result.style.display='none';closeHistoryPanel();return;}

  const t=allTeachers[email];
  result.style.display='block';

  if(t){
    // Pre-fill About You
    if(t.title)document.getElementById('fc-ttl').value=t.title;
    if(t.name)document.getElementById('fc-tc').value=t.name;
    document.getElementById('fc-em').value=email;
    if(t.barony)document.getElementById('fc-bt').value=t.barony;
    if(t.phone)document.getElementById('fc-ph').value=t.phone;
    if(t.bio)document.getElementById('fc-bio').value=t.bio;
    PEERAGES.forEach(p=>{const cb=document.getElementById('fc-p-'+p.key);if(cb)cb.checked=(t.peerages||[]).includes(p.key);});
    // Pre-fill profile photo if teacher has one
    if(t.imageUrl){
      document.getElementById('fc-profile').value=t.imageUrl;
      document.getElementById('fc-profile-img').src=t.imageUrl;
      document.getElementById('fc-profile-img').style.display='block';
      document.getElementById('fc-profile-placeholder').style.display='none';
      document.getElementById('fc-profile-label-txt').textContent='Photo loaded';
      document.getElementById('fc-profile-clear').style.display='inline';
    }

    const displayName=(t.title?t.title+' ':'')+t.name;
    result.innerHTML='<div class="lookup-welcome"><div class="lookup-welcome-icon">🎉</div><div><div class="lookup-welcome-name">'+escH(displayName)+'</div><div class="lookup-welcome-msg">Great to have you back! Profile loaded — past classes are below. Hit &quot;Teach again&quot; to pre-fill the form.</div></div></div>';
    openHistoryPanel(t);
  } else {
    result.innerHTML='<div class="lookup-no-match"><i class="ti ti-user-plus" style="font-size:18px;color:var(--accent-mid);flex-shrink:0"></i><div><strong style="color:var(--text)">First time teaching with us?</strong><br>No worries — just fill in the form below. Your profile will be created automatically when you submit.</div></div>';
    // Pre-fill email into the form field
    document.getElementById('fc-em').value=email;
    closeHistoryPanel();
  }
}

let _thpEmail='',_thpPage=0;
const THP_PAGE_SIZE=5;

function openHistoryPanel(t){
  const panel=document.getElementById('teacher-history-panel');
  if(!panel)return;
  _thpEmail=(t.email||'').toLowerCase();
  _thpPage=0;
  const displayName=(t.title?t.title+' ':'')+t.name;
  const thpName=document.getElementById('thp-name');if(thpName)thpName.textContent=displayName;
  renderThpPage();
  panel.style.display='block';
  document.getElementById('thp-reopen-btn')?.remove();
}

function renderThpPage(){
  const t=allTeachers[_thpEmail];
  if(!t)return;
  // Sort most recent first by date, fallback to original order
  const sorted=[...(t.classes||[])].sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  const total=sorted.length;
  const totalPages=Math.ceil(total/THP_PAGE_SIZE);
  const page=sorted.slice(_thpPage*THP_PAGE_SIZE,(_thpPage+1)*THP_PAGE_SIZE);
  const wrap=document.getElementById('thp-classes');
  const pag=document.getElementById('thp-pagination');
  if(!total){
    wrap.innerHTML='<div style="font-size:12px;font-family:sans-serif;color:var(--text2);padding-top:6px;font-style:italic">No class history yet.</div>';
    if(pag)pag.innerHTML='';
    return;
  }
  // Find original indices for teachAgain
  // Find original indices for teachAgain
  wrap.innerHTML=page.map(cls=>{
    const origIdx=(t.classes||[]).findIndex(x=>String(x.id)===String(cls.id));
    return `<div class="thp-class">
      <div class="thp-class-info">
        <div class="thp-class-title">${escH(cls.title)}</div>
        <div class="thp-class-meta">${[cls.topic,cls.event,cls.date].filter(Boolean).map(escH).join(' · ')}</div>
      </div>
      <button class="teach-again-btn" onclick="teachAgain(${origIdx},'${escH(_thpEmail)}')">&#x21ba; Teach again</button>
    </div>`;
  }).join('');
  // Pagination
  if(pag){
    if(totalPages<=1){pag.innerHTML='';return;}
    const prev=_thpPage>0?`<button onclick="_thpPage--;renderThpPage()" style="background:none;border:1px solid var(--border2);border-radius:var(--radius);padding:2px 8px;font-size:11px;cursor:pointer;font-family:sans-serif">← Prev</button>`:'<span></span>';
    const next=_thpPage<totalPages-1?`<button onclick="_thpPage++;renderThpPage()" style="background:none;border:1px solid var(--border2);border-radius:var(--radius);padding:2px 8px;font-size:11px;cursor:pointer;font-family:sans-serif">Next →</button>`:'<span></span>';
    pag.innerHTML=prev+`<span style="color:var(--text2);flex:1;text-align:center">${_thpPage+1} / ${totalPages}</span>`+next;
  }
}

function collapseHistoryPanel(){
  const panel=document.getElementById('teacher-history-panel');
  if(panel)panel.style.display='none';
  const result=document.getElementById('fc-lookup-result');
  if(result&&!document.getElementById('thp-reopen-btn')){
    const btn=document.createElement('button');
    btn.id='thp-reopen-btn';
    btn.className='teach-again-btn';
    btn.style.cssText='margin-top:8px;display:inline-flex;align-items:center;gap:5px';
    btn.innerHTML='\u21ba Show past classes';
    btn.onclick=()=>{if(panel)panel.style.display='block';btn.remove();};
    result.appendChild(btn);
  }
}

function closeHistoryPanel(){
  const panel=document.getElementById('teacher-history-panel');
  if(panel)panel.style.display='none';
  document.getElementById('thp-reopen-btn')?.remove();
  _thpEmail='';_thpPage=0;
}

function teachAgain(idx,email){
  const t=allTeachers[email.toLowerCase()];
  if(!t)return;
  const cls=allAdminClasses.concat(allClasses).find(c=>String(c.id)===String((t.classes[idx]||{}).id));
  if(!cls)return;
  if(cls.title)document.getElementById('fc-t').value=cls.title;
  if(cls.topic)populateTopicSelect('fc-tp',false,true,cls.topic);
  if(cls.desc)document.getElementById('fc-d').value=cls.desc;
  if(cls.bio)document.getElementById('fc-bio').value=cls.bio;
  if(cls.fee)document.getElementById('fc-fe').value=cls.fee;
  if(cls.bring)document.getElementById('fc-br').value=cls.bring;
  if(cls.max)document.getElementById('fc-mx').value=cls.max;
  if(cls.duration)document.getElementById('fc-du').value=String(cls.duration);
  document.querySelectorAll('#fc-level-pills .level-pill').forEach(b=>b.classList.remove('active'));
  document.getElementById('fc-level').value='';
  if(cls.level){(cls.level.split?cls.level.split(','):[cls.level]).forEach(lv=>{const b=document.querySelector('#fc-level-pills .level-pill[data-val="'+lv.trim()+'"]');if(b){b.classList.add('active');const hid=document.getElementById('fc-level');hid.value=(hid.value?hid.value+',':'')+lv.trim();}});}
  document.getElementById('fc-aud-newcomer').checked=(cls.audience||'').includes('newcomer-friendly');
  document.getElementById('fc-aud-kids').checked=(cls.audience||'').includes('kids-welcome');
  document.getElementById('fc-aud-adults').checked=(cls.audience||'').includes('adults-only');
  // Reveal form body
  showFormBody(true);
  // Collapse panel
  collapseHistoryPanel();
  // Scroll and flash title
  document.getElementById('fc-t').scrollIntoView({behavior:'smooth',block:'center'});
  const tf=document.getElementById('fc-t');
  tf.style.transition='background .3s';tf.style.background='var(--accent-light)';
  setTimeout(()=>{tf.style.background='';},800);
}

async function submitClass(){
  // Clear previous errors
  document.querySelectorAll('.field-error').forEach(el=>el.classList.remove('field-error'));
  document.querySelectorAll('.label-error').forEach(el=>el.classList.remove('label-error'));
  function markErr(id){
    const el=document.getElementById(id);
    if(el){el.classList.add('field-error');el.scrollIntoView({behavior:'smooth',block:'center'});
      el.addEventListener('input',()=>el.classList.remove('field-error'),{once:true});
      el.addEventListener('change',()=>el.classList.remove('field-error'),{once:true});
    }
    // Also mark the label red
    const label=el&&el.closest('.form-full,.form-col')?.querySelector('.form-label');
    if(label)label.classList.add('label-error');
  }
  const t=document.getElementById('fc-t').value.trim(),tc=document.getElementById('fc-tc').value.trim();
  const em=document.getElementById('fc-em').value.trim();
  const desc=document.getElementById('fc-d').value.trim();
  const lock=lockedEvent;
  const evRaw=document.getElementById('fc-ev').value;
  let hasErr=false;
  if(!desc){markErr('fc-d');hasErr=true;}
  if(em&&!em.includes('@')){markErr('fc-em');hasErr=true;}
  if(!em){markErr('fc-em');hasErr=true;}
  if(!tc){markErr('fc-tc');hasErr=true;}
  if(!t){markErr('fc-t');hasErr=true;}
  if(!evRaw&&!lock){markErr('fc-ev');hasErr=true;}
  const feeVal=document.getElementById('fc-fe').value.trim();
  if(feeVal&&!/^\$?[\d]+(\.\d{1,2})?$/.test(feeVal)){markErr('fc-fe');hasErr=true;}
  // For multi-day events, require at least one day selected
  const tprefWrap=document.getElementById('fc-tpref-wrap');
  const dayRows=tprefWrap?tprefWrap.querySelectorAll('.tpref-day-row'):[];
  if(dayRows.length>1){
    const anyChecked=[...dayRows].some(r=>r.querySelector('.tpref-cb')?.checked);
    if(!anyChecked){
      tprefWrap.style.outline='2px solid #c0392b';
      tprefWrap.style.borderRadius='var(--radius)';
      tprefWrap.scrollIntoView({behavior:'smooth',block:'center'});
      tprefWrap.addEventListener('change',()=>{tprefWrap.style.outline='';},{once:true});
      hasErr=true;
    }
  }
  if(hasErr)return;
  const isOnline=evRaw==='__online__';
  const isInperson=evRaw==='__inperson__';
  const evVal=(isOnline||isInperson)?'':evRaw;
  const isEventClass=!!(lock||(evVal&&!isOnline&&!isInperson));
  const da=document.getElementById('fc-da').value,ti=document.getElementById('fc-ti').value;
  if(!isEventClass&&(!da||!ti)){alert('Please enter a date and time for your class.');return;}
  if(!isEventClass&&da){
    const chosen=new Date(da+'T'+ti);
    if(chosen<new Date()){alert('Please choose a date and time in the future.');return;}
  }
  const btn=document.querySelector('.submit-action');btn.disabled=true;btn.innerHTML='<span class="spinner"></span> Submitting...';
  const res=await api({
    action:'submitClass',title:t,teacher:tc,teacherTitle:(document.getElementById('fc-ttl')?document.getElementById('fc-ttl').value.trim():''),email:document.getElementById('fc-em').value.trim(),
    barony:document.getElementById('fc-bt')?document.getElementById('fc-bt').value.trim():'',
    phone:document.getElementById('fc-ph').value.trim(),
    peerages:PEERAGES.map(p=>p.key).filter(k=>{const cb=document.getElementById('fc-p-'+k);return cb&&cb.checked;}).join(','),
    bio:document.getElementById('fc-bio').value.trim(),
    imageUrl:document.getElementById('fc-img').value.trim(),
    topic:document.getElementById('fc-tp').value,format:document.getElementById('fc-fm')?.value||'in-person',
    max:document.getElementById('fc-mx').value||'',fee:document.getElementById('fc-fe').value.trim(),
    duration:document.getElementById('fc-du').value,bring:document.getElementById('fc-br').value.trim(),
    desc:document.getElementById('fc-d').value.trim(),level:document.getElementById('fc-level').value,audience:getAudience(),electricity:document.getElementById('fc-elec').checked?'1':'',
    zoomLink:document.getElementById('fc-zl')?document.getElementById('fc-zl').value.trim():'',
    address:document.getElementById('fc-addr')?document.getElementById('fc-addr').value.trim():'',
    date:da,time:ti,event:lock||evVal,
    timepref:document.getElementById('fc-tpref')?document.getElementById('fc-tpref').value.trim():'',
    repeat:document.getElementById('fc-rp')?document.getElementById('fc-rp').value:'',
    notes:document.getElementById('fc-no').value.trim()
  });
  btn.disabled=false;btn.innerHTML='<i class="ti ti-send"></i> Submit class';
  if(!res.ok){alert(res.error||'Submission failed.');return;}
  document.querySelector('.submit-form').style.display='none';
  document.getElementById('submit-ok').style.display='block';
  ['fc-t','fc-tc','fc-ttl','fc-em','fc-bt','fc-ph','fc-bio','fc-img','fc-d','fc-fe','fc-br','fc-da','fc-ti','fc-no'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  PEERAGES.forEach(p=>{const cb=document.getElementById('fc-p-'+p.key);if(cb)cb.checked=false;});
  document.querySelectorAll('#fc-level-pills .level-pill').forEach(b=>b.classList.remove('active'));
  document.getElementById('fc-level').value='';
  ['fc-aud-newcomer','fc-aud-kids','fc-aud-adults','fc-elec'].forEach(id=>{const el=document.getElementById(id);if(el)el.checked=false;});
}
function resetSubmitForm(){
  document.querySelector('.submit-form').style.display='block';
  document.getElementById('submit-ok').style.display='none';
  clearThumbUpload();
  renderTimePrefPicker(null);
  document.getElementById('fc-ev').value='';
  fcEvChange();
  showFormBody(false);
  // Reset lookup
  const le=document.getElementById('fc-lookup-email');if(le)le.value='';
  const lr=document.getElementById('fc-lookup-result');if(lr){lr.style.display='none';lr.innerHTML='';}
  closeHistoryPanel();
}

function initAdmin(){
  if(adminToken){document.getElementById('admin-lock-wrap').style.display='none';document.getElementById('admin-panel').style.display='block';loadAdmin();}
  else{document.getElementById('admin-lock-wrap').style.display='block';document.getElementById('admin-panel').style.display='none';}
}
function updateAdminNavBtn(){
  const btn=document.getElementById('nav-admin');
  if(!btn)return;
  if(adminToken){
    btn.innerHTML='<i class="ti ti-lock-open"></i>';
    btn.title='Admin (unlocked) — click to lock';
    btn.style.background='rgba(255,255,255,.2)';
    btn.style.color='#fff';
    btn.style.borderColor='rgba(255,255,255,.5)';
  } else {
    btn.innerHTML='<i class="ti ti-settings"></i>';
    btn.title='Admin';
    btn.style.background='';
    btn.style.color='';
    btn.style.borderColor='';
  }
}
function handleAdminNav(btn){
  if(adminToken){
    doLogout();
  } else {
    showPanel('admin',btn);
  }
}
function doLogout(){
  adminToken=null;
  sessionStorage.removeItem('aT');
  document.getElementById('admin-lock-wrap').style.display='block';
  document.getElementById('admin-panel').style.display='none';
  document.getElementById('lock-pw').value='';
  document.getElementById('lock-err').style.display='none';
  // Deactivate the admin nav button
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector('.nav-btn:first-child').classList.add('active');
  showPanel('catalog',document.querySelector('.nav-btn:first-child'));
  updateAdminNavBtn();
}
async function doLogin(){
  const pw=document.getElementById('lock-pw').value;
  const res=await api({action:'adminLogin',password:pw});
  if(!res.ok){document.getElementById('lock-err').style.display='block';return;}
  adminToken=res.token;
  if(!IS_DEMO) sessionStorage.setItem('aT',adminToken);
  document.getElementById('lock-err').style.display='none';
  document.getElementById('admin-lock-wrap').style.display='none';
  document.getElementById('admin-panel').style.display='block';
  updateAdminNavBtn();
  loadAdmin();
}
async function loadAdmin(){
  const res=await api({action:'adminGetPending',token:adminToken});
  if(!res.ok)return;
  pendingClasses=res.pending||[];
  pendingClasses.forEach(upsertTeacher);
  document.getElementById('pending-count').textContent=pendingClasses.length;
  const acRes=await api({action:'adminGetClasses',token:adminToken});
  if(acRes.ok){allAdminClasses=acRes.classes;allAdminClasses.forEach(upsertTeacher);}
  renderPending();renderApproved();
  // Populate ev-picker and grid-ev
  ['ev-picker','acf-ev','rpt-ev'].forEach(sid=>{
    const gs=document.getElementById(sid);if(!gs)return;
    const cur=gs.value;
    gs.innerHTML=sid==='ev-picker'?'<option value="">— select an event to manage —</option>':'<option value="">Select event\u2026</option>';
    availEvents.forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;gs.appendChild(o);});
    if(cur)gs.value=cur;
  });
  showAdminTab('classes');
  // req-admin-filter
  const raf=document.getElementById('req-admin-filter');
  if(raf){
    raf.innerHTML='<option value="">All events</option><option value="__general__">General only</option>';
    availEvents.forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;raf.appendChild(o);});
  }
}
function getAdminClassFilters(){
  const q=(document.getElementById('acf-q')?.value||'').toLowerCase();
  const ev=document.getElementById('acf-ev')?.value||'';
  const tp=document.getElementById('acf-tp')?.value||'';
  const fm=document.getElementById('acf-fm')?.value||'';
  return {q,ev,tp,fm};
}
function matchesAdminFilter(c,{q,ev,tp,fm}){
  if(ev&&c.event!==ev)return false;
  if(tp&&c.topic!==tp)return false;
  if(fm&&c.format!==fm)return false;
  if(q&&!c.title.toLowerCase().includes(q)&&!(c.teacher||'').toLowerCase().includes(q))return false;
  return true;
}
function renderPending(){
  const f=getAdminClassFilters();
  const l=document.getElementById('pending-list');
  const filtered=pendingClasses.filter(c=>matchesAdminFilter(c,f));
  if(!filtered.length){l.innerHTML='<div class="no-items">'+(pendingClasses.length?'No pending submissions match your filters.':'No pending submissions.')+'</div>';return;}
  l.innerHTML=filtered.map(c=>{
    const hasDatetime=c.date&&c.time;
    return '<div class="pending-card">'
      +(c.event?'<div style="font-size:11px;font-family:sans-serif;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--accent-mid);margin-bottom:4px"><i class="ti ti-calendar-event"></i> '+c.event+'</div>':'')
      +'<div class="pending-header"><div class="pending-title">'+c.title+'</div>'
      +(c.sessionTotal>1?'<span style="font-size:11px;font-family:sans-serif;font-weight:700;padding:2px 8px;border-radius:10px;background:var(--gold-light);color:var(--gold);border:1px solid var(--gold-mid);white-space:nowrap">Session '+c.sessionNum+' of '+c.sessionTotal+'</span>':'')
      +'</div>'
      +'<div class="pending-teacher">'+c.teacher+(c.email?' \u00b7 '+c.email:'')+(c.phone?' \u00b7 <i class="ti ti-phone" style="font-size:11px"></i> '+c.phone:'')+'</div>'
      +(c.desc?'<div class="pending-desc">'+c.desc+'</div>':'')
      +'<div class="pending-meta">'
      +(c.topic?'<span><i class="ti ti-tag"></i>'+c.topic+'</span>':'')
      +(c.format?'<span><i class="ti ti-'+(c.format==='zoom'?'video':'map-pin')+'"></i>'+c.format+'</span>':'')
      +(c.duration?'<span><i class="ti ti-clock"></i>'+c.duration+' min</span>':'')
      +(c.max?'<span><i class="ti ti-users"></i>Max '+c.max+'</span>':'')
      +(c.fee?'<span><i class="ti ti-coin"></i>'+c.fee+'</span>':'')
      +(hasDatetime?'<span><i class="ti ti-calendar"></i>'+fD(c.date)+' '+fT(c.time)+'</span>':'')

      +'</div>'
      +(c.level||c.audience||c.electricity?'<div class="card-tags">'
        +(c.level?c.level.split(',').map(l=>'<span class="card-tag level">'+l+'</span>').join(''):'')
        +(c.audience&&c.audience.includes('newcomer-friendly')?'<span class="card-tag newcomer">★ Newcomers</span>':'')
        +(c.audience&&c.audience.includes('kids-welcome')?'<span class="card-tag kids">Kids welcome</span>':'')
        +(c.audience&&c.audience.includes('adults-only')?'<span class="card-tag adults">18+ only</span>':'')
        +(c.electricity?'<span class="card-tag" style="background:#FFF3E0;color:#E65100;border-color:#FFCC80"><i class="ti ti-bolt"></i> Electricity</span>':'')
        +'</div>':'')
      +(c.repeat&&c.repeat!=='once'?'<div style="font-size:12px;color:var(--text2);margin-bottom:6px;font-family:sans-serif"><i class="ti ti-repeat"></i> Wants to teach '+c.repeat+'</div>':'')
      +(c.timepref?'<div class="pending-pref"><i class="ti ti-clock"></i> Scheduling preference: '+c.timepref+'</div>':'')
      +(c.bring?'<div style="font-size:12px;color:var(--text2);margin-bottom:8px;font-family:sans-serif"><i class="ti ti-backpack"></i> Bring: '+c.bring+'</div>':'')
      +(c.notes?'<div style="font-size:12px;color:var(--text2);margin-bottom:8px;font-family:sans-serif"><i class="ti ti-note"></i> '+c.notes+'</div>':'')
      +'<div class="admin-actions">'
      +'<button class="approve-btn" onclick="openApprove(\''+c.id+'\')"><i class="ti ti-check"></i> Approve</button>'
      +'<button class="reject-btn" onclick="doReject(\''+c.id+'\')"><i class="ti ti-x"></i> Reject</button>'
      +'</div></div>';
  }).join('');
}
function renderApproved(){
  const f=getAdminClassFilters();
  const acfBadge=document.getElementById('acf-filter-badge');
  const acfActive=[f.tp,f.fm].filter(Boolean).length;
  if(acfBadge){acfBadge.textContent=acfActive||'';acfBadge.style.display=acfActive?'inline':'none';}
  const acfClear=document.getElementById('acf-clear-wrap');if(acfClear)acfClear.style.display=acfActive?'block':'none';
  const adminGridBtn=document.getElementById('admin-grid-btn');
  if(adminGridBtn)adminGridBtn.style.display=f.ev?'':'none';
  const so=(document.getElementById('acf-so')||{}).value||'date';
  const srcClasses=allAdminClasses.length?allAdminClasses:allClasses;
  const filtered=srcClasses.filter(c=>matchesAdminFilter(c,f)).sort((a,b)=>{
    if(so==='title')return a.title.localeCompare(b.title);
    if(so==='teacher')return(a.teacher||'').localeCompare(b.teacher||'');
    if(so==='regs')return(b.registrationCount||0)-(a.registrationCount||0);
    return(String(a.date)+String(a.time)).localeCompare(String(b.date)+String(b.time));
  });
  document.getElementById('approved-list').innerHTML=filtered.length
    ? filtered.map(c=>{
      const evObj=availEvents.find(e=>e.name===c.event);
      const unpub=!!(c.event&&evObj&&evObj.published===false);
      return '<div class="approved-row"'+(unpub?' style="border-left:4px solid var(--gold-mid)"':'')+'>'
    +'<div class="approved-row-top"><div>'
    +(unpub?'<div style="font-size:11px;font-family:sans-serif;font-weight:700;color:var(--accent-mid);text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px"><i class="ti ti-eye-off"></i> Unpublished event</div>':'')
    +'<div class="approved-name">'+c.title+(c.sessionTotal>1?' <span class="card-tag session" style="font-size:10px;vertical-align:middle">'+c.sessionNum+'/'+c.sessionTotal+'</span>':'')+'</div>'
    +'<div class="approved-sub" style="display:flex;flex-direction:column;gap:2px">'
    +'<span style="font-weight:600;color:var(--text)">'+c.teacher+(c.email?' <span style="font-weight:400;color:var(--text2)">· '+c.email+'</span>':'')+(c.phone?' <span style="font-weight:400;color:var(--text2)">· '+c.phone+'</span>':'')+'</span>'
    +(c.date?'<span><i class="ti ti-calendar" style="font-size:11px"></i> '+fD(c.date)+' · '+fT(c.time)+'</span>':'')
    +((c.event||c.room)?'<span><i class="ti ti-map-pin" style="font-size:11px"></i> '+(c.event||'')+(c.event&&c.room?' · ':'')+( c.room||'')+'</span>':'')
    +(c.topic?'<span><span class="card-tag" style="font-size:10px;padding:1px 6px">'+c.topic+'</span></span>':'')
    +(c.level||c.audience?'<div class="card-tags" style="margin-top:2px;margin-bottom:0">'
      +(c.level?c.level.split(',').map(l=>'<span class="card-tag level">'+l+'</span>').join(''):'')
      +(c.audience&&c.audience.includes('newcomer-friendly')?'<span class="card-tag newcomer">★ Newcomers</span>':'')
      +(c.audience&&c.audience.includes('kids-welcome')?'<span class="card-tag kids">Kids welcome</span>':'')
      +(c.audience&&c.audience.includes('adults-only')?'<span class="card-tag adults">18+ only</span>':'')
      +(c.electricity?'<span class="card-tag" style="background:#FFF3E0;color:#E65100;border-color:#FFCC80"><i class="ti ti-bolt"></i> Electricity</span>':'')
      +'</div>':'')
    +'</div>'
    +(c.waitlistCount?'<div class="wl-detail"><i class="ti ti-clock"></i> '+c.waitlistCount+' on waitlist</div>':'')
    +'</div><div class="reg-count">'+c.registrationCount+(c.max?' / '+c.max:'')+' reg</div></div>'
    +'<div class="approved-row-btns">'
    +'<button class="a-labeled-btn" onclick="showRoster(\''+c.id+'\')"><i class="ti ti-users"></i> View Roster</button>'
    +'<button class="a-labeled-btn" style="color:var(--accent-mid)" onclick="openEditClass(\''+c.id+'\')"><i class="ti ti-pencil"></i> Edit</button>'
    +(c.cancelled?'<span style="font-size:11px;color:var(--red-text);font-weight:700;font-family:sans-serif;padding:5px 8px">Cancelled</span>':'<button class="a-labeled-btn" style="color:var(--red-text)" onclick="doCancelClass(\''+c.id+'\')"><i class="ti ti-ban"></i> Cancel</button>')
    +'<button class="a-labeled-btn" style="color:var(--red-text)" onclick="doRemove(\''+c.id+'\')"><i class="ti ti-trash"></i> Remove</button>'
    +'</div></div>';
    }).join('')
  : '<div class="no-items">'+(allClasses.length?'No published classes match your filters.':'No published classes yet.')+'</div>';
}
function renderDaySchedule(evObj){
  const startVal=document.getElementById('ev-start-date').value;
  const endVal=document.getElementById('ev-end-date').value||startVal;
  const container=document.getElementById('ev-day-schedule');
  if(!container||!startVal)return;
  // Build list of dates
  const dates=[];
  let d=new Date(startVal+'T00:00:00');
  const endD=new Date((endVal||startVal)+'T00:00:00');
  while(d<=endD){dates.push(d.toISOString().slice(0,10));d.setDate(d.getDate()+1);}
  // Existing schedule for pre-filling
  const existing=(evObj&&evObj.daySchedule)||[];
  const isSingle=dates.length===1;
  container.innerHTML=dates.map(date=>{
    const ex=existing.find(x=>x.date===date)||{};
    const label=isSingle?'Class hours':fD(date);
    return '<div class="day-sched-row" data-date="'+date+'" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">'
      +'<span style="font-size:12px;font-family:sans-serif;color:var(--text2);min-width:90px">'+label+'</span>'
      +makeTimeSelect("lg-input ds-start","max-width:110px",ex.start||'09:00')
      +'<span style="font-size:12px;font-family:sans-serif;color:var(--text2)">to</span>'
      +makeTimeSelect("lg-input ds-end","max-width:110px",ex.end||'17:00')
      +'</div>';
  }).join('');
}

function applyEvTimeConstraints(timeEl, evName, date){
  // Works for both <select> (custom time picker) and legacy <input type=time>
  const ev=evName?availEvents.find(e=>e.name===evName):null;
  const sched=ev&&ev.daySchedule&&date?ev.daySchedule.find(x=>x.date===date):null;
  const dayOne=ev&&ev.daySchedule&&ev.daySchedule[0];
  const start=(sched&&sched.start)||(dayOne&&dayOne.start)||null;
  const end=(sched&&sched.end)||(dayOne&&dayOne.end)||null;
  if(timeEl.tagName==='SELECT'){
    const cur=timeEl.value;
    timeEl.innerHTML=makeTimeOptions(cur,
      start?parseInt(start.split(':')[0]):6,
      end?parseInt(end.split(':')[0]):22
    );
    if(cur)timeEl.value=cur;
  } else {
    if(start)timeEl.setAttribute('min',start);else timeEl.removeAttribute('min');
    if(end)timeEl.setAttribute('max',end);else timeEl.removeAttribute('max');
  }
}

function openApprove(id){
  curApprovingId=id;
  const c=IS_DEMO?dP.find(x=>String(x.id)===String(id)):pendingClasses.find(x=>String(x.id)===String(id));
  document.getElementById('am-sub').textContent=(c||{title:id}).title;
  const pn=document.getElementById('am-pref');
  if(c&&c.timepref){pn.style.display='block';pn.innerHTML='<i class="ti ti-clock"></i> Teacher preference: '+c.timepref;}
  const sessionNote=document.getElementById('am-session-note');
  if(sessionNote){
    if(c&&c.sessionTotal>1){sessionNote.style.display='block';sessionNote.textContent='Session '+c.sessionNum+' of '+c.sessionTotal;}
    else{sessionNote.style.display='none';}
  }
  else pn.style.display='none';
  // Populate event dropdown
  const evSel=document.getElementById('am-event');
  evSel.innerHTML='<option value="">— No event / standalone —</option>';
  availEvents.forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;evSel.appendChild(o);});
  evSel.value=c&&c.event?c.event:'';
  // Constrain date to event range and pre-fill
  const dateEl=document.getElementById('am-date');
  const timeEl=document.getElementById('am-time');
  dateEl.removeAttribute('min');dateEl.removeAttribute('max');
  const ev=c&&c.event?availEvents.find(e=>e.name===c.event):null;
  if(ev){
    if(ev.startDate)dateEl.setAttribute('min',ev.startDate);
    if(ev.endDate)dateEl.setAttribute('max',ev.endDate);
    if(ev.startDate&&ev.startDate===ev.endDate)dateEl.value=ev.startDate;
    else dateEl.value=c&&c.date?c.date:'';
  } else dateEl.value=c&&c.date?c.date:'';
  // Pre-fill time from submission
  timeEl.value=c&&c.time?c.time:'';
  applyEvTimeConstraints(timeEl,c&&c.event?c.event:'',dateEl.value||'');
  // Populate room dropdown
  populateRoomDropdown('am-room-sel',c&&c.event?c.event:'','');
  // Show self-reported peerages for confirmation
  const amPWrap=document.getElementById('am-peerages-wrap');
  const amPList=document.getElementById('am-peerages-list');
  const selfReported=(c&&c.peerages?c.peerages.split(',').filter(Boolean):[]);
  if(selfReported.length&&amPWrap&&amPList){
    amPList.innerHTML=selfReported.map(pk=>{
      const pd=PEERAGES.find(x=>x.key===pk);
      if(!pd)return'';
      return'<label style="display:flex;align-items:center;gap:5px;cursor:pointer"><input type="checkbox" class="am-p-cb" data-key="'+pk+'" checked style="accent-color:'+pd.color+'"> '+pd.emoji+' '+pd.label+'</label>';
    }).join('');
    amPWrap.style.display='block';
  } else {
    if(amPWrap)amPWrap.style.display='none';
  }
  // Populate adjustment fields
  document.getElementById('am-title').value=c&&c.title?c.title:'';
  populateTopicSelect('am-topic',false,false,c&&c.topic?c.topic:'');
  document.getElementById('am-duration').value=c&&c.duration?String(c.duration):'60';
  document.getElementById('am-max').value=c&&c.max?c.max:'';
  document.getElementById('am-fee').value=c&&c.fee?c.fee:'';
  // Collapse adjustment panel on each open
  document.getElementById('am-adj-wrap').style.display='none';
  document.getElementById('am-adj-chevron').style.transform='';
  document.getElementById('approve-modal').classList.add('open');
  setTimeout(()=>(dateEl.value?timeEl:dateEl).focus(),50);
}

function amDateChange(){
  const evName=document.getElementById('am-event').value;
  populateTimeSelect('am-time', document.getElementById('am-time').value||'09:00');
}
function amEventChange(){
  const evName=document.getElementById('am-event').value;
  const dateEl=document.getElementById('am-date');
  dateEl.removeAttribute('min');dateEl.removeAttribute('max');
  const ev=evName?availEvents.find(e=>e.name===evName):null;
  if(ev){
    if(ev.startDate)dateEl.setAttribute('min',ev.startDate);
    if(ev.endDate)dateEl.setAttribute('max',ev.endDate);
    if(ev.startDate&&ev.startDate===ev.endDate)dateEl.value=ev.startDate;
  }
  populateTimeSelect('am-time', document.getElementById('am-time').value||'09:00');
  populateRoomDropdown('am-room-sel',evName,'');
}
function toggleAmAdj(){
  const wrap=document.getElementById('am-adj-wrap');
  const chev=document.getElementById('am-adj-chevron');
  const open=wrap.style.display!=='none';
  wrap.style.display=open?'none':'block';
  chev.style.transform=open?'':'rotate(90deg)';
}
async function confirmApprove(){
  const d=document.getElementById('am-date').value,t=document.getElementById('am-time').value,r=getAmRoom();
  if(!d||!t){alert('Date and time are required.');return;}
  // Apply confirmed peerages to teacher record
  const c=IS_DEMO?dP.find(x=>String(x.id)===String(curApprovingId)):pendingClasses.find(x=>String(x.id)===String(curApprovingId));
  const confirmedPeerages=[...document.querySelectorAll('.am-p-cb:checked')].map(cb=>cb.dataset.key);
  if(c&&c.email&&confirmedPeerages.length){
    const key=(c.email||'').toLowerCase();
    if(!allTeachers[key])allTeachers[key]=buildTeacherRecord(c);
    const tr=allTeachers[key];
    confirmedPeerages.forEach(pk=>{if(!(tr.peerages||[]).includes(pk)){tr.peerages=(tr.peerages||[]).concat(pk);}});
    if(tr.peerages_pending)tr.peerages_pending=tr.peerages_pending.filter(pk=>!tr.peerages.includes(pk));
  }
  const btn=document.getElementById('am-confirm');btn.disabled=true;btn.innerHTML='<span class="spinner"></span>';
  const ev=document.getElementById('am-event')?.value||'';
  const adjTitle=document.getElementById('am-title').value.trim();
  const adjTopic=document.getElementById('am-topic').value;
  const adjDuration=document.getElementById('am-duration').value;
  const adjMax=document.getElementById('am-max').value;
  const adjFee=document.getElementById('am-fee').value.trim();
  const res=await api({action:'adminApprove',token:adminToken,id:String(curApprovingId),date:d,time:t,room:r,event:ev,
    title:adjTitle,topic:adjTopic,duration:adjDuration,max:adjMax,fee:adjFee});
  btn.disabled=false;btn.innerHTML='<i class="ti ti-check"></i> Approve &amp; publish';
  if(!res.ok){alert(res.error||'Failed.');return;}
  closeModal('approve-modal');await loadClasses();loadAdmin();
}
async function doReject(id){
  if(!confirm('Reject and delete this submission?'))return;
  await api({action:'adminReject',token:adminToken,id:String(id)});loadAdmin();
}
async function doRemove(id){
  if(!confirm('Remove this class from the catalog?'))return;
  await api({action:'adminRemove',token:adminToken,id:String(id)});
  const i=allClasses.findIndex(c=>String(c.id)===String(id));if(i>=0)allClasses.splice(i,1);
  rC();renderApproved();
}
async function showRoster(classId){
  const res=await api({action:'adminGetRoster',token:adminToken,classId:String(classId)});
  if(!res.ok){alert('Could not load roster.');return;}
  const cls=allAdminClasses.find(c=>String(c.id)===String(classId))||allClasses.find(c=>String(c.id)===String(classId));
  window.roM_currentId=classId;
  document.getElementById('roM-title').textContent='Roster: '+(cls?cls.title:classId);
  const rg=res.roster||[],wl=res.waitlist||[];
  let h='';
  if(!rg.length)h+='<p style="color:var(--text2);margin-bottom:8px">No registrations yet.</p>';
  else h+='<table style="width:100%;border-collapse:collapse;margin-bottom:12px"><tr style="background:var(--bg2)"><th style="text-align:left;padding:5px 8px;font-size:12px;border-bottom:1px solid var(--border2)">SCA Name</th><th style="text-align:left;padding:5px 8px;font-size:12px;border-bottom:1px solid var(--border2)">Email</th><th style="padding:5px 8px;font-size:12px;border-bottom:1px solid var(--border2)">Hidden</th><th style="padding:5px 8px;border-bottom:1px solid var(--border2)"></th></tr>'
    +rg.map(x=>'<tr><td style="padding:5px 8px;font-size:13px;border-bottom:1px solid var(--border)">'+x.scaName+'</td><td style="padding:5px 8px;font-size:12px;color:var(--text2);border-bottom:1px solid var(--border)">'+x.email+'</td><td style="text-align:center;padding:5px 8px;border-bottom:1px solid var(--border)">'+(x.hidden?'(hidden)':'')+'</td><td style="padding:3px 6px;border-bottom:1px solid var(--border)"><button class="reject-btn" style="padding:3px 8px;font-size:11px" onclick="adminRemoveStudent(\''+classId+'\',\''+x.email+'\',false)"><i class="ti ti-x"></i> Remove</button></td></tr>').join('')+'</table>';
  if(wl.length)h+='<div style="font-weight:700;font-size:11px;text-transform:uppercase;color:var(--accent-mid);margin-bottom:6px">Waitlist</div>'
    +'<table style="width:100%;border-collapse:collapse"><tr style="background:var(--bg2)"><th style="text-align:left;padding:5px 8px;font-size:12px">#</th><th style="text-align:left;padding:5px 8px;font-size:12px">SCA Name</th><th style="text-align:left;padding:5px 8px;font-size:12px">Email</th></tr>'
    +wl.map(x=>'<tr><td style="padding:5px 8px;font-size:12px;color:var(--accent-mid)">#'+x.pos+'</td><td style="padding:5px 8px;font-size:13px">'+x.scaName+'</td><td style="padding:5px 8px;font-size:12px;color:var(--text2)">'+x.email+'</td><td style="padding:3px 6px"><button class="reject-btn" style="padding:3px 8px;font-size:11px" onclick="adminRemoveStudent(\''+classId+'\',\''+x.email+'\',true)"><i class="ti ti-x"></i> Remove</button></td></tr>').join('')+'</table>';
  document.getElementById('roM-body').innerHTML=h;
  document.getElementById('roM-print-btn').style.display='';
  document.getElementById('roster-modal').classList.add('open');
}

async function adminRemoveStudent(classId,email,fromWaitlist){
  if(!confirm('Remove '+(fromWaitlist?'from waitlist':'from class')+'?'))return;
  const action=fromWaitlist?'leaveWaitlist':'unregister';
  const res=await api({action,classId:String(classId),email,token:adminToken});
  if(!res.ok){alert(res.error||'Could not remove student.');return;}
  // Update local allClasses count
  const c=allClasses.find(x=>String(x.id)===String(classId));
  if(c){
    if(fromWaitlist){c.waitlistCount=Math.max(0,(c.waitlistCount||1)-1);}
    else{c.registrationCount=Math.max(0,(c.registrationCount||1)-1);}
  }
  renderApproved();
  showRoster(classId);
}

async function printRoster(classId){
  const res = await api({action:'adminGetRoster', token:adminToken, classId:String(classId)});
  if(!res.ok){alert('Could not load roster.');return;}
  const cls = allAdminClasses.find(c=>String(c.id)===String(classId)) || allClasses.find(c=>String(c.id)===String(classId));
  if(!cls)return;
  const rg = res.roster||[], wl = res.waitlist||[];
  const date = cls.date ? fD(cls.date) : '';
  const time = cls.time ? fT(cls.time) : '';
  const meta = [cls.teacher, date, time, cls.room, cls.event].filter(Boolean).join(' · ');
  const dur = cls.duration ? (cls.duration>=60 ? Math.floor(cls.duration/60)+(cls.duration%60?'.5':'')+'h' : cls.duration+'min') : '';

  const audienceLabels={'newcomer-friendly':'Good for Newcomers','kids-welcome':'Good for Kids','adults-only':'Adults Only'};
  const audienceTags=(cls.audience||'').split(',').map(a=>a.trim()).filter(a=>audienceLabels[a]).map(a=>audienceLabels[a]);
  const levelTags=(cls.level||'').split(',').map(l=>l.trim()).filter(Boolean);
  const tagList=[...levelTags,...audienceTags];

  const rowStyle = 'border-bottom:1px solid #ccc;';
  const thStyle = 'text-align:left;padding:6px 8px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#555;border-bottom:2px solid #333;';
  const tdStyle = 'padding:8px;font-size:13px;vertical-align:top;border-bottom:1px solid #ddd;';
  const cbStyle = 'width:20px;height:20px;border:1.5px solid #555;border-radius:3px;display:inline-block;';

  function buildRows(list, showPos, openSpots){
    const blankRow='<tr style="'+rowStyle+'">'
      +'<td style="'+tdStyle+'text-align:center;width:36px;"><span style="'+cbStyle+'"></span></td>'
      +'<td style="'+tdStyle+'"></td>'
      +'<td style="'+tdStyle+'font-size:12px;color:#555;"></td>'
      +'</tr>';
    if(!list.length && !openSpots) return '<tr><td colspan="3" style="padding:12px 8px;font-size:13px;color:#888;">None</td></tr>';
    const filled = list.map((x,i)=>
      '<tr style="'+rowStyle+'">'
      +'<td style="'+tdStyle+'text-align:center;width:36px;">'+(showPos?'<span style="font-size:12px;color:#777;">#'+x.pos+'</span>':'<span style="'+cbStyle+'"></span>')+'</td>'
      +'<td style="'+tdStyle+'">'+(x.scaName||'')+'</td>'
      +'<td style="'+tdStyle+'font-size:12px;color:#555;">'+(x.email||'')+'</td>'
      +'</tr>'
    ).join('');
    const blanks = openSpots>0 ? blankRow.repeat(openSpots) : '';
    return filled + blanks;
  }

  // Build roster HTML (works in-page on mobile; no popup needed)
  const printDate = new Date().toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
  const rosterHTML = `
<div style="font-family:Lora,Georgia,serif;color:#111;font-size:14px">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:16px;gap:12px">
    <div>
      <h1 style="font-size:20px;margin-bottom:4px">${escH(cls.title)}</h1>
      <div style="font-size:13px;color:#555;margin-bottom:6px;font-family:sans-serif">${escH(meta)}${dur?' · '+dur:''}</div>
      ${tagList.length?'<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">'+tagList.map(t=>'<span style="font-size:11px;font-family:sans-serif;padding:2px 9px;border-radius:10px;border:1px solid #bbb;color:#444;background:#f4f4f4">'+escH(t)+'</span>').join('')+'</div>':''}
      ${cls.desc?'<div style="font-size:13px;color:#333;font-family:sans-serif;line-height:1.55;margin-bottom:8px">'+escH(cls.desc)+'</div>':''}
      ${cls.fee?'<div style="font-size:12px;color:#666;font-family:sans-serif;font-style:italic">Fee: '+escH(cls.fee)+'</div>':''}
      ${cls.bring?'<div style="font-size:12px;color:#666;font-family:sans-serif;font-style:italic">Students bring: '+escH(cls.bring)+'</div>':''}
    </div>
    <button onclick="window.print()" style="flex-shrink:0;padding:7px 16px;background:#1A3F7A;color:#fff;border:none;border-radius:5px;font-size:13px;cursor:pointer;font-family:sans-serif">🖨 Print</button>
  </div>
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#444;font-family:sans-serif;margin-bottom:6px">Registered (${rg.length}${cls.max?' of '+cls.max:''})</div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
    <thead><tr>
      <th style="${thStyle}text-align:center;width:36px;">✓</th>
      <th style="${thStyle}">SCA Name</th>
      <th style="${thStyle}">Email</th>
    </tr></thead>
    <tbody>${buildRows(rg, false, cls.max ? Math.max(0, cls.max - rg.length) : 0)}</tbody>
  </table>
  ${wl.length ? `<div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#444;font-family:sans-serif;margin-bottom:6px">Waitlist (${wl.length})</div>
  <table style="width:100%;border-collapse:collapse;margin-bottom:28px">
    <thead><tr>
      <th style="${thStyle}text-align:center;width:36px;">#</th>
      <th style="${thStyle}">SCA Name</th>
      <th style="${thStyle}">Email</th>
    </tr></thead>
    <tbody>${buildRows(wl, true)}</tbody>
  </table>` : ''}
  <div style="margin-top:24px;font-size:11px;color:#aaa;font-family:sans-serif;border-top:1px solid #ddd;padding-top:10px;display:flex;justify-content:space-between">
    <span>Scheda — Caid</span>
    <span>Printed ${printDate}</span>
  </div>
</div>`;

  const layer=document.getElementById('print-layer');
  layer.innerHTML=rosterHTML;
  window.print();
  setTimeout(()=>layer.innerHTML='',500);
}
function showAdminTab(tab){
  ['events','classes','requests','topics','teachers','reports'].forEach(t=>{
    document.getElementById('admin-tab-'+t).style.display=t===tab?'block':'none';
    document.getElementById('atab-'+t).classList.toggle('active',t===tab);
  });
  const empty=document.getElementById('admin-tab-empty');
  if(empty)empty.style.display='none';
  if(tab==='requests')renderAdminRequests();
  if(tab==='topics'){renderTopicsList();populateAllTopicSelects();}
  if(tab==='teachers'){clearExpiredRoyalty();renderTeacherList();}
  if(tab==='reports')renderReports();
}

function populateTeacherFilterDropdowns(){
  // Event dropdown
  const evSel=document.getElementById('teacher-filter-event');
  if(evSel&&evSel.options.length<=1){
    (typeof dEv!=='undefined'?dEv:[]).forEach(ev=>{
      const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;evSel.appendChild(o);
    });
  }
  // Topic dropdown — built from all teacher topics
  const tpSel=document.getElementById('teacher-filter-topic');
  if(tpSel&&tpSel.options.length<=1){
    const topics=[...new Set(Object.values(allTeachers).flatMap(t=>t.topics||[]))].sort();
    topics.forEach(tp=>{const o=document.createElement('option');o.value=tp;o.textContent=tp;tpSel.appendChild(o);});
  }
}

function toggleTeacherFilters(){
  const panel=document.getElementById('teacher-secondary-filters');
  const btn=document.getElementById('teacher-filter-toggle');
  if(!panel)return;
  const open=panel.style.display!=='none';
  panel.style.display=open?'none':'flex';
  if(btn){btn.style.background=open?'var(--bg2)':'var(--accent-light)';btn.style.borderColor=open?'var(--border2)':'var(--accent)';btn.style.color=open?'var(--text2)':'var(--accent)';}
  if(!open)populateTeacherFilterDropdowns();
}

function copyTeacherEmails(){
  const emails=window._lastTeacherEmails||[];
  if(!emails.length){alert('No teacher emails to copy.');return;}
  navigator.clipboard.writeText(emails.join(', ')).then(()=>{
    const btn=document.getElementById('teacher-copy-emails');
    if(btn){const orig=btn.innerHTML;btn.innerHTML='<i class="ti ti-check"></i> Copied!';btn.style.color='var(--green-text)';setTimeout(()=>{btn.innerHTML=orig;btn.style.color='';},2000);}
  }).catch(()=>prompt('Copy these emails:',emails.join(', ')));
}

function renderTeacherList(){
  const q=(document.getElementById('teacher-search')?.value||'').toLowerCase();
  const pf=document.getElementById('teacher-filter-peerage')?.value||'';
  const ef=document.getElementById('teacher-filter-event')?.value||'';
  const tf=document.getElementById('teacher-filter-topic')?.value||'';
  const hc=document.getElementById('teacher-filter-hasclass')?.checked||false;
  const wrap=document.getElementById('teacher-list');
  if(!wrap)return;
  let teachers=Object.values(allTeachers);
  if(q)teachers=teachers.filter(t=>(t.name+t.email+t.barony+(t.topics||[]).join(' ')).toLowerCase().includes(q));
  if(pf==='royalpeer')teachers=teachers.filter(t=>(t.peerages||[]).includes('royalpeer')||t.royalPeer);
  else if(pf==='sittingroyalty')teachers=teachers.filter(t=>t.sittingRoyalty);
  else if(pf)teachers=teachers.filter(t=>(t.peerages||[]).includes(pf));
  if(ef)teachers=teachers.filter(t=>t.classes.some(c=>c.event===ef));
  if(tf)teachers=teachers.filter(t=>(t.topics||[]).includes(tf));
  if(hc)teachers=teachers.filter(t=>t.classes.length>0);
  // Update badge count
  const activeFilters=[pf,ef,tf,hc].filter(Boolean).length;
  const badge=document.getElementById('teacher-filter-badge');
  if(badge){badge.style.display=activeFilters?'inline':'none';badge.textContent=activeFilters;}
  // Store filtered emails for copy button
  window._lastTeacherEmails=teachers.filter(t=>t.email).map(t=>t.email);
  teachers.sort((a,b)=>a.name.localeCompare(b.name));
  if(!teachers.length){wrap.innerHTML='<div style="color:var(--text2);font-family:sans-serif;font-size:13px;padding:.5rem 0">No teachers found.</div>';return;}
  wrap.innerHTML=teachers.map(t=>{
    const displayName=(t.title?t.title+' ':'')+t.name;
    const badges=[
      ...(t.peerages||[]).map(p=>{const pd=PEERAGES.find(x=>x.key===p);return pd?'<span class="badge-emoji" data-tip="'+pd.label+'">'+pd.emoji+'</span>':'';}),
      t.sittingRoyalty?'<span class="badge-emoji" data-tip="Sitting Royalty'+(t.stepDownDate?' · steps down '+t.stepDownDate:'')+'">👑</span>':""
    ].filter(Boolean).join('');
    const pending=(t.peerages_pending||[]).filter(pk=>!(t.peerages||[]).includes(pk));
    const pendingNote=pending.length?'<div class="teacher-pending-note"><i class="ti ti-alert-circle" style="font-size:11px"></i> Unconfirmed: '+pending.map(pk=>{const pd=PEERAGES.find(x=>x.key===pk);return pd?pd.label:pk;}).join(', ')+'</div>':'';
    const topicTags=(t.topics||[]).map(tp=>'<span class="teacher-topic-pill">'+escH(tp)+'</span>').join('');
    const classCount=t.classes.length;
    const totalRegs=t.classes.reduce((s,c)=>{const src=(allAdminClasses.length?allAdminClasses:allClasses).find(x=>String(x.id)===String(c.id));return s+(src?src.registrationCount||0:0);},0);
    const history=classCount
      ?'<div class="teacher-history"><div class="teacher-history-title">'+classCount+' class'+(classCount!==1?'es':'')+' · '+totalRegs+' total registration'+(totalRegs!==1?'s':'')+'</div>'
        +t.classes.map(c=>{
          const src=(allAdminClasses.length?allAdminClasses:allClasses).find(x=>String(x.id)===String(c.id));
          const regs=src?src.registrationCount||0:0;
          const max=src&&src.max?src.max:null;
          const regStr=max?regs+'/'+max:regs+' registered';
          return '<div class="teacher-history-item">'
            +'<div><div class="teacher-history-title-text">'+escH(c.title)+'</div>'
            +(c.topic?'<div style="font-size:11px;color:var(--accent-mid);margin-top:1px">'+escH(c.topic)+'</div>':'')
            +'</div>'
            +'<div class="teacher-history-meta">'+(c.event?escH(c.event)+'<br>':'')+(c.date?fD(c.date)+'<br>':'')+regStr+'</div>'
            +'</div>';
        }).join('')
        +'</div>'
      :'';
    return '<div class="teacher-card">'
      +'<div class="teacher-card-top"><div style="flex:1;min-width:0">'
        +'<div class="teacher-name">'+escH(displayName)+'</div>'
        +(badges?'<div class="teacher-badges">'+badges+'</div>':'')
        +pendingNote
        +'<div class="teacher-contact">'
          +(t.barony?'<div class="teacher-contact-row"><i class="ti ti-map-pin" style="font-size:11px;color:var(--accent-mid)"></i>'+escH(t.barony)+'</div>':'')
          +(t.email?'<div class="teacher-contact-row"><a href="mailto:'+escH(t.email)+'" title="'+escH(t.email)+'" style="color:var(--accent-mid);display:inline-flex;align-items:center;gap:5px;text-decoration:none;font-size:12.5px" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'"><i class="ti ti-mail" style="font-size:13px"></i>'+escH(t.email)+'</a></div>':'')
          +(t.phone?'<div class="teacher-contact-row"><i class="ti ti-phone" style="font-size:11px;color:var(--accent-mid)"></i>'+escH(t.phone)+'</div>':'')
        +'</div>'
        +(topicTags?'<div class="teacher-topics">'+topicTags+'</div>':'')
      +'</div>'
      +'<button class="approve-btn" style="font-size:12px;white-space:nowrap;flex-shrink:0" data-email="'+escH(t.email||'')+'" onclick="openTeacherModal(this.dataset.email)"><i class="ti ti-pencil"></i> Edit</button>'
      +'</div>'
      +(t.bio?'<div class="teacher-bio">'+escH(t.bio)+'</div>':'')
      +history
    +'</div>';
  }).join('');
}

let curTeacherEmail=null;

function toggleStepDownField(){
  const checked=document.getElementById('tm-sittingroyalty')?.checked;
  const wrap=document.getElementById('tm-stepdown-wrap');
  if(wrap)wrap.style.display=checked?'block':'none';
  if(!checked){const d=document.getElementById('tm-stepdown');if(d)d.value='';}
}

function clearExpiredRoyalty(){
  const today=new Date().toISOString().slice(0,10);
  Object.values(allTeachers).forEach(t=>{
    if(t.sittingRoyalty&&t.stepDownDate&&t.stepDownDate<today){
      t.sittingRoyalty=false;
      t.stepDownDate='';
      t.royalPeer=true;
      if(!t.peerages)t.peerages=[];
      if(!t.peerages.includes('royalpeer'))t.peerages.push('royalpeer');
    }
  });
}

function openTeacherModal(email){
  const key=email.toLowerCase();
  const t=allTeachers[key];
  if(!t)return;
  curTeacherEmail=key;
  document.getElementById('tm-email-display').textContent=email;
  document.getElementById('tm-name').value=t.name||'';
  document.getElementById('tm-title').value=t.title||'';
  document.getElementById('tm-barony').value=t.barony||'';
  document.getElementById('tm-phone').value=t.phone||'';
  document.getElementById('tm-bio').value=t.bio||'';
  PEERAGES.forEach(p=>{ const cb=document.getElementById('tm-p-'+p.key); if(cb)cb.checked=(t.peerages||[]).includes(p.key); });
  // Sync royalPeer boolean → royalpeer checkbox
  const rpCb=document.getElementById('tm-p-royalpeer');
  if(rpCb&&t.royalPeer)rpCb.checked=true;
  // Show self-reported (pending) peerages note if any haven't been confirmed yet
  const pending=(t.peerages_pending||[]).filter(pk=>!(t.peerages||[]).includes(pk));
  const tmNote=document.getElementById('tm-peerages-note');
  if(tmNote){
    if(pending.length){
      const labels=pending.map(pk=>{const pd=PEERAGES.find(x=>x.key===pk);return pd?pd.label:pk;});
      tmNote.innerHTML='<i class="ti ti-alert-circle" style="font-size:12px"></i> Self-reported (unconfirmed): '+labels.join(', ');
      tmNote.style.display='block';
    } else {
      tmNote.style.display='none';
    }
  }
  document.getElementById('tm-sittingroyalty').checked=!!t.sittingRoyalty;
  const sdWrap=document.getElementById('tm-stepdown-wrap');
  if(sdWrap)sdWrap.style.display=t.sittingRoyalty?'block':'none';
  const sdInput=document.getElementById('tm-stepdown');
  if(sdInput)sdInput.value=t.stepDownDate||'';
  document.getElementById('teacher-modal').classList.add('open');
}

function getRptClasses(){
  const evf=document.getElementById('rpt-ev')?.value||'';
  const src=allAdminClasses.length?allAdminClasses:allClasses;
  return evf?src.filter(x=>x.event===evf):src;
}

function renderReports(){
  // Populate rpt-ev if empty
  const rptEv=document.getElementById('rpt-ev');
  if(rptEv&&rptEv.options.length<=1){
    availEvents.forEach(ev=>{const o=document.createElement('option');o.value=ev.name;o.textContent=ev.name;rptEv.appendChild(o);});
  }
  renderRegTable();
  renderTeacherRosterTable();
}

function renderRegTable(){
  const wrap=document.getElementById('rpt-reg-table');
  if(!wrap)return;
  const classes=getRptClasses().filter(c=>!c.cancelled);
  if(!classes.length){wrap.innerHTML='<div style="color:var(--text2);font-family:sans-serif;font-size:13px;padding:.5rem 0">No classes found.</div>';return;}
  const rows=classes.map(c=>{
    const reg=c.registrationCount??0;
    const wl=c.waitlistCount??0;
    const max=c.max??'';
    const pct=max?Math.round(reg/max*100)+'%':'—';
    return [escH(c.event||''),escH(c.title),escH((c.teacherTitle?c.teacherTitle+' ':'')+c.teacher),escH(c.topic||''),c.date||'',c.time||'',String(reg),String(max||'Unlimited'),String(wl),pct];
  });
  wrap.innerHTML='<div class="rpt-wrap"><table class="rpt-table"><thead><tr>'
    +'<th>Event</th><th>Class</th><th>Teacher</th><th>Topic</th><th>Date</th><th>Time</th>'
    +'<th class="rpt-num">Registered</th><th class="rpt-num">Cap</th><th class="rpt-num">Waitlist</th><th class="rpt-num">Fill %</th>'
    +'</tr></thead><tbody>'
    +rows.map(r=>'<tr>'+r.map((v,i)=>'<td'+(i>=6?' class="rpt-num"':'')+'>'+v+'</td>').join('')+'</tr>').join('')
    +'</tbody></table></div>';
}

function renderTeacherRosterTable(){
  const wrap=document.getElementById('rpt-teacher-table');
  if(!wrap)return;
  const classes=getRptClasses().filter(c=>!c.cancelled);
  // Group by teacher email then name
  const map={};
  classes.forEach(c=>{
    const key=(c.email||c.teacher||'').toLowerCase();
    if(!map[key])map[key]={name:(c.teacherTitle?c.teacherTitle+' ':'')+c.teacher,email:c.email||'',barony:c.barony||'',classes:[]};
    map[key].classes.push(c);
    // Fill barony from allTeachers if available
    const td=allTeachers[(c.email||'').toLowerCase()];
    if(td&&td.barony&&!map[key].barony)map[key].barony=td.barony;
  });
  const rows=Object.values(map).sort((a,b)=>a.name.localeCompare(b.name));
  if(!rows.length){wrap.innerHTML='<div style="color:var(--text2);font-family:sans-serif;font-size:13px;padding:.5rem 0">No teachers found.</div>';return;}
  wrap.innerHTML='<div class="rpt-wrap"><table class="rpt-table"><thead><tr>'
    +'<th>Teacher</th><th>Email</th><th>Barony</th><th>Classes</th><th>Topics</th><th class="rpt-num">Total Registrations</th>'
    +'</tr></thead><tbody>'
    +rows.map(r=>{
      const titles=r.classes.map(c=>escH(c.title)).join(', ');
      const topics=[...new Set(r.classes.map(c=>c.topic||'').filter(Boolean))].map(escH).join(', ');
      const totalReg=r.classes.reduce((s,c)=>s+(c.registrationCount??0),0);
      return '<tr>'
        +'<td>'+escH(r.name)+'</td>'
        +'<td style="color:var(--text2)">'+escH(r.email)+'</td>'
        +'<td style="color:var(--text2)">'+escH(r.barony)+'</td>'
        +'<td>'+titles+'</td>'
        +'<td style="color:var(--text2)">'+topics+'</td>'
        +'<td class="rpt-num">'+totalReg+'</td>'
        +'</tr>';
    }).join('')
    +'</tbody></table></div>';
}

function buildRegCSV(){
  const classes=getRptClasses().filter(c=>!c.cancelled);
  const hdr=['Event','Class','Teacher','Topic','Date','Time','Registered','Cap','Waitlist','Fill %'];
  const rows=classes.map(c=>{
    const reg=c.registrationCount??0,wl=c.waitlistCount??0,max=c.max??'';
    return [c.event||'',c.title,(c.teacherTitle?c.teacherTitle+' ':'')+c.teacher,c.topic||'',c.date||'',c.time||'',reg,max||'Unlimited',wl,max?Math.round(reg/max*100)+'%':'—'];
  });
  return [hdr,...rows].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
}

function buildTeacherCSV(){
  const classes=getRptClasses().filter(c=>!c.cancelled);
  const map={};
  classes.forEach(c=>{
    const key=(c.email||c.teacher||'').toLowerCase();
    if(!map[key])map[key]={name:(c.teacherTitle?c.teacherTitle+' ':'')+c.teacher,email:c.email||'',barony:c.barony||'',classes:[]};
    map[key].classes.push(c);
    const td=allTeachers[(c.email||'').toLowerCase()];
    if(td&&td.barony&&!map[key].barony)map[key].barony=td.barony;
  });
  const hdr=['Teacher','Email','Barony','Classes','Topics','Total Registrations'];
  const rows=Object.values(map).sort((a,b)=>a.name.localeCompare(b.name)).map(r=>{
    const titles=r.classes.map(c=>c.title).join('; ');
    const topics=[...new Set(r.classes.map(c=>c.topic||'').filter(Boolean))].join('; ');
    const totalReg=r.classes.reduce((s,c)=>s+(c.registrationCount??0),0);
    return [r.name,r.email,r.barony,titles,topics,totalReg];
  });
  return [hdr,...rows].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');
}

function exportCSV(type){
  const csv=type==='registrations'?buildRegCSV():buildTeacherCSV();
  const evf=document.getElementById('rpt-ev')?.value||'all';
  const fname=(type==='registrations'?'registrations':'teachers')+'-'+evf.replace(/\s+/g,'-').toLowerCase()+'.csv';
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=fname;a.click();
}

function exportSheets(type){
  const csv=type==='registrations'?buildRegCSV():buildTeacherCSV();
  const encoded=encodeURIComponent(csv);
  // Google Sheets import via data URI isn't directly supported; open CSV download then guide user
  exportCSV(type);
  setTimeout(()=>alert('CSV downloaded. In Google Sheets, go to File → Import and select the downloaded file to open it.'),200);
}

function saveTeacher(){
  if(!curTeacherEmail)return;
  const t=allTeachers[curTeacherEmail];
  if(!t)return;
  t.name=document.getElementById('tm-name').value.trim();
  t.title=document.getElementById('tm-title').value.trim();
  t.barony=document.getElementById('tm-barony').value.trim();
  t.phone=document.getElementById('tm-phone').value.trim();
  t.bio=document.getElementById('tm-bio').value.trim();
  t.peerages=PEERAGES.map(p=>p.key).filter(k=>{const cb=document.getElementById('tm-p-'+k);return cb&&cb.checked;});
  // Clear pending list for any now-confirmed peerages
  if(t.peerages_pending)t.peerages_pending=t.peerages_pending.filter(pk=>!t.peerages.includes(pk));
  const sittingRoyalty=document.getElementById('tm-sittingroyalty').checked;
  // If removing sitting royalty, auto-promote to Royal Peer
  if(t.sittingRoyalty&&!sittingRoyalty){
    const rpCb=document.getElementById('tm-p-royalpeer');
    if(rpCb)rpCb.checked=true;
    if(!t.peerages.includes('royalpeer'))t.peerages.push('royalpeer');
  }
  // Sync royalpeer checkbox → royalPeer boolean
  t.royalPeer=t.peerages.includes('royalpeer');
  const stepDownDate=document.getElementById('tm-stepdown')?.value||'';
  if(sittingRoyalty&&!stepDownDate){
    alert('Please enter a step-down date for Sitting Royalty.');
    return;
  }
  t.sittingRoyalty=sittingRoyalty;
  t.stepDownDate=sittingRoyalty?stepDownDate:'';

  closeModal('teacher-modal');
  renderTeacherList();
}

function cpL(ev,u){navigator.clipboard.writeText(u).then(()=>{const b=ev.target.closest('button');b.textContent='\u2713 Copied';setTimeout(()=>b.innerHTML='<i class="ti ti-copy"></i> Copy',2000);});}

async function loadGrid(){
  // Legacy — now handled by loadAdminGrid
  loadAdminGrid();
}

function reloadGrid(){
  const evName=document.getElementById('acf-ev')?.value||document.getElementById('grid-ev')?.value||'';
  if(!evName)return;
  const cls=window._lastGridCls||[];
  const ev=availEvents.find(e=>e.name===evName);
  const days=getEventDays(ev,cls);
  renderGridWithDays(cls,days);
}

function syncAdminGridEv(){
  const evName=document.getElementById('acf-ev')?.value||'';
  const btn=document.getElementById('admin-grid-btn');
  const wrap=document.getElementById('admin-grid-wrap');
  if(btn)btn.style.display=evName?'':'none';
  if(!evName&&wrap&&wrap.style.display!=='none'){
    wrap.style.display='none';
    if(btn)btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
  }
  if(evName&&wrap&&wrap.style.display!=='none')loadAdminGrid();
}

async function loadAdminGrid(){
  const evName=document.getElementById('acf-ev')?.value||'';
  if(!evName)return;
  const res=await api({action:'adminGetGrid',token:adminToken,event:evName});
  if(!res.ok)return;
  const cls=res.approved||[];
  window._lastGridCls=cls;
  const ev=availEvents.find(e=>e.name===evName);
  // Show/hide unpublished banner
  const wrap=document.getElementById('admin-grid-wrap');
  let banner=wrap.querySelector('.admin-unpub-banner');
  if(!banner){banner=document.createElement('div');banner.className='admin-unpub-banner';wrap.insertBefore(banner,wrap.firstChild);}
  if(ev&&ev.published===false){
    banner.style.display='flex';
    banner.style.cssText='display:flex;align-items:center;gap:8px;background:var(--gold-light);color:var(--accent);border:1px solid var(--gold-mid);border-radius:var(--radius);padding:8px 12px;margin-bottom:10px;font-size:13px;font-family:sans-serif;font-weight:600';
    banner.innerHTML='<i class="ti ti-eye-off"></i> This event is unpublished — classes are hidden from the public catalog.';
  } else {
    banner.style.display='none';
  }
  const days=getEventDays(ev,cls);
  renderGridWithDays(cls,days);
}

function focusAdminClass(id){
  const c=allClasses.find(x=>String(x.id)===String(id));
  if(!c)return;
  // Switch to list view
  const wrap=document.getElementById('admin-grid-wrap');
  const btn=document.getElementById('admin-grid-btn');
  if(wrap&&wrap.style.display!=='none'){
    wrap.style.display='none';
    if(btn)btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
  }
  // Filter the list to this class
  const q=document.getElementById('acf-q');
  if(q){q.value=c.title;renderPending();renderApproved();}
  // Scroll to first result
  setTimeout(()=>{
    const el=document.querySelector('.approved-row');
    if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  },50);
}

function toggleAdminGrid(){
  const wrap=document.getElementById('admin-grid-wrap');
  const btn=document.getElementById('admin-grid-btn');
  const showing=wrap&&wrap.style.display!=='none';
  if(showing){
    wrap.style.display='none';
    btn.innerHTML='<i class="ti ti-layout-grid"></i> Grid view';
  } else {
    wrap.style.display='block';
    btn.innerHTML='<i class="ti ti-menu-2"></i> List view';
    loadAdminGrid();
  }
}

function getEventDays(ev,cls){
  // Build list of dates from the event range, falling back to whatever dates the classes use
  const dates=new Set(cls.map(c=>c.date).filter(Boolean));
  if(ev&&ev.startDate&&ev.endDate){
    let d=new Date(ev.startDate+'T00:00:00');
    const end=new Date(ev.endDate+'T00:00:00');
    while(d<=end){
      dates.add(d.toISOString().slice(0,10));
      d.setDate(d.getDate()+1);
    }
  }
  return [...dates].sort();
}

function renderGridWithDays(cls,days){
  const wrap=document.getElementById('admin-grid-wrap')||document.getElementById('grid-view');
  // Remove any old day-tabs before the legend
  const oldTabs=wrap.querySelector('.day-tabs');if(oldTabs)oldTabs.remove();
  if(days.length<=1){
    // Single day — render directly, no tabs needed
    renderGrid(cls,days[0]||null);
    return;
  }
  // Build tab bar
  const tabBar=document.createElement('div');
  tabBar.className='day-tabs';
  tabBar.style.cssText='display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;';
  days.forEach((d,i)=>{
    const btn=document.createElement('button');
    btn.className='print-btn'+(i===0?' day-tab-active':'');
    if(i===0)btn.style.cssText='background:var(--accent);color:#fff;border-color:var(--accent)';
    btn.textContent=fD(d);
    btn.dataset.date=d;
    btn.onclick=function(){
      wrap.querySelectorAll('.day-tabs button').forEach(b=>{b.style.cssText='';b.classList.remove('day-tab-active');});
      this.style.cssText='background:var(--accent);color:#fff;border-color:var(--accent)';
      this.classList.add('day-tab-active');
      renderGrid(cls,this.dataset.date);
    };
    tabBar.appendChild(btn);
  });
  const legend=wrap.querySelector('.grid-legend');
  wrap.insertBefore(tabBar,legend);
  renderGrid(cls,days[0]);
}

function renderGrid(cls,filterDate){
  const times=['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
  const showAdminCancelled=document.getElementById('admin-show-cancelled')?.checked!==false;
  const hideAdminFull=document.getElementById('admin-hide-full')?.checked;
  const dayCls=(filterDate?cls.filter(c=>c.date===filterDate):cls).filter(c=>(showAdminCancelled||!c.cancelled)&&(!hideAdminFull||!isFull(c)));
  const rooms=[...new Set(dayCls.map(c=>c.room||'Unassigned').filter(Boolean))].sort();
  const tbl=document.getElementById('grid-table');
  if(!rooms.length){tbl.innerHTML='<tr><td style="padding:1rem;font-family:sans-serif;color:var(--text2)">No approved classes with rooms assigned yet'+(filterDate?' for '+fD(filterDate):'')+'. </td></tr>';return;}
  function cfl(c){
    const s=t2m(c.time),e=s+(Number(c.duration)||60);
    const sm=dayCls.filter(x=>x.id!==c.id);
    const tc=sm.some(x=>{const xs=t2m(x.time),xe=xs+(Number(x.duration)||60);return s<xe&&e>xs&&x.topic===c.topic;});
    const th=sm.some(x=>{const xs=t2m(x.time),xe=xs+(Number(x.duration)||60);return s<xe&&e>xs&&x.teacher===c.teacher;});
    return{tc,th};
  }
  let h='<tr><th>Time</th>'+rooms.map(r=>'<th>'+r+'</th>').join('')+'</tr>';
  times.forEach(t=>{
    h+='<tr><td class="sgtime">'+fT(t)+'</td>';
    rooms.forEach(r=>{
      const sl=dayCls.filter(c=>(c.room||'Unassigned')===r&&String(c.time).slice(0,5)===t);
      h+='<td>';
      sl.forEach(c=>{const{tc,th}=cfl(c);const k=(tc&&th)?'cb':th?'ch':tc?'ct':'';const du=Number(c.duration)||60;
        const cancelled=!!c.cancelled,full=isFull(c);
        let extraStyle=k===''?'':'';  // conflict styles handled by class k
        if(cancelled)extraStyle='background:var(--red-bg);color:var(--red-text);border-left:3px solid var(--red-border);';
        else if(full&&!k)extraStyle='background:#f0f0f0;color:#888;';
        h+='<div class="gc '+k+'" style="cursor:pointer;'+extraStyle+'" onclick="focusAdminClass(\''+c.id+'\')" title="'+c.title+' \u2014 '+c.teacher+' ('+du+'min)'+(cancelled?' \u2014 CANCELLED':full?' \u2014 Full':'')+(tc?' topic overlap':'')+(th?' double-booked':'')+'">'
          +'<strong style="'+(cancelled?'text-decoration:line-through;':'')+'">'+(c.title.slice(0,26))+(c.title.length>26?'\u2026':'')+'</strong><br>'
          +(cancelled?'<span style="font-size:10px;font-weight:700;text-transform:uppercase">Cancelled</span>':c.teacher+(du!==60?' ('+du+'m)':'')+(full?'<br><span style="font-size:10px;font-style:italic">Full</span>':''))+'</div>';});
      h+='</td>';
    });
    h+='</tr>';
  });
  tbl.innerHTML=h;
}
['reg-modal','approve-modal','roster-modal','edit-modal','voter-modal'].forEach(id=>document.getElementById(id).addEventListener('click',function(e){if(e.target===this)closeModal(id);}));

let curEditId=null;
function openEditClass(id){
  const c=IS_DEMO?dC.find(x=>String(x.id)===String(id)):allClasses.find(x=>String(x.id)===String(id));
  if(!c)return;
  curEditId=id;
  document.getElementById('em-sub').textContent=c.title;
  document.getElementById('em-title').value=c.title||'';
  document.getElementById('em-date').value=c.date||'';
  populateTimeSelect('em-time', c.time||'09:00');
  document.getElementById('em-max').value=c.max||'';
  document.getElementById('em-fee').value=c.fee||'';
  document.getElementById('em-bring').value=c.bring||'';
  document.getElementById('em-desc').value=c.desc||'';
  // Level pills
  const emLvls=(c.level||'').split(',').map(s=>s.trim()).filter(Boolean);
  document.querySelectorAll('#em-level-pills .level-pill').forEach(b=>{
    b.classList.toggle('active',emLvls.includes(b.dataset.val));
  });
  document.getElementById('em-level').value=c.level||'';
  // Audience
  document.getElementById('em-aud-newcomer').checked=(c.audience||'').includes('newcomer-friendly');
  document.getElementById('em-aud-kids').checked=(c.audience||'').includes('kids-welcome');
  document.getElementById('em-aud-adults').checked=(c.audience||'').includes('adults-only');
  document.getElementById('em-elec').checked=!!(c.electricity);

  document.getElementById('em-img').value=c.imageUrl||'';
  document.getElementById('em-zoom').value=c.zoomLink||'';
  populateTopicSelect('em-topic',false,true,c.topic||'Fiber Arts');
  document.getElementById('em-format').value=c.format||'in-person';
  document.getElementById('em-duration').value=String(c.duration||60);
  populateRoomDropdown('em-room-sel',c.event||'',c.room||'');
  document.getElementById('edit-modal').classList.add('open');
}
async function confirmEditClass(){
  const btn=document.getElementById('em-confirm');
  btn.disabled=true;btn.innerHTML='<span class="spinner"></span>';
  const updates={
    action:'adminEditClass',token:adminToken,id:String(curEditId),
    title:document.getElementById('em-title').value.trim(),
    date:document.getElementById('em-date').value,
    time:document.getElementById('em-time').value,
    room:getEmRoom(),
    max:document.getElementById('em-max').value||'',
    fee:document.getElementById('em-fee').value.trim(),
    bring:document.getElementById('em-bring').value.trim(),
    desc:document.getElementById('em-desc').value.trim(),
    level:document.getElementById('em-level').value,
    audience:(()=>{const tags=[];if(document.getElementById('em-aud-newcomer').checked)tags.push('newcomer-friendly');if(document.getElementById('em-aud-kids').checked)tags.push('kids-welcome');if(document.getElementById('em-aud-adults').checked)tags.push('adults-only');return tags.join(',');})(),
    electricity:document.getElementById('em-elec').checked?'1':'',

    imageUrl:document.getElementById('em-img').value.trim(),
    zoomLink:document.getElementById('em-zoom').value.trim(),
    topic:document.getElementById('em-topic').value,
    format:document.getElementById('em-format').value,
    duration:document.getElementById('em-duration').value
  };
  const res=await api(updates);
  btn.disabled=false;btn.innerHTML='<i class="ti ti-device-floppy"></i> Save changes';
  if(!res.ok){alert(res.error||'Save failed.');return;}
  closeModal('edit-modal');await loadClasses();loadAdmin();
}
async function doCancelClass(id){
  const c=IS_DEMO?dC.find(x=>String(x.id)===String(id)):allClasses.find(x=>String(x.id)===String(id));
  if(!c)return;
  if(!confirm('Cancel "'+c.title+'"?\n\nThis will mark it cancelled on the schedule. Registrants will see a cancellation notice (in a live deployment this triggers an email).'))return;
  const res=await api({action:'adminCancelClass',token:adminToken,id:String(id)});
  if(!res.ok){alert(res.error||'Could not cancel.');return;}
  await loadClasses();loadAdmin();
  // In demo mode, show what the email would say
  if(IS_DEMO&&(dRegs[id]||[]).length){
    const names=(dRegs[id]||[]).map(r=>r.email).join(', ');
    alert('📧 [Demo — email would be sent]\nTo: '+names+'\nSubject: Class cancelled — '+c.title+'\n\nWe\'re sorry to let you know that "'+c.title+" ("+fD(c.date)+" at "+fT(c.time)+')" has been cancelled. No action is needed on your part. We hope to see you at another class soon!');
  }
}

// ── Requests data ──

// ── Volunteer verifications (demo) ─────────────────────────────────────────
// shiftId -> [email, ...] of verified volunteers
const dVerifications = {
  's2': ['margery@example.com'],
  's8': ['margery@example.com'],
};

const dVerifiers = [
  {id:'v1', eventId:'e1', name:'Rowan Winterbourne', role:'Volunteer Coordinator', pin:'4471'},
  {id:'v2', eventId:'e1', name:'Aldric of Shadowdale', role:'Gate Steward', pin:'8823'},
  {id:'v3', eventId:'e1', name:'Siobhan ni Fhaoláin', role:'A&S Steward', pin:'3156'},
];

// ── Class requests ──────────────────────────────────────────────────────────
const dReqStore = [
  {id:'r1', topic:'Natural dyeing with woad and madder', topicTag:'Fiber Arts', event:'', level:'Intermediate', format:'In person', notes:'Especially interested in period mordanting techniques.', submitter:'Áine ingen Briain', hearts:4, ts: Date.now()-8e6},
  {id:'r2', topic:'14th-century Italian cooking', topicTag:'Cooking & Brewing', event:'Collegium 2026', level:'Beginner', format:'', notes:'', submitter:'', hearts:7, ts: Date.now()-4e6},
  {id:'r3', topic:'Court etiquette and ceremony for newcomers', topicTag:'Society Skills', event:'Collegium 2026', level:'Beginner', format:'In person', notes:'Good intro for people new to the SCA.', submitter:'Tomas de Burgos', hearts:3, ts: Date.now()-2e6},
  {id:'r4', topic:'Period perfume and scent — ingredients and blending', topicTag:'Crafts', event:'', level:'', format:'', notes:'', submitter:'', hearts:2, ts: Date.now()-1e7},
  {id:'r5', topic:'Elizabethan blackwork embroidery', topicTag:'Fiber Arts', event:'Collegium 2026', level:'Intermediate', format:'In person', notes:'Blackwork patterns specifically.', submitter:'Margot de la Forêt', hearts:5, ts: Date.now()-3e6},
];
let allRequests = dReqStore.map(r=>({...r}));
let dReqPid = 2000;


// ── Volunteer signup shifts (full shape for volunteer.html) ─────────────────
// Full shift objects with signUps arrays, used by volunteer.html demo API.
const dShifts = [
  {id:'s1', eventId:'e1', title:'Gate Check-In', dept:'Gate', desc:'Welcome attendees, check memberships, collect fees. Friendly face required!', day:'2025-10-07', start:'08:00', end:'12:00', slots:4, demand:'sedentary', kids:'no', quals:'', location:'Main Gate', ticketMult:1, imageUrl:'', signUps:[]},
  {id:'s2', eventId:'e1', title:'Gate Check-In', dept:'Gate', desc:'Afternoon gate shift — busiest period of opening day.', day:'2025-10-07', start:'12:00', end:'16:00', slots:4, demand:'sedentary', kids:'no', quals:'', location:'Main Gate', ticketMult:1, imageUrl:'', signUps:[{scaName:'Margery Kempe',email:'margery@example.com'},{scaName:'Aldric of Shadowdale',email:'aldric@example.com'},{scaName:'Bronwen ferch Rhys',email:'bronwen@example.com'}]},
  {id:'s3', eventId:'e1', title:'Troll Runner', dept:'Gate', desc:'Carry paperwork and cash between Gate and HQ. Involves walking the site repeatedly.', day:'2025-10-07', start:'08:00', end:'18:00', slots:2, demand:'active', kids:'no', quals:'', location:'Gate / HQ', ticketMult:1, imageUrl:'', signUps:[{scaName:'Caterina da Firenze',email:'caterina@example.com'}]},
  {id:'s4', eventId:'e1', title:'A&S Room Monitor', dept:'Arts & Sciences', desc:'Keep an eye on the A&S tent, help instructors get set up, answer attendee questions.', day:'2025-10-08', start:'09:00', end:'13:00', slots:3, demand:'light', kids:'yes', quals:'', location:'A&S Pavilion', ticketMult:1, imageUrl:'', signUps:[]},
  {id:'s5', eventId:'e1', title:'Youth Activity Helper', dept:'Youth', desc:'Assist the youth coordinator with craft activities. Great for teens and young adults.', day:'2025-10-08', start:'10:00', end:'14:00', slots:5, demand:'light', kids:'yes', quals:'', location:'Youth Area', ticketMult:1, imageUrl:'', signUps:[{scaName:'Siobhan ni Fhaoláin',email:'siobhan@example.com'}]},
  {id:'s6', eventId:'e1', title:'Water Bearer', dept:'Armored Combat', desc:'Keep fighters hydrated on the field. Active role — lots of walking in the sun.', day:'2025-10-09', start:'09:00', end:'13:00', slots:6, demand:'active', kids:'no', quals:'', location:'Main Combat Field', ticketMult:2, imageUrl:'', signUps:[{scaName:'Aldric of Shadowdale',email:'aldric@example.com'},{scaName:'Bronwen ferch Rhys',email:'bronwen@example.com'}]},
  {id:'s7', eventId:'e1', title:'Chirurgeon Support', dept:'Chirurgeon', desc:'Assist the head chirurgeon with supplies and documentation. Medical background preferred but not required.', day:'2025-10-09', start:'08:00', end:'17:00', slots:2, demand:'sedentary', kids:'no', quals:'First Aid/CPR preferred', location:'Chirurgeon Point', ticketMult:2, imageUrl:'', signUps:[]},
  {id:'s8', eventId:'e1', title:'Herald – Field', dept:'Heralds', desc:'Voice announcements on the combat field. Loud voice essential.', day:'2025-10-10', start:'09:00', end:'12:00', slots:2, demand:'active', kids:'no', quals:'Heralding experience preferred', location:'Main Combat Field', ticketMult:1, imageUrl:'', signUps:[{scaName:'Margery Kempe',email:'margery@example.com'}]},
  {id:'s9', eventId:'e1', title:'Merchant Village Liaison', dept:'Merchants', desc:'Help merchants with setup questions and direct shoppers around the village.', day:'2025-10-07', start:'07:00', end:'11:00', slots:2, demand:'light', kids:'yes', quals:'', location:'Merchant Village', ticketMult:1, imageUrl:'', signUps:[]},
  {id:'s10', eventId:'e1', title:'Closing Cleanup Crew', dept:'General', desc:'Help strike tents, collect trash, and restore the site on the final morning. Heavy lifting involved.', day:'2025-10-12', start:'08:00', end:'13:00', slots:10, demand:'active', kids:'no', quals:'', location:'Full Site', ticketMult:2, imageUrl:'', signUps:[{scaName:'Caterina da Firenze',email:'caterina@example.com'},{scaName:'Siobhan ni Fhaoláin',email:'siobhan@example.com'}]},
  {id:'s11', eventId:'e2', title:'Registration Desk', dept:'Gate', desc:'Check in attendees and hand out class materials.', day:'2025-11-15', start:'08:30', end:'12:30', slots:3, demand:'sedentary', kids:'no', quals:'', location:'Main Entrance', ticketMult:1, imageUrl:'', signUps:[]},
  {id:'s12', eventId:'e2', title:'Room Monitor', dept:'Arts & Sciences', desc:'Ensure classes start on time and rooms are set up correctly.', day:'2025-11-15', start:'09:00', end:'17:00', slots:4, demand:'light', kids:'yes', quals:'', location:'Various Classrooms', ticketMult:1, imageUrl:'', signUps:[{scaName:'Margery Kempe',email:'margery@example.com'}]},
];
