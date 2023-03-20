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
		<!-- add a project component that shows a picture, name, description, and technologies used -->
		<!-- use grid system, either CSS grid or svelte strap -->
	</section>
	<section class="scroll-point">
		<h2>Blog</h2>
		<p>
			I love software development because there is always more to learn, and I can share what I've learned to help
			others. I write articles about tech I am working with, personal projects, problems I have solved, and
			general life as a developer. Check it out!
		</p>
		<a class="blog-link" href="https://blog.willbraun.dev" target="_blank">
			<button class="blog-button">
				<p>My Blog</p>
				<img
					class="external-link-icon"
					src="/src/assets/arrow-up-right-from-square-solid.svg"
					alt="external link icon"
				/>
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

	section p {
		font-size: 2rem;
	}

	.about {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.about-text {
		width: 50%;
	}

	.img-box {
		aspect-ratio: 1 / 1;
		width: 40%;
	}

	.headshot {
		width: 100%;
		border-radius: 50%;
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
		margin: 0 1rem 0 0;
		color: #000;
		font-weight: 600;
	}

	.external-link-icon {
		width: 2rem;
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
