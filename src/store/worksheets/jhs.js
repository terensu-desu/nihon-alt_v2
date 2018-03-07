const data = () => {
	const store = {
		jhsyear1: {
			unit1: {
				part1: [
					{
						id: 1111,
						title: "Some title",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					},
					{
						id: 1112,
						title: "Some title2",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					},
					{
						id: 1113,
						title: "Some title3",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					}
				],
				part2: [
					{
						id: 1121,
						title: "Guess Who Game - Famous Characters",
						image: "https://i.imgur.com/2A4DQpG.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					},
					{
						id: 1122,
						title: "Guess Who Game - Famous People",
						image: "https://i.imgur.com/RB0HMfq.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					}
				],
				part3: [
					{
						id: 1111,
						title: "Some title",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					},
					{
						id: 1112,
						title: "Some title2",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					},
					{
						id: 1113,
						title: "Some title3",
						image: "http://next.materializecss.com/images/sample-1.jpg",
						instructions: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
						download: "#"
					}
				],
				part4: null
			}
		}
	};

	const unitInfo = {
		jhsyear1: {
			unit1: [
				"Part 1",
				"Part 2",
				"Part 3",
				"Part 4"
			]
		}
	}

	const pageTitle = {
		jhsyear1: {
			title: "JHS Year 1",
			unit1: "Unit 1",
			unit2: "Unit 2",
			unit3: "Unit 3",
			unit4: "Unit 4",
			unit5: "Unit 5",
			unit6: "Unit 6",
			unit7: "Unit 7",
			unit8: "Unit 8",
			unit9: "Unit 9",
			unit10: "Unit 10",
			unit11: "Unit 11"
		}
	}

	function getStoreData(year, unit, part) {
		if(!store[year] || !store[year][unit] || !store[year][unit][part]) {
			return null;
		}
		return store[year][unit][part];
	}

	function getUnitData(year, unit) {
		return unitInfo[year][unit];
	}

	function getPageTitle(year, unit) {
		return {
			title: pageTitle[year].title,
			unit: pageTitle[year][unit]
		};
	}

	return {
		getStoreData: getStoreData,
		getUnitData: getUnitData,
		getPageTitle: getPageTitle
	}
};

export default data();