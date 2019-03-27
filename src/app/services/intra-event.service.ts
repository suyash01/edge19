import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class IntraEventService {
  events = [
    {
      id: "ca",
      icon: "compute-aid.svg",
      name: "Compute@id",
      subEvents: [
        {
          id: "flawless",
          name: "Flawless",
          icon: "events/compute-aid/flawless.svg",
          class: "deg0",
          desc: `<h1>Flawless</h1>
                <p>If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then this is the perfect event for you. Code your heart out and race with the others to win the battle of wits and will. Be Flawless!</p>
                <h3>Rules</h3>
                <ul>
                  <li>Each team can have either 2 or 3 members.</li>
                  <li>This event will consist a single round of coding.</li>
                </ul>
                <h3>Round 1</h3>
                <p>It will be an elimination round where the participants will have to solve 5 questions in a duration of 2 hours. The teams will be judged based on the number of problems they will solve and the time taken to solve the problems. The teams with the best performances will be chosen as the winners.</p>
                <h3>Contact</h3>
                <p>Raja Sachin - 9062647976</p>`
        },
        {
          id: "bughunt",
          name: "Bug Hunt",
          icon: "events/compute-aid/bug-hunt.svg",
          class: "deg30",
          desc: `<h1>Bug Hunt</h1>
                <p>Do you often find faults in others' codes? Or are you always on the hunt for errors whenever you see a code? Well, then this event might just be for you. Find out the trickiest of bugs in the simplest codes and correct them in the shortest and smartest way possible. Beat the others to the finish and claim the prize.</p>
                <h3>Rules</h3>
                <ul>
                  <li>It is a solo participation event.</li>
                  <li>The coordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Round 1</h3>
                <p>It is an MCQ round on languages C, C++ or JAVA. This round will test the fundamental skill of participants in the language they choose. Team qualifies on basis of performance.</p>
                <h3>Round 2</h3>
                <p>It is going to be a Debugging Round. Again C, C++ and Java will be the languages of choice for the teams (Teams are allowed to choose a different language for this round). All the teams will be provided with some buggy code snippets and they will have to correct these code snippets in the minimum number of steps possible. Teams will be marked based on the number of steps they take to correct a code snippet and also the time taken to correct it.</p>
                <h3>Contact</h3>
                <p>Shreya Agrawal - 9836566212</p>`
        },
        {
          id: "crypto",
          name: "Cryptoquest",
          icon: "events/compute-aid/cryptoquest.svg",
          class: "deg330",
          desc: `<h1>CryptoQuest</h1>
                <p>Can you solve the cipher above and make a meaningful sentence out of it? Well if you can then you are made for this event. In this event you need to be calm and gather all your wits to make meaning of most of the questions. Get ready for a cryptic experience!!!</p>
                <h3>Rules</h3>
                <ul>
                  <li>It is a solo participation event.</li>
                  <li>Various questions involving ciphers and steganography will be provided to you. You will simply have to give us the flags, which will be hidden within the questions.</li>
                  <li>Knowledge of computer programming won’t be required to solve the problems, although it may help to solve some problems faster.</li>
                  <li>The event will be conducted on a Linux Distro like Ubuntu. Basic knowledge of such an environment, can prove helpful during the event</li>
                  <li>Teams won’t be allowed to use any external electronic devices.</li>
                  <li>Internet access may be provided to the participants if the co-ordinators decide that any question will require it. In case it is not provided, we will provide you with almost all the knowledge, you will require to crack the questions.</li>
                  <li>In the event of a tie, the team to solve the most difficult questions first will be considered the winner.</li>
                  <li>The co-ordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Contacts</h3>
                <p>Abhishek Das - 7033534472</p>
                <p>Avnish Singh - 9162023260</p>`
        },
        {
          id: "codeout",
          name: "CodeOut",
          icon: "events/compute-aid/code-out.svg",
          class: "deg165",
          desc: `<h1>CodeOut</h1>
                <p>Won’t be able to come to the onsite events? Or maybe coding is your passion and you always want more problems to solve? If yes, then this online event is for you. Gear up and get ready for a bout of coding on your favourite coding platform CodeChef and stand a chance to win exciting cash prizes from the comfort of your home. Are you up for the challenge?</p>
                <h3>Rules</h3>
                <ul>
                  <li>This is an individual event.</li>
                  <li>Code Out is a coding contest which will be held on the CodeChef platform. This is going to be an individual contest for the duration of 3 hours in which you need to solve a given number of programming problems.</li>
                  <li>For this event you need to have a CodeChef handle (an account) using which you can submit your solutions. Also please go through the CodeChef Code of Conduct before participating in the event and abide by all the rules of the platform.</li>
                  <li>Link will be available on a later date.</li>
                </ul>
                <h3>Contact</h3>
                <p>Raja Sachin - 9062647976</p>
                <p>Avnish Singh - 9162023260</p>`
        },
        {
          id: "webdev",
          name: "Web Dev",
          icon: "events/compute-aid/web-dev.svg",
          class: "deg195",
          desc: `<h1>Web Dev</h1>
                <p>Tired of seeing same old inflexible websites. Try working on User Experience and Responsive Web Design.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Each team can have either single or 2 members.</li>
                  <li>This event will consist of two rounds</li>
                  <li>Round 1 will be of 1.5 hrs and a 2 Hrs of Final Round</li>
                  <li>The Judge's call will be final</li>
                  <li>In final Round bettor design will get more credits</li>
                </ul>
                <h3>Round 1</h3>
                <p>Basic MCQs on Frontend Technologies. A webpage will be given, tweak here and there to obtain a responsive web page</p>
                <h3>Round 2</h3>
                <p>Build a website out of the given WireFrame.</p>
                <h3>Contact</h3>
                <p>Abhishek Das - 7033534472</p>
                <p>Avnish Singh - 9162023260</p>`
        }
      ]
    },
    {
      id: "robotics",
      icon: "robotics.svg",
      name: "Robotics",
      subEvents: [
        {
          id: "roborace",
          name: "Robo Race",
          icon: "events/robotics/roborace.svg",
          class: "deg0",
          desc: `<h1>Robo Race</h1>
                <p>Design a manually controlled robot capable of pushing blocks along with scoring maximum number of goals against other robots avoiding different obstacles.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A minimum of 3 members and a maximum of 4 members are allowed per team</li>
                  <li>The members must bring IDENTITY CARDS of the college.</li>
                  <li>No person should be a member of two teams.</li>
                  <li>No bot can be shared by two teams.</li>
                  <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
                  <li>Participants themselves will have to arrange for other power supply required for their robot.</li>
                  <li>Teams cannot tinker with their bots during the play-offs</li>
                  <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed.</li>
                  <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
                  <li>No attack on the opponent&#39;s bot is allowed.</li>
                  <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
                  <li>The decision of the coordinators will be final and binding.</li>
                </ul>
                <h3>Specifications</h3>
                <ul>
                  <li>The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%</li>
                  <li>The bot with external mechanism must be fitted in the cubical box of given dimension.</li>
                  <li>The maximum allowable weight of the robot is 2.5 KG without any tolerance.</li>
                  <li>The robot can be powered on-board or off-board.</li>
                  <li>The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.</li>
                  <li>External weights on the bot are not allowed.</li>
                  <li>The robot should not grab/hold the ball at any point of time during the match.</li>
                </ul>
                <h3>Round </h3>
                <p>The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.</p>
                <h3>Round </h3>
                <p>This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.</p>
                <h3>Round </h3>
                <p>Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball.</p>
                <h3>Scoring Rules</h3>
                <p>SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots] -20*[Number of obstacles touched] -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]</p>
                <p>Whoever scores the maximum number of goals, wins the competition</p>
                <h3>Contacts</h3>
                <p>Ashutosh Priyadarshi- 8697276841</p>
                <p>Sujay Basak- 8013821259</p>
                <p>Rajeev Ranjan-8820879972</p>`
        },
        {
          id: "robosoccer",
          name: "Robo Soccer",
          icon: "events/robotics/robosoccer.svg",
          class: "deg180",
          desc: `<h1>Robo Soccer</h1>
                <p>Design a manually controlled robot capable of pushing blocks along with scoring maximum number of goals against other robots avoiding different obstacles.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A minimum of 3 members and a maximum of 4 members are allowed per team</li>
                  <li>The members must bring IDENTITY CARDS of the college.</li>
                  <li>No person should be a member of two teams.</li>
                  <li>No bot can be shared by two teams.</li>
                  <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
                  <li>Participants themselves will have to arrange for other power supply required for their robot.</li>
                  <li>Teams cannot tinker with their bots during the play-offs</li>
                  <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed.</li>
                  <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
                  <li>No attack on the opponent&#39;s bot is allowed.</li>
                  <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
                  <li>The decision of the coordinators will be final and binding.</li>
                </ul>
                <h3>Specifications</h3>
                <ul>
                  <li>The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%</li>
                  <li>The bot with external mechanism must be fitted in the cubical box of given dimension.</li>
                  <li>The maximum allowable weight of the robot is 2.5 KG without any tolerance.</li>
                  <li>The robot can be powered on-board or off-board.</li>
                  <li>The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.</li>
                  <li>External weights on the bot are not allowed.</li>
                  <li>The robot should not grab/hold the ball at any point of time during the match.</li>
                </ul>
                <h3>Round </h3>
                <p>The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.</p>
                <h3>Round </h3>
                <p>This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.</p>
                <h3>Round </h3>
                <p>Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball.</p>
                <h3>Scoring Rules</h3>
                <p>FINAL SCORE: 200*(No. of blocks placed) + 2*(time left in sec)-30*(no. of hand touches)-100*(for 2nd time-out) -300(for restart)</p>
                <p>Whoever scores the maximum number of goals, wins the competition</p>
                <h3>Contacts</h3>
                <p>Ashutosh Priyadarshi- 8697276841</p>
                <p>Sujay Basak- 8013821259</p>
                <p>Rajeev Ranjan-8820879972</p>`
        },
        {
          id: "seguidor",
          name: "Seguidor",
          icon: "events/robotics/wallstreet.svg",
          class: "deg30",
          desc: `<h1>Seguidor</h1>
                <p>To build an autonomous line follower bot based on logic gates and capable of following a white path on black surface and detecting crossroads and white blocks along the side of the track.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be from Techno India, Salt Lake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification. </li>
                  <li>Decision of Coordinators would be final.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand touches in each round.</li>
                  <li>After every hand-touch, the bot will be placed on the line; the first hand touch will be free but further will lead to a penalty. </li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>The decision of the event coordinator(s) will be final and binding.</li>
                  <li>In the first round the bot has to follow the line on its way from start to finish within the time limit.</li>
                  <li>In the final round,the bot has to detect checkpoints placed at specified points along the track length and also may have to detect blocks present along the side of the track.</li>
                  <li>The dimensions of the bot should be within 25cm*25cm*25cm.</li>
                </ul>
                <h3>Round 1</h3>
                <p>In this round there is no checkpoint. You have to complete the track in minimum time.</p>
                <p>Scoring: 1000 - [150 if restart (allowed once)]-50*[No. of hand touch] - 2*[Time in seconds]-100*[No. of timeouts(allowed twice)]</p>
                <h3>Round 2</h3>
                <p>In this round there is checkpoint. You have to complete the track with detecting each checkpoint. And stop at the end of the arena in minimum time.</p>
                <p>Scoring: 1000 - [150 if restart (allowed once)]-100*[No. of timeouts (allowed twice)]-50*[No. of hand touch] + [50 for stop at end] -2*[Time in seconds] +50[checkpoints correctly detected] +50[blocks correctly detected]</p>
                <h3>Contacts</h3>
                <p>Sudhanshu Shivam- 6204975235</p>
                <p>Sourav Ghosh- 7980756784</p>`
        },
        {
          id: "micro",
          name: "Micro Machina",
          icon: "events/robotics/jigsaw.svg",
          class: "deg330",
          desc: `<h1>Micro Machina</h1>
                <p>Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface and detecting crossroads and walls.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be from Techno India, Saltlake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification.</li>
                  <li>Decision of Coordinators would be final.</li>
                  <li>The dimension of the bot should be 25x25x25 cm.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand-touchs &amp; one restart in 1 st round and five hand-touch & two restarts in 2 nd round.</li>
                  <li>After every hand-touch, the bot will be placed on the line, the first hand touch will be free but further will lead to a penalty. For 2 nd round ,after the hand touch bot will be placed on previous check-point.</li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>he decision of the event coordinator(s) will be final and binding.</li>
                  <li>In the first round, the bot has to follow the line and detect the check points present on its way.</li>
                  <li>In the final round,the bot has to follow the line and detect the check points present on its way.The bot has to also stop at the finishing point.</li>
                </ul>
                <h3>Round 1</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round only check points are present (no walls)</p>
                <p>Scoring: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected]</p>
                <h3>Round 2</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round checkpoints and stop are present.</p>
                <p>If any team wants to skip, the bot will be placed on the 2 nd checkpoints.</p>
                <p>In this round bot have to stop at finishing points.</p>
                <p>Scoring: 1000 – 300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected] + 100*[if stop at finishing points]</p>
                <h3>Contact</h3>
                <p>Sudhanshu Shivam- 6204975235</p>
                <p>Sourav Ghosh- 7980756784</p>`
        },
        {
          id: "block",
          name: "Block City",
          icon: "events/robotics/stalker.svg",
          class: "deg150",
          desc: `<h1>Block City</h1>
                <p>Build an autonomous line follower bot based on microcontroller which is capable of following a white path on black surface as well as detecting obstacles placed on either right or left side of the track and detecting crossroads.</p>
                <h3>Rules</h3>
                <ul>
                  <li>The maximum team size is four.</li>
                  <li>The four participants should be only from Techno India, Salt Lake.</li>
                  <li>No person can be in two teams of the same event.</li>
                  <li>Damaging the path will lead to immediate disqualification.</li>
                  <li>Decision of Coordinators would be final.</li>
                  <li>The dimension of the bot should be 25x25x25 cm.</li>
                  <li>The width of line would be 2.5cm. approx.</li>
                  <li>There will be a total of 2 rounds.</li>
                  <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
                  <li>A team can have maximum of five hand-touch &amp; one restart in 1st round, five hand-touch & two restarts in 2 nd round and maximum of two timeouts in each round.</li>
                  <li>After every hand-touch, the bot will be placed on the line, the first hand touch will be free but further will lead to a penalty. For 2nd round, after the hand touch bot will be placed on previous check-point.</li>
                  <li>If a team wants a restart, the bot will be placed at the starting point.</li>
                  <li>The run shall start from a predefined starting point.</li>
                  <li>In the first round, the bot has to follow the line as well as detect obstacles placed on either right or left side of the track.</li>
                  <li>The obstacles will be approx. 15X15cms and present at the distance of 12-15 cm from the line.</li>
                  <li>In the 2 nd round, the bot has to follow the line as well as detect multiple obstacles, has to detect the crossroads (check points) and has to stop at the finishing point and show the number of obstacles.</li>
                </ul>
                <h3>Round 1</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round there will be obstacles present on either the left or the right side.</p>
                <p>Scoring: 1000 - [150 if restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50 [if the bot detect the obstacle properly]</p>
                <h3>Round 2</h3>
                <p>For this round the bots have to complete the arena in minimum time.</p>
                <p>In this round multiple obstacles and checkpoints present.</p>
                <p>All obstacles are present on either the left or right side.</p>
                <p>If any team wants to skip, the bot will be placed on the 2 nd checkpoints.</p>
                <p>In this round bot have to stop at finishing point and show the number of obstacles present through out the track.</p>
                <p>Scoring: 1000 – 300*[No. of skips]-150 [If restart] - 100*[No. of timeouts] - 50*[No. of hand touch] - 2*[Time in seconds] + 50*[checkpoints correctly detected] + 50*[no of obstacles] + 100[if stop at finishing points] +200[if the bot shows the total no. of obstacles correctly]</p>
                <h3>Contact</h3>
                <p>Sudhanshu Shivam- 6204975235</p>
                <p>Sourav Ghosh- 7980756784</p>`
        },
        {
          id: "rumble",
          name: "Rumble",
          icon: "events/robotics/liftnlay.svg",
          class: "deg210",
          desc: `<h1>Rumble</h1>
                <p>Fight with 3 other competitors to snatch the box that you’re supposed to take home.</p>
                <h3>Rules</h3>
                <ul>
                  <li>It will be a match of 4 manual bots.</li>
                  <li>Where each team should carry a bot with maximum dimension of 30x30x30(including the hand for dragging) with 10% tolerance.</li>
                  <li>Each bot will be placed at the corners of the arena. There will be a box at the center of the arena, the team which is able to successfully take the box towards its end (corner) wins the game.</li>
                  <li>You have to take the box to your respective corner. Bots may engage in fight to do so. If a bot is dragged out of the arena that bot will be eliminated. If the box is kicked out of the arena then there will be no winner.</li>
                  <li>The round will be for 3mins. In case time runs out there will be no winner again.</li>
                  <li>The teams can just pay the entry fee and are eligible to play it. They can replay it as many times. But during a match, once the bot falls off the arena at that time the bot is out of that game. The bot can then replay in another game only.</li>
                  <li>Additional weights are allowed but the total weight of the bot should not exceed 5kgs.</li>
                  <li>The coordinators present there should give out the final verdict. No arguments with the coordinators will be tolerated.</li>
                </ul>
                <h3>Contact</h3>
                <p>Ashutosh Priyadarshi- 8697276841</p>
                <p>Sujay Basak- 8013821259</p>
                <p>Rajeev Ranjan-8820879972</p>`
        }
      ]
    },
    {
      id: "cc",
      icon: "cyber-crusade.svg",
      name: "Cyber Crusade",
      subEvents: [
        {
          id: "cs1.6",
          name: "CS 1.6",
          icon: "events/cyber-crusade/csgo-clg.png",
          class: "deg20",
          desc: `<h1>CS 1.6</h1>
                <p>It consists of team based action where two teams battle it out with gun and strategies. Restricted to Techno India college students only. 5v5 standard matchmaking rules as always.</p>
                <h3>MAP</h3>
                <ul>
                  <li>De_dust2</li>
                  <li>De_inferno</li>
                  <li>De_nuke</li>
                  <li>De_train</li>
                  <li>De_mirage</li>
                  <li>De_cbble</li>
                  <li>De_tuscan</li>
                </ul>
                <h3>Rules</h3>
                <ul>
                  <li>Map(s) are to be chosen by a mutual agreement between the 2 teams, else by a proper veto.</li>
                  <li>Side choice (CT/T) for every map is decided by a knife round.</li>
                  <li>Map(s) are to be chosen by a mutual agreement between the 2 teams, else by a proper veto.</li>
                  <li>Side choice (CT/T) for every map is decided by a knife round.</li>
                  <li>Standard WCG tournament rules apply here</li>
                  <li>Regulation Win Condition – Race to 16 rounds or 11 rounds (will be decided on-spot) Regulation Start Money - $800</li>
                  <li>Overtime Win Condition – Best out of 6 rounds</li>
                  <li>Overtime Start Money - $10,000</li>
                  <li>Overtime Side Selection - In overtime, teams first play the side they last played in regulation</li>
                </ul>
                <p>(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)</p>
                <h3>Contacts</h3>
                <p>SWASTIK SAMADDAR CHOWDHURY : +91-98744 36481</p>
                <p>DEEPANJAN SEN :  +91-82401 06266</p>`
        },
        {
          id: "fifa11",
          name: "FIFA 11",
          icon: "events/cyber-crusade/fifa.png",
          class: "deg340",
          desc: `<h1>FIFA 11</h1>
                <p>This Event is open for all those who take foootball as an emotion. You got what it takes? Come show us.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Classic 11 and World 11 are not allowed.</li>
                  <li>Start match with a back pass after Kickoff.</li>
                  <li>Legacy defending is not allowed.</li>
                  <li>No Custom Formations and Tactics.</li>
                  <li>Offside On, Injuries off</li>
                  <li>No updated squads are allowed</li>
                  <li>Prelims Match Duration : 4min</li>
                  <li>Semis Match Duration : 4min</li>
                  <li>Finals Match Duration : 6min</li>
                  <li>Bring your own controllers and the respective drivers needed (if required).</li>
                  <li>Participants must bring their college/school id card.</li>
                </ul>
                <p>(NOTE: The admin’s decision, in any case, is final and irrevocable)</p>
                <h3>Contacts</h3>
                <p>ARKADEEP DEY: 90518 22311</p>
                <p>SUSMIT GHOSH: 79803 69954</p>`
        },
        {
          id: "pubg",
          name: "PUBG Mobile",
          icon: "events/cyber-crusade/pubg.png",
          class: "deg160",
          desc: `<h1>PUBG Mobile</h1>
                <p>Lost your beloved and became a sinner? then you gotta be hungry for a chicken dinner.</p>
                <h3>RULES</h3>
                <ul>
                  <li>The game mode will be TPP - DUO</li>
                  <li>The map for all three match-modes will be Erangel.</li>
                  <li>Use of Aimbots, Wall Hacks, Speedhacks, or any form of unfair advantage-abuse (Teaming up with opponent) is strictly forbidden. All players will be closely monitored and if anyone is caught cheating, that player will be disqualified and banned from all tournaments organised by Cyber Crusade and EDGE.</li>
                  <li>A fixed timeframe will be provided for the players to join the match room, failing to do so will result in disqualification for the match.</li>
                  <li>Players must bring the exact same registered PUBG Mobile ID as mentioned in the form at the time of the registration</li>
                  <li>Playing with any kind of emulator is strictly prohibited.</li>
                  <li>Organisers can authorise any new rules for the betterment of the tournament.</li>
                  <li>The room referee's decisions will be final.</li>
                </ul>
                <h3>Contact</h3>
                <p>ANIRBAN SUR : +91 89812 57401</p>
                <p>SUBHAJIT KONAR : +91 94745 94123</p>`
        },
        {
          id: "nfs",
          name: "Need For Speed",
          icon: "events/cyber-crusade/nfs.png",
          class: "deg200",
          desc: `<h1>Need For Speed</h1>
                <p>If You have everything under control, you're not moving fast enough. Hit the gas, steer the wheel, race to finish line.</p>
                <h3>Maps</h3>
                <ul>
                  <li>Bay Bridge</li>
                  <li>Dunwich Bay</li>
                  <li>Omega</li>
                  <li>Diamond (will be decided by coordinators)</li>
                </ul>
                <h3>Rules</h3>
                <ul>
                  <li>NOS is not allowed.</li>
                  <li>Speed breaker is not allowed.</li>
                  <li>Cars not allowed - all GT cars (ford GT, Carrera GT etc.), BMW M3 GTR (except qualifying round), Lamborghini Murcielago.</li>
                  <li>No Bonus Cars.</li>
                  <li>Tuning is not allowed. You can do performance upgrade only.</li>
                  <li>Body parts are not allowed.</li>
                  <li>Decision of the admin will be treated as final and binding.</li>
                </ul>
                <h3>Round 1</h3>
                <p>This is a time based qualifying round. Map for this round is CITY PERIMETER and participants can use only BMW M3 GTR for this round. Depending upon time participants will be qualified for the next round.</p>
                <h3>Round 2</h3>
                <p>There will be a LAN match among 4 qualified participants. Among them 1st and 2nd will be qualified for the next round again. Laps: 2 laps.</p>
                <h3>Round 3</h3>
                <p>Final Round: 4 finalists will play a LAN match in final. Among them 1st 2nd 3rd winners will be decided. Laps: 3 laps.</p>
                <h3>Contacts:</h3>
                <p>SUJOY DAS : 91-90731 07423</p>
                <p>SRINJOY CHATTERJEE : +91 82402 27648</p>`
        }
      ]
    },
    {
      id: "infocus",
      icon: "infocus.svg",
      name: "Infocus",
      subEvents: [
        {
          id: "shoot-m-up",
          name: "Shoot-M-Up",
          icon: "events/infocus/shoot-m-up.svg",
          class: "deg0",
          desc: `<h1>Shoot-M-Up</h1>
                <p>A mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.</p>
                <h3>Rules</h3>
                <ul>
                  <li>In this mobile photography event, your photos can be used with proper copyright statements for Geekonix beneficial.</li>
                  <li>The topic is open. So just give us the best of you.</li>
                  <li>Incoming photograph submissions shall be screened for originality, authenticity, copyright infringement and maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
                  <li>NOT ALLOWED: HDR, Selective Colouring, Manipulation of pictures are not allowed. Tempering with EXIF is also not allowed.</li>
                  <li>ALLOWED: Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed. Cropping upto 15% is allowed. Proper aspect ratios should be maintained.</li>
                </ul>
                <h3>Contact</h3>`
        },
        {
          id: "crumbs",
          name: "Crumbs",
          icon: "events/infocus/crumbs.svg",
          class: "deg180",
          desc: `<h1>Crumbs</h1>
                <p>Showcase your skills to win the prize in an event that will put your creativity and talent to the test.</p>
                <h3>Rules</h3>
                <ul>
                  <li>This is an open end event. Anyone from any field with any type of camera can participate. Your photos can be used with proper copyright statements for Geekonix beneficial.</li>
                  <li>The registration fee for this event is PARTICIPANTS MUST SUBMIT A HARDCOPY TOO.</li>
                  <li>Incoming photograph submissions shall be screened for originality, authenticity , copyright infringement, maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content.</li>
                  <li>Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
                  <li>NOT ALLOWED: Framing are not allowed. HDR, Selective Colouring, Manipulation of pictures are not allowed. tempering with EXIF is also not allowed.</li>
                  <li>ALLOWED: Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed.</li>
                  <li>Cropping upto 15% is allowed.</li>
                  <li>Proper Aspect ratios should be maintained.</li>
                </ul>
                <h3>Contact</h3>`
        },
      ]
    },
    {
      id: "elevation",
      icon: "elevation.svg",
      name: "Elevation",
      subEvents: [
        {
          id: "nirmaan",
          name: "Nirmaan",
          icon: "events/elevation/nirmaan.svg",
          class: "deg0",
          desc: `<h1>Nirmaan</h1>
                <p>This event tests your art of constructing Bridges. Bring out the Engineer inside you and create a marvel out of the raw materials provided.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Team consists of maximum 4 members.</li>
                  <li>Wooden Popsicle sticks, white glue will be provided on spot.</li>
                  <li>All other necessary materials (scissors , art paper, blades/other cutting materials, thread, clips etc) may be brought by the participants themselves.</li>
                  <li>Only wooden Popsicle sticks and white glue can be used to construct the bridges. No other materials are permitted. The wooden sticks can be cut to fit as desired.The amount of sticks used in the bridge is limited only by the Dimensions and Weight restrictions.</li>
                  <li>Please note the following when you design and build your bridge:</li>
                  <li>During the strength-test of the bridge, one horizontal bar will be placed on the road deck of the bridge. A downward force will be applied onto the horizontal bar. By placing the bar on the deck in this manner, we ensure that the truss members of the bridge are stressed during the strength test. The builder of the model bridge shall ensure that there is one 3cm X 3cm opening,through the side of the bridge structure, immediately beside the bridge deck, to accomodate the load testing.</li>
                  <li>The self weight of the bridge must be less than 250gms. If the above mentioned limit is crossed then points will be deducted as per the following: upto 5gms over limit–for each 1gms- 0.5 point will be deducted. 5-10 gms over limit–for each gm, 1 point will be deducted. 10 & above over limit–for each 1gms-1.5points will be deducted.</li>
                  <li>2 points will deducted from the score if the bridge deck is narrower than 3cm.</li>
                  <li>5 points will be deducted for each 1cm (or portion there of) that the bridge's height exceeds 18cm.</li>
                  <li>2 point will be deducted for each 1cm that the bridge's width exceeds 14cm.</li>
                  <li>2 point will be deducted for each 1cm that the bridge's length exceeds 60cm.</li>
                  <li>Entries will be disqualified if they use a material other than fevicol and wooden popsicle sticks.</li>
                  <li>Entries will be disqualified if the bridge length is shorter than 50cm.</li>
                  <li>Entries will be disqualified if the height of the bridge is less than one popsicle stick.</li>
                  <li>Entries will be disqualified if there is evidence of heat treating(baking, etc).</li>
                  <li>Suspension Bridge Model is not permitted in this event.</li>
                  <li>Entries will be disqulified if the bridge width is shorter than 10cm.</li>
                  <li>Entries will be disqualified if there is no road on the bridge.</li>
                  <li>Construction: 4 hours</li>
                  <li>Load Test Outcome: Load Testing will be conducted on the 3rd event day.</li>
                  <li>The bridges will be sbjected to a Efficiency-test in which a downward force will be applied to the bridge and the force will be gradually increased until the bridge fails. This force will be recorded on the Evaluation Sheet.A bridge is considered to fail when at least one member of the bridge breaks. During the test, the bridge will rest on two blocks placed apart.These blocks are loose and will resist the downward force applied to the bridge. The Strength Factor will be computed using the formula: Efficiency=(applied force)/(self weight of the bridge)</li>
                  <li>The bridge with the highest Strength Factor will be given a score of 100. All other bridge entries with in the category will be given a score less than 100, based on the ratio of their Strength Factor score to the highest Strength Factor score.</li>
                  <li>Decisions taken by Judges will be Final</li>
                </ul>
                <h3>Specifications</h3>
                <ul>
                  <li>The length of the bridge must be between 50 cm and 60cm at its base. This is critical and the bridge will be disqualified if it is shorter than 50cm and will be penalized if it is longer than 60cm at the base.</li>
                  <li>The road surface of the bridge must be atleast 3cm wide along its entire length (sufficient to allow a match box to pass through)</li>
                  <li>The overall width of the bridge must be between 10cm and 14cm. This is critical and the bridge will be disqualified if it is wider than 14cm or higher than 18cm. Height of a zero member will not be considered.</li>
                  <li>The weight of the bridge shall not exceed 250 gms. " Weight means weight, including stick, glue and inclues all attachments submitted with the bridge. Penalties will be assessed against overweight bridges."                </li>
                </ul>
                <h3>Scoring</h3>
                <ul>
                  <li>Keep the glued joints cleaned and trimmed. At the joints, be sure to overlap the sticks and wipe off excess glue.</li>
                  <li>If the edges of the bridge are intended to be straight, use a straight edge while building the bridge.</li>
                  <li>Try to use some artistic imagination</li>
                  <li>Try to use engineering principles, to transfer the force from the middle of the bridge to its supports.</li>
                  <li>Comply with the Weights and Dimensions restrictions to avoid penalties.</li>
                </ul>
                <h3>Contact</h3>
                <p>Sanjit Shaw - 9093058470</p>
                <p>Vishal Kumar - 7991176304</p>
                <p>Saptarshi Bhattacharjee - 9051159470</p>`
        }
      ]
    },
    {
      id: "newron",
      icon: "newron.svg",
      name: "Newron",
      subEvents: [
        {
          id: "quiz",
          name: "The Quiz",
          icon: "events/newron/quiz.svg",
          class: "deg20",
          desc: `<h1>The Quiz</h1>
                <p>It is a general quiz event that tests the knowledge of an individual about this world. Questions are based on a range of topics namely Music, Entertainment, Literature, Art and Sports abbreviated as MELAS.</p>
                <h3>Rules</h3>
                <ul>
                  <li>This is a team event. Each team should consist minimum of 2 and maximum of 3 members.</li>
                  <li>Each team is required to register by arriving at least an hour before the scheduled start.</li>
                  <li>This is a general quiz, format will be made public on the day of the quiz.</li>
                  <li>Any form of cheating will lead to disqualification.</li>
                  <li>In case of a dispute the ruling of the quizmaster is final.</li>
                  <li>There are some star marked questions to decide which team will qualify in case of a tie.</li>
                  <li>Questions can compose of both audio-visual rounds and workout able passages apart from straight questions.</li>
                </ul>
                <h3>Round 1</h3>
                <p>This round is conducted to decide the number of teams qualifying for the Finals. Depending on the number of participating teams in the event the number of rounds and the number of questions are decided.Pouncing is not allowed.</p>
                <h3>Round 2</h3>
                <p>In this round, the top 3 teams who are able to score the maximum points are declared as the winners.</p>
                <h3>Contact</h3>
                <p>Alvin Karkun - 7890150690</p>
                <p>Sankarshan Sur - 9830792503</p>`
        },
        {
          id: "yp",
          name: "Youth Parliament",
          icon: "events/newron/youth-parliament.svg",
          class: "deg340",
          desc: `<h1>Youth Parliament</h1>
                <p>Youth parliament is a form of modern debate to explore your knowledge about Indian parliamentary system. A topic will be given for discussion in the house. The more you research, the hotter you will be able to debate.</p>
                <h3>Rules</h3>
                <ul>
                  <li>All the participants must be from Techno India.</li>
                  <li>The participant can use either Hindi or English i.e there is no language barrier.</li>
                  <li>Students are allowed to participate individually or in a group of two.</li>
                  <li>There will be two rounds, first the constructive speech and second rebuttal round.</li>
                  <li>In constructive speech round, participants will be given maximum two minutes to speak,For participant in group only one canspeak.</li>
                  <li>In rebuttal round anyone who is against of speaker can ask the question to the speaker and if speaker fails to answer , the question is open to the house to be answered by anyone who is in the favor of the speaker.</li>
                  <li>The limitation of time in cross questioning in rebuttal round will be decided by the committee member according to the situation.</li>
                  <li>The marking will be done on the basis of quality of material and the quality of representation by the speaker.</li>
                  <li>No abusive words are allowed inside the house.</li>
                  <li>The best two speakers from each “For” and “Against” house will be awarded.</li>
                </ul>
                <h3>Contact</h3>
                <p>Alvin Karkun - 7890150690</p>
                <p>Ankit Anjan - 7739793511</p>`
        },
        {
          id: "ey",
          name: "Electronically Yours",
          icon: "events/newron/electronically-yours.svg",
          class: "deg180",
          desc: `<h1>Electronically Yours</h1>
                <p>This event tests your knowledge of Electronics. It is a pure electronics-based team event that requires the basic knowledge of Electrical and Electronics Circuits along with its various components, microprocessors & microcontrollers and circuit designing.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A team can be of a maximum of 3 members and minimum of 2 members, each of whom should be a college student.</li>
                  <li>Use of calculators, mobile phones or any other electronic gadgets is strictly prohibited.</li>
                  <li>Use of any of the above mentioned equipment may lead to straight disqualification.</li>
                  <li>Decision of the coordinators shall be final and binding.</li>
                </ul>
                <h3>Round 1</h3>
                <p>This round shall consist of 15 multiple choice questions from the subjects of electronics engineering to be completed in 30 minutes. Each correct answer will carry one mark and there is no penalty for wrong answer. The teams with more than a pre-decided cut-off marks will qualify for the next round of the event based on the number of participants.</p>
                <h3>Round 2</h3>
                <p>This will be a practical on spot round varying from electronics circuit design, microprocessor designing or simulations. The top 3 teams with efficient results will be declared as the winners.</p>
                <h3>Contact</h3>
                <p>Alvin Karkun - 7890150690</p>
                <p>Soumalya Ghosh - 8582834183</p>`
        }
      ]
    },
    {
      id: "ci",
      icon: "create-it.svg",
      name: "Create It",
      subEvents: [
        {
          id: "mekanix",
          name: "Mekanix",
          class: "deg180",
          icon: "events/create-it/mekanix.svg",
          desc: `<h1>Mekanix</h1>
                <p>The participants are tested on their technical domain and then given raw materials out of which they are required to build a model.</p>
                <h3>Rules</h3>
                <ul>
                  <li>A team may have maximum of 4 members.</li>
                  <li>No person should be a member of two teams.</li>
                  <li>The members must bring ID cards of their respective colleges.</li>
                  <li>All the participating teams will have to be present on the event area in time or else they will be disqualified.</li>
                  <li>The participating team should not damage other's model or equipment.</li>
                  <li>Any act of misbehavior or misconduct will lead to direct disqualification.</li>
                  <li>The decision of the coordinators will be final and binding.</li>
                  <li>This will be 2 rounds in the event. Each team will would be given only 1 chance for each of the rounds and the best score will be considered as per the scoring procedure for each round.                </li>
                </ul>
                <h3>Round 1</h3>
                <p>In this Round only two members of the team will be allowed to participate. The quiz will be taken in 3 divisions. The first part will be a MCQ-Aptitude test based on general mathematics and physics with 10 questions to be concluded in 15 minutes. The second part is logic-based where the questions/situations will be dictated and the team will have to answer verbally. The third part will be a rapid fire round with expeditious questioning based on general technical questions.</p>
                <h3>Round 2</h3>
                <p>In this model making Round all the members of the team have to participate. Each team will be allotted with some amount of virtual money. The team will have to purchase the equipment and build the model with the same.</p>
                <h3>Contact</h3>
                <p>Medha Mishra - 8013290587</p>
                <p>Parshati Chaudhury - 8961807090</p>`
        }
      ]
    },
    {
      id: "fff",
      icon: "food-for-fun.svg",
      name: "Food For Fun",
      subEvents: [
        {
          id: "ex",
          name: "Ex-Quizit",
          icon: "events/food-for-fun/xquizit.svg",
          class: "deg0",
          desc: `<h1>Ex-Quizit</h1>
                <h3>Rules</h3>
                <ul>
                  <li>Min 2 members - max 4 members</li>
                  <li>Gaming procedures will be provided to the participants on the day of event.</li>
                </ul>
                <h3>Contact</h3>
                <p></p>`
        },
        {
          id: "sell",
          name: "2 Mins To Sell",
          icon: "events/food-for-fun/food-labelling.svg",
          class: "deg30",
          desc: `<h1>2 Mins To Sell</h1>
                <h3>Rules</h3>
                <ul>
                  <li>Min 1 members - max 2 members</li>
                  <li>Gaming procedures will be provided to the participants on the day of event.</li>
                </ul>
                <h3>Contact</h3>
                <p></p>`
        },
        {
          id: "poster",
          name: "Poster Presentation",
          icon: "events/food-for-fun/display-presentation.svg",
          class: "deg330",
          desc: `<h1>Poster Presentation</h1>
                <h3>Rules</h3>
                <ul>
                  <li>Min 2 members - max 4 members</li>
                  <li>Gaming procedures will be provided to the participants on the day of event.</li>
                </ul>
                <h3>Contact</h3>
                <p></p>`
        },
        {
          id: "think",
          name: "Think It Out",
          icon: "events/food-for-fun/creation-x-nihilo.svg",
          class: "deg160",
          desc: `<h1>Think It Out</h1>
                <h3>Rules</h3>
                <ul>
                  <li>Min 2 members - max 3 members</li>
                  <li>Gaming procedures will be provided to the participants on the day of event.</li>
                </ul>
                <h3>Contact</h3>
                <p></p>`
        },
        {
          id: "relay",
          name: "Food Relay",
          icon: "events/food-for-fun/food-relay.svg",
          class: "deg200",
          desc: `<h1>Food Relay</h1>
                <h3>Rules</h3>
                <ul>
                  <li>Min 2 members - max 4 members</li>
                  <li>Gaming procedures will be provided to the participants on the day of event.</li>
                </ul>
                <h3>Contact</h3>
                <p></p>`
        }
      ]
    },
    {
      id: "ciic",
      desc: `<h1>CIIC Stage</h1>
            <p>We aim to bring together the nation’s nonpareil speakers on innovation & business which is a confluence of visionary innovators, entrepreneurs, social reformers & industrialists from across the nation, a true melange of startup ecosystem; one simply can’t afford to miss. The conclave is not only an amalgamation of a plethora of innovations that arose because a problem needed to be solved, but also targeted for professionals to give them updates about their specific industry which has strong growth potential across various levels.</p>
            <h3>IE - CONFERENCE</h3>
            <p>Innovation is the introduction and creation of something new, in the form of an idea, skill, product, service or process, that helps improve an organization or society. Innovation and Entrepreneurship (IE) Conference, a premiere IE Conference hopes to introduce a wider view of innovation as new methods of creating value, and to focus on research that study innovative processes, organizational practices, systems, supply chain design and other mechanisms that are related to operations in practice.</p>
            <p>Registration: 18th Feb-4th Mar'19</p>
            <p>Eligibility: Open for all</p><br>
            <h3>E - WORKSHOP</h3>
            <p>A 3 hour workshop to out participants on the journey of building a company. Participants would be taken through the fundamentals of building a company - from Product Development, Market Fit to taking it to Scale. Participants get their hands dirty with actually conceptualising a product, vetting it with customer feedback and then going through the steps of taking it to scale.</p>
            <p>Registration: 18th Feb-4th Mar'19</p>
            <p>Eligibility: Open for all</p><br>
            <h3>Business Model Plan Structure</h3>
            <p>Get a chance to tell your startup ideas to the ACs and win startup support services of worth 51K.</p>
            <p>Innovation and entrepreneurship are the wheels that steer the world into a brighter future. Great ideas result into great undertakings which pave the way for glaring success. In order to facilitate this vision, CIIC STAGE! provides a platform for potential ideas and early-stage startups to evaluate their plan in the risk-free environment of a competition. It aims to bridge the gap between ideas and the realization of an enterprise.</p>`
    }
  ];

  result = [
    {
      name: 'ROBOTICS',
      events: [
        {
          name: 'ROBO SOCCER',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'ROBO SAPIENS',
              members: ['RESHAV DAS', 'RWITAM GHOSH', 'TAMOJIT DUTTA', 'SWAYAM DAS']
            },
            {
              pos: '3RD',
              team: 'X PLOD',
              members: ['SAHASRA BANERJEE', 'SOUGATA DEY', 'SAMRAT DUTTA']
            }
          ]
        },
        {
          name: 'ROBO RACE',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'PATRONUS',
              members: ['UJALA KUMARI', 'RIDDHI NANDI', 'ARJV SINGH', 'RICHA CHOUDHURY']
            },
            {
              pos: '3RD',
              team: 'V BOT',
              members: ['RAJ KUMAR', 'PANJIYARA', 'NILAVA SARKAR', 'VISHAL SHARMA', 'SUDIPTO DUTTA', 'NEELESH KEDIA']
            }
          ]
        },
        {
          name: 'RUMBLE',
          positions: [
            {
              pos: '1ST',
              team: 'DYNAMO',
              members: ['AYAN DEB', 'DHRUBAJEET CHOUDHURY', 'AKASHDEEP GUHA', 'ABHISHEK MALAKAR']
            },
            {
              pos: '2ND',
              team: 'MIRAGE',
              members: ['CHELSI KUMARI', 'ABHISHEK BURNWAL', 'MADHUSREE BERA', 'ADITYA']
            }
          ]
        },
        {
          name: 'BLOCK CITY',
          positions: [
            {
              pos: '1ST',
              team: 'ROBORACERS',
              members: ['AMAN BAID', 'MEHELI CHOUDHURY', 'ANUPAM BARMAN', 'APRATIM BANERJEE']
            },
            {
              pos: '2ND',
              team: 'ASYMPTOTES',
              members: ['BINDUSAN MAURYA', 'HARSIT SARAN', 'GAURAV KUMAR MISHRA', 'SARTHAK RAJ']
            },
            {
              pos: '3RD',
              team: 'CHAOS',
              members: ['DEVENDRA SINGHI', 'ADITI DEEPAK', 'HARSHIT HARSH', 'ANIKET DAS']
            }
          ]
        },
        {
          name: 'MICROMACHINA',
          positions: [
            {
              pos: '1ST',
              team: 'CARBIDE 2.0',
              members: ['SATYAKI SETT', 'RITWICK GORAI', 'SAYAK DAS', 'SOUGATA KONAR']
            },
            {
              pos: '2ND',
              team: 'ROBORACERS',
              members: ['AMAN BAID', 'MEHELI CHOUDHURY', 'ANUPAM BARMAN', 'APRATIM BANERJEE']
            },
            {
              pos: '3RD',
              team: 'ASYMPTOTES',
              members: ['BINDUSAN MAURYA', 'HARSIT SARAN', 'GAURAV KUMAR MISHRA', 'SARTHAK RAJ']
            }
          ]
        }
      ]
    },
    {
      name: 'CYBER CRUSADE',
      events: [
        {
          name: 'FIFA',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SUSMIT GHOSH']
            },
            {
              pos: '2ND',
              team: '',
              members: ['ROHAN CHAKRABORTY']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SUBHOMOY PAUL']
            }
          ]
        },
        {
          name: 'CS',
          positions: [
            {
              pos: '1ST',
              team: 'ACE CALIBRE',
              members: []
            },
            {
              pos: '2ND',
              team: 'LOST LEGION',
              members: []
            }
          ]
        },
        {
          name: 'NFS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['NAVEEN BARICK']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SUJAY DAS']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SUMAN DEBNATH']
            }
          ]
        },
        {
          name: 'PUBG DUO',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SOURAV SARKAR', 'SUPRIYO MUKHERJEE']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHASHANK SOURAV', 'ROHIT KUMAR']
            }
          ]
        }
      ]
    },
    {
      name: 'COMPUTE@ID',
      events: [
        {
          name: 'CODEOUT',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['MD. MUBASIR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['RITAYAN CHAKRABORTY']
            },
            {
              pos: '3RD',
              team: '',
              members: ['YASHASVI AGARWAL']
            }
          ]
        },
        {
          name: 'FLAWLESS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHEKHAR AGARWAL', 'TEJESHWAR KUMAR', 'YASHASVI AGARWAL']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHUBHAM KUMAR', 'PRATIK PATNI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['RITAYAN CHAKRABORTY']
            }
          ]
        },
        {
          name: 'CRYPTOQUEST',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SAKSHI AGARWAL', 'YASHASVI AGARWAL']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHEKHAR DUTTA']
            },
            {
              pos: '3RD',
              team: '',
              members: ['NISHI PATWANI', 'ALISHA GUPTA']
            }
          ]
        },
        {
          name: 'BUGHUNT',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHEKHAR DUTTA']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHUBHAM KUMAR']
            },
            {
              pos: '3RD',
              team: '',
              members: ['MD. MUBASIR']
            }
          ]
        },
        {
          name: 'WEB-D',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['TEJESHWAR KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['NISHI PATWANI', 'SAKSHI AGARWAL']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHUBHAM KUMAR', 'PRIYONKAR MITRA']
            }
          ]
        }
      ]
    },
    {
      name: 'CIIC',
      events: [
        {
          name: 'BUSINESS MODEL PLAN',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['NANDAN KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SUKARNA SIL']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHREYA JAISWAL', 'SHALINI BORAL']
            }
          ]
        }
      ]
    },
    {
      name: 'NEWRON',
      events: [
        {
          name: 'QUIZ',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['ANANYA PAUL', 'SHAMIK BANERJEE', 'SOUMYABRATA CHAKRABORTY']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SABARNA SEN', 'SOMYA MISTI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['INDERJEET SINGH', 'ATISH YADAV', 'BASANT GAGGAR']
            }
          ]
        },
        {
          name: 'ELECTRONICALLY YOURS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SHUBHAM KUMAR DUBEY', 'AYUSH KUMAR SHAW']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHRIJITA SOM', 'SULAGNA BHAKTA']
            },
            {
              pos: '3RD',
              team: '',
              members: ['DEBMALAYA MITRA', 'DIBJYOTI MUKHERJEE', 'ABHINABA GHOSH']
            }
          ]
        },
        {
          name: 'YOUTH PARLIAMENT',
          positions: [
            {
              pos: 'BEST SPEAKER FOR THE MOTION',
              team: '',
              members: ['VIVEK KUMAR SINGH']
            },
            {
              pos: 'BEST SPEAKER AGAINST THE MOTION',
              team: '',
              members: ['NAVEEN KUMAR SINGH', 'ANKIT SEN']
            }
          ]
        }
      ]
    },
    {
      name: 'FOOD FOR FUN',
      events: [
        {
          name: 'FOOD RELAY',
          positions: [
            {
              pos: '1ST',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'PABITRA SAHA', 'PUJA SAHA', 'SOUMYA ROY']
            },
            {
              pos: '2ND',
              team: 'BUGS BUNNY',
              members: ['RAKSHITA BHOJAK', 'SOUMI PATRA', 'SHREYA BHATTER', 'RITWIK AGARWAL']
            },
            {
              pos: '3RD',
              team: 'MEARSHISH',
              members: ['MD SHAQUIB', 'MEGHNA BURNWAL', 'DEBARSHI BHATTACHARYA']
            }
          ]
        },
        {
          name: '2 MINUTES TO SELL',
          positions: [
            {
              pos: '1ST',
              team: 'ADRIANA',
              members: ['HARSHIT KUMAR SINGH', 'ADITYA KUMAR']
            },
            {
              pos: '2ND',
              team: 'SRIPARNA',
              members: ['SRIPARNA ROY']
            },
            {
              pos: '3RD',
              team: 'ADRINA 3',
              members: ['BIPUL KARNA', 'SHASHANK HANSRAJ']
            }
          ]
        },
        {
          name: 'EX QUIZ IT',
          positions: [
            {
              pos: '1ST',
              team: 'ENIGMA',
              members: ['SAYAM BOSE', 'SHAMIK BANERJEE', 'ANIKET CHAKRABORTY', 'SHIRSHENDU KUMAR SAHA']
            },
            {
              pos: '2ND',
              team: 'PHEONIX',
              members: ['SHYEREE JORDAR', 'SWETPARNA MONDAL', 'UDISHA SENGUPTA']
            },
            {
              pos: '3RD',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            }
          ]
        },
        {
          name: 'FOOD PRODUCT LABELLING',
          positions: [
            {
              pos: '1ST',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            },
            {
              pos: '2ND',
              team: 'CRAZY FOOD',
              members: ['DIPANJAN GHOSH', 'SUBHANKAR DAS', 'SUBHRAJIT GHOSH']
            },
            {
              pos: '3RD',
              team: 'SQUAD',
              members: ['SMRITI JAISWAL', 'SHALINI KUMARI', 'PUJA SINHA', 'ROHAN KUMAR SINGH']
            }
          ]
        },
        {
          name: 'THINK IT OUT',
          positions: [
            {
              pos: '1ST',
              team: 'SQUAD',
              members: ['VISHAL SINGH']
            },
            {
              pos: '2ND',
              team: 'SAUTIK',
              members: ['SAUTIK SAMUI']
            },
            {
              pos: '3RD',
              team: 'SMP',
              members: ['MAHIMA RAHAMAN', 'SOUMYA ROY', 'PUJA SAHA', 'SWAPNIL SARKAR']
            }
          ]
        }
      ]
    },
    {
      name: 'ELEVATION',
      events: [
        {
          name: 'NIRMAAN',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['YOGESH KUMAR', 'SOURAV KUMAR JAISWAL', 'PRITAM SAGAR', 'SHRISHTI']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SATYAM', 'SACHIN MAHATHA', 'PIYUSH MAJI']
            },
            {
              pos: '3RD',
              team: '',
              members: ['PAUSHALEE MAJUMDER', 'PANKAJ SAHA', 'AGNISHWAR MANDAL']
            }
          ]
        }
      ]
    },
    {
      name: 'CREATE IT',
      events: [
        {
          name: 'MEKANIX',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['BIPUL KARHA', 'HARSHIT SINGH', 'SHASHANK HANSRAJ', 'ADITYA KUMAR']
            },
            {
              pos: '2ND',
              team: '',
              members: ['PRATIK SAHA', 'NAKSHATRA', 'KAUSUM LAHIRI']
            }
          ]
        }
      ]
    },
    {
      name: 'INFOCUS',
      events: [
        {
          name: 'CRUMBS',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['ENAKSHI MJUMDER']
            },
            {
              pos: '2ND',
              team: '',
              members: ['MUNSHI BARISH RAHAMAN']
            },
            {
              pos: '3RD',
              team: '',
              members: ['ABHISHEK MALAKAR']
            }
          ]
        },
        {
          name: 'SHOOT-M-UP',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SUDARSHANA CHOWDHURY']
            },
            {
              pos: '2ND',
              team: '',
              members: ['MADHUMITA KUNDU']
            },
            {
              pos: '3RD',
              team: '',
              members: ['SHUBHAM KUMAR']
            }
          ]
        },
        {
          name: 'INSTA-CLICK',
          positions: [
            {
              pos: '1ST',
              team: '',
              members: ['SARANA MUKHERJEE']
            },
            {
              pos: '2ND',
              team: '',
              members: ['SHALINI KUMARI']
            }
          ]
        }
      ]
    }
  ]

  constructor() {}

  public getDetails(id: string) {
    const details = this.events.find(d => {
      return d.id === id;
    });
    return details;
  }
}
