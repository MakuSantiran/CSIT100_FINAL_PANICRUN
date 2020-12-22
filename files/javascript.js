// Cassette Tape Techinique by Maku Santiran
// A technique where Maku makes a game about his quizzes



/*
	Put these inside the var test

	["",
	""], // answer


SIGMUND FREUD


*/

document.title = "CS and IT Panic Run";

var test = [
	["means that no one should be able to do malicous stuff into my computer",
	"Security" , // answer
	"Definition"], // group
	["aims to protect a single connected machine",
	"Computer Security" , // answer
	"Definition"], // group
	["seeks to protect communication and all its participants.",
	"Network Security" , // answer
	"Definition"], // group
	["defines what is allowed and how the system and security mechanisms should act. ",
	"Policy" , // answer
	"Definition"], // group
	
	
	["This is where a hacker can hack into a system to use the CPU for free or to use it from sending emails for free.",
	"Theft of service" , // answer
	"Threats"], // group
	["This is where a hacker may get into the homepage of the university that kicked him out and deface the homepage",
	"Vengeance and hatred" , // answer
	"Threats"], // group
	["This is where hackers learn a great deal every time they break into a new type of system",
	"knowledge and experimentation" , // answer
	"Threats"], // group
	["characterized by an explicit attempt by attackers to prevent or bar legitimate users of computers from availing themselves of computer services",
	"Denial of service attack" , // answer
	"Threats"], // group
	
	
	["It means to keep data secret from non participants",
	"Confidentiality" , // answer
	"Definition"], // group
	["It means to keep data from being modified and keep it functioning properly",
	"Integrity" , // answer
	"Definition"], // group	
	["It means to  keep the system running and reachable",
	"Availability" , // answer
	"Definition"], // group	
	
	["These flaws occur as a consequence of insufficient checking and validation of data and error codes in  programs",
	"Buggy code" , // answer
	"WhyArentSecure"], // group	
	["The purpose of this is to ensure that when a security measure is applied, level of security by system is attained",
	"Protocol" , // answer
	"WhyArentSecure"], // group	
	["The goal of is this to protect private communication in the public world",
	"Cryptography" , // answer
	"WhyArentSecure"], // group	
	["Is a flaw where its essentially the art of gaining access to systems or data by exploiting human psychology",
	"Social Engineering" , // answer
	"WhyArentSecure"], // group	
	["Is known as a security threat that originates from within the organization being attacked or targeted",
	"Insider threats" , // answer
	"WhyArentSecure"], // group	
	["is a type of scam where an intruder attempts to gain unauthorized access  to a users system or information by pretending to be the user.",
	"Spoofing" , // answer
	"WhyArentSecure"], // group	
	
	["is the process of encoding a message or information in such a way that only authorized parties can access it and those who are not authorized cannot",
	"Encryption" , // answer
	"SecurityMechanics"], // group	
	["refers to the process of performing data integrity checks",
	"Checksum" , // answer
	"SecurityMechanics"], // group	
	["is the act of confirming the truth of an attribute of a single piece of data claimed true by an entity",
	"Authentication" , // answer
	"SecurityMechanics"], // group	
	["Is a security mechanism used to determine user/client privileges or access levels related to system resources",
	"Authorization" , // answer
	"SecurityMechanics"], // group	
	["Generally, these are configured to protect against unauthenticated interactive logins from the outside world",
	"Firewalls" , // answer
	"SecurityMechanics"], // group	
	["is a framework of open standards for ensuring private, secure communications over Internet Protocol, networks, through the use of cryptographic security services.",
	"Internet Protocol Security" , // answer
	"SecurityMechanics"], // group	
	["s a standard security protocol for establishing encrypted links between a web server and a browser in online communication.",
	"Secure Sockets Layer" , // answer
	"SecurityMechanics"], // group	
	["Is a device or software application that monitors a network or systems for malicious activity or policy violations",
	"intrusion detection system" , // answer
	"SecurityMechanics"], // group	
	
	["is a collection of computing devices that are connected in various ways to communicate and share resources",
	"computer network" , // answer
	"Definition"], // group
	[" is a set of guidelines for implementing networking communications between computers. ",
	"Protocol" , // answer
	"Definition"], // group
	["Is a method which logically separate functions in the network are abstracted from their underlying structures",
	"Message Encapsulation" , // answer
	"Definition"], // group
	["provides a general framework for standardization and defines a set of layers and services provided by each layer",
	"Open Systems Interconnection" , // answer
	"Definition"], // group
	["breaks messages into packets, hands them off to the IP software for delivery, and then orders and reassembles the packets at their destination",
	"Transmission Control Protocol" , // answer
	"Definition"], // group
	["deals with the routing of packets through the maze of interconnected networks to their final destination.",
	"Internet Protocol" , // answer
	"Definition"], // group
	["is a set of devices connected by communication links.",
	"Network" , // answer
	"Definition"], // group
	["is a collaboration of more than hundreds of thousands of interconnected networks.",
	"Network" , // answer
	"Definition"], // group
	["It is pattern of interconnection of nodes in network",
	"Topology" , // answer
	"Definition"], // group

	["All networked nodes are interconnected, peer to peer, using a single, open-ended cable",
	"Bus topology" , // answer
	"CommonNetworkTopology"], // group
	["Have connections to networked devices that out from a common point",
	"Star topology" , // answer
	"CommonNetworkTopology"], // group
	["It is where the data is transmitted unidirectional around the ring",
	"Ring topology" , // answer
	"CommonNetworkTopology"], // group
	["can be developed using leased private lines or any other transmission facility",
	"Peer to Peer" , // answer
	"CommonNetworkTopology"], // group
	["It is where every networked node is directly connected to every other networked node",
	"Mesh Topology" , // answer
	"CommonNetworkTopology"], // group
	["A nerfed version of another topology but these are highly flexible topologies that can take a variety of very different configurations",
	"PartialMesh Topology" , // answer
	"CommonNetworkTopology"], // group
	
	["refers to the operational units and their interconnections that realize the architectural specifications.",
	"Computer organization" , // answer
	"Definition"], // group
	["is a bunch of wires for connecting several components and communicating the information between those components.",
	"Bus" , // answer
	"Definition"], // group
	["it is used to store data and instructions.",
	"Memory" , // answer
	"Definition"], // group	
	
	["Its a bus where it carries the data from one system module to other",
	"Data bus" , // answer
	"Bus"], // group
	["It is a bus that is used to carry the address of source or destination of the data on the data bus",
	"Address Bus" , // answer
	"Bus"], // group
	["It is a bus that is used to control the access, processing and information transferring",
	"Control Bus" , // answer
	"Bus"], // group
	["It is used to connect peripheral devices like GPU",
	"Peripheral Component Interconnect" , // answer
	"Bus"], // group

	["It includes the clock and reset pins.",
	"System pins" , // answer
	"Pins"], // group
	["Includes 32 lines that are time multiplexed for addresses and data. ",
	"Address and data pins" , // answer
	"Pins"], // group
	["Controls the timing of transactions and provide coordination among initiators and targets.",
	"Interface control pins" , // answer
	"Pins"], // group
	["Pins that are not shared lines",
	"Arbitration pins" , // answer
	"Pins"], // group
	["Pins that it used to report parity and other errors.",
	"Error reporting pins" , // answer
	"Pins"], // group
	
	["PCI 32 bits have a bus speed of 33 MHz and operate at?",
	"132 MBps" , // answer
	"PCIBusTypes"], // group
	["PCI 64 bits have a bus speed of 33 MHz and operate at?",
	"264mbps" , // answer
	"PCIBusTypes"], // group
	["PCI 32 bits have a bus speed of 66 MHz and operate at",
	"512 mbps" , // answer
	"PCIBusTypes"], // group
	["PCI 64 bits have a bus speed of 66 MHz and operate at",
	"1 GBps" , // answer
	"PCIBusTypes"], // group

	["A cpu component where it specifies address for next read or write",
	"Memory Address Register" , // answer
	"CPUComponents"], // group
	["A cpu component where it Contains data to be written into or receives data read from memory",
	"Memory Buffer Register" , // answer
	"CPUComponents"], // group
	["A cpu component where it Stores the address of the next instruction to be executed.",
	"Program Counter" , // answer
	"CPUComponents"], // group
	["A cpu component where its Used for storing information at the time of execution by the user",
	"General Purpose Registers" , // answer
	"CPUComponents"], // group
	["A cpu component where it Stores instruction before decoding. ",
	"Instruction Register" , // answer
	"CPUComponents"], // group
	["A cpu component where it Decodes the instruction before execution.",
	"Instruction Decoder" , // answer
	"CPUComponents"], // group
	["A cpu component where It does all the arithmetic and logical computations.",
	"Arithmetic and Logic Unit" , // answer
	"CPUComponents"], // group
	["A cpu component where It Generates control signals to control every action inside the computer",
	"Control Unit" , // answer
	"CPUComponents"], // group
	
	["Procedure for an instruction execution one by one sequentially inside CPU is called ?",
	"Instruction cycle" , // answer
	"Definition"], // group
	["is mechanism of interrupting the current execution of a process.",
	"Interrupt" , // answer
	"Definition"], // group

	["is derived from the Greek term ethos which means character or custom",
	"Ethics" , // answer
	"Definition"], // group
	["is intertwined with customs and traditions believed in or adopted by a particular community.",
	"Ethics" , // answer
	"Definition"], // group
	["is a perception of what is correct or not, of right or wrong, that is usually adopted and used to guide peoples action",
	"Applied Ethics" , // answer
	"Definition"], // group
	["refers to the guiding precepts and norms that are adopted and applied to regulate and control the use of computers and its applications.",
	"Computer Ethics" , // answer
	"Definition"], // group
	
	["characterized by an explicit attempt by attackers to prevent or bar legitimate users of computers from availing themselves of computer services.",
	"Denial of service attack" , // answer
	"Abuses"], // group
	["involves unauthorized access to a computer, its files, and programs.",
	"Hacking" , // answer
	"Abuses"], // group
	["is sometimes called unsolicited commercial email, the Internet version of junk mail.",
	"Spamming" , // answer
	"Abuses"], // group
	["is a program that reproduces its own code by attaching itself to other executable files",
	"Virus" , // answer
	"Abuses"], // group
	["messages about free money, children in trouble and other items designed to grab your attention and get you to forward the message to everyone you know",
	"Internet hoaxes" , // answer
	"Abuses"], // group
	
	["In computing, emails and letters, your database, and your personal information are considered private",
	"Privacy Issues" , // answer
	"Issues"], // group
	["is concerned with the promotion of the welfare of the people",
	"Social Justice" , // answer
	"Issues"], // group
	["The right to freedom of expression is one of the constitutional rights guaranteed by the supreme law of the land.",
	"Free speech issues" , // answer
	"Issues"], // group
	
	["is an asset, and as such it can be bought, licensed, exchanged, or gratuitously given away like any form of property.",
	"Intellectual property" , // answer
	"Law"], // group
	["the act of using software without paying the appropriate license",
	"Software Piracy" , // answer
	"Law"], // group
	["occurs anytime that a person copies any written work and claims it as its own.",
	"Plagiarism", // answer
	"Law"], // group
	
	["declares that computer programs as non-patentable inventions but copyrightable.",
	"RA e Intellectual Property Code 8293" , // answer
	"RepublicAct"], // group
	["recognizes electronic signatures found in electronic documents as equivalent to signature on a written document. ",
	"RA E-Commerce Law 8792" , // answer
	"RepublicAct"], // group
	["defines internet and computer offenses and it aims to put users of the internet and computers in check by defining violations related to their use.",
	"RA Cybercrime Prevention 10175" , // answer
	"RepublicAct"], // group
	
	["The access to the whole or any part of a computer system without right.",
	"Illegal access" , // answer
	"CyberCrimeLaw"], // group
	["The interception made by technical means without right of any nonpublic transmission of computer data to, from, or within a computer system including electromagnetic emissions from a computer system carrying such computer data.",
	"Illegal interception" , // answer
	"CyberCrimeLaw"], // group
	["The intentional or reckless alteration, damaging, deletion, or deterioration of computer data, electronic document, or electronic data message, without right, including the introduction or transmission of viruses.",
	"Data Interference" , // answer
	"CyberCrimeLaw"], // group
	["The intentional alteration or reckless hindering or interference with the functioning of a computer or computer network",
	"System Interference" , // answer
	"CyberCrimeLaw"], // group

	["The input, alteration, or deletion of computer data without right resulting in inauthentic data",
	"Computer-related Forgery" , // answer
	"Forgery"], // group
	["The unauthorized input, alteration, or deletion of computer data or program or interference in the functioning of a computer system",
	"Computer-related Fraud" , // answer
	"Forgery"], // group
	["The intentional acquisition, use, misuse, transfer, possession, alteration or deletion of identifying information belonging to another",
	"Computer-related Identity Theft" , // answer
	"Forgery"], // group

	["The willful engagement, maintenance, control, or operation, directly or indirectly, of any lascivious exhibition of sexual organs or sexual activity, with the aid of a computer system, for favor or consideration",
	"Cybersex" , // answer
	"ThirdCategory"], // group
	["he unlawful or prohibited acts defined and punishable by the Anti-Child Pornography Act of 2009, committed through a computer system",
	"Child Pornography" , // answer
	"ThirdCategory"], // group
	["The transmission of commercial communication with the use of computer system which seek to advertise sell, or offer for sale products and services are prohibited",
	"Unsolicited Commercial Communications" , // answer
	"ThirdCategory"], // group
	["a published false statement that is damaging to a person's reputation; a written defamation.",
	"Libel" , // answer
	"ThirdCategory"], // group

	["is any program or file that is harmful to a computer user",
	"Malware" , // answer
	"Malware"], // group
	["is a malicious piece of executable code that propagates typically by attaching itself to a host document that will generally be an executable file.",
	"Virus" , // answer
	"Malware"], // group
	["Can send copies of itself to other machines over a network, and doesn't need any a host document",
	"Worms" , // answer
	"Malware"], // group
	["is a type of malware that disguises as legitimate software.",
	"Trojan" , // answer
	"Malware"], // group
	["is a method of flooding the internet with copies of the same message.",
	"Spamming" , // answer
	"Malware"], // group
	["are much the same as Trojans or worms, except that they open a backdoors on a computer, providing a network connection for hackers or other Malware to enter or for viruses or spam to be sent.",
	"Backdoors" , // answer
	"Malware"], // group
	[" It is designed to permit the other formation gathering malware to get the identity information from your computer without you realizing anything is going on.",
	"Rootkit" , // answer
	"Malware"], // group
	["The keylogger records everything you type on your PC to glean your log-in names, passwords, and other sensitive information, and send it on to the source of the keylogging program.",
	"Keylogger" , // answer
	"Malware"], // group
	["is a software that spies on you, tracking your internet activities to send advertising (adware) back to your system.",
	"Spyware" , // answer
	"Malware"], // group	


];



