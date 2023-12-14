import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className="card">
            <span className={props.tier ? "yes" : "no"}>
                {props.tier}
            </span>
            <span className={props.price ? "yes" : "no"}>
                {props.price}
            </span>
            <hr className="separator"/>
            <span className={props.users ? "yes" : "no"}>
                <i className={props.users ? "bi bi-check-lg" : "bi bi-x"}></i>
                {props.users === 1 ? 'Single User' : `${props.users} Users`}
            </span>
            <span className={props.storage ? "yes" : "no"}>
                <i className={props.storage ? "bi bi-check-lg" : "bi bi-x"}></i>
                {props.storage}
            </span>
            <span className={props.unlimited_public_projects ? "yes" : "no"}>
                <i className={props.unlimited_public_projects ? "bi bi-check-lg" : "bi bi-x"}></i>
                Unlimited Public Projects
            </span>
            <span className={props.community_access ? "yes" : "no"}>
                <i className={props.community_access ? "bi bi-check-lg" : "bi bi-x"}></i>
                Community Access
            </span>
            <span className={props.unlimited_private_projects ? "yes" : "no"}>
                <i className={props.unlimited_private_projects ? "bi bi-check-lg" : "bi bi-x"}></i>
                Unlimited Private Projects
            </span>
            <span className={props.dedicated_phone_support ? "yes" : "no"}>
                <i className={props.dedicated_phone_support ? "bi bi-check-lg" : "bi bi-x"}></i>
                Dedicated Phone Support
            </span>
            <span className={props.free_subdomain ? "yes" : "no"}>
                <i className={props.free_subdomain ? "bi bi-check-lg" : "bi bi-x"}></i>
                Free Subdomain
            </span>
            <span className={props.monthly_status_report ? "yes" : "no"}>
                <i className={props.monthly_status_report ? "bi bi-check-lg" : "bi bi-x"}></i>
                Monthly Status Report
            </span>
            <button className="btn">Button</button>
        </div>
    )
}