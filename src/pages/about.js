import React, {Component} from 'react';
import './about.css'
import PageCore from "../components/pages/core"
import {Twitter, YourAcclaim, GitHub, LinkedIn, StackOverflow} from '../components/Social'

class About extends Component {

    render() {
        return (
            <PageCore>
                <h1>El Mehdi El Khayati</h1>
                <div style={{
                    textAlign: "center"
                }}>
                    A data enthousiast.
                    <br/>
                    <br/>
                    <Twitter/>
                    <GitHub/>
                    <LinkedIn/>
                    <StackOverflow/>
                    <YourAcclaim/>
                </div>
                <div>
                    <br/>
                    <br/>
                    <p>
                        El Mehdi is a data engineer at IBM, he works in the Moroccan CIC team. He has a
                        serious passion for developing softwares, extracting insights from data, and
                        solving problems.
                        <br/>
                        <br/>
                        He thought about creating a space where he can share articles, open source
                        codes, and ideas. That's why he created this blog.
                        <br/>
                        <br/>
                        El Mehdi used to participate in competitive programming contests. He was one of
                        the founders of the ENSAH competitive programming community. Also he used to be
                        one the [organisers/team members] of the tech event in his school.
                        <br/>
                        <br/>
                        When he is not coding, you'll find him watching movies, he likes cinema, or
                        playing football (honestly his last game was when he left school).
                    </p>
                    <p>
                        Feel free to reach out to him for project collaboration, blog partnerships. You
                        can email him:
                        <a href="mailto:elmehdi.elkhayati@gmail.com">
                            elmehdi.elkhayati@gmail.com
                        </a>{" "}
                        or contact him in one of the social media links mentioned above.
                        <br/>
                        <br/>
                    </p>
                </div>
            </PageCore>
        );
    }
}

export default About;