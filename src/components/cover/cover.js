import React from 'react';
import styles from './cover.module.scss';
import Popover from "../popover/Popover";
import PropTypes from "prop-types";
import { GithubCard, Button, Loading } from "@breathecode/ui-components";

export const Cover = ({title, subtitle, time, background, textColor, status, authors}) => (<div
    style={{
        backgroundImage: `url(${background})`,
        color: textColor
    }}
    className={styles.cover}>
    <div className="container">
        { (status !== "published" && typeof status === "string") ?
            <div className={"alert alert-danger "+styles.alert}>This is a draft lesson and it may still be under review</div>
            : ''
        }
        <div className="row">
            <div className="col">
                <small>{time}</small>
                <h1>{title}</h1>
                { Array.isArray(authors) &&
                    <span>
                        by {authors.map((a,i)=> (<a key={i} className="author badge badge-secondary mr-2" rel="noopener noreferrer nofollow" target="_blank" href={"https://github.com/"+a}>@{<Popover body={<GithubCard gitUsername={a} />}>{a}</Popover>}</a>))}
                    </span>
                }
            </div>
            <div className="col mt-4">
                {subtitle}
            </div>
        </div>
    </div>
</div>);
Cover.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};