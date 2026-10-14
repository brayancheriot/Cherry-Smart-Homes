/* =====================================================================
   Cherry Smart Homes — shared listings data
   Edit your properties HERE. Every page (sale, rentals, Airbnb and the
   property detail page) reads from this one file.

   ALL LISTINGS BELOW ARE SAMPLES. Replace them with your real properties.

   photos: use your own images, e.g. 'assets/img/listings/s1001-1.webp'
           (a full https:// link also works). The sample entries use
           Unsplash photo IDs instead, which is why they look like codes.
           The FIRST photo is the cover image on the listing cards.
   ===================================================================== */
(function(){
  var CSH=window.CSH={};

  /* Your real WhatsApp number, digits only, with country code (254...) */
  CSH.PHONE='254700123456';

  function src(x,w){
    if(/^(https?:|assets\/|\/)/.test(x))return x;
    return 'https://images.unsplash.com/photo-'+x+'?q=75&w='+(w||1200)+'&auto=format&fit=crop';
  }
  function prep(list){
    list.forEach(function(p){
      p.images=p.photos.map(function(x){return src(x,1200)});
      p.img=src(p.photos[0],700);
    });
    return list;
  }

  var A='1613977257363-707ba9348227',B='1600585154340-be6161a56a0c',
      C='1545324418-cc1a3fa10c00',D='1522708323590-d24dbb6b0267';

  /* ---------------- FOR SALE ----------------
     type: apartment | house                                               */
  CSH.SALE=prep([
    {id:'S-1001',title:'4 Bedroom House',type:'house',area:'Karen',price:8300000,beds:4,baths:3,size:240,badge:'Featured',photos:[A,B,D],
     desc:'A spacious family home in a quiet part of Karen. Bright living areas, a large kitchen and a secure compound with room for children to play. Sample text: replace with your own description.',
     features:['Parking','Security','Water','Garden','Ensuite master bedroom']},
    {id:'S-1002',title:'3 Bedroom Maisonette',type:'house',area:'Kitengela',price:6500000,beds:3,baths:3,size:160,badge:'New',photos:[B,A,C],
     desc:'A modern maisonette in a growing neighbourhood, ideal for a family or as an investment. Sample text: replace with your own description.',
     features:['Parking','Security','Water','Balcony']},
    {id:'S-1003',title:'2 Bedroom Apartment',type:'apartment',area:'Kilimani',price:9800000,beds:2,baths:2,size:95,badge:'Featured',photos:[D,C,B],
     desc:'A bright apartment close to shops, restaurants and public transport. Sample text: replace with your own description.',
     features:['Parking','Security','Lift','Backup power','Gym']},
    {id:'S-1004',title:'1 Bedroom Apartment',type:'apartment',area:'Ruaka',price:4200000,beds:1,baths:1,size:55,badge:'',photos:[C,D,A],
     desc:'A compact, well-planned apartment, great for a first home or a rental investment. Sample text: replace with your own description.',
     features:['Parking','Security','Water']},
    {id:'S-1005',title:'3 Bedroom Townhouse',type:'house',area:'Syokimau',price:7900000,beds:3,baths:3,size:170,badge:'New',photos:[A,D,B],
     desc:'A neat townhouse in a gated community with easy access to the main road. Sample text: replace with your own description.',
     features:['Gated community','Parking','Security','Water']},
    {id:'S-1006',title:'5 Bedroom Villa',type:'house',area:'Runda',price:45000000,beds:5,baths:5,size:420,badge:'Featured',photos:[B,A,D],
     desc:'A premium villa on a large plot with generous entertaining space. Sample text: replace with your own description.',
     features:['Parking','24-hour security','Garden','Backup power','Servant quarters']}
  ]);

  /* ---------------- RENTALS ----------------
     cat: single | bedsitter | 1 | 2 | 3   (3 = three or more bedrooms)
     baths: 0 means shared bathroom                                         */
  CSH.RENT=prep([
    {id:'R-2001',title:'Single Room',cat:'single',area:'Kawangware',price:5500,baths:0,size:12,tags:['Water','Security'],badge:'',photos:[C,D],
     desc:'An affordable single room with reliable water and a secure compound. Sample text: replace with your own description.'},
    {id:'R-2002',title:'Bedsitter',cat:'bedsitter',area:'Kawangware',price:8000,baths:1,size:18,tags:['Water','Security'],badge:'New',photos:[D,C],
     desc:'A self-contained bedsitter with its own bathroom, close to the main road. Sample text: replace with your own description.'},
    {id:'R-2003',title:'1 Bedroom',cat:'1',area:'Kawangware',price:12000,baths:1,size:35,tags:['Water','Security','Tiled'],badge:'Featured',photos:[B,D,C],
     desc:'A tidy tiled one-bedroom with a separate living area. Sample text: replace with your own description.'},
    {id:'R-2004',title:'2 Bedroom',cat:'2',area:'Kawangware',price:18000,baths:1,size:55,tags:['Water','Parking','Security'],badge:'',photos:[C,B,D],
     desc:'A comfortable two-bedroom home with parking space. Sample text: replace with your own description.'},
    {id:'R-2005',title:'2 Bedroom Apartment',cat:'2',area:'Ruaka',price:25000,baths:2,size:80,tags:['Parking','Security','Balcony'],badge:'',photos:[D,C,A],
     desc:'A modern two-bedroom apartment with a balcony and two bathrooms. Sample text: replace with your own description.'},
    {id:'R-2006',title:'3 Bedroom Apartment',cat:'3',area:'Kilimani',price:45000,baths:2,size:130,tags:['Parking','Security','Gym'],badge:'New',photos:[C,D,B],
     desc:'A large three-bedroom apartment in a popular, well-connected area. Sample text: replace with your own description.'},
    {id:'R-2007',title:'1 Bedroom Apartment',cat:'1',area:'Lavington',price:45000,baths:1,size:60,tags:['Parking','Security','Backup power'],badge:'Featured',photos:[B,C,D],
     desc:'A stylish one-bedroom apartment in a quiet, leafy neighbourhood. Sample text: replace with your own description.'},
    {id:'R-2008',title:'2 Bedroom Apartment',cat:'2',area:'Westlands',price:47000,baths:2,size:95,tags:['Parking','Security','Gym'],badge:'Featured',photos:[D,B,C],
     desc:'A bright two-bedroom apartment close to offices, malls and restaurants. Sample text: replace with your own description.'}
  ]);

  /* ---------------- AIRBNB / SHORT STAYS ---------------- */
  CSH.STAY=prep([
    {id:'B-3001',title:'Cozy Studio',area:'Kilimani',price:4500,guests:2,beds:1,baths:1,tags:['WiFi','Kitchen','Self check-in'],badge:'Featured',photos:[C,D,B],
     desc:'A cosy, fully furnished studio ideal for couples or solo travellers. Sample text: replace with your own description.'},
    {id:'B-3002',title:'Modern 1 Bedroom',area:'Westlands',price:6500,guests:3,beds:1,baths:1,tags:['WiFi','Parking','Hot shower'],badge:'New',photos:[D,C,A],
     desc:'A modern one-bedroom close to restaurants and offices. Sample text: replace with your own description.'},
    {id:'B-3003',title:'Bright 2 Bedroom',area:'Lavington',price:9500,guests:5,beds:2,baths:2,tags:['WiFi','Parking','Backup power'],badge:'Featured',photos:[B,D,C],
     desc:'A bright two-bedroom, perfect for families or small groups. Sample text: replace with your own description.'},
    {id:'B-3004',title:'Budget Studio',area:'Ruaka',price:3500,guests:2,beds:1,baths:1,tags:['WiFi','Hot shower','Security'],badge:'',photos:[C,B],
     desc:'A simple, clean and affordable studio for short visits. Sample text: replace with your own description.'},
    {id:'B-3005',title:'Garden Cottage, 3 Bedroom',area:'Karen',price:14000,baths:3,beds:3,guests:7,tags:['WiFi','Garden','Parking','Kitchen'],badge:'Featured',photos:[A,B,D],
     desc:'A spacious cottage with a garden, great for family trips and group stays. Sample text: replace with your own description.'},
    {id:'B-3006',title:'Family 2 Bedroom',area:'Kilimani',price:8000,guests:4,beds:2,baths:2,tags:['WiFi','Kitchen','Netflix'],badge:'',photos:[D,A,C],
     desc:'A comfortable two-bedroom with a full kitchen and fast WiFi. Sample text: replace with your own description.'}
  ]);
})();