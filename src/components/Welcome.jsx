import React from "react";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Welcome = () => {
	const history = useHistory();

	const goToAnalytics = () => {
		history.push("/search/analytics");
	};

	const goToCutoffs = () => {
		history.push("/search/cutoff");
	};

	const goToRankings = () => {
		history.push("/search/ranking");
	};

	return (
		<React.Fragment>
			<Container>
				<Row className="mx-3 my-5">
					<Col className="col-12">
						<h1>
							Welcome to <span title="Tamil Nadu Engineering Admissions">TNEA</span>{" "}
							Analytics
						</h1>
					</Col>
					<Col>
						<p>
							This site helps you analyze each college/university under Anna
							University to gain more historical knowledge about their cutoff/ranking
							wise performance.
						</p>
					</Col>
				</Row>
				<hr className="mx-5 my-5" />
				<Row className="justify-content-around mx-3 my-5">
					<Col className="col-12">
						<h1>Pick a page to begin with</h1>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>Analytics 📊</Card.Title>
								<Card.Text>
									See graph charts for each college department-wise, showing a
									history of rankings an cut-offs from the years 2017 up to 2020.
								</Card.Text>
								<Button onClick={goToAnalytics}>Visit Analytics</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>Cutoffs 👨‍🎓</Card.Title>
								<Card.Text>
									Search for colleges and get a quick view of last year minimum
									cut-offs for each department, year-wise.
								</Card.Text>
								<Button onClick={goToCutoffs}>Visit Cut-offs</Button>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card>
							<Card.Body>
								<Card.Title>Rankings 💹</Card.Title>
								<Card.Text>
									Search for colleges and get a quick view of rankings for each
									department, year-wise.
								</Card.Text>
								<Button onClick={goToRankings}>Visit Rankings</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<hr className="mx-5 my-5" />
				<Row className="mx-3 my-5">
					<Col className="col-12">
						<h1>How is this site different from the official one?</h1>
					</Col>
					<Col>
						<p className="my-2">
							Glad you asked. This site has much more powerful features when compared
							to the{" "}
							<a
								href="https://cutoff.tneaonline.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								official TNEA site
							</a>{" "}
							provided by Anna University. But do note that all data in this site was
							taken from the official site. Below listed are some of the main points
							where this site stands out:
						</p>
						<ul>
							<li className="my-3">
								<b>Super fast</b> &amp; <b>responsive</b> website developed on React
								JS using Bootstrap for styling ⚡
							</li>
							<li className="my-3">
								Has cut-off and ranking <b>data since 2017</b>. The official site
								provides historical data starting from 2018 only 👴
							</li>
							<li className="my-3">
								You can <b>bookmark</b> any page that you visit and load it and use
								it or share it friends. In the official site, you need to open the
								website and make a search every time you need to see an already seen
								data 🔗
							</li>
							<li className="my-3">
								Search colleges by <b>counselling code</b>, which is not doable on
								the official site 🔢
							</li>
							<li className="my-3">
								Analytics data available as <b>graphs</b> to see the trend in
								cut-off and ranking history. This will help you make a good{" "}
								<b>prediction</b> as to what might be the cutoff for the upcoming
								year 📈
							</li>
							<li className="my-3">
								The site is hosted on <b>Google Servers</b> in India, which makes it{" "}
								<b>readily available</b> for any user in India ⏩
							</li>
							<li className="my-3">
								All data and search forms are <b>loaded as you type</b> your query.
								Which means you need not look for the submit button and wait for the
								response every time you make a new query ✨
							</li>
							<li className="my-3">
								All data is <b>loaded to your device</b> on-demand and{" "}
								<b>cached locally</b>. Which means that once you have loaded the
								website completely, everything runs locally and there is virtually{" "}
								<b>no lag</b> or wait times for DB queries or server requests 🔥
							</li>
							<li className="my-3">
								This site is totally <b>ad-free</b> and <b>available forever</b>,
								even after the TNEA admissions are over 🕐
							</li>
							<li className="my-3">
								Average time to get data for a specific college in the official site
								is around <b>20 seconds</b>. In this site it takes just{" "}
								<b>5 seconds</b>. You can even bookmark the search link and revisit
								it again 🚀
							</li>
							<li>
								You can{" "}
								<a
									href="https://www.linkedin.com/in/anushibinj/"
									target="_blank"
									rel="noopener noreferrer"
								>
									get in touch with me
								</a>{" "}
								and provide feedback to improve the way the data is represented here
								and even get more <b>new features</b>. I guarantee that any good new
								feature will be completed within a maximum of <b>1 week</b> 🔬
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default Welcome;
