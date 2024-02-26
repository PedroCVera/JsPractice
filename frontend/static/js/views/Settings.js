import Aview from "./Aview.js";

export default class extends Aview {
	constructor()
	{
		super();
		this.setTitle("Settings");
	}

	async getHtml() 
	{
		return `
			<h1>Settings</h1>
			<p>
				Configure your settings here!
			</p>
			<p>
			<a href="/" data-link><b>Dashboard</b></a>.
			</p>
		`;
	}
}