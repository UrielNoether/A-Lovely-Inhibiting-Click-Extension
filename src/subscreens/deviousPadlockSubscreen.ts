import { BaseSubscreen } from "zois-core/ui";
//import icon from "@/images/settings-devious-padlock.png";
import icon from "@/images/devious-padlock.png";
import { modStorage, SavedItem } from "@/modules/storage";
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
            text: "Enable the padlock. WARNING! Once enabled, it is enabled permanently!",
            x: 100,
            y: 300,
            isChecked: modStorage.deviousPadlock.state,
            isDisabled: modStorage.deviousPadlock.state,
            onChange() {
                modStorage.deviousPadlock.state = true;
            },
        });

        this.createText({
            text: "This padlock is designed such a way that there is absolutely no way to remove it, except through unlocking by either the owner of the padlock (the person that placed it) or any of the players listed as also having the keys.",
            x: 900,
            y: 250,
            width: 800,
            withBackground: true,
            padding: 2
        });
    }
}
