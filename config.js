// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Michi',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '1fb14d9b1d962b5f83f1922bbacfe4d3', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '48.775845',
	defaultLongitude: '9.182932',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Drive',
			icon: 'hard-drive',
			link: 'https://drive.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todo',
			icon: 'circle-check',
			link: 'https://docs.proton.me/u/1/doc?mode=open&volumeId=s7ltW6yylApZEFdo7G2-6KfD5G43jZyHDRke445_upJia1lFrLc5ya_DZ9Gf3k9UQrcgf2i7xkOUeGNBecsulQ%3D%3D&linkId=-QB-WHMMApqyorytmch_2Tals0o-N8mLlMvwAFh4MBctdN3IAj_Tj04UXocrQhNv2mH6byWn5aXfVcm7ObWhlA%3D%3D',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'message-square-text',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://music.youtube.com/',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'lo-fi',
					link: 'https://music.youtube.com/watch?v=t8OZPJfpcTM&si=XGynSOjvj8V2AC1O',
				},
				{
					name: 'podcast',
					link: 'https://music.youtube.com/playlist?list=PLycTNLUo2y2EAKEhVfxB9gYo6r0OTMgM0&si=T3OYYoXWRGARXLRD',
				},
				{
					name: 'liked songs',
					link: 'https://music.youtube.com/playlist?list=PL8uEpq8hg-Pbo8TeY3OmEJxCeFT5XEpkX',
				},
				{
					name: 'all songs',
					link: 'https://music.youtube.com/playlist?list=LM',
				},
			],
		},
		{
			icon: 'graduation-cap',
			id: '2',
			links: [
				{
					name: 'school',
					link: 'https://www.mein-mpg.de/',
				},
				{
					name: 'moodle',
					link: 'https://04104371160.moodle.bw.schule/my/',
				},
				{
					name: 'untis',
					link: 'https://hepta.webuntis.com/',
				},
				{
					name: 'notion',
					link: 'https://www.notion.so',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
