import React from 'react';
import styles from './cover.module.scss';
import Popover from "../popover/Popover";
import PropTypes from "prop-types";
import { GithubCard, TableOfContents } from "@breathecode/ui-components";
import { BrowserView,
  MobileView,
  isBrowser,
  isMobile} from "react-device-detect";


const getContent = (nodes) => {
    return !Array.isArray(nodes) ? '' : nodes.map(n => n.type !== "text" ? getContent(n.children) : n.value).join('')
}
export const Cover = ({title, subtitle, time, background, textColor, status, authors, headings, history}) => {
    console.log("headings: ", history);
    const source = !Array.isArray(headings) ? null : headings.map(h => {
        return { 
            to: "#"+h.properties.id,
            level: h.tagName.replace("h", ""), 
            content: getContent(h.children),
        }
    });
    //console.log("Source", source);
    return (<div
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
                <div className="col-12 col-md-6">
                    <small>{time}</small>
                    <h1>{title}</h1>
                    { Array.isArray(authors) &&

                        <span>
                            by {authors.map((a,i)=> (<a key={i} className="author badge badge-secondary mr-2" rel="noopener noreferrer nofollow" target="_blank" href={"https://github.com/"+a}>
                            {(isBrowser)?(<Popover body={<GithubCard gitUsername={a} />}>{a}</Popover>):(a)}
                            </a>))
                            }
                        </span>

                    }
                </div>
                <div className="d-none d-md-inline-block col-md-6 mt-4">
                    {subtitle}
                </div>
            </div>
        { source && false &&
                <div>
                    {console.log("Source", source)}
                    <TableOfContents 
                        className=""
                        type="ordered"
                        source={source}
                        sanitizeHeading={(inner) => {
                            console.log("Sanitizing: ",inner);
                            return inner;
                        }}
                    />
                </div>
            }
        </div>
    </div>);
};
Cover.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};