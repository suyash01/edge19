import { Injectable } from '@angular/core';
import { purePipeDef } from '@angular/core/src/view';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = [{
    id: 'ca',
    icon: 'compute-aid.svg',
    subEvents: [{
      id: 'flawless',
      name: 'Flawless',
      icon: 'events/compute-aid/flawless.svg',
      class: 'deg0',
      desc: `<h1>Flawless</h1>
            <p>If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then this is the perfect event for you. Code your heart out and race with the others to win the battle of wits and will. Be Flawless!</p>`
    },
    {
      id: 'bughunt',
      name: 'Bug Hunt',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg30',
      desc: `<h1>Bug Hunt</h1>`
    },
    {
      id: 'crypto',
      name: 'Cryptoquest',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg330',
      desc: `<h1>CryptoQuest</h1>`
    },
    {
      id: 'codeout',
      name: 'CodeOut',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg180',
      desc: `<h1>CodeOut</h1>`
    },
    {
      id: 'code-relay',
      name: 'Code Relay',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg150',
      desc: `<h1>Code Relay</h1>`
    }]
  },
  {
    id: 'robotics',
    icon: '',
    subEvents: [{
      id: 'roborace',
      name: 'Robo Race',
      icon: '',
      class: '',
      desc: ``
    }]
  },
  {
    id: 'infocus',
    icon: 'infocus.svg',
    subEvents: [{
      id: 'shoot-m-up',
      name: 'Shoot-M-Up',
      icon: 'events/infocus/shoot-m-up.svg',
      class: 'deg0',
      desc: `<h1>Shoot-M-Up</h1>
            <p>In this live photography competition you need to think on your feet and be creative at the same time. This mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.</p>`
    },
    {
      id: 'insta-edit',
      name: 'Insta-Edit',
      icon: 'events/infocus/insta-edit.svg',
      class: 'deg30',
      desc: `<h1>Insta-Edit</h1>
            <p>INSTA-EDIT is an editing competition where your creative mind blends perfectly with your Photoshop skills to create your masterpiece and who knows, you might bag the first prize</p>`
    },
    {
      id: 'insta-click',
      name: 'Insta-Click',
      icon: 'events/infocus/insta-click.svg',
      class: 'deg330',
      desc: `<h1>Insta-Click</h1>
            <p>A Live Event photography competition that will measure your creativity as well as innovative approach to photography.The best and the most extraordinary photograph clicked on the event day gets awarded.</p>`
    },
    {
      id: 'crumbs',
      name: 'Crumbs',
      icon: 'events/infocus/crumbs.svg',
      class: 'deg160',
      desc: `<h1>Crumbs</h1>
            <p>Showcase your skills to win the prize in an event that will put your creativity and talent to the test.</p>`
    },
    {
      id: 'odyssey',
      name: 'Odyssey',
      icon: 'events/infocus/odyssey.svg',
      class: 'deg200',
      desc: `<h1>Odyssey</h1>
            <p>If film making is what intrigues you, then this is the event for you. You stand the chance of getting recognition from stalwarts of the film industry.</p>`
    }]
  },
  {
    id: 'elevation',
    icon: 'elevation.svg',
    subEvents: [{
      id: 'cadomania',
      name: 'Cad-O-Mania',
      icon: 'events/elevation/cadomania.svg',
      class: 'deg0',
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
      id: 'nirmaan',
      name: 'Nirmaan',
      icon: 'events/elevation/nirmaan.svg',
      class: 'deg180',
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
    }]
  },
  {
    id: 'newron',
    icon: 'newron.svg',
    subEvents: [{
      id: 'quiz',
      name: 'The Quiz',
      icon: 'events/newron/quiz.svg',
      class: 'deg20',
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
      id: 'yp',
      name: 'Youth Parliament',
      icon: 'events/newron/youth-parliament.svg',
      class: 'deg340',
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
      id: 'ey',
      name: 'Electronically Yours',
      icon: 'events/newron/electronically-yours.svg',
      class: 'deg180',
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
    }]
  },
  {
    id: 'mm',
    icon: 'money-matters.svg',
    subEvents: [{
      id: 'b-plan',
      name: 'B Plan',
      class: 'deg20',
      icon: '',
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
      id: 'stockit',
      name: 'Stock It',
      class: 'deg340',
      icon: 'events/money-matters/stock-it.svg',
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
      id: 'b-quiz',
      name: 'B Quiz',
      class: 'deg160',
      icon: 'events/money-matters/bquiz.svg',
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
      id: 'addomedia',
      name: 'Addomedia',
      class: 'deg200',
      icon: 'events/money-matters/addomedia.svg',
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
    }]
  }]

  constructor() { }

  public getDetails(id: string){
    const details = this.events.find((d) => {
      return d.id === id;
    });
    return details;
  }
}
