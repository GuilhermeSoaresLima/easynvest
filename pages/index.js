import Head from 'next/head'
import Link from 'next/link'

import styles from './../styles/styles';

export default function Home() {
	const classes = styles();
	return (
		<div className={ classes.container }>
			<Head>
				<nav className={ classes.nav }>
					<h1 className={ classes.mainTitle }>Home</h1>
					<ul className={ classes.list }>
						<li>
							<Link href="/formulario">
								<a className={ classes.link }>Registros</a>
							</Link>
						</li>
						<li>
							<Link href="/registros">
								<a className={ classes.link }>Cadastrar</a>
							</Link>
						</li>
					</ul>
				</nav>
			</Head>

			<main >
			</main >

			<footer >
			</footer>
			<style jsx global>{ `
				body {
				margin: 0;
				padding: 0;
				font-size: 18px;
				font-weight: 400;
				line-height: 1.8;
				color: #333;
				font-family: sans-serif;
				}

      `}</style>
		</div> )
}
