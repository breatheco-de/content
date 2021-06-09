import React from "react";
import IconEs from '../../assets/svg/es.svg';
import IconEn from '../../assets/svg/en.svg';
import { Link } from 'gatsby';
import './styles.scss';
const icons = {
    es: IconEs,
    en: IconEn
};

const isBrowser = typeof window !== "undefined"

export const LanguageSwitcher = ({ current, translations }) => {
    
    const CurrentIcon = icons[current];
    return (<div className="language-switcher">
        <ul>
        {
            Object.entries(translations).filter(lang => lang[0] !== current).map( lang => {
                let query = () => {
                    if(isBrowser){
                        const querystring = window.location.search
                        return querystring
                    }
                }
                const LangIcon = icons[lang[0]];
                return (<li><Link to={"/"+lang[1]+ `/${query()}`}><LangIcon /></Link></li>);
            })
        }
        </ul>
        <span><CurrentIcon /></span>
    </div>);
};