console.log("Midterm.. is bAdD");
console.log("--Maku Santiran");
var developermode = false;
var time_add = 7;

// No touching from below 
// the ids
var questionId = document.getElementById("q_id");
var trackerId = document.getElementById("title_id");
var choice1Id = document.getElementById("c1_id");
var choice2Id = document.getElementById("c2_id");
var choice3Id = document.getElementById("c3_id");
var choice4Id = document.getElementById("c4_id");
var wrongscoreid = document.getElementById("wrongscore_id");
var correctscoreid = document.getElementById("correctscore_id");
var showscoreid = document.getElementById("showscore_id");
var isplayingid = document.getElementById("isplaying_id");
var timerid = document.getElementById("timer_id");

// the classes
var question_class = document.getElementsByClassName("question");
var choice1_class = document.getElementsByClassName("choice1");
var choice2_class = document.getElementsByClassName("choice2");
var choice3_class = document.getElementsByClassName("choice3");
var choice4_class = document.getElementsByClassName("choice4");

// Audio

var crrct_audio = new Audio('files/sfx/crrct.wav');
var wrng_audio = new Audio('files/sfx/wrng.wav');
var bg_music = new Audio('files/sfx/bgmusic.mp3');
var fail = new Audio('files/sfx/fail.mp3');
var success = new Audio('files/sfx/success.mp3');

