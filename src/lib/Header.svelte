<script lang="ts">
	let scrollPoints: NodeListOf<HTMLElement>
	let scrollToPoint: Function
	window.onload = () => {
		scrollPoints = document.querySelectorAll('.scroll-point')
		scrollToPoint = index => scrollPoints[index].scrollIntoView(true)
	}
</script>

<header>
	<nav>
		<ul>
			<li><button on:click={() => scrollToPoint(0)}> About </button></li>
			<li><button on:click={() => scrollToPoint(1)}> Projects </button></li>
			<li><button on:click={() => scrollToPoint(2)}> Blog </button></li>
			<li><button on:click={() => scrollToPoint(3)}> Contact </button></li>
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		height: var(--header-height);
		width: 100%;
		z-index: 10;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: right;
		padding: 0 4rem;
	}

	li {
		list-style-type: none;
		margin: 0 0 0 1rem;
		font-size: 1.2rem;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	button:hover {
		text-decoration: underline;
	}
</style>
