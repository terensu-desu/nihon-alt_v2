const BlogStoreModule = () => {
	const store = [
		{
			title: "My Transformation from ALT to Super ALT",
			author: "Nate G.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Quisque dignissim tristique ante in vestibulum...",
			url: "#"
		},
		{
			title: "Tips for New ALTs From Grizzled Veterans",
			author: "Matthew K.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle...",
			url: "#"
		},
		{
			title: "Saving Money in Japan - Slash Your Phone Bill",
			author: "Karl G.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Quisque dignissim tristique ante in vestibulum...",
			url: "#"
		},
		{
			title: "Fight Katakana English, Teach Phonics",
			author: "Terence M.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle...",
			url: "#"
		},
		{
			title: "How to Make Everyone Love You",
			author: "Farzana A.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Quisque dignissim tristique ante in vestibulum...",
			url: "#"
		},
		{
			title: "Working with Your JTEs",
			author: "Nicholi K.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle...",
			url: "#"
		},
		{
			title: "Tips for New ALTs From Grizzled Veterans",
			author: "Matthew K.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Quisque dignissim tristique ante in vestibulum...",
			url: "#"
		},
		{
			title: "How to Deploy Your Natural Skills As Teacher",
			author: "Becky A.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Pellentesque we gonna chung gizzle...",
			url: "#"
		},
		{
			title: "Work Smarter, Not Harder!",
			author: "Kevin M.",
			text: "Lorem ipsum pimpin' sit amizzle, consectetuer adipiscing crunk. Yo sapien velizzle, doggy volutpizzle, suscipizzle crackalackin, gravida vizzle, dizzle. Quisque dignissim tristique ante in vestibulum...",
			url: "#"
		}
	];
	function getStoreData(page) {
		if(page === 1) {
			return store.slice(0, 3);
		}
		if(page === 2) {
			return store.slice(3, 6);
		}
		if(page === 3) {
			return store.slice(6, 9);
		}
	}
	function getMaxPage() {
		return Math.round(store.length / 3)
	}
	return {
		getStoreData: getStoreData,
		getMaxPage: getMaxPage
	}
}

export default BlogStoreModule();