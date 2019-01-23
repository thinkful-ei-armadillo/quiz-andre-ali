'use strict';

const STORE = [
  {
    question: 'Which of these things did Kanye West NOT say?',
    answer: [
      'Why you so paranoid? Don\'t be so paranoid.', 
      'On the bathroom wall I wrote \'I\'d rather argue with you than be with someone else.',
      'Slavery wasn\'t a choice.',
      'I know I act a fool but I promise you I’m going back to school.'
    ],
    validAnswer:'Slavery wasn\'t a choice.',
    correctGif: 'https://media.giphy.com/media/tZqHBmFpCg0VeXm1Em/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/3o7TKsMrLzh993NPsA/giphy.gif',
    correctAlt: 'Kanye West dancing awkwardly in large costume',
    incorrectAlt: 'Pixelated Kanye West is annoyed while Kim Kardashian crys'

  },
  {
    question: 'On Pusha T\'s 2018 album, DAYTONA, which of the following songs was the designated diss track towards Drake for allegedly using ghost writers?',
    answer: [
      'The Games We Play',
      'Santeria',
      'If You Know You Know',
      'Infrared'
    ],
    validAnswer:'Infrared',
    correctGif: 'https://media.giphy.com/media/3ohc14V1xrXUVLm2KQ/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/26vUDuujEFTAYHeeY/giphy.gif',
    correctAlt: 'Pusha T points at you and is presumably impressed',
    incorrectAlt: 'Drake throws his hands up signaling he doesn\'t know what to say'
 },
 {
    question: 'Which musical acts will perform at the 2019 Super Bowl halftime show?',
    answer: [
     'Drake, Janelle Monae, Dua Lipa',
     'Maroon 5, Travis Scott, Big Boi',
     'Ariana Grande, Kodak Black, Young Thug',
     'Imagine Dragons, The Weeknd, Khalid'
   ],
   validAnswer:'Maroon 5, Travis Scott, Big Boi',
   correctGif: 'https://media.giphy.com/media/XSCpzXHSszfna/giphy.gif',
   incorrectGif: 'https://media.giphy.com/media/3ktKhFjx1RY30hdSDe/giphy.gif',
   correctAlt: 'Adam Levine sits in large chair and is impressed',
   incorrectAlt: 'A GIF captioned, "That was a really bad answer"'
 },
 {
   question: 'J. Cole\'s track, "1985", off K.O.D is a negative commentary on the popularization of trap and mumble rap aimed specifically at which of these newer artists?',
   answer: [
     'Lil Uzi Vert',
     'Lil Yachty',
     'Lil Xan',
     'Lil Pump'
   ],
   validAnswer: 'Lil Pump',
   correctGif: 'https://media.giphy.com/media/wWdzsqTJlaFOw/giphy.gif',
   incorrectGif: 'https://media.giphy.com/media/11yTmjS82W68Qo/giphy.gif',
   correctAlt: 'J. Cole and friend do a small celebration dance while holding champagne glasses',
   incorrectAlt: 'GIF of J. Cole performing with a caption "nooOoooO"'
 },
 {
   question: 'The American hip hop trio, Migos, is composed of which three rappers?',
   answer: [
      'Quavo, Offset, Takeoff',
      'Meechy Darko, Zombie Juice, Erick the Architect',
      'Tyler The Creator, Earl Sweatshirt, Taco',
      'Action Bronson, Chance The Rapper, Danny Brown'
  ],
   validAnswer:'Quavo, Offset, Takeoff',
   correctGif: 'https://media.giphy.com/media/2UH4koxkgC1k74eReU/giphy.gif',
   incorrectGif: 'https://media.giphy.com/media/3o7bufK6apwGO1v3na/giphy.gif',
   correctAlt: 'Rap trio Migos dance in Soul Train themed outfits',
   incorrectAlt: 'Rap trio Migos fold their arms confrontationally'

  },
  {
    question: 'The Pulitzer Prize in Music was awarded for the first time in history in a genre outside classical or jazz to which of these artists?',
    answer: [
	    'Jay-Z',
      'Tupac',
      'Kendrick Lamar',
	    'Dr. Dre'
	
    ],
    validAnswer: 'Kendrick Lamar',
    correctGif: 'https://media.giphy.com/media/3ohryqbgGHTSSHLlhm/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/3o7btTV6kjvYgEaUqA/giphy.gif',
    correctAlt: 'Kendrick waves an award in the sky to commend you for getting it right!',
    incorrectAlt: 'DAMN. K Dot is disappointed you didn\'t get it'
  },
    
  
  {
    question: 'Reebok cut off sponsorship ties with Rick Ross after which of the following lyrics?',
    answer: [
	    'Got a hundred bottles comin\’, you don’t even know it', 
	    'I\’m turned up every day, you don\’t even know it',
	    'This a thousand dollar pair of shoes, you don\’t even know it',
	    'Put Molly all in her champagne, she ain\'t even know it'
   ],
    validAnswer:'Put Molly all in her champagne, she ain\'t even know it',
    correctGif: 'https://media.giphy.com/media/10yYkvvidPBo0U/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/kQ4VTSbfJRWFy/giphy.gif',
    correctAlt: 'Aziz Ansari smiles because you got it right, however somewhat uncomfortable.',
    incorrectAlt: 'Rick Ross close up as he pauses nervously to stare off into the distance'
  },
  {
    question:'Which of these expressions is DJ Khaled\’s most prominent catch phrase?',
    answer: [
	'Another One',
	'DJ KHALED!',
	'We the best music',
	'All of the options are heavily repeated.'
     ],
    validAnswer:'All of the options are heavily repeated.',
    correctGif: 'https://media.giphy.com/media/l3vR8ppV86TPECpZC/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/AavB3fp8TMsIU/giphy.gif',
    correctAlt: 'DJ Khaled reminds you to keep winning for more success!',
    incorrectAlt: 'You got it wrong and DJ Khaled reminds you to not play yourself'
  },
  {
    question: 'Which of these celebrities has not dated Drake?',
    answer: [
      'Amber Rose',
	    'Bella Hadid',
	    'Rihanna',
	    'Jennifer Lopez'
  ],
    validAnswer: 'Amber Rose',
    correctGif: 'https://media.giphy.com/media/3oz8xYlsTbxUTSqAdq/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy.gif',
    correctAlt: 'Drake laughs and looks down because you got it!',
    incorrectAlt: 'Drake is upset crying on a cloud, because you did not get it'
 },
 {
    question: 'Which 2018 motion picture soundtrack was composed by Kendrick Lamar',
    answer: [
  'BlackKkKlansman',
  'Black Panther',
	'Venom',
	'Isle of Dogs'
	
  ],
    validAnswer: 'Black Panther',
    correctGif: 'https://media.giphy.com/media/l0Iy182oFfNqwFGcU/giphy.gif',
    incorrectGif: 'https://media.giphy.com/media/xUPGcvcJ0nnWsT3zvq/giphy.gif',
    correctAlt: 'Kendrick praises you and passes you the Grey Poupon',
    incorrectAlt: 'Michael B. Jordan is ready to attack you for getting this one wrong'
  } ];
