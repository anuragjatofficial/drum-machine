function App() {
  return (
    <div>
        <DrumMachine/>
    </div>
  )
}


function DrumMachine(){
    
const drumData = [
  {
    audio: "./audios/Cev_H2.mp3",
    text: "Q",
  },
  {
    audio: "./audios/Dsc_Oh.mp3",
    text: "W",
  },
  {
    audio: "./audios/Heater-1.mp3",
    text: "E",
  },
  {
    audio: "./audios/Heater-2.mp3",
    text: "A",
  },
  {
    audio: "./audios/Heater-3.mp3",
    text: "S",
  },
  {
    audio: "./audios/Heater-4_1.mp3",
    text: "D",
  },
  {
    audio: "./audios/Heater-6.mp3",
    text: "Z",
  },
  {
    audio: "./audios/Kick_n_Hat.mp3",
    text: "X",
  },
  {
    audio: "./audios/RP4_KICK_1.mp3",
    text: "C",
  },
];
    return (
      <div id="drum-machine">
        <div id="display"></div>
        {drumData.map((e,i) => (
          <DrumPad data={e} key={i}/>
        ))}
      </div>
    );
}


function DrumPad(props){
    return (
      <div className="drum-pad">
        <audio src={props.data.audio}></audio>
        {props.data.text}
      </div>
    );
}


ReactDOM.render(
            <App/>,
            document.getElementById('root')
);

/**
 * User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".

User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

Here are some audio samples you can use for your drum machine:

Heater 1
Heater 2
Heater 3
Heater 4
Clap
Open-HH
Kick-n'-Hat
Kick
Closed-HH
You can build your project by using this CodePen template and clicking Save to create your own pen. Or you can use this CDN link to run the tests in any environment you like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once you're done, submit the URL to your working project with all its tests passing.
 */