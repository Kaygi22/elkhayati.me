import {Link} from "gatsby"
import {faStackOverflow ,faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faAngleDoubleUp, faHeart} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import config from '../config/config'
import React from 'react';

export const Twitter = ({
    url = `${config.TwitterLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faTwitter}/></Link>
    )
}


export const Facebook = ({
    url = `${config.FacebookLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faFacebook}/></Link>
    )
}

export const LinkedIn = ({
    url = `${config.LinkedinLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faLinkedin}/></Link>
    )
}

export const GitHub = ({
    url = `${config.GithubLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faGithub}/></Link>
    )
}

export const StackOverflow = ({
    url = `${config.StackOverflowLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faStackOverflow}/></Link>
    )
}

export const YourAcclaim = ({
    url = `${config.YourAcclaimLink}`
}) => {
    return (
        <Link
            to={url}
            target="_blank"
            style={{
            textDecoration: 'none',
            color: 'white',
            boxShadow: "none",
            marginRight: "10px"
        }}><FontAwesomeIcon
            style={{
            fontSize: "30px"
        }}
            icon={faAngleDoubleUp}/></Link>
    )
}


export const HeartIcon = () => {
    return (
        <FontAwesomeIcon
            style={{
            fontSize: "15px",
            color: "red"
        }}
            icon={faHeart}/>
    )
}