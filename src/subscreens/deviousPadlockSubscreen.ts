import { BaseSubscreen } from "zois-core/ui";
//import icon from "@/images/settings-devious-padlock.png";
import icon from "@/images/devious-padlock.png";
import { modStorage, syncStorage, SavedItem } from "@/modules/storage";
import { PutPadlockMinimumRole } from "@/modules/deviousPadlock";
import { toastsManager } from "zois-core/popups";


const putPadlockMinimumRolesNames = {
    [PutPadlockMinimumRole.PUBLIC]: "Public",
    [PutPadlockMinimumRole.FRIEND]: "Friend",
    [PutPadlockMinimumRole.WHITELIST]: "Whitelist",
    [PutPadlockMinimumRole.LOVER]: "Lover",
    [PutPadlockMinimumRole.OWNER]: "Owner"
};

export class DeviousPadlockSubscreen extends BaseSubscreen {
    get name(): string {
        return "Permanent Padlock";
    }

    get buttonText(): string {
        return "Permanent Padlock";
    }

    get buttonIcon(): string {
        return icon;
    }

    load(): void {
        super.load();
        this.createCheckbox({
            text: "Enable the padlock. WARNING! Checking this box cannot be undone!",
            x: 100,
            y: 300,
            isChecked: modStorage.deviousPadlock.state,
            isDisabled: modStorage.deviousPadlock.state,
            onChange: (checked: boolean) => {
                if (checked) {
                    modStorage.deviousPadlock.state = true;
                    syncStorage(); 
                    
                    this.updateCheckbox({
                        isDisabled: true,
                        isChecked: true
                    });
                }
            }
        });

        this.createText({
            text: "This padlock is designed such a way that there is absolutely no way to remove it, except through unlocking by either the owner of the padlock (the person that placed it) or any of the players listed as also having the keys.",
            x: 900,
            y: 450,
            width: 800,
            withBackground: true,
            padding: 2
        });

        this.createButton({
            text: "Emergency Reset",
            anchor: "bottom-right",
            x: 80,
            y: 70,
            padding: 3,
            width: 600,
            icon: "Icons/ServiceBell.png",
            isDisabled: () => Player.GetDifficulty() !== 0,
            onClick: () => {
                Object.keys(modStorage.deviousPadlock.itemGroups).forEach((k: AssetGroupItemName) => {
                    modStorage.deviousPadlock.itemGroups[k] = Object.fromEntries(
                        ["owner", "item"].map((n) => [n, modStorage.deviousPadlock.itemGroups[k][n]])
                    ) as {
                        item: SavedItem
                        owner: number
                    };
                });
                toastsManager.success({
                    message: "Devious padlocks configurations have been successfully reset",
                    duration: 4500
                });
            }
        });
    }
}
