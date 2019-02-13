import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventService {
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
                  <li>This event will consist of 2 rounds of coding: Preliminary Round & Final Round</li>
                </ul>
                <h3>Round 1</h3>
                <p>It will be an elimination round where the participants will have to solve 5 questions in a duration of 3 hours. The teams will be judged based on the number of problems they will solve and the time taken to solve the problems. The teams with the best performances will qualify for the next round.</p>
                <h3>Round 2</h3>
                <p>The ultimate showdown will take place between the teams selected from the previous round. The duration of this round is going to be 3 hours. The number of questions in this round will be declared on spot on the day of the finals. Again, like the prelims the teams will be judged based on the number of problems they will solve and the time taken to solve the problems.</p>
                <h3>Contact</h3>
                <p>Raja Sachin - 9062647976</p>
                <p>Avnish Singh - 9162023260</p>`
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
                  <li>Each team can have either 1 or 2 members.</li>
                  <li>The coordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Round 1</h3>
                <p>It is an MCQ round on languages C, C++ or JAVA. This round will test the fundamental skill of participants in the language they choose. Team qualifies on basis of performance.</p>
                <h3>Round 2</h3>
                <p>It is going to be a Debugging Round. Again C, C++ and Java will be the languages of choice for the teams (Teams are allowed to choose a different language for this round). All the teams will be provided with some buggy code snippets and they will have to correct these code snippets in the minimum number of steps possible. Teams will be marked based on the number of steps they take to correct a code snippet and also the time taken to correct it.</p>
                <h3>Contact</h3>
                <p>Shreya Agrawal - 9836566212</p>
                <p>Abhishek Das - 7033534472</p>`
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
                  <li>Each team can have either 1 or 2 members.</li>
                  <li>Various questions involving ciphers and steganography will be provided to you. You will simply have to give us the flags, which will be hidden within the questions.</li>
                  <li>Knowledge of computer programming won’t be required to solve the problems, although it may help to solve some problems faster.</li>
                  <li>The event will be conducted on a Linux Distro like Ubuntu. Basic knowledge of such an environment, can prove helpful during the event</li>
                  <li>Teams won’t be allowed to use any external electronic devices.</li>
                  <li>Internet access may be provided to the participants if the co-ordinators decide that any question will require it. In case it is not provided, we will provide you with almost all the knowledge, you will require to crack the questions.</li>
                  <li>In the event of a tie, the team to solve the most difficult questions first will be considered the winner.</li>
                  <li>The co-ordinators have the right to change the rules and judging criteria of the contest at any time they deem fit.</li>
                </ul>
                <h3>Contacts</h3>
                <p>Suyash Mittal - 7044793121</p>
                <p>Radhika Mohta - 9163981049</p>`
        },
        {
          id: "codeout",
          name: "CodeOut",
          icon: "events/compute-aid/code-out.svg",
          class: "deg180",
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
                <p>Indranil Choudhary - 9635874015</p>`
        },
        {
          id: "code-relay",
          name: "Code Relay",
          icon: "events/compute-aid/code-relay.svg",
          class: "deg150",
          desc: `<h1>Code Relay</h1>
                <p>TBU</p>`
        },
        {
          id: "webdev",
          name: "Web Dev",
          icon: "events/compute-aid/web-dev.svg",
          class: "deg210",
          desc: `<h1>Web Dev</h1>
                <p>TBU</p>`
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
          class: "deg45",
          desc: `<h1>Robo Race</h1>
            <p>Build a bot (wired/wireless) that is capable of traversing the arena manually bypassing the hurdles in its path.</p>
            <h3>Rules</h3>
            <ul>
              <li>A minimum of 3 members and a maximum of 4 members are allowed per team.</li>
              <li>The members must bring IDENTITY CARDS of the college.</li>
              <li>No person should be a member of two teams.</li>
              <li>No bot can be shared by two teams</li>
              <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
              <li>Participants themselves will have to arrange for any other power supply required for their robot</li>
              <li>Team cannot tinker with bots during the run.</li>
              <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
              <li>Any act of misbehaviour or misconduct will lead to direct disqualification.</li>
              <li>Any decision of the co-ordinators will be final and binding</li>
              <li>Bots will start from the point marked as “START” on the arena.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>Maximum allowable dimensions of the bot will be 25cm x 25cm x 25cm with a tolerance of 10%</li>
              <li>The maximum weight of the bot should not exceed 2 kg.</li>
              <li>The robot can be powered on-board or off-board.</li>
              <li>The potential difference between any two electrical points on the bot must not exceed 20 volts throughout the run.</li>
              <li>Violation of any rule will lead to disqualification.</li>
              <li>The arena will contain obstacles in the form of sand, gravel, mud, bumpers, stone chips, marble balls, broken glasses etc.</li>
              <li>The arena will be 10-25 metres in length.</li>
              <li>The length and constituents of the track may keep varying from round to round.</li>
              <li>The width of the arena will be approximately 3ft (92 cm).</li>
              <li>The arena will also include obstacles like cliffs, ramps, bridges, bumps, dips, rotating discs, see-saw, banks and water bodies.</li>
              <li>The height of the waterbeds will vary between 3 cm to 8 cm.</li>
              <li>Maximum inclination of the inclined planes will not exceed 45 degrees.</li>
              <li>All individual arena parameters are measured under a tolerance level of 10%.</li>
              <li>There may be some typical bypasses for shorter paths and for following the bypasses properly there might or might not be bonus points.</li>
              <li>If a robot damages the arena, a penalty might be imposed on the teams overall score. The magnitude of the penalty will depend on the amount of damage caused, and will be decided by the coordinators.</li>
            </ul>
            <h3>Round 1</h3>
            <p>BEAT THE CLOCK: the bot has to solely traverse the track from "START" point and complete the arena in maximum 5 minutes. The Track is subdivided into several check points. Any Number of hand-touches can be taken during the run if there is any mishap/toppling. Bot will be placed again at the point of discontinuity. Only 3 hurdles can be skipped and 1 restart will be allowed. Penalty of 20 seconds for each hand-touch while 100 seconds for each skip. There will be penalty of 300 seconds for restart. After 5 min the team will be given points on the basis of number of checkpoints crossed.Selection of teams for next round will be on the basis of time taken and the number of checkpoints crossed.</p>
            <h3>Round 2</h3>
            <p>SURVIVAL OF THE FASTEST: For further rounds, a one-on-one event will take place in which two bots will take on each other at a time. Each bot has to try to finish the race first.</p>
            <h3>Scoring Rules</h3>
            <ul>
              <li>BEAT THE CLOCK: SCORE = 1000 – 2 *(Time taken in seconds) – 20 * (no. of hand touch) – 100 * (no. of skips) –50 * (no. of time-outs) – 300 (for restart)</li>
              <li>SURVIVAL OF THE FASTEST: There is no score system. Whoever reaches the “FINISH” point first, wins the race. However, a team cannot opt for more than 2 TIMEOUTS.</li>
            </ul>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        },
        {
          id: "blitzkrieg",
          name: "Blitzkrieg",
          icon: "events/robotics/blitzkrieg.svg",
          class: "deg15",
          desc: `<h1>Blitzkrieg</h1>
            <p>Design & construct a manually controlled robot capable of fighting a one-on-one tournament. Think of a robot with sophisticated weapons that can destroy your enemy and make you win.</p>
            <h3>Rules</h3>
            <ul>
              <li>Any team can participate in Blitzkrieg consisting of a minimum of 4 participants. These participants can be from same or different institutes.</li>
              <li>Every team must have a name which must be unique.Geekonix reserves the right to reject entries from any Team whose name it deems inappropriate, offensive or conflicting. Organizers must be notified if a team's name has been changed.</li>
              <li>Each team must specify their Team Representative (Leader) at the time of registration. All important communications between EDGE and the registered teams will be done through their Team Representative. The Team Representatives must submit valid contact details (phone no., email ID etc.) at the time of registration.</li>
              <li>There will be three rounds, 4 minutes each. Any team that is not ready at the time specified will be disqualified. The name of your machine must be prominently displayed on the machine.</li>
              <li>In no case should the arena be damaged by any bot. The competition will be played on a knock-out basis.</li>
              <li>A bot will be declared 'KNOCKED-OUT' if it is unable to travel a distance of 6 inches in 30 seconds.</li>
              <li>If no bot immobilizes then winner will be declared on the basis of the points scored.</li>
              <li>The organizers reserve the rights to change any or all of the above rules as they deem fit. Change in rules, if any will be notified to the registered teams.</li>
              <li>Violation of any of the above rules will lead to disqualification.</li>
              <li>Decision of organizers will be final and binding on all.</li>
              <li>Compliance with all event rules is mandatory. It is expected that competitors stay within the rules and procedures of their own accord and do not require constant policing.</li>
              <li>Special care should be taken to protect the on-board batteries and pneumatics, robot without proper protection will not be allowed to compete.</li>
              <li>If you have a robot or weapon design that does not fit within the categories set forth in these rules or is in some way ambiguous or borderline, please contact the event organizers. Safe innovation is always encouraged, but surprising the organizers with your brilliant exploitation of a loophole may cause your robot to be disqualified before it even competes.</li>
              <li>Each event has safety inspections. It is at their sole discretion that your robot is allowed to compete. As a builder you are obligated to disclose all operating principles and potential dangers to the inspection staff.</li>
              <li>Proper activation and deactivation of robots is critical. Robots must only be activated in the arena, testing areas, or with expressed consent of the event coordinators.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>All weapons must have a safety cover on any sharp edges.</li>
              <li>All participants have to build and operate robots at their own risk. Combat robotics is inherently dangerous. There is no amount of regulation that can encompass all the dangers involved. Please take care to not hurt yourself or others when building, testing or competing</li>
              <li>Any kind of activity (repairing, battery handling, pneumatics systems etc.) which may cause damage to the surroundings during the stay of the teams in the competition area should not be carried out without the consent of organizers. Not following this rule may result in disqualification.</li>
              <li>All the resources provided at the time of competition from the organizers.</li>
              <li>Once the robots have entered into the arena, no team member can enter into the arena at any point of time. In case if a fight has to be halted in between and some changes have to be done in the arena or condition on the robot(s), it will be done by organizers only.</li>
              <li>Dimensons and Fabrications : The machine should fit in a box of dimensions 500mm x 500mm x 500mm (l x b x h) at any given point during the match.</li>
              <li>The external device used to control the machine or any external tank is not included in the size constraint.</li>
              <li>The machine should not exceed 45 kg + 10% Tolerance in weight including the weight of pneumatic source/tank. In case of wireless robot, if the battery is on-board then the weight should not exceed 55 kg.</li>
              <li>Power Sources: The machine can be powered electrically only. Use of an IC engine in any form is not allowed.</li>
              <li>Each team must prepare its own power sources. Only 220V volt AC sources will be provided at the arena, but can only be used in the form of DC voltage. The teams have to bring their own battery eliminators.</li>
              <li>The voltage difference between any two points in the machine should not be more than 36V DC at any point of time.</li>
              <li>All connections should be made safe to prevent short circuits and battery fires. Any unsafe circuitry may be asked to be replaced; failure to do so will result in disqualification.</li>
              <li>Use of damaged, non-leak proof batteries may lead to disqualification.</li>
              <li>Change of battery will not be allowed during the match.</li>
              <li>It is suggested to have extra batteries ready and charged up during competition so that on advancing to next level, you don't have to wait or suffer due to uncharged battery.</li>
              <li>If a team do not show up on allotted slot, they will be disqualified.</li>
              <li>Mobility : All bots must have clearly visible and controlled mobility mechanism in order to compete.</li>
              <li>Methods of mobility may include: Rolling (wheels, tracks or the whole robot), Walking (linear actuated legs with no rolling or cam operated motion) & Shuffling (rotational cam operated legs).</li>
              <li>Jumping and hopping is not allowed</li>
              <li>Flying (using aerofoil, helium balloons, ornithopters, etc.) is not allowed.</li>
              <li>Any other method of mobility which leads the robot to lose contact with the ground is not allowed.</li>
              <li>Robot control requirements: Both wired and wireless remote controls are allowed in the event.</li>
              <li>All wires coming out of the robot should be bundled as a single unit</li>
              <li>The wires should be properly protected and insulated.</li>
              <li>The wire should be sufficiently long so as to remain slack at all time during the competition.</li>
              <li>In case of wireless remote controls, the remote should have atleast two frequency operations to prevent interference with other team.</li>
              <li>Teams are recommended to attach a pipe to bot in vertical direction through which wires come out. The length of pipe will not be considered in bot dimension.</li>
              <li>Weapon Systems: Robots can have any kind of cutters, flippers, saws, lifting devices,spinning hammers etc. as weapons with following exceptions.</li>
              <ul>
                <li>Any kind of inflammable liquid / liquid based weapons.</li>
                <li>Smoke or dust weapons.</li>
                <li>Flame-based Weapons.</li>
                <li>Any kind of explosive or interionally ignited solid or potentially ignitable solid.</li>
                <li>Nets, tape, glue, or any other entanglement device.</li>
                <li>High power magnets or electromagnets.</li>
                <li>Radio Jamming, Tasers, Tesla coils, or any other high-voltage device.</li>
                <li>Tethered or un-tethered projectiles.</li>
              </ul>
              <li>Spinning weapons which do not come in contact with the arena at any point of time are allowed.</li>
              <li>The robot must use non-inflammable and non-corrosive fluids to power pneumatic and hydraulic devices.</li>
              <li>Maximum pressure in the tank containing pneumatic fluid should not exceed the limit of 10 bars and there should be a provision to check the pressure in the tank.</li>
              <li>All hydraulic liquids are required to be non-corrosive and your device should be leak proof. The maximum pressure in cylinder should not exceed the rated pressure at any point of time.</li>
              <li>Participants must be able to indicate the used pressure with integrated or temporarily fitted pressure gauge.</li>
              <li>You must have a safe way of refilling the system</li>
              <li>All pneumatic components on board a robot must be securely mounted. Care must be taken while mounting the pressure vessel and armour to ensure that if ruptured it will not escape the robot.</li>
            </ul>
            <h3>Scoring Rules</h3>
            <ul>
              <li>Points will be awarded, once in a round, if the bot reaches opponent's starting point, which can be referred to as safe zone.</li>
              <li>Points of the opponent team will be deducted if their bot is pushed into the danger zone (Remaining corners of the arena apart from safe zone).</li>
              <li>Points will be awarded for pushing the opponent's bot out of the arena.</li>
              <li>Specific scoring will be updated soon.</li>
            </ul>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        },
        {
          id: "liftnlay",
          name: "Lift N Lay",
          icon: "events/robotics/liftnlay.svg",
          class: "deg345",
          desc: `<h1>Lift 'N' Lay</h1>
            <p>Build a terrestrial bot that is capable of picking blocks through different hurdles and capable of placing them.</p>
            <h3>Rules</h3>
            <ul>
              <li>A minimum of 3 members and a maximum of 4 members are allowed per team</li>
              <li>The members must bring IDENTITY CARDS of the college</li>
              <li>No person should be a member of two teams.</li>
              <li>No bot can be shared by two teams.</li>
              <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply.</li>
              <li>Participants will have to themselves arrange for any other power supply required for their robot.</li>
              <li>Teams cannot tinker with their bots during the run</li>
              <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed.</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
              <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team</li>
              <li>The decision of the co-ordinators will be final and binding</li>
              <li>The bot has to solely traverse through the track picking and placing blocks.</li>
              <li>The bot will start from the point marked as “START” on the arena and will have to complete the task in maximum 5 minutes.</li>
              <li>There will be penalty of 300 points for restart.</li>
              <li>Placing each block at the correct position will fetch each team positive marks and the time remaining (in seconds) will be added as bonus to the final score. Each team is allowed a single restart in which negative points will be given to the team and they can begin again resetting the timer.</li>
              <li>In case the team finds their robot stuck at some position they can take hand touch. In such a case the bot will be placed in a position (by the co-ordinator) where it can move freely and negative points will be given on each hand touch.</li>
              <li>Each team will be provided with maximum 2 technical time-outs of 2 minutes; the first one is free while the second one will have a penalty of 100 during which they can repair their bots.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>Maximum allowable dimensions of the bot will be 25cm x 25cm x 25cm with a tolerance of 10%.</li>
              <li>The maximum weight of the bot should not exceed 2.5 kg.</li>
              <li>The robot can be powered on-board or off-board</li>
              <li>The potential difference between any two electrical points on the bot must not exceed 20 volts throughout the run.</li>
              <li>Violation of any rule will lead to disqualification.</li>
            </ul>
            <h3>Scoring Rules</h3>
            <p>FINAL SCORE: 200*(No. of blocks placed) + 2*(time left in sec) - 30*(no. of hand touches) - 100*(for 2nd time-out) - 300(for restart)</p>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        },
        {
          id: "stalker",
          name: "Stalker",
          icon: "events/robotics/stalker.svg",
          class: "deg315",
          desc: `<h1>Stalker</h1>
            <p>To build an autonomously controlled robot capable of following a white line on a black surface or black line on white surface.</p>
            <h3>Rules</h3>
            <ul>
              <li>A team can consist of maximum 4 members.</li>
              <li>The candidates may or may not be from different colleges.</li>
              <li>No person can be in two teams of the same event.</li>
              <li>The members must bring IDENTITY CARDS of the college.</li>
              <li>No bot can be shared by two teams.</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification.</li>
              <li>Any act of misbehaviour or misconduct will lead to immediate disqualification of the team.</li>
              <li>Damaging the path will lead to immediate disqualification.</li>
              <li>The decision of the co-ordinators will be final and binding.</li>
              <li>After every reset, the bot will be placed at the last check point but each will lead to a penalty (the timer will not be paused during reset).</li>
              <li>If a team wants a restart, the bot will be placed at the starting point.</li>
              <li>The run shall start from a predefined starting zone.</li>
              <li>The decision of the event coordinator(s) will be final and binding.</li>
              <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 6 minutes in the finals.</li>
            </ul>
            <h3>Specifications</h3>
            <p>The width of line will be 2.5cm (approx.).</p>
            <h3>Round 1</h3>
            <p>A team can have maximum of three resets and one restart.</p>
            <h3>Round 2</h3>
            <p>A team can have maximum of five resets and three restarts.</p>
            <h3>Round 3</h3>
            <p>A team can have maximum of five resets and three restarts. In this round the arena may contain inclinations and see-saw and the path may also be blocked by cubical blocks which should be avoided by the bot.</p>
            <h3>Scoring Rules</h3>
            <ul>
              <li>20 Points will be awarded for successfully crossing each checkpoint.</li>
              <li>100 points will be awarded for successfully reaching the end point.</li>
              <li>150 Points will be awarded for stopping at the end point.</li>
              <li>Penalty of 20 points will be imposed for each reset.</li>
              <li>Penalty of 50 points will be imposed for each restart.</li>
            </ul>
            <h3>Contact</h3>
            <p>Sudhanshu Shivam - 8697892729</p>
            <p>Sourav Ghosh - 8013174091</p>`
        },
        {
          id: "jigsaw",
          name: "Jigsaw",
          icon: "events/robotics/jigsaw.svg",
          class: "deg270",
          desc: `<h1>Jigsaw</h1>
            <p>To build an autonomously controlled bot which is capable of finding its way through a maze and arriving at the final destination.</p>
            <h3>Rules</h3>
            <ul>
              <li>A team consist of maximum 4 members</li>
              <li>The candidates may or may not be from different colleges</li>
              <li>No person can be in two teams of the same event</li>
              <li>The members must bring IDENTITY CARDS of the college.</li>
              <li>No bot can be shared by two teams.</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification.</li>
              <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
              <li>Damaging the path will lead to immediate disqualification.</li>
              <li>The decision of the coordinator(s) will be final and binding.</li>
              <li>The bot has to stop at the finish point.</li>
              <li>The maximum time allotted to complete the task is 5 minutes in the prelims and 10 minutes in the finals.</li>
              <li>If a team wants a restart, the bot will have to start from a predefined starting point with timer reset and a penalty.</li>
              <li>The decision of the event coordinator(s) will be final and binding.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>The arena will have white surface with black line of width 2.5cm (approx.)</li>
              <li>Bot dimension must not exceed 25cm*25cm*25cm (tolerance of 10% is accepted for each parameter).</li>
            </ul>
            <h3>Round 1</h3>
            <p>The bot has to move from starting point to finish point in the minimum time. A team can have maximum of three reset and one restart in this round.</p>
            <h3>Round 2</h3>
            <p>Once the bot reaches the finish point it will be placed at the starting point again and the bot has to reach the finish point once more using the shortest path possible.In this round five resets and three restarts are allowed.</p>
            <h3>Scoring Rules</h3>
            <ul>
              <li>150 Points will be awarded for reaching the finish point.</li>
              <li>100 Points will be awarded for stopping at the finish point.</li>
              <li>Penalty of 20 Points will be imposed for each resets.</li>
              <li>Penalty of 50 Points will be imposed for each restart.</li>
            </ul>
            <h3>Contact</h3>
            <p>Sudhanshu Shivam - 8697892729</p>
            <p>Sourav Ghosh - 8013174091</p>`
        },
        {
          id: "wallstreet",
          name: "Wall Street",
          icon: "events/robotics/wallstreet.svg",
          class: "deg135",
          desc: `<h1>Wall Street</h1>
            <p>Build an autonomous line follower bot based on microcontroller which is capable of following lines, walls (where line may or may not present) and detecting crossroads.</p>
            <h3>Rules</h3>
            <ul>
              <li>A team can consist of maximum 4 members.</li>
              <li>The candidates may or may not be from different colleges.</li>
              <li>No person can be in two teams of the same event.</li>
              <li>The members must bring IDENTITY CARDS of the college.</li>
              <li>No bot can be shared by two teams.</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification.</li>
              <li>Any act of misbehaviour or misconduct will lead to immediate disqualification of the team.</li>
              <li>Damaging the path will lead to immediate disqualification.</li>
              <li>The decision of the co-ordinator(s) will be final and binding.</li>
              <li>The maximum time allotted to complete the task is 4 minutes in the prelims and 5 minutes in the finals.</li>
              <li>The run will start from a predefined starting point.</li>
              <li>A team can have maximum of six hand-touches, two restarts, and two timeouts in each round.</li>
              <li>If a team wants a restart, the bot will be placed at the starting point.</li>
              <li>After every hand-touch, the bot will be placed on previous check-point.</li>
              <li>The walls will be present at a distance of 12-15 cm from the path of the robot.</li>
              <li>Any collision with the wall will be treated as penalty.</li>
              <li>When the robot follows the wall, the bot has to indicate that by glowing and LED or by sounds buzzer.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>The dimension of the bot should be 25x25x25 cm.</li>
              <li>The width of line would be 2.5cm approx.</li>
            </ul>
            <h3>Round 1</h3>
            <p>The bot has to follow the line as well as the wall, detect check points and indicate wall.</p>
            <h3>Round 2</h3>
            <p>The bot has to follow the line as well as the wall, detect check points,indicate wall and has to stop at the finishing point.</p>
            <h3>Round 3</h3>
            <p>Same as Round 2</p>
            <h3>Scoring Rules</h3>
            <ul>
              <li>Penalty of 150 points will be imposed for number of restarts taken.</li>
              <li>Penalty of 100 points will be imposed for number of timeouts taken.</li>
              <li>Penalty of 30 points will be imposed for each hand touch.</li>
              <li>Penalty of 100 points will be imposed for each skip.</li>
              <li>Penalty of 20 points will be imposed for each collision with wall.</li>
              <li>50 points will be awarded for each wall is indicated properly.</li>
              <li>50 points will be awarded for each detection of checkpoint.</li>
              <li>100 points will be awarded for stopping at finishing point.</li>
            </ul>
            <h3>Contact</h3>
            <p>Sudhanshu Shivam - 8697892729</p>
            <p>Sourav Ghosh - 8013174091</p>`
        },
        {
          id: "marinodrift",
          name: "Marino Drift",
          icon: "events/robotics/marinodrift.svg",
          class: "deg165",
          desc: `<h1>Marino Drift</h1>
            <p>Build terrestrial bot that is capable of traversing the arena and dragging/picking the blocks and an aquatic robot capable of placing the floating blocks at specific locations in water.</p>
            <h3>Rules</h3>
            <ul>
              <li>A minimum of 3 members and a maximum of 4 members are allowed per team.</li>
              <li>The members must bring IDENTITY CARDS of the college.</li>
              <li>No person should be a member of two teams.</li>
              <li>No bot can be shared by two teams.</li>
              <li>The participants will be provided with 220 Volts, 50 Hz standard AC supply</li>
              <li>Participants will themselves have to arrange for any other power supply required for their robot</li>
              <li>Teams cannot tinker with their bots during the run.</li>
              <li>LEGO kits or its spare parts or pre-made mechanical parts are not allowed</li>
              <li>Any kind of damage to the arena by the robot will lead to direct disqualification</li>
              <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team</li>
              <li>The decision of the co-ordinator(s) will be final and binding</li>
              <li>Each team should have both terrestrial robot and an aquatic robot to participate in this event</li>
              <li>The terrestrial robots can use either picking or pushing mechanism for placing the blocks.</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>Maximum allowable dimension for the terrestrial bot will be 25cm x 25cm x 25cm with a tolerance of 10%</li>
              <li>The weight of the robot should not exceed 2kg.</li>
              <li>The robot can be provided on-board or off-board</li>
              <li>The potential difference between any two electrical points and the robot must not exceed 22 volts throughout the run</li>
            </ul>
            <h3>Round 1</h3>
            <p>Every team will be given a puzzle which they have to solve and then perform the given task in minimum time by finding and placing the respective blocks at the specific locations containing the digits of the answer. The terestial bot will be given a total of 4 minutes and the aquatic bot will be given 3 minutes.Placing each block at their correct position will fetch each team positive marks and the time remaining (in seconds) will be added as bonus to the final score. If the team finds their robot stuck at some position they can take a hand touch and the bot will be placed in a position (by the co-ordinator) where it can move freely which will fetch negative points. Only 1 technical timeout of 3 minutes and 1 restart is allowed (with negative points).</p>
            <h3>Round 2</h3>
            <p>A knockout round (similar to that of Round 1 with slight On-spot modifications) in which two teams will compete against each other. The first team to complete the task will win and qualify for the 3rd Round.</p>
            <h3>Round 3</h3>
            <p>A time trial round (similar to that of Round 1 with slight On-spot modifications) where the total time taken(in seconds) to complete the task will be the final score of the team. The winners will be declared on the basis of final score.</p>
            <h3>Scoring Rules</h3>
            <ul>
              <li>Placing each block at its correct position: +100 points</li>
              <li>Completely placing all blocks: +100 points</li>
              <li>Restart: -200 points</li>
              <li>Hand-touch: -20 points</li>
              <li>Time remaining Bonus (terrestrial): Time remaining (in seconds) points</li>
              <li>Time remaining Bonus (aquatic): Time remaining (in seconds) *2 points</li>
              <li>Final score: Summation of the above scores.</li>
            </ul>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        },
        {
          id: "double",
          name: "Double Up",
          icon: "events/robotics/doubleup.svg",
          class: "deg195",
          desc: `<h1>Double Up</h1>
            <p>A fun filled event in which your bot has to compete with three other bots to take glory home</p>
            <h3>Rules</h3>
            <ul>
              <li>This is a one round event.</li>
              <li>Multiple registrations are allowed i.e. after completing one round, team may try again with fresh registration.</li>
              <li>Only On-spot registrations will take place under this category</li>
              <li>Method of mobility used for the robot which leads the robot to lose contact with the ground is not allowed.</li>
              <li>The decisions taken by the coordinators will be final and binding.</li>
            </ul>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        },
        {
          id: "robosoccer",
          name: "Robo Soccer",
          icon: "events/robotics/robosoccer.svg",
          class: "deg225",
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
              <li>No attack on the opponent's bot is allowed.</li>
              <li>Any act of misbehavior or misconduct will lead to immediate disqualification of the team.</li>
              <li>The decision of the coordinators will be final and binding</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>The robot should have a maximum size of 25cm (l)*25cm (b)*25cm (h) with a tolerance of 10%</li>
              <li>The bot with external mechanism must be fitted in the cubical box of given dimension.</li>
              <li>The maximum allowable weight of the robot is 3 KG without any tolerance.</li>
              <li>The robot can be powered on-board or off-board.</li>
              <li>The potential difference between any two electrical points on the robot must not exceed 20 volts throughout the run.</li>
              <li>The robot should not grab/hold the ball at any point of time during the match.</li>
            </ul>
            <h3>Round 1</h3>
            <p>The game will be of maximum 3 minutes and the bot has to place maximum number of balls and blocks on their specified places. First place all the blocks and then kick-off the ball by avoiding obstacles placed at different positions in arena. Two time-outs provided of 2 minutes. If mechanical fault occurs, negative points will be awarded in 2nd time-out.If the ball is kicked from specified place then team is awarded bonus points.</p>
            <h3>Round 2</h3>
            <p>This Knockout round will be of maximum 5 minutes where the team scoring maximum goals will qualify.</p>
            <h3>Round 3</h3>
            <p>Semi-Finals and Finals will be of maximum of 5 minutes in two halves of 2.5 minutes each. A maximum of 10 seconds will be allowed to hold the ball.</p>
            <h3>Scoring Rules</h3>
            <p>SCORE = 100*[Number of blocks placed] +150*[Number of goals] +200*[Number of jackpots] -20*[Number of obstacles touched] -50*[Number of times ball touches blocks] -100*[Second timeout taken] + [time left]</p>
            <h3>Contact</h3>
            <p>Ashutosh Priyadarshi - 8697276841</p>
            <p>Rajeev Ranjan - 8820879972</p>
            <p>Wahid Hussain - 8583908125</p>
            <p>Sujay Basak - 8013821259</p>`
        }
      ]
    },
    {
      id: "cc",
      icon: "cyber-crusade.svg",
      name: "Cyber Crusade",
      subEvents: [
        {
          id: "csgo-pro",
          name: "CS GO - Pro League",
          icon: "events/cyber-crusade/csgo-pro.png",
          class: "deg0",
          desc: `<h1>CS GO - Pro League</h1>
                <p>Tailor crafted for the professionals. Bigger platform. Bigger stakes. CSGO. 5v5 standard matchmaking rules as always.</p>
                <h3>Maps</h3>
                <p>(Valve official versions of the maps in the Active Duty Map Group)</p>
                <ul>
                  <li>De_cache</li>
                  <li>De_cbble</li>
                  <li>De_inferno</li>
                  <li>De_nuke</li>
                  <li>De_mirage</li>
                  <li>De_train</li>
                  <li>De_overpass</li>                
                </ul>
                <h3>Map Selection</h3>
                <ul>
                  <li>A coin flip decides which is Team </li>
                  <li>Best of one: Ban A-Ban B - Ban A - Ban B - Ban A - Ban B - Last map is the map to be played</li>
                  <li>Best of three: Ban B - Ban A - Pick B - Pick A - Ban A - Ban B - Last map remaining is the tie breaker</li>
                  <li>Side choice (CT/T) for every map is decided by a knife round.</li>
                </ul>
                <h3>Rules</h3>
                <ul>
                  <li>Freeze Time - 15 seconds</li>
                  <li>Round Time - One minute and 55 seconds</li>
                  <li>Regulation Start Money - $800</li>
                  <li>Regulation Side Selection - Knife for sides</li>
                  <li>Overtime Max Rounds - 6</li>
                  <li>Overtime Start Money - $10,000</li>
                  <li>Overtime Side Selection - In overtime, teams first play the side which they last played in regulation</li>
                </ul>
                <p>(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)</p>
                <h3>Contact</h3>
                <p>Swastik Sanaddar Chowdhury - 9874436481</p>`
        },
        {
          id: "csgo-col",
          name: "CS GO - College League",
          icon: "events/cyber-crusade/csgo-clg.png",
          class: "deg30",
          desc: `<h1>CS GO - College League</h1>
                <p>CSGO, the fourth game in the 'Counter-Strike' series, consists of team based action where two teams battle it out with gun and strategies. Restricted to college/school students only. 5v5 standard matchmaking rules as always.</p>
                <h3>Maps</h3>
                <p>(Valve official versions of the maps in the Active Duty Map Group)</p>
                <ul>
                  <li>De_cache</li>
                  <li>De_cbble</li>
                  <li>De_inferno</li>
                  <li>De_nuke</li>
                  <li>De_mirage</li>
                  <li>De_train</li>
                  <li>De_overpass</li>                
                </ul>
                <h3>Map Selection</h3>
                <ul>
                  <li>A coin flip decides which is Team </li>
                  <li>Best of one: Ban A-Ban B - Ban A - Ban B - Ban A - Ban B - Last map is the map to be played</li>
                  <li>Best of three: Ban B - Ban A - Pick B - Pick A - Ban A - Ban B - Last map remaining is the tie breaker</li>
                  <li>Side choice (CT/T) for every map is decided by a knife round.</li>
                </ul>
                <h3>Rules</h3>
                <ul>
                  <li>All players in a team must be from the same college.</li>
                  <li>All participants must bring their college/school id card.</li>
                  <li>Freeze Time - 15 seconds</li>
                  <li>Round Time - One minute and 55 seconds</li>
                  <li>Regulation Start Money - $800</li>
                  <li>Regulation Side Selection - Knife for sides</li>
                  <li>Overtime Max Rounds - 6</li>
                  <li>Overtime Start Money - $10,000</li>
                  <li>Overtime Side Selection - In overtime, teams first play the side which they last played in regulation</li>
                </ul>
                <p>(NOTE: In case of deadlocks, the admin’s decision is final and irrevocable)</p>
                <h3>Contact</h3>
                <p>Ahana Sarkar - 9674362280</p>`
        },
        {
          id: "fifa-pro",
          name: "FIFA - Pro League",
          icon: "events/cyber-crusade/fifa.png",
          class: "deg180",
          desc: `<h1>FIFA - Pro League</h1>
                <p>Experience the all new FIFA 18 with stakes higher than ever. Enough said.</p>
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
                  <li>The admin’s decision, in any case, is final and irrevocable</li>
                </ul>
                <h3>Contact</h3>
                <p>Arkadeep Dey - 9051822311</p>`
        },
        {
          id: "fifa-col",
          name: "FIFA - College League",
          icon: "events/cyber-crusade/fifa14.png",
          class: "deg150",
          desc: `<h1>FIFA - College League</h1>
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
                  <li>The admin’s decision, in any case, is final and irrevocable</li>
                </ul>
                <h3>Contact</h3>
                <p>Arkadeep Dey - 9051822311</p>`
        },
        {
          id: "pubg",
          name: "PUBG Mobile",
          icon: "events/cyber-crusade/pubg.png",
          class: "deg210",
          desc: `<h1>PUBG Mobile</h1>
                <p>TBU</p>`
        },
        {
          id: "dota",
          name: "DOTA 2",
          icon: "events/cyber-crusade/dota2.png",
          class: "deg330",
          desc: `<h1>DOTA 2</h1>
                <p>The most popular MOBA game in the world.Enter into battle with one of over a hundred DOTA heroes. Here there is always something new to discover.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Competition method: 5 versus 5</li>
                  <li>Game mode: Captain's Mode (CM)</li>
                  <li>Side and first ban will be determined by toss</li>
                  <li>Victory condition: The first team to destroy the other team’s ancient.</li>
                  <li>Players must be prepared before their scheduled games [Practice time will not be provided]</li>
                  <li>All competitors must be present 15 minutes prior to their scheduled match.</li>
                  <li>Players who are registered must be the ones to play.</li>
                  <li>If a reserve is needed, only the registered reserves will be allowed to play.</li>
                  <li>Only two (2) reserves are allowed per team. They should be registered separately.</li>
                  <li>No player is allowed to play for more than one team.</li>
                  <li>If any player disconnects during a match, the game will be paused instantly until the player has reconnected.</li>
                  <li>Other than above issues each team can only pause the game for not more than 3 minutes.</li>
                  <li>Trash talking or violence will not be tolerated and suitable action will be taken.</li>
                  <li>Any cheats, hacks or exploits are illegal and not allowed in play. A punishment will be served to the offender which will be determined by the administration.</li>
                  <li>A game is finished, when an Ancient Fortress is destroyed.</li>
                  <li>Any team that fails to appear for any scheduled Standard Match will be charged with a forfeit. Similarly, a forfeit will result when a team does not have the minimum number of required players in the time allocated to start a match. A Standard Match forfeit will count as a loss.</li>
                  <li>In case of any other issues Admin’s decision is final.</li>
                </ul>
                <h3>Contact</h3>
                <p>Jyotishman Chakraborty - 8910664354</p>`
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
            <p>In this live photography competition you need to think on your feet and be creative at the same time. This mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.</p>
            <h3>Rules</h3>
            <ul>
              <li>The topic is open. So just give us the best of you.</li>
              <li>Incoming photograph submissions shall be screened for originality, authenticity & copyright infringement & maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
              <li>HDR, Selective Colouring, Manipulation of pictures are not allowed.</li>
              <li>Tempering with EXIF is also not allowed.</li>
              <li>Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed.</li>
              <li>Cropping up to 15% is allowed maintaining aspect ratio.</li>
            </ul>
            <h3>Contact</h3>
            <p>Rohit Deb - 9038220806</p>
            <p>Indrajit Dhara - 9804179878</p>`
        },
        {
          id: "insta-edit",
          name: "Insta-Edit",
          icon: "events/infocus/insta-edit.svg",
          class: "deg30",
          desc: `<h1>Insta-Edit</h1>
            <p>INSTA-EDIT is an editing competition where your creative mind blends perfectly with your Photoshop skills to create your masterpiece and who knows, you might bag the first prize</p>
            <h3>Rules</h3>
            <ul>
              <li>Live editing of a given picture.</li>
              <li>Incoming editing submissions shall be screened for originality, authenticity & maintaining regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, *libelous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". But the author of the edited image does not retain full ownership of the edited image. Geekonix holds the copyright of the photo. Further reproductions or misuses of the given picture will be counted as a criminal offence and stringent actions will be undertaken.</li>
              <li>5 photos will be given to you. You can choose to edit any one photo of your wish.</li>
              <li>No manipulation of background is allowed.</li>
              <li>You will be given 1.5 hours to showcase your editing skills.</li>
              <li>Participants are requested to bring their own laptop.</li>
              <li>Participants who will be editing in mobile, can choose any app of their choices.</li>
            </ul>
            <h3>Contact</h3>
            <p>Karan Paul - 8906833180</p>
            <p>Rohit Deb - 9038220806</p>`
        },
        {
          id: "insta-click",
          name: "Insta-Click",
          icon: "events/infocus/insta-click.svg",
          class: "deg330",
          desc: `<h1>Insta-Click</h1>
            <p>A Live Event photography competition that will measure your creativity as well as innovative approach to photography.The best and the most extraordinary photograph clicked on the event day gets awarded.</p>
            <h3>Rules</h3>
            <ul>
              <li>Live event photography.</li>
              <li>Incoming photograph submissions shall be screened for originality, authenticity & copyright infringement & maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
              <li>No post-processing is allowed</li>
              <li>Only cropping up to 15% is allowed</li>
            </ul>
            <h3>Contact</h3>
            <p></p>
            <p>Indrajit Dhara - 9804179878</p>
            <p>Karan Paul - 8906833180</p>`
        },
        {
          id: "crumbs",
          name: "Crumbs",
          icon: "events/infocus/crumbs.svg",
          class: "deg160",
          desc: `<h1>Crumbs</h1>
            <p>Showcase your skills to win the prize in an event that will put your creativity and talent to the test.</p>
            <h3>Rules</h3>
            <ul>
              <li>The topic is open. So just give us the best of you.</li>
              <li>PARTICIPANTS MUST SUBMIT A SOFTCOPY AND A HARDCOPY (A4 SIZE PHOTO PAPER) OF EACH PHOTOS TO BE SUBMITTED.</li>
              <li>Incoming photograph submissions shall be screened for originality, authenticity & copyright infringement & maintaining editing regulation issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Geekonix recognizes "You". So the author of the image retains full ownership of the copyright in each entry.</li>
              <li>Framing are not allowed. HDR, Selective Colouring, Manipulation of pictures are not allowed. tempering with EXIF is also not allowed.</li>
              <li>Mild post processing like Colour correction, Light editing, Sharpness enhancements are allowed.</li>
              <li>Cropping up to 15% is allowed maintaining aspect ratio.</li>
            </ul>
            <h3>Contact</h3>
            <p>Rohit Deb - 9038220806</p>
            <p>Karan Paul - 8906833180</p>`
        },
        {
          id: "odyssey",
          name: "Odyssey",
          icon: "events/infocus/odyssey.svg",
          class: "deg200",
          desc: `<h1>Odyssey</h1>
            <p>If film making is what intrigues you, then this is the event for you. You stand the chance of getting recognition from stalwarts of the film industry.</p>
            <h3>Rules</h3>
            <ul>
              <li>The topic is open. So just give us the best of you.</li>
              <li>Incoming films shall be screened for originality, authenticity & copyright infringement issues. No entry should contain any infringing, threatening, false, misleading, abusive, harassing, *libellous, defamatory, vulgar, obscene, scandalous, inflammatory, pornographic or profane content. Judge's decision will be final to determine whether the content is inappropriate or not and accordingly your work might get disqualified.</li>
              <li>Run time – 25 minutes is the maximum time period, which will be provided for each film screening. Shorter films can get extra points according to judge’s willing. Statutory warnings should be included as per the needs. **English subtitles should be included.</li>
            </ul>
            <h3>Contact</h3>
            <p>Rohit Deb - 9038220806</p>
            <p>Karan Paul - 8906833180</p>`
        }
      ]
    },
    {
      id: "elevation",
      icon: "elevation.svg",
      name: "Elevation",
      subEvents: [
        {
          id: "cadomania",
          name: "Cad-O-Mania",
          icon: "events/elevation/cadomania.svg",
          class: "deg0",
          desc: `<h1>Cad-O-Mania</h1>
            <p>This is an on the spot event of making Plan and Elevation of a building in AutoCAD. Problem statement of the event will be given on the spot.</p>
            <h3>Rules</h3>
            <ul>
              <li>Each group consists of a maximum of 2 members.</li>
              <li>No person is allowed to be in two different teams.</li>
              <li>Decisions taken by Judges will be final.</li>
              <li>Participants should finish and submit their drawing within 180 minutes.</li>
              <li>Participants should make their drawing according to the specified AREA and FLOOR-AREA RATIO.</li>
              <li>Points will be deducted if the drawing requirements mentioned in the Problem Statement are not fulfilled.</li>
              <li>Participants are not allowed to use any resources available over internet and are expected to be honest.</li>
              <li>Additional points will be given on completing the drawing before the given time period.</li>
            </ul>
            <h3>Contact</h3>
            <p>Sanjit Shaw - 9093058470</p>
            <p>Prashant Kumar Dubey - 9091397765</p>
            <p>Srimonti Kundu - 8240253078</p>`
        },
        {
          id: "nirmaan",
          name: "Nirmaan",
          icon: "events/elevation/nirmaan.svg",
          class: "deg180",
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
              <li>Load Test Outcome: Load Testing will be conducted on the 3rd event day</li>
              <li>The bridges will be sbjected to a Efficiency-test in which a downward force will be applied to the bridge and the force will be gradually increased until the bridge fails. This force will be recorded on the Evaluation Sheet.A bridge is considered to fail when at least one member of the bridge breaks. During the test, the bridge will rest on two blocks placed apart.These blocks are loose and will resist the downward force applied to the bridge. The Strength Factor will be computed using the formula: Efficiency=(applied force)/(self weight of the bridge)</li>
              <li>The bridge with the highest Strength Factor will be given a score of 100. All other bridge entries with in the category will be given a score less than 100, based on the ratio of their Strength Factor score to the highest Strength Factor score.</li>
              <li>Decisions taken by Judges will be Final</li>
            </ul>
            <h3>Specifications</h3>
            <ul>
              <li>The length of the bridge must be between 50 cm and 60cm at its base. This is critical and the bridge will be disqualified if it is shorter than 50cm and will be penalized if it is longer than 60cm at the base.</li>
              <li>The road surface of the bridge must be atleast 3cm wide along its entire length (sufficient to allow a match box to pass through)</li>
              <li>The overall width of the bridge must be between 10cm and 14cm. This is critical and the bridge will be disqualified if it is wider than 14cm or higher than 18cm. Height of a zero member will not be considered.</li>
              <li>The weight of the bridge shall not exceed 250 gms. " Weight means weight, including stick, glue and inclues all attachments submitted with the bridge. Penalties will be assessed against overweight bridges."</li>
            </ul>
            <h3>Scoring Rules</h3>
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
              <li>This is a team event. Each team should consist of 3 members.</li>
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
            <p>Youth parliament is a form of modern debate to explore your knowledge about Indian parliamentary system. A topic will be given for discussion in the house. The more you research ,the better you will be able to debate.</p>
            <h3>Rules</h3>
            <ul>
              <li>TOPIC: TBD</li>
              <li>The participant can use either Hindi or English i.e there is no language barrier.</li>
              <li>Students are allowed to participate individually or in a group of two.</li>
              <li>The marking will be done on the basis of quality of material and the quality of representation by the speaker.</li>
              <li>No abusive words are allowed inside the house.</li>
              <li>Any changes in the rules will be notified prior to the day of the event.</li>
            </ul>
            <h3>Round 1</h3>
            <p>This is a constructive speech round, participants will be given maximum 2 minutes to speak, for participant in group only one can speak.</p>
            <h3>Round 2</h3>
            <p>This is a rebuttal round, anyone who is against the speaker can ask the question to the speaker and if speaker fails to answer, the question is open to the house to be answered by anyone who is in favour of the speaker. The limitation of time in cross questioning will be decided by the committee member according to the situation.</p>
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
              <li>A team can be of a maximum of 3 members, each of whom should be a college student.</li>
              <li>Use of calculators, mobile phones or any other electronic gadgets is strictly prohibited.</li>
              <li>Use of any of the above mentioned equipment may lead to straight disqualification.</li>
              <li>Decision of the coordinators shall be final and binding.</li>
            </ul>
            <h3>Round 1</h3>
            <p>This round shall consist of 30 multiple choice questions from the subjects of electronics engineering to be completed in 45 minutes. Each correct answer will carry one mark and there is no penalty for wrong answer. The teams with more than a pre-decided cut-off marks will qualify for the next round of the event.</p>
            <h3>Round 2</h3>
            <p>This will be a practical on spot round varying from electronics circuit design, microprocessor designing or simulations. The top 3 teams with efficient results will be declared as the winners.</p>
            <h3>Contact</h3>
            <p>Alvin Karkun - 7890150690</p>
            <p>Soumalya Ghosh - 8582834183</p>`
        }
      ]
    },
    {
      id: "mm",
      icon: "money-matters.svg",
      name: "Money Matters",
      subEvents: [
        {
          id: "b-plan",
          name: "B Plan",
          class: "deg20",
          icon: "events/money-matters/bplan.svg",
          desc: `<h1>B Plan</h1>
            <p>Young entrepreneurs with a prudent business plan can present their ideas and stand a chance to get rewarded handsomely. Since the advent of time humans have relied on their selling skills to survive.If you think you can dazzle the audience by your impromptu thinking and wit, then come and be a part of the most challenging competition of Edge, which will provide you with the perfect platform to show your magic.</p>
            <h3>Rules</h3>
            <ul>
              <li>Team can consist of maximum of 3 members.</li>
              <li>The judges will evaluate the presentations based on the following CRITERIA:</li>
              <li>Background Study.</li>
              <li>Originality in the research work.</li>
              <li>Volume of the work carried out.</li>
              <li>Novelty in thinking.</li>
              <li>Oral presentation skill of the presenter.</li>
              <li>Ability to answer questions at the end of the presentation.</li>
            </ul>
            <h3>Round 1</h3>
            <p>In this Round each team of 3 members will have to send their entry in a presentation/document by 5th April 2019 to 'edgemoneymatters@gmail.com'. The cover page should contain: Team Name & Member names along with address, e-mail and telephone number. The best entries will be asked to participate in the main event at EDGE 2019 at our campus</p>
            <h3>Round 2</h3>
            <p>In this Round the selected teams will be called to present their business idea to an open audience during Edge. Tentative duration is 10 min. of presentation followed by 5 minutes of Question & Answer.</p>
            <h3>Contact</h3>
            <p></p>`
        },
        {
          id: "stockit",
          name: "Stock It",
          class: "deg340",
          icon: "events/money-matters/stock-it.svg",
          desc: `<h1>Stock It</h1>
            <p>The Stock Market Challenge is an online simulation trading game where you create and manage your own portfolio and compete with other players in a risk free environment. Access financial information on stocks to get better insight on its potential and fundamentals.</p>
            <h3>Rules</h3>
            <ul>
              <li>Every challenger is assigned Rs. 10,00,000 play money in the beginning.</li>
              <li>The objective is to maximize this amount by intelligently and smartly investing in the Stock Market.</li>
              <li>This Stock Market Challenge is almost as real as it happens on Bombay Stock Exchange (BSE).</li>
              <li>The practical issues faced when a stock hits a circuit or the illiquidity of a stock etc. are all captured and simulated so as to ensure a realistic experience of the markets.</li>
              <li>The Corporate Benefits as in Dividend, Bonus, Split, Mergers, De-Mergers etc are all also considered and applied.            </li>
            </ul>
            <h3>Contact</h3>
            <p></p>`
        },
        {
          id: "b-quiz",
          name: "B Quiz",
          class: "deg160",
          icon: "events/money-matters/bquiz.svg",
          desc: `<h1>B Quiz</h1>
            <p>This is a team event where each team is quizzed on relevant business topics and the market scenario.</p>
            <h3>Rules</h3>
            <ul>
              <li>Team can consist of maximum of 3 members (even solo participation accepted).</li>
              <li>This quiz is open to anyone under 25 years of age.</li>
              <li>Cross college/school teams are allowed.</li>
              <li>Valid ID cards need to be produced at the time of on-spot registration.</li>
              <li>Each member has to be registered individually.</li>
              <li>Any form of cheating will lead to direct disqualification.</li>
              <li>The Prelims will be a set of 25 questions.</li>
              <li>The top 8 teams will make it to the finals.</li>
              <li>It is a BizTech quiz. The questions will be from the fields of Technology and Business both.</li>
            </ul>
            <h3>Contact</h3>
            <p></p>`
        },
        {
          id: "addomedia",
          name: "Addomedia",
          class: "deg200",
          icon: "events/money-matters/addomedia.svg",
          desc: `<h1>Addomedia</h1>
            <p>The idea of this event is to allow the players to explore their creativity as well as their marketing power. The Event is based on a marketing theme, participants will have to pick any product real or fictional of their choice and device an ad campaign to sell the said product.</p>
            <h3>Rules</h3>
            <ul>
              <li>Team should consist of 3 members</li>
              <li>Content should be original, anyone found adopting any unfair means will be disqualified.</li>
              <li>40% weightage will be given to the look and design of the ad, and 60% to the idea behind the campaign.</li>
            </ul>
            <h3>Round 1</h3>
            <p>In this round, each team of 3 members will have to send their entry in a presentation/document by 5th April 2019 to 'edgemoneymatters@gmail.com'. The cover page should contain: Team Name & Member names along with address, e-mail and telephone number. The best entries will be asked to participate in the main event at EDGE 2019 at our campus.</p>
            <h3>Round 2</h3>
            <p>In this round, one has to prepare a video or a ppt describing their proposed ad campaign, their brand positioning and target audience.</p>
            <h3>Contact</h3>
            <p></p>`
        }
      ]
    },
    {
      id: "ci",
      icon: "create-it.svg",
      name: "Create It",
      subEvents: [
        {
          id: "rtr",
          name: "Rags to Riches",
          class: "deg0",
          icon: "events/create-it/rags-to-riches.svg",
          desc: `<h1>Creation-X-Nihilo</h1>
            <p>This gives you scrap to build your creations.Start with rags and end with riches. Problem statement to be given on the spot. As an example we have the problem: Participants were given paint, poster colours etc. They were required to make something creative out of it and paint a member in their team. They were also supposed to give a description of it.</p>
            <h3>Rules</h3>
            <ul>
              <li>There shall be a maximum of 3 members in a team. Team members may be from different institutions/colleges.</li>
              <li>All the requirements will be provided.</li>
              <li>The time allotted will be 1 hour.</li>
              <li>Each member should have a valid ID card of his/her institute.</li>
              <li>The right spirit of participation is expected from all the participants.</li>
            </ul>
            <h3>Contact</h3>
            <p>Medha Mishra - 8013290587</p>
            <p>Parshati Chaodhury - 8961807090</p>`
        },
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
              <li>This will be 2 rounds in the event. Each team will be given only 1 chance for each of the rounds and the best score will be considered as per the scoring procedure for each round.</li>
            </ul>
            <h3>Contact</h3>
            <p>Medha Mishra - 8013290587</p>
            <p>Parshati Chaodhury - 8961807090</p>`
        }
      ]
    },
    {
      id: "fff",
      icon: "food-for-fun.svg",
      name: "Food For Fun",
      subEvents: [
        {
          id: 'relay',
          name: 'Food Relay',
          icon: 'events/food-for-fun/food-relay.svg',
          class: 'deg30',
          desc: `<h1>Food Relay</h1>`
        },
        {
          id: 'xquizit',
          name: 'Xquizit',
          icon: 'events/food-for-fun/xquizit.svg',
          class: 'deg0',
          desc: `<h1>Xquizit</h1>`
        },
        {
          id: 'creation',
          name: 'Creation X Nihilo',
          icon: 'events/food-for-fun/creation-x-nihilo.svg',
          class: 'deg330',
          desc: `<h1>Creation X Nihilo</h1>`
        },
        {
          id: 'fpl',
          name: 'Food Product Labelling',
          icon: 'events/food-for-fun/food-labelling.svg',
          class: 'deg165',
          desc: `<h1>Food Product Labelling</h1>`
        },
        {
          id: 'presentation',
          name: 'Display Presentation',
          icon: 'events/food-for-fun/display-presentation.svg',
          class: 'deg195',
          desc: `<h1>Display Presentation</h1>`
        }
      ]
    },
    {
      id: "innovati",
      icon: "innovati.svg",
      name: "Innovati",
      subEvents: [
        {
          id: "pv",
          name: "Project View",
          icon: "events/innovati/project-view.svg",
          class: "deg0",
          desc: `<h1>Project View</h1>
                <p>Any completed or underdevelopment engineering based college project, either hardware implemented or simulated, or software based implementation, may be offered for consideration. Any undergraduate level engineering project is welcome, and would most likely be encouraged towards improvement holistically. A worthy project would be appraised and duly rewarded, along with assistance towards development, patenting and publication.</p>
                <p>NOTE: IF ANYONE HAS NO WORKING MODEL THEN THEY CAN COME UP WITH THEIR INNOVATIVE IDEAS WITH A POWERPOINT PRESENTATION ON ANY OF THE ABOVE MENTIONED TOPIC. THIS IS A DIFFERENT CATEGORY WITH ATTRACTIVE PRIZE MONEY OTHER THAN EXHIBITION.</p>
                <h3>Rules</h3>
                <ul>
                  <li>Participant studying in undergraduate or postgraduate programs</li>
                  <li>A team can consist of a maximum of 4 students.</li>
                  <li>No two teams can have a common member (including during presentation session for the judges).</li>
                  <li>Every participant should have a valid ID card of his/her institute/college.</li>
                  <li>Students currently enrolled for an undergraduate/postgraduate program at their institute are eligible for the competition.</li>
                  <li>To clear doubts regarding eligibility of concerned project and domain of the same, contact the enlisted contact persons in the contacts tab.</li>
                  <li>NOTE: Eligibility may be constrained to some unforeseeable factors and hence, would be best determined subjectively by the concerned event heads, in consultation with jury. Any anomalies would be duly intimated. Till then, we encourage every project be submitted for appraisal.</li>
                </ul>
                <h3>Contact</h3>
                <p>Medha Mishra - 8013290587</p>
                <p>Parshati Chaodhury - 8961807090</p>`
        }
      ]
    },
    {
      id: "jlt",
      icon: "just-like-that.svg",
      name: "Just Like That",
      subEvents: [
        {
          id: 'oms',
          name: '1 Minute Stand',
          icon: 'events/just-like-that/1-min-stand.svg',
          class: 'deg30',
          desc: `<h1>1 Minute Stand</h1>`
        },
        {
          id: 'ez',
          name: 'Edge Zoom',
          icon: 'events/just-like-that/edge-zoom.svg',
          class: 'deg330',
          desc: `<h1>Edge Zoom</h1>`
        },
        {
          id: 'udaan',
          name: 'Udaan',
          icon: 'events/just-like-that/udaan.svg',
          class: 'deg180',
          desc: `<h1>Udaan</h1>`
        }
      ]
    },
    {
      id: "fun",
      icon: "fun-events.svg",
      name: "Fun Events",
      subEvents: [
        {
          id: "body",
          name: "Body Zorbing",
          icon: "events/fun-events/body-zorbing.svg",
          class: "deg0",
          desc: `<h1>Body Zorbing</h1>
                <p>This fun event procures the highest participation every year since this high energy, fun-filled activity has been a treat for the participants. Here participants secured themselves in transparent balls and set everybody else laughing their hearts out while they fell down, bumped on each other or rolled down, trying to overthrow their opponents.</p>`
        },
        {
          id: "pong",
          name: "Red Bull Pong",
          icon: "events/fun-events/red-bull-pong.svg",
          class: "deg180",
          desc: `<h1>Red Bull Pong</h1>
                <p>Sponsored by Red Bull this event became quite popular amongst the youth. This event judged how many balls each player could land into the red bull cups. The player with the maximum score was awarded by Red Bull.</p>`
        }
      ]
    },
    {
      id: "designing",
      icon: "design-event.svg",
      subEvents: [
        {
          id: 'mc',
          name: 'Motion Canvas',
          icon: 'events/designing/motion-canvas.svg',
          class: 'deg0',
          desc: ``
        },
        {
          id: 'pp',
          name: 'Pixel Plot',
          icon: 'events/designing/pixel-plot.svg',
          class: 'deg180',
          desc: ``
        }
      ]
    },
    {
      id: "ciic",
      icon: "ciic.svg",
      subEvents: [
        {
          id: 'cp',
          name: 'Crowd Pitch',
          icon: 'events/ciic/crowd-pitch.svg',
          class: 'deg30',
          desc: `<h1>Crowd Pitch</h1>
                <p>TBU</p>`
        },
        {
          id: 'pr',
          name: 'Pitch Right',
          icon: 'events/ciic/pitch-right.svg',
          class: 'deg330',
          desc: `<h1>Pitch Right</h1>
                <p>TBU</p>`
        },
        {
          id: 'tm',
          name: 'Troll Marketting',
          icon: 'events/ciic/troll-marketting.svg',
          class: 'deg180',
          desc: `<h1>Troll Marketting</h1>
                <p>TBU</p>`
        }
      ]
    }
  ];

  constructor() {}

  public getDetails(id: string) {
    const details = this.events.find(d => {
      return d.id === id;
    });
    return details;
  }
}
