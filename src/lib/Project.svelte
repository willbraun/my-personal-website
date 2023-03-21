<script lang="ts">
	import type { Project } from './../data'
	export let data: Project
	let { name, description, imgPath, imgAlt, actionButtonText, actionUrl, githubUrl, techUsed } = data
</script>

<article>
	<h3>{name}</h3>
	<img src={imgPath} alt={imgAlt} />
	<p>{description}</p>
	<a href={actionUrl} target="_blank">
		<button>
			<p>{actionButtonText}</p>
			<img
				class="external-link-icon"
				src="/src/assets/arrow-up-right-from-square-solid.svg"
				alt="external link icon"
			/>
		</button>
	</a>
	<a href={githubUrl} target="_blank">
		<button>
			<p>View on GitHub</p>
			<img
				class="external-link-icon"
				src="/src/assets/arrow-up-right-from-square-solid.svg"
				alt="external link icon"
			/>
		</button>
	</a>
	<div style="position: relative; padding-bottom: 62.5%; height: 0;">
		<iframe
			src="https://www.loom.com/embed/ec1cf09e45434ab29c6b323d3856634a"
			frameborder="0"
			webkitallowfullscreen
			mozallowfullscreen
			allowfullscreen
			style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
		/>
	</div>
</article>
