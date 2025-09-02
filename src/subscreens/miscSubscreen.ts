import { BaseSubscreen } from "zois-core/ui";
import icon from "@/images/settings-misc.png";
import { modStorage } from "@/modules/storage";


export class MiscSubscreen extends BaseSubscreen {
    get name(): string {
        return "Miscellaneous";
    }

    get buttonText(): string {
        return "Miscellaneous";
    }

    get buttonIcon(): string {
        return icon;
    }

    load(): void {
        super.load();
        this.createCheckbox({
            text: "Automatically show changelog",
            x: 100,
            y: 300,
            isChecked: modStorage.misc.autoShowChangelog ?? true,
            onChange() {
                modStorage.misc.autoShowChangelog = !(modStorage.misc.autoShowChangelog ?? true)
            },
        });
    }
}
