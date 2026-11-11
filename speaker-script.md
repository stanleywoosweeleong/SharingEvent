# Speaker script: Weather & durian, free farm apps for Agriculture

Stanley Woo · Bryan Woo · Woo Brothers · 20-minute slot

Open `woo-jerantut-talk.html` in Chrome. Press **P** for Projector Mode, **S** for the presenter window (notes + pace timer), **?** for all keys.

| # | Slide | Minutes | Start by |
|---|---|---|---|
| 1 | Title | 0.5 | 0:00 |
| 2 | woobrothers.my | 1.25 | 0:30 |
| 3 | WeatherNext Jerantut | 1.5 | 1:45 |
| 4 | Install | 0.5 | 3:15 |
| 5 | Why forecasts differ | 0.75 | 3:45 |
| 6 | CompareCast + live chart | 1.75 | 4:30 |
| 7 | RainLog Lab | 0.75 | 6:15 |
| 8 | RainScore Lab | 0.75 | 7:00 |
| 9 | ENSO Monitor | 0.75 | 7:45 |
| 10 | Durian Tree Science | 0.75 | 8:30 |
| 11 | Durian IPM | 0.75 | 9:15 |
| 12 | AMIS · AgriMicrobe | 0.75 | 10:00 |
| 13 | AgriPro Timeline | 1 | 10:45 |
| 14 | Offseason Durian | 0.75 | 11:45 |
| 15 | AgriPro Notebook | 0.75 | 12:30 |
| 16 | Tiger Stripe | 0.75 | 13:15 |
| 17 | Spray day: ChemLog + DroneDose | 1 | 14:00 |
| 18 | More durian apps | 0.5 | 15:00 |
| 19 | Claude: how we build | 1.25 | 15:30 |
| 20 | Claude: try it | 1 | 16:45 |
| 21 | Thank you | 0.5 | 17:45 |

Planned total 18.25 min, leaving 1.75 min for questions.

## 1. Title

Open (30 s). Selamat pagi / 大家好. I'm Stanley Woo. My friend Bryan Woo and I share a surname, so we call ourselves Woo Brothers. In 20 minutes: a weather forecast you can trust for your own farm, a set of durian apps in the order you'd use them in a season, and how we use Claude AI to build all of this. Everything is free.

## 2. woobrothers.my

1.25 min. Show woobrothers.my first: it is the home for everything today, so if people remember one thing, it's this address. We are not a company and sell nothing, and new apps keep arriving, so we don't quote a number. I build mostly weather, durian and pest apps; Bryan built CompareCast, the NDVI satellite app and full offline courses. Every app has BM, English and 华文. Invite them to scan now and add it to the home screen; every app in this talk is linked from there.

## 3. WeatherNext Jerantut

1.5 min. Our app built for this district. Three local spots come preloaded (Kg. Simpang Tebing Tinggi, Damak, Bukit Seladang). Walk through the cards; stress the Phytophthora score for durian and the WhatsApp broadcast, which lists farms north to south. Be honest: disease scores are calibrated estimates, not yet field-validated, so we want Jerantut growers to tell us when they're wrong. The AI briefing is optional (the user's own free Gemini key); forecast and disease risk work without it.

## 4. Install

30 s. Stop talking and let people scan. iPhone users must open the link in Safari to get "Add to Home Screen". Offer to help anyone after the talk.

## 5. Why forecasts differ

45 s. Bridge to Bryan's app. Three steps: measure, compute, and every centre runs its own model. In the tropics, a model grid box is about 9 km but an afternoon thunderstorm cell is only a few km, so a model can be right about the storm and still put it over the next kampung. Treat "% chance of rain" as a chance.

## 6. CompareCast + live chart

1.75 min. Bryan's app. This chart pulls live data for Jerantut town when the laptop is online; offline it shows the run saved on 11 Nov 2026 and the label says so. Point at the highlighted day: same town, same day, very different numbers. Ask: "Which one would you trust?" Answer: whichever has been right at your farm. CompareCast shows forecast against actual rain, a gust map, MetMalaysia radar and per-plot rain reminders. If the chart is slow, press Refresh or move on.

## 7. RainLog Lab

45 s. RainLog Lab looks backwards: rainfall history for each orchard, the current dry streak and the longest dry spell this year, which is what durian growers watch before flowering. You set what counts as a rainy day in mm. 114 orchards come preloaded; you can add your own by GPS, export to Excel, share an image.

## 8. RainScore Lab

45 s. RainScore Lab scores six models (IFS 9 km, ICON, JMA, CMA, GEM, GFS) against ERA5 actual rain, every day, for 114 orchards. Two scores: average miss in mm, and how often it called wet or dry correctly, over 7, 14 or 30 days. This closes the loop from the CompareCast slide: now you know which line on that chart to believe.

## 9. ENSO Monitor

