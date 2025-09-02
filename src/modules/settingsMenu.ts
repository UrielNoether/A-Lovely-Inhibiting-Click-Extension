import slaveryImage from "@/images/slavery.png";
import { MainSubscreen } from "@/subscreens/mainSubscreen";
import { BaseSubscreen, getCurrentSubscreen, setSubscreen } from "zois-core/ui";


export function loadSettingsMenu(): void {
	PreferenceRegisterExtensionSetting({
		Identifier: "ALICE",
		ButtonText: "ALICE Settings",
		Image: slaveryImage,
		style: { // this is new
    		width: "82px", 
    		height: "82px",
    		"image-rendering": "crisp-edges" // this prevents blurring
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
