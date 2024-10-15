let btn = document.getElementById('btn');
btn.addEventListener('click',jokeGenerate());


function jokeGenerate(){
    
    let cpu = Math.floor(Math.random() * 135);
    
    let jokes=[`Did you hear about the first restaurant to open on the moon?<br/>
        It had great food, but no atmosphere.`,`Why don't scientists trust atoms?<br/>
        Because they make up everything!`,`What do dentists call their x-rays?<br/>
        Tooth pics!`,`What did one ocean say to the other ocean?<br/>
        Nothing, it just waved.`,`What did the big flower say to the little flower?<br/>
        "Hi, bud!"`,`Did you hear about the fire at the circus?<br/>
        It was in tents!`,`Why do ducks have feathers?<br/>
        To cover their butt quacks!`,`What's the difference between a hippo and a zippo?<br/>
        One is really heavy, and the other's a little lighter.`,`What does a nosey pepper do?<br/>
        It gets jalapeño business.`,`Why should you never trust stairs?<br/>
        They're always up to something.`,`When does a joke become a "dad" joke?<br/>
        When it becomes apparent.`,`Why did the bullet end up losing his job?<br/>
        He got fired.`,`What kind of shorts do clouds wear?<br/>
        Thunderpants.`,`I entered ten puns in a contest to see which would win.
        No pun in ten did.`,`How do you measure a snake?<br/>
        In inches—they don’t have feet.`,`Where does a waitress with only one leg work?<br/>
        IHOP.`,`What does a house wear?<br/>
        Address!`,`Why are toilets always so good at poker?<br/>
        They always get a flush.`,`Why is Peter Pan always flying?<br/>
        Because he Neverlands. (I love this joke because it never grows old.)`,`You heard the rumor going around about butter?<br/>
        Never mind, I shouldn't spread it.`,`Two windmills are standing on a wind farm. One asks, "What's your favorite kind of music?<br/>" The other replies, "I'm a big metal fan."`,`How does NASA organize a party?<br/>
        They planet.`,`The first rule of the Alzheimer's club is…
        Wait, where are we again?<br/>`,`I took the shell off of my racing snail, thinking it would make him faster. But if anything, it made him more sluggish.`,`What do you get from a pampered cow?<br/>
        Spoiled milk.`,`What's the best thing about Switzerland?<br/>
        I don't know, but the flag is a big plus.`,`Why did the bicycle fall over?<br/>
        Because it was two-tired!`,`How many tickles does it take to get an octopus to laugh?<br/>
        Ten tickles.`,`Why doesn't Dracula have any friends?<br/>
        Well, honestly, he's a real pain in the neck.`,`My teachers told me I'd never amount to much since I procrastinate a lot.
        I told them, "Just you wait!"`,`Why were they called the "dark ages?<br/>"
        Because there were a lot of knights.`,`What gets wetter the more it dries?<br/>
        A towel.`,`Why aren't koalas considered bears?<br/>
        They don't have the right koala-fications.`,`You: What cartoon mouse walks on two feet?<br/>
        Them: Mickey Mouse<br/>
        You: What duck walks on two feet?<br/>
        Them: Donald Duck<br/>
        You: No, all ducks do!<br/>`,`Want to hear a joke about a roof?<br/>
        The first one's on the house.`,`What's a pirate's favorite letter?<br/>
        You probably think it's "R" but it be the “C."`,`How come teddy bears never want to eat anything?<br/>
        Because they're always stuffed.`,`Did you hear about the cheese factory that exploded in France?<br/>
        There was nothing left but de Brie.`,`Where should you go in the room if you're feeling cold?<br/>
        The corner—they're usually 90 degrees.`,`I can never take my dog to the park because the ducks keep trying to bite him.
        I guess that's what I get for buying a pure bread dog.`,`What's the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle?<br/>
        Attire.`,`What did the Buddhist ask the hot dog vendor?<br/>
        "Make me one with everything."`,`You know why you never see elephants hiding up in trees?<br/>
        Because they're really good at it.`,`How did the hipster burn his mouth?<br/>
        He ate his pizza before it was cool.`,`A horse walks into a bar.
        The bartender says, "Why the long face?<br/>"`,`What do you get when you cross a dyslexic, an insomniac and an agnostic?<br/>
        Someone who lays awake at night wondering if there's a dog.`,`As a scarecrow, people say I'm outstanding in my field.
        But hay, it's in my jeans.`,`Why don't blind people skydive?<br/>
        Because it scares their dogs.`,`What's the difference between an oral thermometer and a rectal thermometer?<br/>
        The taste, mostly.`,`I stayed up all night and tried to figure out where the Sun was.
        Then, it dawned on me.`,`I told my friend ten jokes to make him laugh.
        Sadly, no pun in ten did.`,`I couldn't believe the highway department called my dad a thief.
        But when I got home, the signs were all there.`,`Why did the cowboy get a wiener dog?<br/>
        He wanted to get a long little doggie.`,`Can a kangaroo jump higher than the Empire State Building?<br/>
        Of course! The Empire State Building can't jump.`,`What did the duck say when it bought some lipstick?<br/>
        "Put it on my bill."`,`George Clooney, Leonardo DiCaprio and Matthew McConaughey get together to make a movie.<br/> Clooney says, "I'll direct."<br/> DiCaprio says, "I'll act."<br/> McConaughey says, "I'll write,<br/> I'll write, I'll write."<br/>`,`A horse walks into a bar.<br/>
        The bartender says, "Hey!"<br/>
        The horse replies, "Sure."`,`I googled "Rorshach test."<br/> But for some reason, all that came up were pictures of my parents fighting.`,`What do we want?<br/>
        Low-flying airplane noises!
        When do we want them?<br/>
        Nnnnneeeeeeeeeeoooooooooow!`,`I tried to win a suntanning competition.
        But all I got was bronze.`,`What do you call fake spaghetti?<br/>
        An impasta!`,`Why don't seagulls fly over the bay?<br/>
        Because then they'd be bagels.`,`What do you call malware on a Kindle?<br/>
        A bookworm.`,`Did you hear about the painter who was hospitalized?<br/>
        The doctors say it was due to too many strokes.`,`What did the tie say to the hat?<br/>You go on ahead. I'll hang around.`,`Why are crabs so bad at sharing?<br/>
        Because they're all shellfish.`,`How do you make a tissue dance?<br/>
        Put a little boogie in it.`,`What do you call a cow with a twitch?<br/>
        Beef jerky.`,`I started a new job as a tailor last week.
        It's been sew-sew.`,`What concert only costs 45 cents?<br/>
        50 Cent featuring Nickleback.`,`What kind of shoes does a spy wear?<br/>
        Sneakers.`,`I've been trying to make a sarcastic club, but it's been really hard to tell if people are interested in joining or not.`,`And the Lord said unto John, "Come forth, and you will receive eternal life."
        But John came fifth and won a toaster.`,`Why don't some fish play piano?<br/>
        Because you can't tuna fish!`,`My wife accused me the other day of being too immature.
        I told her there were no girls allowed in my fort.`,`Someone stole my mood ring yesterday.
        I still don't know how I feel about that.`,`A Roman legionnaire walks into a bar, holds up two fingers and says, "Five beers, please."`,`I tried to catch fog yesterday.
        Mist.`,`Working in a mirror factory is something I can totally see myself doing.`,`Someone stole my Microsoft Office, and they're gonna pay.
        You have my Word.`,`What do you call a dog with no legs?<br/>
        It doesn't matter, it's not going to come anyway.`,`You know what they say about cliffhangers…`,`Why does a chicken coop only have two doors?<br/>
        Because if it had four doors, it would be a chicken sedan.`,`A sandwich walks into a bar.
        The bartender says, "Sorry, we don't serve food here."`,`Why are frogs always so happy?<br/>They eat whatever bugs them.`,`The sky was looking ominous so I asked Siri, "Surely, it's not going to rain today?<br/>" And she replied, "Yes it is, and don't call me Shirley." That was when I realized I'd left my phone on Airplane mode.`,`Why did the giraffe get such bad grades?<br/>
        He always had his head stuck in the clouds.`,`I got a new job last week as the new top dog at Old MacDonald's farm.
        I'm the new C-I-E-I-O.`,`Whenever you jump on a trampoline, did you know it changes the season?<br/>
        No matter what time of year, it always becomes spring time.`,`Why didn't the skeleton go to the dance?<br/>
        Because he had no body to go with.`,`What do you call a musician with problems?<br/>
        A trebled man.`,`Where do snowmen keep their savings?<br/>
        In the snowbank.`,`What do you call a religious person who sleepwalks?<br/>
        A roamin' Catholic.`,`Did you hear about the carrot detective?<br/>
        He always got to the root of every case.`,`What washes up on very small beaches?<br/>
        Micro-waves.`,`What did one elevator say to the other?<br/>
        I think I'm coming down with something.`,`What happened when a faucet, a tomato and some lettuce ran a race together?<br/>
        The lettuce was ahead, the faucet was running and the tomato was trying to ketchup.`,`What do you call a belt with a watch on it?<br/>
        A waist of time.`,`Why did the tomato turn red?<br/>
        It saw the salad dressing.`,`What did the grape do when it got stepped on?<br/>
        It let out a little wine.`,`Why won't skeletons fight each other?<br/>
        They just don't have the guts.`,`What do you call cheese that isn't yours?<br/>
        Nacho cheese!`,`What do you call a cow with no legs?<br/>
        Ground beef.`,`What do you call a bear with no teeth?<br/>
        A gummy bear.`,`What do you call a lazy kangaroo?<br/>
        A pouch potato.`,`What do you call an alligator in a vest?<br/>
        An in-vest-igator.`,`How did the cucumber become a pickle?<br/>
        It went through a jarring experience.`,`What's brown and really sticky?<br/>
        A stick.`,`What do you call a sleeping bull?<br/>
        A bulldozer.`,`Do you want to hear a construction joke?<br/>
        Sorry, I'm still working on it.`,`What's green and can sing?<br/>
        Elvis Parsley.`,`Why was the belt arrested?<br/>
        It was caught holding up a pair of pants.`,`What the the thesaurus eat for breakfast?<br/>
        A synonym roll.`,`Why did the frog take the bus to work?<br/>
        His car got toad.`,`What do you call a pig that knows karate?<br/>
        A pork chop.`,`What do you call a horse that lives next door?<br/>
        A neigh-bor.`,`Why do fish live in salt water?<br/>
        Because pepper makes them sneeze.`,`What did the Dalmatian say after lunch?<br/>
        That hit the spot!`,`What did the left eye say to the right eye?<br/>
        Between us, something smells!`,`Why can't you hear a pterodactyl when they go to the bathroom?<br/>
        Because their "P" is silent!`,`What do you call a dinosaur with an extensive vocabulary?<br/>
        A thesaurus.`,`What do you get when you cross a bear and a skunk?<br/>
        Winnie the Pew.`,`What do you call a snowman in the summer?<br/>
        A puddle.`,`Why did the banana go to the hospital?<br/>
        It wasn't peeling well.`,`Why do cows like to stay up late?<br/> 
        They like to read the moos-paper.`,`Why do bees have sticky hair?<br/>
        Because they use honeycombs.`,`Why was Cinderella so bad at soccer?<br/> 
        She kept running away from the ball.`,`What do you call two birds that are in love?<br/>
        Tweethearts.`,`What do you call a dog magician?<br/>
        A labracadabrador.`,`What do you call a fish with no eyes?<br/>
        Fsh.`,`How do scientists freshen their breath?<br/>
        With experi-mints.`,`What do you get when you cross a snowman and a vampire?<br/>
        Frostbite.`,`Why did the math book look so sad?<br/>
        It had a lot of problems.`,`Why did the golfer bring two pairs of pants?<br/> 
        In case he got a hole in one.`,`What did the janitor say when he jumped out of the closet?<br/>
        Supplies!`];
        joke_val = document.getElementById('joke');
        joke_val.innerHTML = jokes[cpu];

        // for(item in jokes){
        //     joke_val.innerHTML += jokes[item] + '<br/>';
        // }
    


}





