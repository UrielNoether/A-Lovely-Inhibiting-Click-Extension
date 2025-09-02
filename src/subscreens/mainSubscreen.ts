import { BaseSubscreen } from "zois-core/ui";
import { DeviousPadlockSubscreen } from "./deviousPadlockSubscreen";
import { RemoteControlSubscreen } from "./remoteControlSubscreen";
import { syncStorage } from "@/modules/storage";
import { MiscSubscreen } from "./miscSubscreen";
import { MOD_DATA, version } from "zois-core";
import { TypeModule } from "zois-core/ui-modules";

export class MainSubscreen extends BaseSubscreen {
    get previousSubscreen(): BaseSubscreen {
        return null;
    }

    load(): void {
        super.load();
        this.createText({ // this is new
                text: `A Lovely Inhibiting Click Extension`,
                x: 100,
                y: 80,// changed from 60
                fontSize: 6// changed from 10
            }).style.cssText += "max-width: 85%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0.1em;";
        
        [
            new DeviousPadlockSubscreen(),
            new MiscSubscreen()
        ].forEach((s, i) => {
            const btn = this.createButton({
                text: s.buttonText,
                x: 120,
                y: 240 + i * 110,
                width: 600,
                padding: 2,
                icon: s.buttonIcon,
            });
            btn.style.fontWeight = "bold";
            btn.addEventListener("click", () => {
                this.setSubscreen(s);
            });
        });

        this.createCard({
            name: `Version`,
            value: MOD_DATA.version,
            anchor: "bottom-right",
            x: 80,
            y: 65,
            modules: {
                value: [
                    new TypeModule({ duration: 850 })
                ]
            }
        });
    }

    exit(): void {
        super.exit();
        syncStorage();
        PreferenceSubscreenExtensionsClear();
    }
}
