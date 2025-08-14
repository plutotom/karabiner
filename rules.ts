import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, window, shell } from "./utils";

const rules: KarabinerRules[] = [
  {
    description: "Home row mods - ctrl, opt, shift, command",
    manipulators: [
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_option", "left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_option", "left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_command", "left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "a",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "a",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "a",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_control",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "s",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "s",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "s",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_option",
            modifiers: ["left_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "d",
            },
            {
              key_code: "f",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "d",
          },
          {
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_command",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "f",
            },
            {
              key_code: "d",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "f",
          },
          {
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            key_code: "left_command",
            modifiers: ["left_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "a",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "a",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "a",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_control",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "s",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "s",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "s",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_option",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "d",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "d",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "d",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_shift",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "f",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              halt: true,
              key_code: "f",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "f",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "left_command",
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "k",
            },
            {
              key_code: "l",
            },
            {
              key_code: "semicolon",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command", "right_option", "right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_option", "right_control"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_shift",
            modifiers: ["right_command", "right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
        },
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command", "right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_option"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "semicolon",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "semicolon",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "semicolon",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_control",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_command"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "l",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "l",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "l",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_option",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "k",
            },
            {
              key_code: "j",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "k",
          },
          {
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_command",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          simultaneous: [
            {
              key_code: "j",
            },
            {
              key_code: "k",
            },
          ],
          simultaneous_options: {
            key_down_order: "strict",
          },
        },
        to_if_alone: [
          {
            key_code: "j",
          },
          {
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            key_code: "right_command",
            modifiers: ["right_shift"],
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "semicolon",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "semicolon",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "semicolon",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_control",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "l",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "l",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "l",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_option",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "k",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "k",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "k",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_shift",
          },
        ],
        type: "basic",
      },
      {
        from: {
          key_code: "j",
        },
        to_delayed_action: {
          to_if_canceled: [
            {
              key_code: "j",
            },
          ],
          to_if_invoked: [
            {
              key_code: "vk_none",
            },
          ],
        },
        to_if_alone: [
          {
            halt: true,
            key_code: "j",
          },
        ],
        to_if_held_down: [
          {
            halt: true,
            key_code: "right_command",
          },
        ],
        type: "basic",
      },
    ],
  },
  {
    // make escape key work as caps lock
    description: "Escape to Caps Lock",
    manipulators: [
      {
        from: {
          key_code: "caps_lock",
          modifiers: {},
        },
        to: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "right command -> Hyper Key",
        from: {
          key_code: "right_command",
          modifiers: { optional: ["any"] },
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: [
              "left_control",
              "left_option",
              "left_command",
              "left_shift",
              "any",
            ],
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

  {
    description: "Hyper Key + a",
    manipulators: [
      {
        to: [
          {
            shell_command:
              "open raycast://extensions/raycast/raycast-ai/ai-chat",
          },
        ],
        description: "Open raycast://extensions/raycast/raycast-ai/ai-chat",
        type: "basic",
        from: {
          key_code: "a",
          modifiers: {
            optional: ["any"],
          },
        },
        conditions: [
          {
            type: "variable_if",
            name: "hyper",
            value: 1,
          },
        ],
      },
    ],
  },
  ...createHyperSubLayers({
    // b = "B"rowse
    b: {
      // Quarterly "P"lan
      p: open("https://mxstbr.com/cal"),
      y: open("https://news.ycombinator.com"),
      f: open("https://facebook.com"),
      r: open("https://reddit.com"),
      h: open("https://hashnode.com/draft"),
    },
    // o = "Open" applications
    o: {
      1: app("1Password"),
      c: app("Notion Calendar"),
      g: app("ChatGPT"),
      v: app("Cursor"),
      n: app("Notion"),
      w: app("Warp"),
      // "M"essages
      m: app("Messages"),
      // O"B"sidian
      b: app("Obsidian"),
      f: app("Finder"),
      // "i"Message
      i: app("Texts"),
      p: app("Spotify"),
      // "W"hatsApp has been replaced by Texts
      l: open(
        "raycast://extensions/stellate/mxstbr-commands/open-mxs-is-shortlink"
      ),
    },

    // w = "Window"
    w: {
      semicolon: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      y: window("previous-display"),
      o: window("next-display"),
      k: window("top-half"),
      j: window("bottom-half"),
      h: window("left-half"),
      l: window("right-half"),
      f: window("maximize"),
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      // Note: No literal connection. Both f and n are already taken.
      m: {
        description: "Window: Forward",
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      d: {
        description: "Window: Next display",
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_control", "right_option", "right_command"],
          },
        ],
      },
    },

    // s = "System"
    s: {
      // "F"inder
      // f: app("Finder"),
      // Search Finder
      f: open("raycast://extensions/raycast/file-search/search-files"),
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
      // p: open("raycast://extensions/thomas/spotify-controls/playPause"),
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
      // "D"do not disturb toggle
      d: open("raycast://extensions/yakitrak/do-not-disturb/toggle"),
      // "V"isual Studio Code
      v: open("raycast://extensions/thomas/visual-studio-code/index"),
      // "S"pelling
      s: open("raycast://ai-commands/fix-spelling-and-grammar"),

      1: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: open(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
      n: open("raycast://extensions/raycast/raycast-notes/raycast-notes"),
    },
  }),
  {
    description: "Change Backspace to Spacebar when Minecraft is focused",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "delete_or_backspace",
        },
        to: [
          {
            key_code: "spacebar",
          },
        ],
        conditions: [
          {
            type: "frontmost_application_if",
            file_paths: [
              "^/Users/mxstbr/Library/Application Support/minecraft/runtime/java-runtime-gamma/mac-os-arm64/java-runtime-gamma/jre.bundle/Contents/Home/bin/java$",
            ],
          },
        ],
      },
    ],
  },
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