var bg_played = false;


bg_music.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);


var numbers = [];
var shuffled_question = [];
var grouped_answers = {};
var random_num = Math.floor(Math.random() * 3);
var random_1;
var random_2;
var random_3;
var random_4;
var interval;
var timer_interval;
var timer_val = 30;

var atquestion = 0;
var qamnt = 0;
var correctval = 0;
var wrongval = 0;
var deduction = 10;

var timestarted = false;
var clickable = true;


var element = new Image;
var devtoolsOpen = false;

element.__defineGetter__("id", function() {
	if (!developermode){
		devtoolsOpen = true; // This only executes when devtools is open.
		window.location.href = '...';
	}
});

setInterval(function() {
	devtoolsOpen = false;
	if (!developermode){
		console.log(element);
	}
}, 100);


function nextquestion(){
		choice1Id.className = " choice1";
		choice2Id.className = " choice2";
		choice3Id.className = " choice3";		
		choice4Id.className = " choice4";
		trackerId.innerHTML = "Question "+(atquestion+1)+" out of "+qamnt+"";
		atquestion += 1;
		if (qamnt < atquestion){
			timerid.innerHTML = "Succes! "+(timer_val)+" seconds left";
			showscoreid.className += " ygd";
			isplayingid.className += " isover";
			clickable = false;
			clearInterval(interval);
			clearInterval(timer_interval)
			success.play()
			bg_music.pause();
			return;	
		};
		clearInterval(interval);		
		randomize_choice(qamnt);
		questionId.innerHTML = test[shuffled_question[atquestion]][0];
		clickable = true;		
			
};

