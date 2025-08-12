import slaveryImage from "@/images/slavery.png";
import { MainSubscreen } from "@/subscreens/mainSubscreen";
import { BaseSubscreen, getCurrentSubscreen, setSubscreen } from "zois-core/ui";


export function loadSettingsMenu(): void {
	PreferenceRegisterExtensionSetting({
		Identifier: "ALICE", //change from "DOGS"
		ButtonText: "ALICE Settings", //change from "DOGS settings"
		Image: slaveryImage,
		click: () => {
			getCurrentSubscreen()?.click();
		},
		run: () => {
			getCurrentSubscreen()?.run();
		},
		exit: () => false,
		load: () => {
			setSubscreen(new MainSubscreen());
		}
	});
}
