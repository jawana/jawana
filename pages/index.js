import React from 'react'
import normalize from 'styles/normalize.css'
import skeleton from 'styles/skeleton.css'
import custom from 'styles/custom.css'

export default () =>
	<div>
		<style dangerouslySetInnerHTML={{ __html: normalize }} />
		<style dangerouslySetInnerHTML={{ __html: skeleton }} />
		<style dangerouslySetInnerHTML={{ __html: custom }} />
		<div className="section hero">
			<div className="container">
				<div className="row">
					<div className="one-half column">
						<h4 className="hero-heading">Start working. So you can grow.</h4>
						<a className="button button-primary" href="#">Try Jawana</a>
					</div>
					<div className="one-half column phones">
						<img className="phone" src="static/images/jawana.gif" />

					</div>
				</div>
			</div>
		</div>

		<div className="section values">
			<div className="container">
				<div className="row">
					<div className="one-third column value">
						<h2 className="value-multiplier">Private</h2>
						<h5 className="value-heading">Manage your profile</h5>
						<p className="value-description">Control what others see or make your profile completely private.</p>
					</div>
					<div className="one-third column value">
						<h2 className="value-multiplier">Fast</h2>
						<h5 className="value-heading">Get started working</h5>
						<p className="value-description">Employers respond in real time so you can get to work quickly.</p>
					</div>
					<div className="one-third column value">
						<h2 className="value-multiplier">Develop</h2>
						<h5 className="value-heading">Grow your skills</h5>
						<p className="value-description">Need more experience in a field? Perfect.</p>
					</div>
				</div>
			</div>
		</div>

		<div className="section get-help">
			<div className="container">
				<h3 className="section-heading">Want to be one of our first users?</h3>
				<p className="section-description">We are looking for energized people who are motivated and can manage themselves.</p>
				<a className="button button-primary" href="#">Contact Us</a>
			</div>
		</div>

		<div className="section categories">
			<div className="container">
				<h3 className="section-heading"></h3>
				<p className="section-description"></p>
				<div className="row">
				</div>
			</div>
		</div>
	</div>
