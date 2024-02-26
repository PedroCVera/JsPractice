import Aview from "./Aview.js";

export default class extends Aview {
	constructor()
	{
		super();
		this.setTitle("Dashboard");
	}

	async getHtml() 
	{
		return `
			<h1>Welcome to the DashBoard!</h1>
			<p>
				This is the dashboard!
			</p>
			<p>
			<a href="/posts" data-link><b>View recent posts</b></a>.
			</p>
		`;
	}
}