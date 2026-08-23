// PDF page numbers, for reference citations like the physical guide
const PAGE_NUM = {
  march:11, "stop-the-bleed":12, shock:13,
  "pressure-dressing":15, tourniquet:16, "puncture-wound":17, "sucking-chest-wound":18, "impaled-object":19,
  "cleaning-procedure":21, "full-thickness-cut":"22–23", scrapes:24, "fingertip-cut":25, "knuckle-cut":26, "road-rash":27, burns:28, "deep-cuts":29,
  splinter:31, "bug-bite":32, blisters:33, "hot-spot":34, "tick-bite":35, "snake-bite":36, "animal-human-bite":37,
  "basic-principles":39, rice:40, stretcher:41,
  "eye-injury":43, "eye-around":44, "nose-bleeds":45, "severe-nose-bleeds":46, "head-injury":47, "jaw-injury":48, tooth:49,
  "upper-arm":51, "elbow-forearm":52, "wrist-hand":53, finger:54, sling:55,
  "hip-pelvis":57, knee:58, "calf-lower-leg":59, ankle:"60–61", foot:62, toe:63,
  frostbite:65, hypothermia:66, "heart-attack":67, stroke:68, diarrhea:69, hypoglycemia:70, "heat-stroke":71
};

const DATA = [
  {
    id:"trauma", title:"Major Trauma", icon:"march",
    topics:[
      {id:"march", title:"M.A.R.C.H. Assessment", tagline:"How to evaluate a person after major trauma",
        items:["Gloves"],
        warning:"Heavy bleeding and inability to breathe are immediate life-threatening injuries. A person bleeding heavily can die in less than 5 minutes. A person not breathing can experience brain death in 6 minutes.",
        steps:[
          "<b>Massive Hemorrhage —</b> quickly evaluate and treat signs of rapid blood loss (see Stop the Bleed). Spurting or pulsating heavy bleeding on an extremity requires an immediate tourniquet.",
          "<b>Airway —</b> check whether the airway is open. Head position often blocks the airway, so make sure the head isn't tipped forward or to the side.",
          "<b>Respirations —</b> evaluate depth and rate of breathing. Low oxygen increases the risk of death.",
          "<b>Circulation & C-spine —</b> do a thorough \"blood sweep\" of the entire body, evaluate pulses, and stabilize the neck.",
          "<b>Head Injury/Hypothermia —</b> evaluate the person's ability to talk, think, and move. Cover them to keep them warm."
        ]},
      {id:"stop-the-bleed", title:"Stop the Bleed", tagline:"American College of Surgeons protocol",
        items:["Gloves"],
        warning:"Spurting/pulsating heavy bleeding on an extremity requires an immediate tourniquet. Tourniquets are only for extremities — anywhere else, apply pressure immediately.",
        steps:[
          "Find the bleeding injury.",
          "Alert EMS (call 911) as soon as possible.",
          "Apply pressure — cover the wound with dressing supplies or cloth and press firmly.",
          "<b>OR</b> apply a tourniquet immediately for pulsating/spurting bleeding.",
          "<b>OR</b> pack (stuff) the wound with gauze, a puncture wound plug, or a clean cloth, then apply pressure with both hands."
        ]},
      {id:"shock", title:"Shock", tagline:"Confusion or weak pulse can be life threatening",
        tip:"With any major injury, a person often experiences shock. Treat anyone with serious injuries for shock once the injuries are stabilized.",
        warning:"The injured person should not eat or drink anything — shock frequently causes vomiting. If they vomit, roll them onto their side to prevent choking.",
        steps:[
          "Seek immediate emergency assistance.",
          "Lay the person down and raise their legs.",
          "Loosen any tight clothing and cover the person with a blanket or anything available to keep them warm."
        ]}
    ]
  },
  {
    id:"bleeding", title:"Bleeding Wounds", icon:"blood",
    topics:[
      {id:"pressure-dressing", title:"Pressure Wound Dressing", tagline:"For all heavily bleeding wounds",
        items:["Puncture Wound Plug","Medical Grade Tape"],
        warning:"If bleeding persists on a limb after a tight pressure dressing, immediately apply a tourniquet. Do not remove the pressure dressing until the tourniquet is in place.",
        steps:[
          "Expose the wound. Locate the source of the most active bleeding and apply direct pressure.",
          "Remove a dressing from its sterile package and pack it tightly into the wound at the site of the most active bleeding.",
          "Hold direct pressure for a minimum of 3 minutes.",
          "Release to check that bleeding is controlled while maintaining pressure. If not controlled, remove the soiled dressing and repeat packing.",
          "Increase pressure by wrapping tape tightly around the entire body part (except the neck). Tape pressure should at least replace the pressure you were applying.",
          "Check the distal pulse (below the wound) to confirm circulation continues."
        ]},
      {id:"tourniquet", title:"Tourniquet", tagline:"Emergency use for extreme extremity bleeding",
        items:["Cloth (emptied)","Key ring","Carabiner","Medical Grade Tape","Cotton"],
        warning:"Tourniquets are very painful but life-saving — don't worry about the pain when saving a life. Tissue damage begins within two hours of application. Write down the time applied and seek medical care IMMEDIATELY.",
        steps:[
          "Wrap Medical Grade Tape tightly around the limb close to but above the wound — at least 2 inches from any joint.",
          "Wrap the cloth over the tape and slide the key ring onto one side of the cloth.",
          "Tie the first half of a square knot.",
          "Slide the carabiner over one end of the cloth and finish tying the square knot.",
          "Twist the carabiner until the bleeding stops, then attach it to the key ring to stop it from untwisting."
        ]},
      {id:"puncture-wound", title:"Puncture Wound", tagline:"Small but deep wounds — bullet, knife, or sharp object",
        items:["Puncture Wound Plug","Antibiotic Ointment","Non-adherent pad"],
        warning:"Most puncture wounds are treated like any other wound — this process is only for heavily bleeding wounds. If the wound is in the chest and you hear air going in/out, see Sucking Chest Wound.",
        steps:[
          "Insert the puncture wound plug into the wound until you feel resistance, keeping the string within easy reach for later removal.",
          "Place cloth or gauze over the wound and apply firm pressure until bleeding stops (use a pressure dressing if needed).",
          "Secure the string with tape away from the wound so the plug doesn't slip deeper. Leave the plug in place and dress the wound.",
          "Get to medical personnel ASAP. If not possible, don't re-check the wound for at least 30 minutes — removing the plug will likely restart bleeding.",
          "Apply antibiotic ointment, place a clean non-adherent pad over the wound, and tape the entire pad down."
        ]},
      {id:"sucking-chest-wound", title:"Sucking Chest Wound", tagline:"A chest puncture that lets air collapse the lung",
        items:["Antibiotic ointment","Non-adherent pad","Cloth","Medical Grade Tape"],
        steps:[
          "Heavy arterial bleeding can occur — if bleeding is heavy, apply a pressure dressing over the wound.",
          "If not bleeding heavily, place an antibiotic-covered non-adherent pad over the wound to seal it.",
          "Tape down the edges of the pad, leaving one corner exposed.",
          "Cover the entire pad with tape except the exposed corner."
        ]},
      {id:"impaled-object", title:"Deeply Impaled / Embedded Object", tagline:"Object lodged deeper than the skin",
        items:["Cloth or dressing material","Medical Grade Tape"],
        warning:"Seek emergency medical care to have the object removed as soon as possible.",
        steps:[
          "Seek emergency medical attention if possible.",
          "Do not remove the object unless bleeding cannot be controlled with it in place.",
          "Pad and support the object with rolled up cloth or dressing material and tape it in place."
        ]}
    ]
  },
  {
    id:"cleaning", title:"Wound Cleaning & Dressing", icon:"bandage",
    topics:[
      {id:"cleaning-procedure", title:"Cleaning Procedure", tagline:"For wounds that aren't bleeding heavily",
        items:["Gauze","Irrigation system","Sterile cloth"],
        warning:"Severely/heavily bleeding wounds should be evaluated by trained personnel within two hours. Clean minor wounds as soon as possible. If treated for heavy bleeding, wait at least 30 minutes before cleaning. Tourniquets should be removed by trained personnel ASAP.",
        steps:[
          "Place wet gauze on the wound for 10 minutes.",
          "Gently scrub the wound with gauze soaked in soapy water or a cleansing towelette.",
          "If dirty, irrigate with the Single Use Irrigation System. Use gauze, sterile cloth, or sterilized tweezers to remove dried blood and debris.",
          "Do not scrub wounds that were initially bleeding heavily — cleaning usually causes light bleeding. Apply pressure with sterile moistened gauze if it restarts.",
          "Rinse with clean water."
        ]},
      {id:"full-thickness-cut", title:"Skin Full Thickness Cut", tagline:"Gaping skin, not beyond fatty tissue",
        items:["Skin Tac","Medical Grade Tape","Antibiotic Ointment","Non-adherent Pad"],
        warning:"Seek proper medical attention if possible. If no trained personnel are available, proceed with the steps below.",
        steps:[
          "Apply pressure until bleeding stops, then clean the wound.",
          "Once free of debris, clean and dry the wound. Apply Skin-Tac around the edges, ¼ inch from the wound, extending out 2 inches.",
          "Cut out butterfly dressings from Medical Grade Tape — enough to close the wound.",
          "Apply the first butterfly in the center of the cut, pulling the cut together and puckering the skin slightly. Apply the others moving outward from the center.",
          "Apply a thread of antibiotic ointment along the cut.",
          "Cut a non-adherent pad to entirely cover the wound and butterflies, then cover completely with Medical Grade Tape."
        ]},
      {id:"scrapes", title:"Scrapes / Scratches / Small Cuts", tagline:"Clean and dress quickly to avoid contamination",
        items:["Antibiotic Ointment","Non-adherent Pad","Medical Grade Tape"],
        note:"This does not include gaping wounds and severe road rash.",
        steps:["Clean the wound.","Apply antibiotic ointment.","Cut a small piece of non-adherent pad to barely cover the wound.","Cover the entire pad with Medical Grade Tape."]},
      {id:"fingertip-cut", title:"Fingertip Cut", tagline:"Heals slowly if not treated promptly",
        items:["Soap and water","Medical Grade Tape","Antibiotic Ointment","Non-adherent Pad"],
        steps:[
          "Clean the wound with saline and/or soap and water.",
          "Cut a fingertip dressing from Medical Grade Tape and a small piece of non-adherent pad to barely cover the wound.",
          "Apply antibiotic ointment to the non-adherent side of the pad.",
          "Place the pad over the wound and put the skinny part of the tape on the fingertip — lay the ends down without too much pressure."
        ]},
      {id:"knuckle-cut", title:"Knuckle Cut", tagline:"Heals slowly if not treated promptly",
        items:["Soap and water","Medical Grade Tape","Antibiotic Ointment","Non-adherent Pad"],
        steps:[
          "Clean the wound with saline and/or soap and water.",
          "Tear three strips of tape about finger-width — two about 4 inches long, one about 2 inches.",
          "Cut a small non-adherent pad to barely cover the wound and apply antibiotic ointment to the non-adherent side.",
          "Place the pad over the wound and hold with the short strip. Wrap the 4-inch strips around the finger above and below the joint."
        ]},
      {id:"road-rash", title:"Severe Road Rash", tagline:"Clean and dress quickly to avoid contamination",
        items:["Antibiotic Ointment","Non-adherent Pads"],
        steps:[
          "Remove debris. Clean and dry the wound as much as possible.",
          "Spread antibiotic ointment over enough non-adherent pads to fully cover the wound (burn cream works if you're out of ointment).",
          "Cover the entire area with pads, other dressing material, or cloth, then seal the edges with tape.",
          "Change the dressing at least daily, or whenever drainage comes through."
        ]},
      {id:"burns", title:"Burns", tagline:"Make sure skin is clean and cool before treatment",
        items:["Cloth","Irrigation System","Tweezers","Gauze","Burn Cream","Non-adherent Pad","Medical Grade Tape"],
        warning:"Charred skin can be black and look like debris — be careful not to remove it while cleaning.",
        steps:[
          "Stop the burning. Run the burned area under continuous flowing water for 20 minutes whenever possible.",
          "If continuous flow isn't available, place a moistened cloth over the burn and irrigate as regularly as possible for 20 minutes.",
          "Clean the area as well as possible — irrigate gently and use tweezers or gauze to remove obvious debris.",
          "Apply burn cream (or antibiotic ointment if you're out of cream).",
          "Cover the entire burned area with a non-adherent pad. Secure with one strip across the pad to healthy skin, then tape around the edges to seal.",
          "Don't cover the whole dressing with tape — the wound needs to breathe and dry out."
        ]},
      {id:"deep-cuts", title:"Deep Cuts", tagline:"Extend through the fatty layer into deeper tissue",
        items:["Gauze","Non-adherent Pad","Medical Grade Tape"],
        steps:["Clean the wound.","Pack the wound with moist gauze.","Cut a non-adherent pad to fit the wound.","Cover the entire pad with Medical Grade Tape."]}
    ]
  },
  {
    id:"nonbleeding", title:"Non-Bleeding Skin Injuries", icon:"bug",
    topics:[
      {id:"splinter", title:"Splinter Removal", tagline:"Use the lancet's edge, not the point",
        items:["Alcohol Pad","Splinter Lancet","Medical Grade Tape","Antibiotic Ointment"],
        warning:"Make sure the splinter is fully removed. Use the lancet to open the tract as far as needed to be sure nothing is left under the skin.",
        steps:[
          "Clean the area with an alcohol pad.",
          "If part of the splinter is above the skin, place the lancet's edge under the end of the splinter and pull it out at the same angle it went in. If fully submerged, carefully cut the skin above it, then remove it.",
          "Wash the area with soap and water and apply antibiotic ointment.",
          "A small piece of Medical Grade Tape can be applied over the ointment if desired."
        ]},
      {id:"bug-bite", title:"Bug Bite / Insect Sting", tagline:"Never remove a stinger with tweezers",
        items:["Splinter Lancet","Soap Wipe"],
        warning:"Don't remove the stinger with tweezers — squeezing it can release extra venom into the skin.",
        steps:[
          "Check for a stinger. If present, remove it by scraping the flat edge of a lancet across it so the edge catches and pulls it out.",
          "Wash the area with soap and water. If available, mix baking soda with a couple drops of water into a paste.",
          "Apply the paste to the wound and cover with a small non-adherent pad, taped in place. If you don't have baking soda, don't cover the sting site."
        ]},
      {id:"blisters", title:"Blisters", tagline:"The most important thing is to drain them properly",
        items:["Antiseptic Wipe","Splinter Lancet","Gauze","Moleskin","Antibiotic Ointment","Medical Grade Tape"],
        steps:[
          "Wipe the blister with an antiseptic wipe. Using a lancet, poke a very small hole near its edge.",
          "Drain the blister, gently pushing on the center while holding gauze against it to absorb drainage.",
          "Gently apply antibiotic ointment to the blister.",
          "Apply Medical Grade Tape smoothly over moleskin (or the blister) large enough to cover it entirely.",
          "For foot blisters: cut a moleskin circle at least 1 inch bigger than the blister, cut a blister-sized hole in the center, remove the backing, and place around the blister."
        ]},
      {id:"hot-spot", title:"Hot Spot", tagline:"A pre-blister area of heat and pain from friction",
        items:["Medical Grade Duct Tape"],
        tip:"Treating a hot spot before it turns into a blister can diminish discomfort.",
        steps:["Cut a piece of Medical Grade Tape slightly larger than the hot spot.","Apply it smoothly, without ridges, to the hot spot and surrounding skin."]},
      {id:"tick-bite", title:"Tick Bite", tagline:"Watch for signs of illness for the next few weeks",
        items:["Medical Grade Duct Tape","Tweezers"],
        warning:"Do not use petroleum jelly, nail polish, or a hot match/knife to remove a tick — these can kill the tick and leave its head inside the wound.",
        steps:[
          "Remove the tick as soon as possible. Using tweezers, gently grab it around the body near its head, then pull slowly until it releases. Don't squeeze, squish, or twist.",
          "Wash the area and your hands with soap and water."
        ]},
      {id:"snake-bite", title:"Snake Bite", tagline:"Even non-venomous bites can be deadly",
        warning:"DO NOT: try to suck out venom, cut the wound, apply a tourniquet or lymphatic bandages, give painkillers, apply ice, apply mud/charcoal to \"absorb\" venom, or wash the wound (venom on skin may help ID the snake).",
        tip:"Keep the bite and bitten limb below the level of the heart and as still as possible — this helps slow circulation of the venom.",
        steps:[
          "Get out of the danger area. Stay calm. If safe, take a photo of the snake for ID purposes.",
          "Remove tight items (rings, watches, clothing) from the bitten limb.",
          "Call 911 if you have reception. If not, plot the safest, most expedient path out and start hiking."
        ]},
      {id:"animal-human-bite", title:"Animal / Human Bite", tagline:"High risk of infection or deep-structure injury",
        items:["Medical Grade Duct Tape","Water","Non-Adherent Pad","Antibiotic Ointment"],
        tip:"For less severe bites, or if medical personnel aren't available, treat these as any other wound and clean thoroughly as soon as possible.",
        steps:[
          "Apply pressure to stop bleeding.",
          "Wash and clean the wound.",
          "Apply antibiotic ointment. If the bite is deep, treat like a full-thickness cut.",
          "Cover with a non-adherent pad and seal the edges with tape. Get deep bites to trained personnel as quickly as possible."
        ]}
    ]
  },
  {
    id:"bonejoint", title:"Bone & Joint Principles", icon:"bone",
    topics:[
      {id:"basic-principles", title:"Basic Principles", tagline:"How to splint any bone or joint injury",
        tip:"Splints should be comfortable and reduce pain during transport. If a splint causes more discomfort, remove and reapply it in a better position.",
        steps:[
          "If the injury is a bone, immobilize the bone and the joints above and below it. If it's a joint, immobilize the joint and the bones above and below it.",
          "If the bone or joint is deformed, splint it in its current position and seek medical care quickly — don't try to realign it.",
          "Apply tape firmly, but not tight enough to limit blood flow below the splint.",
          "After splinting, re-check sensation and blood flow below the injury. If reduced, remove and reapply."
        ]},
      {id:"rice", title:"R.I.C.E. Protocol", tagline:"Decrease swelling and inflammation",
        steps:["Rest the bone or joint — use it as little as possible.","Ice or cool the injury.","Apply light compression to decrease swelling (which can slow healing if too tight).","Elevate the injured area above the heart whenever resting."]},
      {id:"stretcher", title:"Stretcher", tagline:"Build one with a full roll of tape and clothing",
        items:["2 long sticks (6+ ft)","Medical Grade Tape","Cloth or clothing"],
        steps:[
          "Lay two long sticks (at least 6 feet) side by side.",
          "Wrap tape between the supports across the top, middle, and bottom, sticking the tape to itself between the supports.",
          "Use tape to form two X's — one between top and middle, one between middle and bottom.",
          "If you don't have enough tape, add cloth like shirts to strengthen and pad the stretcher.",
          "Use 2 people to load the victim: roll them onto their side keeping the spine and neck straight, slide the stretcher underneath, then roll them back onto it."
        ]}
    ]
  },
  {
    id:"head", title:"Head/Torso Injuries", icon:"head",
    topics:[
      {id:"eye-injury", title:"Eye Injury", tagline:"Keep the eyeball moist",
        items:["Gauze","Medical Grade Tape","Small cup, eyeglasses, or similar object"],
        warning:"Do not cover both eyes unless both are injured. Do not apply any pressure or manipulate the injured eye.",
        steps:[
          "Help the person into a comfortable position that gives you access to the injured eye.",
          "Without touching the injury, examine the eye for deformities, contusions, abrasions, penetrating objects, bruising, lacerations, or swelling.",
          "Place moist, barely damp gauze over the eye, avoiding any pressure on the eyeball whether it's in or out of the socket.",
          "Place a small paper cup or similar object over the eye.",
          "Secure it in place with tape.",
          "Seek medical care as quickly as possible."
        ]},
      {id:"eye-around", title:"Injury Around the Eyeball", tagline:"Priority is protecting the eyeball itself",
        items:["Antibiotic Ointment"],
        warning:"Don't place pressure directly on the eye — find an angle to stop bleeding that puts no pressure on the eyeball.",
        steps:["Stop the bleeding, avoiding direct pressure on the eyeball.","Clean around the area.","Apply antibiotic ointment carefully, avoiding the eye itself.","Seek medical care if the cut gapes open — stitches are the best way to close these cuts."]},
      {id:"nose-bleeds", title:"Nose Bleeds", tagline:"For non-injury-related nosebleeds only",
        steps:[
          "Use direct pressure — squeeze the nose with index finger and thumb, pushing in and up on the nasal bones on both sides.",
          "While holding the nose, tip the head slightly forward and down with the other hand. Hold this for 7 minutes before checking for ongoing bleeding.",
          "If bleeding has stopped, make sure the person doesn't blow their nose for at least an hour.",
          "If bleeding can't be controlled this way, seek a medical professional and/or move to Severe Nose Bleeds."
        ]},
      {id:"severe-nose-bleeds", title:"Severe Nose Bleeds", tagline:"Packing the nose when heavy bleeding continues",
        items:["Puncture Plug","Antibiotic Ointment"],
        warning:"Inserting the puncture plug will be painful — you and the person bleeding should be ready.",
        steps:["Cover the puncture wound plug with antibiotic ointment.","Insert the tip of the plug into the nose until you feel resistance.","Lift the back end of the plug until it's level with the ground.","Gently push it all the way into the nose."]},
      {id:"head-injury", title:"Head Injury", tagline:"Head wounds bleed more than other body parts",
        items:["Gauze","Clean cloth","Ice or cool water"],
        warning:"If any point of the skull feels soft, avoid direct pressure on that point. Watch for new or worsening symptoms — a mild injury can become more serious.",
        steps:[
          "Control bleeding — treat like other wounds (do not apply pressure if a skull fracture is suspected).",
          "Have the person rest. A responsible adult should stay with them for at least 24 hours.",
          "Call Emergency Medical Services for severe head injuries."
        ]},
      {id:"jaw-injury", title:"Jaw Injury", tagline:"The jaw will be locked in position — don't force it",
        items:["Cloth (empty) or clothing","Bottle / water-tight container"],
        warning:"Do not try to move or realign a dislocated or broken jaw — only a medical professional should attempt this.",
        steps:[
          "Leave the jaw in its current position. If it helps comfort, gently wrap a bandage, cloth, or handkerchief around the jaw and head to hold it in place.",
          "Apply a cold compress wrapped in cloth to reduce pain and swelling.",
          "Place any knocked-out tooth in cold milk, salt water, or saliva and bring it to the ER. Avoid touching the root.",
          "Seek emergency medical attention as soon as possible."
        ]},
      {id:"tooth", title:"Tooth", tagline:"Broken teeth are not considered an emergency",
        items:["Gauze"],
        warning:"Do not replace baby teeth — this can damage the adult teeth underneath.",
        steps:["Clean the tooth by rinsing it or licking it off.","Holding it by the bottom/cutting portion, orient and push the root back into the hole.","Have the person bite down lightly on gauze for at least 30 minutes.","If you can't replace it, store the tooth in a small glass of milk until you see a dentist."]}
    ]
  },
  {
    id:"upper", title:"Upper Extremity Injuries", icon:"arm",
    topics:[
      {id:"upper-arm", title:"Upper Arm / Shoulder", tagline:"Should be placed in a sling",
        warning:"If the arm is locked out of place, splint it where it is — don't force it.",
        steps:["Seek emergency medical attention if possible.","If you injure your elbow or forearm above the wrist, put the arm in a Sling and Swath.","If the elbow is at an awkward angle or won't bend to 90°, splint it in place — never force an injured limb into position."]},
      {id:"elbow-forearm", title:"Elbow / Forearm", tagline:"Sling and splint as needed",
        steps:["Seek emergency medical attention if possible.","Put the arm in a Sling and Swath.","If the elbow is at an awkward angle or won't bend to 90°, splint it in place. Never force an injured limb into position."]},
      {id:"wrist-hand", title:"Wrist / Hand", tagline:"Preventing movement is the #1 priority",
        items:["Large Wound Dressing Pad","Tube Dressing","Medical Grade Tape","Splint (stick, spatula, ruler, or similar)"],
        steps:[
          "Insert the hand through a tube dressing to the base of the fingers. If the thumb is injured, leave it inside; otherwise cut a small hole for the thumb.",
          "Pad a long, straight object with the Large Wound Dressing Pad. Place it on the back of the hand, extending just past the knuckles and at least halfway up the forearm.",
          "Secure with 2 full strips of tape (near the elbow, and just above the wrist/injury). Then wrap tape in a figure-eight around the hand and distal wrist — firm but not too tight."
        ]},
      {id:"finger", title:"Finger", tagline:"Preventing movement is the #1 priority",
        items:["Large Wound Dressing Pad","Tube Dressing","Medical Grade Tape"],
        warning:"Straightening the finger can cause additional damage, but is safer than leaving it deformed for more than 24 hours.",
        tip:"Most finger injuries are best treated by taping the finger to an adjacent finger with two or three narrow strips of tape, or taping a splint to the palm side.",
        steps:["If the finger is no longer straight, buddy-tape or splint it in place for comfort.","Seek medical care.","If you cannot get medical care within 24 hours, straighten the finger by pulling firmly straight out from the wrist."]},
      {id:"sling", title:"Sling", tagline:"Stabilize most upper extremity injuries for transport",
        items:["Cloth (empty)","Safety pins","Medical Grade Tape"],
        steps:[
          "Take a cloth and cut along the marked line.",
          "Tie the two cut ends together in a square knot close to the end and place the loop over the person's head.",
          "Place the injured arm bent 90° at the elbow over the cloth hanging in front of the body. Wrap the uncut end over the forearm and pin the loop in place to form the sling.",
          "Adjust the sling's length for comfort and support. If needed, tape around the body (not tight) to secure the arm against the torso."
        ]}
    ]
  },
  {
    id:"lower", title:"Lower Extremity Injuries", icon:"leg",
    topics:[
      {id:"hip-pelvis", title:"Hip / Pelvis / Upper Leg", tagline:"Preventing movement is the #1 priority",
        items:["Medical Grade Tape","Two long sticks"],
        note:"Trying to walk on a broken leg can worsen the injury. Have the injured person hop on the non-injured leg assisted by two people, or build a stretcher if your group is strong enough.",
        steps:[
          "Upper leg fractures are very painful and worsen with any motion, and can cause life-threatening internal bleeding — transport to a hospital by trained personnel if possible.",
          "If not possible, place a splint from the top of the hip bone to below the knee, in contact with the hip, thigh, and knee (pad as needed). Tape to the torso at the hip, to the calf below the knee, and to the thigh, avoiding the injury. Seek treatment ASAP."
        ]},
      {id:"knee", title:"Knee", tagline:"Preventing movement is the #1 priority",
        items:["Sticks or splints","Medical Grade Tape"],
        steps:[
          "Seek emergency medical attention if possible.",
          "Severe knee injuries need splinting from near the hip to near the ankle — lay two straight splints, one on each side of the leg, the inside one from a few inches below the groin to just above the ankle.",
          "Pad the splints if needed, then tape around the top of the thigh and both splints, and around the ankle near the bottom.",
          "Tape without tension a few inches above and below the knee, but never over the injury itself."
        ]},
      {id:"calf-lower-leg", title:"Calf & Lower Leg", tagline:"Injury from just below the knee to just above the ankle",
        items:["Tube Dressing","Medical Grade Tape"],
        note:"For injuries near the ankle, use the ankle technique. For injuries near the knee, use the knee technique. For injuries in the middle of the lower leg, use the steps below.",
        steps:[
          "Slide the tube dressing over the ankle and secure the top and bottom with tape.",
          "Find two objects extending from above the knee to the bottom of the foot. Place one on each side of the foot and pad as needed.",
          "Apply an additional strip of tape to the lower leg, above or below the injury.",
          "Secure the lower ends of the splints with tape in a figure-eight pattern around the ankle — two full figures, firm but with no tension."
        ]},
      {id:"ankle", title:"Ankle", tagline:"Splinting the lower leg is often the safest, quickest method",
        items:["Cotton stockinette or sock","Medical Grade Tape"],
        warning:"Do not tape the bottom of the tube dressing too tight around the foot, or walking will be painful. Severe sprains and fractures are best treated in a medical boot — this taping stabilizes a sprain until you reach care.",
        steps:[
          "Slide a tube dressing or calf-high sock over the ankle and secure top and bottom with tape.",
          "Place a 2-foot piece of tape on the ground adhesive-up, center the heel on it, then pull the ends up the sides of the leg under light tension.",
          "Use ~20-inch strips in an internal and external Heel Lock pattern — hook the inside then outside of the heel, crossing the arch and Achilles.",
          "Use ~20-inch strips in an internal and external Figure-6 pattern — down the side of the leg, under the arch, over the front of the ankle.",
          "Cover any visible tube dressing with tape in a Horseshoe pattern, without tension, from the heel/Achilles forward.",
          "Repeat the last three steps to create a second layer."
        ]},
      {id:"foot", title:"Foot", tagline:"Preventing movement is the #1 priority",
        items:["Tube Dressing","Medical Grade Tape"],
        steps:[
          "Use the person's own sock or place a tube dressing over the foot and ankle.",
          "Replace the shoe and tape a flat, hard, straight object to the bottom of the shoe (or to the bottom of the foot if the shoe can't go back on).",
          "Apply tape around the foot and ankle in a no-tension figure-eight pattern, twice.",
          "If the injury is high on the foot, also splint the lower leg over the top of the shoe."
        ]},
      {id:"toe", title:"Toe", tagline:"Preventing movement is the #1 priority",
        items:["Medical Grade Tape"],
        steps:[
          "Seek medical care as soon as possible.",
          "Option 1: buddy-tape the toe to an adjacent toe with two narrow strips (unless the big toe is involved).",
          "Option 2: tape a straight flat object to the bottom of the shoe and put the shoe back on to prevent it from bending near the toes."
        ]}
    ]
  },
  {
    id:"other", title:"Other Medical Emergencies", icon:"cross",
    topics:[
      {id:"frostbite", title:"Frostbite", tagline:"Call for emergency help if you suspect hypothermia too",
        warning:"Don't apply direct heat (heating pad, heat lamp, blow-dryer, car heater). Don't rub frostbitten skin. If possible, don't walk on frostbitten feet or toes.",
        steps:[
          "Protect the area from further damage — don't rewarm skin that might refreeze.",
          "Get out of the cold, remove wet clothes, and wrap up in a warm blanket.",
          "If possible, soak frostbitten skin in warm water for about 30 minutes (or cover the nose/ears with warm wet cloths, or warm with body heat like tucking fingers under an armpit).",
          "Drink a warm, nonalcoholic beverage.",
          "Take a nonprescription pain reliever if needed."
        ]},
      {id:"hypothermia", title:"Hypothermia", tagline:"Be gentle — don't massage or rub the person",
        items:["Blankets","Warm drinks"],
        warning:"Don't apply direct heat, hot water, a heating pad, or a heating lamp to warm the person.",
        steps:[
          "Move the person out of the cold to a warm, dry location, kept flat if possible.",
          "Remove wet clothing (cut away if needed to avoid excess movement).",
          "Layer dry blankets or coats over the person, covering the head but leaving the face exposed.",
          "If breathing has stopped or is dangerously shallow, begin CPR right away if you're trained.",
          "If alert and able to swallow, give a warm, sweet, nonalcoholic, non-caffeinated drink.",
          "Use warm, dry compresses (warm water in a bottle or a warmed towel) on the neck, chest wall, or groin only — never the arms or legs."
        ]},
      {id:"heart-attack", title:"Heart Attack / Chest Pain", tagline:"Treat any chest pain as a possible heart attack",
        items:["Aspirin"],
        note:"Common signs: chest pressure/pain/discomfort, feeling dizzy, rapid or irregular heartbeat, shortness of breath.",
        steps:["Call emergency services.","If conscious, keep the person calm and give them aspirin.","If unconscious, check vital signs and provide chest compressions if necessary."]},
      {id:"stroke", title:"Stroke", tagline:"Get to an ER as soon as possible for evaluation",
        note:"Common signs: face drooping, arm weakness, speech difficulty or confusion.",
        steps:["If you suspect a stroke, call emergency services immediately."]},
      {id:"diarrhea", title:"Diarrhea", tagline:"Severe diarrhea can cause rapid dehydration",
        items:["Anti-diarrheal"],
        warning:"Severe diarrhea can be a life-threatening emergency.",
        steps:["Give at least one tablespoon of water every 15 minutes, even if vomiting, to minimize dehydration.","If having more than 3 bowel movements an hour, give anti-diarrheal medication.","Try eating light meals of solid foods as tolerated."]},
      {id:"hypoglycemia", title:"Hypoglycemia", tagline:"Low blood sugar",
        steps:["Eat or drink 15–20 grams of fast-acting carbohydrates (sugary foods/drinks without protein or fat).","Recheck blood sugar 15 minutes later — if still under 70 mg/dL (3.9 mmol/L), repeat and recheck again in 15 minutes.","Once back to normal, eat a healthy snack or meal to prevent another drop.","If things don't improve, seek medical help."]},
      {id:"heat-stroke", title:"Heat Stroke / Exhaustion", tagline:"Watch for light-headedness, confusion, or decreased sweating",
        steps:["Find a cool place — air-conditioned if possible, or shade. Loosen/remove unnecessary clothing and rest on your back with legs elevated.","Drink cool fluids — water or sports drinks. No alcohol, which adds to dehydration.","Try cooling measures — soak in cool water or apply cool compresses to bring temperature down."]}
    ]
  }
];

