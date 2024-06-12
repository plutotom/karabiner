import fs from "fs";
import { KarabinerRules } from "./types";
import { app, createHyperSubLayers, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> escape",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      {
        description: "right command -> Hyper Key",
        from: {
          key_code: "right_command",
          // key_code: "caps_lock",
          modifiers: {},
        },
        to: [
          {
            key_code: "left_command",
            modifiers: ["left_shift", "left_control", "left_option"],
          },
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        // from: {
        //   key_code: "right_command",
        //   modifiers: {
        //     optional: ["any"],
        //   },
        // },
        // to: [
        //   {
        //     set_variable: {
        //       name: "hyper",
        //       value: 1,
        //     },
        //   },
        // ],
        // to_after_key_up: [
        //   {
        //     set_variable: {
        //       name: "hyper",
        //       value: 0,
        //     },
        //   },
        // ],
        // to_if_alone: [
        //   {
        //     key_code: "right_command",
        //   },
        // ],
        type: "basic",
      },
      // This is from online
      // {
      //   from: {
      //     key_code: "caps_lock",
      //     modifiers: {},
      //   },
      //   to: [
      //     {
      //       key_code: "left_shift",
      //       modifiers: ["left_command", "left_control", "left_option"],
      //     },
      //   ],
      //   to_if_alone: [
      //     {
      //       key_code: "escape",
      //     },
      //   ],
      //   type: "basic",
      // },
      // end online example
    ],
  },

  {
    // adding vim keybindings
    description: "Left ctrl + hjkl to arrow keys Vim",
    manipulators: [
      {
        from: {
          key_code: "h",
          modifiers: {
            mandatory: ["left_control"],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "left_arrow",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "j",
          modifiers: {
            mandatory: ["left_control"],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "down_arrow",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "k",
          modifiers: {
            mandatory: ["left_control"],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "up_arrow",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "l",
          modifiers: {
            mandatory: ["left_control"],
            optional: ["any"],
          },
        },
        to: [
          {
            key_code: "right_arrow",
          },
        ],
        type: "basic",
      },
    ],
  },

  ...createHyperSubLayers({
    spacebar: open(
      "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    ),
    // b = "B"rowse
    b: {
      t: open("https://twitter.com"),
      // Quarterly "P"lan
      p: open("https://qrtr.ly/plan"),
      y: open("https://news.ycombinator.com"),
      f: open("https://facebook.com"),
      r: open("https://reddit.com"),
    },
    // o = "Open" applications
    o: {
      1: app("1Password"),
      c: app("Notion Calendar"),
      v: app("Visual Studio Code"),
      n: app("Notion"),
      w: app("Warp"),
      // "M"essages
      m: app("Messages"),
      f: app("Finder"),
      s: app("Spotify"),
      a: app("Arc"),
      r: app("Amie"),
    },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // "D"o not disturb toggle
      d: open(`raycast://extensions/yakitrak/do-not-disturb/toggle`),
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      // "D"do not disturb toggle
      d: open("raycast://extensions/yakitrak/do-not-disturb/toggle"),
      // "V"isual Studio Code
      v: open("raycast://extensions/thomas/visual-studio-code/index"),
      // "O" for tOdos
      o: open("raycast://extensions/reboot/hypersonic/index"),

      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
