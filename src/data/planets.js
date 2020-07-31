const planets = [
  {
    name: 'Stewjon',
    link: 'https://66.media.tumblr.com/c1361ce9a6a568ccd662884a1be3d905/da698e3c0fdf09c5-4d/s250x400/2b0ddb7b17d151f548bc63275e2afbb4962b942f.jpg'
  },
  {
    name: 'Tatooine',
    link: 'https://upload.wikimedia.org/wikipedia/uk/f/f8/Tatooine_bf1.jpg'
  },
  {
    name: 'Corellia',
    link: 'https://upload.wikimedia.org/wikipedia/uk/f/f8/Tatooine_bf1.jpg'
  },
  {
    name: 'Rodia',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/6/6a/Rodia.png/revision/latest?cb=20170116121243'
  },
  {
    name: 'Nal Hutta',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/0/0d/NalHutta-HFZ.png/revision/latest?cb=20130517035000'
  },
  {
    name: 'Dantooine',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg/revision/latest?cb=20200120190043'
  },
  {
    name: 'Bestine IV',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/7/79/Bestine_TEA.png/revision/latest?cb=20180326092431'
  },
  {
    name: 'Ord Mantell',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/3/36/Ord_Mantell_EotECR.png/revision/latest?cb=20170624072006'
  },
  {
    name: 'unknown',
    link: 'https://3.bp.blogspot.com/-kIFjmWN4vN0/V2CknoiX49I/AAAAAAAApws/aHpJO13dkScLaB-fRPLyhvDR6WaDCB2ZgCHM/s1600/galactic-map.jpg'
  },
  {
    name: 'Trandosha',
    link: 'https://images3.wikia.nocookie.net/starwars/images/9/9b/Trandosha_NEGAS.jpg'
  },
  {
    name: 'Socorro',
    link: 'https://images4.wikia.nocookie.net/__cb20091218162909/starwars/images/8/82/Tatooine-TOR.jpg'
  },
  {
    name: 'Mon Cala',
    link: 'https://i.pinimg.com/originals/7e/14/00/7e14009718b1343efb6c824199a82314.jpg'
  },
  {
    name: 'Chandrila',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/9/9b/Chandrila_AoRCR.png/revision/latest?cb=20180110124952'
  },
  {
    name: 'Sullust',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/2/2d/SullustAoR.png/revision/latest?cb=20180110124449'
  },
  {
    name: 'Toydaria',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/b/ba/Toydaria_LoNH.png/revision/latest/top-crop/width/360/height/450?cb=20170315060045'
  },
  {
    name: 'Malastare',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/4/4d/Eaw_Kuat.jpg/revision/latest/top-crop/width/360/height/450?cb=20150328174118'
  },
  {
    name: 'Dathomir',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/e/ee/Iego.jpg/revision/latest?cb=20150920203817'
  },
  {
    name: 'Ryloth',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/9/96/Ryloth-Homecoming.png/revision/latest?cb=20200517155255'
  },
  {
    name: 'Aleen Minor',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg/revision/latest?cb=20070630172856'
  },
  {
    name: 'Vulpter',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/9/96/Fondor-SoF.png/revision/latest?cb=20180110133847'
  },
  {
    name: 'Troiken',
    link: 'https://holopedia.de/images/7/73/Troikenb.jpg'
  },
  {
    name: 'Tund',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/8/8d/Nal-hutta.png/revision/latest?cb=20180110123543'
  },
  {
    name: 'Haruun Kal',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/1/18/%D0%A0%D1%83%D1%83%D1%81%D0%B0%D0%BD.jpg/revision/latest?cb=20110426112046'
  },
  {
    name: 'Cerea',
    link: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2a96d7-c8e0-4faf-917e-ad619df1e4dc/d97itss-22874705-ad59-4301-99e6-c897e540b264.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWMyYTk2ZDctYzhlMC00ZmFmLTkxN2UtYWQ2MTlkZjFlNGRjXC9kOTdpdHNzLTIyODc0NzA1LWFkNTktNDMwMS05OWU2LWM4OTdlNTQwYjI2NC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.rUFp3V2ehzfwmjPhuZANerwLV-7lGJFJrkeLvGgfbkA'
  },
  {
    name: 'Glee Anselm',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/e/e0/Glee_Anselm_NEGAS.jpg/revision/latest/top-crop/width/360/height/450?cb=20080316124444'
  },
  {
    name: 'Iridonia',
    link: 'https://vignette.wikia.nocookie.net/pt.starwars/images/c/c5/Iridonia.jpg/revision/latest?cb=20120718172202'
  },
  {
    name: 'Tholoth',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/1/14/Nzoth_TEA.jpg/revision/latest/top-crop/width/360/height/450?cb=20200407162314'
  },
  {
    name: 'Iktotch',
    link: 'https://vignette.wikia.nocookie.net/star/images/c/c2/Iktotch.jpg/revision/latest/scale-to-width-down/340?cb=20120904003818&path-prefix=de'
  },
  {
    name: 'Quermia',
    link: 'https://vignette.wikia.nocookie.net/star-wars-legends/images/4/4e/PurplePlanet-FT.jpg/revision/latest?cb=20190219050431'
  },
  {
    name: 'Dorin',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/6/66/Aleen_FDNP.png/revision/latest?cb=20180110132928'
  },
  {
    name: 'Champala',
    link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGCLpUru73-TswTh0xgP7rCBSb8U34BQaV8Q&usqp=CAU'
  },
  {
    name: 'Mirial',
    link: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bacac58b-3be9-42b4-ae42-7a656c195a28/dcconau-dfb1f9dd-35db-476f-b5bb-81c6b0560ea4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYmFjYWM1OGItM2JlOS00MmI0LWFlNDItN2E2NTZjMTk1YTI4XC9kY2NvbmF1LWRmYjFmOWRkLTM1ZGItNDc2Zi1iNWJiLTgxYzZiMDU2MGVhNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.-0uDsYIo0Qnzdgb0kqok1nOfEzoL4lBygDScwIaqVOY'
  },
  {
    name: 'Serenno',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Serenno-Massacre.png/revision/latest/top-crop/width/360/height/450?cb=20130607043719'
  },
  {
    name: 'Concord Dawn',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/8/84/Concord_Dawn_system.png/revision/latest?cb=20160128214904'
  },
  {
    name: 'Zolan',
    link: 'https://vignette.wikia.nocookie.net/ru.starwars/images/6/66/Zolan.jpg/revision/latest?cb=20130203072432'
  },
  {
    name: 'Ojom',
    link: 'https://planetary.s3.amazonaws.com/assets/images/9-small-bodies/2015/20151106_crop_p_color2_enhanced_release-superenhanced-2k-dc-ir-zld.png'
  },
  {
    name: 'Skako',
    link: 'https://lumiere-a.akamaihd.net/v1/images/skako-minor-main_10443887.jpeg?region=311%2C1%2C969%2C544&width=960'
  },
  {
    name: 'Muunilinst',
    link: 'https://media.sketchfab.com/models/fe2bd94660e842728c3fd3595d45b30c/thumbnails/1c1a72d32cc0467d888997edd7938724/a89b24ac2fd14a99a462a29d3864ae78.jpeg'
  },
  {
    name: 'Shili',
    link: 'https://media.moddb.com/images/mods/1/13/12901/christophis.jpg'
  },
  {
    name: 'Kalee',
    link: 'https://vignette.wikia.nocookie.net/starwars/images/c/c1/Kalee_TEA.jpg/revision/latest?cb=20200405160536'
  },
  {
    name: 'Umbara',
    link: 'https://gamepedia.cursecdn.com/swtor_ru_gamepedia/9/92/Umbara.png'
  },
]

export default planets