import React from 'react';
import DesenhoBotaoLadim from '../MenuLadim/DesenhoBotaoLadim'
import './Toolbar.css';



const toolbar = props => (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                        
                <div className="toolbar__logo"><a href="/">RIMMT</a></div>
                <div className="spacer"/> 
                <div className="toolbar_navigations-items">
                    <ul>
                        <li><a href="/carrinho"><img src="../img/carrim.png" alt="carrinho" /></a></li>
                    </ul>
                </div>
                <div>   
                    <DesenhoBotaoLadim click={props.menuClickHandler}/>
                </div>    
            </nav>
        </header>
)

export default toolbar;