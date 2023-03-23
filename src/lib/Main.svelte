<script lang="ts">
	const copyEmail = () => {
		navigator.clipboard.writeText('williamhbraun1@gmail.com')
		document.querySelector('.copied').classList.add('show-check')
	}
</script>

<main class="scroll-point">
	<section class="about">
		<div class="about-text">
			<h1>Hi, I'm Will.</h1>
			<p>I'm a software engineer living in Greenville, SC.</p>
		</div>
		<div class="img-box">
			<img class="headshot" src="/src/assets/will-braun-headshot-min.jpg" alt="Will Braun headshot" />
		</div>
	</section>
	<section class="scroll-point projects">
		<h2>Projects</h2>
		<article class="project">
			<h3>Gridlock</h3>
			<div class="gridlock-grid">
				<div class="gridlock-info">
					<p>
						Gridlock is a 2-player strategy game that a friend showed me on a whiteboard, and I thought it
						would be fun to create a digital version. The goal is to connect 4 numbers in a row, using a
						factor of the number from your opponent's previous turn. It is a serverless app I built with
						React and deployed to Github Pages, so it can be played offline once loaded. I designed it for
						mobile, but it will work on any size screen.
					</p>
					<br />
					<p>
						I am most proud of the "Computer - Hard" mode in Settings. It is an AI that I created to play
						against you, and it is quite a challenge! I modeled the AI after chess engines, and it uses a
						minimax algorithm, alpha-beta pruning, and an evaluation function. Good luck beating it!
					</p>
					<a href="https://github.com/willbraun/gridlock" target="_blank">
						<button type="button">
							<p>GitHub</p>
						</button>
					</a>
				</div>
				<div class="gridlock-play">
					<a class="gridlock-link" href="https://willbraun.github.io/gridlock/" target="_blank">
						<img class="gridlock-img" src="/src/assets/gridlock-image.png" alt="Gridlock" />
						<div class="overlay">Click to play</div>
					</a>
				</div>
			</div>
		</article>
		<article class="project">
			<h3>OpenSeat</h3>
			<p>
				When I moved to Greenville, I was working remotely and it was tough to meet new people, so I was
				inspired to create a solution to connect people based on their unique interests. With OpenSeat, you can
				create events to do any activity you'd like with a small group. You can also search for and sign up for
				events that others have posted. It is a full stack app that I build using React, Django, Google and
				Twilio APIs, and deployed to Heroku. This was my final project at Carolina Code School, and I've
				included a video demo of the app.
			</p>
			<div class="openseat-demo" style="position: relative; padding-bottom: 62.5%; height: 0;">
				<iframe
					title="Open Seat Loom video demo"
					src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a"
					frameborder="0"
					allowfullscreen
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
				/>
			</div>
			<a href="https://github.com/willbraun/openseat-app" target="_blank">
				<button type="button">
					<p>GitHub</p>
				</button>
			</a>
		</article>
	</section>
	<section class="scroll-point blog">
		<h2>Blog</h2>
		<p>
			I love software development because there is always more to learn, and I can share what I've learned to help
			others. I write articles about tech I am working with, personal projects, problems I have solved, and life
			as a developer. Check it out!
		</p>
		<a href="https://blog.willbraun.dev" target="_blank">
			<button class="external-button" type="button">
				<p>Visit My Blog</p>
			</button>
		</a>
	</section>
	<section class="scroll-point contact">
		<h2>Contact</h2>
		<div class="contact-info">
			<p>Want to chat? Feel free to reach out!</p>
			<a href="mailto:williamhbraun1@gmail.com" target="_blank" rel="noopener noreferrer">
				<button class="external-button" type="button">
					<p>Say Hello</p>
				</button>
			</a>
			<div class="copy-email">
				<button class="copy-button" type="button" on:click={copyEmail}>
					<p>williamhbraun1@gmail.com</p>
					<img src="/src/assets/copy-icon.svg" alt="copy email" />
				</button>
				<div class="copied">
					<img src="/src/assets/check-solid.svg" alt="copied check mark" />
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	main {
		position: absolute;
		top: 0;
		width: 100%;
		background-color: var(--background-color);
		padding-bottom: 4rem;
	}

	section {
		width: 70%;
		margin: 0 auto;
		padding-top: calc(var(--header-height) + 1rem);
	}

	.about {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.about-text {
		width: 50%;
	}

	section p {
		font-size: 1.5rem;
	}

	.img-box {
		aspect-ratio: 1 / 1;
		width: 40%;
	}

	.headshot {
		width: 100%;
		border-radius: 50%;
	}

	.project {
		margin: 2rem 2rem;
	}

	.gridlock-grid {
		display: flex;
	}

	.gridlock-info {
		width: 60%;
		margin-right: 2rem;
		flex-grow: 1;
	}

	.gridlock-play {
		position: relative;
		min-width: 250px;
		width: 40%;
		max-width: 350px;
		overflow: hidden;
	}

	.gridlock-img {
		max-width: 100%;
		border-radius: 0.75rem;
		transition: 0.1s;
	}

	.gridlock-play:hover img {
		filter: blur(3px) brightness(50%);
	}

	.overlay {
		width: 100%;
		height: 99%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		vertical-align: center;
		color: #fff;
		font-size: 3cqw;
		font-weight: 600;
		border-radius: 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		transition: 0.1s;
	}

	.gridlock-play:hover .overlay {
		opacity: 1;
	}

	.openseat-demo {
		margin: 2rem 0;
	}

	.external-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		background-color: var(--accent-color);
		border: none;
		border-radius: 0.5rem;
	}

	.external-button p {
		color: #000;
		font-weight: 600;
	}

	.blog .external-button {
		margin: 2rem auto 0;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 12rem;
	}

	.copy-email {
		position: relative;
	}

	.copy-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--accent-color);
		background-color: transparent;
		border: 1px solid var(--accent-color);
		border-radius: 0.5rem;
		padding: 0.75rem;
		margin-top: 0.5rem;
	}

	.copy-button img {
		width: 2rem;
		margin-left: 1rem;
		filter: var(--svg-filter-white);
	}

	.copied {
		position: absolute;
		top: 1.2rem;
		right: -3rem;
		transition: 0.1s;
	}

	.copied img {
		width: 2rem;
		filter: var(--svg-filter-white);
	}

	.copied:not(.show-check) {
		opacity: 0;
	}

	.copied.show-check {
		opacity: 1;
	}
</style>