45 s. From days to months. ENSO Monitor reads NOAA's official RONI index and weekly Niño 3.4 sea temperature, then adds the Indian Ocean Dipole, the MJO (a wet or dry pulse every 30–60 days) and Northeast Monsoon cold surges. We are in the Northeast Monsoon now (November), so drains and Phytophthora come first. Each signal comes with orchard advice, and it links to MetMalaysia for official warnings. SUHU is the sister app for drought and haze risk.

## 10. Durian Tree Science

45 s. The durian section follows the order you'd meet things in a season: know the tree, protect it, keep the soil alive, time the season, feed it, fix fruit quality, then spray. Durian Tree Science is the foundation: 45 sections and 31 plates, from roots and trunk to floral induction, fruit set and fruit drop, plus how Thailand, Vietnam, Indonesia and others grow durian.

## 11. Durian IPM

45 s. Durian IPM: tap where the problem is and what you see; it places it in one of about 22 pest groups. Non-chemical steps come first, then organic and conventional options ranked by effect. It suggests a rotation from your last spray so you don't repeat a mode of action, and warns about bees at flowering, harvest intervals and banned products.

## 12. AMIS · AgriMicrobe

45 s. AMIS covers 83 beneficial microbes and 42 crops. The Synergy Guide shows which microbes help or fight each other; the Tank-Mix Checker says whether microbes, foliar fertilisers and pesticides can share a tank; First Aid gives today's actions by urgency, including when microbes are not the answer. Most of it works offline; the AI advisor needs the user's own API key.

## 13. AgriPro Timeline

1 min. AgriPro Timeline, Personal Edition. The backbone is days after anthesis (days from full bloom), which is how growers and researchers time durian harvest: about 95 days for Musang King, 105 for IOI, around 120 for D24 and Black Thorn. You anchor a bud, bloom or harvest date and it lays out all 7 stages. Each time you log what you saw on the tree, the projection re-sets to your observation. A heat-unit (GDD) adjustment nudges dates for hot or cool spells; its base temperature is a working assumption to refine against your own records. Then send the schedule to WhatsApp.

## 14. Offseason Durian

45 s. Off-season: 8 steps from choosing the harvest month, preparing the tree, PBZ, drying the root zone, buds to bloom, holding the crop, harvest, and resetting so PBZ doesn't build up. Off-season fruit can fetch 2–3 times the peak price, but it is hard; every figure here links to a published trial.

## 15. AgriPro Notebook

45 s. The nutrient notebook: tap any nutrient to see its job and which nutrients it blocks or helps. The pH chart shows what a root can take up at each soil pH. Mixing rules explain how to avoid gelling, and the advisor suggests a recipe by crop and durian variety.

## 16. Tiger Stripe

45 s. Tiger stripe (老虎斑, belang harimau) is a big quality problem for Musang King. The app turns Prof. Dr. Tran Van Hau's AGRI Malaysia 2026 talk into notes and an action plan: affected trees had low leaf potassium, calcium and magnesium and high nitrogen, consistent with calcium and carbohydrate shortage. The action plan converts the paper's calcium nitrate and magnesium sulphate spray rates to the farm-shop product you actually bought. It links back to the nutrient notebook on the previous slide.

## 17. Spray day: ChemLog + DroneDose

1 min. Spray day. ChemLog Lab 2: enter tank volume and rates, get per-tank amounts and pack counts, send to workers on WhatsApp, and log every round by farm, zone and worker with stock and cost. DroneDose: pick the DJI model and tank, enter mapped area and rate, and it works out loads, water and product per tank, then copies a mixing sheet for the pilot. Both work offline.

## 18. More durian apps

30 s, skip if behind. Pick one or two depending on the room. Borer Action and Trunk Disease Triage are the most asked-about in durian areas: tell pinhole borer from longhorn and Phytophthora before spending money. Nutrient Triage is a leaf key. TerraDurian uses NASA satellite soil moisture for the flowering signal. DurianExport covers documents and flights for selling to China (not an official SF Express app). Tap a card to show its QR.

## 19. Claude: how we build

1.25 min. How can two people with day jobs build so many apps? We use Claude, an AI assistant from Anthropic, as our coding partner. We bring the farm problem, the research and the field checking; Claude writes and tests the code and helps with the three languages. Step 4 matters most: nothing goes out until we've checked it against sources and real trees. Then mention this deck was built with Claude too. (Adjust this slide if your own workflow differs.)

## 20. Claude: try it

1 min. Read one example aloud in the audience's language. Claude has a free plan on the web and as an Android/iPhone app; you can type in BM or Chinese and attach a photo of a leaf or a label. Then the four rules: AI can be wrong, so check the tree and ask an agronomist; MetMalaysia for official warnings; follow the pesticide label; never type passwords, IC or bank details.

## 21. Thank you

Close (≈ 1.75 min left for Q&A). Thank the organisers and growers. Take questions. Repeat the ask: tell us when a forecast or a diagnosis is wrong; that is how these apps get better for Jerantut. Leave this slide up so people can scan or copy the WhatsApp numbers.
