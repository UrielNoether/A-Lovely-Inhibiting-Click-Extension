import { toastsManager } from "zois-core/popups";
import { messagesManager } from "zois-core/messaging";
import { setRemoteControlIsInteracting } from "./remoteControl";
import { chatSendChangelog } from "@/index";
import { modStorage, SavedItem } from "@/modules/storage";


interface Command {
    name: string
    description: string
    args?: string
    action: (text: string) => void
}

const commands: Command[] = [
    {
        name: "help",
        description: "Open ALICE help menu",
        action: (text: string) => {
            let msg = "<p style='padding: 0.4vw; font-family: Comfortaa, sans-serif;'><b>ALICE</b> commands:</p>";
            for (const c of commands) {
                msg += `<div style='padding: 0.4vw; font-family: Comfortaa, sans-serif;'><b>/alice ${c.name}</b> ${c.args ? `${c.args}` : ""} - <i>${c.description}</i></div>`;
            }
            messagesManager.sendLocal(msg);
        }
    },
    {
        name: "changelog",
        description: "Show latest ALICE changelog",
        action: chatSendChangelog
    },
    {
        name: "safeword",
        description: "Emergency safeword command which resets all ALICE settings",
        action: (text: string) => {
            Object.keys(modStorage.deviousPadlock.itemGroups).forEach((k: AssetGroupItemName) => {
                modStorage.deviousPadlock.itemGroups[k] = Object.fromEntries(
                    ["owner", "item"].map((n) => [n, modStorage.deviousPadlock.itemGroups[k][n]])
                ) as {
                    item: SavedItem;
                    owner: number;
                };
            });
            
            messagesManager.sendLocal("<div style='color: #ff4444; font-weight: bold;'>ALICE safeword activated! All settings have been reset.</div>");
            
            toastsManager.success({
                title: "Safeword Activated",
                message: "All ALICE settings have been reset to defaults",
                duration: 4500
            });
            syncStorage();
        }
    },
];

function getArgs(text: string): string[] {
    return text.split(",").map((arg) => arg.trim());
}

export function loadCommands(): void {
    CommandCombine([
        {
            Tag: "alice",
            Description: "Execute ALICE command",
            Action: (text) => {
                const commandName = text.split(" ")[0];
                const commandText = text.split(" ").slice(1).join(" ");
                const command = commands.find((c) => c.name === commandName);

                if (command) {
                    command.action(commandText);
                } else {
                    messagesManager.sendLocal(
                        "Unknown command, use <b>/alice help</b> to view a list of all available commands."
                    );
                }
            }
        }
    ]);

}
