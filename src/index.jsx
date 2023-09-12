function App() {
  return (
    <div className="bg-gradient-to-tl  from-pink to-blue flex" style={{height:'100vh'}}>
      <DrumMachine />
    </div>
  );
}


function DrumMachine(){

  const [displayText, setDisplayText] = React.useState(`Play music `);
  const drumData = [
    {
      audio: "./audios/Cev_H2.mp3",
      text: "Q",
      name: "CEV-h2",
    },
    {
      audio: "./audios/Dsc_Oh.mp3",
      text: "W",
      name: "DSC-Oh!",
    },
    {
      audio: "./audios/Heater-1.mp3",
      text: "E",
      name: "Heater-1",
    },
    {
      audio: "./audios/Heater-2.mp3",
      text: "A",
      name: "Heater-2",
    },
    {
      audio: "./audios/Heater-3.mp3",
      text: "S",
      name: "Heater-3",
    },
    {
      audio: "./audios/Heater-4_1.mp3",
      text: "D",
      name: "Heater-4",
    },
    {
      audio: "./audios/Heater-6.mp3",
      text: "Z",
      name: "Heater-6",
    },
    {
      audio: "./audios/Kick_n_Hat.mp3",
      text: "X",
      name: "Kick_&_Hat",
    },
    {
      audio: "./audios/RP4_KICK_1.mp3",
      text: "C",
      name: "RP4_KICK",
    },
  ];


  React.useEffect(() => {

  

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    // 81 - q;

    // w - 87;

    // e - 69;

    // a - 65;

    // s - 83;

    // d - 68;

    // z - 90;

    // x - 88;

    // c - 67;
    console.log("you clicked " +event.keyCode);
    let list;
    switch (event.keyCode) {
      
      case 81:
        document.getElementById("Q").play();
        setDisplayText(drumData[0].name);
        list = document.getElementById("CEV-h2").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(()=>{
            list.add("bg-gray-700");
            list.remove("bg-rose-400");
        },500);
        break;
      case 87:
        document.getElementById("W").play();
        setDisplayText(drumData[1].name);
        list = document.getElementById("DSC-Oh!").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 69:
        document.getElementById("E").play();
        setDisplayText(drumData[2].name);
        list = document.getElementById("Heater-1").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 65:
        document.getElementById("A").play();
        setDisplayText(drumData[3].name);
        list = document.getElementById("Heater-2").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 83:
        document.getElementById("S").play();
        setDisplayText(drumData[4].name);
        list = document.getElementById("Heater-3").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 68:
        document.getElementById("D").play();
        setDisplayText(drumData[5].name);
        list = document.getElementById("Heater-4").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 90:
        document.getElementById("Z").play();
        setDisplayText(drumData[6].name);
        list = document.getElementById("Heater-6").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 88:
        document.getElementById("X").play();
        setDisplayText(drumData[7].name);
        list = document.getElementById("Kick_&_Hat").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
      case 67:
        document.getElementById("C").play();
        setDisplayText(drumData[8].name);
        list = document.getElementById("RP4_KICK").classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        setTimeout(() => {
          list.add("bg-gray-700");
          list.remove("bg-rose-400");
        }, 500);
        break;
    }
  };


    return (
      <div
        id="drum-machine"
        className="md:w-2/5 w-full bg-transparency flex m-auto rounded-lg justify-around p-5"
      >
        <div className="grid grid-cols-3 w-1/2 gap-5 font-bold text-white">
          {drumData.map((e, i) => (
            <DrumPad
              data={e}
              key={i.toString()}
              index={i}
              changeDisplay={setDisplayText}
            />
          ))}
        </div>
        <div id="display" className="text-center w-1/2">
          <div className="flex h-full justify-center items-center">
            <p className="bg-white px-3 py-2 text-lg rounded-md">
              <i className="fa fa-music" aria-hidden="true"></i>
              &nbsp;
              {displayText}
            </p>
          </div>
        </div>
      </div>
    );
}


function DrumPad(props){

    
    const handleAudioPlayer = event =>{
        const list = event.target.classList;
        list.remove("bg-gray-700");
        list.add("bg-rose-400");
        const audio = document.getElementById(props.data.text);
        audio.play();
        props.changeDisplay(props.data.name);
        setTimeout(()=>{
            list.add("bg-gray-700");
            list.remove("bg-rose-400");
        },500);
    };

    return (
      <div
        className="drum pad rounded-md text-center shadow bg-gray-700 h-20 w-20  flex  justify-center items-center	 cursor-pointer "
        onClick={handleAudioPlayer}
        id={props.data.name}
      >
        <audio id={props.data.text} src={props.data.audio}></audio>
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