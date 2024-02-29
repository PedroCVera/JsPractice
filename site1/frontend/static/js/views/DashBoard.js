import Aview from "./Aview.js";

export default class extends Aview {
	constructor()
	{
		super();
		this.setTitle("Home");
	}

	async getHtml() 
	{
		return `
			<h1>Welcome to the DashBoard!</h1>
			<p>
				This is the dashboard!
			</p>
			<p>
			<b><a href="/posts" data-link>View recent posts</a>.</b>
			</p>
		`;
	}
}