const KIT = [
  {id:"unique-components", title:"Unique Components", items:[
    {n:"Medical Grade Duct Tape", d:"10 yards, 3 inches wide. Most dressings finish with a strip torn from the roll. The tape's printed pattern guides you in cutting butterfly bandages, fingertip bandages, and dressing coverings, and it's used for splinting and bracing."},
    {n:"Cloth", d:"Organizes your other supplies, and can also function as a tourniquet, sling, or extra wound dressing material."},
    {n:"Cinch Sack", d:"A convenient, lightweight carrying pouch for the entire kit."},
    {n:"First Aid Field Guide", d:"This guide — designed to help you handle most emergencies."}
  ]},
  {id:"tools", title:"Tools", items:[
    {n:"Exam Gloves (2)", d:"Protect you while helping others — put them on before administering any first aid."},
    {n:"Scissors (1)", d:"Cut away clothing, cut dressings from the tape, or cut cloth for a sling."},
    {n:"Small Wooden Spatulas", d:"Apply ointment or burn cream, hold a wound edge aside, or use as a small splint."},
    {n:"Lancets", d:"Remove a splinter or stinger, or pop a blister."},
    {n:"Tweezers (1)", d:"Remove splinters and debris from wounds, or gently remove ticks."},
    {n:"Safety Pins (2)", d:"Used when turning the cloth into a sling."},
    {n:"Antibacterial Wipes", d:"Clean hands before and after each emergency."},
    {n:"Disposable Bags (2)", d:"Cleanup after treating injuries."},
    {n:"Wound Irrigation Bags (2)", d:"Clean and wash out dirty wounds before dressing."},
    {n:"Stuff Sack (1)", d:"Holds the tape, cloth, and cleaning supplies."},
    {n:"Carabiner (1)", d:"Attach the kit to your gear, and used when applying a tourniquet."},
    {n:"Large Key Ring (1)", d:"Secures the carabiner in place when applying a tourniquet."}
  ]},
  {id:"medicines", title:"Medicines", items:[
    {n:"Ibuprofen*", d:"Pain control or reducing fever. Use per package directions."},
    {n:"Acetaminophen*", d:"Pain control or reducing fever. Use per package directions."},
    {n:"Diphen (Diphenhydramine)*", d:"For allergic reactions. Use per package directions."},
    {n:"Aspirin", d:"For a heart attack, and as an additional pain reliever."},
    {n:"Antidiarrheal (Diotame)*", d:"Bismuth subsalicylate, similar to Pepto-Bismol. Use per package directions."},
    {n:"Antibiotic Ointment", d:"Treats cuts, scrapes, and burns to avoid infection."},
    {n:"Burn Cream", d:"Treats cuts, scrapes, and burns — avoids infection and gives short-term pain relief."},
    {n:"A Pocket and Small Bag", d:"For your personal medications, if you take any regularly."}
  ]},
  {id:"dressing-supplies", title:"Dressing Supplies", items:[
    {n:"Alcohol Pads", d:"Clean instruments and clean around wounds."},
    {n:"Gauze Pads", d:"Clean wounds, and use as packing material or for applying pressure."},
    {n:"Adhesion Enhancing Wipes (Skin-Tac)", d:"Use on wound edges before taping where skin tension may pull the wound open."},
    {n:"Non-Adherent Pads", d:"Cover a cleaned, treated wound before taping. Three sizes included."},
    {n:"Tube Dressing", d:"Covers an injured joint before splinting or wrapping."},
    {n:"Large Wound Dressing", d:"Covers larger wounds."},
    {n:"Moleskin", d:"For blister treatment."},
    {n:"Puncture Wound Plug", d:"A tightly rolled piece of gauze that enhances pressure in deep wounds to help stop bleeding."},
    {n:"Antiseptic Wipes", d:"Clean around wounds before dressing."},
    {n:"A Pocket for a Clotting Agent", d:"Clotting agents can cause complications and require urgent follow-up, so none is included — but a pocket is provided if you'd like to add your own. Pick one, learn to use it, and add it to your kit."}
  ]}
];

const SHOP = [
  {tag:"Medical-Grade Duct Tape", title:"The World's First Medical-Grade Duct Tape", desc:"Skin-safe, waterproof, and flexible — sticks to skin, bandages wounds, or repairs gear. Tear to any length, no scissors needed.", url:"https://duct-aid.com/collections/duct-aid-tape-only", cta:"Shop Tape", icon:"tape"},
  {tag:"Complete System", title:"The Ultimate First-Aid Kit", desc:"The full Duct-Aid kit built around versatility — treat a wide range of injuries with one compact, organized roll instead of a messy bag of single-purpose items.", url:"https://duct-aid.com/products/duct-aid-first-aid-kit", cta:"Shop the Kit", icon:"medkit"},
  {tag:"Restock", title:"Medicine & Supply Refill Kit", desc:"Restock the orange pockets in your Duct-Aid cloth — gloves, ointments, medicines, wipes, and more, sized to fit your kit.", url:"https://duct-aid.com/products/medicine-refill-kit", cta:"Shop Refills", icon:"cross"}
];
