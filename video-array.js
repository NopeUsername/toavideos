// step 1: upload video to videos/ folder
// step 2: go here, and do 'videos/nameofvideo.mp4', if its the one all the way at the bottom, dont add the ",". Thank you for your time
var videoArray = [
	'https://cdn.discordapp.com/attachments/799419671161733210/904835057489948702/My_intro.mp4',
	'https://cdn.discordapp.com/attachments/881656384352038963/888939092237238313/video0.mp4',
	'https://cdn.discordapp.com/attachments/883902480205905961/889500697538732092/WHA_DA.mp4',
	'videos/spong.mp4',
	'videos/jumpscare.mp4',
	'videos/rappingcat.mp4',
	'videos/veggietale.mp4',
	'videos/catbeats.mp4',
	'videos/mathclass.mp4',
	'videos/halflife.mp4',
	'videos/ltg.mp4',
	'videos/top_infinity_cheese.webm',
	'videos/cocaina.mov',
	'videos/moyai.mp4',
	'videos/bro.mp4',
	'videos/THE_DVD.mp4',
	'videos/alonedoggo.mp4',
	'videos/dogepeic.mp4',
	'videos/funnydog.mp4',
	'videos/THE_ONE_PIECE.mp4',
	'videos/how_was_the_fall.mp4',
	'videos/video0-17-4.mp4',
	'videos/welcome_to_the_underground.mp4',
	'videos/onepiece.mp4',
	'videos/apple.mp4',
	'videos/istock.mp4',
	'videos/Remyboy.mp4',
	'videos/nicoarc.mp4',
	'videos/rightnow.mp4',
	'videos/flopdday.mp4',
	'videos/paid.mp4',
	'videos/dill.mp4',
	'videos/shoe.mp4',
	'videos/bob.mp4',
	'videos/zoroirlbelike.mp4',
	'videos/WHAT.mp4',
	'videos/pusi.mp4',
	'videos/banger.mp4',
	'videos/air_istotle.mp4',
	'videos/appel.mp4',
	'videos/demo_alarm.mp4',
	'videos/Ok.mp4',
	'videos/3D.mp4',
	'videos/peter.mp4',
	'videos/john.mp4',
	'videos/btd5.mp4',
	'videos/hereicome.mp4',
	'videos/minecrafdt.mp4',
	'videos/racist_santa.mp4',
	'videos/ibs.mp4',
	'videos/familymissing.mp4',
	'videos/oblivion.mp4',
	'videos/phonecall.mp4',
	'videos/beat.mp4',
	'videos/HIS_FRIES.mp4',
	'videos/pack.mov',
	'videos/veggies.mp4',
	'https://cdn.discordapp.com/attachments/857979217257955358/888969393793544203/video0_-_2021-07-14T024900.328.mp4',
	'videos/the_cream.mp4',
	'https://cdn.discordapp.com/attachments/881656384352038963/888907647565324288/niko_1.mp4',
	'videos/bomb.webm',
	'videos/baaldud.mp4',
	'videos/gone.mp4',
	'videos/laff.mp4',
	'videos/oyoyoyoyoyoyoy.mp4',
	'videos/video0-1286.mp4',
	'videos/video0-549.mp4',
	'videos/tom.mp4',
	'videos/z.mp4',
	'videos/club_penguin_cart_ride.mp4',
	'videos/hackerman.mp4',
	'videos/hort.mp4',
	'videos/benjamin frenkle.mp4',
	'videos/beam.mp4',
	'videos/among.mov',
	'videos/i_fell_down.mp4',
	'videos/I_fell_down_in_DS_C02_and_this_came_to_mind.mp4',
	'videos/be_a_big_shot.mp4',
	'videos/sleep.mp4',
	// New videos as of 9/25/2021, 4:20 PM (in romanian time)
	// - ShadeblastHere
	'videos/oh_hell_no.mp4',
	//
	'videos/ltgv2.mp4',
	'videos/put-a-finger-down.mp4',
	'videos/funky.mp4',
	'videos/another-canister.mp4',
	'videos/snake-in-my-boot.mp4',
	'videos/bugs-life.mp4',
	'videos/slink-da-kink.mp4',
	'videos/another-grail.mp4',
	'videos/monsters-university.mp4',
	'videos/rattatooly.mp4',
	'videos/handsome-squidward.mp4',
	// New videos as of 10/23/2021, 3:08 AM (in romanian time)
	// - ShadeblastHere
	'videos/thisdude.mp4',
	'videos/GCSDK_fish.webm',
	'videos/long_way_from_texas.mp4', // And nobody noticed.
	'videos/experimente.mp4',
	'videos/exploiters.mp4',
	'videos/sex_win.mp4',
	'videos/chirumiru.mp4',
	'videos/screwthenether.mp4',
	'videos/sew_ner.mp4',
	'videos/video0_9-9.mp4',
	'videos/soccer.mp4',
	'videos/succ.mp4',
	'videos/screamroom.mp4',
	'videos/youre_not_here_alone.mp4',
	'videos/musolinni_feesh.mp4',
	'videos/robloxian.mp4',
	'videos/the_good_music.mp4',
	'videos/LUFFY_NO.mp4',
	'videos/boris.mp4',
	'videos/la_creatura-1.mp4',
	'videos/Penis_dubstep_intro240P.mp4',
	'videos/SAKUYA_GIVING_CIRNO_THE_FISHE_--------240P.mp4',
	'videos/Sin_titulo_100_480p.mp4',
	'videos/shocking_discovery.mp4',
	'videos/Real_life_Father_Grigori_Half_Life_2_meme.mp4',
	'videos/gock.mp4',
	'videos/spider.mp4',
	'videos/kit.mp4',
	'videos/video0-6-19-1.mp4',
	'videos/okay_i_pull_up_hop_out_at_the_after_party_you_and_all_your_friends_yeah_they_love_to_get_naughtysipp.mp4',
	'videos/ichiban.mp4',
	'videos/tunak.mp4',
	'videos/broke_ass.mp4',
	//
	// I think you know the drill by now
	// 10/31/2021
	'videos/pigalert.mp4',
	// Fuck
	// 11/3/2021
	'videos/ferb.mp4',
	'videos/what_the_hell_is_this.mp4',
	'videos/whateven.mp4',
	'videos/hack.mp4',
	'videos/roblox-1.mp4',
	'videos/roblox_client_1995.mp4',
	'videos/old_roblox.mp4',
	'videos/misterobvious.mp4',
	'videos/Gangsta_Rap_-_Ni__a_Ni__a_Ni__a_Clean_Version.mp4',
	'videos/Windows_Gangster_Edition.mp4',
	'videos/joe_biden.mp4',
	'videos/for_you.mp4',
	'videos/damn_daniel.mp4',
	'videos/That_oughta_do_it.mp4',
	'videos/Amarillo_amarillo_los_platanos_240P_1.mp4',
	'videos/My_somewhat_useless_invention.mp4',
	'videos/unibombed.mp4',
	'videos/EPIC.mp4',
	'videos/pornoputas.mp4',
	'videos/LMFAO0.mp4',
	'videos/battleofwits.mp4',
	'videos/eminem_turtle_1.mp4',
	'videos/jumpscare-2.mp4',
	'videos/youu.mp4',
	'videos/THE_DOOR.mp4',
	'videos/no_bomb.mp4',
	'videos/doctor_freeeeman.mp4',
	'videos/download_hl_2_free.mp4',
	'videos/free_bosnian_half_life_steam_cd_key_no_fkae.mp4',
	//
	'videos/AAAUGH.mp4',
	//
	'videos/GREEN_SAMUS.mp4',
	'videos/pala.mp4',
	'videos/bin.mp4',
	'videos/blya.mp4',
	'videos/Angry_Russian_Sound_Effect_Anomaly_1.mp4',
	'videos/russia.mp4',
	'videos/Russian_sneeze.mp4',
	'videos/russian_cat_hangover.mp4',
	'videos/betmen.mov',
	'videos/Ultrakill.mp4',
	'videos/Traktor.mp4',
	'videos/GOOOOST.mov',
	'videos/rat-2.mp4',
	'videos/rat_capture.mp4',
	'videos/crat.mp4',
	'videos/rate_throw_plague_be_upon_you.mp4',
	'videos/racoon.mp4',
	'videos/ebf5_soundtrack.mp4',
	'videos/TRACKED.mp4',
	'videos/The_feeling_the.mp4',
	'videos/kotttot.mp4',
	'videos/Nymphis_Fae_but_its_mixed_together_with_JECXZ_Start.mp4',
	//
	// 11/3/2021 (6:46 PM)
	'videos/IDC_POLISH_RAP.mp4',
	'videos/you_stupid.mp4',
	'videos/crazy.mp4',
	'videos/CrazyFrog.mp4',
	'videos/crazy_penguin.mp4',
	'videos/crazy_dave.mp4',
	'videos/fuc_you_rusia.mp4',
	'videos/Alto_ahi_hermano.mp4',
	'videos/On_February_26th_2007_Philip_Dicks_was_was_mauled_to_death_by_a_low_poly_lion_in_Fairbanks_Alaska.mp4',
	'videos/afton.mp4',
	'videos/avalon.mp4',
	'videos/simon_fucking_cowell.mp4',
	'videos/oblivion.mp4',
	'videos/online.mp4',
	'videos/Demon_Possessed_Singing_Trout.mp4',
	'videos/conductor.mp4',
	'videos/I_will_become_back_my_money.mp4',
	'videos/i wanna lap arround.mp4',
	'videos/DAYTONAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.mp4',
	'videos/conscriptwmv.webm',
	'videos/Look_at_this_nigga_on_this_shit.mp4',
	'videos/sponge.mp4',
	'videos/dont_ever_buy_weed_from_a_gas_station.mp4',
	'videos/camel_singing_maliali_song.mp4',
	'videos/Real_Indonesian_Gaming.mp4',
	'videos/Vinesauce_Vinny_experiences_Star_Warped_question_3.mp4',
	'videos/Cutting_an_onion.mp4',
	'videos/3Diamond_Sword_Rap_by_Tobuscus.mp4',
	'videos/tonight.mp4',
	'videos/i_dont_understand.mp4',
	'videos/sword_fight_on_the_heights.mp4',
	'videos/GEN_Z_DELUXE_EDITION.webm',
	'videos/stupid_phone.mp4',
	'videos/boobie_trap.mp4',
	'videos/THE_GRIM_RAPPER.mp4',
	'videos/rap.mp4',
	'videos/Macaco_artes_marciales.mp4',
	'videos/mr_krabs_gets_votekicked.mp4',
	'videos/tcorndorgyesveryfunnyyemioemwroiwmrewrmowimrower.mp4',
	'videos/Captain_Vance_tragic_death_scene.mp4',
	'videos/cat_toilet.mp4',
	'videos/cat_jumpscare.mp4',
	'videos/cat_voice_career.mp4',
	'videos/CATGIRLDEADLOL.mp4',
	'videos/arabic-cat.mp4',
	'videos/yocat.mp4',
	'videos/catmid.mp4',
	'videos/cool_cat.mp4',
	'videos/catrun.mp4',
	'videos/Fat_ass_tuxedo_cat.mp4',
	'videos/cat_roomba_.mp4',
	'videos/cat_cube_2.mp4',
	'videos/catters.mp4',
	'videos/cat_cylinder.mp4',
	'videos/angelcat_1.mp4',
	'videos/game.mp4',
	'videos/what_is_this.mp4',
	// SPONGEBOBP :D 11/3/2021 9:32 PM EST Exruw
	'videos/spongebopb.mp4',
	'videos/GeorgeOfTheJungle.webm',
	// fetch me their souls 11/4/2021 romanian
	'videos/dullahan.mp4',
	'videos/insanity.mp4',
	'videos/hackermode.mp4',
	'videos/canada.mp4',
	'videos/burgerking.mp4',
	'videos/pala.mp4',
	'videos/aerodynamics.mp4',
	'videos/patrick.mp4',
	'videos/apocalypse.mov',
	'videos/Horde.mp4',
	'videos/wither.mp4',
	// mr banger tweet
	// 11/4/2021
	'videos/video0-1-1-1_1.mp4',
	'videos/0e0dc8ce78c2277e4fd834a930119462.mp4',
	//11/5/2021
	//AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
	'videos/kids.mov',
	'videos/video0.mp4',
	//
	// 11/6/2021
	// ShadeblastHere
	// Shut the fuck up
	'videos/UUUUUA_AUUUUU.mp4',
	'videos/joelghost.mp4',
	'videos/christmes.mp4',
	'videos/mexican.mp4',
	'videos/NATS.mp4',
	'videos/balls.mp4',
	'videos/balls-1.mp4',
	'videos/GiveUsYourBalls.mp4',
	'videos/dawg.mp4',
	'videos/string_shrk.mp4',
	'videos/I_will_become_back_my_money.mp4',
	'videos/payacho.webm',
	'videos/video0-224.mp4',
	'videos/staring.mp4',
	'videos/touching_payphone.mp4',
	'videos/payphone_rain.mp4',
	'videos/albanian.mp4',
	'videos/fatherless_child-1.mp4',
	'videos/accordionhorse.mp4',
	'videos/clevealand.mp4',
	'videos/food_criminal.mp4',
	'videos/train.mp4',
	'videos/dogdogdogdogdogdog.mp4',
	'videos/aprilfools.mp4',
	'videos/naenae.mp4',
	'videos/doin.mp4',
	'videos/doinyourmom.mp4',
	//
	//2003boobear
	//no
	'videos/tank.mov',
	'videos/pizza.mp4',
	'videos/quarter.mp4',
	'videos/parachute.mp4',
	'videos/trust_me_on_this_it_is_soo_good.mp4',
	'videos/patrick_roasts_krabs.mp4',
	'videos/United_Home_Security.mp4',
	'videos/construct_pool.mp4',
	'videos/britian.mp4',
	// 'videos/aneruca.mp4', THIS ISNT A VIDEO BOOBEAFR
	'videos/ashamed.mp4',
	'videos/in_tears.mp4',
	'videos/i_know_i_fiona.mp4',
	'videos/wah_is_coming.mp4',
	'videos/astronaut_game.mp4',
	'videos/who_you_here_to_meet.mp4',
	//11/7/2021
	//2003boobear
	//genius!
	'videos/something_serious.mov',
	'videos/duck_dance.mp4',
	'videos/gato.mp4',
	'videos/pan_hit.mp4',
	'videos/sad_mood.mp4',
	'videos/dog_cat.mp4',
	'videos/wrath.mp4',
	'videos/reddit.mp4',
	'videos/alerta_de_intrusos.mp4',
	'videos/slogcat.mov',
	'videos/i_was_born.mp4',
	'videos/wii.mp4',
	'videos/bacon.mp4',
	'videos/lets_goooooooooo.mp4',
	'videos/bowl.mp4',
	'videos/music.mp4',
	'videos/hello.mp4',
	'videos/alerta_de_macaco.mp4',
	'videos/school_lunch.mp4',
	'videos/bottle.mp4',
	'videos/that_true.mp4',
	// 11/7/2021 6:52 PM my balls
	// ShadeblastHere
	'videos/20dollarhairnats.mp4',
	'videos/HOMER_IS_DEAD.mp4',
	'videos/nightma.mp4',
	'videos/Crystal_Weed.mp4',
	'videos/Nebunu_weed.mp4',
	'videos/weed_milk_tutorial.mp4',
	'videos/A.mp4',
	'videos/dies.mp4',
	'videos/cloroform.mp4',
	'videos/my_dad_works_for_the_central_intelligence_agency.mp4',
	'videos/a_simpear.mp4',
	'videos/majima.mp4',
	'videos/the_ultimate_showdown.mp4',
	'videos/im_dead_asf.mp4',
	'videos/its_time_to.mp4',
	'videos/mimic.mp4',
	'videos/Im_not_your_daddy_Im_your_grandpa_GEICO_Commercial.mp4',
	'videos/all_rage_faces.mp4',
	'videos/McDragers.mp4',
	'videos/kill.mp4',
	'videos/kfc_man_dies.mp4',
	'videos/soldier_turn.mp4',
	'videos/You_have_6_hours_28_minutes_38_seconds.mp4',
	'videos/peanut_butter_jelly_time.mp4',
	'videos/jojoe.mp4',
	'videos/whore.mp4',
	'videos/U.mp4',
	'videos/arbier.mp4',
	'videos/stare.mp4',
	'videos/the_final_meme.mp4',
	'videos/lalalalllalalalalal.mp4',
	'videos/You_know_who_it_is.mp4',
	'videos/video0-98-2.mp4',
	'videos/GET_R.mp4',
	'videos/elliscomeonman.mp4',
	'videos/builderman_2010.mp4',
	'videos/GIT.mp4',
	'videos/jiggy.mp4',
	'videos/Homer_Goes_Postal.mp4',
	'videos/ad_for_vehicular_manslaughter.mp4',
	'videos/epicvideo.mp4',
	'videos/get_down.mp4',
	'videos/liveleak.mp4',
	'videos/brooo.mp4',
	'videos/ice_cream.webm',
	'videos/fish.mp4',
	'videos/danincg.mp4',
	'videos/danceofgods.mp4',
	//
	//2003boobear
	//shush
	'videos/asshole.mov',
	'videos/banana.mp4',
	'videos/bomb.mp4',
	'videos/dbz_1.mp4',
	'videos/fast_food_delivery_for_chickens.mp4',
	'videos/resident.mp4',
	'videos/sqreel.mp4',
	'videos/the_time.mp4',
	'videos/video0-21.mov',
	'videos/video0-33.mov',
	'videos/video0.mov',
	'videos/you_should.mp4',
	'videos/welcome_to_tetrio_place_the_blocks_1.3gpp',
	//
	//
	//ShadeblastHere
	//
	//   11/9/2021
	// ALSO EXRUW PLEASE TELL ME HOW THE FUCK CAN I UPLOAD VIDEOS OF MORE THAN 10 MB OR WHATEVER
	// DON'T JUST SAY "get good xd" THAT MEANS NOTHING
	'videos/flex.mp4',
	'videos/car_nub.mp4',
	'videos/dat_bass.mp4',
	'videos/video0-8-6.mp4',
	'videos/hi_im_a_mac.mp4',
	'videos/ey_of_da_tigr.mp4',
	'videos/shut.mp4',
	'videos/bomb.mp4',
	'videos/Afraid_of_Technology.mp4',
	'videos/spongeobb_sing.mp4',
	'videos/c-3.mp4',
	'videos/Angry.mp4',
	'videos/thanos_beatbox.mp4',
	'videos/telechargement_2.mp4',
	'videos/ninja.mp4',
	'videos/stove_1.mp4',
	'videos/fridge.mp4',
	'videos/f25.mp4',
	'videos/shrimp.mp4',
	'videos/silence.mp4',
	'videos/Grab The Child Trailer.mp4',
	'videos/Out_Of_Your_Friends_Which_Are_You.mp4',
	'videos/slap.mp4',
	'videos/video0_12.mp4',
	'videos/h_2.mp4',
	'videos/SHUT_THE_FUCK_UP_CLYDE.mp4',
	'videos/Penguin_push.mp4',
	'videos/soulja_boy.mp4',
	'videos/cheese-1.mp4',
	'videos/mana.mp4',
	'videos/SON_OF_A_BITCH.mp4',
	'videos/SpotifyAd360P.mp4',
	'videos/vs0CV8D49lQzUsV0.mp4',
	'videos/Hamoud_Habibi.mp4',
	'videos/mario.mp4',
	'videos/spybackflip.mp4',
	'videos/distress.mp4',
	'videos/persian_turtle.mp4',
	'videos/head.mp4',
	'videos/persona.mp4',
	'videos/swordfish.mp4',
	'videos/hahaha.mp4',
	'videos/heavy_angry.mp4',
	'videos/man-1.mp4',
	'videos/beep.mp4',
	'videos/casey.mp4',
	'videos/baned.mp4',
	'videos/oh_no.mp4',
	'videos/gethelp.mp4',
	'videos/LMAO.mp4',
	'videos/EGG.mp4',
	'videos/fishing.mp4',
	'videos/TF2COMP.mp4',
	'videos/beadworld-1.mp4',
	'videos/ENCOUNTER.mp4',
	'videos/w9.mp4',
	'videos/WHOA.mp4',
	'videos/Why_is_he_selling_merch_for_a_demo....mp4',
	'videos/video0-3.mp4',
	'videos/wwq.mp4',
	'videos/gangsta.mp4',
	'videos/gay.mp4',
	'videos/laugh.mp4',
	'videos/Kpop_more_like_KPOOP.mp4',
	'videos/GLUE_ON_THE_ROACH_BRO.mp4',
	'videos/Oh_wow_that_is_relatable_1080p_HD.mp4',
	'videos/aaaaaa.mp4',
	'videos/thats_all_folks.webm',
	'videos/the_new.mp4',
	'videos/Screaming_Gopher.mp4',
	'videos/Luigi_fall_-_Copy.mp4',
	'videos/drakw.mp4',
	'videos/HOW.mp4',
	'videos/the_spy_man_is_here.mp4',
	'videos/epic_exposition.mp4',
	'videos/Editor14.mp4',
	'videos/parenting_102.mp4',
	'videos/2003boobear.mp4',
	'videos/ANGER.mp4',
	'videos/i_dont_fucking_i_dont_fucking_care.mp4',
	'videos/video.mp4',
	'videos/allach.mp4',
	'videos/androids_winning.mp4',
	'videos/AAA.mp4',
	'videos/Robert.mp4',
	'videos/aah_1080p60.mp4',
	'videos/darkseid.mp4',
	'videos/warninggayalert.mp4',
	'videos/interrogation.mp4',
	'videos/yes.mp4',
	'videos/23.mp4',
	'videos/fuck-1.mp4',
	'videos/racistmario.mp4',
	'videos/YOIMCASEY.mp4',
	'videos/rat.mp4',
	'videos/you.mp4',
	'videos/kick.mp4',
	'videos/monday.mp4',
	'videos/DeathSlap.mp4',
	'videos/monkkeyyyy.mp4',
	// Part 2
	'videos/PURPLE_GUY.mp4',
	'videos/lobster.mp4',
	'videos/gaming.mp4',
	'videos/lizardbounce.mp4',
	'videos/2010.mp4',
	'videos/pepega.mp4',
	'videos/TOAD_MACARENA.mp4',
	'videos/SEX_1.mp4',
	'videos/epic_dancing_2.mp4',
	'videos/intense_swearning.mp4',
	'videos/cooler.mp4',
	'videos/ptpsS_FacTEwZ8fg.mp4',
	'videos/Halloween2.mp4',
	'videos/orange.mp4',
	'videos/hors.mp4',
	'videos/eggman.mp4',
	'videos/NEWPORTS.mp4',
	'videos/fAGGET.mp4',
	'videos/uber_oni_flushed-1.mp4',
	'videos/video0-16.mp4',
	'videos/sweet_bro_and_hella_jeff.mp4',
	'videos/leanop.mp4',
	'videos/when.mp4',
	'videos/perc.mp4',
	'videos/bababooey.mp4',
	'videos/cringe-1.mp4',
	'videos/gondal.mp4',
	'videos/1587476541539.mp4',
	'videos/kokakola.mp4',
	'videos/Video_by_chesterstone745-CBjpyrZnidB.mp4',
	'videos/asse.mp4',
	'videos/batman.mp4',
	'videos/cola.mp4',
	'videos/souljaboy.mp4',
	'videos/duck.mp4',
	'videos/Herobrine_Vs_Slenderman.mp4',
	'videos/themilkman.mp4',
	'videos/nyanyanyanyanya.mp4', // Love the video? Hate the video?
	'videos/OH.mp4',
	'videos/tyler.mp4',
	'videos/computer_man.mp4',
	'videos/20200502_1.mp4',
	'videos/What_The_Fuck.mp4',
	'videos/soulja.mp4',
	'videos/huge_heads.mp4',
	'videos/funny.mp4',
	'videos/Wyoming.mp4',
	'videos/nyaaaum.mp4',
	'videos/qotd.mp4',
	// that should be enough (for my sanity)
	//
	// Hey 11/10/2021
	'videos/02.webm', // HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA
	//
	//11/11/2021 2003boobear
	//genius!
	'videos/pig.mp4',
	'videos/snoic_vs_tbc.mp4',
	'videos/sheesh.mp4',
	'videos/bear.mp4',
	'videos/basedcrackers.mp4',
	'videos/bloons.mp4',
	'videos/golf.mp4',
	'videos/heavy.mp4',
	'videos/your_mom.mp4',
	'videos/epic_fail.mp4',
	'videos/vince.mov',
	'videos/crazy_car.mp4',
	'videos/night_of_nights.mp4',
	'videos/gru.mov',
	'videos/villager.mp4',
	'videos/coke_bottle.mp4',
	// 11/12/2021
	// ShadeblastHere
	'videos/indian.mp4',
	'videos/walking.mp4',
	'videos/Black_Jew_Online-1.mp4',
	'videos/6qok3s.mp4',
	'videos/damn_daniel-1.mp4',
	'videos/resident.mp4',
	'videos/hdmi_to_hose.mp4',
	'videos/atumalaca.mp4',
	'videos/packwatch.mp4',
	'videos/Jetpack_Joyride.mp4',
	'videos/RIP_BOZO.mp4',
	'videos/rippeely.mp4',
	'videos/Snowwatch.mp4',
	'videos/gear.mp4',
	'videos/indian_scammer.mp4',
	'videos/cap_doctor.mp4',
	// 11/14/2021
	// ShadeblastHere
	'videos/1626699928698705724.webm',
	'videos/aauugh.mp4',
	'videos/abraham.mp4',
	'videos/ADBREAK.mp4',
	'videos/amongus..mp4',
	'videos/bad_apple.mp4',
	'videos/balls-2.mp4',
	'videos/barbarian_cutscene.mp4',
	'videos/bartt.mp4',
	'videos/british_bad_apple.mp4',
	'videos/Contando_Creepypastas_TF2_-_El_lamento_del_Tramposo._Beta.mp4',
	'videos/Counterstrike_in_REAL.mp4',
	'videos/DemoDemoPan.mp4',
	'videos/DIG_A_HOLE.mp4',
	'videos/Dilbert_2.mp4',
	'videos/doe_mij_een_toppertje.mp4',
	'videos/Doom_2_x_Deltarune_Ralsei_s_got_a_Gun__-_Full_Gameplay_Video240P.mp4',
	'videos/e.mp4',
	'videos/ebf5belike.mp4',
	'videos/el_ingenio.mp4',
	'videos/ESSO.mp4',
	'videos/explaining.mp4',
	'videos/fear.mp4',
	'videos/floppy.webm',
	'videos/fuu.mp4',
	'videos/gaogao.mp4',
	'videos/genders.mp4',
	'videos/get_stratod.mp4',
	'videos/grrrrr.mp4',
	'videos/gu.mp4',
	'videos/Guballs_fantastic_land_parts_1_and_2.mp4',
	'videos/Gushers.mp4',
	'videos/haha_skeleton.mp4',
	'videos/hahahaha_tails.mp4',
	'videos/Halloween_Harassment.mp4',
	'videos/happywheels.mp4',
	'videos/haram.mp4',
	'videos/Have_a_nice_fall_you_stupid_bitch.mp4',
	'videos/he_dance.mp4',
	'videos/Head_out.mp4',
	'videos/heavyisdissapointed.mp4',
	'videos/hello_are_you_the_resident_of_evil.mp4',
	'videos/here.mp4',
	'videos/here_comes_yogi.mp4',
	'videos/heres_tree.mp4',
	'videos/hex.mp4',
	'videos/hgpjiSAY9DM.mp4',
	'videos/hi.mp4',
	'videos/hi_did_you_know_that_eeeeeeee_bebeb_bebebb_ebbeee_ee_eee_e_e_ee_ee_ee_eb_eb....mp4',
	'videos/highquality.mp4',
	'videos/HKXME0Q59AFshNYx.mp4',
	'videos/hobbits.mp4',
	'videos/hollow_knight_2_leaked.mp4',
	'videos/HOO_HEY_OHH_WAY.mp4',
	'videos/hood.mp4',
	'videos/Hope.mp4',
	'videos/How_the_world_meows.mp4',
	'videos/how_to_get_rich.mp4',
	'videos/How_To_Stop_Car_Crash.mp4',
	'videos/HUH.mov',
	'videos/i_have.mp4',
	'videos/its_so_sad.mp4',
	'videos/Japanese_niggas_be_like.mp4',
	'videos/kangaroo.mp4',
	'videos/kit.mov',
	'videos/lock_the_taskbar.mp4',
	'videos/mcdonal.mp4',
	'videos/metal-prince-solid.webm',
	'videos/MMM.mp4',
	'videos/Moeuclear_Fusion.mp4',
	'videos/mumthistastesdifferent.webm',
	'videos/numanuma.mp4',
	'videos/oneshot.mp4',
	'videos/oneshot2.mp4',
	'videos/pain_elemental.mp4',
	'videos/Payday_2_OST.webm',
	'videos/potion_seller.mp4',
	'videos/racoon_eating_grapes.mp4',
	'videos/SENTRY_SAPPING_MY_SPY.mp4',
	'videos/Sonic_Talks_With_His_Mouth.mp4',
	'videos/stole_my_bike.mp4',
	'videos/storm_trooper_dancing.mp4',
	'videos/superghostbusters.mp4',
	'videos/thats_the_joke.mov',
	'videos/THIN_YOUR_PAINTS.mp4',
	'videos/video0_12-1.mp4',
	'videos/vietnamese_minecraft_song.mp4',
	'videos/viva.mp4',
	'videos/WALKING_MOYAI.mp4',
	'videos/WHAT2.mp4',
	'videos/when2.mp4',
	'videos/When_Im_Bad_YTPMVing.mp4',
	'videos/Yakuza_0_-_Friday_Night.mp4',
	'videos/yeeeeeeeeeee.mp4',
	'videos/yes_this.mp4',
	'videos/YES_YES.mp4',
	'videos/yo.mp4',
	'videos/you-1.mp4',
	'videos/your_sleep_paralysis_demon.mp4',
	'videos/yroue.mp4',
	'videos/yu.mp4',
	'videos/yuutoe.mp4',
	'videos/zzfdo0_1.webm',
	//2003boobear, 11/15/2021
	//redemption arc
	'videos/Wha.mp4',
	'videos/cooking_with_oil.mp4',
	'videos/i_am_the_storm_that_is_approaching.mp4',
	'videos/thefinaltrollpiece.mp4',
	'videos/get_your_balls_stuck.mp4',
	'videos/pushing_in_your_balls.mp4',
	'videos/asterisk.mp4',
	'videos/se.mp4',
	'videos/scout_but_high_on_meth.mp4',
	'videos/-163.mp4',
	'videos/death_2.mp4',
	'videos/scratch.mp4',
	'videos/COMEGETTHISMAN.mp4',
	'videos/im_so_bored.mp4',
	'videos/cheese_dog.mp4',
	'videos/Lets_shoot_for_40.mp4',
	'videos/free_spongebob_ipad_100_real_no_fake_no_viru.mp4',
	'videos/dud_perfec.mp4',
	'videos/S.mp4',
	'videos/the_sus_virus.mp4',
	'videos/DEATH.mp4',
	'videos/ahhhhhh.mp4',
	'videos/ASMR_You_fall_asleep_while_watching_George_Lopez_at_3_AM.mp4',
	'videos/sponge.mp4',
	'videos/demoman.mp4',
	'videos/sick thomas the train tricks.mp4',
	'videos/my_cat.mp4',
	'videos/Grizzly.mp4',
	'videos/brick_fall.mp4',
	'videos/Im_late.mp4',
	'videos/AMAZIIIIING.mp4',
	'videos/Mr._Krabs_Hydraulic_Press_Money.mp4',
	'videos/Crimson.mp4',
	'videos/vehicular_manslaughter.mov',
	'videos/game_and_watch.mov',
	'videos/home_alone.mov',
	'videos/tf2_heavy.mov',
	'videos/squod_gam.mov',
	'videos/osu.mov',
	'videos/cat_sled.mov',
	'videos/my_hero_academia.mov',
	'videos/death.mov',
	'videos/nooooooooooooooooo.mov',
	//
	// 					11/16/2021
	// 				  ShadeblastHere
	//
	//				   - Look! 35 Videos! -
	//
	'videos/adachi.mp4',
	'videos/akuma.mp4',
	'videos/check_this.mp4',
	'videos/damn_daniel-2.mp4',
	'videos/damn_daniel-3.mp4',
	'videos/damn_daniel.mov',
	'videos/damn_daniel_but_its_1080p.mp4',
	'videos/damn_daniel_one_piece_x_monochrome_meme.mp4',
	'videos/dang.mp4',
	'videos/epicdancing.mp4',
	'videos/gato_magic.mp4',
	'videos/gman.mp4',
	'videos/HOW_DO_YOU_MESS_UP_A_SANDWICH.mp4',
	'videos/jesue.mp4',
	'videos/loadsamoney.mp4',
	'videos/marisa.mp4',
	'videos/modify.mp4',
	'videos/muchlikeeveryoneelse.mp4',
	'videos/multiple_4K_monitors.mp4',
	'videos/Never_Illegally_Download.mp4',
	'videos/OffLimits.mp4',
	'videos/POSTAL2NPC.mp4',
	'videos/POSTAL2NPC_2.mp4',
	'videos/POSTAL2NPC_3.mp4',
	'videos/POSTAL2NPC_4.mp4',
	'videos/POSTAL2NPC_5.mp4',
	'videos/POSTAL2NPC_6.mp4',
	'videos/POSTAL2NPC_7.mp4',
	'videos/POSTAL2NPC_8.mp4',
	'videos/redesign_your_logo.mp4',
	'videos/SONIC_GAMEGEAR.mp4',
	'videos/Spongebob_Sings_Gangstas_Paradise.mp4',
	'videos/technical_issue.mp4',
	'videos/ururur.mp4',
	//
	// 					11/18/2021
	// 				  ShadeblastHere
	//
	//				- i'm so cracked -
	//
	'videos/ANON_NOOOO.mp4',
	'videos/borzoi.mp4',
	'videos/credits.mp4',
	'videos/dallas.mp4',
	'videos/dallas_goes_underground.mp4',
	'videos/damn_daniel-4.mp4',
	'videos/Damn_Daniel_Super_Star.mp4',
	'videos/Flightreacts_Damn_Daniel_ar_ar_ar_ar_ar_ar_vocoded.mp4',
	'videos/FLOOR_999.mp4',
	'videos/GO_FUCK_YOURSELF.mp4',
	'videos/i_have_a_meme.mp4',
	'videos/kiryu.mp4',
	'videos/manly.mp4',
	'videos/MY_GOD.mp4',
	'videos/pollo.mp4',
	'videos/seels.mp4',
	'videos/SPACE.mp4',
	'videos/Spanish_Skeleton.mp4',
	'videos/sponb.mp4',
	'videos/sponbg.mp4',
	'videos/Tainted_Lost.mp4',
	'videos/team_fort_two.mp4',
	'videos/The_Isaac_of_Isaac_-_ReIsaac.mp4',
	'videos/wayfair.mp4',
	'videos/YOU_LOSE.mp4',
	//
	//2003boobear, 11/17/2021 (shadeblasthere's timezone is different)
	'videos/twinke_tackle.mov',
	'videos/trolls.mp4',
	'videos/dbd.mp4',
	'videos/coach.mp4',
	'videos/mario_is_REAL.mp4',
	'videos/fire.mp4',
	'videos/arbys_announcement.mp4',
	'videos/windy_Day.mp4',
	'videos/dripton.mp4',
	'videos/chipmunk_rap.mp4',
	'videos/Iwantmychickennuggets.mp4',
	// why does my penis burn when i piss (exruw)
	'videos/cinder.mp4',
	//
	// 					11/20/2021
	// 				  ShadeblastHere
	//
	//   - one of the mp4s i downloaded made me go insane -
	//
	'videos/01X01-The-Froggy-Apple-Crumble.mp4',
	'videos/6EUYBWhVkKg.mp4',
	'videos/agk.mp4',
	'videos/agk_tylenol.mp4',
	'videos/Anti_Bob_Ross.mp4',
	'videos/bonkumiru.mp4',
	'videos/chirumiru_midi.mp4',
	'videos/CREEPER_RAP.mp4',
	'videos/divamiru.mp4',
	'videos/engimiru.mp4',
	'videos/fox_steals_womans_phone.mp4',
	'videos/gangnamiru.mp4',
	'videos/heavylaugh.mp4',
	'videos/how_do_i_call_this.mp4',
	'videos/insanity_at_its_finest.mp4',
	'videos/jonumiru.mp4',
	'videos/kitchenmiru.mp4',
	'videos/Minecraft_Volume_Alpha.mp4',
	'videos/not_oneshot.mp4',
	'videos/overdrive.mp4',
	'videos/pissumiru.mp4',
	'videos/rainbow_trololol.mp4',
	'videos/reimu.mp4',
	'videos/rogueracist.mov',
	'videos/sandwichmiru.mp4',
	'videos/slamiru.mp4',
	'videos/slugger.mp4',
	'videos/spongebobb.mp4',
	'videos/stupid_idiot.mp4',
	'videos/stupid_idiot2.mp4',
	'videos/the_man_of_sex.mp4',
	// exruw damn daniel 11/20/21
	'videos/damndan.mp4',
	'videos/floweydrive.mp4',
	'videos/therock.mp4',
	//2003boobear, 11/22/2021
	'videos/dumb_egg_shot_his_shadow.mp4',
	'videos/maij.mp4',
	'videos/dob_bowl.mp4',
	'videos/ooh_hoo_hoo.mp4',
	'videos/fighting_air.mp4',
	'videos/CHRISTMAS_dante.mp4',
	'videos/knock_knock.mp4',
	'videos/REALgamers.mp4',
	'videos/dont_screenshot_nfts_.mp4',
	'videos/Alcoholism.mp4',
	'videos/bad_cramp.mp4', //HEY SHADEBLASTHERE
	'videos/based_as_fuck.mp4', //CRY
	'videos/car_alarms_everywhere.mp4',
	'videos/big_shot_but_its_small_shot.mp4',
	'videos/B_O_N_K.mp4',
	'videos/korea.mp4',
	'videos/lament.mov',
	'videos/H.mov',
	//2003boobear, 11/25/2021
	'videos/how_ya_doin.mov',
	'videos/ill_cut_it.mov',
	'videos/pootis_man.mov',
	'videos/clash_royale_W.mp4',
	'videos/ch.mp4',
	'videos/psychopath_abrogation.mp4',
	'videos/22_minutes.mp4',
	'videos/Glass.mp4',
	'videos/boom.mp4',
	'videos/stanley_parable_american_psycho.mp4',
	'videos/Seaofthieves.mp4',
	'videos/luigi_skate.mp4',
	'videos/dart_monkey.mp4',
	'videos/use_water.mp4',
	'videos/dog_water.mp4',
	//
	// 					11/27/2021
	// 				  ShadeblastHere
	//
	//   	- damn daniel, 🐬 🐬 🐬 🐬 🐬 🐬 -
	//
	// 	  also whenever i add // at the end of my videos you don't fuck with it
	//  just add another one
	//
	'videos/astaghfirullah.mp4',
	'videos/bad_daniel.mp4',
	'videos/badgers.mp4',
	'videos/bat.mp4',
	'videos/bound3.mp4',
	'videos/breen.mp4',
	'videos/chinese.mp4',
	'videos/damn.mp4',
	'videos/damn_danie.mp4',
	'videos/damn_daniel-5.mp4',
	'videos/damn_daniel-6.mp4',
	'videos/damn_daniel-7.mp4',
	'videos/damn_daniel-8.mp4',
	'videos/damn_daniel-9.mp4',
	'videos/damn_daniel_1.mp4',
	'videos/dantdm.mp4',
	'videos/DO_YOU.mp4',
	'videos/dorado.mp4',
	'videos/drink.mp4',
	'videos/fan.mov',
	'videos/FIX_THE_DOOR.mp4',
	'videos/foregin_language.mp4',
	'videos/headphones.mp4',
	'videos/how_do_i_craft_this_again.mp4',
	'videos/jiren_scary.mp4',
	'videos/kanye.mp4',
	'videos/LIMC_ar_ar_ar_ar.mp4',
	'videos/maeia_hee.mp4',
	'videos/math.mp4',
	'videos/michael_jackson_cat.mp4',
	'videos/michael_jackson_corpse.mp4',
	'videos/michael_jackson_dog.mp4',
	'videos/mine_the_diamond.mp4',
	'videos/Mouse_Party_3.mp4',
	'videos/NEW_JERSEY.mp4',
	'videos/night_of_fire.mp4',
	'videos/oh_shit_im_feeling_it.mp4',
	'videos/oooh.mp4',
	'videos/PINGAS.mp4',
	'videos/scary_fact.mov',
	'videos/SKATE.mp4',
	'videos/Spider-Man_Screaming_Noooo.mp4',
	'videos/the_most_annoying_sound_in_the_world.mp4',
	'videos/this_is_sparta.mp4',
	'videos/Tnt.mp4',
	'videos/we_will_steal_the_moon.mp4',
	'videos/wheelchair.mp4',
	'videos/your_mother.mp4',
	'videos/youwhat.mp4',
	'videos/YTPMV_Damn_Colored_Daniel_Spark.mp4',
	// exruw dont you lecture me with your 30 dollar hair nats
	'videos/spacesong.mp4',
	//
	// 					11/29/2021
	// 				  ShadeblastHere
	//
	//		 - let's beat http://thebest404pageeverredux.com -
	//
	'videos/4k_demaster.mp4',
	'videos/alright.mp4',
	'videos/Black_jutsu.mp4',
	'videos/bruhdy.mov',
	'videos/ceda.mp4',
	'videos/damn_django.mp4',
	'videos/Dion.mp4',
	'videos/Joe_dies.mov',
	'videos/LTG_KYS_.mp4',
	'videos/monke.mp4',
	'videos/mosq.mp4',
	'videos/ohshitwatchout.mp4',
	'videos/ok2.mp4',
	'videos/piccolo_you_have_no_sauce.mp4',
	'videos/roblox.mp4',
	'videos/ROBLOX_DEVELOPER_TOOLS_HACK.mp4',
	'videos/sa.mp4',
	'videos/shapiro.mp4',
	'videos/video0-4-1.mp4',
	'videos/WAKE_UP.mp4',
	'videos/we.mp4',
	'videos/wepon_wepon_wepon_wepon_wepon.mp4',
	'videos/when_puberty_hits.mp4',
	//2003boobear, 11/29/2021
	//ITS ALMOST CHRISTMAS
	'videos/5seconds.mp4',
	'videos/orabeatdown.mp4',
	'videos/dorabeatdown.mp4',
	'videos/Good_luck_with_that_I_have_weed.mp4',
	'videos/STREET_FIRE.mp4',
	'videos/the_world.mp4',
	'videos/dollar.mp4',
	'videos/Chocolate_Oreos.mp4',
	'videos/chicken_nuggets.mp4',
	'videos/the_trash.mp4',
	'videos/taunt_battle.mp4',
	'videos/combine.mp4',
	'videos/Tuba_1.mp4',
	'videos/build.mp4',
	'videos/batman.mp4.mp4.mp4.mp4.mp4',
	'videos/ATV_offroad_fury_3.mp4',
	'videos/rip_to_his_balls.mp4',
	'videos/bloonchipper.mp4',
	'videos/dog_NATS.mp4',
	'videos/robloxghetto.mp4',
	'videos/gas_accident.mp4',
	'videos/tf2_in_real_life.mp4',
	'videos/monker.mp4',
	'videos/Unfunny.mp4',
	'videos/106.mp4',
	'videos/MegaBurg.mp4',
	'videos/man_is_consumed_by_the_void-1.mp4',
	'videos/stuffed_pig.mp4',
	'videos/is_the_food_almost_doe.mp4',
	'videos/good_smell_flavor.mp4',
	'videos/ill_look_it_up.mp4',
	'videos/im_glen_quagmire.mp4',
	'videos/TARKUS.mp4',
	'videos/napalm.mov',
	'videos/m.mov',
	'videos/NICK.mov',
	'videos/fawn.mov',
	'videos/female_strength.mov',
	'videos/trayaurus.mov',
	'videos/standards.3gpp',
	//2003boobear, 11/30/2021
	//christmas just around the corner
	'videos/new_pokemon.mp4',
	'videos/rXvFebEs.mp4',
	'videos/chair_lol.mp4',
	'videos/scroingy.mp4',
	'videos/fridge.mp4',
	'videos/family_guyyyy.mp4',
	'videos/christmas_amneisa_obsessed_woman.mp4',
	'videos/the_called_one.mp4',
	'videos/tommy_gun.mp4',
	'videos/best_musician.mov',
	'videos/vergil_CHRISTMAS.mov',
	//2003boobear, 12/1/2021
	//https://youtu.be/gaGnS6D1Zv4
	'videos/spring_cleaning.mp4',
	'videos/El_pibe_que_salio_de_una_alcantarilla.mp4',
	'videos/CRABGRASS.mp4',
	'videos/roman_class.mp4',
	'videos/BAGLE.mp4', //HEY SHADE CRY ABOUT IT
	// what's there to cry about if i don't get it you dumbass
	//
	// 					12/ 1/2021
	// 				  ShadeblastHere
	//
	//		 	   - GAMERS,  GAMERS! -
	//
	'videos/boiaintnowayboi_8.mp4',
	'videos/bottle_skrumpe.mp4',
	'videos/carro_con_sapato.mp4',
	'videos/cinnamon_toast_crunch.mp4',
	'videos/como_ven_a_este_puto_idiota_bastardo_pendejo_imbecil_baboso_de_mierda_dices_puras_mamadas.mp4',
	'videos/Death_Metal_Drumming_Washing_Machine.mp4',
	'videos/diner.mp4',
	'videos/do_you_want_cheese.mp4',
	'videos/DONUT.mp4',
	'videos/duancingrobot.mp4',
	'videos/e-o-carro-da-rua-passando-no-seu-ovo.mp4',
	'videos/FROGGE.mp4',
	'videos/gold_plastic_syndrome.mp4',
	'videos/itprotectsme.mp4',
	'videos/loquendo_putasos.mp4',
	'videos/nuke.mp4',
	'videos/Pemdas.mp4',
	'videos/peteur.mp4',
	'videos/RICK.mp4',
	'videos/shadow_froggo.mp4',
	'videos/skate2.mp4',
	'videos/sosig.mp4',
	'videos/sosoig.mp4',
	'videos/SUPER_FAST_TURTLE.mp4',
	'videos/thanos.mp4',
	'videos/theoats.mp4',
	'videos/THWOMP.mp4',
	'videos/troge.mp4',
	'videos/troller.mp4',
	'videos/twitter_thread.mp4',
	'videos/unintelligible.mp4',
	'videos/Youre_looking_for_the_paintings_with_red_sticker_on_em.mp4',
	//2003boobear, 12/1/2021 (later in the day)
	//i have learned how to use youtube-dl and i plan to abuse this newfound power
	'videos/minecraft.mp4',
	'videos/FNAB.mp4',
	'videos/bruh_who.mp4',
	'videos/super_mario_odyssey_nuke.mp4',
	'videos/Los_Angeles_rush_hour_traffic.mp4',
	'videos/universal_crime.mp4', //READ
	'videos/yodazo.mp4', //EM
	'videos/fairy_flip.mp4', //AND
	'videos/8008135.mov', //WEEP
	'videos/spongebob_nugget.mp4'
	//
]

export function getArray() {
	return videoArray
}

export function getRandomVideo() {
	return videoArray[Math.floor(Math.random() * videoArray.length)]
}
