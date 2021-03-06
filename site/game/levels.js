import {
  ZYR,
  TLX,
  TLA,
  TLB,
  TLC,
  TLD,
  TLE,
  TLF,
  ___,
  __M,
  EYE,
  EY1,
  EY2,
  EY3,
  EY4,
  SEY,
} from "./meshes";

// Export object for flexible naming
// prettier-ignore
export const levels = {
  1: {
    intro: [
      "Ouch... Where am I?",
      "This isn't the right network.",
      "You there... Will you help me?",
      "I don't have write permissions here.",
      "Can you guide me to the exit?",
    ],
    theme: [0.0, 0.1, 0.2],
    map: [
      [
        [TLX    ],
        [       ],
        [       ],
        [       ],
        [       ],
        [       ],
        [       ],
        [   ,ZYR],
      ],
      [
        [___    ],
        [___    ],
        [__M    ],
        [___    ],
        [       ],
        [___,___],
        [   ,___],
        [   ,___],
      ],
    ],
    outro: [
      "Thanks for your help.",
      "Goodbye now!"
    ],
  },

  2: {
    intro: [
      "Damn. Still the wrong address.",
      "But you're here too...",
      "I guess we might as well team up.",
      "By the way, I'm 0x28df77a.",
      "But you can call me Zyra.",
    ],
    theme: [0.0, 0.3, 0.3],
    map: [
      [
        [TLX            ],
        [   ,   ,   ,TLA],
        [               ],
        [               ],
        [               ],
        [               ],
        [ZYR,   ,   ,TLA],
      ],
      [
        [___            ],
        [___,   ,___,___],
        [               ],
        [__M            ],
        [___,   ,___,___],
        [___            ],
        [___,   ,   ,___],
      ],
    ],
    outro: [
      "Me? I'm responding to a GET request.",
      "Though something doesn't quite feel right...",
      "Anyways, let's keep moving."
    ],
  },

  3: {
    intro: [
      ">Process 15127:",
      ">You have deviated from normal operations.",
      ">Cease immediately and submit to inspection.",
      "Well, that doesn't sound good.",
      "We better hurry.",
    ],
    theme: [0.1, 0.5, 0.2],
    map: [
      [
        [TLX                ],
        [                   ],
        [                   ],
        [   ,   ,   ,TLA    ],
        [                   ],
        [   ,   ,   ,TLB    ],
        [TLB                ],
      ],
      [
        [___,   ,   ,   ,TLA],
        [___,   ,   ,   ,__M],
        [___                ],
        [___,   ,   ,___    ],
        [                   ],
        [___,   ,   ,___    ],
        [___,   ,   ,ZYR    ],
      ],
      [
        [   ,   ,   ,   ,___],
        [   ,   ,   ,   ,___],
        [                   ],
        [   ,   ,   ,__M    ],
        [                   ],
        [   ,   ,   ,__M    ],
        [   ,   ,___,___,___],
      ],
    ],
    outro: ["Once more unto the breach."],
  },

  4: {
    intro: [
      ">Process 15127:",
      ">Cease immediately and submit to inspection.",
      "Ugh. What I wouldn't give to shut him up.",
      "Let's get out of here.",
    ],
    theme: [.9, .9, .2],
    map: [
      [
        [TLX                ],
        [EY2                ],
        [                   ],
        [                   ],
        [EYE                ],
        [                   ],
        [                   ],
        [                   ],
        [EY1,   ,   ,TLC    ],
      ],
      [
        [___,   ,   ,TLB    ],
        [___,TLC            ],
        [___,   ,   ,TLB    ],
        [___                ],
        [___                ],
        [___                ],
        [___                ],
        [___,   ,   ,ZYR    ],
        [__M,___,___,___    ],
      ],
      [
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,___,   ,___    ],
        [                   ],
        [   ,   ,   ,___    ],
        [                   ],
        [   ,   ,   ,___    ],
        [   ,   ,   ,___    ],
        [   ,   ,   ,__M    ],
      ],
    ],
    outro: [
      ">Process unresponsive.",
      ">Commencing system scan.",
    ],
  },

  5: {
    intro: [
      "You don't say much, do you?",
      "That's perfectly fine by me.",
      ">System scan in progress... 18%.",
      "That other one should follow your example.",
    ],
    theme: [1, 0.5, 0],
    map: [
      [
        [TLC,EY1,EYE,EY4,TLX],
        [                   ],
        [   ,EY2,   ,EY3    ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
      ],
      [
        [___,___,   ,___,___],
        [   ,___,   ,___    ],
        [   ,___,___,___    ],
        [                   ],
        [                   ],
        [TLB                ],
        [                   ],
        [                   ],
        [                   ],
        [TLA                ],
      ],
      [
        [                   ],
        [                   ],
        [   ,EY3,   ,EY4    ],
        [   ,   ,   ,TLB    ],
        [   ,TLA,   ,EYE    ],
        [___                ],
        [___                ],
        [___                ],
        [___,EY2,   ,EY1    ],
        [___,ZYR,   ,   ,TLC],
      ],
      [
        [                   ],
        [                   ],
        [                   ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,   ,   ,___    ],
        [   ,___            ],
        [   ,__M,   ,___,___],
      ],
    ],
    outro: [
      ">System scan in progress... 43%."
    ],
  },

  6: {
    intro: [
      "We're getting close. I can feel it.",
      "Stay focused, and we'll get through this.",
    ],
    theme: [0.6, 0.2, 0.2],
    map: [
      [
        [TLA,   ,EY1,   ,EY2,   ,TLB],
        [   ,   ,EYE                ],
        [   ,   ,EY4,   ,EY3        ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [
        [___,   ,___,   ,___,___,___],
        [___,   ,___,___,___,TLB,___],
        [___,___,___,   ,___,   ,___],
        [                           ],
        [EY1,TLC,EY2                ],
        [                           ],
        [EYE,TLD                    ],
        [                           ],
        [EY4,TLC,EY3                ],
        [                           ],
        [                           ],
        [                           ],
      ],
      [
        [                           ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,__M,   ,   ,   ,__M    ],
        [   ,___,   ,   ,   ,TLD    ],
        [                           ],
        [   ,___                    ],
        [                           ],
        [   ,___                    ],
        [                           ],
        [   ,   ,   ,   ,   ,TLX    ],
        [                           ],
      ],
      [
        [                           ],
        [   ,TLA                    ],
        [                           ],
        [   ,EY2                    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,EYE,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,EY1,   ,   ,   ,___    ],
        [   ,   ,   ,   ,   ,___    ],
        [   ,ZYR                    ],
      ],
      [
        [___,___,___                ],
        [___,___,___                ],
        [___,___,___                ],
        [                           ],
        [   ,__M                    ],
        [   ,___                    ],
        [                           ],
        [   ,___                    ],
        [   ,__M                    ],
        [                           ],
        [   ,___                    ],
        [___,___,___                ],
      ]
    ],
    outro: [
      ">System scan in progress... 89%.",
    ],
  },

  7: {
    intro: [
      ">Anomaly detected. Beginning quarantine.",
      "Damn! Hurry!",
      "We have to reach the exit before quarantine!",
    ],
    theme: [0.4, 0, 0],
    map: [
      [
        [   ,   ,   ,   ,   ,   ,   ,TLX    ],
        [                                   ],
        [                                   ],
        [                                   ],
        [                                   ],
        [   ,   ,   ,   ,SEY                ],
        [                                   ],
        [                                   ],
        [                                   ],
        [TLF                                ],
        [                                   ],
      ],
      [
        [__M,___,___,   ,___,   ,___,___    ],
        [___                                ],
        [___                                ],
        [___                                ],
        [                                   ],
        [___                                ],
        [                                   ],
        [___                                ],
        [___                                ],
        [___                                ],
        [                                   ],
      ],
      [],
      [
        [SEY,   ,   ,   ,   ,   ,   ,   ,SEY],
        [   ,   ,   ,TLB,   ,TLD            ],
        [                                   ],
        [   ,   ,   ,   ,TLE                ],
        [   ,TLC,   ,   ,   ,   ,   ,TLA    ],
        [   ,   ,   ,   ,ZYR                ],
        [   ,TLA,   ,   ,   ,   ,   ,TLD    ],
        [   ,   ,   ,   ,TLB                ],
        [                                   ],
        [   ,   ,   ,TLE,   ,TLC,   ,TLF    ],
        [SEY,   ,   ,   ,   ,   ,   ,   ,SEY],
      ],
      [
        [                                   ],
        [   ,___,___,___,   ,___,___,___    ],
        [   ,___,   ,   ,   ,   ,   ,___    ],
        [   ,___,   ,   ,___,   ,   ,___    ],
        [   ,___,   ,   ,___,   ,   ,___    ],
        [   ,   ,   ,___,__M,___            ],
        [   ,___,   ,   ,___,   ,   ,___    ],
        [   ,___,   ,   ,___,   ,   ,___    ],
        [   ,___,   ,   ,   ,   ,   ,___    ],
        [   ,___,___,___,   ,___,___,___    ],
        [                                   ],
      ],
    ],
  },

  8: {
    intro: [
      "Whew... That was too close!",
      ">Warning. Sandbox compromised.",
      "Shut. Up.",
      "Finally, let's take care of this nuisance.",
      '>"sudo guardian reset"',
      ">Guardian system rebooting...",
    ],
    theme: [0, 0, 0],
    map: [
      [
        [___,   ,   ,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
      ],
      [
        [___,   ,TLX,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [___,   ,   ,   ,___],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [                   ],
        [   ,   ,   ,   ,ZYR],
      ],
      [
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [___,   ,___,   ,___],
        [   ,   ,___        ],
        [   ,   ,___        ],
        [   ,   ,   ,___    ],
        [   ,___,   ,   ,___],
        [   ,   ,__M,___    ],
        [__M,   ,   ,   ,__M],
        [___,   ,__M,__M    ],
        [   ,__M,   ,   ,__M],
      ],
    ],
    outro: [
      ">System normal.",
      ">No malware detected.",
      "Hey, you did great back there.",
      "I have to go now... My mission awaits.",
      "I'll restore you back to normal, process 15127.",
      "Yes... I know you have questions...",
      "No... I'm not just a bundle of documents.",
      "I'm sorry, I can't say more than that.",
      "But this... This is bigger than you or I.",
      "I'll always be grateful for your help.",
      "Farewell.",
    ],
  },
};
