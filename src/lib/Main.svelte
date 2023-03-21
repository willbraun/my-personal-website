<script>
</script>

<main class="scroll-point">
	<section class="about">
		<div class="about-text">
			<h1>Hi, I'm Will.</h1>
			<p>I'm a software engineer living in Greenville, SC.</p>
			<!-- Add stuff on focus, skills/technologies list -->
		</div>
		<div class="img-box">
			<img class="headshot" src="/src/assets/will-braun-headshot-min.jpg" alt="Will Braun headshot" />
		</div>
	</section>
	<section class="scroll-point">
		<h2>Projects</h2>
		<article class="project">
			<h3>Gridlock</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quod non adipisci delectus
				voluptatum dolor pariatur voluptatem blanditiis cupiditate ullam in aliquid, eius unde, assumenda
				placeat voluptatibus recusandae iste consectetur!
			</p>
			<a href="https://willbraun.github.io/gridlock/" target="_blank">
				<button>
					<p>Play Gridlock</p>
				</button>
			</a>
			<a href="https://github.com/willbraun/gridlock" target="_blank">
				<button>
					<p>GitHub</p>
				</button>
			</a>
		</article>
		<article class="project">
			<h3>OpenSeat</h3>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, quod non adipisci delectus
				voluptatum dolor pariatur voluptatem blanditiis cupiditate ullam in aliquid, eius unde, assumenda
				placeat voluptatibus recusandae iste consectetur!
			</p>
			<div style="position: relative; padding-bottom: 62.5%; height: 0;">
				<iframe
					title="Open Seat Loom video demo"
					src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a"
					frameborder="0"
					allowfullscreen
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
				/>
			</div>
			<a href="https://github.com/willbraun/openseat-app" target="_blank">
				<button>
					<p>GitHub</p>
				</button>
			</a>
		</article>
	</section>
	<section class="scroll-point">
		<h2>Blog</h2>
		<p>
			I love software development because there is always more to learn, and I can share what I've learned to help
			others. I write articles about tech I am working with, personal projects, problems I have solved, and life
			as a developer. Check it out!
		</p>
		<a class="blog-link" href="https://blog.willbraun.dev" target="_blank">
			<button class="blog-button">
				<p>Visit My Blog</p>
			</button>
		</a>
	</section>
	<section class="scroll-point">
		<h2>Contact</h2>
		<div class="contact-text">
			<p>Want to chat? Feel free to reach out!</p>
			<p>williamhbraun1@gmail.com</p>
		</div>
		<div class="icons">
			<a href="mailto:williamhbraun1@gmail.com">
				<button class="social-icon">
					<img src="/src/assets/envelope.svg" alt="email envolepe icon" />
				</button>
			</a>
			<a href="https://www.linkedin.com/in/williamhbraun/" target="_blank">
				<button class="social-icon">
					<img src="/src/assets/linkedin-in.svg" alt="email envolepe icon" />
				</button>
			</a>
			<a href="https://github.com/willbraun" target="_blank">
				<button class="social-icon">
					<img src="/src/assets/github.svg" alt="email envolepe icon" />
				</button>
			</a>
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

	.blog-link {
		text-decoration: none;
	}

	.blog-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 2rem auto 0;
		padding: 0.75rem;
		background-color: var(--accent-color);
		border: none;
		border-radius: 0.2rem;
	}

	.blog-button p {
		color: #000;
		font-weight: 600;
	}

	.contact-text {
		margin: auto;
	}

	.icons {
		width: 50%;
		margin: 2rem auto;
		display: flex;
		justify-content: space-between;
	}

	.social-icon {
		width: 4rem;
		height: 4rem;
		background-color: var(--accent-color);
		border-radius: 0.2rem;
		border: none;
	}

	.social-icon img {
		width: 100%;
	}
</style>
