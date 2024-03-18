import Aview from "./Aview.js";

export default class extends Aview {
	constructor()
	{
		super();
		this.setTitle("Posts");
	}

	async getHtml() 
	{
		return `
			<h1>Posts!</h1>
			<p>
				Let's read some posts!
			</p>
			<p>
			<b><a href="/" data-link>Home.</a></b>
			</p>
		`;
	}
}