function deduct_Timer(){
	timer_val = timer_val - 1;
	timerid.innerHTML = ""+(timer_val)+" seconds left";
	
	if (timer_val <= 0){
			timerid.innerHTML = "Failure";
			showscoreid.className += " ygd";
			isplayingid.className += " isover";
			clickable = false;
			clearInterval(interval);
			clearInterval(timer_interval)
			bg_music.pause();
			fail.play();
			return;	
	}
}


function chckanswer(v){
	if (clickable){
		if (v.innerHTML == test[shuffled_question[atquestion]][1]){
			crrct_audio.currentTime = 0
			v.className += " correct";
			clickable = false;
			correctval += 1;
			correctscoreid.innerHTML = correctval;
			crrct_audio.play();
			timer_val += time_add;
			timerid.innerHTML = "+"+(time_add)+" seconds"
			deduction = (time_add-2);
			
			interval = setInterval(nextquestion ,1000);
			if (bg_played == false){
				timestarted = true
				bg_played = true;
				timer_val = 30;
				timer_interval = setInterval(deduct_Timer ,1000);
				bg_music.play();
			}
		}else{
			if (v.classList.contains("wrong") == false){
				wrng_audio.currentTime = 0
				wrongval += 1;
				wrongscoreid.innerHTML = wrongval;
				v.className += " wrong";
				wrng_audio.play();
				
				if (bg_played){
					v.innerHTML = "-"+(deduction)+""
					timer_val -= deduction;
					deduction += (time_add-2);
					timerid.innerHTML = ""+(timer_val)+" seconds left";
				};
			};
		};
	};
};


