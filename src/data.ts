export interface Project {
	name: string
	description: string
	imgPath: string
	imgAlt: string
	actionButtonText: string
	actionUrl: string
	githubUrl: string
	techUsed: string[]
}

export const projects: Project[] = [
	{
		name: 'Gridlock',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci iure odio officia nesciunt maiores voluptatum, error blanditiis beatae dolore facilis illum aspernatur tempore totam laborum commodi ad delectus ullam.',
		imgPath: '/src/assets/gridlock-image.png',
		imgAlt: 'Gridlock',
		actionButtonText: 'Click to Play',
		actionUrl: 'www.google.com',
		githubUrl: 'www.google.com',
		techUsed: ['React', 'React Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Github Pages'],
	},
	{
		name: 'gridlock',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci iure odio officia nesciunt maiores voluptatum, error blanditiis beatae dolore facilis illum aspernatur tempore totam laborum commodi ad delectus ullam.',
		imgPath: '/src/assets/will-braun-headshot-min.jpg',
		imgAlt: 'Gridlock',
		actionButtonText: 'Play Here',
		actionUrl: 'www.google.com',
		githubUrl: 'www.google.com',
		techUsed: ['React', 'React Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Github Pages'],
	},
	{
		name: 'gridlock',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci iure odio officia nesciunt maiores voluptatum, error blanditiis beatae dolore facilis illum aspernatur tempore totam laborum commodi ad delectus ullam.',
		imgPath: '/src/assets/will-braun-headshot-min.jpg',
		imgAlt: 'Gridlock',
		actionButtonText: 'Play Here',
		actionUrl: 'www.google.com',
		githubUrl: 'www.google.com',
		techUsed: ['React', 'React Bootstrap', 'HTML', 'CSS', 'JavaScript', 'Github Pages'],
	},
]
