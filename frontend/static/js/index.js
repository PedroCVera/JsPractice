import DashBoard from "./views/DashBoard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
    const routes = [
        { path: "/", view: DashBoard },
		{ path: "/posts", view: Posts },
		{ path: "/settings", view: Settings }
    ];

	//test each route for pontential match
	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path
		};
	});
	let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

	if (!match) {
		match = {
			route: routes[0], //This sets the error (in() => console.log("Viewing DashBoard")  case no path is found) to the dashboard, which can be also customized to a personalized 404 page
			isMatch: true
		};
	}

	const view = new match.route.view();

	document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});