function counthowmany(){
	numbers[qamnt] = qamnt;
	qamnt += 1;
	
	if (test[qamnt]!=null){
		counthowmany();
	};
};

function shuffleArray(array) { 
   for (var i = array.length - 1; i > 0; i--){  
    
       // Generate random number  
       var j = Math.floor(Math.random() * (i + 1)); 
                    
       var temp = array[i]; 
       array[i] = array[j]; 
       array[j] = temp; 
   };
        
   return array; 
};


function get_Grouped_Ans(name){
	
	for(var i = grouped_answers[name].amnt - 1; i >= 0; --i){
		console.log(i)
		console.log(grouped_answers[name][i], grouped_answers[name].amnt);
		console.log("")
	}
}

function group_Array(array){

	for(var i = array.length - 1; i >= 0; i--){
		var existed = true;

		if (grouped_answers[array[i][2]] == null){
			grouped_answers[array[i][2]] = new Array([array[i][0], array[i][1]]);
			grouped_answers[array[i][2]].amnt = 1;
			existed = false;
		};

		if (existed){
			grouped_answers[array[i][2]].push([array[i][0], array[i][1]]) 
			grouped_answers[array[i][2]].amnt++;
		};
	};	
	
};

function randomize_choice(){


	var current_ans = test[shuffled_question[atquestion]];	
	var groupdata = grouped_answers[group];
	var group = current_ans[2]
	var amnt = grouped_answers[group].amnt;
	var random_array = Math.floor(Math.random() * amnt);

	var random_1 = grouped_answers[group][random_array][1];
	random_array = Math.floor(Math.random() * amnt);
	
	var random_2 = grouped_answers[group][random_array][1];
	random_array = Math.floor(Math.random() * amnt);
	
	var random_3 = grouped_answers[group][random_array][1];
	random_array = Math.floor(Math.random() * amnt);
	
	var random_4 = grouped_answers[group][random_array][1];
	var random_num = Math.floor(Math.random() * 4);
	
	if (random_num == 0){
		random_1 = current_ans[1];
	}else if(random_num == 1){
		random_2 = current_ans[1];
	}else if(random_num == 2){
		random_3 = current_ans[1];
	}else if(random_num == 3){
		random_4 = current_ans[1];
	}
	
	choice1Id.innerHTML = random_1;
	choice2Id.innerHTML = random_2;
	choice3Id.innerHTML = random_3;
	choice4Id.innerHTML = random_4;
}

bg_music.volume = 0.2;

counthowmany();
shuffled_question = shuffleArray(numbers);
group_Array(test);
randomize_choice(qamnt);
qamnt -= 1;

trackerId.innerHTML = "Choose the correct answer";
timerid.innerHTML = "Panic run >:)";


correctscoreid.innerHTML = correctval;
wrongscoreid.innerHTML = wrongval;
questionId.innerHTML = test[shuffled_question[atquestion]][0];
