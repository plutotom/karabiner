import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Escape -> Caps Lock",
        from: {
          key_code: "escape",
        },
        to: [
          {
            key_code: "caps_lock",
          },
        ],
        type: "basic",
      },
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
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
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
            key_code: "right_command",
          },
        ],
        type: "basic",
      },
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
      e: app("Superhuman"),
      n: app("Notion"),
      t: app("Warp"),
      // "M"essages
      m: app("Messages"),
      f: app("Finder"),
      p: app("Spotify"),
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
    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
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
      n: open("raycast://script-commands/d1d5f97ad62a6692d70fc17da0a71157"),
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      ),
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      h: open(
        "raycast://extensions/raycast/clipboard-history/clipboard-history"
      ),
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
