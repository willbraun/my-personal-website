<script>
</script>

<main class="scroll-point">
	<section>
		<h1>Hi, I'm Will.</h1>
		<p>I'm a software engineer living in Greenville, SC.</p>
		<!-- Add stuff on focus, skills/technologies list -->
		<!-- headshot img here -->
	</section>
	<section class="scroll-point">
		<h2>Projects</h2>
		<!-- add a project component that shows a picture, name, description, and technologies used -->
		<!-- use grid system, either CSS grid or svelte strap -->
	</section>
	<section class="scroll-point">
		<h2>Blog</h2>
	</section>
	<section class="scroll-point">
		<h2>Contact</h2>
	</section>
</main>

<style>
	main {
		position: absolute;
		top: 0;
		padding-top: var(--header-height);
		width: 100%;
		background-color: var(--background-color);
	}

	section {
		height: 100vh;
		width: 70%;
		margin: 0 auto;
	}

	section > p {
		font-size: 2rem;
	}
</style>
