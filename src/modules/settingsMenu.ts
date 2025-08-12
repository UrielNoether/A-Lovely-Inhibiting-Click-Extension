import slaveryImage from "@/images/slavery.png";
import { MainSubscreen } from "@/subscreens/mainSubscreen";
import { BaseSubscreen, getCurrentSubscreen, setSubscreen } from "zois-core/ui";


export function loadSettingsMenu(): void {
	PreferenceRegisterExtensionSetting({
		Identifier: "ALICE", //change from "DOGS"
		ButtonText: "ALICE Settings", //change from "DOGS settings"
		Image: slaveryImage,
		style: { //THIS IS NEW
    		width: "82px", 
    		height: "82px",
    		"image-rendering": "crisp-edges" // Prevents blurring
  		},
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
